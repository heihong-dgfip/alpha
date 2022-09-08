import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { ifDefined } from 'lit-html/directives/if-defined';

export default {
  title: 'Hearder/fr-header-service',
  
};

const HeaderTemplate = ({ slotBaseline, slotTitle, href  }) => html`<fr-app>
  <fr-header-service  href=${ifDefined(href)}> ${unsafeHTML(slotTitle)} ${unsafeHTML(slotBaseline)}</fr-header-service>
</fr-app>`;


export const Default = HeaderTemplate.bind({});
Default.args = {
    slotTitle:` <p slot="title">DTNUM / Pôle expérience utilisateur</p>`,
    slotBaseline:` <p>Délégation à la transformation numérique</p>`
}

export const Href = HeaderTemplate.bind({});
Href.args = {
    slotTitle:` <p slot="title">DTNUM / Pôle expérience utilisateur</p>`,
    slotBaseline:` <p>Délégation à la transformation numérique</p>`,
    href:'https://legifrance.gouv.fr'
}
