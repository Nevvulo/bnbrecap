import React, { Component } from 'react';
import CountUp from 'react-countup';
import { ParticleTextTransition } from '../../../components';
import './Nickname.scss';
import NickData from './../../../constants/NickRequests';

class Nickname extends Component {
  render () {
    const data = window.user ? NickData[window.user.id] : null;
    return (
      <div className='view-container'>
        <ParticleTextTransition>Identity Crisis</ParticleTextTransition>
        <div className='nickname-container center'>
          <div className='nickname-text-header'>Most Nickname Requests in 2019</div>
          <br></br>

          <div className='nickname-text-container'>
            <div className='nickname-text-subtext'>
              <span className='mention nickname-mention nickname-text-mention'>@Swing</span>
              <br></br>
              <b><CountUp end={37} delay={2.5} duration={1.6}></CountUp></b> approved nickname requests this year
              <br></br>
              <br></br>
              {data && <div>You remained a bit more reasonable this year with only {data} nickname requests</div>}
              {!data && window.user && <div>Fun fact: you <i>never</i> changed your nickname this year!</div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Nickname;