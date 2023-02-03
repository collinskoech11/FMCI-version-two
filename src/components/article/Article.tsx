import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text  }) => {
  // var url = "https://news.faithministrieschurchinternational.org/"+link;
  // console.log("url",url)
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <a style={{color:"#fff"}} href="https://news.faithministrieschurchinternational.org/">Read Full Article</a>
      </div>
    </div>
  );
};

export default Article;
