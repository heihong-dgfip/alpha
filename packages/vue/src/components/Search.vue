<template>
  <div class="fr-container">
    <p>Fil d’Ariane:</p>
    <fr-breadcrumb>
      <fr-breadcrumb-link href="#/home">demo</fr-breadcrumb-link>
      <fr-breadcrumb-link aria-current="page">recherche</fr-breadcrumb-link>
    </fr-breadcrumb>
    <fr-container>
      <fr-grid-row>
        <fr-col width="12">
          <form class="container-search" v-on:submit.prevent="onSearch()">
            <fr-search>
              <fr-input label="Recherche un nom" place-holder="Entrer un nom de minimum 3 caractères" :value="name" @input="name = $event.target.value" type="search">
                <fr-error-text v-if="!isUndefined && !isLengthMin">le champs doit avoir minimum 3 caractères</fr-error-text>
              </fr-input>

              <fr-btn icon-only type="submit" :disabled="!isLengthMin">
                <fr-fi name="search-line" slot="left"></fr-fi>
              </fr-btn>
            </fr-search>
          </form>
        </fr-col>
        <fr-col>
          <h1>Liste de nom</h1>
          <ul v-for="item in characters" :key="item.id">
            <li>{{ item.lastname }}</li>
          </ul>

          <div v-if="result.length !== 0">
            <h1>Resultat de la recherche</h1>
            <ul v-for="item in result" :key="item.id">
              <li>{{ item.lastname }} {{ item.firstname }}</li>
            </ul>
          </div>
          <div v-if="result.length === 0 && startSearch">
            <h1>Resultat de la recherche</h1>
            <p class="card">Aucun résultat</p>
          </div>
        </fr-col>
      </fr-grid-row>
    </fr-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [
        { id: 1, lastname: 'Doe', firstname: 'Jane' },
        { id: 2, lastname: 'Doe', firstname: 'John' },
        { id: 3, lastname: 'Connor', firstname: 'Sarah' },
        { id: 4, lastname: 'Connor', firstname: 'John' },
      ],
      name: '',
      result: [],
      startSearch: false,
    };
  },
  computed: {
    isLengthMin() {
      return this.name?.length >= 3;
    },
    isUndefined() {
      return this.name === '';
    },
  },
  methods: {
    onSearch() {
      this.startSearch = true;
      let array = this.characters.filter(el => this.name === el.lastname);
      this.result = array.length !== 0 ? array : [];
    },
  },
};
</script>
