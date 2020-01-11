import Apn from 'apn'
import path from 'path'


// p8鉴权
let token = {
  key: path.resolve(__dirname, '../static', 'AuthKey_3BP626372L.p8'),
  keyId: '3BP626372L',
  teamId: '3BP626372L'
}


// 设置privider
const privider = new Apn.Provider({
  token: token
})

// 设置推送内容
const notifation = new Apn.Notification()
notifation.topic = 'com.xiaoer.001'

privider.send(notifation, '1')
