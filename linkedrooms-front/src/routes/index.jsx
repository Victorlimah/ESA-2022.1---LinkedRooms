import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppProvider } from "../providers/AppContext";

// import PrivateRoute from "./../services/Private";

import Dashboard from "../pages/dashboard";
import Room from "../pages/Room";

export default function Router() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<h1>Olá mundo</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/room/:id" element={<Room/>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}