import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
