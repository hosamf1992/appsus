
import todoDetails from './todo-details.cmp.js'

export default {
  template: `
        <section class="note note-text" :style="{ backgroundColor: value.bgc}">
          <div>To Do:</div>
          <div :toDoTxts="splitValue" v-for="toDoTxt in splitValue" 
                :createToDos="createToDos(toDoTxt)" >
              <todo-details :todo="todo" @removeToDo="removeTodo"></todo-details>
          </div>
          <button v-if="value.isPinned"><img src="img/note/pin1.png"></button> 
        </section>
        `,
  props: ["value"],
  methods: {
    createToDos(toDoTxt){
      let todo = {
            id:this.value.id,
            txt: toDoTxt,
            isActive: true,
            color: 'yellow',
            priority: 'high',
        }
        this.todo = todo
    },
    removeTodo(){
      console.log(this.todo.txt)
      console.log(this.splitValue)
      let idx = this.splitValue.findIndex(txt=>txt===this.todo.txt)
      this.splitValue.splice(idx,1)
      console.log(this.splitValue)
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