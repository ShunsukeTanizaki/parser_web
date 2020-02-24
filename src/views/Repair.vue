<template>
  <span>
    <repair-service></repair-service>
    <repair-price-list></repair-price-list>
  </span>
</template>

<script>
import RepairService from '@/components/RepairService';
import RepairPriceList from '@/components/RepairPriceList';

export default {
  name: 'repaire',
  components: {
    RepairService,
    RepairPriceList
  }
};
</script>