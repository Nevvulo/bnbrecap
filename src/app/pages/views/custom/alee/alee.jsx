import React, { Component } from 'react';
import { TextJumpTransition } from '../../../../components';
import './alee.scss';

class Alee extends Component {
  render () {
    return (
      <div className='view-container alee-container'>
        <TextJumpTransition className='alee-header'>Linux</TextJumpTransition>
        <div className='alee-text'>
          <div className='alee-subtext'>Over 170 counts of "linux" and other variations</div>
          <div className='alee-footer'>New decade new operating system?</div>
        </div>
      </div>
    )
  }
}

export default Alee;