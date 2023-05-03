import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CustomerReview = () => {
    const img = 'https://wexnermedical.osu.edu/-/media/images/wexnermedical/blog/2017-stories/12/food-binge/foodbinge_large.jpg'
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-9/12">
                    <h1 className="mb-5 text-4xl font-bold text-blue-400">Our Customer Review</h1>
                    <p className="mb-5">This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.</p>
                    <div className='grid lg:grid-cols-3 gap-5'>
                        <div className="card w-full bg-base-100 shadow-xl text-black relative mt-28">
                            <figure className="px-10 pt-10 absolute top-[-25%] left-[21%] lg:left-[23%]">
                                <img src="https://www.kindpng.com/picc/m/28-286422_smiley-face-clip-art-human-face-cartoon-boy.png" alt="Danniel Kim Pic" className="rounded-full w-20 h-20" />
                            </figure>
                            <div className="card-body items-center text-center mt-8">
                                <h2 className="card-title">Danniel Kim</h2>
                                <p className='pt-2 pb-3'>It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.</p>
                                <p className='font-semibold'>Rating: <FontAwesomeIcon className='text-orange-500' icon={faStar} /> 4.5</p>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl text-black relative mt-28">
                            <figure className="px-10 pt-10 absolute top-[-25%] left-[21%] lg:left-[23%]">
                                <img src="https://www.kindpng.com/picc/m/150-1500029_girls-girl-dancing-kids-scrapbook-cartoon-kid.png" alt="Danniel Kim Pic" className="rounded-full w-20 h-20" />
                            </figure>
                            <div className="card-body items-center text-center mt-8">
                                <h2 className="card-title">Evan Rachel</h2>
                                <p className='pt-2 pb-3'>It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.</p>
                                <p className='font-semibold'>Rating: <FontAwesomeIcon className='text-orange-500' icon={faStar} /> 4.8</p>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl text-black relative mt-28">
                            <figure className="px-10 pt-10 absolute top-[-25%] left-[21%] lg:left-[23%]">
                                <img src="https://www.pngkey.com/png/detail/140-1401137_leader-vector-cartoon-png-black-and-white-download.png" alt="Danniel Kim Pic" className="rounded-full w-20 h-20" />
                            </figure>
                            <div className="card-body items-center text-center mt-8">
                                <h2 className="card-title">Louis Hoffman</h2>
                                <p className='pt-2 pb-3'>It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.</p>
                                <p className='font-semibold'>Rating: <FontAwesomeIcon className='text-orange-500' icon={faStar} /> 4.5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;