<template>
  <span>
    <order-top></order-top>
    <order-price></order-price>
  </span>
</template>

<script>
import OrderTop from '@/components/OrderTop';
import OrderPrice from '@/components/OrderPrice';

export default {
  name: 'order',
  components: {
    OrderTop,
    OrderPrice
  }
};
</script>