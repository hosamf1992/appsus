'use strict';

export default {
    name: 'note-filter',
    template: `
        <section class="filter-note-container flex align-center justify-center">
             
            <select class="select" v-model="onFilterByText">
                <option value="noteText">Text</option>
                <option value="noteImg">Image</option>
                <option value="noteTodo">To do</option>
            </select>
            <form @submit.prevent="onFilterByText">          
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
                title: ''
            }
        }
    },
    
    methods: {
        onFilterByText() {
            console.log('Filter Created', this.filterBy);
            this.$emit('filtered', this.filterBy)
        }
    }
}

// section class="add-note-container flex align-center justify-center">
//       <select class="select" v-model="val.type">
//           <option value="noteText">Text</option>
//           <option value="noteImg">Image</option>
//           <option value="noteTodo">To do</option>
//         </select>
//         <input class="input" type="text" placeholder="What's on your mind?"
//          v-model="val.txt" @keyup.enter="addNote"/>
// </section>


{/* <select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<br>
<span>Selected: {{ selected }}</span> */}