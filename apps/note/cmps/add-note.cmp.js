'use strict'
import { noteService } from '../services/note-service.js';
import { eventBus } from '../../../js/services/event-bus.service.js'


export default {
  template: `
    <section class="add-note-container flex align-center justify-center">
    <div class="add-note-selector">
    <label class="label">Add a note:  </label>  
    <select class="select" v-model="val.type">
          <option value="Type">Type</option>
          <option value="noteText">Text</option>
          <option value="noteVideo">Video</option>
          <option value="noteImg">Image</option>
          <option value="noteTodo">To do</option>
        </select>
</div>
        <input class="input" type="text" :placeholder="[[placeholderText()]]"
         v-model="val.txt" @keyup.enter="addNote"/>
    </section>
        `,
  data() {
    return {
        val: {
            type: 'Type',
            txt: ''
        },
      placeholder: {
        todo: 'Add a new note: Enter comma seperated list...',
        img: 'Add a new note: Enter image url',
        txt: 'Add a new note: whats on your mind?',
        video: 'Add a new video: whats on your mind?',
        enterType: 'Please select note type from the drop down list'
      }
    }
  },

  methods: {
    addNote() {
      if(this.val.type === "Type" || this.val.txt === '') return;
    noteService.addNote(this.val)
      .then(()=> {
        const msg = {
          txt: `note added Succefully`,
          type: 'success'
            }
        if (this.val.txt === '') return;
        if (this.val.type) eventBus.$emit('show-msg', msg)
  })
},
    placeholderText(){
      if (this.val.type === 'noteText') {return this.placeholder.txt}
      else if (this.val.type === 'Type') { return this.placeholder.enterType}
      else if (this.val.type === 'noteImg') { return this.placeholder.img}
      else if (this.val.type === 'noteVideo') { return this.placeholder.video}
      else if (this.val.type === 'noteTodo') {return this.placeholder.todo}
    },

   
  },

  


};