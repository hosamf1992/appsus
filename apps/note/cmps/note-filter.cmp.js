'use strict';

export default {
    name: 'note-filter',
    template: `
        <section class="note-filter-container">
            <form @submit.prevent="onFilter">
                
                <input class="input" type="text" placeholder="Search notes" v-model="filterBy.content" />
                
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
