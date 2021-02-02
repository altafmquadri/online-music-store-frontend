import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class AdminNav extends Component {
    render() {
        return (
            <div>
                <div>
                <Link to="/songs">Home</Link>
                </div>
                <div>
                <Link to="/addsong">Add Song</Link>
                </div>
            </div>
        )
    }
}
