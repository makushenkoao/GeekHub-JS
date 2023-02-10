import React from 'react';
import {Stories} from "./components/Stories";
import {useRoutes} from "react-router-dom";
import {Story} from "./components/Story";
import {NotFound} from "./components/NotFound";

export const App = () => {
    return useRoutes([
        {path: '/', element: <Stories/>},
        {path: '/story/:id', element: <Story/>},
        {path: 'notfound', element: <NotFound/>},
        {path: '*', element: <NotFound/>}
    ])
};