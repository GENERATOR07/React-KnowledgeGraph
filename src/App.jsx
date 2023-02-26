import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";

const LazyTable = React.lazy(() => import("./Components/Table"));

const LazyGraph = React.lazy(() => import("./Components/Graph"));
import Home from "./Components/Home";
import Edit from "./pages/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          index
          element={
            <React.Suspense fallback="graph toh nhi hai">
              <LazyGraph />
            </React.Suspense>
          }
        />
        <Route
          path="table"
          element={
            <React.Suspense fallback="mistake ho gya">
              <LazyTable className="col-span-4" />
            </React.Suspense>
          }
        >
          <Route path="edit" element={<Edit />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
