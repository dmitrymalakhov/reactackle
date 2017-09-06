export const iconFASizeMixin = (outerSize, imgSize, outerWidth = outerSize) =>`
  width: ${outerWidth};
  height: ${outerSize};
  line-height: ${outerSize} !important;
  font-size: ${imgSize}px !important;
`;
