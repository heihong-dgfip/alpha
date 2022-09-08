import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'tags/fr-tags',
};

const TagsTemplate = ({ slot }) => html`<fr-app>
  <fr-tags> ${unsafeHTML(slot)} </fr-tags>
</fr-app>`;

export const Default = TagsTemplate.bind({});
Default.args = {
  slot: `
    <fr-tag href="#">Label tag</fr-tag>
    <fr-tag href="#">Label tag</fr-tag>
    <fr-tag href="#">Label tag</fr-tag>`,
};

export const NoHref = TagsTemplate.bind({});
NoHref.args = {
  slot: `
    <fr-tag>Label tag</fr-tag>
    <fr-tag>Label tag</fr-tag>
    <fr-tag>Label tag</fr-tag>`,
};
