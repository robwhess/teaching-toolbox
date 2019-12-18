/*
 * A text input component with a little label below it.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { color, size } from '../theme';
import generateID from '../lib/generateID';

const Input = styled.input`
  font-size: ${size.font.large}px;
  font-family: inherit;
  font-weight: 200;
  width: ${props => props.containerWidth ? '100%' : 'initial'};
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

function LabeledTextInput({ label, value, onChange, ...rest }) {
  const id = generateID('input');
  return (
    <div>
      <Input id={id} value={value} onChange={onChange} {...rest} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
}

LabeledTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  containerWidth: PropTypes.bool,
};

LabeledTextInput.defaultProps = {
  containerWidth: false
};

export default LabeledTextInput;
