'use strict'

import {storageService} from '/js/services/util.service.js'

export const noteService = {
    getNotes,
    getNoteById
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


let gNotes = [
    {
      id: "OXeM",
      title: "Buy",
      content: "Buy milk",
      type:'noteImg',
      createdAt: null,
      img: "http://coding-academy.org/books-photos/20.jpg",
      isPind: false,
      completeBy: null
    },
    {
        id: "LpDD",
        title: "Do",
        content: "Collect Shirt",
        type: 'noteToDo',
        createdAt: null,
        img: "http://coding-academy.org/books-photos/14.jpg",
        isPind: false,
        completeBy: null
      },
      {
        id: "gtpp",
        title: 'Do',
        content: "Do some sport",
        type: 'noteTxt',
        createdAt: null,
        img: "http://coding-academy.org/books-photos/2.jpg",
        isPind: false,
        completeBy: null
      }
    ]

