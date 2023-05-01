<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
        <p>
          ФОТОСТУДИЯ ПАПЫ КАРЛО
        </p>

        <v-spacer></v-spacer>

        <main-menu/>
    </v-app-bar>

    <navigation-drawer/>
    
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
import NavigationDrawer from './components/NavigationDrawer.vue';

export default {
  components: { NavigationDrawer, MainMenu },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
