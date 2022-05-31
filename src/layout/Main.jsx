import React from "react"
import { Movies } from "../components/Movies"

const API_KEY = 'be9b627c'
  const BASIC_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`

class Main extends React.Component { 
    state = {
        movies :[]
    }
    componentDidMount() {
        fetch(`${BASIC_URL}s=matrix`).then(response => response.json()).then(data => this.setState({movies: data.Search}))
    }

    render() {
        const {movies }= this.state
 return (
     <main className="container content">
         {movies.length  ? <Movies movies={movies}/> : <h3>Loading...</h3>}
         
        </main>
    )
    }
   
}
export {Main}