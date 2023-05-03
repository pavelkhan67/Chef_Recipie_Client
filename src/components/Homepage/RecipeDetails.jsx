import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';

const RecipeDetails = ({ recipes }) => {
    const { recipe_name, ingredients, cooking_method, rating } = recipes;
    const handleClick = (event) => {
        toast("Added to Favorite List!")
        event.currentTarget.disabled = true;
      };
    return (
        <div className="card w-full bg-base-100 shadow-xl text-left mt-5 lg:mt-0">
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <p><span className='underline font-semibold'>Ingredients:</span> {ingredients.map(i => <li>{i}</li>)}</p>
                <p className='pt-5'><span className='underline font-semibold'>Cooking Method: </span> <br />{cooking_method}</p>
                <p className='pt-5'><span className='font-semibold'>Rating:</span> <FontAwesomeIcon className='text-orange-500' icon={faStar} /> {rating}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleClick} className="btn btn-primary"><span className='pr-2 text-white'>Add To Favorite</span> <FontAwesomeIcon className='text-rose-500 h-5' icon={faHeart} /></button>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;