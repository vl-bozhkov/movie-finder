import React from 'react';

const Genres = props => {
  return (
    <React.Fragment>
      {props.genres &&
        props.genres.map(g => (
          <span key={g.id} className="badge badge-light ">
            {g.name}
          </span>
        ))}
    </React.Fragment>
  );
};

export default Genres;
