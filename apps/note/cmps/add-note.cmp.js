'use strict'
import {noteService} from '../services/note-service.js';


export default {
  template: `
    <section>
        <input type="text" placeholder="Add note" v-model="val.content" />
        <select v-model="val.type">
            <option value="text">Text</option>
            <option value="image">Image</option>
            <option value="todo">To do</option>
          </select>
          <button @click="addNote">Add</button>
</section>
        `,

  data() {
    return {
      val: {
          type: '',
          content:''
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
