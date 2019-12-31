import React, { Component } from 'react';
import { ParticleTextTransition } from '../../../../components';
import './ntf.scss';

class NTF extends Component {
  render () {
    return (
      <div className='view-container'>
        <ParticleTextTransition array={['mr president', 'twitter', 'Wall', 'hombre', 'Trump', 'Tromp', 'trump']}></ParticleTextTransition>
        <div className='ntf-text-container'>
          <div className='ntf-text-header'>Trump</div>
          <div className='ntf-text-subtext'>You can't hate the guy but you can't love him.</div>
          <div className='ntf-text-subtext'>232 mentions of "Trump" this year</div>
        </div>
      </div>
    )
  }
}

export default NTF;