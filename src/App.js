import React from 'react';
import BusinessList from './Components/BusinessList';
import SearchBar from './Components/SearchBar';


function App() {
  return (
    <div>
      <h1 class='bg-yellow-600 bg-opacity-60 text-3xl p-3 font-sans m-0 text-white font-bold text-center  ' >Ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );

}

export default App;
