/*
 * Button component for site-wide use.
 */

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { color, size } from '../theme';

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${color.button.primary.background};
  color: ${color.button.primary.font};
  font-size: ${size.font.normal}px;
  cursor: pointer;
  &:hover {
    background-color: ${color.button.primary.hover};
  }
`;

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
