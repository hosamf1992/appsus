

'use strict';
import { emailServices } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import emailSide from '../cmps/email-side.cmp.js';

Vue.config.productionTip = false




export default {
    template: `
     
      <section>
     <h1 class="email-title" >Hey mail app</h1>
     <email-filter  @filtered="setFilter"></email-filter>
     <email-list  :emails="emailsToshow" ></email-list>
     <email-side ></email-side>

        </section>
  
    `,
    data() {
        return {
            emails: [],
            filterBy: null,
          

        }

    },
    methods: {

        setFilter(filterBy) {
            console.log('Parent got filter:', filterBy);
            this.filterBy = filterBy
        },
      
       
        

    },
    computed: {

        emailsToshow() {

            if (!this.filterBy) return this.emails;

            // else {
            //     this.emails = emailServices.filterEmails(this.filterBy.isRead, this.filterBy.txt)
            // }

        },
      
       

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
        emailFilter,
        emailSide



    }
}




