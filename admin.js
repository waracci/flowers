var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB8vafV9JwQh-3iJxe5tUBUI0qZY2PhvuU",
  authDomain: "vueclient.firebaseapp.com",
  databaseURL: "https://vueclient.firebaseio.com"
}
firebase.initializeApp(config);

var usersRef = firebase.database().ref('users').orderByKey();
var cartItem = firebase.database().ref('selectedCartItem')
var messagesRef = firebase.database().ref('messages')

// vue instance to display funeral products 
var funeral_category = new Vue({
  el: '#admin',
  data: {
    
  },
  // firebase binding
  firebase: {
    users: usersRef,
    selectedCartItem: cartItem,
    messages: messagesRef
  }
  
 
})