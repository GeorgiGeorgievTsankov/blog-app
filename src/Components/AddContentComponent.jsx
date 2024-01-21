
import React, { useState } from 'react'
import './AddContent.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';




export const AddContentComponent = () => {

    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [body, setBody] = useState();

    const goTo = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {title,category,body};

        fetch('http://localhost:8000/recipe',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })

        goTo.push("/");
    }


  return (
    <div className='addContent'>
      <h1>Add New Blog</h1>
      <form onSubmit={handleSubmit}>
      <label>Title : <input type="title" value={title} onChange={(e)=> setTitle(e.target.value)}/></label>
       <label>Category :
       <select value={category} onChange={(e)=> setCategory(e.target.value)}><option value="Appetizers">Appetizers</option>
        <option value="Main Courses">Main Courses</option>
        <option value="Fishes">Fishes</option>
        <option value="Burgers">Burgers</option>
        <option value="Salads">Salads</option>
        <option value="Desserts">Desserts</option></select>
       </label>
       <label>Recipe body: </label>
        <textarea value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
        <button className="btn">Add</button>
      </form>
        
        
        
    </div>
  )
}
