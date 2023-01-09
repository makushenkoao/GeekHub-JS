import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import TodoInfo from "./components/TodoInfo";
import UserTodos from "./components/UserTodos";

const App = () => {
  const elements = useRoutes([
    { path: "/", element: <Layout />, },
    { path: ":id", element: <UserTodos />, },
    { path: ":id/:id", element: <TodoInfo /> },
    { path: "*", element: <NotFound /> },
  ])

  return <div className="App">{elements}</div>
}

export default App;
