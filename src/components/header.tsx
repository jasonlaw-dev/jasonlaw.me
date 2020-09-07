import React from 'react';
import { Sticky } from 'react-sticky';

export const Header = React.forwardRef((_, ref: any) => (
  <Sticky ref={ref}>
    {({ style }) => (
      <div style={style} />
    )}
  </Sticky>
));
