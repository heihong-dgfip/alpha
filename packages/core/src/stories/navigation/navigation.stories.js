import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'navigation/fr-navigation',
};

const NavigationTemplate = ({ slot, ariaLabel, links }) =>
  html`<fr-app>
    <fr-navigation aria-label=${ariaLabel} .links=${links}>${slot ? unsafeHTML(slot) : null}</fr-navigation>
  </fr-app>`;

export const Default = NavigationTemplate.bind({});
Default.args = {
  links: [
    {
      textContent: 'accès direct',
      href: 'https://legifrance.gouv.fr',
    },
    {
      textContent: 'accès direct',
      href: 'https://gouvernement.fr',
    },
  ],
};
export const NativeNavigation = NavigationTemplate.bind({});
NativeNavigation.args = {
  slot: `  <a href="#"> accès direct </a>
  <a href="#"> accès direct </a>`,
  ariaLabel: 'Menu principal',
};
