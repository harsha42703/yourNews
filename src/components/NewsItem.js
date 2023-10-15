import React from 'react';
import '../index.css';
import './NewsItem.css';
import 'animate.css';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  const cardStyle = {
    width: '20rem',
    height: '33rem',
    border: 'none',
    padding: '1rem',
    borderRadius: '12px',
    background: 'linear-gradient(to bottom, white, whitesmoke, aliceblue, white, rgba(0, 191, 255, 0.5))',
    boxShadow: '0 10px 23px rgba(0, 0, 0, 0.2), 0 6px 23px rgba(0, 0, 0, 0.2)',
  };

  const imageStyle = {
    maxWidth: '288px',
    maxHeight: '182px',
  };

  return (
    <div className="my-3 animate__animated animate__fadeInDown">
      <div className="card" style={cardStyle}>
        <img src={imageUrl} className="card-img-top" alt="..." style={imageStyle} />
        <span className="badge text-bg-info">{source}</span>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <button
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn-sm btn-light poppins"
          >
            <a
              className='linker'
              rel="noreferrer"
              href={newsUrl}
              target="_blank">Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
