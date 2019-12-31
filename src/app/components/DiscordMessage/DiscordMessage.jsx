import React, { Component } from 'react';
import './DiscordMessage.scss';

class DiscordMessage extends Component {
  constructor (props) {
    super(props);
    this.username = props.username;
    this.avatar = props.avatar;
    this.content = props.children;
  }

  render () {
    const content = this.props.children;
    const { reactions } = this.props;
    return (
      <div className='discord-message'>
        <div className='discord-message-avatar'>
          {this.avatar}
        </div>

        <div className='discord-message-main'>
          <div className='discord-message-name-section'>
            <div className='discord-message-username'>
              {this.username}
            </div>
            <time className='discord-message-timestamp' datettime='1577256853807'>
              <span>
                Today at 12:00 PM
              </span>
            </time>
          </div>
          <div className='discord-message-content'>
            {content}
          </div>
          {reactions && <div className='discord-message-reactions-container'>
            <div className='discord-message-reactions'>
              <div>
                <div className='discord-message-reactions-box'>
                  <div className='discord-message-reactions-inner' role='button'>
                    <img src='https://discordapp.com/assets/09204f6a96455580e749454b7449aa82.svg' alt='📌' draggable='false' class='emoji' />
                    <div class='discord-message-reaction-count' style={{ minWidth: '18px' }}>{reactions}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    )
  }
}

export default DiscordMessage;