/*
 * Labeled ropdown select component with pretty good WAI-ARIA/keyboard support.
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
import LabeledInputElement from './LabeledInputElement';
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
  border: 1px solid ${color.primary.border};
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

const DropdownText = styled.div`
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

const DropdownList = styled.ul`
  display: ${props => props.isExpanded ? 'initial' : 'none'};
  position: absolute;
  left: 0;
  right: 0;
  top: 110%;
  margin: 0;
  padding: 0;
  border: 1px solid ${color.primary.focused};
  border-radius: 4px;
  background-color: ${color.primary.background};
`;

const DropdownListOption = styled.li`
  display: block;
  padding: 10px 20px;
  color: ${color.primary.font};
  background-color: ${props => props.selected ? color.selected : 'initial'};
  &:hover {
    background-color: ${props => props.selected ? color.selected : color.primary.hover};
  }
`;

function LabeledDropdownSelect({ label, options, required }) {
  const id = useRef(generateID('dropdown'));
  const [ isExpanded, setIsExpanded ] = useState(false);
  const [ selectionIdx, setSelectionIdx ] = useState(0);
  const dropdownContainerRef = useRef(null);
  const dropdownButtonRef = useRef(null);
  const dropdownListRef = useRef(null);

  function closeDropdown() {
    if (isExpanded) {
      setIsExpanded(false);
    }
  }

  function openDropdown() {
    if (!isExpanded) {
      setIsExpanded(true);
    }
    setTimeout(() => {
      dropdownListRef.current.focus();
    }, 10);
  }

  function handleDropdownButtonKeydown(event) {
    switch (event.keyCode) {
      case keyCode.RETURN:
        openDropdown();
        /*
         * Prevent default action here so these keys are not treated as clicks.
         */
        event.preventDefault();
        break;

      case keyCode.DOWN:
        openDropdown();
        setSelectionIdx(0);
        break;

      case keyCode.UP:
        openDropdown();
        setSelectionIdx(options.length - 1);
        break;

      case keyCode.ESC:
        closeDropdown();
        break;

      default:
        break;
    }
  }

  function handleDropdownListOptionClick(idx) {
    setSelectionIdx(idx);
    closeDropdown();
  }

  function handleDropdownListKeydown(event) {
    switch (event.keyCode) {
      case keyCode.RETURN:
        closeDropdown();
        dropdownButtonRef.current.focus();
        /*
         * Prevent default action here so these keys are not treated as clicks.
         */
        event.preventDefault();
        break;

      case keyCode.DOWN:
        setSelectionIdx((selectionIdx + 1) % options.length);
        break;

      case keyCode.UP:
        setSelectionIdx(selectionIdx === 0 ? options.length - 1 : selectionIdx - 1);
        break;

      case keyCode.HOME:
        setSelectionIdx(0);
        break;

      case keyCode.END:
        setSelectionIdx(options.length - 1);
        break;

      case keyCode.ESC:
        closeDropdown();
        dropdownButtonRef.current.focus();
        break;

      default:
        break;
    }
  }

  useOutsideClickListener(dropdownContainerRef, closeDropdown);

  return (
    <LabeledInputElement label={label} htmlFor={id.current} required={required}>
      <DropdownContainer ref={dropdownContainerRef}>
        <DropdownButton
          id={id.current}
          ref={dropdownButtonRef}
          isExpanded={isExpanded}
          aria-haspopup="listbox"
          aria-expanded={isExpanded.toString()}
          onClick={openDropdown}
          onKeyDown={handleDropdownButtonKeydown}
        >
          <DropdownText>{(options[selectionIdx] && options[selectionIdx].label) || ''}</DropdownText>
          <DropdownArrow isExpanded={isExpanded}><FontAwesomeIcon icon={faCaretDown} /></DropdownArrow>
        </DropdownButton>
        <DropdownList
          role="listbox"
          tabIndex="-1"
          aria-labelledby={id.current}
          aria-activedescendant={isExpanded ? `${id.current}-${selectionIdx}` : null}
          isExpanded={isExpanded}
          ref={dropdownListRef}
          onKeyDown={handleDropdownListKeydown}
        >
          {options.map((option, i) => (
            <DropdownListOption
              key={i}
              id={`${id.current}-${i}`}
              role="option"
              selected={selectionIdx === i}
              aria-selected={(selectionIdx === i).toString()}
              onClick={() => { handleDropdownListOptionClick(i); }}
            >
              {option.label}
            </DropdownListOption>
          ))}
        </DropdownList>
      </DropdownContainer>
    </LabeledInputElement>
  );
}

LabeledDropdownSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  })).isRequired
};

LabeledDropdownSelect.defaultProps = {
  required: false
};

export default LabeledDropdownSelect;
