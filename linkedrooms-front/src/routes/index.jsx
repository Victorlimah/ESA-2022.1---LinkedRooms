import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppProvider } from "../providers/AppContext";

// import PrivateRoute from "./../services/Private";

import Dashboard from "../pages/dashboard";
import Room from "../pages/Room";

import SignIn from "../pages/signin/signin";
import SignUp from "../pages/signup/signup";
import Access from "../pages/access/access";
import CreateClasses from "../pages/createClasses";
import Admin from "../pages/Admin";
import ViewCrud from "../pages/ViewCrud";

export default function Router() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/authentication" element={<Access />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/room/:blockId/:number" element={<Room/>} />
          <Route path="/create-class" element={<CreateClasses />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/crud/:entity" element={<ViewCrud />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>      
      </AppProvider>
    </BrowserRouter>
  );
}
