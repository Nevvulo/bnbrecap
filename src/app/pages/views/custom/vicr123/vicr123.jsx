import React, { Component } from 'react';
import { ParticleTextTransition } from './../../../../components';
import './vicr123.scss';

class vicr123 extends Component {
  render () {
    return (
      <div className='view-container'>
        <ParticleTextTransition array={['HAHA', 'HAHAHA', 'HAHAHAHA', 'HAHAHAHAHA', 'HAHAHAHAHAHA']}></ParticleTextTransition>
        <div className='vicr123-text-container'>
          <div className='vicr123-text-header'>You've done a lot of laughing this year</div>
          <div className='vicr123-text-subtext'>Over 2,800 counts of "HAHAHA" and other variations</div>
          <br></br>
          <br></br>
          <br></br>
          <div className='vicr123-text-subtext'>Keep up the laughs for next year!</div>
          <div className='vicr123-smile disable-selection'>:)</div>
        </div>
      </div>
    )
  }
}

export default vicr123;