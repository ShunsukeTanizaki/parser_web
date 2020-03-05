<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import AppFooter from '@/components/AppFooter';

export default {
  name: 'App',
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>

<style>
.v-application--wrap {
min-height: 0px;
}
h2, em {
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
