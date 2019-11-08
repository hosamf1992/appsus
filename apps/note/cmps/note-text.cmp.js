import { noteService } from "../services/note-service.js"

export default {
  template: `
        <section class="note">
           <h1 class="note-text">
                {{value.content}}
            </h1>
            <!-- <button @click="removeNote(value.id)">
              <img src="img/note/trash-small.png"></button>
            <button @click="pinNote(value, value.id)">
            <img class="pin-on-note" src="img/note/pin-red.jpg"></button> -->
        </section>
        `,
  props: ["value"],
  data () { 
    return {
      
    }

  },
  methods: {
      // removeNote(noteId) {
      //       noteService.removeNote(noteId)
      //   },
      // pinNote(note, noteId) {
        
      //   noteService.pinNote(note, noteId)
      //   }
    },
  computed: {
    
  }
};

