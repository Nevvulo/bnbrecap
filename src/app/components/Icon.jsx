import React, { Component } from 'react';

class Icon extends Component {
  render () {
    const { name, url, type = 'jpg', width = '32', height = '32', className } = this.props;
    const VALID_FILETYPES = [ '.png', '.jpg', '.svg' ];
    const filename = VALID_FILETYPES.includes(name) ? name : name + '.' + type;
    const img = url ? url : require(`./../assets/img/${filename}`);
    return <img src={img} width={width} height={height} alt={name} className={className} />
  }
}

export default Icon;