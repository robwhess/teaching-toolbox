import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import { color } from '../theme';

const SectionContainer = styled.section`
  border-left: 1px solid ${color.primary.border};
  padding: 10px;
  padding-left: 30px;
  margin-left: 10px;
`;

const SectionHeader = styled.h2`
  position: relative;
  margin: 0;
  &::before {
    display: inline-block;
    position: absolute;
    left: -35px;
    top: 20%;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.sectionComplete ? color.complete : color.primary.border};
  }
`;

function Index() {
  return (
    <Layout>
      <h1>Application for a Recommendation</h1>
      <SectionContainer>
        <SectionHeader>Personal information</SectionHeader>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader>Relationship with me</SectionHeader>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader>General academic information</SectionHeader>
      </SectionContainer>
    </Layout>
  );
}

export default Index;
