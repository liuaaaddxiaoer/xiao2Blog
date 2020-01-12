"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apn_1 = __importDefault(require("apn"));
var path_1 = __importDefault(require("path"));
// p8鉴权
var token = {
    key: path_1.default.resolve(__dirname, '../../static', 'AuthKey_3BP626372L.p8'),
    keyId: '3BP626372L',
    teamId: '498V664Q2W'
};
// apns cert
var p12 = {
    cert: path_1.default.resolve(__dirname, '../../static', 'apns-dev-cert.pem'),
    key: path_1.default.resolve(__dirname, '../../static', 'apns-dev-key.pem'),
    passphrase: '111111',
};
// 设置privider
var privider = new apn_1.default.Provider({
    token: token,
    // ...p12,
    production: false,
});
// 设置推送内容
var nps = {
    title: 'hello world',
};
var notifation = new apn_1.default.Notification();
notifation.topic = 'com.xiaoer.001';
notifation.pushType = 'alert';
notifation.alert = '22ee';
// notifation.payload = { 'messageFrom': 'John Appleseed' };
privider.send(notifation, '6f8b50ec59da24c8197ecd50bb4d9fcb8f25fd03febd62e881562548fd441711').then(function (res) {
    // console.log(res.failed[0].error)
    console.log(res);
}).catch(function (err) {
    console.log(1);
    console.log(err);
});
privider.shutdown();
