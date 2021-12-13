import "../styles/App.css";
import React from "react";
import RegisterOrLogin from "./RegisterOrLogin";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ProfileMain from "./ProfileMain";
import TextEditor from "./TextEditor";
import { Suspense } from "react";

const ToastContainer = React.lazy(() =>
  import("react-toastify").then((mod) => ({
    default: mod.ToastContainer,
  }))
);

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Routes>
        <Route path="/" element={<RegisterOrLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<ProfileMain />} />
        <Route path="/me/writeTodo" element={<TextEditor />} />
        <Route path="/*" element={<Navigate to="" replace={true} />} />
      </Routes>
      <Suspense fallback={<div>Loading</div>}>
        <ToastContainer
          position="bottom-right"
          //  toastStyle={{ backgroundColor: "crimson" }}
        />
      </Suspense>
    </div>
  );
}

export default App;
