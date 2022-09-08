import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'accordions/fr-accordion',
};

const AccordionTemplate = ({ slot, titleType, title }) => html`<fr-app>
  <fr-accordion title=${title} title-type=${titleType}> ${unsafeHTML(slot)}</fr-accordion>
</fr-app>`;

export const Default = AccordionTemplate.bind({});
Default.args = {
  slot: `<h4 class="fr-h4">Title</h4><p>content</p>`,
  title:"Title",
  titleType:"h4"
};
