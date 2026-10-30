import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          'ios-src'?: string;
          alt?: string;
          ar?: boolean;
          'ar-modes'?: string;
          'ar-scale'?: string;
          'camera-controls'?: boolean;
          'touch-action'?: string;
          'auto-rotate'?: boolean;
          'rotation-per-second'?: string;
          'shadow-intensity'?: string;
          'shadow-softness'?: string;
          exposure?: string;
          poster?: string;
          loading?: string;
          reveal?: string;
          style?: React.CSSProperties;
          ref?: any;
          slot?: string;
        },
        HTMLElement
      >;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          'ios-src'?: string;
          alt?: string;
          ar?: boolean;
          'ar-modes'?: string;
          'ar-scale'?: string;
          'camera-controls'?: boolean;
          'touch-action'?: string;
          'auto-rotate'?: boolean;
          'rotation-per-second'?: string;
          'shadow-intensity'?: string;
          'shadow-softness'?: string;
          exposure?: string;
          poster?: string;
          loading?: string;
          reveal?: string;
          style?: React.CSSProperties;
          ref?: any;
          slot?: string;
        },
        HTMLElement
      >;
    }
  }
}
