//

var config = {
    apiKey: "AIzaSyB8vafV9JwQh-3iJxe5tUBUI0qZY2PhvuU",
    authDomain: "vueclient.firebaseapp.com",
    databaseURL: "https://vueclient.firebaseio.com",
    storageBucket: "vueclient.appspot.com",
    messagingSenderId: "217572007754"
  };
  firebase.initializeApp(config);

var messageRef = firebase.database().ref('messages')


//var app
var app = new Vue({
  el: '#fapp',
  data: {
    newMessage: {
      email: '',
      message: ''
    }
  },
  //bind to firebase
  firebase: {
    messages: messageRef
  },
  methods: {
    sendMessage: function (){
      messageRef.push(this.newMessage)
      this.newMessage.email=""
      this.newMessage.message=""
    }
  }
})