import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ParticleTextTransition.scss';

class ParticleTextTransition extends Component {
  constructor (props) {
    super(props);
    this.elements = [];
    this.text = props.children;
    this.array = props.array;
    this.nontext = props.nontext;
    this.adjustsize = props.adjustsize;
    if (!props.array && typeof this.text === 'object') {
      this.text = props.children.props.children;
    }
    
    // Thank you to https://codepen.io/SaschaSigl/pen/VmPrwJ!
    let time = 0;
    const component = this;
    const Gravity = class Gravity {
      constructor (id) {
        this.element = document.getElementById(id);
        this.text = component.text;
        this.arr = component.array ? Array.from({ length: 99 }, () => component.array[Math.floor(Math.random() * component.array.length)]) : new Array(100).fill(this.text);

        this.animate = true;
        this.floating = true;
        this.positionType = getComputedStyle(this.element).position;
        this.textSpans = [];

        this.bounds = {
          min: {
            x: 0,
            y: 0
          },
          max: {
            x: window.innerWidth,
            y: window.innerHeight
          }
        }

        for (const elm of this.arr) {
          const el = this.createSpan(elm, { x: 0, y: 0 })
          this.element.appendChild(el);
          this.textSpans.push(el);
        }
      }

      lerp (e, t, i) {
        return (1 - i) * e + i * t;
      }

      createSpan (text, pos) {
        const span = document.createElement('span');
        if (component.nontext) {
          ReactDOM.render(text, span)
        } else {
          span.innerHTML = text;
        }

        span.setAttribute('style', 
        `font-size: ${component.adjustsize !== false ? Math.random() * 42 : 15}px; position: relative; display: inline-block; min-width: 10px; color: white; opacity: 0; animation: fadeIn 1s 0.3s forwards, fadeOut 1s 2s forwards;`);
        span._own = {
          pos: {
            x: 0,
            y: 0
          },
          vel: {
            x: -0.5 + Math.random() * (Math.random() * 4),
            y: -0.5 + Math.random() * (Math.random() * 4)
          },
          speed: {
            x: 2,
            y: 2
          },
          dir: {
            x: 0.25,
            y: 4
          }
        }
        return span;
      }

      floatText = function(){
        for (const span of this.textSpans) {
          span._own.pos.x += (span._own.vel.x * span._own.speed.x) * span._own.dir.x;
          span._own.pos.y += (span._own.vel.y * span._own.speed.y) * span._own.dir.y;
          span.style.transform = 'translateX('+ span._own.pos.x +'px) translateY('+ span._own.pos.y +'px)';
        };
      }

      update () {
        if (this.animate) {
          this.floatText();
        }
      }

      destroy () {
        for (const span of this.textSpans) {
          span.remove();
        }
      }
    }

    setTimeout(() => {
      let stopped = false;
      const text = new Gravity('ptl-text');
      const render = (time) => {
        if (!stopped) {
          requestAnimationFrame(render);
          text.update();
        } else {
          text.destroy();
        }
      };

      setTimeout(() => {
        stopped = true;
      }, 3e3);

      render(time);
    }, 10)
  }

  render () {
    return (
      <div className='center ptl-text-container'>
        <div className='ptl-text-content' id='ptl-text'>
        </div>
      </div>
    )
  }
}

export default ParticleTextTransition;