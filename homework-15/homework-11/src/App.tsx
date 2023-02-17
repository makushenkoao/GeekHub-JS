import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import TodoInfo from "./components/TodoInfo";
import UserTodos from "./components/UserTodos";

const App = () => {
  const elements = useRoutes([
    { path: "/", element: <Layout />, },
    { path: "/user/:id", element: <UserTodos />, },
    { path: "user/:id/todo/:id", element: <TodoInfo /> },
    { path: "*", element: <NotFound /> },
  ])

  return <div className="App">{elements}</div>
}

export default App;