import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link} from 'react-router-dom';

const Chef = ({ singleChef }) => {
    const {id, chef_bio, chef_name, chef_picture, likes, num_of_recipes, recipes, years_of_experience } = singleChef;
    return (
        <div className="card w-full bg-base-200 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={chef_picture} alt="" className='rounded-xl h-40 w-60' />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{chef_name}</h2>
                <p>Years of Experience: {years_of_experience}</p>
                <p>Number of Recipes: {num_of_recipes}</p>
                <p>Likes: {likes}</p>
                <div className="card-actions">
                    <Link to={`/chef/${id}`}><button className="btn btn-primary"><span className='pr-2 text-slate-50'>View Recipes</span> <FontAwesomeIcon className='text-red-500 h-5' icon={faBowlFood} /> </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;