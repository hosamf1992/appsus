
import noteTodoDetails from './note-todo-details.cmp.js'

export default {
  template: `
        <section class="note note-text" :style="{ backgroundColor: value.bgc}">
          <div>To Do:</div>
          <div :toDoTxts="splitValue" v-for="toDoTxt in splitValue" >
              <note-todo-details  
                :todoItem="toDoTxt">
              </note-todo-details>
          </div>
          <button v-if="value.isPinned"><img src="img/note/pin1.png"></button> 
        </section>
        `,
  props: ["value"],
  data() {
    return {
        isActive: true,

    }
},
  methods: {
    createTodo () {
      toDoTxt
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
      noteTodoDetails
  }
};