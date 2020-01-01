import React, { Component } from 'react';
import { Icon } from './../../components';
import './Home.scss';

class Home extends Component {
  constructor () {
    super();
    document.body.classList.add('home')
  }

  render () {
    let filter = localStorage.getItem('filter'); 
    return (
      <div className='recap-landing'>
        <div className='recap-section-top'>
          <br></br>
          <div className='recap-ayir-text'>
            <div className='begin-recap-section-subheader disable-selection'>a year in review   •   created by Nevulo</div>
            <div className='begin-recap-section-header'>bits & Bytes</div>
          </div>
          <Icon name='bnblogo' type='jpg' width='52' height='52' className='begin-recap-bnb-img disable-selection' />
        </div>
        
        <div className='begin-recap-section'>
          <div className='begin-recap-section-text'>
            <div className='begin-recap-section-summary begin-recap-section-summary-left'>No doubt about it, this year has been exhausting.</div>
            <div className='begin-recap-section-summary begin-recap-section-summary-right'>But what better than to look back on everything?</div>
          </div>
          <div className='recap-actions'>
            <div className='log-in-discord'>
              <div onClick={() => window.location.replace('https://discordapp.com/api/oauth2/authorize?client_id=658006978022342656&redirect_uri=http%3A%2F%2Flocalhost%3A3232%2Fapi%2Foauth&response_type=code&scope=identify')} 
              className='btn btn-discord'>{window.user ? 'Logged in' : 'Log in to Discord'}</div>
              <div className='actions-subtext disable-selection'>{window.user ? 'Scroll down to see statistics!' : 'or scroll down to see general statistics!'}</div>
            </div>
            <div className='filter-check'>
              <label className='checkbox'>
                <input type="checkbox" defaultValue={filter} onClick={() => { localStorage.setItem('filter', filter === undefined ? true : !filter); filter = !filter; }} />
                <span></span>
                <div>Disable {window.user && window.user.id === '278805875978928128' ? <b>unfortunate</b> : 'inappropriate'} content</div>
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;