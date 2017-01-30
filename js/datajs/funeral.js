// vue instance to display funeral products 

var funeral_category = new Vue({
  el: '#funeral',
  data: {
    items: [
      {
        id: 1,
        title: 'Funeral flowers set', 
        description: 'complete wreath set of flowers.',
        price: 2000,
        image: '../assets/funeral/funeral-flowers-set.jpg'
      },
      {
        id: 2,
        title: 'Garland of white and pink flowers', 
        description: 'Pink and white flowers.',
        price: '',
        image: '../assets/funeral/pink-white.jpg'
      },
      {
        id: 3,
        title: 'Casket Roses', 
        description: 'Roses to be placed on the casket.',
        price: 4000,
        image: '../assets/funeral/casket-roses.jpg'
      },
      {
        id: 4,
        title: 'Flower cross', 
        description: 'Flowers cross wreath.',
        price: 5500,
        image: '../assets/funeral/flower-cross.jpg'
      },
      {
        id: 5,
        title: 'Heart shaped flowers', 
        description: 'Heart shaped flowers.',
        price: 6000,
        image: '../assets/funeral/executive-heart.jpg'
      },
      {
        id: 6,
        title: 'Floral spread', 
        description: 'Floral spreads to be placed on the casket.',
        price: 4500,
        image: '../assets/funeral/floral-casket-spread.jpg'
      },
      {
        id: 7,
        title: 'Floral tributes', 
        description: 'Custom floral tributes.',
        price: 2250,
        image: '../assets/funeral/mum-tribute.jpg'
      },
      {
        id: 8,
        title: 'Custom Floral tributes', 
        description: 'Floral tributes in an array of flowers.',
        price: 4000,
        image: '../assets/funeral/grandpa-tribute.jpg'
      },
      {
        id: 9,
        title: 'Pillow tributes', 
        description: 'Custom pillow tributes.',
        price: 2350,
        image: '../assets/funeral/mum-pillow-tribute.jpg'
      }
    ]
  }
})