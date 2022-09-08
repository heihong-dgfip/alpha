import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

export default {
  title: 'highlights/fr-highlight',
  decorators: [(story) => html`<fr-app>${story()}</fr-app>`],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: { small: 'sm', medium: null || undefined || '', large: 'lg' },
      }
    }
  }
};

const HighlightTemplate = ({ size, slot }) =>
  html`<fr-highlight size=${ifDefined(size)}>${slot}</fr-highlight>`;

export const Default = HighlightTemplate.bind({});
Default.args = {
  size: undefined,
  slot: 'Les parents d’enfants de 11 à 14 ans n’ont aucune démarche à accomplir : les CAF versent automatiquement l’ARS aux familles déjà allocataires qui remplissent les conditions.'
};

export const Small = HighlightTemplate.bind({});
Small.args = {
  size: 'sm',
  slot: 'Les parents d’enfants de 11 à 14 ans n’ont aucune démarche à accomplir : les CAF versent automatiquement l’ARS aux familles déjà allocataires qui remplissent les conditions.'
};

export const Large = HighlightTemplate.bind({});
Large.args = {
  size: 'lg',
  slot: 'Les parents d’enfants de 11 à 14 ans n’ont aucune démarche à accomplir : les CAF versent automatiquement l’ARS aux familles déjà allocataires qui remplissent les conditions.'
};
