import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummeryCard from "../Shared/newsSummeryCard/NewsSummeryCard";

const Home = () => {
  const allNews = useLoaderData();
//   console.log(allNews);

  return (
    <div>
      <h1>Total news</h1>
      {
            allNews.map(news=> <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>)
         }
    </div>
  );
};

export default Home;
