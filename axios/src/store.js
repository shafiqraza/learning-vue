import Vue from 'vue'
import Vuex from 'vuex'
import mainAxios from "axios"
import axios from './axoisAuth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: '',
    userId: '',
    user: null
  },
  mutations: {
    AUTH_USER(state, userData){
      state.idToken = userData.token
      state.userId = userData.userId
    },
    STORE_USER(state, userData){
      state.user = userData
    }
  },
  actions: {
    signup({commit, dispatch},formData){
      axios.post('accounts:signUp?key=AIzaSyDko6keMvfxHUnLqepkvbY4-X4QhrKukiI',{
        email: formData.email,
        password: formData.password,
        returnSecureToken: true
      })
      .then(res => {
        commit('AUTH_USER',{
          token: res.data.idToken,
          userId: res.data.localId
        },
        dispatch('storeUser',formData)
        
        )
      })
      .catch(error => {
        console.log(error)
      })
    },
    login({commit},formData){
      axios.post('accounts:signInWithPassword?key=AIzaSyDko6keMvfxHUnLqepkvbY4-X4QhrKukiI',{
        email: formData.email,
        password: formData.password,
        returnSecureToken: true
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      });
    },
    storeUser({commit, state},userData){
      if(state.idToken){
        commit('STORE_USER',userData)
        mainAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
      }

    },
    fetchUser({commit}){
      mainAxios.get('/users.json')
      .then(res => {
        const data = res.data
        const users = []
        for (let key in data){
          const user = data[key]
          users.push(user)
        }
        // console.log(users)

        this.email = users[0].email
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  getters: {
    userData(state) {return state.user}
  }
})