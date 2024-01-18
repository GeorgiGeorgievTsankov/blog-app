
import React from 'react'
import './CardComponent.css'


function CardComponent({recipe}) {
  return (
    <div className="card-component">
           {recipe.map((recipes) => (
            <div className="card">
             <h1>{recipes.title}</h1>
             <img className='card-image' src={recipes.img} alt={recipes.name} />
             <p>{recipes.body}</p>
             <button className="btn">Read more..</button>
             </div>
           ))};
    </div>
  )
}

export default CardComponent
