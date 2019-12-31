import React, { Component } from 'react';
import { TextDuplicateTransition } from '../../../components';
import './AstralModIntro.scss';

class AstralModIntro extends Component {
  constructor (props) {
    super(props);
    setTimeout(() => {
      window.routeHandler();
    }, 4000)
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