import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import StudentProvider from "./context/StudentProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StudentProvider>
    <App />
  </StudentProvider>
);
