import { noteService } from "../services/note-service.js"


export default {
  template: `
        <section class="note note-text">
          <h1>To Do:</h1>
          <h1 class="toDo" :toDoTxts="splitValue" v-for="toDoTxt in splitValue" 
          @click="isActive = !isActive" :class="{active: isActive}">{{toDoTxt}}</h1>
          <button v-if="value.isPinned"><img src="img/note/pin1.png"></button> 
        </section>
        `,
  props: ["value"],
  data() {
    return {
      isActive: false
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
