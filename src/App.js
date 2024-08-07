import React from 'react';
import BusinessList from './Components/BusinessList';
import SearchBar from './Components/SearchBar';

//bg-yellow-600 bg-opacity-60

function App() {

  const businesses = [{
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '11221',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}, {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Best Pizza',
  address: '1010 Paddington Way',
  city: 'Brooklyn',
  state: 'NY',
  zipCode: '11221',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}, {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Brooklyn',
  state: 'NY',
  zipCode: '11221',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}, {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Brooklyn',
  state: 'NY',
  zipCode: '11221',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}, {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Brooklyn',
  state: 'NY',
  zipCode: '11221',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
},{
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Brooklyn',
  state: 'NY',
  zipCode: '11221',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}];

  return (
    <div>
      <h1 class='bg-gradient-to-tr from-yellow-600 to-red-500 text-3xl p-3 font-sans m-0 text-white font-bold text-center  ' >Ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );

}

export default App;
