
'use strict';
import {noteService} from '../services/note-service.js';
import noteList from '../cmps/note-list.cmp.js';



export default {
    name: 'note-app',
    template: `
        
        <section class="note-app-container">
        <h1 class="note-title">Hey Note app  123</h1>
            <note-list></note-list>
        </section>
    `,
    data() {
        return{
         notes: []
        }
     
   
    },
    methods: {  
    },
    computed: {
    },
    created(){
        this.notes = noteService.getNotes()
    },
    components: {
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






