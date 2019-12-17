import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import LabeledTextInput from '../components/LabeledTextInput';

const SectionContainer = styled.section`
  margin-bottom: 20px;
  h2 {
    margin-bottom: 5px;
  }
`;

function Index() {
  return (
    <Layout>
      <h1>Application for a Recommendation</h1>
      <SectionContainer>
        <h2>Personal information</h2>
        <LabeledTextInput label="Name" value="" onChange={() => {}} />
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
