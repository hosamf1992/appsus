'use strict'

import {storageService} from '/js/services/util.service.js'
import {makeId} from '/js/services/util.service.js'

export const noteService = {
    getNotes,
    getNoteById,
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
if(note.type === "image") {
  newNote.img = newNote.content
  newNote.content = ''
}
  gNotes.unshift(newNote)
  storageService.store(NOTES_KEY, gNotes)
}

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
        type: 'noteToDo',
        createdAt: null,
        img: '../img/note/shirt.jpg',
        isPinned: false,
      },
      {
        id: makeId(),
        content: "Do some sport",
        type: 'noteTxt',
        createdAt: null,
        img: null,
        isPinned: false,
      }
    ]

