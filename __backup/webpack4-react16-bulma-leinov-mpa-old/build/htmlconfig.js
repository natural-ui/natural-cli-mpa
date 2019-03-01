/**
 * @file 页面html配置
 * @author:leinov
 * @date: 2018-10-09
 * @update: 2018-11-05
 * @use: 动态配置html页面，获取src下每个文件下的pageinfo.json内容,解析到HtmlWebpackPlugin中
 */

const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
const getFilePath = require("./getFilepath");
let htmlArr = [];

getFilePath("./pages").map((item)=>{
	let infoJson ={},infoData={};
	try{
		// 读取pageinfo.json文件内容，
		// 如果在页面目录下没有找到pageinfo.json 捕获异常
		infoJson = fs.readFileSync(`./pages/${item}/pageinfo.json`,"utf-8");//
		infoData = JSON.parse(infoJson);
	} catch (err){
		infoData = {};
	}
	htmlArr.push(new HtmlWebpackPlugin({
		title:infoData.title ? infoData.title : "webpack,react多页面架构",
		meta:{
			keywords: infoData.keywords ? infoData.keywords : "webpack，react，github",
			description:infoData.description ? infoData.description : "这是一个webpack，react多页面架构"
		},
		chunks:[`${item}/${item}`], //引入的js
		template: "./public/template.html",
        // html位置
		filename : item == "index" ? "index.html" : `${item}/index.html`,
        // 压缩html
		minify:{
			collapseWhitespace: true,
			preserveLineBreaks: true
		},
	}));
});

module.exports = htmlArr;