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
      title: 'Assorted Flower Basket',
      description: 'Assorted Flower basket full of joy.',
      price: 1700,
      quantity: 0,
      image: '../assets/get-well/assorted-flower-basket.jpg'
    },
    {
      id: 2,
      title: 'Health will Basket (Assorted)',
      description: 'Wish loved ones a quick recovery withn these flowers.',
      price: 1500,
      quantity: 0,
      image: '../assets/get-well/health-will.jpg'
    },
    {
      id: 3,
      title: 'Get-well-soon cake',
      description: 'Custom made delicious cake .',
      price: 1500,
      quantity: 0,
      image: '../assets/get-well/get-well-cake.jpg'
    },
    {
      id: 4,
      title: 'Delicious nature',
      description: 'A bundle of healthy fruits and fresh juice.',
      price: 3500,
      quantity: 0,
      image: '../assets/get-well/delicious-nature.jpg'
    },
    {
      id: 5,
      title: 'Deluxe Orchard',
      description: 'Fresh fruits; for that vital supply of vitamins.',
      price: 3800,
      quantity: 0,
      image: '../assets/get-well/deluxe-orchard.jpg'
    },
    {
      id: 6,
      title: 'Executive Healer water bouquet',
      description: 'A bouquet of Rich fresh flowers.',
      price: 2250,
      quantity: 0,
      image: '../assets/get-well/executive-healer.jpg'
    },
    {
      id: 7,
      title: 'Friendship water bouquet',
      description: 'The perfect bouquet of flowers to take to a friend.',
      price: 2000,
      quantity: 0,
      image: '../assets/get-well/friendship-bouquet.png'
    },
    {
      id: 8,
      title: 'Get Well Hamper Basket',
      description: 'Assorted Flower to wish a loved one quick recovery.',
      price: 1700,
      quantity: 0,
      image: '../assets/get-well/get-well-hamper.jpg'
    },
    {
      id: 9,
      title: 'Health Essence Package',
      description: 'An array of items bundled into a package.',
      price: 5000,
      quantity: 0,
      image: '../assets/get-well/health-essence.jpg'
    },
  ]
var getWell = new Vue({
  el: '#getwell',
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
