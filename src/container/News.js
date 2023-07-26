import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Loader from "./Loader"
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalresults, setTotalresults] = useState(0);
 
  const fetchNews = async()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&&apiKey=bc982eeb2cfc43298d69fe9fdc6f38f0&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalresults(parsedData.totalResults);
  }

  useEffect(() => {
    fetchNews();
  }, [])
  
  const fetchData = async()=>{
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&&apiKey=bc982eeb2cfc43298d69fe9fdc6f38f0&pageSize=${props.pageSize}&page=${page+1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    // setTotalresults(parsedData.totalResults);
  }
  
   const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    return (
      <>
      <h2 className='text-center' style={{margin:'10px 0px'}}>Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        {loading && <Loader/>}
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length !== totalresults}
          loader={<Loader/>}
          >
        <div className="container-fluid my-1">
        <div className="row d-flex justify-content-evenly ">
          { articles.map((element) => {
            return (element.urlToImage !== null ? <div className=" col-md-4 col-lg-3 col-sm-6 col-xl-3 " style={{minWidth:'250px',maxWidth:'400px'}} key={element.publishedAt}>
              <NewsItem title={element.title} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ?? "Anonymous"} date={element.publishedAt} />
            </div> : "")
          })}
        </div>
        </div>
        </InfiniteScroll>
        
      </>
    )
  
}
News.defaultProps = {
  country: 'in',
  pageSize: 12,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,

}
export default News
