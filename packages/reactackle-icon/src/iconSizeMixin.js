export const iconSizeMixin = (outerSize, imgSize, outerWidth = outerSize) =>`
  width: ${outerWidth};
  height: ${outerSize};
  line-height: ${outerSize} !important;
  
  & > * {
    background-size: ${imgSize};
  }
`;
