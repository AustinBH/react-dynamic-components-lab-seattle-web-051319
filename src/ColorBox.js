import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const providedOpacity = this.props.opacity
    const newOpacity = this.props.opacity - 0.1
    if (providedOpacity >= 0.2)
      return (
        <div className="color-box" style={{opacity: providedOpacity}}>
          <ColorBox opacity={newOpacity} />
        </div>
      )
    else if (providedOpacity < 0.2) {
      return null;
    }
  }
}
