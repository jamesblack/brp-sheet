<template>
  <div class="hello">
    <div class="sheet">
      <Sheet />
    </div>
    <div class="rolls">
      <Rolls />
    </div>
  </div>
</template>

<script>
import Sheet from '@/components/Sheet.vue'
import Rolls from '@/components/Rolls.vue'
export default {
  name: 'SheetView',
  components: {
    Sheet,
    Rolls
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  display: flex;
  width: 100%;
  justify-content: center;
}

.sheet {
  flex-basis: 70%;
} 

.rolls {
  border-left: 1px solid #ccc;
}
</style>
