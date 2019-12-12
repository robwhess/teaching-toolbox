import React from 'react';
import { Global, css } from '@emotion/core';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }
`;

function Layout(props) {
  return (
    <div>
      <Global styles={globalStyles} />
      {props.children}
    </div>
  );
}

export default Layout;
