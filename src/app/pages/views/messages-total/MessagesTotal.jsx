import React, { Component } from 'react';
import { spellSentenceByWord } from './../../../modules';
import CountUp from 'react-countup';
import './MessagesTotal.scss';
import Roles from './../../../constants/Roles';

const MESSAGE_COUNT = {
  DEFAULT: 757949,
  REGULAR: 773671,
  VETERAN: 828925
}

const MESSAGES = {
  DEFAULT: 'messages sent by all members in all public channels',
  REGULAR: 'messages sent by all regulars in all public channels (including #regular-zone)',
  VETERAN: 'messages sent by all veterans in all public channels (including #veteran-zone)',
}

class MessagesTotal extends Component {
  render () {
    const user = Roles[window.user ? window.user.id : 0] || 0;
    const type = user === 2 ? 'VETERAN' : (user === 1 ? 'REGULAR' : 'DEFAULT');
    return (
      <div className='view-container'>
        <header className='intro-header'>
          {spellSentenceByWord('2019 saw a decline in messages,\nbut that never stopped the golden moments', 0.13, 0.4)}
        </header>
        <div className='statistics-text'>
          <CountUp className='main-statistic-number' delay={0.43} end={MESSAGE_COUNT[type]} duration={2} separator=','></CountUp>
          <br></br>
          <div className='statistics-text-subtext'><span>{MESSAGES[type]}</span><div className='statistics-glow'></div></div>
        </div>
      </div>     
    )
  }
}

export default MessagesTotal;