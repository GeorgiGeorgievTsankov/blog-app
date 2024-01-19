
import React, { useEffect, useState } from 'react'
import CardComponent from './CardComponent'
// import salmon from './Assets/salmon.jpg'
// import burger from './Assets/burger.jpg'
// import pasta from './Assets/pasta.jpg'



const HomeComponent = () => {

    const [recipe, setName] = useState(null);


    // const handleDelete = (id) => {
    //     const newRecipeData = recipe.filter((recipe) => recipe.id !== id);
    //     setName(newRecipeData);
    // }

    useEffect(() => {
        fetch('http://localhost:8000/recipe')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setName(data)
            });
    }, []);

    return (
        <div className="home-component">
            <h1>MyBlogProject</h1>
            {recipe && <CardComponent recipe={recipe} />}
        </div>

    )
}
export default HomeComponent
