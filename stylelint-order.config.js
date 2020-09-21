/**
 * Organize CSS by groups.
 * Inspired by 9elements (https://9elements.com)
 * In a nutshell, this is the order:
 * - Generated content
 * - Overview
 * - Position and layout
 * - Display and visibility
 * - Clipping
 * - Box model (from outside in)
 * - Background
 * - Typography
 * - Cursor
 * - Asthethic
 * - Tables
 * - Animation
 */
const groups = [
  // Generated content
  ['content', 'quotes'],

  // Overview
  ['all', 'appearance'],
  ['box-sizing'],
  ['will-change'],

  // Position and layout
  ['display', 'position', 'top', 'right', 'bottom', 'left'],
  ['float', 'clear'],
  [
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
  ],
  [
    'grid',
    'grid-area',
    'grid-template',
    'grid-template-areas',
    'grid-template-rows',
    'grid-template-columns',
    'grid-row',
    'grid-row-start',
    'grid-row-end',
    'grid-column',
    'grid-column-start',
    'grid-column-end',
    'grid-auto-rows',
    'grid-auto-columns',
    'grid-auto-flow',
    'grid-gap',
    'grid-row-gap',
    'grid-column-gap',
  ],
  ['justify-content', 'justify-items', 'justify-self'],
  ['align-content', 'align-items', 'align-self'],
  ['order'],
  [
    'columns',
    'column-gap',
    'column-fill',
    'column-rule',
    'column-rule-width',
    'column-rule-style',
    'column-rule-color',
    'column-span',
    'column-count',
    'column-width',
  ],

  // Display and visibility
  ['visibility', 'opacity', 'mix-blend-mode', 'isolation', 'z-index'],
  [
    'backface-visibility',
    'perspective',
    'perspective-origin',
    'transform',
    'transform-origin',
    'transform-style',
  ],

  // Clipping
  ['overflow', 'overflow-x', 'overflow-y', 'resize'],

  // Box model (from outside in)
  ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
  ['box-shadow'],
  [
    'outline',
    'outline-offset',
    'outline-width',
    'outline-style',
    'outline-color',
  ],
  [
    'border',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left',
    'border-width',
    'border-top-width',
    'border-right-width',
    'border-bottom-width',
    'border-left-width',
  ],
  [
    'border-style',
    'border-top-style',
    'border-right-style',
    'border-bottom-style',
    'border-left-style',
  ],
  [
    'border-color',
    'border-top-color',
    'border-right-color',
    'border-bottom-color',
    'border-left-color',
  ],
  [
    'border-image',
    'border-image-source',
    'border-image-width',
    'border-image-outset',
    'border-image-repeat',
    'border-image-slice',
  ],
  [
    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
  ],
  ['padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
  ['width', 'min-width', 'max-width'],
  ['height', 'min-height', 'max-height'],

  // Background
  [
    'background',
    'background-attachment',
    'background-clip',
    'background-color',
    'background-image',
    'background-origin',
    'background-position',
    'background-repeat',
    'background-size',
    'background-blend-mode',
  ],

  // Typography
  [
    'font',
    'font-family',
    'font-kerning',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-weight',
    'font-smoothing',
    'osx-font-smoothing',
    'font-variant',
    'font-style',
  ],
  [
    'line-height',
    'word-spacing',
    'letter-spacing',
    'white-space',
    'word-break',
    'word-wrap',
    'hyphens',
    'orphans',
    'widows',
  ],
  [
    'direction',
    'tab-size',
    'text-align',
    'text-align-last',
    'text-justify',
    'text-indent',
    'text-transform',
    'text-decoration',
    'text-decoration-color',
    'text-decoration-line',
    'text-decoration-style',
    'text-rendering',
    'text-shadow',
    'text-overflow',
  ],
  ['color'],

  // Cursor
  ['cursor', 'user-select', 'pointer-events'],

  // Asthethic
  ['vertical-align'],
  [
    'list-style',
    'list-style-type',
    'list-style-position',
    'list-style-image',
    'caption-side',
  ],
  ['counter-reset', 'counter-increment'],
  ['object-fit', 'filter'],
  ['page-break-before', 'page-break-after', 'page-break-inside'],

  // Tables
  ['table-layout', 'border-collapse', 'border-spacing', 'empty-cells'],

  // Animation
  [
    'transition',
    'transition-delay',
    'transition-duration',
    'transition-property',
    'transition-timing-function',
  ],
  [
    'animation',
    'animation-name',
    'animation-duration',
    'animation-timing-function',
    'animation-delay',
    'animation-iteration-count',
    'animation-direction',
    'animation-fill-mode',
    'animation-play-state',
  ],
];

module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      // Variables
      'custom-properties',
      // Declarations
      'declarations',
      // Media Queries
      { type: 'at-rule', name: 'media', hasBlock: true },
      // Pseudo-elements
      {
        type: 'rule',
        selector: /^&::[\w-]+/,
        hasBlock: true,
      },
      // Pseudo-classes
      {
        type: 'rule',
        selector: /^&:[\w-]+/,
        hasBlock: true,
      },
      // Nested Rules
      'rules',
    ],
    'order/properties-order': [
      groups.map((group) => ({
        properties: group,
      })),
    ],
  },
};
