import './App.css';
import ItemValueList from './Component/ItemValueList';
import React, { useState } from "react";
import AuthContextProvider from './Component/AuthContext';
import Login from './Component/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    <AuthContextProvider>
      {/* <Login /> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/ItemValueList" exact element={<ItemValueList />} />
        </Routes>

      </Router>
      {/* <Login />
      <ItemValueList /> */}
    </AuthContextProvider>

  );
}

export default App;
