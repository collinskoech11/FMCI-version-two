function ViewAlbum() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get("name");
    const link = urlParams.get("link");

  return (
    <>
     <div className="gpt3__blog-heading">
        <h2 className="gradient__text">
          {name}<br />
        </h2>
      </div>
    <iframe src={link} title="iframe"/>
    </>
  )
}

export default ViewAlbum