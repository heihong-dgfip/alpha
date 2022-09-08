import { html } from 'lit-html';
import formation from './../assets/formation-ecoconception.png';
import referentiel from './../assets/referentiel-ecoconception.png';
import outils from './../assets/outils.png';
import guide from './../assets/guide-achats-numerique-responsable.png';

export default {
  title: 'Templates/template2',
};
const Template = () =>
  html`<fr-app>
    <fr-header>
      <fr-logo slot="logo"></fr-logo>
      <fr-header-service slot="header-service" title="Accueil - Mission Numérique écoresponsable" href="/">
        <p slot="title">Numérique écoresponsable</p>
        <p>Mission interministérielle pour réduire les impacts environnementaux du numérique</p>
      </fr-header-service>
      <fr-header-tools-links slot="header-tools-links">
        <fr-link href="#">
          Paramètre d'affichage theme
          <fr-icon name="theme-fill" aria-hidden="true"></fr-icon>
        </fr-link>
        <fr-link href="#">
          Contact
          <fr-icon name="mail-line" aria-hidden="true"></fr-icon>
        </fr-link>
      </fr-header-tools-links>
      <fr-navigation aria-label="Menu principal" slot="navigation">
        <a href="#">Accueil</a>
        <a href="#">A propos</a>
        <a href="#">Réglementations</a>
        <a href="#">Actualités</a>
        <a href="#">Publications</a>
        <a href="#">Formations</a>
      </fr-navigation>
    </fr-header>
    <main role="main">
      <fr-container fluid>
        <fr-grid-row gutters>
          <fr-col width="8" offset="2">
            <h1>Réduire l’empreinte environnementale du numérique public</h1>
            <p>
              Depuis 2020, l’État se veut exemplaire en développant un service public écoresponsable, dont les activités numériques : achat durable, réemploi et allongement de
              durée de vie des équipements, écoconception de services numériques publics... Des guides, référentiels, outils, supports de sensibilisation sont publiés dans le cadre
              de cette démarche.
            </p>
            <fr-btn>En savoir plus sur la mission interministérielle </fr-btn>
          </fr-col>
        </fr-grid-row>
        <fr-grid-row gutters>
          <fr-col width="8" offset="2">
            <fr-card horizontal title="Revoir la formation initiation à l’écoconception" title-type="h2">
              <p>
                La mission interministérielle numérique écoresponsable et le pôle Design des services numériques de la Dinum ont proposé une formation initiation à l’écoconception
                d'une durée de 2 heures, le jeudi 16 décembre 2021. Le webinaire est disponible en relecture.
              </p>
              <img alt="" slot="img" src="${formation}" />
            </fr-card>
          </fr-col>
        </fr-grid-row>
        <fr-grid-row gutters>
          <fr-col>
            <fr-card  title="Référentiel général d’écoconception de service numérique" title-type="h2">
              <p>Référentiel général d’écoconception de service numérique</p>
              <img alt="" slot="img" src="${referentiel}" />
            </fr-card>
          </fr-col>
          <fr-col>
            <fr-card title="Boite à outils" title-type="h2">
              <p>Sélection de logiciels libres et open source dédiés aux impacts environnementaux du numérique.</p>
              <img alt="" slot="img" src="${outils}" />
            </fr-card>
          </fr-col>
          <fr-col>
            <fr-card title="Guide pratique pour des achats numériques responsables" title-type="h2">
              <p>Publication du guide en avril 2021 en version bêta suivi d'une consultation publique.</p>
              <img alt="" slot="img" src="${guide}" />
            </fr-card>
          </fr-col>
        </fr-grid-row>
        <fr-grid-row gutters>
          <fr-col>
            <fr-card title="Formations" title-type="h2">
              <p>Sélection de formations, en licence libre et en libre accès dédiées aux impacts environnementaux du numérique.</p>
            </fr-card>
          </fr-col>
          <fr-col>
            <fr-card title="Que dit la loi ?" title-type="h2">
              <p>
                Tout savoir sur la démarche Service public écoresponsable, la feuille de route numérique et environnement ou bien la loi pour réduire l'empreinte environnementale
                du numérique en France.
              </p>
            </fr-card>
          </fr-col>
        </fr-grid-row>
      </fr-container>
    </main>
    <fr-footer>
      <p slot="licence">
        Sauf mention contraire, tous les textes de ce site sont sous
        <fr-link href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" new-window=""> licence etalab-2.0 </fr-link>
      </p>
      <div slot="linkLegalDuties">
        <a href="https://legifrance.gouv.fr">legifrance.gouv.fr</a>
        <a href="https://gouvernement.fr">gouvernement.fr</a>
        <a href="https://service-public.fr">service-public.fr</a>
        <a href="https://data.gouv.fr">data.gouv.fr</a>
      </div>
    </fr-footer>
  </fr-app>`;

export const Template2 = Template.bind({});
