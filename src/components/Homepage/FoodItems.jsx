import { faArrowCircleRight, faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FoodItems = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80" className="max-w-sm w-full rounded-lg shadow-2xl" />
                <div className='text-left'>
                    <h1 className="text-4xl font-bold">Items Available in our Cafe!</h1>
                    <div className='grid lg:grid-cols-3 gap-3 mt-5'>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/07/kung-pao-chicken-5660w.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Kung Pao Chicken</h2>
                                <p>This dish was named after the late Qing dynasty governor of Sichuan, Ding Baozhen. He loved the dish named ‘Gong Bao’ that got its new name after the governor’s title.</p>
                                <div className="card-actions mt-2">
                                    <button className="btn btn-primary btn-sm">View Shop to Order</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://img.taste.com.au/KQvIuV_Z/taste/2021/04/creamy-chicken-tetrazzini-170487-2.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Chicken Tetrazzini</h2>
                                <p>This tempting dish was crafted in San Francisco and was dedicated to the opera star Luisa Tetrazzini.In 1984, this dish was created out of kitchen’s remaining ingredients.</p>
                                <div className="card-actions mt-2">
                                    <button className="btn btn-primary btn-sm">View Shop to Order</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://www.thespruceeats.com/thmb/DRaBINVopeoHOpjJn66Yh7pMBSc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-caesar-salad-recipe-996054-Hero_01-33c94cc8b8e841ee8f2a815816a0af95.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Caesar Salad</h2>
                                <p>An Italian immigrant, Caesar Cardini, who owned restaurants in the US and Mexico is actually the creator of this salad called ‘Caesar Salad’. In 1924, this dish was created out of kitchen’s remaining ingredients.</p>
                                <div className="card-actions mt-2">
                                    <button className="btn btn-primary btn-sm">View Shop to Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-right mt-5'>
                        <button className='btn btn-primary'>Show More <FontAwesomeIcon className='ps-3 h-5' icon={faArrowCircleRight} /></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodItems;