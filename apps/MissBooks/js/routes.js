
import bookApp from './pages/book-app.cmp.js';
import bookDetails from './cmps/book-details.cmp.js';
import bookAdd from './cmps/book-add.cmp.js';






const myRoutes = [
    
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/add',
        component: bookAdd
    },
   
    {
        path: '/book/details/:id',
        component: bookDetails
    },

   
   
    
]
const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;