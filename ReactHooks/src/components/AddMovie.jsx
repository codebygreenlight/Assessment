import React, { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input
        type="text"
        name="title"
        value={newMovie.title}
        onChange={handleChange}
        placeholder="Movie title"
        required
      />
      <input
        type="text"
        name="description"
        value={newMovie.description}
        onChange={handleChange}
        placeholder="Movie description"
        required
      />
      <input
        type="url"
        name="posterURL"
        value={newMovie.posterURL}
        onChange={handleChange}
        placeholder="Poster URL"
        required
      />
      <input
        type="number"
        name="rating"
        value={newMovie.rating}
        onChange={handleChange}
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie; 