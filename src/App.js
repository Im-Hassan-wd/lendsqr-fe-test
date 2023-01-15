import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
// hooks
import useFetch from "./Hooks/useFetch";
// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import UserDetails from "./pages/user-details/UserDetails";
import User from "./pages/users/User";
import NotFound from "./pages/404/NotFound";

function App() {
  const { data: user, isPending, error} = useFetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
  const [filterContainer, setFilterContainer] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Dashboard user={user} isPending={isPending} error={error} />} />
        <Route path="home" element={<Navigate to="/dashboard" />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard user={user} isPending={isPending} error={error} />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<User 
        setFilterContainer={setFilterContainer}
        filterContainer={filterContainer}
        user={user} 
        isPending={isPending} 
        error={error}/>} 
        />
        <Route path='/user/:id' element={<UserDetails />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/*/' element={<NotFound />} />
      </Routes>
    </div>
  );
  
}
export default App;