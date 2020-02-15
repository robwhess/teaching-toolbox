/*
 * An input component with a little label below it.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { size } from '../theme';

const Label = styled.label`
  padding-left: 4px;
  display: block;
  font-size: ${size.font.small}px;
`;

function LabeledInputElement({ label, htmlFor, children }) {
  return (
    <div>
      {children}
      <Label htmlFor={htmlFor}>{label}</Label>
    </div>
  );
}

LabeledInputElement.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string
};

export default LabeledInputElement;
