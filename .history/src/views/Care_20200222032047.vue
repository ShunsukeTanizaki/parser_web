<template>
  <span>
    <care-guide-top></care-guide-top>
    <care-guide-message></care-guide-message>
    <how-to-care></how-to-care>
    <!-- <repair-service></repair-service> -->
    <!-- <repair-price-list></repair-price-list> -->
  </span>
</template>

<script>
import CareGuideTop from '@/components/CareGuideTop';
import CareGuideMessage from '@/components/CareGuideMessage';
import HowToCare from '@/components/HowToCare';
// import RepairService from '@/components/RepairService';
// import RepairPriceList from '@/components/RepairPriceList';

export default {
  name: 'care',
  components: {
    CareGuideTop,
    CareGuideMessage,
    HowToCare,
    // RepairService,
    // RepairPriceList
  }
};
</script>