import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import radioImage from '../assets/placeholder.1x1.png';

export default {
  title: 'forms/fr-form-group',
};

const InputsTemplate = ({ legend, hint, legendVisuallyHidden, disabled, hints, slotMessage }) =>
  html`<fr-app>
    <fr-form-group
      legend=${legend}
      hint=${ifDefined(hint)}
      ?legend-visually-hidden=${legendVisuallyHidden}
      ?disabled=${disabled}
    >
      <fr-input label="Label champs de saisie" hint=${ifDefined(hints ? 'Texte de description additionnel' : undefined)}></fr-input>
      <fr-input label="Label champs de saisie" hint=${ifDefined(hints ? 'Texte de description additionnel' : undefined)}></fr-input>
      <fr-input label="Label champs de saisie" hint=${ifDefined(hints ? 'Texte de description additionnel' : undefined)}></fr-input>
      ${slotMessage ? unsafeHTML(slotMessage) : null}
    </fr-form-group>
  </fr-app>`;

const options = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2' },
  { text: 'Option 3', value: '3' },
  { text: 'Option 4', value: '4' },
];

const SelectsTemplate = ({ legend, hint, legendVisuallyHidden, disabled, hints, slotMessage }) =>
  html`<fr-app>
    <fr-form-group
      legend=${legend}
      hint=${ifDefined(hint)}
      ?legend-visually-hidden=${legendVisuallyHidden}
      ?disabled=${disabled}
    >
      <fr-select label="Label pour liste déroulante" hint=${ifDefined(hints ? 'Texte de description additionnel' : undefined)} .options=${options}></fr-select>
      <fr-select label="Label pour liste déroulante" hint=${ifDefined(hints ? 'Texte de description additionnel' : undefined)} .options=${options} value="1"></fr-select>
      <fr-select label="Label pour liste déroulante" hint=${ifDefined(hints ? 'Texte de description additionnel' : undefined)} .options=${options} value="3"></fr-select>
      ${slotMessage ? unsafeHTML(slotMessage) : null}
    </fr-form-group>
  </fr-app>`;

