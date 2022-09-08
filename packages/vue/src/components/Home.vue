<template>
  <fr-container>
    <p>Fil d’Ariane:</p>
    <fr-breadcrumb>
      <fr-breadcrumb-link aria-current="page">demo</fr-breadcrumb-link>
    </fr-breadcrumb>
    <div class="fr-grid-row">
      <div class="fr-col">
        <h2>Pourquoi ?</h2>
        <fr-accordion>
          <h3 slot="title">Notre objectif</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras
            elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
            pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante
            non diam sodales hendrerit.
          </p>
        </fr-accordion>
        <fr-accordion>
          <h3 slot="title">Modalités d'applications</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras
            elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero
            pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante
            non diam sodales hendrerit.
          </p>
        </fr-accordion>
        <h2>Nous contacter</h2>
        <form v-on:submit.prevent="onSubmit()">
          <fr-input name="email" :value="email" @input="email = $event.target.value" label="Email" required>
            <p v-if="!isEmailDefined" slot="error">champs obligatoire</p>
            <p v-if="isEmailDefined" slot="valid">champs valid</p>
          </fr-input>
          <fr-input name="message" :value="message" @input="message = $event.target.value" label="Message" required>
            <p v-if="!isMessageDefined" slot="error">champs obligatoire</p>
            <p v-if="!isLengthMin" slot="error">le champs doit avoir minimum 3 caractères</p>
            <p v-if="isMessageDefined" slot="valid">champs obligatoire</p>
            <p v-if="isLengthMin" slot="valid">le champs doit avoir minimum 3 caractères</p>
          </fr-input>

          <fr-btn :disabled="!isMessageDefined || !isEmailDefined" type="submit">Envoyer</fr-btn>
        </form>
      </div>
      <div class="fr-col-offset-md-1"></div>
      <div class="fr-col">
        <h2>Complément d'informations</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Voir les exemples du
          <fr-link href="http://venezia.appli.dgfip/www/inea/dsfr-exemples/public/" new-window>Design System de l‘État</fr-link>
        </p>
      </div>
    </div>
  </fr-container>
</template>

<script>
import store from '../store/store';
import * as type from '../store/mutationTypes';

export default {
  data() {
    return {
      email: '',
      message: '',
    };
  },
  computed: {
    isEmailDefined() {
      return !!this.email;
    },
    isLengthMin() {
      return this.message?.length > 3;
    },
    isMessageDefined() {
      return !!this.message;
    },
  },
  methods: {
    onSubmit() {
      const data = {
        emailText: this.email,
        messageText: this.message,
      };
      store.dispatch({
        type: type.setState,
        data: data,
      });

      this.$router.push({
        path: `/message`,
      });
    },
  },
};
</script>
