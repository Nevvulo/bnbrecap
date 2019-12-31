import React, { Component } from 'react';
import { ParticleTextTransition } from '../../../../components';
import './Vrabbers.scss';

class Vrabbers extends Component {
  render () {
    return (
      <div className='view-container'>
        <ParticleTextTransition nontext adjustsize={true} array={[<img width='64' height='64' alt='br' src='https://discordapp.com/assets/407b23225039d193f5e539e2de0900f2.svg'></img>]}></ParticleTextTransition>
        <div className='vrabbers-text-container'>
          <div className='vrabbers-text-header'>O número um do Brasil!</div>
          <div className='vrabbers-text-subtext'>Over 125 counts of "Brazil" and other variations</div>
          <br></br>
          <br></br>
          <br></br>
          <div className='vrabbers-text-subtext'>Go Brazil !</div>
        </div>
      </div>
    )
  }
}

export default Vrabbers;