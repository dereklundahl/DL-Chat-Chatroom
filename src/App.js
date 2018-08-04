import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import User from './components/User.js';

var config = {
  apiKey: "AIzaSyCnW01J7rjhrCNuxnGHgXgqjXaKqIRh1_g",
  authDomain: "bloc-chat-react-33817.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-33817.firebaseio.com",
  projectId: "bloc-chat-react-33817",
  storageBucket: "https://console.firebase.google.com/project/bloc-chat-react-33817/database/bloc-chat-react-33817/data",
  messagingSenderId: "236398055250"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props){
    super(props);

  this.state = {
    activeRoom: "room1",
    user: null

  };
this.handleRoomClick = this.handleRoomClick.bind(this);
}

setUser (user) {
  this.setState ({ user: user });
  console.log(user);
}

handleRoomClick(room) {
  this.setState({ activeRoom: room });

}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bloc Chat</h1>
          <User
            firebase={firebase}
            setUser={(user) => this.setUser(user)}
            user={this.state.user}
          />
        </header>
        <aside className="side-bar">
          <RoomList
            firebase={firebase}
            handleRoomClick={this.handleRoomClick}
            activeRoom={this.state.activeRoom}
          />
        </aside>
        <section className="main">
          <MessageList
            firebase={firebase}
            activeRoom={this.state.activeRoom}
            user={this.state.user}
          />
        </section>
      </div>
    );
  }
}

export default App;
