import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";





function Details () {
    var APIKey = 'f183bca038595fa5d2a8cfb03065bb35';
    var image_path = 'https://image.tmdb.org/t/p/w500';

    
    const {id} = useParams();
    const [movie, setMovie] = useState({})
    
    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`).
        then(response => response.json()).
        then(data => {
            const movie = {
                id,
                title: data.title,
                sinopse: data.overview,
                image: `${image_path}${data.poster_path}`,
                releaseDate: data.release_date
            }
           
            setMovie(movie)
        })
    }, {id})

    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="release-date">Release date: {movie.releaseDate}</span>
                    <Link to={'/'}> <button>Go Back</button> </Link>
                </div>

            </div>
        </Container>

       
    )
}

export default Details;