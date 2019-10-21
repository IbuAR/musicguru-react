import React, { Component } from 'react'
import axios from 'axios';
import Loader from '../common/Loader';
import Toptracks from './components/Toptracks';
import Topalbums from './components/Topalbums';
import Carousel from './components/carousel';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {

    state = {
        topTracks: [],
        topAlbums: [],
        loading: true
    }

    componentDidMount() {
        let TopTracksURL = 'https://theaudiodb.com/api/v1/json/1/trending.php?country=us&type=itunes&format=singles';
        let TopAlbumsURL = 'https://theaudiodb.com/api/v1/json/1/trending.php?country=us&type=itunes&format=albums';
        axios.get(TopTracksURL)
            .then(res => {
                this.setState({ topTracks: res['data']['trending'] });
            });

        axios.get(TopAlbumsURL)
            .then(res => {
                this.setState({ topAlbums: res['data']['trending'], loading: false });
            });
    }

    render() {
        return (
          <div>
            <div className="container">
              <h1 className="title heads">Trending Songs</h1>
            </div>
            <div className="container">
              <div className="row">
                {!this.state.loading &&
                  this.state.topTracks.map((tracks, index) => (
                    <Toptracks key={"song" + index} tracks={tracks} />
                  ))}
                <div className="container">
                  {this.state.loading && <Loader />}
                </div>
              </div>
            </div>

            <div className="container">
              <h1 className="title heads">Trending Albums</h1>
            </div>
            <div className="container">
              <div className="row">
                {!this.state.loading &&
                  this.state.topAlbums.map((albums, index) => (
                    <Topalbums key={"song" + index} albums={albums} />
                  ))}
                <div className="container">
                  {this.state.loading && <Loader />}
                </div>
              </div>
            </div>

            <div className="container">
              <h1 className="title heads">Top Artists</h1>
            </div>
            <div className="container">
              <div className="container">
                {this.state.loading && <Loader />}
              </div>
              {!this.state.loading && (
                <Carousel topAlbums={this.state.topAlbums} />
              )}
            </div>

            <div className="card text-white text-center bg-dark mt-100">
              <div className="card-header">MusicGuru</div>
              <div className="card-body">
                <h5 className="card-title">All you favourite songs</h5>
                <p className="card-text">Filled with Rhythms</p>
                <Link href="#" to="/search" className="btn btn-light">
                  Music Search
                </Link>
              </div>
              <div className="card-footer text-muted text-center">
                <i className="fab fa-facebook-square m-2 "></i>
                <i className="fab fa-instagram m-2"></i>
                <i className="fab fa-youtube m-2"></i>
              </div>
            </div>
          </div>
        );
    }
}


export default Home;