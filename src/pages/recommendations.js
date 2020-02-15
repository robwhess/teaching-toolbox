import React, { useState } from 'react';
import styled from '@emotion/styled';

import { breakpoints } from '../theme';
import Layout from '../components/Layout';
import LabeledTextInput from '../components/LabeledTextInput';
import LabeledDropdownSelect from '../components/LabeledDropdownSelect';
import Button from '../components/Button';

const PageTitle = styled.h1`
  @media (max-width: ${breakpoints.sm}px) {
    font-weight: 400;
  }
`;

const SectionContainer = styled.section`
  margin-bottom: 20px;
  h2 {
    margin-bottom: 5px;
  }
`;

const InputRowContainer = styled.div`
  display: flex;
  @media (max-width: ${breakpoints.xs}px) {
    flex-direction: column;
  }
`;

const InputContainer = styled.div`
  margin: 10px;
  max-width: 500px;
  flex: ${props => props.flex || 'auto'};
  @media (max-width: ${breakpoints.xs}px) {
    max-width: 100%;
  }
`;

function Index() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');

  return (
    <Layout>
      <PageTitle>Application for a Recommendation</PageTitle>
      <SectionContainer>
        <h2>Personal information</h2>
        <InputRowContainer>
          <InputContainer>
            <LabeledTextInput
              label="Name"
              containerWidth
              value={name}
              onChange={(e) => { setName(e.target.value); }}
            />
          </InputContainer>
          <InputContainer>
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
        <InputRowContainer>
          <InputContainer>
            <LabeledDropdownSelect
              label="How have you worked with me?"
              options={[
                { value: 'class', label: 'I took your course' },
                { value: 'ta', label: 'I was your TA'},
                { value: 'other', label: 'Other' }
              ]}
            />
          </InputContainer>
        </InputRowContainer>
      </SectionContainer>

      <SectionContainer>
        <h2>General academic information</h2>
      </SectionContainer>

      <Button onClick={() => { alert("OK!"); }}>Submit</Button>
    </Layout>
  );
}

export default Index;
