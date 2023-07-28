import React from "react";

import "./article.css";

const Aritcale = ({ imageURL, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container-article-image">
        <img src={imageURL} alt="Blog_Image" width="100%" height="100%" />
      </div>
      <div className="gpt3__blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Aritcale;
