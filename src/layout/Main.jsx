import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.OMDB_API_KEY;
const BASIC_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  searchMovies = (str, type) => {
    fetch(`${BASIC_URL}s=${str}&type=${type}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <Search movies={movies} cb={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}
export { Main };
