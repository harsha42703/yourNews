import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollToTop from "react-scroll-to-top";
import '../index.css';

const NewsBox = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (first) => {
    return first.charAt(0).toUpperCase() + first.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);

    try {
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(60);

      const filteredArticles = parsedData.articles.filter(
        (article) => article.urlToImage
      );

      setArticles((prevArticles) => [...prevArticles, ...filteredArticles]);
      setTotalResults(filteredArticles.length);
      props.setProgress(5);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} News - YourNews`;
    updateNews();
    // eslint-disable-next-line
  }, [page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <>
      <h1 className={`text-center headline text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ margin: '90px 0px 20px' }}>Top {capitalizeFirstLetter(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 40) : ""}
                  description={element.description ? element.description.slice(0, 80) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  author={element.author}
                  source={element.source.name} />
              </div>
            ))}
          </div>
        </div>
        <ScrollToTop smooth={true} color={props.mode} style={{ border: '1px solid' }} />
      </InfiniteScroll>
    </>
  );
}

NewsBox.defaultProps = {
  country: 'in',
  pageSize: 40, 
  category: 'general'
}

NewsBox.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
}

export default NewsBox;
