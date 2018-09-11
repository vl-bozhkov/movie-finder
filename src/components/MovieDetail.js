import React, { Component } from 'react';

// const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const API_KEY = 'fa12fc1e59ab1b0c6d4f9bd143e6e73b';
// const POSTER_PATH = 'http://image.tmdb.org/t/p/w92';
// const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
    trailer: {}
  };
  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=${API_KEY}&language=en-US&apprend_to_response=videos`
      );
      const movie = await res.json();
      const trailerRes = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }/videos?api_key=${API_KEY}&language=en-US`
      );
      const trailer = await trailerRes.json();
      this.setState({
        movie: movie,
        trailer: trailer.results[0].key
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.state.trailer);
    return (
      <div>
        <h1>{this.state.movie.title}</h1>
        <div className="row">
          <div className="col-sm-6">
            <div className="mt-3 embed-responsive embed-responsive-21by9">
              <iframe
                title={this.state.movie.title}
                className="embed-responsive-item"
                src={`https://www.youtube-nocookie.com/embed/${
                  this.state.trailer
                }?rel=0&amp;controls=0&amp;showinfo=0`}
                allowFullScreen
                width="200"
                height="200"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
