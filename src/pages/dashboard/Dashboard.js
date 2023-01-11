// components
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";

const Dashboard = () => {
    return (
      <div className="dashboard bg-light">
        <Navbar />
        <div className="responsive-text">Changing colors</div>
        <div className="display-f">
          <Sidebar />
          <div className="container">
            <h1 className="font-lg mt-3 mb-3 text-primary">Users</h1>
            <Card />
          </div>
        </div>
      </div>
    );
}
 
export default Dashboard;