import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log("Rendering MessageList");
    return (
        <div>
          {this.props.msgs.map(this._printMsg)}
        </div>
        // <div>
        // Incoming messageS
        // </div>
    );
  }
  _printMsg = (msg) => {
    return <Message username={msg.username} content={msg.content} key={msg.key} type={msg.type} color={msg.color}/>
  }

}
export default MessageList;
