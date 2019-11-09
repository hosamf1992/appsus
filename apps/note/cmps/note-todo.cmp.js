
import todoDetails from './todo-details.cmp.js'

export default {
  template: `
        <section class="note note-text" :style="{ backgroundColor: value.bgc}">
          <div>To Do:</div>
          <div :toDoTxts="splitValue" v-for="toDoTxt in splitValue" 
          :createToDos="createToDos(toDoTxt)">

              <todo-details :todo="todo"></todo-details>
              
          </div>
          <button v-if="value.isPinned"><img src="img/note/pin1.png"></button> 
        </section>
        `,
  props: ["value"],
  data() {
    return {
       
    }
},
  methods: {
    createToDos(toDoTxt){
      let todo = {
            txt: toDoTxt,
            isActive: true,
            color: 'yellow',
            priority: 'high',
        }
        this.todo = todo
    }
     },

  computed: {
    splitValue() {
      let str = this.value.content
      let splitStr = str.split(", ")
      return splitStr
    }
  },
  components: {
      todoDetails
  }
};