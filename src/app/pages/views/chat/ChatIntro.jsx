import React, { Component } from 'react';
import { ParticleTextTransition, DiscordMessage, Icon } from '../../../components';
import { Users } from '../../../constants';
import './ChatIntro.scss';

class ChatIntro extends Component {
  constructor (props) {
    super(props);
    setTimeout(() => {
      window.routeHandler();
    }, 4000)
  }

  randomMessage () {
    const ids = Object.keys(Users);
    const id = ids[Math.floor(Math.random() * ids.length)]
    const user = Users[id];
    const messages = [
      'hey guys', 'Really wanted to go to starbucks today', 'just watching some youtube',
      'HEY!!!', 'come on knock it off', 'Just in the city at the moment', 'Why is astralmod not working',
      'I really love this TV show', 'bits & Bytes is the best'
    ]
    return user.avatar ? (<DiscordMessage username={user.username} avatar={<Icon url={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} />}>
      {messages[Math.floor(Math.random() * messages.length)]}
    </DiscordMessage>) : this.randomMessage();
  }

  render () {
    return (
      <div className='view-container'>
        <ParticleTextTransition adjustsize={false} nontext array={Array.from({ length: 99 }, () => this.randomMessage())}></ParticleTextTransition>
        <div className='chat-header'>
          Chat
        </div>
      </div>     
    )
  }
}

export default ChatIntro;