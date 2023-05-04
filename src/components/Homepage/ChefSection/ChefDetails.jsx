import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ChefDetails = () => {
    const details = useLoaderData();
    const { chef_bio, chef_name, chef_picture, likes, num_of_recipes, recipes, years_of_experience } = details;
    // console.log(data);
    return (
        <>
            <div className="hero py-28 bg-base-200 shadow-2xl mt-5">
                <div className="hero-content flex-col lg:flex-row px-10 lg:px-20">
                    <img className='h-72 lg:w-56 rounded-lg' src={chef_picture} />
                    <div className='text-left lg:ps-10'>
                        <h1 className="text-4xl font-bold">{chef_name}</h1>
                        <p className="py-2">{chef_bio}</p>
                        <p className="py-1">Total Recipe: {num_of_recipes} </p>
                        <p className="py-1">Experience: {years_of_experience} year</p>
                        <p className="py-1">Likes: <FontAwesomeIcon icon={faThumbsUp} /> {likes} </p>
                    </div>
                </div>
            </div>
            <div className=' lg:flex gap-5 px-5 pt-5'>
            {
                recipes.map(recipes => <RecipeDetails key={recipes.recipe_id} recipes={recipes}></RecipeDetails>)
            }
            </div>
        </>
    );
};

export default ChefDetails;