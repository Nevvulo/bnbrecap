import React, { Component } from 'react';
import CountUp from 'react-countup';
import './UserPinned.scss';
import PinData from './../../../constants/Pins';

class UserPinned extends Component {
  render () {
    const data = window.user ? PinData[window.user.id] : null;
    return (
      <div className='view-container'>
        <div className='userpinned-container center'>
          <div className='userpinned-text-header'>Most Messages Pinned in 2019</div>
          
          <div className='userpinned-text-container'>
            <div className='userpinned-text-subtext'>
              <span className='mention userpinned-text-mention'>@The Pixel Polygon</span>
              <br></br>
              <div className='userpinned-text-with'>
                with ~<CountUp end={1343} delay={2.3} duration={1.6}></CountUp>* pins <span role='img' aria-label='pin'>📌</span>
              </div>
              <br></br>
              {data && <div className='userpinned-text'>
                You had ~<b><CountUp end={data} delay={2.3} duration={1.6}></CountUp></b>* pins this year - good stuff!
              </div>}
            </div>
            <div className='userpinned-text-footer'>
              * figures may appear larger due to timestamp data being unavailable
            </div>

            <div className='userpinned-special-mention'>
              Shoutout to <span className='mention'>@TechLion</span> who had an astounding <b>2347</b> pins!
            </div>
          </div>
        </div>
      </div>     
    )
  }
}

export default UserPinned;