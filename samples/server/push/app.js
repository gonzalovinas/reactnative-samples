var admin = require("firebase-admin");

var serviceAccount = require('./services-account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  var message = {
  notification: {
    title: '$GOOG up 1.43% on the day',
    body: '$GOOG gained 11.80 points to close at 835.67, up 1.43% on the day.'
    },
   // token: 'j2DHv7Rmx8:APA91bFSu6bR5DwEvlk4LcjMuhvHTb_hyUl5GJRjNn5GCBBs-koFQG3VghSIwhtx9XGsiC-0wOmrS9mvw7KSryWRukrjovQILNNfGpcq7qPsffPbYuPVuP_eK03ikkXupW6abrOd5Tg_I5dn5vAGe51hlyuBfZdTmA'
    topic: 'todo'
};


admin.messaging().send(message).then(res=>{
    console.log("Success",res)
}).catch(err=>{
    console.log("Error:",err)
})