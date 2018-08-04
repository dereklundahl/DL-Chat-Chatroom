import React, { Component } from 'react';


class User extends Component {
  constructor(props) {
    super(props);

  this.state = {
    userSignedIn: false,
  };
}

handleSignInClick () {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup ( provider );
  this.setState ({ userSignedIn: true });
}

handleSignOutClick () {
  this.props.firebase.auth().signOut();
  this.setState ({ userSignedIn: false });
}

componentDidMount() {
  this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user);
  })
}

  render () {
    return (
      <div className="user">
        {this.state.userSignedIn ? <button onClick={() => this.handleSignOutClick()}>Sign-out</button> : <button onClick={() => this.handleSignInClick()}>Sign-in</button>}

      </div>

    );
  }
}

export default User;
