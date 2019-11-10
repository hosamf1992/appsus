
'use strict';
import {noteService} from '../services/note-service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';
import noteAdd from '../cmps/add-note.cmp.js';
import noteUpdate from '../cmps/note-update.cmp.js'
import {eventBus} from '../../../js/services/event-bus.service.js'

export default {
    name: 'note-app',
    template: `
        <section class="note-app-container">
        
        <nav class="nav-container">
            <note-filter @filtered="setFilter"></note-filter>
        </nav>

        <note-add></note-add>

        <div class="modal" v-if="msg" :class="msg.type">
            <button>x</button>
            <p>{{msg.txt}}</p>
        </div>

        <note-update class="modal" v-if="selectedNote" :value="note"
         @closeModal="closeModal"></note-update>

        <note-list :notes="notesToShow" @selected="selectNote"> </note-list>
        
        </section>
    `,
    data() {
        return{
            notes: [],
            filterBy: null,
            filterByType: null,
            selectedNote: null,
            note: {},
            msg: null
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
        noteService.getNotes()
            .then(notes=> {
                this.notes = notes
        })
        // eventBus.$on('show-msg', (msg)=>{
        //             this.msg = msg;
        //             setTimeout(()=>{
        //                 this.msg = null;
        //             }, 1500)
        //         })
    },
    components: {
            noteFilter,
            noteList,
            noteUpdate,
            noteAdd
    }
}
