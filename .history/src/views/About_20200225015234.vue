<template>
  <span>
    <about-top></about-top>
    <about-philosophy></about-philosophy>
    <about-contents></about-contents>
  </span>
</template>

<script>
import AboutTop from '@/components/AboutTop';
import AboutPhilosophy from '@/components/AboutPhilosophy';
import AboutContents from '@/components/AboutContents';

export default {
  name: 'about',
  components: {
    AboutTop,
    AboutPhilosophy,
    AboutContents
  }
};
</script>