import React from 'react';
const MovieCard = ({ movie, shaker }) => {
    return (
        <div className="movie">
            <a href={'https://hdtoday.tv/search/' + shaker}>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img
                    src={
                        movie.Poster !== 'N/A'
                            ? movie.Poster
                            : 'https://via.placeholder.com/400'
                    }
                    alt={movie.Poster}
                />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
            </a>
        </div>
    );
};
export default MovieCard;
