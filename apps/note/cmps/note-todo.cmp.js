import { noteService } from "../services/note-service.js"


export default {
  template: `
        <section class="note note-text">
          <h1 class="toDo" :toDoTxts="splitValue" v-for="toDoTxt in splitValue" 
          @click="isActive = !isActive" :class="{active: isActive}">{{toDoTxt}}</h1>
            <button @click="removeNote(value.id)">x</button>
            <button @click="pinNote(value, value.id)">Pinned</button>
         
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
    pinNote(note, noteId) {
      noteService.pinNote(note, noteId)
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
