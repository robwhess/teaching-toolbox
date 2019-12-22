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
  'PAGEUP': 33,
  'PAGEDOWN': 34,
  'END': 35,
  'HOME': 36,
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
  &:hover, &:focus {
    background-color: ${color.primary.hover};
  }
`;

function DropdownSelect({ label, options }) {
  const id = generateID('dropdown');
  const [ isExpanded, setIsExpanded ] = useState(false);
  const [ selectionIdx, setSelectionIdx ] = useState(-1);
  const dropdownContainerRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const optionRefs = options.map(() => useRef(null));

  function closeDropdown() {
    setIsExpanded(false);
    dropdownButtonRef.current.focus();
  }

  function openDropdown() {
    setIsExpanded(true);
  }

  function setFocusedOption(idx) {
    /*
     * Set focus after a brief timeout so the component has a chance to become
     * visible.
     */
    setTimeout(() => {
      optionRefs[idx].current.focus();
    }, 10);
  }

  function handleDropDownButtonClick() {
    setIsExpanded(!isExpanded);
    dropdownButtonRef.current.focus();
  }

  function handleDropdownButtonKeydown(event) {
    switch (event.keyCode) {
      case keyCode.RETURN:
      case keyCode.SPACE:
        openDropdown(0);
        setFocusedOption(0);
        /*
         * Prevent default action here so these keys are not treated as clicks.
         */
        event.preventDefault();
        break;

      case keyCode.DOWN:
        openDropdown();
        setFocusedOption(0);
        break;

      case keyCode.UP:
        openDropdown();
        setFocusedOption(options.length - 1);
        break;

      case keyCode.ESC:
        closeDropdown();
        break;

      default:
        break;
    }
  }

  function handleDropdownMenuItemClick(idx) {
    setSelectionIdx(idx);
    closeDropdown();
  }

  function handleDropdownMenuItemKeydown(event, idx) {
    switch (event.keyCode) {
      case keyCode.RETURN:
      case keyCode.SPACE:
        setSelectionIdx(idx);
        closeDropdown();
        /*
         * Prevent default action here so these keys are not treated as clicks.
         */
        event.preventDefault();
        break;

      case keyCode.DOWN:
        setFocusedOption((idx + 1) % options.length);
        break;

      case keyCode.UP:
        idx = idx === 0 ? options.length - 1 : idx - 1;
        setFocusedOption(idx);
        break;

      case keyCode.HOME:
      case keyCode.PAGEUP:
        setFocusedOption(0);
        break;

      case keyCode.END:
      case keyCode.PAGEDOWN:
        setFocusedOption(options.length - 1);
        break;

      case keyCode.TAB:
      case keyCode.ESC:
        closeDropdown();
        break;

      default:
        break;
    }
  }

  useOutsideClickListener(dropdownContainerRef, closeDropdown);

  return (
    <DropdownContainer ref={dropdownContainerRef}>
      <DropdownButton
        id={id}
        ref={dropdownButtonRef}
        isExpanded={isExpanded}
        aria-haspopup="true"
        aria-expanded={isExpanded.toString()}
        onClick={handleDropDownButtonClick}
        onKeyDown={handleDropdownButtonKeydown}
      >
        <DropdownLabel>{(options[selectionIdx] && options[selectionIdx].label) || label}</DropdownLabel>
        <DropdownArrow isExpanded={isExpanded}><FontAwesomeIcon icon={faCaretDown} /></DropdownArrow>
      </DropdownButton>
      <DropdownMenu role="menu" aria-labelledby={id} isExpanded={isExpanded}>
        {options.map((option, i) => (
          <DropdownMenuItem
            key={i}
            href="#"
            ref={optionRefs[i]}
            role="menuitem"
            onClick={() => { handleDropdownMenuItemClick(i); }}
            onKeyDown={(event) => { handleDropdownMenuItemKeydown(event, i); }}
          >
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
