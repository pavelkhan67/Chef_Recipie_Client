import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>This is hdkjfhjksd</h2>
        </div>
    );
};

export default ChefDetails;