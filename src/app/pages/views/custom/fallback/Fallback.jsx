import React, { Component } from 'react';
import { ParticleTextTransition, Icon } from '../../../../components';
import './Fallback.scss';

class Fallback extends Component {
  render () {
    const { user } = window;
    const { nickname } = this.props;
    return (
      <div className='view-container'>
        <ParticleTextTransition nontext array={[ 
          <Icon className='avatar' width={64} height={64} url={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} /> 
        ]} />
        <div className='fallback-text-container'>
          <div className='fallback-text-header'>{nickname || user.username}</div>
          <div className='fallback-text-subtext'>
            thank u for being {(nickname || user.username).toLowerCase()}
            <Icon className='fallback-avatar avatar' width={32} height={32} url={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} />
          </div>
          <div className='fallback-text-subsubtext'>not going to lie i just couldn't think of anything creative to put here :( but still love you</div>
        </div>
      </div>
    )
  }
}

export default Fallback;