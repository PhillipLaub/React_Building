import React, { useState, useEffect }from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Songs() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://genius.p.rapidapi.com/artists/16775/songs", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": "167f03e5a5mshd9300ee33644670p1f52ebjsn3544f088cb90"
      }
    })
    
    const items = await data.json();
    console.log(items.response.songs)
    setItems(items.response.songs);
  };

  return (
    <div className="App">
      <h1>Songs</h1>
      {/* {items.map(item => (
          <h1 key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link></h1>
      ))} */}

      {items.map(item => (
          <h4 key={item.id}>
            <Link to={`/songs/${item.id}`}>{item.title}</Link></h4>
      ))}
      
    </div>
  );
}

export default Songs;
