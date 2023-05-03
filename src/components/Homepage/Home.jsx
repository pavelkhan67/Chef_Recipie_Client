import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';
import FoodItems from './FoodItems';
import CustomerReview from './CustomerReview';

const Home = () => {
    const chef = useLoaderData();
    // console.log(chef);

    const imgURL1 = "https://assets.cntraveller.in/photos/60ba14e8bfe773a828a467fd/master/pass/koko-food-1366x768.jpg";
    const imgURL3 = "https://cdn.squaremeal.co.uk/article/9484/images/healthy-london-ve-kitchen_01122021110525.jpg?w=1200";
    const imgURL2 = "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg";
    
    return (
        <>
            <div className="carousel w-full">
                    <div id="slide1" className="hero min-h-fit mb-5 carousel-item w-full relative" style={{ backgroundImage: `url(${imgURL1})` }} >
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div className="max-w-md py-40">
                                <h1 className="mb-5 text-5xl font-bold text-blue-400">Hello Gastronome</h1>
                                <p className="mb-5 text-lg font-semibold italic text-slate-200">“We welcome you to a delicious feast of exquisite dishes in Star line. With a wide range of world cuisines to choose from, we guarantee you a sumptuous feast experience in our restaurant.”</p>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle ">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide2" className="hero min-h-fit mb-5 carousel-item w-full relative" style={{ backgroundImage: `url(${imgURL2})` }} >
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div className="max-w-md py-40">
                                <h1 className="mb-5 text-5xl font-bold text-blue-400">Hello Gastronome</h1>
                                <p className="mb-5 text-lg font-semibold italic text-teal-300">“We welcome you to a delicious feast of exquisite dishes in Star line. With a wide range of world cuisines to choose from, we guarantee you a sumptuous feast experience in our restaurant.”</p>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle ">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide3" className="hero min-h-fit mb-5 carousel-item w-full relative" style={{ backgroundImage: `url(${imgURL3})` }} >
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div className="max-w-md py-40">
                                <h1 className="mb-5 text-5xl font-bold text-blue-400">Hello Gastronome</h1>
                                <p className="mb-5 text-lg font-semibold italic text-lime-300">“We welcome you to a delicious feast of exquisite dishes in Star line. With a wide range of world cuisines to choose from, we guarantee you a sumptuous feast experience in our restaurant.”</p>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle ">❯</a>
                            </div>
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