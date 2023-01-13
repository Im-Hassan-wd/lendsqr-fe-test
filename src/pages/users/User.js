//static files (images, styles)
import loading from "../../img/loading.png"
// components
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Filter from "../../components/Filter";

const User = ({ user, isPending, error, end, start, setStart, setEnd }) => {
    return (
      <div className="dashboard bg-light">
        <Navbar />
        <div className="display-f">
          <Sidebar />
          <div className="container">
            <h1 className="font-lg mt-2 mb-2 text-primary">Users</h1>
            <Card />
            {error && <div className="">{error}, let's <p onClick={() => {window.location.reload()}} className="btn p-1">try again</p></div>}
            {isPending && <div className="loading"><img src={loading} alt="loading" /></div>}
            <div className="wrapper">
              {user && <Table 
                user={user} 
                isPending={isPending}
                end={end}
                start={start}
                setStart={setStart}
                setEnd={setEnd}
              />}
              <Filter />
            </div>
            {user && <Pagination 
              user={user} 
              end={end} 
              start={start} 
              setStart={setStart} 
              setEnd={setEnd} 
            />}
          </div>
        </div>
      </div>
    );
}
 
export default User;