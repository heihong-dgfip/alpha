import { html } from 'lit-html';

export default {
  title: "US1 - Contacter l'équipe",
};

export const Formulaire = () => html`
  <div id="wrapper">
    <main role="main" id="main">
      <div class="fr-container">
        <div class="fr-grid-row">
          <div class="fr-col">
            <h1>Web Components DGFIP</h1>
            <h2>Pourquoi ?</h2>
            <fr-accordion label="Notre objectif"><p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
            </p></fr-accordion>
            <fr-accordion label="Modalités d'applications"><p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
            </p></fr-accordion>
            <h2>Nous contacter</h2>
            <form>
              <fr-input label="Email"></fr-input>
              <fr-input label="Message"></fr-input>
              <fr-btn>Envoyer</fr-btn>
            </form>
          </div>
          <div class="fr-col-offset-md-1"></div>
          <div class="fr-col">
            <h2>Complément d'informations</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Voir les exemples du <fr-link href="http://venezia.appli.dgfip/www/inea/dsfr-exemples/public/" new-window>Design System de l‘État</fr-link></p>
          </div>
        </div>
      </div>
    </main>
  </div>
`;

export const Confirmation = () => html`
  <div id="wrapper">
    <main role="main" id="main">
      <div class="fr-container">
        <div class="fr-grid-row">
          <div class="fr-col">
            <h1>Confirmation</h1>
            <p>Votre message a bien été envoyé.</p>
            <dl>
              <dt>Email:</dt>
              <dd>pierre.martin@dgfip.finances.gouv.fr</dd>
              <dt>Message:</dt>
              <dd>Merci de me tenir au courant de l'avancée du projet.</dd>
            </dl>
          </div>
        </div>
      </div>
    </main>
  </div>
`;
