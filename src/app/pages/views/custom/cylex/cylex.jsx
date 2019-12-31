import React, { Component } from 'react';
import { TextJumpTransition } from '../../../../components';
import './cylex.scss';

class Cylex extends Component {
  render () {
    return (
      <div className='view-container cylex-container center'>
        <TextJumpTransition className='cylex-header'>vibin'</TextJumpTransition>
        <div className='cylex-text'>
          <div className='cylex-subtext'>Over 133 mentions of Spotify or music in general</div>
        </div>
      </div>
    )
  }
}

export default Cylex;