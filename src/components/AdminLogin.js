import React, { Component } from 'react';
import {API_URL} from './constants/API'
import '../styles/AdminLogin.css'

const ADMINLOGINAPI = `${API_URL}/authenticate`

class AdminLogin extends Component {
    state = { 
        username:"",
        password:""
    }
    
    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value });
    }
    
    onSubmit = (e) => {
        e.preventDefault()
        fetch(ADMINLOGINAPI, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accepts: "application/json",
            }, 
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => this.props.setStorageAdmin(data.token, this.state.username))
    }
    
    render() { 
        const {username, password} = this.state

        return ( 
           
        <div className="loging-wrapper">
            <form  onSubmit={this.onSubmit}>
                <label>Username:</label>
                <input className="form-control" type="text" name="username" value={username} onChange={this.onChange}/>  
                <label>Password:</label>
                <input className="form-control" type="password" name="password" value={password} onChange={this.onChange}/> 
                <input className="login_button" type="submit" value="Login"/>
            </form>
        </div> );
        
    }
}
 
export default AdminLogin;