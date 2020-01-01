import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class GenericTransition extends Component {
  render () {
    return (
      <TransitionGroup>
        <CSSTransition
              timeout={300}
              in={true}
              classNames='view'
            >
          {React.cloneElement(this.props.children, { key: Math.random() * Math.random() })}
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default GenericTransition;