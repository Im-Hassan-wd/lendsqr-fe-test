import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import UserDetails from "./pages/user-details/UserDetails";
import User from "./pages/users/User";

function App() {

  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(10)

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ")
      const data = await res.json();
      setIsPending(false)

      setUser(data);
    }
    catch(err) {
      setError("Something went wrong but don't fret,");
      setIsPending(true)
    }
  }
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