'use strict'
import {noteService} from '../services/note-service.js';
import {eventBus} from '../../../js/services/event-bus.service.js'


export default {
  template: `
    <section class="add-note-container flex align-center justify-center">
    <label class="label">Add a new note:  </label>  
    <select class="select" v-model="val.type">
          <option></option>
          <option value="noteText">Text</option>
          <option value="noteImg">Image</option>
          <option value="noteTodo">To do</option>
        </select>
        <input class="input" type="text" :placeholder="[[placeholderText()]]"
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
        todo: 'Add a new note: Enter comma seperated list...',
        img: 'Add a new note: Enter image url',
        txt: 'Add a new note: whats on your mind?',
        enterType: 'Please select note type from the drop down list'
      }
    }
  },

  methods: {

    addNote() {
    noteService.addNote(this.val);
    const msg = {
              txt: `note added Succefully`,
              type: 'success'
                }
    if (this.val.type) eventBus.$emit('show-msg', msg)
    },
    
    placeholderText(){
      if (this.val.type === 'noteText') {return this.placeholder.txt}
      else if (this.val.type === '') { return this.placeholder.enterType}
      else if (this.val.type === 'noteImg') { return this.placeholder.img}
      else if (this.val.type === 'noteTodo') {return this.placeholder.todo}
    },
  },
  computed: {
   
  }
};