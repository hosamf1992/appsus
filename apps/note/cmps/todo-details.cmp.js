'use strict'

export default {
  template: `
        <section >
          <div class="todo-item flex flex-row space-between" >
          <div 
          :class="{notActive: !toDoIsActive, isHidden: !toDoIsShown}" 
          @click.stop="markNote">{{todo.txt}}  
          </div>
          <div @click.stop="deleteToDo" :class="{isHidden: !btnIsShown}">X</div>
          </div>
        </section>
        `,
  props: ["todo"],
  data(){ 
      return{
            toDoIsActive: true,
            toDoIsShown: true,
            btnIsShown: true,
          }
        },

  methods: {
          markNote(){
          this.toDoIsActive = !this.toDoIsActive 
    },
          deleteToDo() {
            this.toDoIsShown = !this.toDoIsShown;
            this.btnIsShown = !this.btnIsShown 
            this.$emit('removeToDo', this.todo)
           
          },
    },
};

