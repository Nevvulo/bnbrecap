import React, { Component } from 'react';
import { spellSentenceByWord } from '../../../modules';
import CountUp from 'react-countup';
import './MessagesTotal.scss';
import './UserMessages.scss';

class UserMessages extends Component {
  render () {
    return (
      <div className='view-container'>
        <header className='intro-header'>
          {spellSentenceByWord('Let\'s not forget about you either!', 0.13, 0.4)}
        </header>
        <div className='statistics-text'>
          <div>
            <span style={{ fontSize: '16px', marginRight: '22px' }}>a total of</span>
            <CountUp className='main-statistic-number' delay={1} end={19437} duration={2} separator=','></CountUp>
          </div>
          <br></br>
          <div className='statistics-text-subtext user-messages-subtext'>
            <span>messages sent by you in 2019</span>
            <div className='statistics-glow'></div>
          </div>
          <div className='statistics-footer'>
            That's quite the contribution!
          </div>
        </div>
      </div>     
    )
  }
}

export default UserMessages;