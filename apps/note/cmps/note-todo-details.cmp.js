'use strict'


export default {
  template: `
        <section>
            <div @click="isActive = !isActive" :class="{notActive: !isActive}" >
            {{todoItem}}
            </div>
        </section>
        `,
  props: ["todoItem"],
  data() {
    return {
        isActive: true,
    }
},
  methods: {
    
    },

  
  
};