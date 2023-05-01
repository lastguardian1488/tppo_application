import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
    addRequest(state, client) {
      fetch('http://localhost:3000/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: client
        })
      })
    }
  },
  actions: {
    addRequest(context, client) {
      let [firstName, lastName, middleName] = client.fio.split(' ');
      let full_client = { 
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        phone: client.phone
      }  
      context.commit('addRequest', full_client)
    }
  },
  modules: {
  }
})
