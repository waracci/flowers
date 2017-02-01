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
        title: 'Awesome handy love bouquet', 
        description: 'Bundle of flowers filled with warmth to calm the heart.',
        price: 2000,
        quantity: 0,
        image: '../assets/birthday/awesome-love-bouquet.jpg'
      },
      {
        id: 2,
        title: 'Birthday hamper', 
        description: 'Custom wrapped gift hampers.',
        price: 2000,
        quantity: 0,
        image: '../assets/birthday/birthday-hamper.jpg'
      },
      {
        id: 3,
        title: 'Baby flower basket hamper', 
        description: 'Birthday gift hamper with an adorable doll.',
        price: 4000,
        quantity: 0,
        image: '../assets/birthday/baby-flower-basket.jpg'
      },
      {
        id: 4,
        title: 'Delicious gift collection', 
        description: 'Basketful of wonderful gifts.',
        price: 5500,
        quantity: 0,
        image: '../assets/birthday/delicious-gift-collection.jpg'
      },
      {
        id: 5,
        title: 'Doll with chocolate basket hamper', 
        description: 'Adorable goodies: a doll, lots of chocolate and flowers.',
        price: 6000,
        quantity: 0,
        image: '../assets/birthday/doll-chocolate-gift-hamper.jpg'
      },
      {
        id: 6,
        title: 'Floral hamper', 
        description: 'A floral gift basket and gifts.',
        price: 4500,
        quantity: 0,
        image: '../assets/birthday/floral-gift-sided.jpg'
      },
      {
        id: 7,
        title: 'Impressive blossomin flower', 
        description: 'A bouquet of lovely blossomin flowers.',
        price: 2250,
        quantity: 0,
        image: '../assets/birthday/impressive-blossoming-flower.jpg'
      },
      {
        id: 8,
        title: 'My love birthday hamper', 
        description: 'An amazing gift for a loved one.',
        price: 4000,
        quantity: 0,
        image: '../assets/birthday/my-love-birthday.jpg'
      },
      {
        id: 9,
        title: 'Sweet sweet pink flower', 
        description: 'Lovely pink flowers in a vase.',
        price: 2350,
        quantity: 0,
        image: '../assets/birthday/sweet-pink.jpg'
      }
    ]
// vue instance to display birtday products 

var birthday_category = new Vue({
  el: '#birthday',
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
  // fireebase binding
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