<template>
  <v-container class="my-5">
    <v-carousel
        hide-delimiters
        prev-icon="mdi-arrow-left"
        next-icon="mdi-arrow-right"
    >
        <v-carousel-item
            v-for="photo in 10" 
            :key="photo.id"
        >
            <v-card>
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
            </v-card>
        </v-carousel-item>
    </v-carousel>
  </v-container>    
</template>

<script>
export default {
    name: 'WorksCarousel'
}
</script>

<style>

</style>