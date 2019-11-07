import { noteService } from "../services/note-service.js"

export default {
  template: `
        <section class="note">
            <img :src="value.img" />
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
