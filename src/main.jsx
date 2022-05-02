import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./scss/index.scss";
import SuccessPage from "./SuccessPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  </BrowserRouter>
);
