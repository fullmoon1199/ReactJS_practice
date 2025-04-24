import { Link } from "react-router-dom";

function Movie({id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li> // key 속성 추가
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default Movie;
