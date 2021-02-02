import React, { Component } from 'react';
import './App.css';
import AdminLogin from './components/AdminLogin.js'
import Songs from './components/Songs'
import {Switch, Route, withRouter} from 'react-router-dom'


class App extends Component {
  
  state = {
    admin: {
      username:""

    },
    user:""
  }
  
  setStorageAdmin = (data, username) => {
       if (data) {
        localStorage.setItem("isLoggedIn", data)
        this.setUserName(username)

       } else {
         alert("Invalid Credentials")
       }
  }

  setUserName = (username) => {
    this.setState({   
      ...this.state,
      admin: {...this.state.username, username}
    }, () => this.props.history.push("/songs"));
  }
  
  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path={"/"} render={(routerProps) => <AdminLogin setStorageAdmin={this.setStorageAdmin} {...routerProps}/>}/>
          <Route exact path={"/songs"} render={(routerProps) => <Songs {...routerProps}/>}/>
         

          

        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
