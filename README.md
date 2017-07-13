
1. 安装依赖
npm install 或 cnpm install

2. 安装ionic
windows: cnpm install -g cordova ionic
Linux: sudo cnpm install -g cordova ionic

#####
调试
ionic serve

添加打包平台
cordova platform add android -nofetch (不检测Api.js)
cordova platform add ios -nofetch (不检测Api.js)

编译
ionic cordova build android --prod (会先调试通过后编译)
cordova build android (直接生成apk)

#################### 2017-7-13 11:11:15更新 ################################

压缩
 npm run minify

但是–consolelogs参数不能单独使用，需配合–livereload参数使用，即：
在虚拟机上调试
$ ionic run/emulate android/ios --livereload --consolelogs

或者使用简写版本：

$ ionic run/emulate android/ios -l -c


新建组件
ionic g page myPage

√ Create app/pages/my-page/my-page.html
√ Create app/pages/my-page/my-page.ts
√ Create app/pages/my-page/my-page.scss
#

生成图标，启动页
 ionic resources --icon
 ionic resources --splash
