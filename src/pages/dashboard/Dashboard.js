// components
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import UserList from "../../components/UserList";

const Dashboard = () => {
    return (
      <div className="dashboard bg-light">
        <Navbar />
        <div className="display-f">
          <Sidebar />
          <div className="container">
            <h1 className="font-lg mt-2 mb-2 text-primary">Users</h1>
            <Card />
            <UserList />
          </div>
        </div>
      </div>
    );
}
 
export default Dashboard;