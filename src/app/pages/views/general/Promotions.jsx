import React, { Component } from 'react';
import CountUp from 'react-countup';
import './Promotions.scss';

class Promotions extends Component {
  render () {
    return (
      <div className='view-container'>
        <div className='promotions-container center'>
          <div className='promotions-text-header'>Most Promotions from Member to Moderator</div>
          
          <div className='promotions-text-container'>
            <div className='promotions-text-subtext'>
              <span className='mention promotions-text-mention'>@Nevulo</span>
              with an ASTONISHING <CountUp end={1} delay={1.8} duration={1.6}></CountUp> PROMOTIONS!!!
            </div>

            {window.user && window.user.id !== '191290329985581069' && 
              <h2>thanks for letting me take your role aren <span role='img' aria-label='heart'>❤️</span></h2>
            }
          </div>
        </div>
      </div>     
    )
  }
}

export default Promotions;