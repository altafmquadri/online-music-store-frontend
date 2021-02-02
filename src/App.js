import React, { Component } from 'react';
import './App.css';
import AdminLogin from './components/AdminLogin.js'
import {Switch, Route, withRouter} from 'react-router-dom'
import Songs from './components/Songs';
import EditSong from './components/EditSong';
import CreateSongForm from './components/CreateSongForm';

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
          <Route exact path={"/edit/songs/:id"} component={EditSong}/> 
          <Route exact path={"/addsong"} component={CreateSongForm}/>  
        </Switch>
      </div>

    )
  }
}

export default withRouter(App);
