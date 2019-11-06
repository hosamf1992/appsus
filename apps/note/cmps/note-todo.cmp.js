import { noteService } from "../services/note-service.js"

export default {
  template: `
        <section>
            <h2>{{value.content}}</h2>
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
    
  }
};
