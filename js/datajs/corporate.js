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
        title: 'Outdoor Event ', 
        description: 'We oranize and facilitate outdoor events.',
        price: 2000,
        quantity: 0,
        image: '../assets/corporate/corporate-events.jpg'
      },
      {
        id: 2,
        title: 'corporate events', 
        description: 'Executive events with products showcasing.',
        price: '',
        quantity: 0,
        image: '../assets/corporate/corporate-gallery.jpg'
      },
      {
        id: 3,
        title: 'Expo and exhibition', 
        description: 'Contact us for succesful expos and exhibitions.',
        price: 4000,
        quantity: 0,
        image: '../assets/corporate/corporate-gallery1.jpg'
      },
      {
        id: 4,
        title: 'Corporate parties', 
        description: 'We organize corporate parties.',
        price: 5500,
        quantity: 0,
        image: '../assets/corporate/corporate-gallery2.jpg'
      },
      {
        id: 5,
        title: 'AGM venues', 
        description: 'Annual General Meeting venue decorations.',
        price: 6000,
        quantity: 0,
        image: '../assets/corporate/corporate-gallery3.jpg'
      },
      {
        id: 6,
        title: 'Farewell parties', 
        description: 'Give your colleagues a farewell party to remember.',
        price: 4500,
        quantity: 0,
        image: '../assets/corporate/corporate-gallery4.jpg'
      },
      {
        id: 7,
        title: 'Team building events', 
        description: 'Group synergy is vital for succesful teams.',
        price: 2250,
        quantity: 0,
        image: '../assets/corporate/corporate-gallery5.jpg'
      },
      {
        id: 8,
        title: 'Executive meetings', 
        description: 'Well dcorated and organised meeting venues.',
        price: 4000,
        quantity: 0,
        image: '../assets/corporate/corporate-gallery6.jpg'
      },
      {
        id: 9,
        title: 'corporate dinners', 
        description: 'Dine in fabulous venues.',
        price: 2350,
        quantity: 0,
        image: '../assets/corporate/corporate-gallery7.jpg'
      }
    ]
// vue instance to display corporate products 
var corporate_category = new Vue({
  el: '#corporate',
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
