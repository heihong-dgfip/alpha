import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { ifDefined } from 'lit-html/directives/if-defined';

export default {
  title: 'buttons/fr-btns',
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: { left: null || undefined, center: 'center', right: 'right' },
      },
    },
  },
};

const ButtonsTemplate = ({ slot, position }) => html`<fr-app>
  <fr-btns position=${ifDefined(position)}> ${unsafeHTML(slot)} </fr-btns>
</fr-app>`;

export const Default = ButtonsTemplate.bind({});
Default.args = {
  slot: ` <fr-btn button-title="label button1" aria-label="label button">label button 1</fr-btn>
   <fr-btn button-title="label button2" aria-label="label button2">label button 2</fr-btn>`,
};

export const Center = ButtonsTemplate.bind({});
Center.args = {
  slot: ` <fr-btn button-title="label button1" aria-label="label button">label button 1</fr-btn>
   <fr-btn button-title="label button2" aria-label="label button2">label button 2</fr-btn>`,
  position: 'center',
};

export const Right = ButtonsTemplate.bind({});
Right.args = {
  slot: ` <fr-btn button-title="label button1" aria-label="label button">label button 1</fr-btn>
   <fr-btn button-title="label button2" aria-label="label button2">label button 2</fr-btn>`,
  position: 'right',
};

export const textIcon = ButtonsTemplate.bind({});
textIcon.args = {
  slot: `<fr-btn button-title="Label button">
  <fr-icon name="checkbox-circle-line" slot="left"></fr-icon>
  label button 1
</fr-btn>
   <fr-btn button-title="Label button">
  <fr-icon name="checkbox-circle-line" slot="left"></fr-icon>
  label button 2
</fr-btn>`,
};

const Equisized = ({ position, slot }) => html`<fr-app>
  <fr-btns class="fr-btns-group--equisized" position="${position}">${unsafeHTML(slot)}</fr-btns>
</fr-app>`;

export const equisized = Equisized.bind({});
equisized.args = {
  position: 'center',
  slot: `<fr-btn button-title="label button1" aria-label="label button" text-position="center">label button</fr-btn>
    <fr-btn button-title="label button2" aria-label="label button" text-position="center">label button</fr-btn>
    <fr-btn button-title="label button2" aria-label="label button" text-position="center">label button plus long</fr-btn>`,
};

const IconOnly = ({ position, slot }) => html`<fr-app>
  <fr-btns position="${position}">${unsafeHTML(slot)}</fr-btns>
</fr-app>`;

export const iconOnly = IconOnly.bind({});
iconOnly.args = {
  position: 'center',
  slot: ` <fr-btn icon-only button-title="Label button" aria-label="Label button">
      <fr-icon name="checkbox-circle-line" slot="left"></fr-icon>
    </fr-btn>
    <fr-btn icon-only button-title="Label button" aria-label="Label button">
      <fr-icon name="checkbox-circle-line" slot="left"></fr-icon>
    </fr-btn>
    <fr-btn icon-only button-title="Label button" aria-label="Label button">
      <fr-icon name="checkbox-circle-line" slot="left"></fr-icon>
    </fr-btn>`,
};
