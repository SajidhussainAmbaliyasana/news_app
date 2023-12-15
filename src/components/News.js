import React from "react";
import "./style.css";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
import notfound from './image_not.png'
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

function News(props) {
  const[articles,setArticles] = useState([]);
  const[loading,setLoading] = useState(true);
  const[page,setPage] = useState(1);
  const[totalResult,setTotalResullt] = useState(0)

  const updateNews = async()=>{
    try{
    props.toggleProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=1`;
   // console.log(url);
   props.toggleProgress(30);
    const data = await fetch(url);
    props.toggleProgress(60);
    const parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResullt(parsedData.totalResults)
    setLoading(false);
    props.toggleProgress(100);
    }catch(error){
      console.log(`Error in Fetching the news ${error} `)
    }
  }


  useEffect(() => {
    updateNews();
    // eslint-disable-next-line 
  }, []);


  const fetchMoreData = async()=>{
    try{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page+1}`;
    console.log(url);
    setPage(page +1);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResullt(parsedData.totalResults)
    }catch(error){
      console.log(`Error in Fetching the news ${error} `)
    }
  }
  
  return (
    <div className="news-box-container">
     {loading && <Spinner/>}
      <div className="news-box">
      <div className="heading">
        <p>{props.heading}</p>
      </div>
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResult}
          loader={<Spinner/>}
        >
      <div className="row">
        {articles.map((element)=>(
           <NewsItem 
           key={element.url}
           title={element.title !== undefined? element.title: "Title Is not"}
           url={element.url}
           imageUrl={element.urlToImage !== null? element.urlToImage: notfound}
           source={element.source.name !== undefined? element.source.name: "Source Not Defined"}
           />
        ))
        }
      </div>
      </InfiniteScroll>
      </div>
    </div>
  );
}

News.defaultProps = {
  country:"in",
  pageSize: 10,
  category:"general",
}

News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;
