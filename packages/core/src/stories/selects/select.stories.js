import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'selects/fr-select',
};

const SelectTemplate = ({ label, options, value, required, disabled, hint, slot, slotNative }) =>
  html`<fr-app>
    <fr-select label=${label} .options=${ifDefined(options)} value=${ifDefined(value)} ?required=${required} ?disabled=${disabled} hint=${ifDefined(hint)}>
      ${slotNative ? unsafeHTML(slotNative) : null}
      ${slot ? unsafeHTML(slot) : null}
    </fr-select>
  </fr-app>`;

const options = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2' },
  { text: 'Option 3', value: '3' },
  { text: 'Option 4', value: '4' },
];

export const Playground = SelectTemplate.bind({});
Playground.args = {
  label: 'Label pour liste déroulante',
  options: options,
  value: '',
  required: false,
  disabled: false,
  hint: '',
  slot: ``,
  slotNative: ``,
};

export const Default = SelectTemplate.bind({});
Default.args = {
  label: 'Label pour liste déroulante',
  options: options,
};

export const InitialValue = SelectTemplate.bind({});
InitialValue.args = {
  label: 'Label pour liste déroulante',
  options: options,
  value: '2',
};

export const Required = SelectTemplate.bind({});
Required.args = {
  label: 'Label pour liste déroulante',
  options: options,
  required: true,
};

export const RequiredWithValue = SelectTemplate.bind({});
RequiredWithValue.args = {
  label: 'Label pour liste déroulante',
  options: options,
  value: '1',
  required: true,
};

export const Disabled = SelectTemplate.bind({});
Disabled.args = {
  label: 'Label pour liste déroulante',
  options: options,
  value: '3',
  disabled: true,
};

export const HintText = SelectTemplate.bind({});
HintText.args = {
  label: 'Label pour liste déroulante',
  options: options,
  hint: 'Texte de description additionnel',
};

export const Error = SelectTemplate.bind({});
Error.args = {
  label: 'Label pour liste déroulante',
  options: options,
  required: true,
  slot: `<fr-error-text>Texte d’erreur obligatoire</fr-error-text>`,
};

export const Validation = SelectTemplate.bind({});
Validation.args = {
  label: 'Label pour liste déroulante',
  options: options,
  value: '4',
  required: true,
  slot: `<fr-valid-text>Texte de validation</fr-valid-text>`,
};

export const NativeSelect = SelectTemplate.bind({});
NativeSelect.args = {
  label: 'Label pour liste déroulante',
  slotNative: `<select slot="native" name="select-1">
  <option value="1" selected>Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
  <option value="4">Option 4</option>
</select>`,
};
