
'use strict';
import {noteService} from '../services/note-service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import noteAdd from '../cmps/add-note.cmp.js';


export default {
    name: 'note-app',
    template: `
        
        <section class="note-app-container">
        <nav  class="nav-container flex flex-row space-between justify-center align-center">
            <note-filter @filtered="setFilter"></note-filter> 
            <h1 class="note-title"> Miss Keep</h1>

        </nav>
        <note-add></note-add>
            <note-list :notes="notesToShow" @selected="selectNote"> </note-list>
        </section>
    `,
    data() {
        return{
         notes: [],
         filterBy: null,
         selectedNote: null
        }
    },
    methods: {
        selectNote(noteId) {
        noteService.getNoteById(noteId)
            .then(note => this.selectedNote = note)
            },
        setFilter(filter) {
            this.filterBy = filter;
            },
        },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            let regex = new RegExp(`${this.filterBy.content}`, 'i');
            return this.notes.filter(note => {
            return regex.test(note.content)
            })
        }
    },
    created(){
        this.notes = noteService.getNotes()
    },
    components: {
    noteFilter,
    noteList,
    noteAdd
    }
}
