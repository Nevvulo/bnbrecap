import React, { Component } from 'react';
import { Navbar, GenericTransition } from '../../../components';

class View extends Component {
  render () {
    return (
      <GenericTransition>
        <div className={`view ${this.props.className || ''}`}>
          <Navbar />
          {this.props.children}
          {!this.props.className.includes('intro') && <div className='scroll-suggest'>
            Scroll down to see more pages!
          </div>}
        </div>
      </GenericTransition>
    )
  }
}

export default View;