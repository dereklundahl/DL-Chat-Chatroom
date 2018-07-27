import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';

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
    activeRoom: "room1"
  };
}

handleRoomClick() {
  console.log('You clicked a room');
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bloc Chat</h1>
        </header>
        <aside className="side-bar">
          <RoomList firebase={firebase} onClick={() => this.handleRoomClick()}/>
        </aside>
        <section className="main">
          <MessageList firebase={firebase} />
        </section>
      </div>
    );
  }
}

export default App;
