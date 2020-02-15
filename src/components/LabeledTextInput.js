/*
 * A text input component with a little label below it.
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import LabeledInputElement from './LabeledInputElement';
import generateID from '../lib/generateID';
import { color, size } from '../theme';

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

function LabeledTextInput({ label, value, onChange, ...rest }) {
  const id = useRef(generateID('input'));
  return (
    <LabeledInputElement label={label} htmlFor={id.current}>
      <Input type="text" id={id.current} value={value} onChange={onChange} {...rest} />
    </LabeledInputElement>
  );
}

LabeledTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  containerWidth: PropTypes.bool
};

LabeledTextInput.defaultProps = {
  containerWidth: false
};

export default LabeledTextInput;
