
import noteApp from '../apps/note/pages/note-app.cmp.js';
import mailApp from '../apps/mail/pages/mail-app.cmp.js';



const myRoutes = [
    
    {
        path: '/email',
        component: mailApp
    },
    {
        path: '/note',
        component: noteApp
    },

    // {
    //     path: '/book',
    //     component: bookApp
    // }

 
]
const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;