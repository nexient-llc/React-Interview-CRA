import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Search from "../components/Search"

const SWContainer = () => {
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/")
      .then((res) => {
        console.log(res.data.results);
        setMovieTitles(res.data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="movie-container">
        <div className="sw-container-title">
          <h1>Star Wars Episode List</h1>
          <Search />
        </div>
        
        {movieTitles.map((movie) => {
          return <MovieCard data={movie} key={movie.episode_id} />;
        })}
      </div>
    </div>
  );
};

export default SWContainer;
