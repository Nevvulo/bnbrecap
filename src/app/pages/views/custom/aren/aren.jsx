import React, { Component } from 'react';
import { ParticleTextTransition } from '../../../../components';
import './aren.scss';

class Aren extends Component {
  render () {
    return (
      <div className='view-container'>
        <ParticleTextTransition array={['chair']}></ParticleTextTransition>
        <div className='aren-text-container'>
          <div className='aren-text-header'>Chair</div>
          <div className='aren-text-subtext'>Take a seat, why don't you.</div>
          <div className='aren-text-subtext'>Over 50 mentions of chairs this year</div>
        </div>
      </div>
    )
  }
}

export default Aren;