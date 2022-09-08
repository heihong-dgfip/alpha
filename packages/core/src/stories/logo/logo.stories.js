import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

export default {
  title: 'logo/fr-logo',
  argTypes: {
    size: {
      description: 'Size of link',
      control: {
        type: 'select',
        options: { default: null || undefined, small: 'sm', large: 'lg' },
      },
    },
  },
};

const LogoTemplate = ({ size }) =>
  html`<fr-app>
    <fr-logo size="${ifDefined(size)}"></fr-logo>
  </fr-app>`;

export const Default = LogoTemplate.bind({});

export const Small = LogoTemplate.bind({});
Small.args = {
  size: 'sm',
};

export const Large = LogoTemplate.bind({});
Large.args = {
  size: 'lg',
};
