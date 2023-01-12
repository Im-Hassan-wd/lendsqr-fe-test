import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import UserDetails from "./pages/user-details/UserDetails";
import User from "./pages/users/User";

function App() {

  const [user, setUser] = useState([]);
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ")
      const data = await res.json();
      setIsPending(false)

      setUser(data);
      console.log(data[0].education.loanRepayment)
    }
    catch(err) {
      console.log(err);
    }
  }
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard user={user} />} />
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