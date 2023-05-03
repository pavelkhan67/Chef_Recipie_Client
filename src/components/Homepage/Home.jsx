import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';
import FoodItems from './FoodItems';
import CustomerReview from './CustomerReview';

const Home = () => {
    const chef = useLoaderData();
    // console.log(chef);

    const imgURL ="https://cdn.squaremeal.co.uk/article/9484/images/healthy-london-ve-kitchen_01122021110525.jpg?w=1200";
    return (
        <>
        <div className="hero min-h-fit mb-5" style={{ backgroundImage: `url(${imgURL})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-md py-40">
                    <h1 className="mb-5 text-5xl font-bold text-blue-400">Hello Gastronome</h1>
                    <p className="mb-5 text-lg font-semibold italic text-teal-300">“We welcome you to a delicious feast of exquisite dishes in Star line. With a wide range of world cuisines to choose from, we guarantee you a sumptuous feast experience in our restaurant.”</p>
                </div>
            </div>
        </div>

        <div className='grid lg:grid-cols-3 gap-5 mb-5'>
            {
                chef.map(singleChef => <Chef key={singleChef.id} singleChef={singleChef}></Chef>)
            }
        </div>
        <div>
            <FoodItems></FoodItems>
        </div>
        <div className='mt-5'>
            <CustomerReview></CustomerReview>
        </div>
        </>
    );
};

export default Home;