import { useState, useEffect } from "react";
import Movie from "../components/Movie.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json)
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  // ✅ 제목 + 장르 필터링 처리
  const filteredMovies = movies.filter((movie) => {
    const matchTitle = movie.title
      .toLowerCase()
      .includes(keyword.toLowerCase());
    const matchGenre =
      selectedGenre === "" || movie.genres.includes(selectedGenre);
    return matchTitle && matchGenre;
  });

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="영화 제목 검색"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">ALL</option>
              {[...new Set(movies.flatMap((item) => item.genres))].map(
                (genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                )
              )}
            </select>
          </form>
          <h1>Result: ({filteredMovies.length})</h1>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((item) => (
              <Movie
                key={item.id}
                id={item.id}
                coverImg={item.medium_cover_image}
                title={item.title}
                summary={item.summary}
                genres={item.genres}
              />
            ))
          ) : (
            <p>검색 결과가 없습니다.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
