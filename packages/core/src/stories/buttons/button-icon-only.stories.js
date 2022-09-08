import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { names } from '../core/icons';

export default {
  title: 'buttons/fr-btn/IconOnly',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: { small: 'sm', medium: null || undefined, large: 'lg' },
      },
    },
    state: {
      control: {
        type: 'select',
        options: { primary: null || undefined, secondary: 'secondary' },
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: [...names],
      },
    },
  },
};
const IconOnlyTemplate = ({ buttonTitle, state, ariaLabel, disabled, iconName, size }) =>
  html`<fr-app>
    <fr-btn button-title=${buttonTitle} ?disabled=${disabled} aria-label=${ariaLabel} state=${ifDefined(state)} size=${ifDefined(size)} icon-only
      ><fr-icon name="${iconName}" slot="left"></fr-icon
    ></fr-btn>
  </fr-app>`;

export const DefaultIconOnly = IconOnlyTemplate.bind({});
DefaultIconOnly.args = {
  ariaLabel: 'Label button',
  buttonTitle: 'Label button',
  state: undefined,
  disabled: false,
  size: undefined,
  iconName: 'checkbox-circle-line',
};

export const IconOnlySmall = IconOnlyTemplate.bind({});
IconOnlySmall.args = {
  buttonTitle: 'Label button',
  ariaLabel: 'Label button',
  state: undefined,
  disabled: false,
  size: 'sm',
  iconName: `checkbox-circle-line`,
};

export const IconOnlyLarge = IconOnlyTemplate.bind({});
IconOnlyLarge.args = {
  ariaLabel: 'Label button',
  buttonTitle: 'Label button',
  iconName: 'checkbox-circle-line',
  state: undefined,
  disabled: false,
  size: 'lg',
};

export const IconOnlySecondary = IconOnlyTemplate.bind({});
IconOnlySecondary.args = {
  ariaLabel: 'Label button',
  buttonTitle: 'Label button',
  iconName: 'checkbox-circle-line',
  state: 'secondary',
  disabled: false,
};

export const IconOnlyDisabled = IconOnlyTemplate.bind({});
IconOnlyDisabled.args = {
  ariaLabel: 'Label button',
  buttonTitle: 'Label button',
  iconName: 'checkbox-circle-line',
  disabled: true,
};
