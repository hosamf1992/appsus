'use strict'

import noteText from './note-text.cmp.js'
import noteTodo from './note-todo.cmp.js'
import noteImg from './note-img.cmp.js'



export default {
    props: ['notes'],
    template: `
        <section class="note-list-container flex wrap flex-row">
            <div v-for="(note, idx) in notes">
                    <component :is="note.type"  :value="note" @click.native="onSelectNote(note.id)" ></component>
            </div>
            
        </section>
    `,
    data() {
            return {
                    selectedNote: false,
                    // isClicked: false,
        }
    },
    methods: {  
        onSelectNote(noteId) {
            this.selectedNote = noteId;
            this.$emit('selected', this.selectedNote);
            },
            // linkClicked(){
            // console.log('i was clicked')
            // this.isClicked = true;
            // // this.selectedNote = true;
            // }
    },
    computed: {
       
    },
    created(){
        // this.notes = noteService.getNotes() 
        // console.log(this.notes)
    },
    components: {
        
        noteTodo,
        noteText,
        noteImg
    }
}

