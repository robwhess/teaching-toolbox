import React, { useState } from 'react';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import LabeledTextInput from '../components/LabeledTextInput';

const SectionContainer = styled.section`
  margin-bottom: 20px;
  h2 {
    margin-bottom: 5px;
  }
`;

const InputRowContainer = styled.div`
  display: flex;
`;

const InputContainer = styled.div`
  margin: 0 10px;
  max-width: 400px;
  flex: ${props => props.flex || 'auto'};
`;

function Index() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');

  return (
    <Layout>
      <h1>Application for a Recommendation</h1>
      <SectionContainer>
        <h2>Personal information</h2>
        <InputRowContainer>
          <InputContainer flex={2}>
            <LabeledTextInput
              label="Name"
              containerWidth
              value={name}
              onChange={(e) => { setName(e.target.value); }}
            />
          </InputContainer>
          <InputContainer flex={3}>
            <LabeledTextInput
              label="@oregonstate.edu email"
              containerWidth
              value={email}
              onChange={(e) => { setEmail(e.target.value); }}
            />
          </InputContainer>
        </InputRowContainer>
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
