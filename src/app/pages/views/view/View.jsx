import React, { Component } from 'react';
import { Navbar, GenericTransition } from '../../../components';
import { Link } from 'react-router-dom';

class View extends Component {
  render () {
    if (!this.props.className.includes('intro')) {
      document.body.classList.add('view-enter')
      setTimeout(() => {
        document.body.classList.add('view-enter-active');
        setTimeout(() => {
          document.body.classList.remove('view-enter', 'view-enter-active');
        }, 400);
      }, 150);
    }
    
    const next = false
    const prev = false

    return (
      <GenericTransition>
        <div className={`view ${this.props.className || ''}`}>
          <Navbar />
          {this.props.children}
          {!this.props.className.includes('intro') && 
          <div className='scroll-container'>
            {prev && <Link to={`/${prev.path}`} className='btn scroll-btn-prev'>PREV</Link>}
            <div className='scroll-suggest'>
              Scroll down to see more pages!
            </div>
            {next && <Link to={`/${next.path}`} className='btn scroll-btn-next'>NEXT</Link>}
          </div>
          }
        </div>
      </GenericTransition>
    )
  }
}

export default View;