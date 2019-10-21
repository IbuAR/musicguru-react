import React, { Component } from 'react';

export default class Toptracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
          <div className="col-sm-6 col-md-4 col-xl-3 py-2 w-100 h-100">
            <img
              src={this.props.tracks.strTrackThumb}
              className="card-img-top w-100 h-100"
              alt="images"
            />
            <div className="card h-100  card-body">
              <h5 className="card-title">
                <i
                  style={{
                    margin: "5px"
                  }}
                  className="fas fa-music"
                ></i>
                {this.props.tracks.strTrack}
              </h5>
              <p className="card-text">
                <i
                  style={{
                    margin: "5px"
                  }}
                  className="fas fa-compact-disc"
                ></i>
                {this.props.tracks.strAlbum}{" "}
              </p>
              <p className="card-text">
                <i
                  style={{
                    margin: "5px"
                  }}
                  className="fas fa-user"
                ></i>
                {this.props.tracks.strArtist}{" "}
              </p>
            </div>
          </div>
        );
    }
}


var fas = {
    margin: '5px'
}

var fab = {
    margin: '5px'
}

