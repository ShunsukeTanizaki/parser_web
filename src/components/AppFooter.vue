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
        class="hidden-sm-and-down"
        v-for="support in supports"
        :key="support.name"
        :to="support.link"
        text
        tile
      >
        {{ support.name }}
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

</template>

<script>
export default {
  data: () => ({
    appTitle: 'PARSER',
    supports: [
      {
        name: 'Home',
        link:'/'
      },
      {
        name: 'About',
        link:'/about'
      },
      {
        name: 'Order',
        link:'/order'
      },
      {
        name: 'Collection',
        link:'/collection'
      },
      {
        name: 'Care',
        link:'/care'
      },
      {
        name: 'Contact',
        link:'/contact'
      },
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