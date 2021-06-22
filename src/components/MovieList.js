import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  return (
    <div className='movies'>
      {props.movies.map((movie, index) => {
        return (
          <Movie
              movie={movie}
              mode={props.mode}
              key={`m-${index}`}
              handleAddToPlaylistClick={props.handleAddToPlaylistClick}
              handleRemoveFromPlaylistClick={props.handleRemoveFromPlaylistClick}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
