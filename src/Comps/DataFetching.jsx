import axios from "axios";
import React, { useState, useEffect } from "react";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  function handleClick() {
    setIdFromButtonClick(id);
  }
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((e) => console.log(e.message));
  }, [idFromButtonClick]);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <br />
      {post.title}
    </div>
  );
}

export default DataFetching;
