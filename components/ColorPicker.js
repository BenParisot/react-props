import React, { PureComponent } from 'react';

export default class ColorPicker extends PureComponent {
  render() {
    return (
        <>
        <button style="background-color:red;">Red</button>
        <button style="background-color:blue;">Blue</button>
        <button style="background-color:yellow;">Yellow</button>
      </>

    );
  }

}
