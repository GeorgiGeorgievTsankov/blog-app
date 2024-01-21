import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import useFetch from './useFetch'
import './RecipeDetailsCSS.css'


export const RecipeDetailsComponent = () => {

    const { id } = useParams()
    const {data:recipe,isPending}= useFetch("http://localhost:8000/recipe/" + id);
    
    return (
        <div className='detailComponents'>
         {isPending && <div>Loading...</div>}
         {recipe && <h1>{recipe.title}</h1>}
         {recipe && <h3>{recipe.category}</h3>}
         {recipe && <p className='detailsContainer'>{recipe.body}</p>}
        </div>
    )
}
