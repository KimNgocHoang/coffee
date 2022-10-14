import React from 'react'
import { Link } from 'react-router-dom';

const Coffee = ({title, id, description, image}) => {
  return (
    <article className="coffee">
      <div className="img-coffee">
        <img src={image} alt="cf" />
      </div>
      <div className="coffee-detail">
        <h3>{title}</h3>
        <Link to={`/coffee/${id}`} className="btn-detail">Detail</Link>
      </div>
    </article>
  )
}

export default Coffee