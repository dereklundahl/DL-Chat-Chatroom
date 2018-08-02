import React, { Component }from 'react';


class MessageList extends Component {
  constructor(props) {
  super(props);

  this.state = {
    messages: [],

  };

  this.messagesRef = this.props.firebase.database().ref('messages');
}

componentDidMount() {
  this.messagesRef.on('child_added', snapshot => {
    const message = snapshot.val();
    message.key = snapshot.key;
    this.setState({ messages: this.state.messages.concat(message) })

  });
}



render() {
  return (
    <div className='message-list'>
      <h2>{this.props.activeRoom.name}</h2>
      <ul>
        {
          this.state.messages.map( (message, index) => {
            if (this.props.activeRoom.key === message.roomId) {
              return
                <table key={index}>
                  <tbody>
                    <tr>
                      <td>{message.username}:{message.content}</td>
                      <td>{message.sentAt}</td>
                    </tr>
                  </tbody>
                </table>
            }
          })
        }
      </ul>
    </div>
  )
}

}

export default MessageList
