import React from 'react';
import { Global, css } from '@emotion/core';

import { color, size } from '../theme';
import Sidebar from './Sidebar';

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
    font-size: ${size.normalFont};
    background-color: ${color.lightBackground};
    color: ${color.primaryFontLightBackground};
  }
`;

function Layout(props) {
  return (
    <>
      <Global styles={globalStyles} />
      <div>
        <Sidebar />
        {props.children}
      </div>
    </>
  );
}

export default Layout;
