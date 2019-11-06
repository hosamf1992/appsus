
'use strict';
import {noteService} from '../services/note-service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';


export default {
    name: 'note-app',
    template: `
        
        <section class="note-app-container">
        <h1 class="note-title">Hey Note app  123</h1>
            <note-filter @filtered="setFilter"></note-filter> 
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
            let regex = new RegExp(`${this.filterBy.byName}`, 'i');
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
    noteList
    }
}



//     template: `
//         <section class="book-app-container">
//             <book-filter @filtered="setFilter"></book-filter> 
//             <router-link to="/add" class="add-book-btn">Add Book</router-link>
//             <book-list :books="booksToShow" @selected="selectBook"></book-list>
//         </section>
//     `,
//     data(){
//         return {
//             books: [],
//             filterBy: null,
//             selectedBook: null
//         }
//     },
//     methods: {
//         selectBook(bookId) {
//             bookService.getBookById(bookId)
//                 .then(book => this.selectedBook = book)
//         },
//         setFilter(filter) {
//             this.filterBy = filter;
//         },
//         hideDetails() {
//             this.selectedBook = null;
//         }
//     },
//     computed: {
//         booksToShow() {
//             if (!this.filterBy) return this.books;
//             let regex = new RegExp(`${this.filterBy.byName}`, 'i');
//             return this.books.filter(book => {
//                 let bookPrice = book.listPrice.amount;
//                 return regex.test(book.title) && bookPrice > this.filterBy.fromPrice && bookPrice < this.filterBy.toPrice
//             }
//             )
//         }
//     },
//     created() {
//         bookService.getBooks()
//             .then(books => this.books = books)
//     },
//     components: {
//         bookFilter,
//         bookList
//     }
// }






