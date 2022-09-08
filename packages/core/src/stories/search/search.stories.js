import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
export default {
  title: 'search/fr-search',
};
const SearchTemplate = ({ label, placeHolder, value, lg }) =>
  html`<fr-app>
    <fr-search lg=${ifDefined(lg)}>
      <fr-input label=${label} placeholder=${placeHolder} value=${ifDefined(value)} type="search"> </fr-input>
      <fr-btn icon-only>
        <fr-icon name="search-line" slot="left"></fr-icon>
      </fr-btn>
    </fr-search>
  </fr-app>`;

export const Default = SearchTemplate.bind({});
Default.args = {
  label: 'Rechercher',
  placeHolder: 'Rechercher',
};
const LargeTemplate = ({ label, placeHolder, value, slotText }) =>
  html`<fr-app>
    <fr-search lg>
      <fr-input label=${label} placeholder=${placeHolder} value=${ifDefined(value)} type="search"></fr-input>
      <fr-btn>
        <fr-icon name="search-line" slot="left"></fr-icon>
        ${unsafeHTML(slotText)}
      </fr-btn>
    </fr-search>
  </fr-app>`;

export const Large = LargeTemplate.bind({});
Large.args = {
  label: 'Rechercher',
  placeHolder: 'Rechercher',
  slotText: '<span slot="text">Recherche</span>',
};

export const InitialValue = SearchTemplate.bind({});
InitialValue.args = {
  label: 'Rechercher',
  value: 'valeur initiale',
  placeHolder: 'Rechercher',
};
