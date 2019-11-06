'use strict'

import {storageService} from '/js/services/util.service.js'
import {makeId} from '/js/services/util.service.js'

export const noteService = {
    getNotes,
    getNoteById,
    removeNote,
    addNote
}

const NOTES_KEY = 'notes'

function getNotes() {
    storageService.store(NOTES_KEY, gNotes)
    return gNotes
}

function getNoteById(noteId) {
  gNotes = storageService.load(NOTES_KEY);
  var note = gNotes.find(note => note.id === noteId)
  return Promise.resolve(note);
}

function addNote(note) {
  
let newNote = {
  id: makeId(),
      content: note.content,
      type:note.type,
      createdAt: Date.now(),
      img: '',
      isPinned: false,
}
if(note.type === "noteImg") {
  newNote.img = newNote.content
  newNote.content = ''
}
  gNotes.unshift(newNote)
  storageService.store(NOTES_KEY, gNotes)
}

function removeNote(noteId) {
  var idx = gNotes.findIndex(note => note.id === noteId)
  console.log(idx)
  if (idx !== -1) gNotes.splice(idx,1)
  storageService.store(NOTES_KEY, gNotes)
}

// function removeReview(book, reviewId) {
//   var idx = book.reviews.findIndex(review => review.id === reviewId);
//   if (idx !== -1) book.reviews.splice(idx, 1)
//   storageService.store(BOOKS_KEY, gBooks)
//   return Promise.resolve(book);
// }


let gNotes = [
    {
      id: makeId(),
      content: "Buy milk",
      type:'noteImg',
      createdAt: null,
      img: '../img/note/milk.jpg',
      isPinned: false,
    },
    {
        id: makeId(),
        content: "Collect Shirt",
        type: 'noteTodo',
        createdAt: null,
        img: '',
        isPinned: false,
      },
      {
        id: makeId(),
        content: "Do some sport",
        type: 'noteText',
        createdAt: null,
        img: '',
        isPinned: false,
      }
    ]

