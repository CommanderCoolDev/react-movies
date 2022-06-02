import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;
// console.log(API_KEY);
// console.log(process.env);
// console.log(process.env.OMDB_API_KEY);
const BASIC_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  searchMovies = (str, type) => {
    fetch(`${BASIC_URL}s=${str}&type=${type}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
      .catch(err => {
        console.error(err);
      });
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
