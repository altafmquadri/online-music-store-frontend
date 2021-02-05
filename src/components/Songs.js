import React, { Component } from 'react';
import SongCard from './SongCard';
import {API_URL} from './constants/API'
import '../styles/Songs.css'

const DELETESONGAPI = `${API_URL}/admin/deletesong/`
const SONGSAPI = `${API_URL}/admin/songs`

class Songs extends Component {
    state = {
        songs: []
    }
    
    componentDidMount() {    
        fetch(SONGSAPI, {
            method: "GET",
            headers: {
                'Authorization': "Bearer " + localStorage.token,
                'Content-Type':'application/json'
            }
        })
            .then(res => res.json())
            .then(data => this.setSongs(data))
    }

    setSongs = (songs) => {
        this.setState({
            songs
        });
    }

    deleteSong = (id) => {
        fetch(DELETESONGAPI + id , {
            method: "DELETE",
            headers: {
                'Authorization': "Bearer " + localStorage.token,
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(s => {
            this.setState({
               songs: this.state.songs.filter(song => song.id !== id)
            })
        })
    }


    render() {
        return (
            <div>
                
                <div className="songlist">
                    {this.state.songs.map(song => {
                        return <SongCard key={song.id} song={song} deleteSong={this.deleteSong}/>
                    })}
                </div>
            </div>

        );
    }
}

export default Songs;