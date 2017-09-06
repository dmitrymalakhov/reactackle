import React from 'react';
import {
  RouteStructure,
} from '../../components/Route/RouteStructure';

export const IconFontAwesomeRoute = props => (
  <RouteStructure
    componentTitle="Icon Font Awesome"
    tabs={[
      {
        text: 'General Info',
        href: '/icon-font-awesome',
      },
      {
        text: 'Use Cases',
        href: '/icon-font-awesome/demo',
      },
    ]}
  >
    { props.children }
  </RouteStructure>
);

IconFontAwesomeRoute.displayName = 'IconFontAwesomeRoute';
