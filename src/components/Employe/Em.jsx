import React from 'react'
import './Em.css'
function Em({name,post}) {
  return (
    <>
    <div className="card-container">
    <div className="card88">
        {/* <img src="./rm373batch5-18.jpg" alt="Image 1"> */}
        <h3>{name}</h3>
        <p>{post}</p>
    </div>
        </div>
    </>
  )
}

export default Em