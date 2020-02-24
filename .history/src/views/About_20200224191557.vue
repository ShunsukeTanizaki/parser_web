<template>
  <span>
    <about-top></about-top>
    <about-philosophy></about-philosophy>
  </span>
</template>

<script>
import AboutTop from '@/components/AboutTop';
import AboutPhilosophy from '@/components/AboutPhilosophy';

export default {
  name: 'about',
  components: {
    AboutTop,
    AboutPhilosophy
  }
};
</script>