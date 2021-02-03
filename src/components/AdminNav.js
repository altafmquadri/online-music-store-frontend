import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class AdminNav extends Component {
    render() {
        return (
            <div className="navbar">
                <Link className="navbar-brand" style={{color: "white"}} to="/songs">Home</Link>
                <Link className="navbar-brand" style={{color: "white"}} to="/addsong">Add Song</Link>
            </div>
        )
    }
}
