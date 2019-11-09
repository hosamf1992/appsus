

'use strict';
import { emailServices } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailSide from '../cmps/email-side.cmp.js';

Vue.config.productionTip = false



{/* <email-filter  @filtered="setFilter"></email-filter> */}

export default {
    template: `
     
      <section class="email-container">
      <email-side ></email-side>
      <router-view></router-view>

        </section>
  
    `,
    data() {
        return {
            emails: [],
            // filterBy: null,
          

        }

    },
    methods: {
       
     
    
    },
    computed: {

        // emailsToshow() {

        //     if (!this.filterBy) return this.emails;

            // else {
            //     this.emails = emailServices.filterEmails(this.filterBy.isRead, this.filterBy.txt)
            // }

        // },
      
       

    },
    created() {
        this.emails = emailServices.getEmails();
        console.log(this.emails)


        // emailServices.getEmails()
        //     .then(mails => this.emails = mails,
        //         );

    },
    components: {
        emailList,
        // emailFilter,
        emailSide



    }
}




