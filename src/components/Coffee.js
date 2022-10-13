import React from 'react'
import { Link } from 'react-router-dom';

const Coffee = () => {
  return (
    <article className="coffee">
      <div className="img-coffee">
        <img src="https://inlysugiare.vn/wp-content/uploads/2020/05/ly-ca-phe-bac-xiu-da.jpg" alt="cf" />
      </div>
      <div className="coffee-detail">
        <h3>title</h3>
        <Link  className="btn-detail">Detail</Link>
      </div>
    </article>
  )
}

export default Coffee