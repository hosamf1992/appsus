
import { emailServices } from '../services/email-service.js'



export default {


    template: `
 <section class="flex justify-center align-center flex-col" >
   
        <router-link class="flex align-center text-decor justify-center" :to="inboxLink">
         <i @click="reportFilter" class="fas fa-inbox"></i>
          <h4 class="txt-links" @click="reportFilter" >  Inbox</h4>
         </router-link>  
    
    
    <a class="flex align-center justify-center">
    <i @click="filterStared" class="fas fa-star cursor"></i>
    <h4  class="cursor txt-links"  @click="filterStared">Starred </h4>
    
      </a>
    <div class="flex align-center justify-center">
         <i class="fas fa-mail-bulk"></i> 
         <h4 class="txt-links">  Sent Mail</h4>
    </div>
  
          </section>
               
        `,

    data() {
        return {

            count: 0,
        }
    },
    methods: {
        filterStared() {
            eventBus.$emit('filter-me', 'filter');
           


        },
        reportFilter() {
            eventBus.$emit('inbox-filter', 'filter');
        }


    },
    created() {
        emailServices.countUnread()
            .then(res => this.count = res)
    }

    , computed: {
        inboxLink() {
            return `/email/list`

        },
        unreadCount() {

            emailServices.countUnread()
                .then(res => this.count = res);
            return this.count
        }




    },
    components: {

    }
}