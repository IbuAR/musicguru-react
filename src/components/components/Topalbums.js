import React, { Component } from 'react';

export default class Topalbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
          <div className="col-sm-6 col-md-4 col-xl-3 py-2 w-100 h-100">
            <div className="card">
              <img
                src={this.props.albums.strAlbumThumb}
                className="card-img-top"
                alt="images"
              />
              <div className="card-body">
                <p className="card-text">
                  <i
                    style={{
                      margin: "5px"
                    }}
                    className="fas fa-compact-disc"
                  ></i>
                  {this.props.albums.strAlbum}{" "}
                </p>
                <p className="card-text">
                  <i
                    style={{
                      margin: "5px"
                    }}
                    className="fas fa-user"
                  ></i>
                  {this.props.albums.strArtist}{" "}
                </p>
              </div>
            </div>
          </div>
        );
    }
}


