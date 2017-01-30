// vue instance to display corporate products 

var corporate_category = new Vue({
  el: '#corporate',
  data: {
    items: [
      {
        id: 1,
        title: 'Outdoor Event ', 
        description: 'We oranize and facilitate outdoor events.',
        price: 2000,
        image: '../assets/corporate/corporate-events.jpg'
      },
      {
        id: 2,
        title: 'corporate events', 
        description: 'Executive events with products showcasing.',
        price: '',
        image: '../assets/corporate/corporate-gallery.jpg'
      },
      {
        id: 3,
        title: 'Expo and exhibition', 
        description: 'Contact us for succesful expos and exhibitions.',
        price: 4000,
        image: '../assets/corporate/corporate-gallery1.jpg'
      },
      {
        id: 4,
        title: 'Corporate parties', 
        description: 'We organize corporate parties.',
        price: 5500,
        image: '../assets/corporate/corporate-gallery2.jpg'
      },
      {
        id: 5,
        title: 'AGM venues', 
        description: 'Annual General Meeting venue decorations.',
        price: 6000,
        image: '../assets/corporate/corporate-gallery3.jpg'
      },
      {
        id: 6,
        title: 'Farewell parties', 
        description: 'Give your colleagues a farewell party to remember.',
        price: 4500,
        image: '../assets/corporate/corporate-gallery4.jpg'
      },
      {
        id: 7,
        title: 'Team building events', 
        description: 'Group synergy is vital for succesful teams.',
        price: 2250,
        image: '../assets/corporate/corporate-gallery5.jpg'
      },
      {
        id: 8,
        title: 'Executive meetings', 
        description: 'Well dcorated and organised meeting venues.',
        price: 4000,
        image: '../assets/corporate/corporate-gallery6.jpg'
      },
      {
        id: 9,
        title: 'corporate dinners', 
        description: 'Dine in fabulous venues.',
        price: 2350,
        image: '../assets/corporate/corporate-gallery7.jpg'
      }
    ]
  }
})