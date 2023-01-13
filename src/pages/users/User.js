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
            {error && <div className="error mt-4 text-primary font-lg bg-white p-2">{error}, but don't fret-<p className="text-white bg-primary p-1 br-md display-i-b mt-1" onClick={() => window.location.reload()}> let's give it another shot</p></div>}
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