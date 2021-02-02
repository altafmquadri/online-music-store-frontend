import React, { Component } from 'react';

const ADMINLOGINAPI = `http://localhost:8080/api/admin/login`

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
        .then(data => console.log(data))
    }
    
    
    render() { 
        const {username, password} = this.state

        return ( <div>
            <form onSubmit={this.onSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={this.onChange}/>  
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={this.onChange}/> 
                <input type="submit" value="Login"/>
            </form>
        </div> );
    }
}
 
export default AdminLogin;