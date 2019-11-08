'use strict'


import { storageService } from '../../../js/services/util.service.js'
import { makeId } from '../../../js/services/util.service.js'


export const emailServices = {
  getEmails,
  getEmailById,
  
  readMailStatus,
  sendEmail,
  removeEmail,
  markRead,
  markStar,
  countUnread,
  sendReply


}

const MAIL_KEY = 'mailApp';

let gEmails = [
  {
    id: makeId(),
    email: 'nana@gmail.com',
    sentFrom: 'Walla',
    subject: 'HELLO DUDE-HELLO DUDE',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi"
    ,
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt:1573203


  },
  {
    id: makeId(),
    email: 'puki@gmail.com',
    sentFrom: 'Nana',
    subject: 'HELLO JavaScript-HELLO JavaScript',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi",

    isRead: false,
    time: getTime(),
    isStarred: true,
    sentAt:Date.now()

  },
  {
    id: makeId(),
    email: 'shmoki@gmail.com',
    sentFrom: 'Puki',
    subject: 'HELLO JavaScript-HELLO JavaScript',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi"
    ,
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt:Date.now()


  },
  {
    id: makeId(),
    email: 'shmoki@gmail.com',
    sentFrom: 'Hosam',
    subject: 'HELLO JavaScript-HELLO JavaScript',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi"
    ,
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt:Date.now()


  },
  {
    id: makeId(),
    email: 'shmoki@gmail.com',
    sentFrom: 'Golda',
    subject: 'HELLO JavaScript-HELLO JavaScript',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi"
    ,
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt:Date.now()


  },{
    id: makeId(),
    email: 'shmoki@gmail.com',
    sentFrom: 'Rita',
    subject: 'HELLO JavaScript-HELLO JavaScript',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi"
    ,
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt:Date.now()


  },{
    id: makeId(),
    email: 'shmoki@gmail.com',
    sentFrom: 'Shmoki',
    subject: 'HELLO JavaScript-HELLO JavaScript',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi"
    ,
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt:Date.now()


  },{
    id: makeId(),
    email: 'shmoki@gmail.com',
    sentFrom: 'Shmoki',
    subject: 'HELLO JavaScript-HELLO JavaScript',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi"
    ,
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt:Date.now()


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
    time: getTime(),
    isStarred: false,
    sentAt:Date.now()



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

function countUnread() {
  let count=0;
  gEmails.forEach(email => count+= email.isRead === false);
  return Promise.resolve(count);

}

function sendReply(id,txt){
  let emailIdx = gEmails.findIndex(email => email.id === id);
  console.log(emailIdx)
  gEmails[emailIdx].body=txt;
  storageService.store(MAIL_KEY, gEmails);
  return Promise.resolve();


}
