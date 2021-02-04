import React, { Component } from 'react';
import './App.css';
import AdminLogin from './components/AdminLogin.js'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import Songs from './components/Songs';
import EditSong from './components/EditSong';
import CreateSongForm from './components/CreateSongForm';

class App extends Component {
  
  state = {
    token: "",
    username: ""
  }
  
  setStorageAdmin = (token, username) => {
       if (token) {
        localStorage.clear();
        localStorage.setItem("token", token)
        this.setState({token}, () => this.setUserName(username) );
       } else {
         alert("Invalid Credentials")
       }
  }

  setUserName = (username) => {
    this.setState({   
      ...this.state,
      username
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
        {/* {this.state.token ? "" : <Redirect to={"/"}/>} */}
        
      </div>

    )
  }
}

export default withRouter(App);
