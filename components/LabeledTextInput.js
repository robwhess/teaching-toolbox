/*
 * A text input component with a little label below it.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { color, size } from '../theme';

const InputContainer = styled.div`

`;

const Input = styled.input`
  font-size: ${size.font.large}px;
  font-family: inherit;
  font-weight: 200;
  border: 1px solid ${color.primary.border};
  padding: 4px;
  &:focus {
    outline: none;
    border-color: ${color.primary.focused};
  }
`;

const Label = styled.label`
  padding-left: 4px;
  display: block;
  font-size: ${size.font.small}px;
`;

function LabeledTextInput({ label, value, onChange }) {
  return (
    <InputContainer>
      <Input value={value} onChange={onChange} />
      <Label>{label}</Label>
    </InputContainer>
  );
}

LabeledTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default LabeledTextInput;
