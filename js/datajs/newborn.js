var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var newbornRef = firebase.database().ref('newborn')
var usersRef = firebase.database().ref('users')
var cartItem = firebase.database().ref('selectedCartItem')
var newBorn = new Vue({
  el: '#newborn',
  data: {
    items: [],
    showCart: false,
    verified: false,
    sendCartDetails: !1,
    newUser: {
      name: "",
      email: ""
    }
  },
  // firebase binding
  firebase: {
    newborn: newbornRef,
    users: usersRef,
    selectedCartItem: cartItem 
  },
  computed: {
    total() {
      var total = 0;
      for(var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    },
    validation: function () {
      return {
        name: !!this.newUser.name.trim(),
        email: emailRE.test(this.newUser.email)
      }
    },
    isValid: function () {
      var validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  methods: {
    addToCart(item) {
      item.quantity += 1;
      this.items.push(item);
    },
    removeFromCart(item) {
      item.quantity -= 1;
      this.items.splice(this.items.indexOf(item), 1);
    },
    clearCart() {
      this.items = ""
    },
      addUser: function (){
      orders = []
      if (this.isValid){
        this.items.push({user: this.newUser.name}  )
        for (var i=0; i<this.items.length;i++){
          delete this.items[i]['.key']
        }
        cartItem.push( this.items )
        usersRef.push(this.newUser)
        this.newUser.name=""
        this.newUser.email=""
        this.items = ""
      }
    }
  }
 
})
