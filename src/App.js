import React from 'react';
import { useState, useEffect } from 'react';
import './app.css';
import search from './search.svg';
import MovieCard from './MovieCard';
import logo from './Filmpire.png';

// 4038db44

const apiLInk = 'https://www.omdbapi.com/?i=tt3896198&apikey=4038db44';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('spider man');
    const searchMovies = async (title) => {
        const response = await fetch(`${apiLInk}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };
    useEffect(() => {
        searchMovies('spider-man');
    }, []);
    {
        var str = searchTerm;
        str = str.replace(/\s+/g, '-').toLowerCase();
    }
    const search = (event) => {
        if (event.key === 'Enter') {
            searchMovies(searchTerm)
        }
    };
    return (
        <div className="app">
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <div className="container">
                        <div className="d-flex search">
                            <input
                                className="form-control me-2"
                                type="text"
                                placeholder="Search"
                                aria-label="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={search}
                            />
                            
                            <button
                                className="btn btn-outline-info"
                                type="Button"
                                onClick={() => searchMovies(searchTerm)}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="appp">
                <div className="logo">
                    <img src={logo} alt="Filmpire" />
                </div>
                {movies?.length > 0 ? (
                    <div className="containerr">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} shaker={str} />
                        ))}
                    </div>
                ) : (
                    <div>
                        <h2>No Movies Found</h2>
                    </div>
                )}{' '}
            </div>
            <footer className="pt-3">
                Made With &#128153; By{' '}
                <a
                    href="https://youssefgameel.netlify.app/"
                    className="App-link"
                >
                    Joe.H
                </a>
            </footer>
        </div>
    );
};
export default App;
