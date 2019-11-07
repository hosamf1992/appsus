'use strict'

import { storageService } from '/js/services/util.service.js'
import { makeId } from '/js/services/util.service.js'

export const noteService = {
    getNotes,
    getNoteById,
    // removeToDo,
    removeNote,
    pinNote,
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
  content: note.txt,
  type: note.type,
  createdAt: Date.now(),
  img: '',
  isPinned: false,
  color: '',
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
  if (idx !== -1) gNotes.splice(idx,1)
  storageService.store(NOTES_KEY, gNotes)
}


function pinNote(note, noteId){
let idx = gNotes.findIndex(noteTodo => noteTodo.id === noteId);
gNotes[idx].isPinned = true;
gNotes.splice(idx,1)
gNotes.unshift(0, 1, note)
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
      color: 'blue'
    },
    {
        id: makeId(),
        content: "Visit barber, collect shirt, take car to repair",
        type: 'noteTodo',
        createdAt: null,
        img: '',
        isPinned: false,
        color: 'red'
      },
      {
        id: makeId(),
        content: "Do some sport",
        type: 'noteText',
        createdAt: null,
        img: '',
        isPinned: false,
        color: 'orange'
      }
    ]
