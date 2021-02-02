import React, { Component } from 'react'

const EDITSONGAPI = `http://localhost:8080/api/admin/edit/songs/`

export default class EditSong extends Component {

    state = {

    }

    componentDidMount(){
        fetch(EDITSONGAPI + this.props.match.params.id)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Edit Song</h1>
            </div>
        )
    }
}
