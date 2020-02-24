<template>
  <span>
    <home-hero></home-hero>
    <home-details></home-details>
    <home-contents></home-contents>
  </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomeContents from '@/components/HomeContents';

export default {
  name: 'home',
  components: {
    HomeHero,
    HomeDetails,
    HomeContents
  }
};
</script>