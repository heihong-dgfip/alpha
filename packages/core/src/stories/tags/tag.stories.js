import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'tags/fr-tag',
};

const TagTemplate = ({ href, slot }) => html`<fr-app>
  <fr-tag href=${href}> ${unsafeHTML(slot)} </fr-tag>
</fr-app>`;

export const Default = TagTemplate.bind({});
Default.args = {
  href: '#',
  slot: 'label tag',
};

export const IconLeft = TagTemplate.bind({});
IconLeft.args = {
  href: '#',
  slot: '<fr-icon name="arrow-left-line" slot="left"></fr-icon> label tag',
};

export const IconRight = TagTemplate.bind({});
IconRight.args = {
  href: '#',
  slot: '<fr-icon name="arrow-right-line" slot="right"></fr-icon> label tag',
};

const SmallTemplate = ({ href, slot, sm }) => html`<fr-app>
  <fr-tag href=${href} sm="${sm}"> ${unsafeHTML(slot)} </fr-tag>
</fr-app>`;

export const Small = SmallTemplate.bind({});
Small.args = {
  href: '#',
  slot: 'label tag',
  sm: true,
};

const NoHrefTemplate = ({ slot }) => html`<fr-app>
  <fr-tag> ${unsafeHTML(slot)} </fr-tag>
</fr-app>`;

export const NoHref = NoHrefTemplate.bind({});
NoHref.args = {
  slot: 'label tag',
};
