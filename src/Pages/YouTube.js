import React from "react";

function YouTube() {
  return (
    <>
      <iframe
        style={{
          minWidth: "98vw",
          width: "98vw",
          marginLeft:"1vw",
          height: "900px",
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
