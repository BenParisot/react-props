import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

export default class ColorPicker extends PureComponent {
//eslint-disable-next-line
    redHandler = event => {
      console.log('red');
    }
    //eslint-disable-next-line
    blueHandler = event => {
      console.log('blue');
    }
    //eslint-disable-next-line
    yellowHandler = event => {
      console.log('yellow');
    }
    render() {
        
      return (
        <>
        <button onClick={this.redHandler} style={{ background:'red' }}>Red</button>
        <button onClick={this.blueHandler} style={{ background:'blue' }}>Blue</button>
        <button onClick={this.yellowHandler} style={{ background:'yellow' }}>Yellow</button>
      </>

      );
    }

}
