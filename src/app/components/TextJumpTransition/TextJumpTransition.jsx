import React, { Component } from 'react';
import './TextJumpTransition.scss';



class TextJumpTransition extends Component {
  render () {
    const text = this.props.children;
    return (
      <div className={`text-jump-container center ${this.props.className || ''}`}>
        <div className='text-jump-content'>
          {text}
        </div>
      </div>
    )
  }
}

export default TextJumpTransition;