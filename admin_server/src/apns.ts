import Apn from 'apn'
import path from 'path'


// p8鉴权
let token = {
  key: path.resolve(__dirname, '../../static', 'AuthKey_3BP626372L.p8'),
  keyId: '3BP626372L',
  teamId: '498V664Q2W'
}

// apns cert
let p12 = {
  cert: path.resolve(__dirname, '../../static', 'apns-dev-cert.pem'),
  key: path.resolve(__dirname, '../../static', 'apns-dev-key.pem'),
  passphrase: '111111',
}


// 设置privider
const privider = new Apn.Provider({
  token: token,
  // ...p12,
  production: false,
})



// 设置推送内容

const nps = {
  title: 'hello world',
}


const notifation = new Apn.Notification()
notifation.topic = 'com.xiaoer.001'
notifation.pushType = 'alert'
notifation.alert = '22ee'

// notifation.payload = { 'messageFrom': 'John Appleseed' };



privider.send(notifation, '6f8b50ec59da24c8197ecd50bb4d9fcb8f25fd03febd62e881562548fd441711').then(res => {
  // console.log(res.failed[0].error)
  console.log(res)
}).catch(err => {
  console.log(1)
  console.log(err)
})

privider.shutdown()
