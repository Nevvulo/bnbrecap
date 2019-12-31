import React, { Component } from 'react';
import { ParticleTextTransition } from '../../../../components';
import './projsh.scss';

class projsh extends Component {
  render () {
    return (
      <div className='view-container'>
        <ParticleTextTransition array={['meme', 'vibin', 'MEME', 'pranked', 'lol', 'Sexy', 'clickbait']}></ParticleTextTransition>
        <div className='projsh-text-container'>
          <div className='projsh-text-header'>funny meme lord man</div>
          <div className='projsh-text-subtext'>37 memes in #not-for-meams this year (and countless more in other channels)</div>
        </div>
      </div>
    )
  }
}

export default projsh;