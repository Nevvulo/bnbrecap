import React, { Component } from 'react';
import { TextDuplicateTransition } from '../../../components';
import './AstralModIntro.scss';

class AstralModIntro extends Component {
  constructor (props) {
    super(props);
    this.interval = setTimeout(() => {
      window.routeHandler();
    }, 4000)
  }

  componentWillUnmount () {
    clearTimeout(this.interval)
  }

  render () {
    return (
      <div className='view-container'>
        <TextDuplicateTransition>AstralMod</TextDuplicateTransition>
        <div className='ami-header'>
          This Year in AstralMod
        </div>
      </div>     
    )
  }
}

export default AstralModIntro;