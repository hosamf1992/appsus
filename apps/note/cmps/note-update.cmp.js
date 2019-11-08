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
                <button @click="removeNote(value.id), closeModal" >
                    <img src="img/note/trash.png"></button>
                <button @click="pinNote(value, value.id)">
                    <img src="img/note/pin-keep.png"></button>
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
          this.closeModal();
          },
        pinNote(note, noteId) {
          noteService.pinNote(note, noteId)
          },
        updateNote(noteId, noteNewContent) {
            noteService.updateNote(noteId, noteNewContent)
        },
        closeModal() {
            this.isShown = false
            this.$emit('closeModal', false);
        }
        },  
    }
