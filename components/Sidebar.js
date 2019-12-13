import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';

import { color, size } from '../theme';

const SidebarContainer = styled.aside`
  max-width: 300px;
  padding: 20px;
  background-color: ${color.lightBackground};
  color: ${color.primaryFontLightBackground}
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    font-size: ${size.titleFontPx}px;
    line-height: 1.1;
  }
`;

const LogoContainer = styled.div`
  font-size: ${size.titleFontPx * 2}px;
  margin-right: 20px;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <HeaderContainer>
        <LogoContainer>
          <FontAwesomeIcon icon={faToolbox} />
        </LogoContainer>
        <h1>Teaching Toolbox</h1>
      </HeaderContainer>

    </SidebarContainer>
  );
}

export default Sidebar;