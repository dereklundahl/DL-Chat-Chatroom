import React, { Component }from 'react';

class MessageList extends Component {
  constuctor(props) {
    super(props);

  this.state = {

  };

}

componentDidMount() {
  this.romsRewf.on('child_added', snapshot => {
    console.log(snapshot);
  });
}

}
