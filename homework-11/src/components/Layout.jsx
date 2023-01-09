import React from "react";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <TodoList />
    </>
  );
}

export default Layout;