import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class AdminNav extends Component {


    render() {
        return (
            <div className="navbar" >
            {this.props.token ? 
              <React.Fragment> 
                    <Link className="navbar-brand" style={{margin:0,color: "white"}} to="/songs">Home</Link>
                    <Link className="navbar-brand" style={{margin:0,color: "white"}} to="/addsong">Add Song</Link>
                    <Link className="navbar-brand" onClick={this.props.logout} style={{margin:0,color: "white"}} to="/">Logout</Link>
              </React.Fragment>
                :
                 ""
            }
            </div>
        )
    }
}
