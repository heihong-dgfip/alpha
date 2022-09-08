import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'breadcrumb/fr-breadcrumb',
};

const BreadcrumbTemplate = ({ slot, ariaLabel, linksBreadcrumb }) =>
  html`<fr-app>
    <fr-breadcrumb .linksBreadcrumb=${linksBreadcrumb} aria-label=${ariaLabel}>${slot ? unsafeHTML(slot) : null}</fr-breadcrumb>
  </fr-app>`;

export const Default = BreadcrumbTemplate.bind({});
Default.args = {
  linksBreadcrumb: [
    {
      textContent: 'Segment 1',
      href: '/Segment 1/',
    },
    {
      textContent: 'Segment 2',
      href: '/segment-1/segment-2/segment-3/',
    },
    {
      textContent: 'Segment 3',
      href: 'https://service-public.fr',
    },
    {
      textContent: 'Page Actuelle',
    },
  ],
  ariaLabel: 'vous êtes ici :',
};


export const NativeBreadcrumb = BreadcrumbTemplate.bind({});
NativeBreadcrumb.args = {
  ariaLabel: 'vous êtes ici :',
  slot:`
    <a href="/segment-1/">Segment 1</a>
    <a href="/segment-1/segment-2/">Segment 2</a>
    <a href="/segment-1/segment-2/segment-3/">Segment 3</a>
    <a aria-current="page">Page Actuelle</a>`

};
