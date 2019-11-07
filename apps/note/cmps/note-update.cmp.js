'use strict';
import { noteService } from "../services/note-service.js"

export default {
    name: 'note-update',
    template: `
        <section v-if="isShown" class="note-update-container">
                <p>Reminder: {{ value.content }}</p> 
                <p>Written At hour: {{ value.createdAt }}</p>
                <img :src="value.img" />
                <button @click="removeNote(value.id)">x</button>
                <button @click="pinNote(value, value.id)">Pinned</button>
        </section>
    `,
    props: ["value"],

    data() { return {
        isShown: true
    }

    },
    

    methods: {
        removeNote(noteId) {
          noteService.removeNote(noteId);
          this.isShown = false;
          },
        pinNote(note, noteId) {
          noteService.pinNote(note, noteId)
          },
        },
        
    }