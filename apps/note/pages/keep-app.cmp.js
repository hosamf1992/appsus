
'use strict';
import {noteService} from '../services/note-service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import noteAdd from '../cmps/add-note.cmp.js';
import noteUpdate from '../cmps/note-update.cmp.js'

export default {
    name: 'note-app',
    template: `
        <section class="note-app-container">
        <nav  class="nav-container flex align-center justify-center">
            <note-filter @filtered="setFilter"></note-filter> 

        </nav>
        <note-add></note-add>
        <note-update class="modal" v-if="selectedNote" :value="note" @closeModal="closeModal"></note-update>
            <note-list :notes="notesToShow" @selected="selectNote"> </note-list>
        </section>
    `,
    data() {
        return{
         notes: [],
         filterBy: null,
         filterByType: null,
         selectedNote: null,
         note: {}
        }
    },
    methods: {
        selectNote(noteId) {
        this.selectedNote = true;
        let noteInModal = noteService.findNote(noteId);
        this.note = noteInModal;
            },
        closeModal (){
        this.selectedNote = false;
        },
        setFilter(filter) {
            this.filterBy = filter;
            },
        // setFilterByType(filterByType) {
        //     this.filterByType = filterByType;
        //     console.log(this.filterByType)
        // }
        },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            let regexType = new RegExp(`${this.filterBy.type}`, 'i');
            let regexContent = new RegExp(`${this.filterBy.content}`, 'i');
            return this.notes.filter(note => {
            return regexType.test(note.type) && regexContent.test(note.content)
            })
        }
    },
    created(){
        this.notes = noteService.getNotes()
    },
    components: {
    noteFilter,
    noteList,
    noteUpdate,
    noteAdd
    }
}
