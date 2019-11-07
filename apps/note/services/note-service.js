'use strict'

import {storageService} from '/js/services/util.service.js'
import {makeId} from '/js/services/util.service.js'

export const noteService = {
    getNotes,
    getNoteById,
    removeToDo,
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
      content: note.txt,
      type:note.type,
      createdAt: Date.now(),
      img: '',
      isPinned: false,
      color: '',
}
if(note.type === "noteTodo") {
  newNote.content = {toDoId: makeId(), isCompleted: false, toDoContent: note.txt}
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

function removeToDo(noteId, toDoId) {
  var noteIdx = gNotes.findIndex(note => note.id === noteId)
  var toDoIdx = gNotes[noteIdx].content.findIndex(content => content.toDoId === toDoId)
  if (noteIdx !== -1 && toDoIdx !== -1) gNotes[noteIdx].content.splice(toDoIdx,1)
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
        content: [ {toDoId:makeId(),
                    isCompleted: false,
                    toDoContent: "Collect Shirt",
                },
                  {toDoId:makeId(),
                    isCompleted: true,
                    toDoContent: "Visit barber",
                },
                {toDoId:makeId(),
                  isCompleted: false,
                  toDoContent: "Get car to repair",
              }
        ],
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
