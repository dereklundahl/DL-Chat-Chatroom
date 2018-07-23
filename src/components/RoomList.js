import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

  this.state = {
    rooms: []
  };

  this.roomsRef = this.props.firebase.database().ref('rooms');

}

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    console.log(snapshot);
  })
}

render() {
  return (
    <div className="RoomList">
      <h1>Testing</h1>
    </div>
  );
  }

}

export default RoomList;
