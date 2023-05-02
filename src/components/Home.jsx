import React from 'react';
import Chef from './Chef';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chef = useLoaderData();
    console.log(chef);

    const imgURL ="https://cdn.squaremeal.co.uk/article/9484/images/healthy-london-ve-kitchen_01122021110525.jpg?w=1200";
    return (
        <>
        <div className="hero min-h-fit" style={{ backgroundImage: `url(${imgURL})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className="max-w-md py-40">
                    <h1 className="mb-5 text-5xl font-bold">Hello Gastronome</h1>
                    <p className="mb-5 text-lg font-semibold italic text-slate-300">“We welcome you to a delicious feast of exquisite dishes in Star line. With a wide range of world cuisines to choose from, we guarantee you a sumptuous feast experience in our restaurant.”</p>
                </div>
            </div>
        </div>

        <div>
            {
                chef.map(singleChef => <Chef key={singleChef.id}>singleChef={singleChef}</Chef>)
            }
        </div>
        </>
    );
};

export default Home;