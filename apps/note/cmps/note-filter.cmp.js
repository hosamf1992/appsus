'use strict';

export default {
    name: 'note-filter',
    template: `
        <section class="note-filter">

        <form @submit.prevent="onFilter">
        Filter by Content:
        <input type="text" placeholder="Search notes" v-model="filterBy.content" />
        <button>Filter</button>
        </form>

</section>
`,
    data() {
        return {
            filterBy:
                {
                content: '',
                title: ''
            }
        }
    },
    
    methods: {
        onFilter() {
            console.log('Filter Created', this.filterBy);
            this.$emit('filtered', this.filterBy)
        }
    }
}
