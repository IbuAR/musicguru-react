import React, { Component } from 'react';
import './artalb.css';
export default class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
          <div className="col-sm-6 col-md-4 col-xl-3 py-2 w-100 h-100 ">
            <div className="card">
              {this.props.album.strAlbumThumb ? (
                <img
                  src={this.props.album.strAlbumThumb}
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
                <p className="card-text">
                  <i
                    style={{
                      margin: "5px"
                    }}
                    className="fas fa-compact-disc"
                  ></i>
                  {this.props.album.strAlbum}{" "}
                </p>
                <p className="card-text">
                  <i
                    style={{
                      margin: "5px"
                    }}
                    className="fas fa-user"
                  ></i>
                  {this.props.album.strArtist}
                </p>
              </div>
            </div>
          </div>
        );
    }
}

