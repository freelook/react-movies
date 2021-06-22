import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import AddToPlaylist from './AddToPlaylist';
import RemoveFromPlaylist from './RemoveFromPlaylist';

const Movie = (props) => {
  const {movie, mode} = props;
  return (
      <Card>
        <a href={`https://www.imdb.com/title/${movie.imdbID}`} target='_blank' rel='noreferrer'>
          <Image src={movie.Poster} alt={movie.Title} />
        </a>
        <Card.Content>
          <Card.Header>{movie.Title}</Card.Header>
        </Card.Content>
        <Card.Content>
          {mode === 'search' ?
              <div onClick={() => props.handleAddToPlaylistClick(movie)}>
                <AddToPlaylist/>
              </div> : null}
          {mode === 'playlist' ?
              <div onClick={() => props.handleRemoveFromPlaylistClick(movie)}>
                <RemoveFromPlaylist/>
              </div> : null}
        </Card.Content>
      </Card>
  );
};

export default Movie;
