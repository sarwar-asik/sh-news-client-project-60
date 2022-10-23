import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../Shared/newsSummeryCard/NewsSummeryCard';

const Category = () => {
    const newsdata  = useLoaderData();

    console.log(newsdata)
    return (
        <div className='container'>
            <h2 className='text-dark text-center fs-1 my-3 bg-light  py-5'>  Total News {newsdata.length}</h2>

            {
                newsdata.map(news=> <NewsSummeryCard key={news._id} news={news}/>)
            }
        </div>
    );
};

export default Category;