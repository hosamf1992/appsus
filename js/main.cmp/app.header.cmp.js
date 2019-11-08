import theRouter from '../routes.js'

export default {
  router: theRouter,

    template: `
       <section>
     
      <nav>
                <router-link to="/keep" >Keep</router-link> |
                <router-link to="/email/list" >Email</router-link> |
                <!-- <router-link to="/book" >Books</router-link> -->
            
            </nav>
       <router-view></router-view>

    </section>
    `,
    
}