import theRouter from '../routes.js'

export default {
  router: theRouter,

    template: `
       <section>
      <h1>Header</h1>
      <nav>
                <router-link to="/note" >Note</router-link> |
                <router-link to="/email" >Email</router-link> |
                <!-- <router-link to="/book" >Books</router-link> -->
            
            </nav>
       <router-view></router-view>

    </section>
    `,
    
}