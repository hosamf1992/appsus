'use strict'


import { storageService } from '../../../js/services/util.service.js'
import { makeId } from '../../../js/services/util.service.js'


export const emailServices = {
  getEmails,
  getEmailById,
  filterEmails,
  readMailStatus,
  sendEmail,
  removeEmail,
  markRead,
  markStar


}

const MAIL_KEY = 'mailApp';

let gEmails = [
  {
    id: 'abc',
    email: 'nana@gmail.com',
    sentFrom: 'Nana',
    subject: 'HELLO DUDE',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi"
    ,
    isRead: false,
    sentAt: getTime(),
    isStarred: false,

  },
  {
    id: 'acv',
    email: 'puki@gmail.com',
    sentFrom: 'Puki',
    subject: 'test',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi",

    isRead: false,
    sentAt: getTime(),
    isStarred: true,

  },
  {
    id: 'alf',
    email: 'shmoki@gmail.com',
    sentFrom: 'Shmoki',
    subject: 'HELLO JavaScript',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi"
    ,
    isRead: false,
    sentAt: getTime(),
    isStarred: false,

  }

];


window.emails = gEmails;

function getEmails() {

  let emails = storageService.load(MAIL_KEY)

  if (!emails) {
    emails = gEmails;
    storageService.store(MAIL_KEY, emails)
  }
  gEmails = emails;
  console.log(gEmails)
  return Promise.resolve(gEmails);
  return gEmails
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
  if (gEmails.length === 0) return status = 0;
  let readedMails = gEmails.filter(mail => (mail.isRead === true));
  console.log(readedMails)

  status = Math.floor(100 / gEmails.length * readedMails.length);
  return Promise.resolve(status);



}


function sendEmail(mail) {

  let newMail = {

    id: makeId(),
    email: mail.to,
    sentFrom: mail.from,
    subject: mail.subject,
    body: mail.body,
    isRead: false,
    sentAt: getTime(),
    isStarred: false,


  }

  gEmails.unshift(newMail);
  storageService.store(MAIL_KEY, gEmails);
  return Promise.resolve();



}

function removeEmail(id) {
  let emailIdx = gEmails.findIndex(email => email.id === id)
  gEmails.splice(emailIdx, 1)
  storageService.store(MAIL_KEY, gEmails);
  return Promise.resolve();


}

function markRead(id, status) {
  if (status === 'read') status = true;
  if (status === 'unread') status = false;
  console.log(status)
  let emailIdx = gEmails.findIndex(email => email.id === id);
  gEmails[emailIdx].isRead = status;
  storageService.store(MAIL_KEY, gEmails);
  return Promise.resolve();


}


function getTime() {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  return {
    hours: (hours < 10 ? '0' : '') + hours,
    mins: (mins < 10 ? '0' : '') + mins,
  }

}

function markStar(id) {
  let emailIdx = gEmails.findIndex(email => email.id === id);
  let toggleStar = gEmails[emailIdx].isStarred;
  gEmails[emailIdx].isStarred = !toggleStar;
  storageService.store(MAIL_KEY, gEmails);
  return Promise.resolve();

}

