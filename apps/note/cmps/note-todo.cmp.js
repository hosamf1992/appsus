import { noteService } from "../services/note-service.js"


export default {
  template: `
        <section class="note note-text">
          <h1>To Do:</h1>
          <h1 class="toDo" :toDoTxts="splitValue" v-for="toDoTxt in splitValue" 
          @click="isActive = !isActive" :class="{active: isActive}">{{toDoTxt}}</h1>
            <button @click="removeNote(value.id)">
              <img src="img/note/trash-small.png"></button>
            <button @click="pinNote(value, value.id)">
              <img class="pin-on-note" src="img/note/pin-red.jpg"></button>
            
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
