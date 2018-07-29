import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);

  this.state = {
    rooms: [],
    newRoom: ""
  };

  this.roomsRef = this.props.firebase.database().ref('rooms');

}

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room ) });
  });
}

createRoom(e) {
  e.preventDefault();
  this.roomsRef.push({
    name: this.state.newRoom
  });
  this.setState({ newRoom: "" });
}

handleChange(e) {
  const newRoomName = e.target.value;
  this.setState({ newRoom: newRoomName });
}

handleClick(e) {
  console.log("you clicked on a room");
}

render() {
  return (
    <section className="room-list">
      <div>
        <ul>
          {
          this.state.rooms.map( (room, index) =>
              <li key={index} onClick={(e) => this.handleClick(e)}>{ room.name }</li>)
          }
        </ul>
        <form className="room-create">
          <p>New Chat Room:
            <input type="text" name="chatroomname" size="15" maxLength="20" onChange={(e) => this.handleChange(e)} value={this.state.newRoom} />
            <input type="submit" value="Create Room" onClick={(e) => this.createRoom(e)} />
          </p>
        </form>

      </div>


    </section>
   );
  }

}

export default RoomList;
