'use strict'


export default {
  template: `
        <section>
          <div 
          :class="{notActive: !toDoIsActive, isHidden: !toDoIsShown}" @click="markNote">
           {{todo.txt}}   
           <button @click="deleteToDo" :class="{isHidden: !btnIsShown}">
             x</button>
          </div>
          
        </section>
        `,
        data(){ 
          return{
            toDoIsActive: true,
            toDoIsShown: true,
            btnIsShown: true,
          }
        },
  props: ["todo"],
  methods: {
          markNote(){
          this.toDoIsActive = !this.toDoIsActive 
    },
          deleteToDo() {
            this.toDoIsShown = !this.toDoIsShown;
            this.btnIsShown = !this.btnIsShown 
          },
    },
};


// :class="{isHidden: !toDoIsShown}"