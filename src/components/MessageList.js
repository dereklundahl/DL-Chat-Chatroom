import React, { Component }from 'react';


class MessageList extends Component {
  constuctor(props) {
    super(props);

  this.state = {
    userName: "DLunds",
    content: "test content",
    sentAt: "",
    roomId: "room1",
  };

}

componentDidMount() {
  this.romsRewf.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room ) });
  });
}



render() {
  return (
    <div>
      <h2 className="active-room">{this.state.roomId}</h2>
        <p>{this.state.userName}{this.state.sentAt}</p><br />
        <p>{this.state.content}</p>
    </div>
  )
}

}

export default MessageList
