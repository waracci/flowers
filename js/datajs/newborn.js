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
      id: 7,
      title: 'Prince Bear and Water Bouquet',
      description: 'A lovely bear doll and a water bouquet.',
      price: 4000,
      quantity: 0,
      image: '../assets/newborn/prince-bear.jpg'
    },
    {
      id: 8,
      title: 'Pretty Bear Basket',
      description: 'Pretty bear basket and a generous bouquet of flowers.',
      price: 3500,
      quantity: 0,
      image: '../assets/newborn/pretty-bear.jpg'
    },
    {
      id: 9,
      title: 'Impressive Baloon and flower basket',
      description: 'A bouquet of flowers and a cute balloon.',
      price: 1500,
      quantity: 0,
      image: '../assets/newborn/impressive-baloon.jpg'
    },
    {
      id: 1,
      title: 'Baby Girl Bouquet',
      description: 'Bouquet of fresh flowers to welcome that baby girl.',
      price: 2250,
      quantity: 0,
      image: '../assets/newborn/delightful-basket.jpg'
    },
    {
      id: 2,
      title: 'Baby Boy Bouquet',
      description: 'Bouquet of mixed fresh flowers to welcome that baby boy.',
      price: 2250,
      quantity: 0,
      image: '../assets/newborn/baby-boy.jpg'
    },
    {
      id: 3,
      title: 'Assorted flower basket',
      description: 'A basket of superb flowers for your newborn one.',
      price: 1700,
      quantity: 0,
      image: '../assets/newborn/assorted-flower.jpg'
    },
    {
      id: 4,
      title: 'Brilliant Bouquet',
      description: 'A garland of radiant flowers.',
      price: 2250,
      quantity: 0,
      image: '../assets/newborn/brilliant-bouquet.jpg'
    },
    {
      id: 5,
      title: 'Cute girl water bouquet',
      description: 'Water bouquet of fresh flowers.',
      price: 2300,
      quantity: 0,
      image: '../assets/newborn/Gorgious angel basket= ksh 2000.jpg'
    }
  ]
var newBorn = new Vue({
  el: '#newborn',
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