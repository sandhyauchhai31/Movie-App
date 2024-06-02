import Card from './Card';
import { useState, useEffect } from 'react';
let API_key = "c45a857c193f6302f2b5061c3b85e743";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc"+API_key;


function PopularMoviePage() {
  
  const [movieData, setData] = useState([]);
  const[url_set, setUrl] = useState(url);

  useEffect(() =>{
      fetch(url_set).then(res=> res.jason().then(data => {
        setData(data.results);
      }))
  },[url_set])
  
  return (
    <>
    <div className="container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
    </div>
    
    </>
  )
}

export default PopularMoviePage