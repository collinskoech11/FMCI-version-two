import React, { useState, useEffect, useCallback } from "react";
// import {Link} from "react-router-dom"
import Article from "../../components/article/Article";
import "./blog.css";

import { useQuery, gql } from "@apollo/client";

const GET_USER_ARTICLES = gql`
  query GetUserArticles {
    user(username: "xenia555") {
      publication {
        posts {
          title
          brief
          slug
          coverImage
        }
      }
    }
  }
`;

const Blog = () => {
  const [BlogData, setBlogData] = useState([]);
  const [err, setError] = useState<any>(null)
  const { data, loading, error } = useQuery(GET_USER_ARTICLES);

  console.log(data)

  const getData = useCallback(() => {
    if (loading) return "Loading...";
    if (error) {
      setError(error.message);
    }
    setBlogData(data.user.publication.posts);
  },[ data, loading, error]);


  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br />
          See what's Coming Up.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupB">
          {BlogData.map((item:any, index) => {
            return (
              <Article
                key={index}
                imgUrl={item.coverImage}
                date={item.brief}
                text={item.title}
              />
            );
          })}
          ,
        </div>
      </div>
    </div>
  );
};
export default Blog;
