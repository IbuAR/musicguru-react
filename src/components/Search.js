import React, { Component } from 'react';
import axios from 'axios';
import Artist from './components/Artists';
import Artistalbums from './components/Artistalbums';
import Albums from './components/Albums';
import Loader from '../common/Loader';
export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchAlbums: [],
            searchArtist: [],
            searchArtistAlbums: [],
            loading: false,
            assistText: ''
        };
    }

    Search = (event) => {
        let ArtistTopTracksURL = 'https://theaudiodb.com/api/v1/json/195003/track-top10.php?s=';
        let ArtistSearchURL = 'https://theaudiodb.com/api/v1/json/195003/search.php?s=';
        let AlbumSearchURL = 'https://theaudiodb.com/api/v1/json/195003/searchalbum.php?a=';
        if (this.state.searchText !== '') {
            this.setState({ searchAlbums: [], searchArtist: [], searchArtistAlbums: [], loading: true, assistText: '' });
            if (event === 1) {
                axios.get(AlbumSearchURL + this.state.searchText)
                    .then(res => {
                        if (res['data']['album'] !== null) {
                            this.setState({ searchAlbums: res['data']['album'], loading: false, assistText: '' });
                        } else {
                            this.setState({ assistText: 'Album Not Found', loading: false })
                        }
                    });
            } else {
                axios.get(ArtistSearchURL + this.state.searchText)
                    .then(res => {
                        if (res['data']['artists'] !== null) {
                            this.setState({ searchArtist: res['data']['artists'] });
                        } else {
                            this.setState({ assistText: 'Artist Not Found', loading: false })
                        }
                    });

                axios.get(ArtistTopTracksURL + this.state.searchText)
                    .then(res => {
                        if (res['data']['track'] !== null) {
                            this.setState({ searchArtistAlbums: res['data']['track'], loading: false });
                        }
                    });
            }

        }
    }

    OnChangeHandler = (event) => {
        this.setState({ searchText: event.target.value });
    }
    render() {
        return (
          <div>
            <div className="sbox container-fluid">
              <div className="form-inline my-2 my-lg-0 justify-content-center search heads">
                <input
                  className=" w-75 form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  name="searchtext"
                  onChange={this.OnChangeHandler}
                  required
                />
                <div className="btn-container">
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    name="artist"
                    onClick={event => this.Search(2)}
                  >
                    Search Artist
                  </button>
                  <button
                    className="btn btn-outline-info my-2 my-sm-0"
                    name="album"
                    onClick={event => this.Search(1)}
                  >
                    Search Album
                  </button>
                </div>
              </div>
            </div>

            <div className="container d-flex justify-content-center">
              {this.state.assistText !== "" && (
                <div className="text-danger">
                  {" "}
                  <i className="fas fa-exclamation"></i> {this.state.assistText}
                </div>
              )}
            </div>

            {this.state.loading && <Loader />}

            {(this.state.searchArtist.length > 0 ||
              this.state.searchAlbums.length > 0) && (
              <div className="container">
                <h1 className="title heads">Result</h1>
              </div>
            )}
            <div className="container">
              <div className="row">
                {this.state.searchArtist.length > 0 &&
                  this.state.searchArtist.map((artist, index) => (
                    <Artist key={"song" + index} artist={artist} />
                  ))}
              </div>
            </div>
            {this.state.searchArtistAlbums.length > 0 && (
              <div className="container">
                <h1 className="title heads">Top Songs</h1>

                <div className="container">
                  <div className="row">
                    {this.state.searchArtistAlbums.length > 0 &&
                      this.state.searchArtistAlbums.map((track, index) => (
                        <Artistalbums key={"song" + index} tracks={track} />
                      ))}
                  </div>
                </div>
              </div>
            )}

            {this.state.searchAlbums.length > 0 && (
              <div className="container">
                <div className="row">
                  {" "}
                  {this.state.searchAlbums.map((album, index) => (
                    <Albums key={"song" + index} album={album} />
                  ))}
                </div>
              </div>
            )}
          </div>
        );
    }
}
