import React from 'react';
import { useState, useEffect } from 'react';
import './app.css';
import search from './search.svg';
import MovieCard from './MovieCard';

// 4038db44

const apiLInk = 'http://www.omdbapi.com/?i=tt3896198&apikey=4038db44';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${apiLInk}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };
    useEffect(() => {
        searchMovies('batman');
    }, []);
    return (
        <div className="app">
            <h1>Filmpire</h1>
            <div className="search">
                <input
                    placeholder="Search for Whatever You Want"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={search} alt="search" onClick={() => searchMovies(searchTerm)} />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div>
                    <h2>No Movies Found</h2>
                </div>
            )}
        </div>
    );
};
export default App;