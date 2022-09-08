import { html } from 'lit-html';

export default {
  title: 'forms/fr-form',
};

const options = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2' },
  { text: 'Option 3', value: '3' },
  { text: 'Option 4', value: '4' },
];

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

const FormTemplate = ({ required, controlsRequired }) =>
  html`<fr-app>
    <fr-form ?required=${required}>
      <fr-input label="Label champs de saisie" ?required=${controlsRequired}></fr-input>
      <fr-input type="textarea" label="Label champs de saisie" ?required=${controlsRequired}></fr-input>
      <fr-select label="Label pour liste déroulante" .options=${options} ?required=${controlsRequired}></fr-select>
      <fr-checkbox label="Label checkbox"></fr-checkbox>
      <fr-form-group
        legend="Légende pour l’ensemble de champs"
        legend-text-regular
      >
        <fr-radio-group
          .radios=${radios}
          value="radio-2"
        >
        </fr-radio-group>
      </fr-form-group>
    </fr-form>
  </fr-app>`;

export const Playground = FormTemplate.bind({});
Playground.args = {
  required: false,
  controlsRequired: false,
};

const NativeFormTemplate = ({ required, controlsRequired }) =>
  html`<fr-app>
    <fr-form ?required=${required}>
      <form action="/" method="post">
        <fr-input label="Label champs de saisie" ?required=${controlsRequired}></fr-input>
        <fr-input type="textarea" label="Label champs de saisie" ?required=${controlsRequired}></fr-input>
        <fr-select label="Label pour liste déroulante" .options=${options} ?required=${controlsRequired}></fr-select>
        <fr-checkbox label="Label checkbox"></fr-checkbox>
        <fr-form-group
          legend="Légende pour l’ensemble de champs"
          legend-text-regular
        >
          <fr-radio-group
            .radios=${radios}
            value="radio-2"
          >
          </fr-radio-group>
        </fr-form-group>
      </form>
    </fr-form>
  </fr-app>`;

export const NativeForm = NativeFormTemplate.bind({});
NativeForm.args = {
  required: false,
  controlsRequired: false,
};
