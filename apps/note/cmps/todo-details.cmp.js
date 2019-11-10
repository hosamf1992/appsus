'use strict'

export default {
  template: `
        <section >
          <div >
          <div 
          :class="{notActive: !toDoIsActive, isHidden: !toDoIsShown}" 
          @click.stop="markNote">{{todo.txt}}   
           <button @click="deleteToDo" :class="{isHidden: !btnIsShown}">
             x</button>
          </div>
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


// :class="{isHidden: !toDoIsShown}"