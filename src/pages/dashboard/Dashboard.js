// static files
import loading from "../../img/loading.png"
// components
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import Table from "../../components/Table";
import Navbar from "../../components/Navbar";

const Dashboard = ({ user, isPending, error }) => {
    return (
      <div className="dashboard bg-light">
        <Navbar />
        <div className="display-f">
          <Sidebar />
          <div className="container mr-2">
            <h1 className="font-lg mt-2 mb-2 text-primary">Dashboard</h1>
            <Card />
            {isPending && <div className="loading"><img src={loading} alt="loading" /></div>}
            {error && <div className="error mt-2 text-primary font-lg bg-white p-2">{error}, but don't fret-<p className="text-white bg-primary p-1 br-md display-i-b mt-1" onClick={() => window.location.reload()}> let's give it another shot</p></div>}
            {user && <Table user={user.slice(0, 10)} isPending={isPending} />}
          </div>
        </div>
      </div>
    );
}
 
export default Dashboard;