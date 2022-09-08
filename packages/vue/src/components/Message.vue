<template>
  <div class="fr-container">
    <div class="fr-grid-row">
      <div class="fr-col">
        <h1>Confirmation</h1>
        <p>Votre message a bien été envoyé.</p>
        <dl>
          <dt>Email:</dt>
          <dd>{{ email }}</dd>
          <dt>Message:</dt>
          <dd>{{ message }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: mapState({
    email: state => state.emailText,
    message: state => state.messageText,
  }),
};
</script>
