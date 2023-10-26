export default function AddMovie({ newMovie, onNewMovieChange, onMovieInput }) {
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
