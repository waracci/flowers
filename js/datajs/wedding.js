var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB8vafV9JwQh-3iJxe5tUBUI0qZY2PhvuU",
  authDomain: "vueclient.firebaseapp.com",
  databaseURL: "https://vueclient.firebaseio.com"
}
firebase.initializeApp(config);

var usersRef = firebase.database().ref('users')
var cartItem = firebase.database().ref('selectedCartItem')

// vue instance to display birthday products 
let products = [
      {
      id: 1,
      title: 'Limo Services',
      description: 'Elegant Limousine for the special day.',
      price: '',
      quantity: 0,
      image: '../assets/wedding/sweet-limo.jpg'
    },
    {
      id: 2,
      title: 'Bridal Bouquets',
      description: 'Bridal bouquets available in all shapes and sizes.',
      price: '',
      quantity: 0,
      image: '../assets/wedding/table-setup.png'
    },
    {
      id: 3,
      title: 'Reception Venue Set-up',
      description: 'We do reception venues decorations.',
      price: '',
      quantity: 0,
      image: '../assets/wedding/bridal-bouquet.png'
    }
  ]
var wedding = new Vue({
  el: '#wedding',
  data: {
    items: [],
    products: products,
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
        if (this.isValid){
          usersRef.push(this.newUser)
          cartItem.push(this.items)
          this.newUser.name=""
          this.newUser.email=""
          this.items = ""
        }
      }
  }
 
})