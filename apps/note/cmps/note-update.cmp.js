'use strict';
import { noteService } from "../services/note-service.js"

export default {
    name: 'note-update',
    template: `
        <section  class="note-update-container">
                <button class="close-modal-btn" @click="closeModal">x</button>

                <input type="text" placeholder="txt" v-model="txt"
                         @keyup="updateNoteContent(value.id, txt)"></input>

                <p>Reminder: {{ value.content }}</p> 
                <p>Written At hour: {{ value.createdAt }}</p>

                <img :src="value.img" />

                <button @click="removeNote(value.id)" >
                    <img src="img/note/trash.png"></button>

                <button @click="pinNote(value, value.id)">
                    <img v-if="!value.isPinned" src="img/note/pin-keep.png">
                    <img v-if="value.isPinned" src="img/note/pin1.png">
                </button>

                <input type="color" placeholder="#202124" v-model="bgc"
                     @change="updateNoteBGC(value.id, bgc)" >
                </input>

        </section>
    `,
    props: ["value"],

    data() { return {
        txt: this.value.content, 
        bgc: null 
    }

    },
    methods: {

        removeNote(noteId) {
          noteService.removeNote(noteId);
          this.isShown = false;
          this.closeModal()
          },

        pinNote(note, noteId) {
          noteService.pinNote(note, noteId)
          },

        updateNoteContent(noteId, noteNewContent) {
            noteService.updateNoteContent(noteId, noteNewContent)
        },

        updateNoteBGC(noteId, bgc) {
            noteService.updateNoteBGC(noteId, bgc)
        },

        closeModal() {
            this.isShown = false
            this.$emit('closeModal', false);
        }
        },  
    }
