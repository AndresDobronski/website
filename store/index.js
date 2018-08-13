import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    drawer: false,
    nav: [
      {
        text: 'About',
        value: '/'
      },
      {
        text: 'Achievements',
        value: '/'
      },
      {
        text: 'Teams',
        value: '/'
      },
      {
        text: 'Staff',
        value: '/'
      }
    ],
    social: [
      {
        icon: 'mdi-facebook-box',
        value: 'https://www.facebook.com/ASUEsportsOfficial/'
      },
      {
        icon: 'mdi-twitter-box',
        value: 'https://twitter.com/ASUesports'
      },
      {
        icon: 'mdi-instagram',
        value: 'https://www.instagram.com/asuesports/'
      },
      {
        icon: 'mdi-youtube',
        value: 'https://www.youtube.com/channel/UCwpqW438jSPuTXlmrRSk7ZQ'
      },
      {
        icon: 'mdi-twitch',
        value: 'https://www.twitch.tv/asuesportsofficial'
      },
      {
        icon: 'mdi-steam-box',
        value: 'https://steamcommunity.com/groups/ASUESA'
      },
      {
        icon: 'mdi-discord',
        value: 'https://discord.gg/asu'
      }
    ]
  },
  mutations: {
    setDrawer (state, payload) {
      state.drawer = payload
    }
  }
})

export default store
