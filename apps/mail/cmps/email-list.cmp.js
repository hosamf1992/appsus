import emailPreview from './email-preview.cmp.js';
import { emailServices } from '../services/email-service.js'
import emailFilter from '../cmps/email-filter.cmp.js';
import { eventBus } from '../../../js/services/event-bus.service.js'





export default {
    template: `


   
    <section class="email-list-container">


    <email-filter  @filtered="setFilter"></email-filter>
        <ul class="mails-list " >

           <email-preview  v-for="currEmail in emailToShow" :key="currEmail.id"  :email="currEmail"></email-preview> 
   
        </ul>
    </section>
    `,

    data() {
        return {
            results: [],

            filterBy: null,

        }
    },

    methods: {

        setFilter(filterBy) {
            console.log('Parent got filter:', filterBy);
            this.filterBy = filterBy


        },
    },
    created() {

        emailServices.getEmails().then(res => this.results = res);
        console.log(this.results);



        eventBus.$on('filter-me', (msg) => {
         
            this.results = this.results.filter(mails => (mails.isStarred === true))

        });

        eventBus.$on('inbox-filter', (msg) => {


             emailServices.getEmails().then(res => this.results = res);
            // this.results = this.results.filter(mails => (mails.isStarred === true))

        })




    }

    , computed: {




        emailToShow() {

            let temp = [];
            temp = this.results;
            if (!this.filterBy) return this.results;

            var regex = new RegExp(`${this.filterBy.name}`, 'i');

            if (this.filterBy.isRead === 'Read') {
                return temp.filter(mails => (mails.isRead === true));

            }
            if (this.filterBy.isRead === 'Unread') {
                return temp = this.results.filter(mails => (mails.isRead === false));
            }

            if (this.filterBy.isRead === 'All') {
                return temp
            }
           
        },



    },
    components: {
        emailPreview,
        emailFilter

    }
}