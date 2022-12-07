import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppProvider } from "../providers/AppContext";

// import PrivateRoute from "./../services/Private";

import Dashboard from "../pages/dashboard";
import Room from "../pages/Room";
import SignIn from "../pages/signin/signin";

export default function Router() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/room/:id" element={<Room/>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>      
      </AppProvider>
    </BrowserRouter>
  );
}
