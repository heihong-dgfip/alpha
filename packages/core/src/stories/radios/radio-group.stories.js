import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import backgroundImage from '../assets/placeholder.1x1.png';

export default {
  title: 'radios/fr-radio-group',
};

const RadioGroupTemplate = ({ radios, value, disabled, small, rich, slot }) =>
  html`<fr-app>
    <fr-form-group ?legend-text-regular=${!rich} legend="Légende pour l’ensemble de champs" ?disabled=${disabled}>
      <fr-radio-group .radios=${radios} value=${ifDefined(value)} ?small=${small} ?rich=${rich}>
        ${slot ? unsafeHTML(slot) : null}
      </fr-radio-group>
    </fr-form-group>
  </fr-app>`;

const radios = [
  {
    label: 'option 1',
    value: 'radio-1',
  },
  {
    label: 'option 2',
    value: 'radio-2',
  },
  {
    label: 'option 3',
    value: 'radio-3',
  },
];

const radiosHints = [
  {
    label: 'option 1',
    value: 'radio-1',
    hint: 'Texte de description additionnel',
  },
  {
    label: 'option 2',
    value: 'radio-2',
    hint: 'Texte de description additionnel',
  },
  {
    label: 'option 3',
    value: 'radio-3',
    hint: 'Texte de description additionnel',
  },
];

const radiosRich = [
  {
    label: 'option 1',
    backgroundImage: `url(${backgroundImage})`,
    value: 'radio-1',
  },
  {
    label: 'option 2',
    backgroundImage: `url(${backgroundImage})`,
    value: 'radio-2',
  },
  {
    label: 'option 3',
    backgroundImage: `url(${backgroundImage})`,
    value: 'radio-3',
  },
];

const radiosRichHints = [
  {
    label: 'option 1',
    backgroundImage: `url(${backgroundImage})`,
    value: 'radio-1',
    hint: 'Texte de description additionnel',
  },
  {
    label: 'option 2',
    backgroundImage: `url(${backgroundImage})`,
    value: 'radio-2',
    hint: 'Texte de description additionnel',
  },
  {
    label: 'option 3',
    backgroundImage: `url(${backgroundImage})`,
    value: 'radio-3',
    hint: 'Texte de description additionnel',
  },
];

export const Playground = RadioGroupTemplate.bind({});
Playground.args = {
  radios: radios,
  value: '',
  disabled: false,
  small: false,
  rich: false,
  slot: ``
};

export const Default = RadioGroupTemplate.bind({});
Default.args = {
  radios: radios,
};

export const InitialValue = RadioGroupTemplate.bind({});
InitialValue.args = {
  radios: radios,
  value: 'radio-3',
};

export const Small = RadioGroupTemplate.bind({});
Small.args = {
  radios: radios,
  value: 'radio-1',
  small: true,
};

export const Disabled = RadioGroupTemplate.bind({});
Disabled.args = {
  radios: radios,
  value: 'radio-2',
  disabled: true,
};

export const HintText = RadioGroupTemplate.bind({});
HintText.args = {
  radios: radiosHints,
  value: 'radio-3',
};

export const Rich = RadioGroupTemplate.bind({});
Rich.args = {
  radios: radiosRich,
  value: 'radio-3',
  rich: true,
};

export const RichDisabled = RadioGroupTemplate.bind({});
RichDisabled.args = {
  radios: radiosRich,
  value: 'radio-3',
  rich: true,
  disabled: true,
};

export const RichHintText = RadioGroupTemplate.bind({});
RichHintText.args = {
  radios: radiosRichHints,
  value: 'radio-2',
  rich: true,
};

export const NativesRadios = RadioGroupTemplate.bind({});
NativesRadios.args = {
  slot: 
`<input type="radio" name="radio-group-1" value="radio-1" label="option 1">
<input type="radio" name="radio-group-1" value="radio-2" label="option 2" checked>
<input type="radio" name="radio-group-1" value="radio-3" label="option 3">`,
};
