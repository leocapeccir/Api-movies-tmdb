import { Container, Movie, MovieList } from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

var APIKey = 'f183bca038595fa5d2a8cfb03065bb35';
const image_path = 'https://image.tmdb.org/t/p/w500'

function Home() {


const [movies, setMovies] = useState([])
useEffect(()=> {
    
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => setMovies(data.results))
    
}, [])

    
    return (
        <Container>
            <h1>20 Filmes mais Populares</h1>
        
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key= {movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt="spiderman"/></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}

             
            </MovieList>
        </Container>
    )
}

export default Home;