import React, { Component }from 'react';


class MessageList extends Component {
  constructor(props) {
  super(props);

  this.state = {
    userName: "DLunds",
    content: "test content",
    sentAt: "",
    roomId: "room69",
  };
  this.roomsRef = this.props.firebase.database().ref('rooms');
}

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;

  });
}



render() {
  return (
    <div>
      <h2 className="active-room">{this.props.activeRoom}</h2>
        <p>{this.state.userName}{this.state.sentAt}</p><br />
        <p>{this.state.content}</p>
    </div>
  )
}

}

export default MessageList
