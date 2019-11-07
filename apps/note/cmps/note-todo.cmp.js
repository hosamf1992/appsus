import { noteService } from "../services/note-service.js"

export default {
  template: `
        <section>
            <h2 v-for="(val) in value.content">{{val.toDoContent}}
            <button @click="removeToDo(value.id,val.toDoId)">x</button>
            </h2>
        </section>
        `,
  props: ["value"],
  
  methods: {
        removeToDo(noteId, toDoId) {
          console.log(noteId, toDoId)
            noteService.removeToDo(noteId, toDoId)
        }
    },
  computed: {
    
  }
};
