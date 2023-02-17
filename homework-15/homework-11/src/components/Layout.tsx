import React, {FC} from "react";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

const Layout: FC = () => {
  return (
    <>
      <Sidebar />
      <TodoList />
    </>
  );
}

export default Layout;