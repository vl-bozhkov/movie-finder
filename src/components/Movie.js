import React from 'react';
import { Link } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = props => {
  return (
    <div>
      <Link to={`/${props.movie.id}`}>
        <img
          src={`${POSTER_PATH}${props.movie.poster_path}`}
          alt={props.movie.title}
        />
      </Link>
    </div>
  );
};

export default Movie;
