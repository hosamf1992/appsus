
import keepApp from '../apps/note/pages/keep-app.cmp.js';
import MissBook from '../apps/MissBooks/js/pages/book-app.cmp.js';
import mailApp from '../apps/mail/pages/email-app.cmp.js';
import emailFullDetails from '../apps/mail/cmps/email-full-deatils.cmp.js';
import composeEmail from '../apps/mail/cmps/email-compose.cmp.js'
import emailList from '../apps/mail/cmps/email-list.cmp.js'
import bookAdd from '../apps/MissBooks/js/cmps/book-add.cmp.js'
import bookDetails from '../apps/MissBooks/js/cmps/book-details.cmp.js';




const myRoutes = [

    {

      
        path: '/email',
        component: mailApp,
        children: [
            {
                path: 'compose/:id?',
                component: composeEmail
            },
            {
                path: 'list',
                component: emailList
            },
            {
                path: 'details/:id',
                component: emailFullDetails
            },


        ]
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/book',
        component: MissBook

      
    },
    {
        path: '/book/add',
        component: bookAdd
    },
   
    {
        path: '/book/details/:id',
        component: bookDetails
    },

    {
        path: '/',
        redirect: '/keep'
    },



    ,




]
const myRouter = new VueRouter({ routes: myRoutes })

export default myRouter;