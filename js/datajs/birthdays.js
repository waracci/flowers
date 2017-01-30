// vue instance to display birtday products 

var birthday_category = new Vue({
  el: '#birthday',
  data: {
    items: [
      {
        id: 1,
        title: 'Awesome handy love bouquet', 
        description: 'Bundle of flowers filled with warmth to calm the heart.',
        price: 2000,
        image: '../assets/birthday/awesome-love-bouquet.jpg'
      },
      {
        id: 2,
        title: 'Birthday hamper', 
        description: 'Custom wrapped gift hampers.',
        price: '',
        image: '../assets/birthday/birthday-hamper.jpg'
      },
      {
        id: 3,
        title: 'Baby flower basket hamper', 
        description: 'Birthday gift hamper with an adorable doll.',
        price: 4000,
        image: '../assets/birthday/baby-flower-basket.jpg'
      },
      {
        id: 4,
        title: 'Delicious gift collection', 
        description: 'Basketful of wonderful gifts.',
        price: 5500,
        image: '../assets/birthday/delicious-gift-collection.jpg'
      },
      {
        id: 5,
        title: 'Doll with chocolate basket hamper', 
        description: 'Adorable goodies: a doll, lots of chocolate and flowers.',
        price: 6000,
        image: '../assets/birthday/doll-chocolate-gift-hamper.jpg'
      },
      {
        id: 6,
        title: 'Floral hamper', 
        description: 'A floral gift basket and gifts.',
        price: 4500,
        image: '../assets/birthday/floral-gift-sided.jpg'
      },
      {
        id: 7,
        title: 'Impressive blossomin flower', 
        description: 'A bouquet of lovely blossomin flowers.',
        price: 2250,
        image: '../assets/birthday/impressive-blossoming-flower.jpg'
      },
      {
        id: 8,
        title: 'My love birthday hamper', 
        description: 'An amazing gift for a loved one.',
        price: 4000,
        image: '../assets/birthday/my-love-birthday.jpg'
      },
      {
        id: 9,
        title: 'Sweet sweet pink flower', 
        description: 'Lovely pink flowers in a vase.',
        price: 2350,
        image: '../assets/birthday/sweet-pink.jpg'
      }
    ]
  }
})