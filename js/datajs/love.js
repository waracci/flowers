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
      title: 'Always Love you',
      description: 'Bouquet of fresh flowers to express your love.',
      price: 2500,
      quantity: 0,
      image: '../assets/love/always-love.jpg'
    },
    {
      id: 2,
      title: 'Always Love (Assorted)',
      description: 'Bouquet of mixed fresh flowers.',
      price: 2500,
      quantity: 0,
      image: '../assets/love/always-love-mix.jpg'
    },
    {
      id: 3,
      title: 'Assorted superb basket',
      description: 'A basket of superb flowers for your loved one.',
      price: 2250,
      quantity: 0,
      image: '../assets/love/assorted-superb.jpg'
    },
    {
      id: 4,
      title: 'Brilliant Assorted Special Mix',
      description: 'A bundle of radiant flowers.',
      price: 1600,
      quantity: 0,
      image: '../assets/love/brilliant-assorted.jpg'
    },
    {
      id: 5,
      title: 'Fabulous Mixed flowers basket hamper',
      description: 'Enchant your loved one with this lovely garland.',
      price: 3800,
      quantity: 0,
      image: '../assets/love/fabulous-hamper.jpg'
    },
    {
      id: 6,
      title: 'Small Dozen Hand Roses',
      description: 'A handy bouquet of roses.',
      price: 1700,
      quantity: 0,
      image: '../assets/love/small-dozen.jpg'
    },
    {
      id: 7,
      title: 'Golden basket',
      description: 'Cherish your special someone with a lovely bouquet.',
      price: 2000,
      quantity: 0,
      image: '../assets/love/golden-basket.jpg'
    },
    {
      id: 8,
      title: 'Pinky Basket',
      description: 'Shower her with pink flowers in a basket.',
      price: 1700,
      quantity: 0,
      image: '../assets/love/pinky-basket.jpg'
    },
    {
      id: 9,
      title: 'Tropical Flowers Bouquet',
      description: 'A bouquet of tropical flowers.',
      price: 1500,
      quantity: 0,
      image: '../assets/love/tropical-flowers.jpg'
    },
  ]

var love = new Vue({
  el: '#love',
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