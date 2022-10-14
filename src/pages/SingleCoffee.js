import React, { useEffect, useState, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../components/Loading';
const url = 'https://api.sampleapis.com/coffee/hot';

const SingleCoffee = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [coffee, setCoffee] = useState(null);


  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${url}/${id}`);
      const data = await response.json();
      console.log(data);
      if(data){
        setCoffee(data);
      }
      else {
        setCoffee(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [id])

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [id, fetchData]);

  if(loading) {
    return (<Loading />)
  }
  if(!coffee) {
    return <h2 className="result-search">no coffee to display</h2>
  }
  const { title, description, ingredients, image } = coffee;
  return (
    <section className='single-coffee'>
      <Link to='/' className='btn-back'> Back Home</Link>
      <div className="single-drink">
        <img src={image} alt="img cf" />
        <div className="single-drink-info">
          <p>
            <span className="data">Name:</span>
            {title}
          </p>
          <p>
            <span className="data">Description:</span>
            {description}
          </p>
          <p>
            <span className="data">Ingredients:</span>
            {ingredients.map((ingredient, index) => {
              return ingredient ? <span className="data-ingredient" key={index}>{ingredient}</span> :null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCoffee