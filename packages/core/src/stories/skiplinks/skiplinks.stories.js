import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'skiplinks/fr-skiplinks',
};
const SkiplinksTemplate = ({ slot, ariaLabel, links }) =>
  html`<fr-app>
    <fr-skiplinks aria-label=${ariaLabel} .links=${links}> ${slot ? unsafeHTML(slot) : null}</fr-skiplinks>
  </fr-app>`;

export const Default = SkiplinksTemplate.bind({});
Default.args = {
  links: [
    {
      textContent: 'Contenu',
      href: '#content',
    },
    {
      textContent: 'Menu',
      href: '#header-navigation',
    },
    {
      textContent: 'Recherche',
      href: '#header-search',
    },
    {
      textContent: 'footer',
      href:'Pied de page'
    },
  ],
  ariaLabel: 'Accès rapide:',
};

export const NativeSkiplinks = SkiplinksTemplate.bind({});
NativeSkiplinks.args = {
  slot: `
        <a href="#content">Contenu</a>
        <a href="#header-navigation">Menu</a>
        <a href="#header-search">Recherche</a>
        <a href="#footer">Pied de page</a> `,
  ariaLabel: 'Accès rapide',
};
