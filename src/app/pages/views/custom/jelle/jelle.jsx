import React, { Component } from 'react';
import { ParticleTextTransition, Icon } from '../../../../components';
import { Users } from '../../../../constants';
import './jelle.scss';

class Jelle extends Component {
  render () {
    return (
      <div className='view-container'>
        <ParticleTextTransition nontext array={[ 
          <Icon width={64} height={64} url={`https://cdn.discordapp.com/avatars/199958849094942721/${Users['199958849094942721'].avatar}.png`} /> 
        ]} />
        <div className='jelle-text-container'>
          <div className='jelle-text-header'>Jelle</div>
          <div className='jelle-text-subtext'>
            thank u for being jelle  
            <Icon width={32} height={32} url={`https://cdn.discordapp.com/avatars/199958849094942721/${Users['199958849094942721'].avatar}.png`} />
          </div>
          <div className='jelle-text-subsubtext'>not going to lie i just couldn't think of anything creative to put here :( but still love you</div>
        </div>
      </div>
    )
  }
}

export default Jelle;