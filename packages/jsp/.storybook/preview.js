import '@dgfip/dsfr-core/dist/dsfr-core/dsfr-core.css';
import { defineCustomElements } from '@dgfip/dsfr-core';
defineCustomElements();
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    root: '#wrapper', // default: #root
    removeEmptyComments: true,
  },
};
