'use strict'

import {storageService} from '../../../js/services/util.service.js'

import {makeId} from '../../../js/services/util.service.js'

export const noteService = {
    getNotes,
    getNoteById,
    updateNote,
    removeNote,
    findNote,
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
gNotes[idx].isPinned = !gNotes[idx].isPinned;
console.log(gNotes[idx].isPinned)

if (gNotes[idx].isPinned === true) {
gNotes.splice(idx,1)
gNotes.unshift(0, 1, note)
} else {
  console.log('not pinned')
  let firstUnpinned = gNotes.findIndex(note => note.isPinned === false);
  console.log(firstUnpinned);
}
storageService.store(NOTES_KEY, gNotes)
}

function findNote(noteId) {
  let note = gNotes.find(note => note.id === noteId);
  return note
}

function updateNote(noteId, noteNewContent) {
  var idx = gNotes.findIndex(note => note.id === noteId);
  if (idx !== -1) gNotes[idx].content = noteNewContent;
  console.log(noteNewContent);
  storageService.store(NOTES_KEY, gNotes)
}

let gNotes = [
    {
      id: makeId(),
      content: "Buy milk",
      type:'noteImg',
      createdAt: new Date().getHours(),
      img: '../img/note/milk.jpg',
      isPinned: false,
      color: 'blue'
    },
    {
        id: makeId(),
        content: "Visit barber, collect shirt, take car to repair",
        type: 'noteTodo',
        createdAt: new Date().getHours(),
        img: '',
        isPinned: false,
        color: 'red'
      },
      {
        id: makeId(),
        content: "Do some sport",
        type: 'noteText',
        createdAt: new Date().getHours(),
        img: '',
        isPinned: false,
        color: 'orange'
      },
      {
        id: makeId(),
        content: "I love web",
        type: 'noteText',
        createdAt: new Date().getHours(),
        img: '',
        isPinned: false,
        color: 'blue'
      },
      {
        id: makeId(),
        content: "Real programmers count from 0",
        type:'noteText',
        createdAt: new Date().getHours(),
        img: '',
        isPinned: false,
        color: 'white'
      },
      {
          id: makeId(),
          content: "Study Vue, prepare presentation, cooking course",
          type: 'noteTodo',
          createdAt: new Date().getHours(),
          img: '',
          isPinned: false,
          color: 'red'
        },
        {
          id: makeId(),
          content: "Visit Saturn",
          type: 'noteImg',
          createdAt: new Date().getHours(),
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWkepP2_T3zgNJeYP0P5x5zJjSX_WRqtT9bnEvdRqMmgCAh7kE',
          isPinned: false,
          color: 'orange'
        },{
          id: makeId(),
          content: "Loop for for",
          type: 'noteText',
          createdAt: new Date().getHours(),
          img: '',
          isPinned: false,
          color: 'gray'
        },
  




    ]
