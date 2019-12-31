import React, { Component } from 'react';
import { TextJumpTransition, Icon } from './../../components';
import { spellSentenceByWord } from './../../modules';
import './Credits.scss';

class Credits extends Component {
  render () {
    return (
      <div className='view-container center'>
        <TextJumpTransition className='credits-header'>{spellSentenceByWord('2 0 1 9', 0.2, 0.3)}</TextJumpTransition>
        <div className='credits-text'>
          <div className='credits-subtext'>Thanks for joining us this year!</div>
          <div className='credits-footer'>You've made it to the end of this years recap.</div>

          <div className='special-thanks center'>
            <div className='special-thanks-blake'>
              <Icon url='https://cdn.discordapp.com/avatars/246574843460321291/538958ebd52a262024cde1a591ebeab8.png?size=2048' width={64} height={64}></Icon>
              <div>
                <span className='mention'>@Nevulo</span>
                <h4>creator, data collector and developer</h4>
              </div>
            </div>

            <div className='special-thanks-vic'>
              <Icon url='https://cdn.discordapp.com/avatars/278805875978928128/fd8714c178513be0515f8e46543d9152.png' width={64} height={64}></Icon>
              <div>
                <span className='mention'>@vicr123</span>
                <h4>help with gathering data</h4>
              </div>
            </div>

            <br></br>
            <span>thanks to cameron for being cameron</span>
            <span>and thanks to you for looking at this recap</span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <span>made with <span role='img' aria-label='heart'>❤️</span> by <a className='special-thanks-link' href='https://nevulo.xyz/'>Nevulo</a></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Credits;