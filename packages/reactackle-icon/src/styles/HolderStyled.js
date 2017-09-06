import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const propTypes = {
  /** Set icon's source */
  src: PropTypes.string,
};

const defaultProps = {
  src: '',
};

// PROP RECEIVERS
const IconImg = ({ src }) => css`
  background-image: url('${src}');
`;

// STYLES
export const HolderStyled = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-position: center;
  background-repeat: no-repeat;
  color: inherit;
  ${IconImg};
`;

HolderStyled.propTypes = propTypes;
HolderStyled.defaultProps = defaultProps;
HolderStyled.displayName = 'HolderStyled';
