import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
    return (
      <div className="dashboard">
        <Navbar />
        <div>
          <Sidebar />
        </div>
      </div>
    );
}
 
export default Dashboard;