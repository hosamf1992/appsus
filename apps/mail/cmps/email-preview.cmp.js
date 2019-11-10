import emailDetails from './email-details.cmp.js';
import { emailServices } from '../services/email-service.js'
import longText from '../../../js/main.cmp/long-text.cmp.js';



export default {
    props: ['email', 'filterd'],
    template: `
            <li class="cursor"  @click="openEmail" >
               <div class="grid outer-mail" :class="{ readed: !email.isRead }">
               <span @click.stop="starEmail(email.id)">
               <i v-if="!email.isStarred" class="far fa-star yellow list-star"  > </i>
               <i v-if="email.isStarred" class="fas fa-star yellow list-star"  >    </i>
              
               </span>
                <h1 class="item">  {{email.sentFrom}}</h1>

                <h1 class="subject-mail item"> <long-text :txt="email.subject"></long-text></h1>
                
                <p class="item">{{email.time.hours}}:{{email.time.mins}}</p>

                <img class="email-box" @click.stop="mark" :src="imgMail"  height="25" width="25">
               <span class="flex align-center"> <i @click.stop="sendToNote(email.id)" class="far fa-sticky-note note-icon"></i></span>


                <i @click.stop="deleteEmail(email.id)" class="fa fa-trash trash" aria-hidden="true"></i>
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
            if(this.filterd){
                if (this.filterd.isRead === 'Unread') return emailServices.markRead(this.email.id, 'unread')
                .then(eventBus.$emit('change-status', 'status'))
            }
         
            emailServices.markRead(this.email.id, 'read')
                .then(eventBus.$emit('change-status', 'status'))

        },
        starEmail(id) {

            emailServices.markStar(id).then(console.log('star'))
        },
        deleteEmail(id) {
            emailServices.removeEmail(id).then(console.log('removed'))
            eventBus.$emit('change-status', 'status');
        },

        closeEmail(val) {

            this.opened = val
            console.log(val)
        },
        mark() {
            emailServices.markRead(this.email.id, 'unread').then
                (eventBus.$emit('change-status', 'status'))
            this.opened = false

        },


        sendToNote(id){
            console.log('sending to note',id)
            emailServices.sendToNote(id);
        }
    },


    
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
        longText

    }
}