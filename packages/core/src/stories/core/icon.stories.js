import { names } from './icons';
import { html } from 'lit-html';

import { ifDefined } from 'lit-html/directives/if-defined';

export default {
  title: 'core/icons',
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: [...names],
      },
    },
    size: {
      control: {
        type: 'select',
        options: { small: 'sm', medium: null || undefined, large: 'lg' },
      },
    },
  },
};

const IconTemplate = ({ name, size }) =>
  html`<fr-app>
    <fr-icon name="${name}" size="${ifDefined(size)}"></fr-icon>
  </fr-app>`;

export const Default = IconTemplate.bind({});
Default.args = {
  name: 'account-fill',
};

export const Small = IconTemplate.bind({});
Small.args = {
  name: 'account-fill',
  size: 'sm',
};

export const Large = IconTemplate.bind({});
Large.args = {
  name: 'account-fill',
  size: 'lg',
};
