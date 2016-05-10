'use strict';

angular.module('controllers', ['ui.bootstrap', 'ngAnimate'])
    .controller('controllers', function($scope, $http, $uibModal) {
        $scope.downloadRecord = [{
            "name": "JAVA包",
            "note": "WAP支付",
            "class": "icon-java",
            "url":"http://img.jubaobar.cn/static/openpay-doc/java-wap-demo.zip"
        }, {
            "name": "JAVA包",
            "note": "PC端",
            "class": "icon-java",
            "url":"http://img.jubaobar.cn/static/openpay-doc/java-demo.zip"
        }, {
            "name": ".NET包",
            "note": "WAP支付",
            "class": "icon-windows",
            "url":"http://img.jubaobar.cn/static/openpay-doc/aspx-wap-demo.zip"

        },  {
            "name": ".NET包",
            "note": "PC端",
            "class": "icon-windows",
            "url":"http://img.jubaobar.cn/static/openpay-doc/aspx-demo.zip"

        },{
            "name": "PHP包",
            "note": "WAP支付",
            "class": "icon-php",
            "url":"http://img.jubaobar.cn/static/openpay-doc/php-demo.zip"
        }, {
            "name": "PHP包",
            "note": "PC端",
            "class": "icon-php",
            "url":"http://img.jubaobar.cn/static/openpay-doc/php-demo.zipp"
        }, {
            "name": "COCS2D",
            "note": "SDK开发包",
            "class": "icon-weibiaoti4zhuanhuan",
            "url":"http://img.jubaobar.cn/static/openpay-doc/cocos-demo.zip"
        }, {
            "name": "IOS包",
            "note": "SDK开发包",
            "class": "icon-ios",
            "url":"http://img.jubaobar.cn/static/openpay-doc/ios_sdk.zip"
        }, {
            "name": "Andorid",
            "note": "SDK开发包",
            "class": "icon-ios",
            "url":"http://img.jubaobar.cn/static/openpay-doc/new-sdk-demo.zip"
        }, {
            "name": "商户文档",
            "note": "下载接入文档",
            "class": "icon-iconanzhuo",
            "url":"http://img.jubaobar.cn/static/openpay-doc/jubaopay-guide.pdf"
        }];
        $scope.paymentRecord = [{
            "name": "支付宝",
            "note": "移动支付",
            "class": "icon-zhifubao1"
        }, {
            "name": "支付宝",
            "note": "扫码支付",
            "class": "icon-zhifubao1"
        }, {
            "name": "微信支付",
            "note": "APP支付",
            "class": "icon-weixinzhifu"
        }, {
            "name": "银联",
            "note": "银联支付",
            "class": "icon-yinlian"
        }, {
            "name": "Apple",
            "note": "Apple Pay",
            "class": "icon-apple"
        }, {
            "name": "百度钱包",
            "note": "移动网页支付",
            "class": "icon-baiduqianbao"
        }, {
            "name": "易宝支付",
            "note": "移动网页支付",
            "class": "icon-yibao"
        }];
        $scope.costRecord = [{
            "channel": "支付宝",
            "type": "PC网站",
            "cost": "/",
            "time": "实时到帐"
        }, {
            "channel": "支付宝",
            "type": "手机网站",
            "cost": "/",
            "time": "实时到帐"
        }, {
            "channel": "支付宝",
            "type": "APP",
            "cost": "/",
            "time": "实时到帐"
        }, {
            "channel": "支付宝",
            "type": "扫码支付",
            "cost": "/",
            "time": "实时到帐"
        }, {
            "channel": "微信",
            "type": "公共帐号",
            "cost": "300/年",
            "time": "T+1、T+7"
        }, {
            "channel": "微信",
            "type": "APP",
            "cost": "300/年",
            "time": "T+1、T+7"
        }, {
            "channel": "微信",
            "type": "扫码支付",
            "cost": "300/年",
            "time": "T+1、T+7"
        }, {
            "channel": "京东支付",
            "type": "0-50万",
            "cost": "",
            "time": "T+7"
        }, {
            "channel": "京东支付",
            "type": "50万-200万",
            "cost": "",
            "time": "T+7"
        }, {
            "channel": "京东支付",
            "type": "200以上",
            "cost": "",
            "time": "T+7"
        }, {
            "channel": "银联",
            "type": "所有形式",
            "cost": "2000-3000",
            "time": "T+1"
        }, {
            "channel": "百度钱包",
            "type": "所有形式",
            "cost": "2000-3000",
            "time": "T+1"
        }, {
            "channel": "快钱",
            "type": "所有形式",
            "cost": "2000-3000",
            "time": "T+1"
        }, {
            "channel": "易宝",
            "type": "所有形式",
            "cost": "2000-3000",
            "time": "T+1"
        }]
    });