import { noteService } from "../services/note-service.js"

export default {
  template: `
        <section class="note">
           <h1 class="note-text">
                {{value.content}}
            </h1>
            <button @click="removeNote(value.id)" >x</button>
            <button @click="pinNote(value.id)">Pinned</button>
        </section>
        `,
  props: ["value"],
  
  methods: {
      removeNote(noteId) {
            noteService.removeNote(noteId)
        },
      pinNote(noteId) {
            noteService.pinNote(noteId)
        }
    },
  computed: {
    
  }
};

