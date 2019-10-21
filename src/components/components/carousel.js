import React, { Component } from 'react';
import '../Home.css';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>

                <div style={{ width: '50%' }} className="container carousel-my">
                    <div className="bd-example">
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={this.props.topAlbums[0].strArtistThumb} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{this.props.topAlbums[0].strAlbum}</h5>
                                        <p>{this.props.topAlbums[0].strArtist}</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={this.props.topAlbums[1].strArtistThumb} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{this.props.topAlbums[1].strAlbum}</h5>
                                        <p>{this.props.topAlbums[1].strArtist}</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={this.props.topAlbums[2].strArtistThumb} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{this.props.topAlbums[2].strAlbum}</h5>
                                        <p>{this.props.topAlbums[2].strArtist}</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={this.props.topAlbums[3].strArtistThumb} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{this.props.topAlbums[3].strAlbum}</h5>
                                        <p>{this.props.topAlbums[3].strArtist}</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={this.props.topAlbums[5].strArtistThumb} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{this.props.topAlbums[5].strAlbum}</h5>
                                        <p>{this.props.topAlbums[5].strArtist}</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button >
                            <button className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button >
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
