const {resolve} = require('path')
const fs = require('fs')

const path = resolve(__dirname,'txt/hello.txt')


// readFile
function readFileApi(){
    const path1 = resolve(__dirname,'txt/hello.txt')
    fs.readFile(path1,{encoding:'utf8'},(err,data)=>{
        if(err){
            return console.error(err);
        }
        console.log(data);
    })
    const helloTxt = fs.readFileSync(path1,{encoding:'utf-8'})
    console.log('helloTxt',helloTxt);
}


// open
function openApi(){
    const buf = new Buffer.alloc(11)
    fs.open(path,'r',(err,fd)=>{
        if(err){
            return console.error(err);
        }
        console.log('文件打开');
        fs.read(fd,buf,0,buf.length,0,(err,bytes)=>{
            if(err){
                return console.error(err);
            }
            console.log(bytes);
            console.log(buf.slice(0,bytes).toString());
            fs.close(fd,(err)=>{
                if(err) return console.error(err);
                console.log('文件关闭成功');
            })
        })
    })
}
openApi()

// stat
function statApi(){
    fs.stat(path,(err,stats)=>{
        if(err){
            return console.error(err);
        }
        console.log('文件读取成功');
        console.log(stats);
    })
}
// statApi()