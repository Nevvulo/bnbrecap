import React, { Component } from 'react';
import { ParticleTextTransition, DiscordMessage, Icon } from './../../../components';
import './MostPinned.scss';

class MostPinned extends Component {
  render () {
    const filter = localStorage.getItem('filter');
    return (
      <div className='view-container'>
        <ParticleTextTransition><span role='img' aria-label='pin'>📌</span></ParticleTextTransition>
        <div className='pinned-container center'>
          <div className='pinned-text-header'>Most Pinned Message of 2019</div>
          
          <div className='pinned-text-container'>
            <div className='pinned-text-subtext'>
              goes to 
              <span role='img' aria-label='mention' className='mention'>@lily🌈💕</span> 
              and 
              <span role='img' aria-label='mention' className='mention'>@Nevulo</span>
              who both got 13 reactions - the highest of this year
            </div>

            <DiscordMessage 
            username='Nevulo' 
            avatar={<Icon url='https://cdn.discordapp.com/avatars/246574843460321291/538958ebd52a262024cde1a591ebeab8.png?size=2048'></Icon>}
            reactions={13}>
              i'll have you know that skin-tone-1 is superior
            </DiscordMessage>

            <DiscordMessage 
            username='lily🌈💕' 
            avatar={<Icon url='https://cdn.discordapp.com/avatars/109467433558896640/50782387bf0d2bae171f03685aa82048.png?size=2048'></Icon>}
            reactions={13}>
              idk but that does not look like a very efficient d<span className={filter ? 'filter' : ''}>ildo</span>
            </DiscordMessage>

            <a className='pinned-text-href' href='https://massive-legend.nevulo.xyz/RfqJobdE.png'>Messages that were pinned by the author of the message are not counted.</a>
          </div>
        </div>
      </div>     
    )
  }
}

export default MostPinned;