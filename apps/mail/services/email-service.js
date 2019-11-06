'use strict'


import { storageService } from '/js/services/util.service.js'
import { makeId } from '/js/services/util.service.js'

export const emailServices = {
  getMails,
  getEmailById,
  filterEmails,
  readMailStatus


}

const MAIL_KEY = 'mailApp';

let gEmails = [
  {
    id: 'abc',
    email: 'nana@gmail.com',
    sentFrom: 'Nana',
    subject: 'HELLO DUDE',
    body: "mi est eros convallis auctor arcu dapibus himenaeos",
    isRead: false,
    sentAt: 1551133930594,
    isStarred: false,

  },
  {
    id: 'acv',
    email: 'puki@gmail.com',

    sentFrom: 'Puki',
    subject: 'HELLO World',
    body: "HELLO World HELLO World HELLO World HELLO World",
    isRead: true,
    sentAt: 1551133930231,
    isStarred: false,

  },
  {
    id: 'alf',
    email: 'shmoki@gmail.com',
    sentFrom: 'Shmoki',
    subject: 'HELLO JavaScript',
    body: "HELLO JavaScript HELLO JavaScript HELLO JavaScript",
    isRead: false,
    sentAt: 1551133930131,
    isStarred: false,

  }

];

window.emails = gEmails;


// getMails()
function getMails() {

  let emails = storageService.load(MAIL_KEY)
  if (!emails) {
    emails = gEmails;
    storageService.store(MAIL_KEY, emails)
  }
  gEmails = emails;

  return Promise.resolve(gEmails);
}

function getEmailById(id) {
  let emailIdx = gEmails.findIndex(email => email.id === id);

  let email = gEmails[emailIdx];

  return Promise.resolve(email);

}


function filterEmails(filter, txt) {
  console.log(filter, txt)
  let filterdItems;
  if (txt !== '' && filter === 'Unread') {
    filterdItems = gEmails.filter(mails => mails.isRead === false);
    console.log(filterdItems)

    return filterdItems
  }

  if (txt !== '' && filter === 'Read') {
    filterdItems = gEmails.filter(mails => (mails.isRead === true && mails.subject === txt));
    console.log(filterdItems)

    return filterdItems
  }


}

function readMailStatus() {
  let status;
  let readedMails = gEmails.filter(mail => mail.isRead === true).length;
  status = Math.floor(100 / gEmails.length * readedMails);
  return status


}
