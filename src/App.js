import React, { useState, useEffect } from 'react';
import * as Api from './Api';
import * as Playlist from './Playlist';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddToPlaylistModal from './components/AddToPlaylistModal';
import { Container, Segment, Menu } from 'semantic-ui-react';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [playlist, setPlaylist] = useState(Playlist.getPlaylist());

  const getMovies = async (searchValue) => {
    const moviesData = await Api.getMoviesData(searchValue);
    if (moviesData.Search) {
      setMovies(moviesData.Search);
    }
  };

  const showModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie();
  };

  const addToPlaylist = (movie) => {
    const newPlaylist = playlist.some(m => m.imdbID === movie.imdbID) ?
        playlist :
        [movie, ...playlist];
    setPlaylist(newPlaylist);
    Playlist.setPlaylist(newPlaylist);
    closeModal();
  };

  const removeFromPlaylist = (movie) => {
    const newPlaylist = playlist.filter(m => m.imdbID !== movie.imdbID);
    setPlaylist(newPlaylist);
    Playlist.setPlaylist(newPlaylist);
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <Container>
      <Menu>
        <Menu.Item name='search' href={'#search'}>
          Search
        </Menu.Item>
        <Menu.Item name='palylist' href={'#playlist'}>
          Playlist
        </Menu.Item>
      </Menu>
      <Segment id={'search'}>
        <div className='search'>
          <MovieListHeading heading='Movies' />
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <MovieList
            mode={'search'}
            movies={movies}
            handleAddToPlaylistClick={showModal}
        />
      </Segment>
      <Segment id={'playlist'}>
        {selectedMovie && <AddToPlaylistModal yes={addToPlaylist} no={closeModal} movie={selectedMovie} />}
        <MovieListHeading heading='Playlist' />
        <MovieList
            mode={'playlist'}
            movies={playlist}
            handleRemoveFromPlaylistClick={removeFromPlaylist}
        />
      </Segment>
    </Container>
  );
};

export default App;
