import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

export default {
  title: 'callouts/fr-callout',
  decorators: [(story) => html`<fr-app>${story()}</fr-app>`],
};

const CalloutTemplate = ({ title, labelBtn, slotIcon, slotTitle, slot, slotAction }) =>
  html  `<fr-callout>
          ${unsafeHTML(slotTitle)}
          ${unsafeHTML(slot)}
          ${ifDefined(unsafeHTML(slotAction))}
          ${ifDefined(unsafeHTML(slotIcon))}
        </fr-callout>`;

export const Default = CalloutTemplate.bind({});
Default.args = {
  slotTitle: '<h3 slot="title">Titre</h3>',
  slot: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ut',
  slotIcon: null,
  slotAction: null
};

export const WithButton = CalloutTemplate.bind({});
WithButton.args = {
  slotTitle: '<h3 slot="title">Titre</h3>',
  slot: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ut',
  slotIcon: null,
  slotAction: '<fr-btn button-title="OK" slot="action">OK</fr-btn>'
};

export const WithIcon = CalloutTemplate.bind({});
WithIcon.args = {
  slotTitle: '<h3 slot="title">Titre</h3>',
  slot: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ut',
  slotIcon: '<fr-icon name="information-line" slot="icon"></fr-icon>',
  slotAction: '<fr-btn button-title="OK" slot="action">Bouton action</fr-btn>'
};
