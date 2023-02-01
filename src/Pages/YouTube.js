import React from "react";

function YouTube() {
  return (
    <>
      <iframe
        style={{
          minWidth: "98vw",
          width: "auto",
          marginLeft:"1vw",
          height: "900px",
          maxWidth:"90vh",
          margin: "auto",
          border: "1px solid white",
        }}
        src="https://www.youtube.com/embed/videoseries?list=PLOZRt35BMbHCgeYwMhQ_83pKnLCtfHM8J"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>{" "}
    </>
  );
}

export default YouTube;
