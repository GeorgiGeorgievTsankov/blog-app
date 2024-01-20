import React from 'react'
import './AddContent.css'



export const AddContentComponent = () => {





    
  return (
    <div className='addContent'>
       <label>Title : <input type="title" name="" id="" /></label>
       <label htmlFor="">Category :
       <select><option value="Appetizers">Appetizers</option>
        <option value="Main Courses">Main Courses</option>
        <option value="Fishes">Fishes</option>
        <option value="Burgers">Burgers</option>
        <option value="Salads">Salads</option>
        <option value="Desserts">Desserts</option></select>
       </label>
       <label>Recipe body: </label>
        <textarea></textarea>
        
        
        
    </div>
  )
}
