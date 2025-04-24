import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const { idValue } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${idValue}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
