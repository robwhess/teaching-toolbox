import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/Layout';

const SectionContainer = styled.section`
  margin-bottom: 20px;
  h2 {
    margin: 0;
  }
`;

function Index() {
  return (
    <Layout>
      <h1>Application for a Recommendation</h1>
      <SectionContainer>
        <h2>Personal information</h2>
      </SectionContainer>

      <SectionContainer>
        <h2>Relationship with me</h2>
      </SectionContainer>

      <SectionContainer>
        <h2>General academic information</h2>
      </SectionContainer>
    </Layout>
  );
}

export default Index;
