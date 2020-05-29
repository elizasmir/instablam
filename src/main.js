import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
// import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount('#app');
Vue.prototype.Caman = window.Caman;

import * as firebase from "firebase";


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

const messaging = firebase.messaging();

messaging.usePublicVapidKey("BB1uuq7VNSNh6neHB978hlIk3fQPqFHrFy4fUS5oM2DtH4yNNdjWNXxAbdWJbBpM0D_5-x_iRS_KHqLqVseWzyE"); // 1. Generate a new key pair

// Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');

  // Get Token
  messaging.getToken().then((token) => {
    console.log('Use this token for sending push notifications:')
    console.log(token)
  })

}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});

// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
// });
