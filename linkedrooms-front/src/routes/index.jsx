import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppProvider } from "../providers/AppContext";

// import PrivateRoute from "./../services/Private";

import Dashboard from "../pages/dashboard";
import Room from "../pages/Room";
import CreateClasses from "../pages/createClasses";

export default function Router() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<h1>Olá mundo</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/room/:blockId/:number" element={<Room/>} />
          <Route path="/create-class" element={<CreateClasses />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
