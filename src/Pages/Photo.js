import React from "react";

const urls = [
  {
    link: "https://drive.google.com/drive/folders/1N0Pho9mK2FtMOIhP4COaM3TWl_FRHBlT",
    name: "The Betts Graduation",
  },
  {
    link: "https://drive.google.com/drive/folders/1aBSn5YK7NlxsuwxPmRjrC3mynt1Uf5vh",
    name: "Thanks Giving Event",
  },
];

const GalleryObject = ({name, link}) => {
  return (
    <>
    <a href={link}>
      <div className="gpt3__blog-container_article">
        <div className="gpt3__blog-container_article-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_Drive_logo.png/600px-Google_Drive_logo.png?20220818055023" alt="blog_image" style={{width:"100px",height:"100px",margin:"auto"}}/>
        </div>
        <div className="gpt3__blog-container_article-content">
          <div>
            <p>{name}</p>
            <a href={link} style={{color:"#fff",fontFamily:"sans-serif"}}>View Album</a>
          </div>
        </div>
      </div>
      </a>
    </>
  );
};

function Photo() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h2 className="gradient__text" style={{fontFamily:"sans-serif"}}>
          A Glimpse of our, <br />
          Photo Album.
        </h2>
        <h3 style={{color:"#fff", fontFamily:"sans-serif"}}>click google drive icon to view</h3>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupB">
          {urls.map((item, index) => {
            return (
              <GalleryObject
                key={index}
                link={item.link}
                name={item.name}
              />
            );
          })}
          ,
        </div>
      </div>
    </div>
  );
}

export default Photo;
