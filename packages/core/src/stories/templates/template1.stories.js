import { html } from 'lit-html';
import defaut from './../assets/placeholder.1x1.png';

export default {
  title: 'Templates/template1',
};
const Template = () =>
  html`<fr-app>
    <fr-header>
      <fr-logo slot="logo" size="sm"></fr-logo>
      <fr-header-service slot="header-service" title="code.gouv.fr - Codes sources du secteur public - French Public Sector Sources Codes" href="/">
        <p slot="title">Codes sources du secteur public</p>
        <p>Ce site permet d'explorer les codes sources publiés par des organismes publics.</p>
      </fr-header-service>
      <fr-navigation aria-label="Menu principal" slot="navigation">
        <a href="#" active>Accueil</a>
        <a href="#">Organisations ou groupes</a>
        <a href="#">Dépôts</a>
        <a href="#">Dépendances</a>
        <a href="#">Chiffres</a>
        <a href="#">À propos</a>
      </fr-navigation>
    </fr-header>

    <main role="main">
      <fr-container fluid>
        <fr-grid-row gutters>
          <fr-col width="12" class="fr-mt-2w"></fr-col>
        </fr-grid-row>
        <fr-grid-row gutters>
          <fr-col width="6">
            <fr-card horizontal enlarge-link href="#" title="Dépôts" title-type="h2">
              <p>Parcourez la liste des dépôts de code source publiés par des organismes publics pour les réutiliser ou y contribuer.</p>
              <img slot="img" src="${defaut}" responsive />
            </fr-card>
          </fr-col>
          <fr-col width="6">
            <fr-card horizontal enlarge-link href="#" title="Dépendances" title-type="h2">
              <p>Quelles sont les bibliothèques de code les plus utilisées ?</p>
              <img slot="img" src="${defaut}" />
            </fr-card>
          </fr-col>
        </fr-grid-row>
        <fr-grid-row gutters>
          <fr-col width="6">
            <fr-card horizontal enlarge-link href="#" title="Chriffres" title-type="h2">
              <p>Quels sont les langages de programmation et les licences les plus utilisés ?</p>
            </fr-card>
          </fr-col>
          <fr-col width="6">
            <fr-card horizontal enlarge-link href="#" title="À propos" title-type="h2">
              <p>Pourquoi ce site ? Comment est-il fabriqué ? Où télécharger les données ? Comment contribuer ?</p>
            </fr-card>
          </fr-col>
        </fr-grid-row>
        <fr-grid-row gutters>
          <fr-col width="12" class="fr-mt-2w"></fr-col>
        </fr-grid-row>
      </fr-container>
    </main>
    <fr-container fluid>
      <fr-grid-row>
        <fr-col width-md="4">
          <h5>Contact</h5>
          <p>
            Vous pouvez nous contacter en utilisant l'adresse électronique&nbsp;:<br />
            <fr-link href="#">logiciels-libres@data.gouv.fr</fr-link>
          </p>
        </fr-col>
        <fr-col width-md="5">
          <h5>Gazette BlueHats 🧢</h5>
          <p>Votre lettre d'information sur les logiciels libres par et pour les administrations.</p>
          <fr-form>
            <form action="https://infolettres.etalab.gouv.fr/subscribe/bluehats@mail.etalab.studio" target="_blank" method="get">
              <fr-btn type="submit" button-title="Abonnez-vous" aria-label="Abonnez-vous">Abonnez-vous</fr-btn>
            </form>
          </fr-form>
        </fr-col>
        <fr-col width-md="3">
          <h5>Retrouvez-nous</h5>
          <fr-tags>
            <fr-tag href="#">SourceHut</fr-tag>
            <fr-tag href="#">Twitter</fr-tag>
          </fr-tags>
        </fr-col>
      </fr-grid-row>
    </fr-container>
    <fr-container fluid>
      <fr-grid-row gutters>
        <fr-col width="6">
          <fr-logo size="lg"></fr-logo>
        </fr-col>
        <fr-col width="6">
          <p>Ce site est géré par <fr-link href="#">le pôle logiciels libres d'Etalab.</fr-link></p>
          <fr-link href="#" raw size="sm">data.gouv.fr</fr-link>
          <fr-link href="#" raw size="sm">etalab.gouv.fr</fr-link>
          <fr-link href="#" raw size="sm">numerique.gouv.fr</fr-link>
          <fr-link href="#" raw size="sm">gouvernement.fr</fr-link>
        </fr-col>
      </fr-grid-row>
    </fr-container>
    <fr-footer>
      <div slot="linkLegalDuties">
        <a href="#">Switch to english</a>
        <a href="#">Accessibilité : partiellement conforme</a>
        <a href="#">Mentions légales</a>
        <a href="#">Données personnelles et cookies</a>
        <a href="#">Pages du site</a>
        <a href="#">Flux RSS</a>
        <a href="#">Paramètres d'affichage</a>
      </div>
    </fr-footer>
  </fr-app>`;

export const Template1 = Template.bind({});
