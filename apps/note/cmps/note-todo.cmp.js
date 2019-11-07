import { noteService } from "../services/note-service.js"


export default {
  template: `
        <section>
          <h1 :toDoTxts="splitValue" v-for="txt in splitValue">{{txt}}</h1>
            <button @click="removeNote(value.id)">x</button>
        </section>
        `,
  props: ["value"],
  
  methods: {
    removeNote(noteId) {
      noteService.removeNote(noteId)
  }
    },
  computed: {
    splitValue() {
      let str = this.value.content
      let splitStr = str.split(", ")
      return splitStr
    }
  }
};
