import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodItems from './FoodItems';
import CustomerReview from './CustomerReview';
import Chef from './ChefSection/Chef';

const Home = () => {
    const chef = useLoaderData();
    // console.log(chef);

    const imgURL1 = "https://b.zmtcdn.com/data/pictures/6/19752516/4843a7ae4f5b09939e08a2f6b4d2d325.jpg?fit=around|750:500&crop=750:500;*,*";
    const imgURL3 = "https://publish.purewow.net/wp-content/uploads/sites/2/2022/01/healthy-restaurants-in-la-fb.jpg";
    const imgURL2 = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80";
    
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