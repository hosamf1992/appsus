'use strict'


import {storageService} from '/js/services/util.service.js'
import {makeId}  from '/js/services/util.service.js'

export const mailServices = {
    getMails,

   
  }

const MAIL_KEY = 'mailApp';

let gMails=[
    {
        id: makeId(),
        sentFrom:'Nana',
      subject:'HELLO DUDE',       
      body: "mi est eros convallis auctor arcu dapibus himenaeos",
      isRead: false,
      sentAt :1551133930594,
      isStarred:false,

    },
    {
        id: makeId(),
      sentFrom:'Puki',
      subject:'HELLO World',       
      body: "HELLO World HELLO World HELLO World HELLO World",
      isRead: false,
      sentAt :1551133930231,
      isStarred:false,
 
    },
    {
        id: makeId(),
     sentFrom:'Shmoki',
      subject:'HELLO JavaScript',       
      body: "HELLO JavaScript HELLO JavaScript HELLO JavaScript",
      isRead: false,
      sentAt :1551133930131,
      isStarred:false,

    }
   
];

window.emails=gMails;


getMails()
function getMails() {

    let emails = storageService.load(MAIL_KEY)
    if (!emails) {
        emails=gMails;
        storageService.store(MAIL_KEY, emails)
    }
    gMails = emails;
  
    // return Promise.resolve(gMails);
  }





