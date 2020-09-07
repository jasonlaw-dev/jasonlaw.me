import * as React from 'react';
import { StickyProps as StickyPropsOriginal } from 'react-sticky';

export module 'react-sticky' {
  export interface StickyProps extends StickyPropsOriginal {
    ref?: any
  }

  export const Sticky: React.ComponentClass<StickyProps>;
}
