// import path from 'path'
import imagemin from 'imagemin';
// import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';


// const files = await imagemin(['../../images/original/*.{jpg,png}'], {
    const files = await imagemin(['../../images/original/ditchagent.png'], {
	destination: '../../images/build',
	plugins: [
		// imageminJpegtran(),
		imageminPngquant({
            // 速度:number(1-11)
            speed:4,
            // 删除可选的元数据:boolean
            strip:false,
            // 压缩质量:[min:number(0-1),max:number(0-1)]
			quality: [0.1, 0.5],
            // 抖动级别：number(0-1) | false
            dithering:1,
            // 打印详细的状态消息
            verbose:false,
            // 截断颜色的最低有效位数
            // posterize:number,
            // 要优化的缓冲区和流
            // input:Buffer | Stream
		})
	]
});

console.log(files);