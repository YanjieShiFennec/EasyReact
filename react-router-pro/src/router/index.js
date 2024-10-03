import Login from "../page/Login";
import Article from "../page/Article";
import {createBrowserRouter} from "react-router-dom";
import Layout from "../page/Layout";
import Board from "../page/Board";
import About from "../page/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            // 设置为默认二级路由 一级路由访问时，它也能得到渲染
            {
                index: true,
                element: <Board/>
            },
            {
                path: 'about',
                element: <About/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/article/:id/:name',
        element: <Article/>
    }
]);

export default router;