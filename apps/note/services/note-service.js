'use strict'
import {storageService} from '../../../js/services/util.service.js'
import {makeId} from '../../../js/services/util.service.js'

export const noteService = {
    getNotes,
    getNoteById,
    updateNoteContent,
    updateNoteBGC,
    removeNote,
    findNote,
    pinNote,
    addNote
}

const NOTES_KEY = 'notes'

function getNotes() {
    storageService.store(NOTES_KEY, gNotes)
    // return gNotes
    return Promise.resolve(gNotes);
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
        bgc: '', 
  }

  if(note.type === "noteImg") {
    newNote.img = newNote.content
    newNote.content = ''
  }
    gNotes.unshift(newNote)
    storageService.store(NOTES_KEY, gNotes)
    return Promise.resolve(newNote);
}

function removeNote(noteId) {
    var idx = gNotes.findIndex(note => note.id === noteId)
    if (idx !== -1) gNotes.splice(idx,1)
    storageService.store(NOTES_KEY, gNotes)
    return Promise.resolve(idx);
}


function pinNote(note, noteId){
    let idx = gNotes.findIndex(noteTodo => noteTodo.id === noteId);
    
    if (gNotes[idx].isPinned === false) {
        gNotes[idx].isPinned = !gNotes[idx].isPinned;
        gNotes.splice(idx,1)
        gNotes.splice(0, 0, note)
    } else {
        let pinnedIdx = gNotes.findIndex(note => note.isPinned === false);
        gNotes[idx].isPinned = !gNotes[idx].isPinned;
        gNotes.splice(idx,1)
        gNotes.splice(pinnedIdx-1, 0, note)
    }
    storageService.store(NOTES_KEY, gNotes)
    return Promise.resolve(gNotes);
}

function findNote(noteId) {
    let note = gNotes.find(note => note.id === noteId);
    return note;
}

function updateNoteContent(noteId, noteNewContent) {
    var idx = gNotes.findIndex(note => note.id === noteId);
    if (idx !== -1) gNotes[idx].content = noteNewContent;
    storageService.store(NOTES_KEY, gNotes)
    return Promise.resolve(idx);
}

function updateNoteBGC(noteId, bgc) {
  var idx = gNotes.findIndex(note => note.id === noteId);
    if (idx !== -1) gNotes[idx].bgc = bgc;
    storageService.store(NOTES_KEY, gNotes)
    return Promise.resolve(idx);
}

let gNotes = [
    {
      id: makeId(),
      content: "Buy milk",
      type:'noteImg',
      createdAt: new Date().getHours(),
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkjEB3ZqBMhCV569nJRL-AZx_twTtxjBrvmGP7yTM-s22su4AU',
      isPinned: false,
      bgc: null
    },
    {
        id: makeId(),
        content: "Visit barber, Collect shirt, Repair the car",
        type: 'noteTodo',
        createdAt: new Date().getHours(),
        img: '',
        isPinned: false,
        bgc: null
      },
      {
        id: makeId(),
        content: "Where is the event bus station?",
        type: 'noteText',
        createdAt: new Date().getHours(),
        img: '',
        isPinned: false,
        bgc: null
      },{
        id: makeId(),
        content: "Do some sport",
        type: 'noteText',
        createdAt: new Date().getHours(),
        img: '',
        isPinned: false,
        bgc: null
      },
      {
        id: makeId(),
        content: "Real programmers count from 0",
        type:'noteText',
        createdAt: new Date().getHours(),
        img: '',
        isPinned: false,
        bgc: null
      },
      {
          id: makeId(),
          content: "Study Vue, Prepare presentation, Cooking course",
          type: 'noteTodo',
          createdAt: new Date().getHours(),
          img: '',
          isPinned: false,
          bgc: null
        },
        {
          id: makeId(),
          content: "Visit Saturn",
          type: 'noteImg',
          createdAt: new Date().getHours(),
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWkepP2_T3zgNJeYP0P5x5zJjSX_WRqtT9bnEvdRqMmgCAh7kE',
          isPinned: false,
          bgc: null
        }, {
          id: makeId(),
          content: "I love web",
          type: 'noteText',
          createdAt: new Date().getHours(),
          img: '',
          isPinned: false,
          bgc: null
        },
        {
          id: makeId(),
          content: "four for loops",
          type: 'noteText',
          createdAt: new Date().getHours(),
          img: '',
          isPinned: false,
          bgc: null
        },
        {
          id: makeId(),
          content: "Appsus course",
          type: 'noteImg',
          createdAt: new Date().getHours(),
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgwjWlJqJbs9rh-cW17-oQG6jf57itenFKykpbT19DCsOisjuv',
          isPinned: false,
          bgc: null
        },
        {
          id: makeId(),
          content: "Real estate meeting",
          type:'noteText',
          createdAt: new Date().getHours(),
          img: '',
          isPinned: false,
          bgc: null
        },
    ]
