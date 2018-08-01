import React, { Component }from 'react';


class MessageList extends Component {
  constructor(props) {
  super(props);

  this.state = {
    activeRoomDisplaying: true,
  };

  this.roomsRef = this.props.firebase.database().ref('rooms');
}

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;

  });
}


displayMessages(obj) {
  for (let i in obj) {
    console.log(i + "--" + obj[i])
  }
}



render() {
  return (
    <div>
        <h2 className="active-room">{this.props.activeRoom.name}</h2>
        <p>{(obj) => this.displayMessages(this.props.activeRoom)}</p><br />
        <p>I have nothing to say</p>
    </div>
  )
}

}

export default MessageList
