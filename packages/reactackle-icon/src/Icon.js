import React from 'react';
import PropTypes from 'prop-types';
import { registerDefaultComponentTheme, noop } from 'reactackle-core';
import componentTheme from './styles/theme';
import { IconStyled } from './styles/IconStyled';
import { HolderStyled } from './styles/HolderStyled';

registerDefaultComponentTheme('icon', componentTheme);

const propTypes = {
  /** Set icon's source */
  src: PropTypes.string,
  /** Turns on/off icon's border */
  border: PropTypes.bool,
  /** Make icon rounded */
  rounded: PropTypes.bool,
  /** Set icon size */
  size: PropTypes.oneOf(['inherit', 'small', 'normal', 'large']),
  /** Scale icon */
  sizeMultiplier: PropTypes.number,
  /** Set icon's background color */
  backgroundColor: PropTypes.string,
  /** Set icon's flipping plane */
  flip: PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  /** Rotate icon by some degree */
  rotate: PropTypes.number,
  /** Make icon spinning infinitely & smooth */
  spin: PropTypes.bool,
  /** Make icon spinning infinitely & with steps */
  pulse: PropTypes.bool,
  /**
   * Specify function to call on Icon click
   */
  onClick: PropTypes.func,
  /**
   * Specify the tab order of an element
   */
  tabIndex: PropTypes.number,
  /** Set icon's color scheme */
  colorScheme: PropTypes.oneOf(['light', 'dark']),
};

const defaultProps = {
  src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ItCh0LvQvtC5XzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+Cjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjMuNSwwLjUgNS41LDAuNSA1LjUsMTguNSAyMy41LDE4LjUgIi8+CjxyZWN0IHg9IjAuNSIgeT0iNS41IiBjbGFzcz0ic3QwIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiLz4KPGc+Cgk8bGluZSBjbGFzcz0ic3QwIiB4MT0iMC41IiB5MT0iNS41IiB4Mj0iNS41IiB5Mj0iMC41Ii8+CjwvZz4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjIzLjUiIHkxPSIxOC41IiB4Mj0iMTguNSIgeTI9IjIzLjUiLz4KPGc+Cgk8bGluZSBjbGFzcz0ic3QwIiB4MT0iMTguNSIgeTE9IjUuNSIgeDI9IjIzLjUiIHkyPSIwLjUiLz4KPC9nPgo8L3N2Zz4K',
  border: false,
  rounded: false,
  size: 'normal',
  sizeMultiplier: 1,
  backgroundColor: '',
  flip: 'none',
  rotate: 0,
  spin: false,
  pulse: false,
  onClick: noop,
  tabIndex: -1,
  colorScheme: 'dark',
};

export default function Icon(props) {
  const attributes = {
    onClick: props.onClick,
  };

  if (props.tabIndex !== -1) attributes.tabIndex = props.tabIndex;

  return (
    <IconStyled
      {...attributes}
      border={props.border}
      rounded={props.rounded}
      sizeMultiplier={props.sizeMultiplier}
      sizeKey={props.size}
      bgColor={props.backgroundColor}
      colorScheme={props.colorScheme}
      flip={props.flip}
      rotate={props.rotate}
      spin={props.spin}
      pulse={props.pulse}
    >
      <HolderStyled
        sizeMultiplier={props.sizeMultiplier}
        sizeKey={props.size}
        src={props.src}
      />
    </IconStyled>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
Icon.displayName = 'Icon';
