import React, { useEffect, useState } from "react";
import Article from "./Article";
import { Box, Typography } from "@mui/material";

const Home = () => {
  const divStyle = {
    backgroundImage: 'url("bg-heart.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };
  const [articles, setArticles] = useState([]);
  const fetchMoreData = async () => {
    // let url = `https://newsapi.org/v2/everything?q=diabetes&q=health&q=heartdisease&sortBy=popularity&pageSize=9&apiKey=2743fee2a44e429dac4c35ce05307923&q=fitness`;
    let apikey = '8a72175847209b91f0085bc7cf73e46a';
    let url = 'https://gnews.io/api/v4/search?q=diabetes&q=heartdisease&lang=en&max=10&apikey=' + apikey;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles));
  };
  useEffect(() => {
    fetchMoreData();
  }, []);
  return (
    <Box style={divStyle} sx={{width:{xs:'150%',md:'100%'},height:{md:'263vh',xs:'640vh'}}}>
      <Typography variant="h2" fontFamily="times-new-roman" textAlign="center" color='black' marginBottom='2rem' fontWeight='bold'>
        Health News
      </Typography>
      <div className="container">
        <div className="row">
          {articles.map((element, index) => {
            return (
              index<9 &&
              <div className="col-md-4" key={index}>
                <Article
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    element.image
                      ? element.image
                      : "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_01/2705191/nbc-social-default.png"
                  }
                  newsUrl={element.url}
                  author={element.source.name}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );
};

export default Home;
