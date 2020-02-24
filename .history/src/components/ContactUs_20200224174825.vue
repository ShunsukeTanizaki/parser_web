<template>
  <v-container fluid class="about_top">
    <v-content>
      <v-simple-table height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left headline">修理価格表</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in service" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: "ContactUs"
};
</script>

<style scoped>
.about_top {
  width:300px;
}
</style>