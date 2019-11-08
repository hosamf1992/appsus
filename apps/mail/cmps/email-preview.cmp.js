import emailDetails from './email-details.cmp.js';
import { emailServices } from '../services/email-service.js'



export default {
    props: ['email'],
    template: `
            <li  @click="openEmail" >
               <div class="grid outer-mail" :class="{ readed: !email.isRead }">
               <span @click.stop="starEmail(email.id)" :class="{ red: email.isStarred}" class="email-star item">☆</span>
                <h1 class="item">  {{email.sentFrom}}</h1>
                <h1 class="subject-mail item"> {{email.subject}}</h1>
                <p class="item">{{email.time.hours}}:{{email.time.mins}}</p>

                <img class="email-box" @click.stop="mark" :src="imgMail"  height="30" width="30">
               </div>
                <email-details @close="closeEmail"  :opendemail="email" v-if="opened" ></email-details>
                </li>
               
        `,

    data() {
        return {
            opened: false,

        }
    },
    methods: {

        openEmail() {

            this.opened = !this.opened;

            emailServices.markRead(this.email.id, 'read')
                .then(eventBus.$emit('change-status', 'status'))

        },
        starEmail(id) {

            emailServices.markStar(id).then(console.log('star'))
        },

        closeEmail(val) {

            this.opened = val
            console.log(val)
        },
        mark() {
            emailServices.markRead(this.email.id, 'unread').then
                (eventBus.$emit('change-status', 'status'))
            this.opened = false

        }


    },

    // watch: {
    //     filterd(val) {
    //         if (val.isRead === 'Unread') 
    //             {
    //                 emailServices.markRead(this.email.id, 'unread')
    //                 .then(eventBus.$emit('change-status', 'status'))
    //             }


    //         }

    //     },
        created() {

        }

        , computed: {

            emailDetailsLink() {
                return `/email/${this.email.id}`
            },

            imgMail() {

                if (this.email.isRead === false) {
                    return `img/mail/close-mail.jpg`
                }
                if (this.email.isRead === true) {
                    return `img/mail/open-mail.jpg`
                }
            }




        },
        components: {
            emailDetails,

        }
    }