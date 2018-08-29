<template>
  <div class="rollList">
    <div v-for="roll in rolls" :class="{roll: true, [getRollResultType(roll).toLowerCase()]: true}">
      <div class="rollHeader"><h3>{{roll.source}}</h3></div>
      <div class="rollBody">
        <h1>{{roll.diceRoll}}</h1>
        <h5>{{getRollResultType(roll)}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rolls",
  computed: {
    rolls() {
      return this.$store.state.rolls.list
    }
  },
  updated() {
    this.scrollToBottom()
  },
  methods: {
    getRollResultType(roll) {
      if (roll.success && roll.special) return 'Special'
      if (roll.success) return 'Success'
      if (!roll.success && roll.special) return 'Fumble'
      if (!roll.success) return 'Failure'
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.$el.scrollTop = this.$el.lastElementChild.offsetTop
      })
    }
  }
}
</script>

<style>

.rollList {
  overflow-y: scroll;
  height: 90vh;
  padding: 0px 10px;
}

.roll {
  width: 200px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.rollHeader {
  border: 1px solid #ccc;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rollBody {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px;
  border-right: 1px;
  border-left: 1px;
  border-top: 0px;
  border-color: #ccc;
  border-style: solid;
}

h1, h2, h3, h4, h5 {
  padding: 0; 
  margin: 0;
}

.roll h1 {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.special .rollHeader,
.special .rollBody {
  border-color: #68BECD;
  background-color: #7EE8FA;
}

.success .rollHeader,
.success .rollBody {
  border-color: #80FF72;
  background-color: #69D15E;
}

.fumble .rollHeader,
.fumble .rollBody {
  border-color: #E58C8A;
  background-color: #BC7371;
}

.failure .rollHeader,
.failure .rollBody {
  border-color: #FFF07C;
  background-color: #D1C566;
}

</style>
