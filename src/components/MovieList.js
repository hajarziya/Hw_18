import MovieDetails from "./MovieDetails";
export default function MovieList({ movies, onRemoveMovie }) {
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
