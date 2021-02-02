import React, { Component } from 'react';
import SongCard from './SongCard';
import './Songs.css'

const SONGSAPI = `http://localhost:8080/api/admin/songs`

class Songs extends Component {
    state = { 
        songs: []
     }

    componentDidMount() {
        fetch(SONGSAPI)
            .then(res => res.json())
            .then(data =>  this.setSongs(data))
    }

    setSongs = (songs) => {
        this.setState({ 
            songs
        });
    }

    render() { 
        return ( 
        <div className="songlist">
            {this.state.songs.map(song => {
                 return <SongCard key={song.id} song={song} />
            })}
        </div>
        
        );
    }
}
 
export default Songs;