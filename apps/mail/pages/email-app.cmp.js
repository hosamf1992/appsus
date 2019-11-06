

'use strict';
import { emailServices } from '../services/email-service.js'

import emailList from '../cmps/email-list.cmp.js';


Vue.config.productionTip = false



export default {
    template: `
     
      <section>
     <h1 class="email-title" >Hey mail app</h1>

     <email-list  :emails="emailsToshow" ></email-list>
    

        
        </section>
  
    `,
    data() {
        return {
            emails,


        }


    },
    methods: {



    },
    computed: {

        emailsToshow() {
            this.emails = emailServices.getMails();

        }

    },
    created() {

        emailServices.getMails()
            .then(mails => this.emails = mails,
                console.log(this.emails)

            );
    },
    components: {
        emailList,




    }
}




