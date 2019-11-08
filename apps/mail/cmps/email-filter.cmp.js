import emailPreview from './email-preview.cmp.js';



export default {

    template: `
    <section class="email-filter">
    <h2> FilterBy</h2>
    <input type="text" placeholder="Search Email" v-model="filterBy.name" />
    <select v-model="filterBy.isRead">
     <option value="All">All</option>
     <option value="Read">Read</option>
     <option value="Unread">Unread</option>
     
    </select>
    <button @click=filter>Search</button>
    </section>
    `,

    data() {
        return {
            filterBy: {
                name: '',
                isRead: ''
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