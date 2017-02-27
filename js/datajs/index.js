let products = [

  {
    id: 2,
    title: 'Tiffin Chocolate',
    description: 'You can never go wrong with chocolate.',
    price: 3500,
    quantity: 0,
    image: 'assets/valentine/teddy and water bouquet.jpg'
  },
  {
    id: 3,
    title: 'Assorted flower basket',
    description: 'A basket of superb flowers.',
    price: 3000,
    quantity: 0,
    image: 'assets/valentine/water bouquet and chocholate.jpg'
  },
  {
    id: 4,
    title: 'Brilliant Bouquet',
    description: 'A garland of radiant flowers.',
    price: 5000,
    quantity: 0,
    image: 'assets/valentine/water bouquet teddy bear and chocolate.jpg'
  },
  {
    id: 5,
    title: 'Cute  bouquet',
    description: 'bouquet of fresh flowers.',
    price: 4000,
    quantity: 0,
    image: 'assets/valentine/wine water bouquet.jpg'
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
        id: 7,
        title: 'Impressive blossomin flower', 
        description: 'A bouquet of lovely blossomin flowers.',
        price: 2250,
        quantity: 0,
        image: 'assets/birthday/impressive-blossoming-flower.jpg'
      },
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
      image: 'assets/get-well/executive-healer.jpg'
    },
    {
      id: 4,
      title: 'Delicious nature',
      description: 'A bundle of healthy fruits and fresh juice.',
      price: 3500,
      quantity: 0,
      image: 'assets/get-well/friendship-bouquet.png'
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

$('.owl-carousel').owlCarousel({
    stagePadding: 50,/*the little visible images at the end of the carousel*/
    loop:true,
    rtl: false,
    lazyLoad:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items: 2
        },
        1000:{
            items:3
        },
      1200:{
          items: 3
      }
    }
})