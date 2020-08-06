let webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BLfwKeqN2d0LYWP-neQcFr993VovjnT-NV1WeQ_jY5EqDnGD3eanItV9RNCQ7FreVIGLRcidhtDcsv_CR9lKRAE",
    "privateKey": "cefzxVUcGMbajAotPW9CDLV0TZZddOLhoSjrurnqCIc"
};


webPush.setVapidDetails(
    'mailto:aryarizky2303@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
let pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cFFuUf1rS_E:APA91bGGkPwBei81mDDtgkVB8usKWQpqPpHYIN5LrufLEbK4HMAaemBkMZwztAf7zKkMMjvB3arESIh5hpCG2ceJnlBoWzDrjwg4lZWlprSZhS1lrkz-4G0DXCA2cvSPUafQZfMMccHk",
    "keys": {
        "p256dh": "BE7uh6iVZyFJTGr006Bbolkb7DOfOvlkS07xoEiA2aPgjA1JRzww91WfO0tKZyfw2Io9r5bFdmmxk1ZaQGvZWRM=",
        "auth": "Efuyb9uGu0BNQFDKlpOiNQ=="
    }
};
let payload = 'Come gather with football fans and find your favorite club';

let options = {
    gcmAPIKey: '449861338037',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);