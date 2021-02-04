import React, { Component } from 'react';
import SongCard from './SongCard';
import './Songs.css'
import AdminNav from './AdminNav'

const BEARER = "Bearer " + localStorage.token
const SONGSAPI = `http://localhost:8080/api/admin/songs`
const DELETESONGAPI = `http://localhost:8080/api/admin/deletesong/`

class Songs extends Component {
    state = {
        songs: []
    }

    componentDidMount() {
        console.log(BEARER);
        fetch(SONGSAPI, {
            method: "GET",
            withCredentials: true,
            credentials: 'include',
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
        console.log(id)
        fetch(DELETESONGAPI + id , {
            method: "DELETE"
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
                <AdminNav />
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