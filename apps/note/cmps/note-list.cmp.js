'use strict'

import noteText from './note-text.cmp.js'
import noteTodo from './note-todo.cmp.js'
import noteImg from './note-img.cmp.js'

export default {
    props: ['notes'],
    template: `
        <section class="note-list-container flex wrap flex-row">
            <div v-for="(note, idx) in notes" >
                    <component :is="note.type"  :value="note" 
                    @click.native="onSelectNote(note.id)" >    
                </component>
            </div>
        </section>
    `,
    data() {
            return {
                    selectedNote: false,      
        }
    },
    methods: {  
        onSelectNote(noteId) {
            this.selectedNote = noteId;
            this.$emit('selected', noteId);
            },  
    },
    components: {  
        noteTodo,
        noteText,
        noteImg
    }
}

