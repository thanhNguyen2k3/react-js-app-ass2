import AdminCreate from '../pages/AdminCreate';
import AdminDashboard from '../pages/AdminDashboard';
import AdminUpdate from '../pages/AdminUpdate';
import Category from '../pages/Category';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const privateRouter = [
    {
        path: '/admin',
        component: AdminDashboard,
    },
    {
        path: '/admin/create',
        component: AdminCreate,
    },
    {
        path: '/admin/update/:id',
        component: AdminUpdate,
    },
    // {
    //     path: '/login',
    //     component: Login,
    // },
    // {
    //     path: '/signup',
    //     component: Signup,
    // },
    {
        path: '/admin/category',
        component: Category,
    },
];

export { privateRouter };
