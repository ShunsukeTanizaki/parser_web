<template>
  <span>
    <care-guide-top></care-guide-top>
    <care-guide-message></care-guide-message>
    <how-to-care></how-to-care>
  </span>
</template>

<script>
import CareGuideTop from '@/components/CareGuideTop';
import CareGuideMessage from '@/components/CareGuideMessage';
import HowToCare from '@/components/HowToCare';

export default {
  name: 'care',
  components: {
    CareGuideTop,
    CareGuideMessage,
    HowToCare
  }
};
</script>