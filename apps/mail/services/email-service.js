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
  sendReply,
  sendToNote


}

const MAIL_KEY = 'mailApp';

let gEmails = [
  {
    id: makeId(),
    email: 'nana@gmail.com',
    sentFrom: 'Walla',
    subject: 'Learn javascript in 12 weeks!!!!',
    body: "Fake email service that does not require registration and displays email instantly. Fake email generator works with any services and there is no limit.",
    
    
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt: 1573203


  },
  {
    id: makeId(),
    email: 'puki@gmail.com',
    sentFrom: 'Hosam',
    subject: 'you won 1000 dollars, read more..',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi",

    isRead: false,
    time: getTime(),
    isStarred: true,
    sentAt: Date.now()

  },
  {
    id: makeId(),
    email: 'luki@gmail.com',
    sentFrom: 'Puki',
    subject: 'Remove ads in 1 click!',
    body: "Ads allow us to feed your daily addiction for the world's greatest news, sport and gossip. If your favourite price for MailOnline is free, please allow ads on this site."
    ,
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt: Date.now()


  },
  {
    id: makeId(),
    email: 'ads1@gmail.com',
    sentFrom: 'Sasha',
    subject: 'HELLO JavaScript-HELLO JavaScript',
    body: "Email spam, also referred to as junk email, is unsolicited messages sent in bulk by email ... Spam is also a medium for fraudsters to scam users into entering personal information on fake Web sites using emails forged to look like they are from ... Often, image spam contains nonsensical, computer-generated text which simply",
   
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt: Date.now()


  },
  {
    id: makeId(),
    email: 'grey@gmail.com',
    sentFrom: 'Golda',
    subject: 'Learn How To Pass Data Between Routes In A Vue.js Web Application',
    body: "Often, when building navigation into your application, you’ll find that you need to pass data from one screen to another. For example, maybe you’re following the master-detail pattern where you have a list of data and you get more information about a particular item in the list by drilling deeper."
    ,
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt: Date.now()


  }, {
    id: makeId(),
    email: 'w3schools@gmail.com',
    sentFrom: 'Rita',
    subject: 'Using Query Parameters to Pass Data Between Routes',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi"
    ,
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt: Date.now()


  },
  
  {
    id: makeId(),
    email: 'ads1@gmail.com',
    sentFrom: 'Sasha',
    subject: 'HELLO JavaScript-HELLO JavaScript',
    body: "Email spam, also referred to as junk email, is unsolicited messages sent in bulk by email ... Spam is also a medium for fraudsters to scam users into entering personal information on fake Web sites using emails forged to look like they are from ... Often, image spam contains nonsensical, computer-generated text which simply",
 
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt: Date.now()


  },
  {
    id: makeId(),
    email: 'grey@gmail.com',
    sentFrom: 'Golda',
    subject: 'Learn How To Pass Data Between Routes In A Vue.js Web Application',
    body: "Often, when building navigation into your application, you’ll find that you need to pass data from one screen to another. For example, maybe you’re following the master-detail pattern where you have a list of data and you get more information about a particular item in the list by drilling deeper."
    ,
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt: Date.now()


  }, {
    id: makeId(),
    email: 'w3schools@gmail.com',
    sentFrom: 'Rita',
    subject: 'Using Query Parameters to Pass Data Between Routes',
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia incidunt, fuga dignissimos omnis doloribus optio nam libero cupiditate ad asperiores voluptatibus quis nesciunt, esse officiis! Assumenda iste vero animi"
    ,
    isRead: false,
    time: getTime(),
    isStarred: false,
    sentAt: Date.now()


  },

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
    sentAt: Date.now()



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
  let count = 0;
  gEmails.forEach(email => count += email.isRead === false);
  return Promise.resolve(count);

}

function sendReply(id, txt) {
  let emailIdx = gEmails.findIndex(email => email.id === id);
  console.log(emailIdx)
  gEmails[emailIdx].body = txt;
  storageService.store(MAIL_KEY, gEmails);
  return Promise.resolve();


}

function sendToNote(id) {
  let emailIdx = gEmails.findIndex(email => email.id === id);
  let email = gEmails[emailIdx];
  let note;
  let text = `   
  Sent From: ${email.sentFrom}
  Subject: ${email.subject}
  

  `
  note = {
    txt: text,
    type: 'noteText'
  }
  return note;

}