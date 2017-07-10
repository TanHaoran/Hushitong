
安装ionic
sudo cnpm install -g cordova ionic 

安装依赖
npm install 或 cnpm install

#
调试
ionic serve

添加打包平台
cordova platform add android 
cordova platform add ios 

编译
ionic build android --prod
ionic build ios

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