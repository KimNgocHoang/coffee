import React from 'react'
import Coffee from './Coffee';
import Loading from './Loading';
import { useGlobalContext} from '../context';


const CoffeeList = () => {
  const {coffees, loading} = useGlobalContext();

  if(loading){
    return <Loading />
  }
  return (
    <section className='coffee-list'>
      <h3 className='coffee-list-title'>COFFEES</h3>
      <div className="coffees">
        {coffees.map((cf) => {
          return <Coffee key={cf.id} {...cf} />
        })}
      </div>
    </section>
  )
}

export default CoffeeList