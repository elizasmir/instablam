### Where can I find this project? 
here https://insta-blam.web.app/

### How to test push-notifications
1. Open site https://insta-blam.web.app/
2. Open dev console or your browser
3. Find and copy your token in console log(e.g. *efTEAAC0vS_KNZGQlM20my:APA91bGDNgv5poIgU7Q3TPnV2oqXcdcwG2JnFLS0g3VViOouQCyiUQ7NS-qW6RVV40BjJrkd5vHPbb3YoxjLNOrXPrQEjqzGtMlwczxNgzG1UhZz_3Z0KQGyouOl5ENnykWI5oLVQdWC*)
4. Send request with curl:
```bash
curl -X POST -H "Authorization: key=AAAA90gxTmU:APA91bHBuUF3MPupVAxl1VdtqFHqZQ_n8gVTtEUfU4s5wse2xVRuqnYUaKIHkbuzvMPF2-yjrZ01pexR-80B_e0i_RCHtYnMVOVWQ3Al_H-hkXmG4wEtOvsh23QuseOiw_M_pyJBU6vn" -H "Content-Type: application/json" -d '{
  "to": "YOUR_TOKEN_FROM_CONSOLE",
  "notification": {
    "title": "FCM Message",
    "body": "This is an FCM Message",
    "icon": "./img/icons/android-chrome-192x192.png"
  }
}' https://fcm.googleapis.com/fcm/send
```