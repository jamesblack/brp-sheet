<template>
  <div>
    <div class="char-and-stats">
      <div>
        <div><div><h2>Characteristics & Statistics</h2></div></div>
        <div>
          <div>
            <Attribute v-for="attribute in Attributes" :key="attribute.key" :Attribute="attribute"/>
          </div>
          <div>
            <div> 
              <div>
                <label>Damage Bonus</label>
                <input type="number" />
              </div>        
            </div> 
            <div> 
              <div>
                <label>Sanity</label>
                <input type="number" />
                <input type="number" />
              </div>        
            </div> 
            <div> 
              <div>
                <label>Power Points</label>
                <input type="number" />
                <input type="number" />
              </div>        
            </div> 
            <div> 
              <div>
                <label>Hit Points</label>
                <input type="number" />
                <input type="number" />
              </div>        
            </div> 
          </div>
        </div>
      </div>
      
      <!-- <div>
        <label>Name:</label>
        <input type="text" />
      </div>
      <div>
        <label>Profession:</label>
        <input type="text" />
      </div> -->      
      <!-- <div>
        <h3>Sanity</h3>
        <input type="number" />
        <input type="number" />
      </div>
      <div>
        <h3>Power Points</h3>
        <input type="number" />
        <input type="number" />
      </div>
      <div>
        <h3>Hit Points</h3>
        <input type="number" />
        <input type="number" />
      </div>
      <div>
        <label>Description/Bio</label>
        <textarea />
      </div> -->
    </div>
    <!-- <div class="skills">
      <div v-for="skillCategory in Skills" :key="skillCategory.label">
        <label><strong>{{skillCategory.label}} ({{skillCategory.base(mySkills)}})</strong></label><input type="number"/>
        <div v-for="skill in skillCategory.skills" :key="skill.label">
          <label>{{skill.label}} ({{skill.base({})}})</label>
          <input type="number" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { ATTRIBUTE } from '@/data/enums'
import Skills from '../data/skills'
import Attributes from '../data/attributes'
import Attribute from '@/components/Attribute'

export default {
  name: "Sheet",
  components: {
    Attribute
  },
  data() {
    return {
      Skills,
      Attributes,
      attributes: {

      }
    }
  },
  computed: {
    [`attributes.${ATTRIBUTE.STR}`]: {
      get() {
        return this.$store.getters.getAttribute(ATTRIBUTE.STR)
      },
      set(value) {
        this.$store.commit('setAttribute', ATTRIBUTE.STR, value)
      }
    },
    [`attributes.${ATTRIBUTE.DEX}`]: {
      get() {
        return this.$store.getters.getAttribute(ATTRIBUTE.DEX)
      },
      set(value) {
        this.$store.commit('setAttribute', ATTRIBUTE.DEX, value)
      }
    },
    [`attributes.${ATTRIBUTE.CON}`]: {
      get() {
        return this.$store.getters.getAttribute(ATTRIBUTE.CON)
      },
      set(value) {
        this.$store.commit('setAttribute', ATTRIBUTE.CON, value)
      }
    },
    [`attributes.${ATTRIBUTE.INT}`]: {
      get() {
        return this.$store.getters.getAttribute(ATTRIBUTE.INT)
      },
      set(value) {
        this.$store.commit('setAttribute', ATTRIBUTE.INT, value)
      }
    },
    [`attributes.${ATTRIBUTE.POW}`]: {
      get() {
        return this.$store.getters.getAttribute(ATTRIBUTE.POW)
      },
      set(value) {
        this.$store.commit('setAttribute', ATTRIBUTE.POW, value)
      }
    },
    [`attributes.${ATTRIBUTE.CHA}`]: {
      get() {
        return this.$store.getters.getAttribute(ATTRIBUTE.CHA)
      },
      set(value) {
        this.$store.commit('setAttribute', ATTRIBUTE.CHA, value)
      }
    },
    
  }
}
</script>

<style>

</style>
