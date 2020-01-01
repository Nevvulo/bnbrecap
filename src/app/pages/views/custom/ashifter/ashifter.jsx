import React, { Component } from 'react';
import { TextJumpTransition } from '../../../../components';
import './ashifter.scss';

class Ashifter extends Component {
  render () {
    return (
      <div className='view-container'>
        <TextJumpTransition>ashiftert</TextJumpTransition>
        <div className='ashifter-text-container'>
          <div className='ashifter-text-subtext'>funny meme</div>
          <div className='ashifter-text-subtext'>know what's funnier</div>
          <iframe title='youtube' width="560" height="315" src="https://www.youtube.com/embed/vWzZJKFWyBo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    )
  }
}

export default Ashifter;