//static files (images, styles)
import loading from "../../img/loading.png"
// components
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import Filter from "../../components/Filter";

const User = ({ user, isPending }) => {
    return (
      <div className="dashboard bg-light">
        <Navbar />
        <div className="display-f">
          <Sidebar />
          <div className="container">
            <h1 className="font-lg mt-2 mb-2 text-primary">Users</h1>
            <Card />
            {isPending && <div className="loading"><img src={loading} alt="loading" /></div>}
            <div className="container">
              {user && <Table user={user.slice(0, 10)} isPending={isPending} />}
              <Filter />
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    );
}
 
export default User;