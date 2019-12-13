import React from 'react';
import styled from '@emotion/styled';
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
  }
`;

const LayoutContainer = styled.div`
  display: flex;
`;

const PageContainer = styled.main`
  flex: 1 80%;
  padding: 10px;
`;

function Layout(props) {
  return (
    <>
      <Global styles={globalStyles} />
      <LayoutContainer>
        <Sidebar />
        <PageContainer>
          {props.children}
        </PageContainer>
      </LayoutContainer>
    </>
  );
}

export default Layout;
