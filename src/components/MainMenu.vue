<template>
  <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
            >
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item
                to="/"
            >
                <v-list-item-title>Работы</v-list-item-title>
            </v-list-item>
            <v-list-item
                to="/feedback"
            >
                <v-list-item-title>Оставить заявку</v-list-item-title>
            </v-list-item>
            <v-list-item
                to="/about"
            >
                <v-list-item-title>О нас</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
export default {

}
</script>

<style>

</style>