import React, { Component } from 'react';

export default class Artists extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="mycard col-md-2">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={this.props.artist.strArtistThumb} className="card-img-top" alt={this.props.artist.strArtist} />
                    <div className="card-body">
                        <p style={{
                            fontSize: '30px',
                            fontWeight: '600'
                        }} className="card-text artistTitle"><i style={{
                            margin: '5px'
                        }} className="fas fa-user"></i>{this.props.artist.strArtist} </p>
                    </div>
                </div>
            </div>
        );
    }
}
