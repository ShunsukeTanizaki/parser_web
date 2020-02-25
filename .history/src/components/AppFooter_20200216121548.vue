<template>
  <v-footer
    height="auto"
    color="blue-grey darken-4"
    white--text
    dark
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        class="hidden-sm-and-down overline"
        v-for="link in links"
        :key="link"
        text
        
      >
        {{ link }}
      </v-btn>
      <v-flex
        text-center
        overline
        py-3
        xs12
      >
        &copy;{{ copyRightYear }}<strong>{{ appTitle }}</strong>
      </v-flex>
    </v-layout>
  </v-footer>
<!-- 
<template>
  <v-footer
    padless
  >
    <v-col
      class="text-center"
      cols="12"
    >
      <div class="copyrught grey--text text--darken-2 ">
        &copy;{{ copyRightYear }}<strong>{{ appTitle }}</strong>
      </div>
    </v-col>
  </v-footer> -->
</template>

<script>
export default {
  data: () => ({
    appTitle: 'PARSER',
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us'
    ]
  }),
  computed: {
    copyRightYear () {
      const copyRightYear = new Date().getFullYear()
      return copyRightYear
    }
  }
}
</script>

<style scoped>
.v-btn {
  width: 140px;
}
</style>