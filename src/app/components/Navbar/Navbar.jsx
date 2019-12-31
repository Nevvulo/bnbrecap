import React, { Component } from 'react';
import { Icon } from '..';
import './Navbar.scss'

class Navbar extends Component {
  render () {
    const { user } = window;
    return (
      <div className='navbar-container'>
        <div className='navbar-left'>
          <Icon name='bnblogo' type='jpg' width='24' height='24' className='navbar-img disable-selection' />
          <div className='navbar-title'>
            <div className='navbar-title-subtext'>a year in review</div>
            <div className='navbar-title-header'>bits & Bytes</div>
          </div>
        </div>
        
        {user && 
          <div className='navbar-right'>          
            <div className='navbar-user'>
              <Icon url={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} className='navbar-user-icon' width='32' height='32' />
              <div className='navbar-user-text'>
                <div className='navbar-user-username'>{user.username}</div>
                <a href='/signout' className='navbar-user-signout'>Sign out</a>
              </div>
            </div>
          </div>
        }
        
      </div>
    )
  }
}

export default Navbar;