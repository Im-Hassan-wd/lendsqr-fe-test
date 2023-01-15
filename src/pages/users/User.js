import { Helmet } from "react-helmet-async";
import { useState } from "react";
//static files (images, styles)
import loading from "../../img/loading.png"
// components
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Filter from "../../components/Filter";
const User = ({ user, isPending, error, setFilterContainer, filterContainer }) => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(10)

  return (
    <div className="user bg-light">
      <Helmet>
        <title>Lendsqr | User</title>
        <meta name="description" content="At Lendsqr, many of our lenders use web apps to reach over half a million customers" />
        <link rel="canonical" href="/user" />
      </Helmet>
      <Navbar />
      <div className="display-f">
        <Sidebar />
        <div className="container">
          <h1 className="font-lg mt-2 mb-2 text-primary">Users</h1>
          <Card />
          {error && <div className="error mt-2 text-primary font-lg bg-white p-2">{error}, but don't fret-<p className="text-white bg-primary p-1 br-md display-i-b mt-1" onClick={() => window.location.reload()}> let's give it another shot</p></div>}
          {isPending && <div className="loading"><img src={loading} alt="loading" /></div>}
          <div className="wrapper">
            {user && <Table 
              user={user.slice(start, end)} 
              setFilterContainer={setFilterContainer} 
              filterContainer={filterContainer}
              isPending={isPending}
            />}
            {filterContainer === true ? <Filter filterContainer={filterContainer} /> : null }
          </div>
          {user && <Pagination user={user} start={start} setStart={setStart} end={end} setEnd={setEnd}/>}
        </div>
      </div>
    </div>
  );
}
 
export default User;