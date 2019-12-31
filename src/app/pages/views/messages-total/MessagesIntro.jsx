import React, { Component } from 'react';
import { TextJumpTransition } from '../../../components';
import './MessagesIntro.scss';

class MessagesIntro extends Component {
  constructor (props) {
    super(props);
    setTimeout(() => {
      window.routeHandler();
    }, 2000)
  }

  render () {
    return (
      <div className='view-container'>
        <TextJumpTransition className='mes-header'>Message Count</TextJumpTransition>
      </div>     
    )
  }
}

export default MessagesIntro;