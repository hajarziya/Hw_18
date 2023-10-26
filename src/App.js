import React, { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState("");

  const handleMovieInput = (event) => {
    if (event.key === "Enter") {
      const movieTitle = event.target.value;
      if (movieTitle.trim() === "") {
        return;
      }

      const movie = {
        title: movieTitle,
        status: "watched",
        poster: "./img/friends_poster.jpeg",
      };

      setMovies([...movies, movie]);
      setNewMovie("");
    }
  };

  const handleRemoveMovie = (index) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  return (
    <div className="App">
      <AddMovie
        newMovie={newMovie}
        onNewMovieChange={setNewMovie}
        onMovieInput={handleMovieInput}
      />
      <MovieList movies={movies} onRemoveMovie={handleRemoveMovie} />
    </div>
  );
}

export default App;
