import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'sidemenu/fr-sidemenu',
  decorators: [(story) => html`<fr-app>${story()}</fr-app>`],
};

const SideMenuTemplate = ({ dataType, title, slot }) =>
  html `<fr-sidemenu title=${ifDefined(title)} data-type=${ifDefined(dataType)}> ${unsafeHTML(slot)} </fr-sidemenu>`;

export const InitByXml = SideMenuTemplate.bind({});
InitByXml.args = {
  title: "Rubrique",
  slot: `<a href="">Accès direct 1.1</a>
          <div name="Niveau 1.2">
            <a href="">Accès direct 2.1</a>
            <a href="">Accès direct 2.2</a>
            <div name="Niveau 2.3">
              <a href="">Accès direct 3.1</a>
              <a href="">Accès direct 3.2</a>
              <a href="">Accès direct 3.3</a>
            </div>
          </div>
          <a href="">Accès direct 1.3</a>
          <div name="Niveau 1.4">
            <a href="">Accès direct 2.1</a>
            <a href="">Accès direct 2.2</a>
          </div>
          <a href="">Accès direct 1.5</a>`
};

export const InitByJson = SideMenuTemplate.bind({});
const obj = [{label:'Entrée directe 1.10', url:'url/1'}, {label:'Entrée 1.20', url:'', subEntries: [{label:'Entrée directe 2.10', url:'url/3'}, {label:'Entrée directe 2.20', url:'url/3'}, {label:'Entrée 2.30', url:'url/3', subEntries: [{label:'Entrée directe 3.10', url:'url/1'}]}]}, {label:'Entrée directe 1.30', url:'url/3'}];
const json = JSON.stringify(obj);
InitByJson.args = {
  title: "Rubrique",
  dataType: "json",
  slot: json
};
