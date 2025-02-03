import React from 'react';

const Filter = ({ onFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => onFilterChange('title', e.target.value)}
        className="filter-input"
      />
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Filter by rating..."
        onChange={(e) => onFilterChange('rating', e.target.value)}
        className="filter-input"
      />
    </div>
  );
};

export default Filter; 