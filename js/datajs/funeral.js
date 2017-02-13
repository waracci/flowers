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
        title: 'Funeral flowers set', 
        description: 'complete wreath set of flowers.',
        price: 2000,
        quantity: 0,
        image: '../assets/funeral/funeral-flowers-set.jpg'
      },
      {
        id: 2,
        title: 'Garland of white and pink flowers', 
        description: 'Pink and white flowers.',
        price: '',
        quantity: 0,
        image: '../assets/funeral/pink-white.jpg'
      },
      {
        id: 3,
        title: 'Casket Roses', 
        description: 'Roses to be placed on the casket.',
        price: 4000,
        quantity: 0,
        image: '../assets/funeral/casket-roses.jpg'
      },
      {
        id: 4,
        title: 'Flower cross', 
        description: 'Flowers cross wreath.',
        price: 5500,
        quantity: 0,
        image: '../assets/funeral/flower-cross.jpg'
      },
      {
        id: 5,
        title: 'Heart shaped flowers', 
        description: 'Heart shaped flowers.',
        price: 6000,
        quantity: 0,
        image: '../assets/funeral/executive-heart.jpg'
      },
      {
        id: 6,
        title: 'Floral spread', 
        description: 'Floral spreads to be placed on the casket.',
        price: 4500,
        quantity: 0,
        image: '../assets/funeral/floral-casket-spread.jpg'
      },
      {
        id: 7,
        title: 'Floral tributes', 
        description: 'Custom floral tributes.',
        price: 2250,
        quantity: 0,
        image: '../assets/funeral/mum-tribute.jpg'
      },
      {
        id: 8,
        title: 'Custom Floral tributes', 
        description: 'Floral tributes in an array of flowers.',
        price: 4000,
        quantity: 0,
        image: '../assets/funeral/grandpa-tribute.jpg'
      },
      {
        id: 9,
        title: 'Pillow tributes', 
        description: 'Custom pillow tributes.',
        price: 2350,
        quantity: 0,
        image: '../assets/funeral/mum-pillow-tribute.jpg'
      }
    ]
// vue instance to display funeral products 
var funeral_category = new Vue({
  el: '#funeral',
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
      orders = []
      if (this.isValid){
        this.items.push({user: this.newUser.name}  )
        cartItem.push( this.items )
        usersRef.push(this.newUser)
        this.newUser.name=""
        this.newUser.email=""
        this.items = ""
      }
    }
  }
 
})
