import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newOpacity = this.props.opacity - 0.1;
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {console.log(this.props.opacity)}
        {newOpacity > 0.2 ? 
          <ColorBox opacity={newOpacity}></ColorBox>        
          :
           null } 
      </div>
    )
  }

}

