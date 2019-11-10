'use strict';

export default {
    name: 'note-filter',
    template: `
        <section class="filter-note-container flex align-center justify-center">
            <div class="filter-selector flex">
            <label class="label"> Filter notes: </label>
            <select class="select" v-model="filterBy.type" @mouseup="onFilterBy">
                <option v-for="type in noteTypes">{{type}}</option>
            </select>
            </div>
            <section class="filter-container">
                <form @submit.prevent="onFilterBy" class="filter-form">          
                <input class="input" type="text" placeholder="Search notes" 
                v-model="filterBy.content" />
             
            </form>
</section>
            
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
