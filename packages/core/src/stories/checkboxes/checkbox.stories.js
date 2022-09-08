import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'checkboxes/fr-checkbox',
};

const CheckboxTemplate = ({ label, checked, disabled, hint, small, toggle, showToggleState, toggleSeparator, toggleLabelLeft,  slot, slotNative }) =>
  html`<fr-app>
    <fr-checkbox label=${label} ?checked=${checked} ?disabled=${disabled} hint=${ifDefined(hint)} ?small=${small} ?toggle=${toggle} ?show-toggle-state=${showToggleState} ?toggle-separator=${toggleSeparator} ?toggle-label-left=${toggleLabelLeft}>
      ${slotNative ? unsafeHTML(slotNative) : null}
      ${slot ? unsafeHTML(slot) : null}
    </fr-checkbox>
  </fr-app>`;

export const Playground = CheckboxTemplate.bind({});
Playground.args = {
  label: 'Label checkbox',
  checked: false,
  disabled: false,
  hint: '',
  small: false,
  toggle: false,
  showToggleState: false,
  toggleSeparator: false,
  toggleLabelLeft: false,
  slot: ``,
  slotNative: ``,
};

export const Default = CheckboxTemplate.bind({});
Default.args = {
  label: 'Label checkbox'
};

export const Checked = CheckboxTemplate.bind({});
Checked.args = {
  label: 'Label checkbox',
  checked: true
};

export const Disabled = CheckboxTemplate.bind({});
Disabled.args = {
  label: 'Label checkbox',
  disabled: true
};

export const HintText = CheckboxTemplate.bind({});
HintText.args = {
  label: 'Label checkbox',
  hint: 'Texte de description additionnel'
};

export const SmallSize = CheckboxTemplate.bind({});
SmallSize.args = {
  label: 'Label checkbox',
  small: true
};

export const Error = CheckboxTemplate.bind({});
Error.args = {
  label: 'Label checkbox',
  slot: `<fr-error-text>Texte d’erreur obligatoire</fr-error-text>`,
};

export const Validation = CheckboxTemplate.bind({});
Validation.args = {
  label: 'Label checkbox',
  checked: true,
  slot: `<fr-valid-text>Texte de validation</fr-valid-text>`,
};

export const NativeInput = CheckboxTemplate.bind({});
NativeInput.args = {
  label: 'Label checkbox',
  slotNative: `<input slot="native" type="checkbox" name="checkbox-1" checked="checked" />`,
};

export const Toggle = CheckboxTemplate.bind({});
Toggle.args = {
  toggle: true,
  label: 'Label action interrupteur',
};

export const ToggleChecked = CheckboxTemplate.bind({});
ToggleChecked.args = {
  toggle: true,
  label: 'Label action interrupteur',
  checked: true,
};

export const ToggleDisabled = CheckboxTemplate.bind({});
ToggleDisabled.args = {
  toggle: true,
  label: 'Label action interrupteur',
  disabled: true,
};

export const ToggleHintText = CheckboxTemplate.bind({});
ToggleHintText.args = {
  toggle: true,
  label: 'Label action interrupteur',
  hint: 'Texte d’aide pour clarifier l’action',
};

export const ToggleState = CheckboxTemplate.bind({});
ToggleState.args = {
  toggle: true,
  label: 'Label action interrupteur',
  showToggleState: true,
};

export const ToggleSeparator = CheckboxTemplate.bind({});
ToggleSeparator.args = {
  toggle: true,
  label: 'Label action interrupteur',
  toggleSeparator: true,
};

export const ToggleLabelLeft = CheckboxTemplate.bind({});
ToggleLabelLeft.args = {
  toggle: true,
  label: 'Label action interrupteur',
  toggleLabelLeft: true,
};
