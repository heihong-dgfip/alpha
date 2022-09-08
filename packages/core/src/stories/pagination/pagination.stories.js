import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

export default {
  title: 'pagination/fr-pagination',
  decorators: [(story) => html`<fr-app>${story()}</fr-app>`],
};

const PaginationTemplate = ({ pagesNumber, urlPattern, ariaLabel }) =>
  html`<fr-pagination pages-total=${ifDefined(pagesNumber)} url-pattern=${ifDefined(urlPattern)} ?aria-label=${ariaLabel}></fr-pagination>`;

export const Default = PaginationTemplate.bind({});
Default.args = {
  pagesNumber: "10",
  urlPattern: "#/",
  ariaLabel: 'paginateur',
};
