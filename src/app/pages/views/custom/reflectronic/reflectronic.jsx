import React, { Component } from 'react';
import { TextJumpTransition } from '../../../../components';
import './reflectronic.scss';

class reflectronic extends Component {
  render () {
    return (
      <div className='view-container reflectronic-container'>
        <TextJumpTransition className='reflectronic-header'>John</TextJumpTransition>
        <div className='reflectronic-text'>
          <div className='reflectronic-subtext'>Congratulations on being the most John person of the year</div>
        </div>
      </div>
    )
  }
}

export default reflectronic;