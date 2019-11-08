'use strict';
import { noteService } from "../services/note-service.js"

export default {
    name: 'note-update',
    template: `
        <section  class="note-update-container">
                <button class="close-modal-btn" @click="closeModal">x</button>
                <input type="text" placeholder="txt" v-model="txt"
                         @keyup="updateNote(value.id, txt)"></input>
                <p>Reminder: {{ value.content }}</p> 
                <p>Written At hour: {{ value.createdAt }}</p>
                <img :src="value.img" />
<<<<<<< HEAD
                <button @click="removeNote(value.id)" >
                    <img src="img/note/trash.png"></button>
=======
                <button @click="removeNote(value.id), closeModal" >
                    <img src="img/note/trash.png">
                </button>
>>>>>>> 5dfbada5421c848f7409027141bba1b191efb311
                <button @click="pinNote(value, value.id)">
                    <img v-if="!value.isPinned" src="img/note/pin-keep.png">
                    <img v-if="value.isPinned" src="img/note/pin-red.jpg">
                </button>
        </section>
    `,
    props: ["value"],

    data() { return {
        txt: this.value.content,  
    }

    },
    methods: {
        removeNote(noteId) {
          noteService.removeNote(noteId);
          this.isShown = false;
<<<<<<< HEAD
          this.closeModal()
=======
          this.closeModal();
>>>>>>> 5dfbada5421c848f7409027141bba1b191efb311
          },
        pinNote(note, noteId) {
          noteService.pinNote(note, noteId)
          console.log(this.value.isPinned)
          },
        updateNote(noteId, noteNewContent) {
            noteService.updateNote(noteId, noteNewContent)
        },
        closeModal() {
            console.log('close')
            this.isShown = false
            this.$emit('closeModal', false);
        }
        },  
    }
