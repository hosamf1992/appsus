'use strict'
import {noteService} from '../services/note-service.js';


export default {
  template: `
    <section>
        <input type="text" placeholder="What's on your mind?" v-model="val.txt" />
        <select v-model="val.type">
            <option value="noteText">Text</option>
            <option value="noteImg">Image</option>
            <option value="noteTodo">To do</option>
          </select>
          <button @click="addNote">Add</button>
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
