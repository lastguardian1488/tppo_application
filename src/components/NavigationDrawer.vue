<template>
    <v-navigation-drawer app>
      <v-list dense>
        <v-subheader>МЕНЮ</v-subheader>
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            to="/"
          >
            <v-list-item-icon>
              <v-icon>mdi-view-carousel</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Работы</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            to="/feedback"
          >
            <v-list-item-icon>
              <v-icon>mdi-list-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Оставить заявку</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            to="/about">
            <v-list-item-icon>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>О нас</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name:'NavigationDrawer'
}
</script>

<style>

</style>