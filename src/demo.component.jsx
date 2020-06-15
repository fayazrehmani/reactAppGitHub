import React, { useState } from 'react';

const Demo = (props) => (
  <div>
    {console.log(props)}
    <h3>props {props.mText}</h3>
  </div>
)

export default Demo;