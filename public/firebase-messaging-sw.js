// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.5/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
const firebaseConfig = {
  apiKey: "AIzaSyC7x_bVvwu6S40sxNZs16xXWHFtTh4d46s",
  authDomain: "draft-pwa-tutorial.firebaseapp.com",
  databaseURL: "https://draft-pwa-tutorial.firebaseio.com",
  projectId: "draft-pwa-tutorial",
  storageBucket: "draft-pwa-tutorial.appspot.com",
  messagingSenderId: "1062068112997",
  appId: "1:1062068112997:web:6452e45c1d2a47f446808c",
  measurementId: "G-TC2BN2SY7B"
};
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});