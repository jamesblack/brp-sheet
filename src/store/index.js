import Vue from 'vue'
import Vuex from 'vuex'
import { isNumber } from '@/helpers/validation'
import { ATTRIBUTE } from '@/data/enums'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    character: {
      attributes: {
        [ATTRIBUTE.STR]: 0,
        [ATTRIBUTE.DEX]: 0,
        [ATTRIBUTE.CON]: 0,
        [ATTRIBUTE.INT]: 0,
        [ATTRIBUTE.POW]: 0,
        [ATTRIBUTE.CHA]: 0,
      }
    },
    rolls: {
      list: [

      ]
    }
  },
  mutations: {
    setAttribute(state, {attribute, value}) {
      if (!isNumber(value) || value < 0) return state.character.attributes[attribute] = 0
      return state.character.attributes[attribute] = value
    },
    addRoll(state, roll) {
      return state.rolls.list.push(roll)
    }
  },
  actions: {

  },
  getters: {
    getAttribute: (state) => (attribute) => {
      return state.character.attributes[attribute]
    }
  }
})
