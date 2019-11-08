'use strict'
import {noteService} from '../services/note-service.js';


export default {
  template: `
    <section class="add-note-container flex align-center justify-center">
      <select class="select" v-model="val.type">
          <option value="noteText">Text</option>
          <option value="noteImg">Image</option>
          <option value="noteTodo">To do</option>
        </select>
        <input class="input" type="text" placeholder="Add a note: what's on your mind?"
         v-model="val.txt" @keyup.enter="addNote"/>
</section>
        `,

  data() {
    return {
      val: {
          type: '',
          txt: ''
      }
    }
  },

  methods: {
    addNote() {
    noteService.addNote(this.val);
    }
  },
  computed: {
   
  }
};
