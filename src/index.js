import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./global.styles";
import Loader from "./components/Loader/Loader";

const App = lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
