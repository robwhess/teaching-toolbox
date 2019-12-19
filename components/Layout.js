/*
 * Sidebar layout for all pages on site.
 */

import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import { size, breakpoints } from '../theme';
import Sidebar from './Sidebar';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    font-size: ${size.font.normal}px;
  }

  h1, h2, h3 {
    font-weight: 200;
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  @media (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
  }
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
