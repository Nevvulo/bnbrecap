import React, { Component } from 'react';
import { TextJumpTransition } from '../../../components';
import './Nitro.scss';
const secrets = require('./../../../../secrets.json');

class Nitro extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showCode: false,
      code: secrets.DISCORD_NITRO_CODES[window.user ? window.user.id : 0]
    };
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onButtonClick () {
    this.setState({ 'showCode': true });
  }

  render () {
    return (
      <div className='view-container center'>
        <TextJumpTransition className='nitro-header'>Nitro</TextJumpTransition>
        <div className='nitro-text'>
          <div>Congratulations on winning an award this year</div>
          <br></br>
          <br></br>
          <h2>We're giving you 1 free month of Nitro Classic!</h2>
          <div onClick={this.onButtonClick} className='btn nitro-btn btn-discord'>Click here to claim</div>
          {this.state.showCode && <h1>{this.state.code || 'No code! :('}</h1>}
        </div>
      </div>
    )
  }
}

export default Nitro;