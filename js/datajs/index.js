let products = [

  {
    id: 2,
    title: 'Tiffin Chocolate',
    description: 'You can never go wrong with chocolate.',
    price: 2250,
    quantity: 0,
    image: 'assets/valentine/TiffinChocolate.jpg'
  },
  {
    id: 3,
    title: 'Assorted flower basket',
    description: 'A basket of superb flowers.',
    price: 1700,
    quantity: 0,
    image: 'assets/valentine/vals1.jpg'
  },
  {
    id: 4,
    title: 'Brilliant Bouquet',
    description: 'A garland of radiant flowers.',
    price: 2250,
    quantity: 0,
    image: 'assets/valentine/vals2.jpg'
  },
  {
    id: 5,
    title: 'Cute  bouquet',
    description: 'bouquet of fresh flowers.',
    price: 2300,
    quantity: 0,
    image: 'assets/valentine/IMG_20170110_135859_571.jpg'
  }
]


let products2 = [{
    id: 1,
    title: 'Awesome handy love bouquet',
    description: 'Bundle of flowers filled with warmth to calm the heart.',
    price: 2000,
    quantity: 0,
    image: 'assets/birthday/awesome-love-bouquet.jpg'
  },
  {
    id: 2,
    title: 'Birthday hamper',
    description: 'Custom wrapped gift hampers.',
    price: 2000,
    quantity: 0,
    image: 'assets/birthday/birthday-hamper.jpg'
  },
  {
    id: 3,
    title: 'Baby flower basket hamper',
    description: 'Birthday gift hamper with an adorable doll.',
    price: 4000,
    quantity: 0,
    image: 'assets/birthday/baby-flower-basket.jpg'
  },
  {
    id: 4,
    title: 'Delicious gift collection',
    description: 'Basketful of wonderful gifts.',
    price: 5500,
    quantity: 0,
    image: 'assets/birthday/delicious-gift-collection.jpg'
  }
]

let products3 = [
    {
      id: 1,
      title: 'Assorted Flower Basket',
      description: 'Assorted Flower basket full of joy.',
      price: 1700,
      quantity: 0,
      image: 'assets/get-well/assorted-flower-basket.jpg'
    },
    {
      id: 2,
      title: 'Health will Basket (Assorted)',
      description: 'Wish loved ones a quick recovery withn these flowers.',
      price: 1500,
      quantity: 0,
      image: 'assets/get-well/health-will.jpg'
    },
    {
      id: 3,
      title: 'Get-well-soon cake',
      description: 'Custom made delicious cake .',
      price: 1500,
      quantity: 0,
      image: 'assets/get-well/get-well-cake.jpg'
    },
    {
      id: 4,
      title: 'Delicious nature',
      description: 'A bundle of healthy fruits and fresh juice.',
      price: 3500,
      quantity: 0,
      image: 'assets/get-well/delicious-nature.jpg'
    }
]

var index = new Vue({
  el: '#index',
  data: {
    products: products,
    products2: products2,
    products3: products3
  }
})