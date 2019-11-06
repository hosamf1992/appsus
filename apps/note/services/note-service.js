'use strict'

import {storageService} from '/js/services/util.service.js'

export const noteService = {
    getNotes,
}


// updateNote,
// deleteNote,
// getNote,
// getNoteByType,  
// queryNotes,

const NOTES_KEY = 'notes'

function getNotes() {
    storageService.store(NOTES_KEY, gNotes)
    return gNotes
}

let gNotes = [
    {
      id: "OXeM",
      content: "Buy milk",
      noteType: { 
        noteToDos: false,
        noteImg: false,
        noteTxt: false,
        noteAudio: false,
        noteMap: true
      },
      createdAt: null,
      isPind: false
    },
    {
        id: "LpDD",
        content: "Collect Shirt",
        noteType: { 
              noteToDos: false,
              noteImg: false,
              noteTxt: false,
              noteAudio: false,
              noteMap: true
        },
        createdAt: null,
        isPind: false
      }
    ]

