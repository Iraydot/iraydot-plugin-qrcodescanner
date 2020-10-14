# Iraydot Plugin QRcodeScanner
==============================

用于Cordova/ionic的跨平台二维码扫描

遵循[Cordova Plugin 开发规范](https://cordova.apache.org/docs/en/latest/plugin_ref/spec.html), 因此兼容[Plugman](https://github.com/apache/cordova-plugman)

##安装

```
# ionic cordova plugin add iraydot-plugin-qrcodescanner
# npm install ionic-native-qrcode
```

## 支持平台

- Android

## 插件使用

本插件会创建一个包含`scan(success, fail)`方法的`cordova.plugins.barcodeScanner`对象

说明：本插件的aar依赖包来源是由基于[Zbar](https://github.com/ZBar/ZBar)的开源库[BGAQRCode](https://github.com/bingoogolapple/BGAQRCode-Android)项目修改而来

`success`和`fail`是回调方法.成功时返回一个包含`text`和`cancelled`属性的对象.此对象的`text`是二维码的文本数据,`cancelled`标识用户是否取消扫描.
 
 完整的示例:

 ```js
    // Angular示例
    import { QRcodeScanner } from 'ionic-native-qrcode/ngx';

    constructor(private qrcodeScanner: QRcodeScanner) { }

    ...

    this.qrcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
    }).catch(err => {
        console.log('Error', err);
    });
 ```

 ## Licence ##

The MIT License