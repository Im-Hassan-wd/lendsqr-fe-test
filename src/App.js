import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
// hooks
import useFetch from "./Hooks/useFetch";
// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import UserDetails from "./pages/user-details/UserDetails";
import User from "./pages/users/User";

function App() {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(10)
  const { data: user, isPending, error} = useFetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
  console.log(user) 

  return (
    <div className="App">
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard user={user} isPending={isPending} error={error} />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<User 
          user={user} 
          isPending={isPending} 
          error={error}
          end={end}
          start={start}
          setEnd={setEnd}
          setStart={setStart}
          />} 
        />
        <Route path='/user/:id' element={<UserDetails />} />
      </Routes>
    </div>
  );
  
}
export default App;