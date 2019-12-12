import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox } from '@fortawesome/free-solid-svg-icons'

const SidebarContainer = styled.aside`
  max-width: 300px;
`;

const LogoContainer = styled.div`
  font-size: 100px;
  text-align: center;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <LogoContainer>
        <FontAwesomeIcon icon={faToolbox} />
      </LogoContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
