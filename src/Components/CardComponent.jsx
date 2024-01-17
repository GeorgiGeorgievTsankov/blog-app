import React from 'react'
import './CardComponent.css'
import salmon from './Assets/salmon.jpg'

function CardComponent() {
  return (
    <div className="card-component">
        <div className="card">
            <h1>Tittle</h1>
            <img className='card-image' src={salmon} alt="salmonPicture" />
            <p>5.06.2023 г. — Те остават ненаситни, докато не публикуват тези сочни и вкусни храни в социални медийни платформи като Facebook, Instagram, Pinterest и т.н.</p>
            <button className="btn">Read more..</button>
        </div>
        <div className="card">
            <h1>Tittle</h1>
            <img className='card-image' src={salmon} alt="salmonPicture" />
            <p>5.06.2023 г. — Те остават ненаситни, докато не публикуват тези сочни и вкусни храни в социални медийни платформи като Facebook, Instagram, Pinterest и т.н.</p>
            <button className="btn">Read more..</button>
        </div>
        <div className="card">
            <h1>Tittle</h1>
            <img className='card-image' src={salmon} alt="salmonPicture" />
            <p>5.06.2023 г. — Те остават ненаситни, докато не публикуват тези сочни и вкусни храни в социални медийни платформи като Facebook, Instagram, Pinterest и т.н.</p>
            <button className="btn">Read more..</button>
        </div>
        <div className="card">
            <h1>Tittle</h1>
            <img className='card-image' src={salmon} alt="salmonPicture" />
            <p>5.06.2023 г. — Те остават ненаситни, докато не публикуват тези сочни и вкусни храни в социални медийни платформи като Facebook, Instagram, Pinterest и т.н.</p>
            <button className="btn">Read more..</button>
        </div>
        <div className="card">
            <h1>Tittle</h1>
            <img className='card-image' src={salmon} alt="salmonPicture" />
            <p>5.06.2023 г. — Те остават ненаситни, докато не публикуват тези сочни и вкусни храни в социални медийни платформи като Facebook, Instagram, Pinterest и т.н.</p>
            <button className="btn">Read more..</button>
        </div>
    </div>
  )
}

export default CardComponent