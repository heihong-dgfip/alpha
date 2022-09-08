import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'Hearder/fr-header',
  
};

const HeaderTemplate = ({slotLogo, slotHeaderService, slotSearch, slotHeaderToolsLinks , slotNavigation }) => html`<fr-app>
    <fr-header>
        ${unsafeHTML(slotLogo)} 
        ${unsafeHTML(slotHeaderService)} 
        ${slotSearch ? unsafeHTML(slotSearch) : null} 
        ${slotHeaderToolsLinks ? unsafeHTML(slotHeaderToolsLinks): null}
        ${slotNavigation ? unsafeHTML(slotNavigation) :null}
    </fr-header-tools-links>
</fr-app>`;


export const Search = HeaderTemplate.bind({});
Search.args = {
    slotLogo:`<fr-logo slot="logo"></fr-logo>`,
    slotSearch:`<fr-search slot="search">
          <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
          <fr-btn icon-only>
            <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
          </fr-btn>
        </fr-search>`,
    slotHeaderService:`
        <fr-header-service slot="header-service">
          <p slot="title">Nom du site / service</p>
          <p>Délégation à la transformation numérique</p>
        </fr-header-service>`
}

export const SearchHeaderToolsLinks = HeaderTemplate.bind({});
SearchHeaderToolsLinks.args = {
    slotLogo:`<fr-logo slot="logo"></fr-logo>`,
    slotSearch:`<fr-search slot="search">
          <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
          <fr-btn icon-only>
            <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
          </fr-btn>
        </fr-search>`,
    slotHeaderService:`
        <fr-header-service slot="header-service">
          <p slot="title">Nom du site / service</p>
          <p>Délégation à la transformation numérique</p>
        </fr-header-service>`,
    slotHeaderToolsLinks:`<fr-header-tools-links slot="header-tools-links">
          <fr-link href="#">
            Créer un espace
            <fr-icon name="add-circle-line"></fr-icon>
          </fr-link>
          <fr-link href="#">
            Se connecter
            <fr-icon name="lock-line"></fr-icon>
          </fr-link>
          <fr-link href="#">
            S’enregistrer
            <fr-icon name="account-line"></fr-icon>
          </fr-link>
        </fr-header-tools-links>`
}


export const SearchHeaderToolsLinksNavigation = HeaderTemplate.bind({});
SearchHeaderToolsLinksNavigation.args = {
    slotLogo:`<fr-logo slot="logo"></fr-logo>`,
    slotSearch:`<fr-search slot="search">
          <fr-input type="search" label="Rechercher" placeholder="Rechercher"></fr-input>
          <fr-btn icon-only>
            <fr-icon name="search-line" slot="left" aria-hidden="true"></fr-icon>
          </fr-btn>
        </fr-search>`,
    slotHeaderService:`
        <fr-header-service slot="header-service">
          <p slot="title">Nom du site / service</p>
          <p>Délégation à la transformation numérique</p>
        </fr-header-service>`,
    slotHeaderToolsLinks:`<fr-header-tools-links slot="header-tools-links">
          <fr-link href="#">
            Créer un espace
            <fr-icon name="add-circle-line"></fr-icon>
          </fr-link>
          <fr-link href="#">
            Se connecter
            <fr-icon name="lock-line"></fr-icon>
          </fr-link>
          <fr-link href="#">
            S’enregistrer
            <fr-icon name="account-line"></fr-icon>
          </fr-link>
        </fr-header-tools-links>`,
    slotNavigation:`<fr-navigation aria-label="Menu principal" slot="navigation">
          <a href="#">accès direct</a>
          <a href="#">accès direct</a>
        </fr-navigation>`
}