import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  extractThemeOrDefault,
  getValueString,
  transition,
} from 'reactackle-core';
import { spin, pulse, border, rounded, transform } from './mixins';
import { iconSizeMixin } from '../iconSizeMixin';

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
   * Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  src: '',
  border: false,
  rounded: false,
  size: 'normal',
  sizeMultiplier: 1,
  backgroundColor: '',
  flip: 'none',
  rotate: 0,
  spin: false,
  pulse: false,
};

// PROP RECEIVERS
const iconSize = ({ sizeMultiplier, theme: themeFromProvider, sizeKey }) => {
  const theme = extractThemeOrDefault(themeFromProvider);

  const width = getValueString(
    theme.reactackle.components.icon.size[sizeKey].width,
  );

  const height = getValueString(
    theme.reactackle.components.icon.size[sizeKey].height,
  );

  const widthValue =
    width !== 'inherit'
      ? `calc(${getValueString(width)} * ${sizeMultiplier})`
      : width;

  const heightValue =
    height !== 'inherit'
      ? `calc(${getValueString(height)} * ${sizeMultiplier})`
      : height;


  const imgSize = getValueString(
    theme.reactackle.components.icon.size[sizeKey].imgSize,
  );

  const innerSize =
    imgSize !== 'inherit' ? `calc(${imgSize} * ${sizeMultiplier})` : imgSize;

  return `
    ${iconSizeMixin(
      heightValue,
      innerSize,
      widthValue,
    )}
  `;
};

const iconColor = ({
  bgColor,
}) => css`    
    ${bgColor ? `background-color: ${bgColor}` : null}
  `;

// STYLES
export const IconStyled = styled.div`
  text-align: center;
  flex-shrink: 0;
  position: relative;
  ${transition('color, opacity')};
  ${iconSize};
  ${iconColor};
  ${border};
  ${rounded};
  ${transform};
  ${spin};
  ${pulse};

  &,
  & *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;

IconStyled.propTypes = propTypes;
IconStyled.defaultProps = defaultProps;
IconStyled.displayName = 'IconStyled';
