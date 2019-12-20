/*
 * Dropdown select component.
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';
import generateID from '../lib/generateID';
import useOutsideClickListener from '../lib/useOutsideClickListener';
import { color } from '../theme';

/*
 * Numeric keydown event codes for various keys.
 */
const keyCode = Object.freeze({
  'TAB': 9,
  'RETURN': 13,
  'ESC': 27,
  'SPACE': 32,
  'UP': 38,
  'DOWN': 40
});

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled(Button)`
  width: 100%;
  border: 1px solid ${props => props.isExpanded ? color.primary.focused: color.primary.border};
  background-color: ${color.primary.background};
  color: ${color.primary.font};
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: ${color.primary.background};
  }
  &:focus {
    outline: none;
    border-color: ${color.primary.focused};
  }
`;

const DropdownLabel = styled.div`
  display: block;
  margin-right: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const DropdownArrow = styled.div`
  display: block;
  transform: rotate(${props => props.isExpanded ? '-180deg' : 0});
  transition: transform ease-in 100ms;
`;

const DropdownMenu = styled.div`
  visibility: ${props => props.isExpanded ? 'visible' : 'hidden'};
  position: absolute;
  left: 0;
  right: 0;
  top: 103%;
  border: 1px solid ${color.primary.focused};
  border-radius: 4px;
  background-color: ${color.primary.background};
`;

const DropdownMenuItem = styled.a`
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: ${color.primary.font};
`;

function DropdownSelect({ label, options }) {
  const id = generateID('dropdown');
  const [ isExpanded, setIsExpanded ] = useState(false);
  const [ selection, setSelection ] = useState({ label: label });
  const dropdownRef = useRef(null);

  function closeDropdown() {
    setIsExpanded(false);
  }

  function openDropdown() {
    setIsExpanded(true);
  }

  function handleDropdownButtonKeydown(event) {
    switch (event.keyCode) {
      case keyCode.RETURN:
      case keyCode.SPACE:
      case keyCode.DOWN:
        openDropdown();
        break;

      case keyCode.UP:
        openDropdown();
        break;

      default:
        break;
    }
  }

  useOutsideClickListener(dropdownRef, closeDropdown);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton
        id={id}
        isExpanded={isExpanded}
        aria-haspopup="true"
        aria-expanded={isExpanded.toString()}
        onClick={() => { setIsExpanded(!isExpanded); }}
        onKeyDown={handleDropdownButtonKeydown}
      >
        <DropdownLabel>{selection.label}</DropdownLabel>
        <DropdownArrow isExpanded={isExpanded}><FontAwesomeIcon icon={faCaretDown} /></DropdownArrow>
      </DropdownButton>
      <DropdownMenu role="menu" aria-labelledby={id} isExpanded={isExpanded}>
        {options.map((option, i) => (
          <DropdownMenuItem key={i} href='#' role="menuitem">
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
}

DropdownSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  }))
};

export default DropdownSelect;
