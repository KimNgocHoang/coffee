import React from 'react'
import CoffeeList from '../components/CoffeeList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <div className="home">
      <SearchForm />
      <CoffeeList />
    </div>
  )
}

export default Home
