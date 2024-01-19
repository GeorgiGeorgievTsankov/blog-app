import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent'
import useFetch from './useFetch'
// import salmon from './Assets/salmon.jpg'
// import burger from './Assets/burger.jpg'
// import pasta from './Assets/pasta.jpg'



const HomeComponent = () => {

    const {data:recipe,isPending}= useFetch('http://localhost:8000/recipe');
    // const handleDelete = (id) => {
    //     const newRecipeData = recipe.filter((recipe) => recipe.id !== id);
    //     setName(newRecipeData);
    // }

    return (
        <div className="home-component">
            <h1>MyBlogProject</h1>
            {isPending && <div>Loading....</div>}
            {recipe && <CardComponent recipe={recipe} />}
        </div>

    )
}
export default HomeComponent
