
import { emailServices } from '../services/email-service.js'



export default {


    template: `
<section class="flex justify-center align-center flex-col" >
    <div>
        <router-link class="flex align-center" :to="inboxLink">
        <i class="fas fa-inbox"></i>
          <h3  @click="reportFilter" >  Inbox</h3>
         </router-link>  
      </div>
    
    <div class="flex align-center">
    <i class="fas fa-star"></i>
     <h3 class="cursor"  @click="filterStared">Starred </h3>
    
      </div>
    <div class="flex align-center">
         <i class="fas fa-mail-bulk"></i> 
         <h3>  Sent Mail</h3>
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
            // return this.$router.push({ name: '/email/list' })


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