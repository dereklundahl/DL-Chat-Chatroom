import React, { Component } from 'react';


class MessageList extends Component {
  constructor(props) {
    super(props);

  this.state = {
    messages: [],
    username: "",
    content: "",
    sentAt: "",
    roomId: ""

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

createMessage(e) {
  e.preventDefault();
  this.messagesRef.push({
    content: this.state.content

  });
  this.setState({ content: "" });

}

handleMessageChange(e) {
  e.preventDefault();
  const newMessage = e.target.value;
  this.setState({
    content: newMessage,
    username: this.props.user,
    roomId: this.props.activeRoom.roomId
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
              return <table key={index}>
                       <tbody>
                         <tr>
                           <td>{message.username}:</td>
                           <td>{message.content}</td>
                           <td> Sent At: {message.sentAt}</td>
                         </tr>
                      </tbody>
                    </table>
            }
          })
        }
      </ul>
      <footer>
      {
        this.props.activeRoom && this.props.user !== null ?
          <form>
            <textarea
              placeholder="Write your message here..."
              value={this.state.content}
              onChange={ (e) => this.handleMessageChange(e)}
            />
            <input
              type="submit"
              value="Send"
              onClick={ (e) => this.createMessage(e) }>
            </input>
          </form>
          :
          <h3>Sign in to send messages</h3>
      }
      </footer>
    </div>
  );
}

}

export default MessageList;
