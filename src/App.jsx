import "./App.css";
import { Route, Routes } from "react-router-dom";

import Graph from "./Components/Graph";
import Table from "./Components/Table";
import Home from "./Components/Home";
import Edit from "./pages/Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Graph className="" />} />
        <Route path="table" element={<Table className="col-span-4" />}>
          <Route path="edit" element={<Edit />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
