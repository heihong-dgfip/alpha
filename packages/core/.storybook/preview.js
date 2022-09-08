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
    root: 'fr-app', // default: #root
    removeEmptyComments: true,
  },
};
