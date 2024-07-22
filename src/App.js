import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/home"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home1 from "./screens/Home1.js";

// const router = createBrowserRouter([
//   {
//     path: "/home",
//     element: <Home />,
//   },
// ]);

function App() {
  return (
    // <div>
    //   {/* <About /> */}
    //   <RouterProvider router={router} />
    // </div>

    <>
       <Home1/>
    </>
  );
}

export default App;
