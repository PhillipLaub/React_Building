import React, { useState, useEffect } from "react";
import "../App.css";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
    //eslint-disable-next-line
  }, []);

  const [item, setItem] = useState({
    primary_artist: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://genius.p.rapidapi.com/songs/${match.params.id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "genius.p.rapidapi.com",
          "x-rapidapi-key": "167f03e5a5mshd9300ee33644670p1f52ebjsn3544f088cb90"
        }
      }
    );
    const item = await fetchItem.json();
    setItem(item.response.song);
    console.log(item.response.song);
  };

  return (
    <div>
      <h1>Title : {item.title}</h1>
      <h1>Artist : {item.primary_artist.name}</h1>
      <img src={item.header_image_url} alt='artist headshot'></img>

    </div>
  );
}

export default Item;
