import React, { useEffect, useState } from 'react'

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then((response) => response.json())
            .then((data) => setRecipes(data.recipes))
            .catch(() => alert('Data not fetched'));
    }, []);
  return (
    <div  className='container'>
        <h2>Recipes</h2>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Ingredients</th>
                    <th>Instructions</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {recipes.map((recipe) => (
                    <tr key={recipe.id}>
                        <td>{recipe.id}</td>
                        <td>{recipe.name}</td>
                        <td>{recipe.ingredients.map((ing) => (
                            <p key={ing}>{ing}</p>
                        ))}</td>
                        <td>{recipe.instructions.map((ins) => (
                            <p key={ins}>{ins}</p>
                        ))}</td>
                        <td><img src={recipe.image} className='img card-img' /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Recipes