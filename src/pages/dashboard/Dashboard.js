import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
    return (
      <div className="dashboard">
        <Navbar />
        <div className="display-f">
          <Sidebar />
          <div>
            <h1 className="font-lg mt-3 mb-3">Users</h1>
          </div>
        </div>
      </div>
    );
}
 
export default Dashboard;