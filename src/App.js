// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './icons8-search.svg';
import MovieCard from './MovieCard';
const API_URL = 'https://www.omdbapi.com?apikey=2464e595';
// const movie1 = {

//   "Title": "Spiderman",
//   "Year": "1990",
//   "imdbID": "tt0100669",
//   "Type": "movie",
//   "Poster": "N/A"

// }
function App() {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  }
  useEffect(() => {
    searchMovie('Spiderman');
  }, []);
  return (
    <div className="app">
      <h1>Movie hub</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>
      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>

          ) :
          (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>

  );
}

export default App;
