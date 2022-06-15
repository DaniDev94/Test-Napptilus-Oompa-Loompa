import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import WorkersListPage from "./pages/WorkersListPage/WorkersListPage";
import WorkersDetailPage from "./pages/WorkersListPage/WorkerDetailPage/WorkerDetailPage";

export default function App() {
  return (
    <div data-testid="App" className="App">
      <Header></Header>
      <Routes>
        <Route path="/">
          <Route index element={<WorkersListPage></WorkersListPage>} />
          <Route path="/detail/:characterId" element={<WorkersDetailPage></WorkersDetailPage>} />
        </Route>
      </Routes>
    </div>
  );
}
