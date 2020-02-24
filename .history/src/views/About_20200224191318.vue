<template>
  <span>
    <about-top></about-top>
    <about-philosophy></about-philosophy>
  </span>
</template>

<script>
import AboutTop from '@/components/Top';
import AboutPhilosophy from '@/components/Philosophy';

export default {
  name: 'about',
  components: {
    AboutTop,
    AboutPhilosophy
  }
};
</script>