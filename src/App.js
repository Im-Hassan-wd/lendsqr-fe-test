import { Routes, Route } from "react-router-dom"
// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import UserDetails from "./pages/user-details/UserDetails";
import User from "./pages/users/User";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user" element={<User />} />

        <Route>
          <Route index element={<User />} />
          <Route path='user' element={<User />} />
          <Route path='/user/:id' element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
  
}
export default App;