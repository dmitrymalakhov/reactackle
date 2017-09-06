import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
//eslint-disable-next-line
import IconCode from '!raw-loader!../../../packages/reactackle-icon-font-awesome/src/IconFontAwesome';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'IconFontAwesome',
  routeTitle: 'Icon Font Awesome',
};

export const IconFontAwesomeIndexRoute = props => {
  const itemProps = <RouteProps componentCode={IconCode} />;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

IconFontAwesomeIndexRoute.propTypes = propTypes;
IconFontAwesomeIndexRoute.defaultProps = defaultProps;
IconFontAwesomeIndexRoute.displayName = 'IconFontAwesomeIndexRoute';
