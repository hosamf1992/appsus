import { noteService } from "../services/note-service.js"


export default {
  template: `
        <section>
          <h1 class="toDo" :toDoTxts="splitValue" v-for="toDoTxt in splitValue" 
          @click="isActive = !isActive" :class="{active: isActive}">{{toDoTxt}}</h1>
            <button @click="removeNote(value.id)">x</button>
        </section>
        `,
  props: ["value"],
  

  data() {
    return {
            isActive: false
    }
},
  methods: {
    removeNote(noteId) {
      noteService.removeNote(noteId)
  },
    
    },
  computed: {
    splitValue() {
      let str = this.value.content
      let splitStr = str.split(", ")
      return splitStr
    }
  }
};
