var messageRef = firebase.database().ref('messages')
var app = new Vue({
  el: '#fapp',
  data: {
    verified: !1,
    newMessage: {
      email: '',
      message: ''
    }    
  },
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