import React, { Component } from 'react';
import './artalb.css';

export default class ArtistsAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
          <div className="col-sm-6 col-md-4 col-xl-3 py-2 w-100 h-100">
            <div className="card">
              {this.props.tracks.strTrackThumb ? (
                <img
                  src={this.props.tracks.strTrackThumb}
                  className="card-img-top"
                  alt="..."
                />
              ) : (
                <img
                  src="https://f4.bcbits.com/img/0011929372_10.jpg"
                  className="card-img-top"
                  alt="..."
                />
              )}
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-music"></i>
                  {this.props.tracks.strTrack}
                </h5>
                <p className="card-text">
                  <i className="fas fa-compact-disc"></i>
                  {this.props.tracks.strAlbum}{" "}
                </p>
                <p className="card-text">
                  <i className="fas fa-user"></i>
                  {this.props.tracks.strArtist}{" "}
                </p>
              </div>
              <div className="yt-cont">
                <a
                  href={this.props.tracks.strMusicVid}
                  target="_blank"
                  rel="noopener"
                  className="yt-btn d-flex justify-content-center align-items-center p-2"
                >
                  <i className="fab fa-youtube m-1"></i>Youtube
                </a>
              </div>
            </div>
          </div>
        );
    }
}
