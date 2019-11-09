'use strict'
import {noteService} from '../services/note-service.js';


export default {
  template: `
    <section class="add-note-container flex align-center justify-center">
    <label class="label">Select new note type: </label>  
    <select class="select" v-model="val.type">
          <option value="noteText">Text</option>
          <option value="noteImg">Image</option>
          <option value="noteTodo">To do</option>
        </select>
        <input class="input" type="text" :placeholder="'Add a new note: ' + [[placeholderText()]]"
         v-model="val.txt" @keyup.enter="addNote"/>
</section>
        `,
  data() {
    return {
      val: {
          type: '',
          txt: ''
      },
      placeholder: {
        todo: 'Enter comma seperated list...',
        img: 'Enter image url',
        txt: 'whats on your mind?',
      }
    }
  },

  methods: {

    addNote() {
    noteService.addNote(this.val);
    },
    
    placeholderText(){
      if (this.val.type === 'noteText') {return this.placeholder.txt}
      else if (this.val.type === 'noteImg') { return this.placeholder.img}
      else if (this.val.type === 'noteTodo') {return this.placeholder.todo}
    },
  },
  computed: {
   
  }
};
