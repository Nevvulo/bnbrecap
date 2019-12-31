import React, { Component } from 'react';
import { TextJumpTransition } from './../../../../components';
import './SquidGrill.scss';

class SquidGrill extends Component {
  render () {
    return (
      <div className='view-container squid-grill-container'>
        <TextJumpTransition className='squid-grill-header'>You gotta understand</TextJumpTransition>
        <div className='squid-grill-text'>
          <div className='squid-grill-subtext'>Over 72 counts of "you gotta understand" and other variations</div>
          <div className='squid-grill-footer'>What are we trying to understand though?</div>
        </div>
      </div>
    )
  }
}

export default SquidGrill;