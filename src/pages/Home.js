import React from 'react'
import CoffeeList from '../components/CoffeeList';
import SearchForm from '../components/SearchForm';
import SingleCoffee from './SingleCoffee';

const Home = () => {
  return (
    <div className="home">
      <SearchForm />
      <CoffeeList />
    </div>
  )
}

export default Home
