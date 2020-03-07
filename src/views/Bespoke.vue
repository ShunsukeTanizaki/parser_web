<template>
  <span>
    <bespoke-top></bespoke-top>
    <bespoke-message></bespoke-message>
    <bespoke-contents></bespoke-contents>
    <bespoke-price></bespoke-price>
  </span>
</template>

<script>
import BespokeTop from '@/components/BespokeTop';
import BespokeMessage from '@/components/BespokeMessage';
import BespokeContents from '@/components/BespokeContents';
import BespokePrice from '@/components/BespokePrice';

export default {
  name: 'bespoke',
  components: {
    BespokeTop,
    BespokeMessage,
    BespokeContents,
    BespokePrice
  }
};
</script>