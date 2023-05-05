import { faArrowCircleRight, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FoodItems = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://b.zmtcdn.com/data/pictures/6/19830676/25e240df0d0abfc79460ca10e2ebaef5.jpg" className="max-w-sm w-full rounded-lg shadow-2xl" />
                <div className='text-left'>
                    <h1 className="text-4xl font-bold">Items Available in our Cafe!</h1>
                    <div className='grid lg:grid-cols-3 gap-3 mt-5'>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                            <img src="https://www.kimscravings.com/wp-content/uploads/2022/08/Kungpaochicken_-13-500x500.jpg" alt="Food" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Kung Pao Chicken</h2>
                                <p>This dish was named after the late Qing dynasty governor of Sichuan, Ding Baozhen. He loved the dish named ‘Gong Bao’ that got its new name after the governor’s title.</p>
                                <div className="card-actions mt-2">
                                    <button className="btn btn-primary btn-sm normal-case">Proceed Order <FontAwesomeIcon className='ps-2' icon={faRightFromBracket} /></button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                            <img src="https://www.theseasonedmom.com/wp-content/uploads/2022/08/Chicken-Tetrazzini-9-500x500.jpg" alt="Food" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Chicken Tetrazzini</h2>
                                <p>This tempting dish was crafted in San Francisco and was dedicated to the opera star Luisa Tetrazzini.In 1984, this dish was created out of kitchen’s remaining ingredients.</p>
                                <div className="card-actions mt-2">
                                    <button className="btn btn-primary btn-sm normal-case">Proceed Order <FontAwesomeIcon className='ps-2' icon={faRightFromBracket} /></button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                            <img src="https://www.noracooks.com/wp-content/uploads/2022/06/vegan-caesar-salad-4-500x500.jpg" alt="Food" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Caesar Salad</h2>
                                <p>An Italian immigrant, Caesar Cardini, who owned restaurants in the US and Mexico is actually the creator of this salad called ‘Caesar Salad’. In 1924, this dish was created out of kitchen’s remaining ingredients.</p>
                                <div className="card-actions mt-2">
                                    <button className="btn btn-primary btn-sm normal-case">Proceed Order <FontAwesomeIcon className='ps-2' icon={faRightFromBracket} /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-right mt-5'>
                        <button className='btn btn-primary normal-case text-base'>Show More <FontAwesomeIcon className='ps-3 h-5' icon={faArrowCircleRight} /></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodItems;