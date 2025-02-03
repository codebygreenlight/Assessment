import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import AddMovie from './components/AddMovie'

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL: "https://example.com/inception.jpg",
      rating: 5
    },
    // Add more initial movies if desired
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = (type, value) => {
    const filtered = movies.filter(movie => {
      if (type === 'title') {
        return movie.title.toLowerCase().includes(value.toLowerCase());
      } else if (type === 'rating') {
        return value === '' || movie.rating >= Number(value);
      }
      return true;
    });
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    const updatedMovies = [...movies, { ...newMovie, rating: Number(newMovie.rating) }];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <div className="app">
      <h1>Movie Collection</h1>
      <AddMovie onAddMovie={handleAddMovie} />
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  )
}

export default App
