const path = require('path')


// basename
const basename = path.win32.basename('F:\projects\code-node\img-edit.html')
// const basename = path.basename('/foo/bar/baz/asdf/quux.html')

console.log('basename',basename);
console.log('resolve',path.resolve('txt','../test'));