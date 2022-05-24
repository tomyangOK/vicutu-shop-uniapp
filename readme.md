```

1. 布局必须采用flex，css单位使用rem（750为整屏宽度，当屏幕超过960时，默认为375），可以使用百分比
2. common目录为项目公共的文件
	common
	│   └──utils					共用js辅助函数库文件（可以用.js、.vue）
	│   └──css					共用样式文件
3. components里存放符合vue规范的自定义组件
	components					vue自定义组件
	|   └──custom.vue				vue中的自定义组件
4. wxcomponents里存放微信小程序平台的自定义组件
	wxcomponents					微信小程序自定义组件存放目录
	│   └──custom					微信小程序自定义组件
	│		├─index.js
	│		├─index.wxml
	│		├─index.json
	│		└─index.wxss
5. pages中存放固定的页面文件
6. static中存放所有静态资源（图片、音视频等，不可存放css、js），图片不超过40kb会被转为base64，超过40kb的图片需要上传到网络上
7. 所有资源的引入最好都统一采用@符号开头的绝对路径方式（@代表项目根目录）
8. manifest.json文件中的mode值用以指定当前运行的环境模式（可选值：development、production）
9. 名字全部采用小写，分词采用下划线

```
