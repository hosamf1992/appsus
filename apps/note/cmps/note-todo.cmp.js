import { noteService } from "../services/note-service.js"


export default {
  template: `
        <section class="note note-text" :style="{ backgroundColor: value.bgc}">
          <h1>To Do:</h1>
          <h1 :toDoTxts="splitValue" v-for="toDoTxt in splitValue" 
              @click="isActive = !isActive" :class="{notActive: !isActive}">{{toDoTxt}}</h1>
          <button v-if="value.isPinned"><img src="img/note/pin1.png"></button> 
        </section>
        `,
  props: ["value"],
  data() {
    return {
      isActive: true
    }
},
  methods: {
    },

  computed: {
    splitValue() {
      let str = this.value.content
      let splitStr = str.split(", ")
      return splitStr
    }
  }
};
