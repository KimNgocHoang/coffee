import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className="error">
      <h3>Oops!!!</h3>
      <Link className="btn-back" to='/' >Back Home</Link>
    </div>
  )
}

export default Error