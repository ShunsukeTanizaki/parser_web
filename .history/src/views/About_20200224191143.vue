<template>
  <span>
    <about-top></about-top>
    <about-philosophy></about-philosophy>
  </span>
</template>

<script>
import AboutPhilosopy from '@/components/AboutPhilosopy';

export default {
  name: 'about',
  components: {
    AboutTop,
    AboutPhilosophy
  }
};
</script>