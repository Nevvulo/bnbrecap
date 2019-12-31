import React, { Component } from 'react';
import CountUp from 'react-countup';
import './Attachments.scss';
import AttachmentData from './../../../constants/Attachments';

class Attachments extends Component {
  render () {
    const data = window.user ? AttachmentData[window.user.id] : null;
    return (
      <div className='view-container'>
        <div className='attachments-container center'>
          <div className='attachments-text-header'>Most Attachments Used in 2019</div>
          
          <div className='attachments-text-container'>
            <div className='attachments-text-subtext'>
              <span className='mention attachments-text-mention'>@vicr123</span>
              with an incredible <CountUp end={6406} delay={1.8} duration={1.6}></CountUp> attachments
            </div>

            {data && window.user.id !== '199958849094942721' && 
              <h2>You posted {data} attachments this year - not bad!</h2>
            }

            <div className='attachments-special-mention'>
              Shoutout to <span className='mention'>@JelleTheWhale</span> who had an also impressive <b>3144</b> attachments
            </div>
          </div>
        </div>
      </div>     
    )
  }
}

export default Attachments;