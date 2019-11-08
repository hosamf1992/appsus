
import { emailServices } from '../services/email-service.js'



export default {


    template: `
<section >
  
     <router-link :to="inboxLink"> <h2  @click="reportFilter" >{{unreadCount}} Inbox</h2> </router-link>  
    
    <div @click="filterStared"> <h2> <span>☆</span> Starred </h2>  </div>
   
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
        .then(res =>this.count=res)
    }

    , computed: {
        inboxLink() {
            return `/email/list`

        },
        unreadCount() {

             emailServices.countUnread()
                .then(res =>this.count=res);
                return this.count
        }




    },
    components: {

    }
}