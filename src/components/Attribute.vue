<template>
  <div class="attribute">
    <label class="verticalCenter attributeName">{{AttributeLabelMap[Attribute.attribute.label]}}</label>
    <button>Expand</button>
    <div class="tooltip">
      <label>Base</label>
      <input type="number" v-model.number="attribute" />
    </div>
    <div class="tooltip">
      <label>Total</label>
      <input type="number" v-model.number="attribute" disabled />
    </div>
    <div class="tooltip">
      <label>{{Attribute.roll.label}}</label>
      <input type="number" :value="Attribute.roll.base(attributes)" disabled />
    </div>
    <button size="sm" variant="primary" @click="roll">Roll</button>
  </div>
</template>

<script>
import * as Dice from '@/helpers/dice'

export default {
  name: 'Attribute',
  props: [
    'Attribute'
  ],
  data() {
    return {
      AttributeLabelMap: {
        STR: 'Strength',
        DEX: 'Dexterity',
        CON: 'Consitution',
        INT: 'Intelligence',
        POW: 'Power',
        CHA: 'Charisma'
      }
    }
  },
  computed: {
    attribute: {
      get() {
        return this.$store.getters.getAttribute(this.Attribute.key)
      },
      set(value) {
        this.$store.commit('setAttribute', { attribute: this.Attribute.key, value })
      }
    },
    attributes() {
      return this.$store.state.character.attributes
    }
  },
  methods: {
    roll() {
      const diceRoll = Dice.D100()
      const success = diceRoll <= this.Attribute.roll.base(this.attributes)
      const special = diceRoll % 11 === 0 || diceRoll === 1 || diceRoll === 100
      this.$store.commit('addRoll', {
        source: this.Attribute.roll.label,
        diceRoll,
        success,
        special
      })
    }
  }
}
</script>

<style>
.attribute {
  display: grid;
  height: px;
  border: 1px solid #ccc;
  grid-template-columns: 1fr 1fr 75px 75px 75px 75px;
}

.attributeName {
  justify-content: flex-start;
  margin-left: 25px;
}

button {
  height: 48px;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
}

button:hover {
  background: lightblue;
}

.tooltip {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tooltip input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  text-align: center;
}

.tooltip input:disabled {
  background: none;
  border: none;
}

</style>
