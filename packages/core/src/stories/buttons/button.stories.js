import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'buttons/fr-btn',
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
    textPosition: {
      control: {
        type: 'select',
        options: { default: null || undefined, center: 'center', right: 'right' },
      },
    },
  },
};
const ButtonTemplate = ({ buttonTitle, state, ariaLabel, disabled, size, fullWidth, textPosition, slot }) =>
  html`<fr-app>
    <fr-btn
      button-title=${buttonTitle}
      aria-label=${ariaLabel}
      state=${ifDefined(state)}
      ?disabled=${disabled}
      size=${ifDefined(size)}
      ?full-width=${ifDefined(fullWidth)}
      text-position=${ifDefined(textPosition)}
    >
      ${unsafeHTML(slot)}
    </fr-btn>
  </fr-app>`;

export const Default = ButtonTemplate.bind({});
Default.args = {
  buttonTitle: 'Label button',
  ariaLabel: 'Label button',
  state: undefined,
  disabled: false,
  size: undefined,
  fullWidth: false,
  textPosition: undefined,
  slot: `<fr-icon name="checkbox-circle-line" slot="left"></fr-icon> label button`,
};

export const text = ButtonTemplate.bind({});
text.args = {
  buttonTitle: 'Label button',
  ariaLabel: 'Label button',
  state: undefined,
  disabled: false,
  size: undefined,
  fullWidth: false,
  textPosition: undefined,
  slot: `label button`,
};

export const secondary = ButtonTemplate.bind({});
secondary.args = {
  buttonTitle: 'Label button',
  ariaLabel: 'Label button',
  state: 'secondary',
  disabled: false,
  size: undefined,
  fullWidth: false,
  textPosition: undefined,
  slot: `label button`,
};

export const disabled = ButtonTemplate.bind({});
disabled.args = {
  buttonTitle: 'Label button',
  ariaLabel: 'Label button',
  state: 'secondary',
  disabled: true,
  size: undefined,
  fullWidth: false,
  textPosition: undefined,
  slot: `label button`,
};

export const small = ButtonTemplate.bind({});
small.args = {
  buttonTitle: 'Label button',
  ariaLabel: 'Label button',
  state: undefined,
  disabled: false,
  size: 'sm',
  fullWidth: false,
  textPosition: undefined,
  slot: `label button`,
};

export const Large = ButtonTemplate.bind({});
Large.args = {
  buttonTitle: 'Label button',
  ariaLabel: 'Label button',
  state: undefined,
  disabled: false,
  size: 'lg',
  fullWidth: false,
  textPosition: undefined,
  slot: `label button`,
};

export const fullWidth = ButtonTemplate.bind({});
fullWidth.args = {
  buttonTitle: 'Label button',
  ariaLabel: 'Label button',
  state: undefined,
  disabled: false,
  size: undefined,
  fullWidth: true,
  textPosition: undefined,
  slot: `label button`,
};

export const fullWidthtTextCenter = ButtonTemplate.bind({});
fullWidthtTextCenter.args = {
  buttonTitle: 'Label button',
  ariaLabel: 'Label button',
  state: undefined,
  disabled: false,
  size: undefined,
  fullWidth: true,
  textPosition: 'center',
  slot: `label button`,
};

export const fullWidthtTextRight = ButtonTemplate.bind({});
fullWidthtTextRight.args = {
  buttonTitle: 'Label button',
  ariaLabel: 'Label button',
  state: undefined,
  disabled: false,
  size: undefined,
  fullWidth: true,
  textPosition: 'right',
  slot: `label button`,
};

export const fullWidthtIconLeft = ButtonTemplate.bind({});
fullWidthtIconLeft.args = {
  buttonTitle: 'Label button',
  ariaLabel: 'Label button',
  state: undefined,
  disabled: false,
  size: undefined,
  fullWidth: true,
  textPosition: undefined,
  slot: `<fr-icon name="checkbox-circle-line" slot="left"></fr-icon> label button`,
};

export const fullWidthtIconRight = ButtonTemplate.bind({});
fullWidthtIconRight.args = {
  buttonTitle: 'Label button',
  ariaLabel: 'Label button',
  state: undefined,
  disabled: false,
  size: undefined,
  fullWidth: true,
  textPosition: undefined,
  slot: `<fr-icon name="checkbox-circle-line" slot="right"></fr-icon> label button`,
};

export const fullWidthtIconCenter = ButtonTemplate.bind({});
fullWidthtIconCenter.args = {
  buttonTitle: 'Label button',
  ariaLabel: 'Label button',
  state: undefined,
  disabled: false,
  size: undefined,
  fullWidth: true,
  textPosition: 'center',
  slot: `<fr-icon name="checkbox-circle-line" slot="right"></fr-icon> label button`,
};
