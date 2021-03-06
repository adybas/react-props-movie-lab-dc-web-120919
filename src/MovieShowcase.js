import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  // generateMovieCards = () => {
  //   console.log(movieData)
  //   return movieData.map( (movieObj) => {
  //     console.log(movieObj)
  //     return <MovieCard data={movieObj} />
  //   })
  //   // map over your movieData array and return an array of the correct JSX
  // }

  generateMovieCards = () => {
		return movieData.map((movie, index) => <MovieCard
		      key={index}
		      title={movie.title}
		      IMDBRating={movie.IMDBRating}
		      genres={movie.genres}
		      poster={movie.poster}
		    />)
	};

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
