// static files
import loading from "../../img/loading.png"
// components
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import Table from "../../components/Table";
import Navbar from "../../components/Navbar";

const Dashboard = ({ user, isPending }) => {
    return (
      <div className="dashboard bg-light">
        <Navbar />
        <div className="display-f">
          <Sidebar />
          <div className="container">
            <h1 className="font-lg mt-2 mb-2 text-primary">Dashboard</h1>
            <Card />
            {isPending && <div className="loading"><img src={loading} alt="loading" /></div>}
            <Table user={user.slice(0, 1)} isPending={isPending} />
          </div>
        </div>
      </div>
    );
}
 
export default Dashboard;