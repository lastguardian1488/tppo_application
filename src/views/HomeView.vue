<template>
  <v-container>
    <works-carousel/>
    <v-row class = "my-5">
      <v-col
          cols="4"
      >
          <v-icon x-large>mdi-credit-card-multiple-outline</v-icon>
          <span> Наличная и безналичная оплата</span>
      </v-col>
      <v-col
          cols="4"
      >
          <v-icon x-large>mdi-star-circle-outline</v-icon>
          <span> Гарантия качества услуг</span>
      </v-col>
      <v-col
          cols="4"
      >
          <v-icon x-large>mdi-hours-24</v-icon>
          <span> Оформление заказов в любое время</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WorksCarousel from '@/components/WorksCarousel.vue'

  export default {
    name: 'HomeView',

    components: {
      WorksCarousel,
    },
  }
</script>
