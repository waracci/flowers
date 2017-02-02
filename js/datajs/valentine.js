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
      title: 'chocolate and wine hamper',
      description: 'Surprise your loved one with this hamper.',
      price: 2200,
      quantity: 0,
      image: '../assets/valentine/chocolate-wine.jpg'
    },
    {
      id: 8,
      title: 'gift hampers',
      description: 'love gift ideas hamper.',
      price: '',
      quantity: 0,
      image: '../assets/valentine/love gift ideas hamper.jpg'
    },
    {
      id: 9,
      title: 'loved one flower',
      description: 'A rose flower for your loved one.',
      price: 700,
      quantity: 0,
      image: '../assets/valentine/one I love=ksh 700.jpg'
    },
    {
      id: 1,
      title: 'Red chocolate',
      description: 'chocolate gift for a loved one.',
      price: '',
      quantity: 0,
      image: '../assets/valentine/red-chocolate.jpg'
    },
    {
      id: 2,
      title: 'Tiffin Chocolate',
      description: 'You can never go wrong with chocolate.',
      price: 2250,
      quantity: 0,
      image: '../assets/valentine/TiffinChocolate.jpg'
    },
    {
      id: 3,
      title: 'Assorted flower basket',
      description: 'A basket of superb flowers for your valentine one.',
      price: 1700,
      quantity: 0,
      image: '../assets/valentine/vals1.jpg'
    },
    {
      id: 4,
      title: 'Brilliant Bouquet',
      description: 'A garland of radiant flowers.',
      price: 2250,
      quantity: 0,
      image: '../assets/valentine/vals2.jpg'
    },
    {
      id: 5,
      title: 'Cute  bouquet',
      description: 'bouquet of fresh flowers.',
      price: 2300,
      quantity: 0,
      image: '../assets/valentine/IMG_20170110_135859_571.jpg'
    }
  ]
var valentine = new Vue({
  el: '#valentine',
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