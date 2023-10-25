import React, { useState } from "react";
import "./App.css";

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

function AddMovie({ newMovie, onNewMovieChange, onMovieInput }) {
  return (
    <div className="container_addmovie">
      <h1>Movie List</h1>
      <input
        placeholder="Movie Title"
        type="text"
        value={newMovie}
        onChange={(e) => onNewMovieChange(e.target.value)}
        onKeyPress={onMovieInput}
      />
    </div>
  );
}

function MovieList({ movies, onRemoveMovie }) {
  return (
    <div className="container_movielist">
      {movies.length === 0 ? (
        <div style={{ height: "100vh" }}>
          <p>Your movie list is empty. Let's try to fill it up...</p>
          <p>
            Write your favorite movie name, then press Enter, and magic will
            happen...🙃
          </p>
        </div>
      ) : (
        <div className="movie-list">
          {movies.map((movie, index) => (
            <MovieDetails
              key={index}
              index={index}
              movie={movie}
              onRemoveMovie={onRemoveMovie}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function MovieDetails({ movie, index, onRemoveMovie }) {
  return (
    <div className="movie_details">
      <img className="poster" src={movie.poster} alt={movie.title} />
      <div className="wrapper_content">
        <h6 className="title">{movie.title}</h6>
        <div className="star_wrapper">
          <img
            style={{ width: "16px", height: "16px" }}
            src="./star.png"
            alt="star"
          />
          <img
            style={{ width: "16px", height: "16px" }}
            src="./star.png"
            alt="star"
          />
          <img
            style={{ width: "16px", height: "16px" }}
            src="./star.png"
            alt="star"
          />
          <img
            style={{ width: "16px", height: "16px" }}
            src="./star.png"
            alt="star"
          />
          <img
            style={{ width: "16px", height: "16px" }}
            src="./star.png"
            alt="star"
          />
        </div>
        <div className="btns">
          <button className="btn_watched">{movie.status}</button>
          <button className="btn_delete" onClick={() => onRemoveMovie(index)}>
            <img src="./img/delete.png" name="trash-outline" alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