const CheckboxesTemplate = ({ legend, hint, legendVisuallyHidden, disabled, inline, small, hints, slotMessage }) =>
  html`<fr-app>
    <fr-form-group
      legend=${legend}
      hint=${ifDefined(hint)}
      legend-text-regular
      ?legend-visually-hidden=${legendVisuallyHidden}
      ?disabled=${disabled}
      ?inline=${inline}
    >
      <fr-checkbox label="Label checkbox" hint=${ifDefined(hints ? 'Texte de description additionnel' : undefined)} ?small=${small}></fr-checkbox>
      <fr-checkbox label="Label checkbox" hint=${ifDefined(hints ? 'Texte de description additionnel' : undefined)} ?small=${small} checked></fr-checkbox>
      <fr-checkbox label="Label checkbox" hint=${ifDefined(hints ? 'Texte de description additionnel' : undefined)} ?small=${small}></fr-checkbox>
      ${slotMessage ? unsafeHTML(slotMessage) : null}
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
    backgroundImage: `url(${radioImage})`,
    value: 'radio-1',
  },
  {
    label: 'option 2',
    backgroundImage: `url(${radioImage})`,
    value: 'radio-2',
  },
  {
    label: 'option 3',
    backgroundImage: `url(${radioImage})`,
    value: 'radio-3',
  },
];

const radiosRichHints = [
  {
    label: 'option 1',
    backgroundImage: `url(${radioImage})`,
    value: 'radio-1',
    hint: 'Texte de description additionnel',
  },
  {
    label: 'option 2',
    backgroundImage: `url(${radioImage})`,
    value: 'radio-2',
    hint: 'Texte de description additionnel',
  },
  {
    label: 'option 3',
    backgroundImage: `url(${radioImage})`,
    value: 'radio-3',
    hint: 'Texte de description additionnel',
  },
];

const RadiosTemplate = ({ legend, hint, legendVisuallyHidden, disabled, inline, small, rich, hints, slotMessage }) => {
  let templateRadios;
  if (rich) {
    if (hints) {
      templateRadios = radiosRichHints;
    } else {
      templateRadios = radiosRich;
    }
  } else {
    if (hints) {
      templateRadios = radiosHints;
    } else {
      templateRadios = radios;
    }
  }
  return html`<fr-app>
    <fr-form-group
      legend=${legend}
      hint=${ifDefined(hint)}
      ?legend-text-regular=${!rich}
      ?legend-visually-hidden=${legendVisuallyHidden}
      ?disabled=${disabled}
      ?inline=${inline}
    >
      <fr-radio-group
        .radios=${templateRadios}
        value="radio-2"
        ?small=${small}
        ?rich=${rich}
      >
      </fr-radio-group>
      ${slotMessage ? unsafeHTML(slotMessage) : null}
    </fr-form-group>
  </fr-app>`
};

export const InputsPlayground = InputsTemplate.bind({});
InputsPlayground.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: '',
  legendVisuallyHidden: false,
  disabled: false,
  hints: false,
  slotMessage: ``,
};

export const SelectsPlayground = SelectsTemplate.bind({});
SelectsPlayground.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: '',
  legendVisuallyHidden: false,
  disabled: false,
  hints: false,
  slotMessage: ``,
};

export const RadiosPlayground = RadiosTemplate.bind({});
RadiosPlayground.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: '',
  legendVisuallyHidden: false,
  disabled: false,
  inline: false,
  small: false,
  rich: false,
  hints: false,
  slotMessage: ``,
};

export const CheckboxesPlayground = CheckboxesTemplate.bind({});
CheckboxesPlayground.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: '',
  legendVisuallyHidden: false,
  disabled: false,
  inline: false,
  small: false,
  hints: false,
  slotMessage: ``,
};

export const Inputs = InputsTemplate.bind({});
Inputs.args = {
  legend: 'Légende pour l’ensemble de champs'
};

export const Selects = SelectsTemplate.bind({});
Selects.args = {
  legend: 'Légende pour l’ensemble de champs'
};

export const Radios = RadiosTemplate.bind({});
Radios.args = {
  legend: 'Légende pour l’ensemble de champs'
};

export const Checkboxes = CheckboxesTemplate.bind({});
Checkboxes.args = {
  legend: 'Légende pour l’ensemble de champs'
};

export const RadiosInline = RadiosTemplate.bind({});
RadiosInline.args = {
  legend: 'Légende pour l’ensemble de champs',
  inline: true
};

export const CheckboxesInline = CheckboxesTemplate.bind({});
CheckboxesInline.args = {
  legend: 'Légende pour l’ensemble de champs',
  inline: true
};

export const InputsError = InputsTemplate.bind({});
InputsError.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: 'Texte de description additionnel',
  slotMessage: `<fr-error-text slot="message">Texte d’erreur obligatoire</fr-error-text>`,
};

export const SelectsError = SelectsTemplate.bind({});
SelectsError.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: 'Texte de description additionnel',
  slotMessage: `<fr-error-text slot="message">Texte d’erreur obligatoire</fr-error-text>`,
};

export const RadiosError = RadiosTemplate.bind({});
RadiosError.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: 'Texte de description additionnel',
  slotMessage: `<fr-error-text slot="message">Texte d’erreur obligatoire</fr-error-text>`,
};

export const CheckboxesError = CheckboxesTemplate.bind({});
CheckboxesError.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: 'Texte de description additionnel',
  slotMessage: `<fr-error-text slot="message">Texte d’erreur obligatoire</fr-error-text>`,
};

export const InputsValidation = InputsTemplate.bind({});
InputsValidation.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: 'Texte de description additionnel',
  slotMessage: `<fr-valid-text slot="message">Texte de validation</fr-valid-text>`,
};

export const SelectsValidation = SelectsTemplate.bind({});
SelectsValidation.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: 'Texte de description additionnel',
  slotMessage: `<fr-valid-text slot="message">Texte de validation</fr-valid-text>`,
};

export const RadiosValidation = RadiosTemplate.bind({});
RadiosValidation.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: 'Texte de description additionnel',
  slotMessage: `<fr-valid-text slot="message">Texte de validation</fr-valid-text>`,
};

export const CheckboxesValidation = CheckboxesTemplate.bind({});
CheckboxesValidation.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: 'Texte de description additionnel',
  slotMessage: `<fr-valid-text slot="message">Texte de validation</fr-valid-text>`,
};

export const InputsDisabled = InputsTemplate.bind({});
InputsDisabled.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: 'Texte de description additionnel',
  disabled: true,
};

export const SelectsDisabled = SelectsTemplate.bind({});
SelectsDisabled.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: 'Texte de description additionnel',
  disabled: true,
};

export const RadiosDisabled = RadiosTemplate.bind({});
RadiosDisabled.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: 'Texte de description additionnel',
  disabled: true,
};

export const CheckboxesDisabled = CheckboxesTemplate.bind({});
CheckboxesDisabled.args = {
  legend: 'Légende pour l’ensemble de champs',
  hint: 'Texte de description additionnel',
  disabled: true,
};

export const InputsLegendHidden = InputsTemplate.bind({});
InputsLegendHidden.args = {
  legend: 'Légende pour l’ensemble de champs',
  legendVisuallyHidden: true,
};

export const SelectsLegendHidden = SelectsTemplate.bind({});
SelectsLegendHidden.args = {
  legend: 'Légende pour l’ensemble de champs',
  legendVisuallyHidden: true,
};

export const RadiosLegendHidden = RadiosTemplate.bind({});
RadiosLegendHidden.args = {
  legend: 'Légende pour l’ensemble de champs',
  legendVisuallyHidden: true,
};

export const CheckboxesLegendHidden = CheckboxesTemplate.bind({});
CheckboxesLegendHidden.args = {
  legend: 'Légende pour l’ensemble de champs',
  legendVisuallyHidden: true,
};
