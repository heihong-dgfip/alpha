import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'Hearder/fr-header-tools-links',
  
};

const HeaderTemplate = ({slot }) => html`<fr-app>
  <fr-header-tools-links>${unsafeHTML(slot)}</fr-header-tools-links>
</fr-app>`;


export const Default = HeaderTemplate.bind({});
Default.args = {
    slot:`<fr-link href="#">
          Créer un espace
          <fr-icon slot="left" name="add-circle-line"></fr-icon>
        </fr-link>
        <fr-link href="#">
         Se connecter
          <fr-icon slot="left" name="lock-line"></fr-icon>
        </fr-link>
        <fr-link href="#">
         S’enregistrer
           <fr-icon slot="left" name="account-line"></fr-icon>
        </fr-link>`
}