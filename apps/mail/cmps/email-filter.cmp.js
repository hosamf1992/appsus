


export default {

    template: `
    <section class="email-filter text-center">
   
    <input type="text" placeholder="Search Email" v-model="filterBy.name" />
    <select  v-model="filterBy.isRead">
     <option selected  value="All">All</option>
     <option value="Read">Read</option>
     <option  value="Unread">Unread</option>
     <option  value="Date">Date</option>

     
    </select>
    <button @click=filter>Search</button>
    </section>
    `,

    data() {
        return {
            filterBy: {
                name: '',
                isRead: 'All'
            }
        }
    },
    created() {


    }

    , methods: {

        filter() {
            this.$emit('filtered', this.filterBy);

        }
    },

}