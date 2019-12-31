import React from 'react';

export default function spellSentenceByWord (string, delayBetweenWords = 0.25, animationTime = 0.8) {
  let index = 0;
  const elements = [];
  for (const word of string.split(' ')) {
    elements.push(
      React.createElement('span', {
        className: `wbw-element-${index}`,
        key: index,
        style: {
          opacity: 0,
          position: 'relative',
          animation: `${animationTime}s fadeInFromTop ${delayBetweenWords * index}s forwards`,
          marginRight: '12px'
        }
      }, word)
    );
    index++;
  }
  return React.createElement('div', { className: 'wbw-container' }, elements);
}
