const { Admin } = require('../models/admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { jwt_secret, expiresIn } = require('../server.base.config');

function getToken(payload = {}) {
    return jwt.sign(payload, jwt_secret, { expiresIn: expiresIn })
}


module.exports = {

    //注册管理员
    register: async (v) => {
         //查询邮箱是否存在
        const hasEmail = await Admin.findOne({
            where: {
                email: v.email
            }
        });
        if (hasEmail) {
            return msg = (`邮箱${v.email}已经存在`)
        };
        //储存管理员用户
        const admin = new Admin();
        admin.email = v.email
        admin.password = v.password
        admin.save()
    },

    login: async (v) => {
        //查询用户是否存在
        const hasAdmin = await Admin.findOne({
            where: {
                email: v.email,
            }
        });
        if (!hasAdmin) {
            return msg = (`用户${v.email}未找到`)
        };
        // 验证密码是否正确
        try {
            const Verification = bcrypt.compareSync(v.password, hasAdmin.password);
            if(!Verification) {
                return msg = ('密码不正确')
            }
        } catch (error) {
            return msg = ('比较加密密码时执行出错!')
        }
        let token = getToken({ id:hasAdmin.id, email:hasAdmin.email,})
        return token
   },
}