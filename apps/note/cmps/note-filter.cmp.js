'use strict';

export default {
    name: 'note-filter',
    template: `
        <section class="filter-note-container flex align-center justify-center">

            <label class="label">Filter by note type: </label>
            <select class="select" v-model="filterBy.type" @mouseup="onFilterBy">
                <option v-for="type in noteTypes">{{type}}</option>
            </select>
            
            <form @submit.prevent="onFilterBy">          
                <input class="input" type="text" placeholder="Search notes" 
                v-model="filterBy.content" />   
            </form>
            
    </section>
`,
    data() {
        return {
            filterBy:
                {
                content: '',
                title: '',
                type: ''
                
            },
            noteTypes: ['','noteText', 'noteImg', 'noteTodo'],
            type:''
        }
    },
    methods: {
        onFilterBy() {
            this.$emit('filtered', this.filterBy)
        },
        
    }
}
