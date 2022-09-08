<template>
  <fr-app>
    <main role="main">
      <ul>
        <router-link to="/home">
          <li>demo</li>
        </router-link>
        <router-link to="/search">
          <li>recherche</li>
        </router-link>
      </ul>
      <router-view></router-view>
    </main>
  </fr-app>
</template>

<script>
export default {};
</script>
