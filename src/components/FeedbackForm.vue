<template>
  <v-container>
      <v-card>
          <v-card-title>
            <span class="text-h5">Оставить заявку</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="ФИО полностью*"
                    v-model="client.fio"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="Номер телефона*"
                    v-model="client.phone"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*Обязательные поля</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              v-on:click.prevent="addRequest"

            >
              Отправить
            </v-btn>
          </v-card-actions>
        </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'FeedbackForm',
  props: {
    fio: String,
    phone: String
  },
  data () {
    return {
      client: {
          fio: this.fio,
          body: this.phone,
      }
    }
  },
  methods: {
    addRequest() {
        this.$store.dispatch('addRequest', this.client)
    }
  }    
}
</script>

<style>

</style>