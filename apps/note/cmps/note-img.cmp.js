import { noteService } from "../services/note-service.js"

export default {
  template: `
        <section class="note">
            <img :src="value.img" />
            <button @click="removeNote(value.id)">x</button>
            <button @click="pinNote(value, value.id)">Pinned</button>
        </section>
        `,
  props: ["value"],
  
  methods: {
        removeNote(noteId) {
            noteService.removeNote(noteId)
        },
        pinNote(note, noteId) {
          noteService.pinNote(note, noteId)
      }
    },
  computed: {
    
  }
};
