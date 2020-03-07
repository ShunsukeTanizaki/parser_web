<template>
  <span>
    <repair-top></repair-top>
    <repair-service></repair-service>
    <repair-price-list></repair-price-list>
  </span>
</template>

<script>
import RepairTop from '@/components/RepairTop';
import RepairService from '@/components/RepairService';
import RepairPriceList from '@/components/RepairPriceList';

export default {
  name: 'repaire',
  components: {
    RepairTop,
    RepairService,
    RepairPriceList
  }
};
</script>