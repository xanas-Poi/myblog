<template>
  <nav id="header">
    <ul>
      <li class="logo">
        <a href="/"><img src="../assets/logo.png" alt="LOGO"/></a>
      </li>
      <li><a href="/">博客</a></li>
      <li><a href="/bout">关于</a></li>
      <li><a href="http://localhost:8081/admin" target="blank">管理</a></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2000;
  background: white;
  .logo {
    position: absolute;
    width: 200px;
    height: 48px;
    margin-left: -190px;
    margin-top: -35px;
    & img {
      width: 100%;
    }
  }
  ul {
    list-style-type: none;
    padding: 7px 0 7px 0;
    overflow: hidden; /* 会消除所有的子元素的浮动，然后进行自适应高度计算，因为父元素没有设定高度，所以不会进行裁剪 */
    border-bottom: 1px solid rgb(220, 220, 220);
    li {
      float: left;
      position: relative;
      left: 180px;
      font-size: 14px;
      font-weight: 800;
      margin: 3px 20px 3px 20px;
      padding: 5px 10px 5px 10px;
      & a {
        text-decoration: none;
        color: black;
      }
      & a:visited {
        color: black;
      }
    }
  }
}
</style>
