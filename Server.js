require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const BASE_URL = "https://shopifybackend-81fg.onrender.com/api/product-subscription"//process.env.BASE_URL;

app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'public')));

app.get('/api/products/images', (req, res) => {
  const imageFilenames = [
    'orange.jpg',
    'chocolate.jpg',
    'vannila.jpg',
    'avacado.jpg',
    'banana.jpg',
    'blueberry.jpg',
    'cotton.jpg',
    'strawberry.jpg'
  ];

  const images = imageFilenames.map(filename => ({
    url: `${BASE_URL}/images/${filename}`
  }));

  res.json(images);
});

app.get('/api/product-subscription', (req, res) => {
  const productSubscriptionData = {
    title: "Lorem Ipsum",
    rating: 4.6,
    reviews: 2000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu felis vel ex aliquam interdum id nec orci. Fusce eu neque non elit efficitur dapibus quis in erat.",
    flavors: [
      { id: "chocolate", label: "Chocolate", image: `${BASE_URL}/images/chocolate.jpg` },
      { id: "vanilla", label: "Vanilla", image: `${BASE_URL}/images/vannila.jpg` },
      { id: "orange", label: "Orange", image: `${BASE_URL}/images/orange.jpg` }
    ],
    plans: [
      { id: "single", label: "Single Drink Subscription", price: 6, originalPrice: 10 },
      { id: "double", label: "Double Drink Subscription", price: 12, originalPrice: 20 }
    ]
  };

  res.json(productSubscriptionData);
});

app.listen(PORT, () => {
  console.log(`Server running at ${BASE_URL}`);
});
