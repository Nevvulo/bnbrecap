import React, { Component } from 'react';
import CountUp from 'react-countup';
import { TextDuplicateTransition } from './../../../components';
import './Swears.scss';

class Swears extends Component {
  render () {
    const filter = localStorage.getItem('filter');
    return (
      <div className='view-container'>
        <TextDuplicateTransition><span className={filter ? 'filter' : ''}>Fuck</span></TextDuplicateTransition>
        <div className='swears-container center'>
          <div className='swears-text-header'>Most Swear Words Used in 2019</div>
          
          <div className='swears-text-container'>
            <div className='swears-text-subtext'>
              <span className='mention swears-text-mention'>@Squid Grill</span>
              <br></br>
              <CountUp end={1537} delay={1.8} duration={1.6}></CountUp> mentions of "fuck", "shit" or "bitch"
              <br></br>
              <code>
                fuck: 762, shit: 766, bitch: 9
              </code>
            </div>

            <div className='swears-special-mention'>
              Special mention to <span className='mention'>@JelleTheWhale</span> once again who came <i>so close</i> to <br></br>
              winning this award with <b>1,535</b> total swear words, just two away!
            </div>
          </div>
        </div>
      </div>     
    )
  }
}

export default Swears;