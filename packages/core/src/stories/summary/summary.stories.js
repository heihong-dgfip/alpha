import { html } from 'lit-html';

export default {
  title: 'summary/fr-summary',
};

const SummaryTemplate = ({ links, ariaLabelledby }) => html`<fr-app>
  <fr-summary .links=${links} aria-labelledby=${ariaLabelledby}></fr-summary>
</fr-app>`;

export const Default = SummaryTemplate.bind({});
Default.args = {
  links: [
    {
      href: '#titre-ancre-1',
      textlink: 'Titre de l’ancre 1',
    },
    {
      href: '#titre-ancre-2',
      textlink: 'Titre de l’ancre 2',
    },
    {
      href: '#titre-ancre-3',
      textlink: 'Titre de l’ancre 3',
    },
    {
      href: '#titre-ancre-4',
      textlink: 'Titre de l’ancre 4',
    },
    {
      href: '#titre-ancre-5',
      textlink: 'Titre de l’ancre 5',
    },
  ],
  ariaLabelledby: 'fr-summary-title',
};
