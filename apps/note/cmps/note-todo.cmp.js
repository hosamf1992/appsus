import { noteService } from "../services/note-service.js"

export default {
  template: `
        <section>
            <h2 v-for="(val) in value.content">{{val.toDoContent}}
            <button @click="removeToDo(value.id,val.toDoId)">x</button>
            </h2>
        </section>
        `,
  props: ["value"],
  
  methods: {
        removeToDo(noteId, toDoId) {
          console.log(noteId, toDoId)
            noteService.removeToDo(noteId, toDoId)
        }
    },
  computed: {
    
  }
};




//   props: ['data'],
//   template: `
//       <section class="todo-note">
//           <div v-for="todo in data" @click="toggleIsDone(todo)">
//               <input type="checkbox" :id="todo.id" :checked="!!todo.isDone" />
//               <label for="todo.id" :class="{ marked: todo.isDone }">{{todo.txt}}</label>
//           </div>
//       </section>
//   `,
//   methods: {
//       toggleIsDone(todo) {
//           var isDone = !todo.isDone
//           todo.isDone = isDone
//       }
//   }
// }