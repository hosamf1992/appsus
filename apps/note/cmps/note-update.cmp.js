'use strict';
import { noteService } from "../services/note-service.js"

export default {
    name: 'note-update',
    template: `
        <section  class="note-update-container ">
                <button class="close-modal-btn" @click="closeModal">x</button>

                <input class="modalInput" type="text" placeholder="value.content" 
                    v-model="value.content" @keyup="updateNoteContent(value.id, value.content)">
                </input>

                <p>Reminder: {{ value.content }}</p> 
                <p>Written At hour: {{ value.createdAt }}</p>

                <img class="modal-img" :src="value.img" >

                <button @click="removeNote(value.id)" >
                    <img src="img/note/trash.png"></button>

                <button @click="pinNote(value, value.id)">
                    <img v-if="!value.isPinned" src="img/note/pin-keep.png">
                    <img v-if="value.isPinned" src="img/note/pin1.png">
                </button>

                <input class="inputColor" type="color" v-model="bgc"
                     @change="updateNoteBGC(value.id, bgc)" >
                </input>

                <button @click="sendToMail(value.content)" >
                    <img class="image" src="img/mail/close-mail.jpg"></button>

                
        </section>
    `,
    props: ["value"],
    data() { return {
        txt: this.value.content, 
        bgc: '#ffff00'
    }
},
    methods: {

        removeNote(noteId) {
          noteService.removeNote(noteId)
            .then(()=> {
                this.isShown = false;
                this.closeModal()
            })
          },

        pinNote(note, noteId) {
          noteService.pinNote(note, noteId)
            .then(()=> {return})
          },

        updateNoteContent(noteId, noteNewContent) {
            noteService.updateNoteContent(noteId, noteNewContent)
            .then(()=> {return})
        },

        updateNoteBGC(noteId, bgc) {
            noteService.updateNoteBGC(noteId, bgc)
                .then(()=> {return})
        },

        closeModal() {
            this.isShown = false
            this.$emit('closeModal', false);
        },
        sendToMail(noteText){
            const msg = {
                txt: noteText,
                type: 'success'
            }
            console.log(msg);
            eventBus.$emit('show-msg', msg)
        }
        },  
    }
