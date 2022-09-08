import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'inputs/fr-input',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: { text: null || undefined, date: 'date', email: 'email', number: 'number', password: 'password', search: 'search', tel: 'tel', text: 'text', url: 'url', time: 'time', week: 'week', month: 'month', 'datetime-local': 'datetime-local', textarea: 'textarea' },
      },
    },
    autocomplete: {
      control: {
        type: 'select',
        options: { 'on': null || undefined, 'off': 'off', 'name': 'name', 'honorific-prefix': 'honorific-prefix', 'given-name': 'given-name', 'additional-name': 'additional-name', 'family-name': 'family-name', 'honorific-suffix': 'honorific-suffix', 'nickname': 'nickname', 'email': 'email', 'username': 'username', 'new-password': 'new-password', 'current-password': 'current-password', 'one-time-code': 'one-time-code', 'organization-title': 'organization-title', 'organization': 'organization', 'street-address': 'street-address', 'address-line1': 'address-line1', 'address-line2': 'address-line2', 'address-line3': 'address-line3', 'address-level4': 'address-level4', 'address-level3': 'address-level3', 'address-level2': 'address-level2', 'address-level1': 'address-level1', 'country': 'country', 'country-name': 'country-name', 'postal-code': 'postal-code', 'cc-name': 'cc-name', 'cc-given-name': 'cc-given-name', 'cc-additional-name': 'cc-additional-name', 'cc-family-name': 'cc-family-name', 'cc-number': 'cc-number', 'cc-exp': 'cc-exp', 'cc-exp-month': 'cc-exp-month', 'cc-exp-year': 'cc-exp-year', 'cc-csc': 'cc-csc', 'cc-type': 'cc-type', 'transaction-currency': 'transaction-currency', 'transaction-amount': 'transaction-amount', 'language': 'language', 'bday': 'bday', 'bday-day': 'bday-day', 'bday-month': 'bday-month', 'bday-year': 'bday-year', 'sex': 'sex', 'tel': 'tel', 'tel-country-code': 'tel-country-code', 'tel-national': 'tel-national', 'tel-area-code': 'tel-area-code', 'tel-local': 'tel-local', 'tel-extension': 'tel-extension', 'impp': 'impp', 'url': 'url', 'photo': 'photo' },
      },
    },
  },
};

const InputTemplate = ({ label, type, autocomplete, value, required, disabled, hint, placeholder, slot, slotIcon, slotNative }) =>
  html`<fr-app>
    <fr-input label=${label} type=${ifDefined(type)} autocomplete=${ifDefined(autocomplete)} value=${ifDefined(value)} ?required=${required} ?disabled=${disabled} hint=${ifDefined(hint)} placeholder=${ifDefined(placeholder)}>
      ${slotNative ? unsafeHTML(slotNative) : null}
      ${slotIcon ? unsafeHTML(slotIcon) : null}
      ${slot ? unsafeHTML(slot) : null}
    </fr-input>
  </fr-app>`;

export const Playground = InputTemplate.bind({});
Playground.args = {
  label: 'Label champs de saisie',
  type: undefined,
  autocomplete: undefined,
  value: '',
  required: false,
  disabled: false,
  hint: '',
  placeholder: '',
  slot: ``,
  slotIcon: ``,
  slotNative: ``,
};

export const Default = InputTemplate.bind({});
Default.args = {
  label: 'Label champs de saisie',
};

export const InitialValue = InputTemplate.bind({});
InitialValue.args = {
  label: 'Label champs de saisie',
  value: 'valeur initiale',
};

export const TypeNumber = InputTemplate.bind({});
TypeNumber.args = {
  label: 'Label champs de saisie',
  type: 'number',
};

export const TypeSearch = InputTemplate.bind({});
TypeSearch.args = {
  label: 'Label champs de saisie',
  type: 'search',
};

export const TypeTel = InputTemplate.bind({});
TypeTel.args = {
  label: 'Label champs de saisie',
  type: 'tel',
};

export const TypeDate = InputTemplate.bind({});
TypeDate.args = {
  label: 'Label champs de saisie',
  type: 'date',
  autocomplete: 'bday',
  slotIcon: `<fr-icon slot="icon" name="calendar-line"></fr-icon>`,
};

export const TypeEmail = InputTemplate.bind({});
TypeEmail.args = {
  label: 'Label champs de saisie',
  type: 'email',
};

export const TypePassword = InputTemplate.bind({});
TypePassword.args = {
  label: 'Label champs de saisie',
  type: 'password',
};

export const Autocomplete = InputTemplate.bind({});
Autocomplete.args = {
  label: 'Nom',
  autocomplete: 'family-name',
};

export const Textarea = InputTemplate.bind({});
Textarea.args = {
  label: 'Label champs de saisie',
  type: 'textarea',
  value: 'bla bla',
};

export const Required = InputTemplate.bind({});
Required.args = {
  label: 'Label champs de saisie',
  required: true,
};

export const Disabled = InputTemplate.bind({});
Disabled.args = {
  label: 'Label champs de saisie',
  value: 'valeur',
  disabled: true,
};

export const HintText = InputTemplate.bind({});
HintText.args = {
  label: 'Label champs de saisie',
  hint: 'Texte de description additionnel',
};

export const Placeholder = InputTemplate.bind({});
Placeholder.args = {
  label: 'Label champs de saisie',
  placeholder: 'placeholder',
};

export const Icon = InputTemplate.bind({});
Icon.args = {
  label: 'Label champs de saisie',
  slotIcon: `<fr-icon slot="icon" name="alert-line"></fr-icon>`,
};

export const Error = InputTemplate.bind({});
Error.args = {
  label: 'Label champs de saisie',
  required: true,
  slot: `<fr-error-text>Texte d’erreur obligatoire</fr-error-text>`,
};

export const Validation = InputTemplate.bind({});
Validation.args = {
  label: 'Label champs de saisie',
  value: 'valeur',
  required: true,
  slot: `<fr-valid-text>Texte de validation</fr-valid-text>`,
};

export const NativeInput = InputTemplate.bind({});
NativeInput.args = {
  label: 'Label champs de saisie',
  type: 'date',
  autocomplete: 'bday',
  slotNative: `<input slot="native" name="naissance" value="2015-12-03" />`,
};

export const NativeTextarea = InputTemplate.bind({});
NativeTextarea.args = {
  label: 'Label champs de saisie',
  slotNative: `<textarea slot="native" name="commentaire">bla bla</textarea>`,
};
