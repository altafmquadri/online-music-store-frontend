import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import AdminLogin from './components/AdminLogin.js'
import AdminNav from './components/AdminNav'
import CreateSongForm from './components/CreateSongForm';
import EditSong from './components/EditSong';
import Songs from './components/Songs';
import './App.css';


class App extends Component {

  state = {
    token: "",
    username: ""
  }

  setStorageAdmin = (token, username) => {
    if (token) {
      localStorage.setItem("token", token)
      this.setState({ token }, () => this.setUserName(username));
    } else {
      alert("Invalid Credentials")
    }
  }

  logout = () => {
    localStorage.clear()
    this.setState({
      token: "",
      username: ""
    })
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
        <AdminNav logout={this.logout} token={this.state.token} />
        <Switch>
          <Route exact path={"/"} render={(routerProps) => <AdminLogin setStorageAdmin={this.setStorageAdmin} {...routerProps} />} />
          <Route exact path={"/songs"} render={(routerProps) => <Songs {...routerProps} />} />
          <Route exact path={"/edit/songs/:id"} component={EditSong} />
          <Route exact path={"/addsong"} component={CreateSongForm} />
        </Switch>
        {this.state.token ? "" : <Redirect to={"/"} />}

      </div>

    )
  }
}

export default withRouter(App);
