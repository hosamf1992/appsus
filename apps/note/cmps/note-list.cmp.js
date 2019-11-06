'use strict'
import notePreview from './note-preview.cmp.js'
import noteText from './note-text.cmp.js'
import noteTodo from './note-todo.cmp.js'
import noteImg from './note-img.cmp.js'
import {noteService} from '../services/note-service.js';

export default {
    props: ['notes'],
    template: `
        <section class="note-list-container">
            <div v-for="(note, idx) in notes">
                    <component :is="note.type"  :value="note"></component>
            </div>
        </section>
    `,
    data() {
            return {
                    selectedNote: null,
        }
    },
    methods: {  
        onSelectNote(noteId) {
            this.selectedNote = noteId;
            this.$emit('selected', this.selectedNote);
            }
    },
    computed: {
       
    },
    created(){
        // this.notes = noteService.getNotes() 
        // console.log(this.notes)
    },
    components: {
        notePreview,
        noteTodo,
        noteText,
        noteImg
    }
}

