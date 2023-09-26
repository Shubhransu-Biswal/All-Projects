import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  // const fetchMoviesHandler = () => {
  //   fetch("https://swapi.py4e.com/api/films")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const transformedMovies = data.results.map((movie) => {
  //         return {
  //           title: movie.title,
  //           id: movie.episode_id,
  //           releaseDate: movie.edited,
  //           openingText: movie.opening_crawl,
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  // };

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.py4e.com/api/films");
      console.log(response.ok);
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movie) => {
        return {
          title: movie.title,
          id: movie.episode_id,
          releaseDate: movie.edited.slice(0, 10),
          openingText: movie.opening_crawl,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // using useEffect to handle the sideeffect(call it automatically for the first time)
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // rendering the data to screen
  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    content = error;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {movies.length === 0 && !isLoading && !error && <p>Found no movies.</p>}
        {!isLoading && movies.length !== 0 && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
