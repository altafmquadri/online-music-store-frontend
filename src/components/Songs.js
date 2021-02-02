import React, { Component } from 'react';

const SONGSAPI = `http://localhost:8080/api/admin/songs`

class Songs extends Component {
    state = { 
        songs: []
     }

    componentDidMount() {
        fetch(SONGSAPI)
            .then(res => res.json())
            .then(data => this.setSongs(data))
    }

    setSongs = (songs) => {
        this.setState({ 
            songs: [...this.state.songs, songs]
        });
    }

    render() { 
        return ( <h1>Songs</h1> );
    }
}
 
export default Songs;