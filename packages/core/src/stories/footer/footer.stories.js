import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { ifDefined } from 'lit-html/directives/if-defined';

export default {
  title: 'footer/fr-footer',
};

const FooterTemplate = ({ slotlicence, linkLegalDuties, slotLinkLegalDuties }) =>
  html`<fr-app>
    <fr-footer .linkLegalDuties=${linkLegalDuties}> ${unsafeHTML(slotlicence)} ${slotLinkLegalDuties ? unsafeHTML(slotLinkLegalDuties) : null}</fr-footer>
  </fr-app>`;

export const Default = FooterTemplate.bind({});
Default.args = {
  linkLegalDuties: [
    {
      textContent: 'legifrance.gouv.fr',
      href: 'https://legifrance.gouv.fr',
    },
    {
      textContent: 'gouvernement.fr',
      href: 'https://gouvernement.fr',
    },
    {
      textContent: 'service-public.fr',
      href: 'https://service-public.fr',
    },
    {
      textContent: 'data.gouv.fr',
      href: 'https://data.gouv.fr',
    },
  ],
  slotlicence: `<p slot="licence">
        Sauf mention contraire, tous les textes de ce site sont sous
        <fr-link href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"  new-window>licence etalab-2.0</fr-link>
      </p>`,
};

export const NativeFooter = FooterTemplate.bind({});
NativeFooter.args = {
  slotLinkLegalDuties: `<div slot="linkLegalDuties">
        <a href="https://legifrance.gouv.fr">legifrance.gouv.fr</a>
        <a href="https://gouvernement.fr">gouvernement.fr</a>
        <a href="https://service-public.fr">service-public.fr</a>
        <a href="https://data.gouv.fr">data.gouv.fr</a>
      </div>`,
  slotlicence: `<p slot="licence">
        Sauf mention contraire, tous les textes de ce site sont sous
        <fr-link href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" new-window>licence etalab-2.0</fr-link>
      </p>`,
};
