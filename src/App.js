import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faFilm, faDumbbell, faPen } from '@fortawesome/free-solid-svg-icons'
import './App.css';

class App extends Component {
    state = {
        bookTitle: null,
        movieTitle: null,
        sportsTitle: null,
        diaryTitle: null
    }

    handleButtonEnter = type => {
        switch(type) {
            case 'book':
                this.setState({ bookTitle: "Book Reviews" });
                return;
            case 'movie':
                this.setState({ movieTitle: "Movie Reviews" });
                return;
            case 'sports':
                this.setState({ sportsTitle: "Sports Reviews" });
                return;
            case 'diary':
                this.setState({ diaryTitle: "Diary" });
                return;
            default:
                return;
        }
    }

    handleButtonLeave = type => {
        this.setState({ [`${type}Title`]: null });
    }

    render() {
        return (
            <div className="wrapper">
                <button
                    className="book-button"
                    onMouseEnter={() => this.handleButtonEnter('book')}
                    onMouseLeave={() => this.handleButtonLeave('book')}
                >
                    <FontAwesomeIcon className="icon" icon={faBook} size="4x" />
                    <div>{this.state.bookTitle}</div>
                </button>
                <button
                    className="movie-button"
                    onMouseEnter={() => this.handleButtonEnter('movie')}
                    onMouseLeave={() => this.handleButtonLeave('movie')}
                >
                    <FontAwesomeIcon className="icon" icon={faFilm} size="4x" />
                    <div>{this.state.movieTitle}</div>
                </button>
                <button
                    className="sports-button"
                    onMouseEnter={() => this.handleButtonEnter('sports')}
                    onMouseLeave={() => this.handleButtonLeave('sports')}
                >
                    <FontAwesomeIcon className="icon" icon={faDumbbell} size="4x" />
                    <div>{this.state.sportsTitle}</div>
                </button>
                <button
                    className="misc-button"
                    onMouseEnter={() => this.handleButtonEnter('diary')}
                    onMouseLeave={() => this.handleButtonLeave('diary')}
                >
                    <FontAwesomeIcon className="icon" icon={faPen} size="4x" />
                    <div>{this.state.diaryTitle}</div>
                </button>
            </div>
        );
    }
}



export default App;