import React, { Component } from 'react';
import './TextDuplicateTransition.scss';

class TextDuplicateTransition extends Component {
  constructor (props) {
    super(props);
    this.elements = props.elements || [ props.children ];
    let count = 0;
    let amount = 12;
    let speed = 90;

    if (typeof props.children === 'object') {
      this.elements = [ props.children.props.children ];
    }

    setTimeout(() => {
      let top = 0;
      let left = 0;
      const transitionLayer = document.getElementById('tdt-text');
      const interval = setInterval(() => {
        count++;
        if (count > amount) {
          clearInterval(interval);
        }
        const elm = document.createElement('div');
        elm.style.position = 'absolute';
        elm.style.top = `${top}px`
        const filter = localStorage.getItem('filter');
        if (filter && elm.innerHTML === 'Fuck') {
          elm.style.filter = 'blur(15px)';
        }
        top += window.innerHeight / amount;
        elm.style.left = `${left}px`;
        left += window.innerWidth / amount;
        elm.innerHTML = this.elements[Math.floor(Math.random() * this.elements.length)];
        if (count === 10 && elm.innerHTML === 'AstralMod' && !filter) {
          elm.innerHTML = 'AsstralMod'
        }
        transitionLayer.appendChild(elm);
      }, speed)
    }, 10)
  }

  render () {
    return (
      <div className='center tdt-text-container'>
        <div className='tdt-text-content' id='tdt-text'>
        </div>
      </div>
    )
  }
}

export default TextDuplicateTransition;