import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routs } from "./routs/Routs";

function App() {
  return (
    <div className="">
      <RouterProvider router={routs} />
    </div>
  );
}

export default App;
