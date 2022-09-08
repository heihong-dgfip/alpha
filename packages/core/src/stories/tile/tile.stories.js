import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { ifDefined } from 'lit-html/directives/if-defined';

export default {
  title: 'tile/fr-tile',
  decorators: [story => html`<fr-app>${story()}</fr-app>`],
};

const TileTemplate = ({ href, horizontal, enlargeLink, titleType, titre, slotImg, slotDesc }) => html`<fr-tile
  href="${href}"
  titre="${titre}"
  title-type="${titleType}"
  horizontal="${ifDefined(horizontal)}"
  enlarge-link="${ifDefined(enlargeLink)}"
>
  ${unsafeHTML(slotImg)} ${unsafeHTML(slotDesc)}
</fr-tile>`;

export const Default = TileTemplate.bind({});
Default.args = {
  href: '#',
  titre: 'Titre de la tuile',
  titleType: 'h2',
  enlargeLink: true,
  horizontal: true,
  slotImg: '<img slot="img" src="static/media/src/stories/assets/placeholder.1x1.png" />',
  slotDesc: '<p slot="desc">La description de ma tuile avec un titre, une image et un contenu.</p>',
};

export const basic = TileTemplate.bind({});
basic.args = {
  href: '#',
  titre: 'Titre de la tuile',
  titleType: 'h2',
  slotImg: '<img slot="img" src="static/media/src/stories/assets/placeholder.1x1.png" />',
  slotDesc: '<p slot="desc">La description de ma tuile <strong>standard</strong> avec un titre, une image et un contenu.</p>',
};

export const withoutImage = TileTemplate.bind({});
withoutImage.args = {
  href: '#',
  titre: 'Titre de la tuile',
  titleType: 'h2',
  slotDesc: '<p slot="desc">La description de ma tuile standard avec un titre, sans image et un contenu.</p>',
};

export const withoutImageAndDesc = TileTemplate.bind({});
withoutImageAndDesc.args = {
  href: '#',
  titre: 'Titre de la tuile',
  titleType: 'h2',
};
