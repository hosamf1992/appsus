'use strict'


import { storageService } from '/js/services/util.service.js'
import { makeId } from '/js/services/util.service.js'

export const emailServices = {
  getEmails,
  getEmailById,
  filterEmails,
  readMailStatus,
  sendEmail
 

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
    isRead: true,
    sentAt: 1551133930131,
    isStarred: false,

  }

];


window.emails=gEmails;

function getEmails() {

  let emails = storageService.load(MAIL_KEY)

  if (!emails) {
    emails = gEmails;
    storageService.store(MAIL_KEY, emails)
  }
  gEmails = emails;
  console.log(gEmails)
  return gEmails
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
  if (filter === 'Unread') {
    filterdItems = gEmails.filter(mails => (mails.isRead === false));
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
  let readedMails = gEmails.filter(mail => (mail.isRead === true));
  console.log(readedMails)

  status = Math.floor(100 / gEmails.length * readedMails.length);
  console.log(status)
  return status


}


function sendEmail(mail) {

  let newMail = {

    id: makeId(),
    email: mail.to,
    sentFrom: mail.from,
    subject: mail.subject,
    body: mail.body,
    isRead: false,
    sentAt: Date.now(),
    isStarred: false,


  }

  gEmails.unshift(newMail);
  storageService.store(MAIL_KEY, gEmails);

}