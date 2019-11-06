'use strict';

export default {
    name: 'note-filter',
    template: `
<section class="note-filter">
<h2>Filter by</h2>
<form @submit.prevent="onFilter">
Content:
<input type="text" placeholder="Note content" v-model="filterBy.content" />
Title: 
<input class="title-input" type="text" v-model.number="filterBy.title" />

</form>
</section>
`,
    data() {
        return {
            filterBy: {content: '', title: ''}
        }
    },
    
    methods: {
        onFilter() {
            let filter = {...this.filterBy};
            this.$emit('filtered', filter);
        }
    }
}


