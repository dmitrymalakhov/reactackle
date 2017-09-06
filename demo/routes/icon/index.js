import React from 'react';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';
//eslint-disable-next-line
import IconCode from '!raw-loader!../../../packages/reactackle-icon/src/Icon';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Icon',
  routeTitle: 'Icon',
};

export const IconIndexRoute = props => {
  const itemProps = <RouteProps componentCode={IconCode} />;

  return (
    <div className="route-info">
      <RouteInfo {...props}>
        {itemProps}
      </RouteInfo>
    </div>
  );
};

IconIndexRoute.propTypes = propTypes;
IconIndexRoute.defaultProps = defaultProps;
IconIndexRoute.displayName = 'IconIndexRoute';
