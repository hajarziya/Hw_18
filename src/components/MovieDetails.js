export default function MovieDetails({ movie, index, onRemoveMovie }) {
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
