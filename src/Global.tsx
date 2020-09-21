import { Global as CoreGlobal, css } from '@emotion/core';
import React from 'react';

export const Global = () => (
  <CoreGlobal
    styles={() => css`
      /*
       * Flat out reset all elements and pseudo-elements for the often called "universal box-sizing".
       */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html {
        /*
         * Reset font size to 10px on default browser settings, to ease the calculations to use rem units.
         * It's used as 62.5% to adapt to changes in the browser's default font-size (which is typically 16px).
         */
        font-size: 62.5%;
        /*
         * Smooth anchor scrolling.
         */
        scroll-behavior: smooth;
      }

      /*
       * It’s useful for the body to fill the viewport, even when empty.
       * Allows a sticky footer when the content isn't enough.
       */

      body {
        min-height: 100vh;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      /*
       * Again, allows a sticky footer when the content isn't enough.
       */
      body,
      #root {
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
      }

      /*
       * Actually push the footer to stick it to the bottom
       */
      main {
        flex-grow: 1;
      }

      /*
       * Always ensure a link fits into its context and isn't a weird blue all the time.
       */
      a {
        color: inherit;
      }

      /*
       * Good old fluid images.
       * Images set to be a block element because frankly, life is too short for that weird gap you get at the bottom.
       */
      img {
        display: block;
        max-width: 100%;
      }
    `}
  />
);
