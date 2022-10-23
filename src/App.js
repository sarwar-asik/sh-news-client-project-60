import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routs } from "./routs/Routs";
import { ToastContainer } from "react-bootstrap";

function App() {
  return (
    <div className="">
      <RouterProvider router={routs} />
      <ToastContainer/>
    </div>
  );
}

export default App;
