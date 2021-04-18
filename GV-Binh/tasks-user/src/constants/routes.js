import Users from "../component/Users";
import Tasks from "../component/Tasks";

const routes = [
    {
        path: '/user',
        component: () => <Users />,
        exact: true
    },
    {
        path: '/task',
        component: () => <Tasks />,
        exact: true
    }
];

export default routes;

