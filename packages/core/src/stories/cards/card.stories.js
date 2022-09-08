import { html } from 'lit-html';
import fondamentaux from './../assets/fondamentaux.svg';
export default {
  title: 'cards/fr-card',
};

const CardTemplateDefaut = ({ href, title, titleType }) => html`<fr-app>
  <fr-card href=${href} title="${title}" title-type=${titleType}>
    <p slot="detail">Détail</p>
    <p>Couleurs, grilles et icônes, les basiques pour construire votre site ou votre application.</p>
    <img src="${fondamentaux}" alt="fondamentaux" slot="img" />
  </fr-card>
</fr-app>`;

export const Default = CardTemplateDefaut.bind({});
Default.args = {
  href: '#',
  title: 'Fondamentaux',
  titleType: 'h4',
};
const CardTemplateNoArrow = ({ noArrow, href, title, titleType }) => html`<fr-app>
  <fr-card no-arrow=${noArrow} href=${href} title=${title} title-type=${titleType}>
    <p slot="detail">Détail</p>
    <p>Couleurs, grilles et icônes, les basiques pour construire votre site ou votre application.</p>
    <img src="${fondamentaux}" alt="fondamentaux" slot="img" />
  </fr-card>
</fr-app>`;

export const NoArrow = CardTemplateNoArrow.bind({});
NoArrow.args = {
  noArrow: true,
  href: '#',
  title: 'Fondamentaux',
  titleType: 'h4',
};

const CardTemplateHorizontal = ({ horizontal, href, title, titleType }) => html`<fr-app>
  <fr-card horizontal=${horizontal} href=${href} title=${title} title-type=${titleType}>
    <p slot="detail">Détail</p>
    <p>Couleurs, grilles et icônes, les basiques pour construire votre site ou votre application.</p>
    <img src="${fondamentaux}" alt="fondamentaux" slot="img" />
  </fr-card>
</fr-app>`;

export const Horizontal = CardTemplateHorizontal.bind({});
Horizontal.args = {
  horizontal: true,
  href: '#',
  title: 'Fondamentaux',
  titleType: 'h4',
};

const NoImgTemplate = ({ horizontal, href, title, titleType }) => html`<fr-app>
  <fr-card horizontal=${horizontal} href=${href} title=${title} title-type=${titleType}>
    <p slot="detail">Détail</p>
    <p>Couleurs, grilles et icônes, les basiques pour construire votre site ou votre application.</p>
  </fr-card>
</fr-app>`;

export const NoImg = NoImgTemplate.bind({});
NoImg.args = {
  horizontal: true,
  href: '#',
  title: 'Fondamentaux',
  titleType: 'h4',
};

const CardTemplateClickAll = ({ horizontal, enlargeLink, href, title, titleType }) => html`<fr-app>
  <fr-card horizontal=${horizontal} enlarge-link=${enlargeLink} href=${href} title=${title} title-type=${titleType}>
    <p slot="detail">Détail</p>
    <p>Couleurs, grilles et icônes, les basiques pour construire votre site ou votre application.</p>
    <img src="${fondamentaux}" alt="fondamentaux" slot="img" />
  </fr-card>
</fr-app>`;

export const ClickAll = CardTemplateClickAll.bind({});
ClickAll.args = {
  horizontal: true,
  enlargeLink: true,
  href: '#',
  title: 'Fondamentaux',
  titleType: 'h4',
};
