import marked from "marked";
var rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
export default {
  compiledMarkdown: function(content) {
    return marked(content, { sanitize: true });
  }
};

// const fs = require('fs')
// const path = require('path')
// const join = path.join
// const resolve = (dir) => path.join(__dirname, '../', dir),

// function getComponentEntries(path) {
//     let files = fs.readdirSync(resolve(path));
//     const componentEntries = files.reduce((ret, item) => {
//         const itemPath = join(path, item)
//         const isDir = fs.statSync(itemPath).isDirectory();
//         if (isDir) {
//             ret[item] = resolve(join(itemPath, 'index.js'))
//         } else {
//         	const [name] = item.split('.')
//             ret[name] = resolve(`${itemPath}`)
//         }
//         return ret
//     }, {})
//     console.dir(componentEntries)
//     return componentEntries
// }

// getComponentEntries('views')
