// static files
import loading from "../../img/loading.png"
// components
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import UserList from "../../components/UserList";

const Dashboard = ({ user, isPending }) => {
    return (
      <div className="dashboard bg-light">
        <div className="display-f">
          <Sidebar />
          <div className="container">
            <h1 className="font-lg mt-2 mb-2 text-primary">Users</h1>
            <Card />
            {isPending && <div className="loading"><img src={loading} alt="loading" /></div>}
            <UserList user={user} isPending={isPending} />
          </div>
        </div>
      </div>
    );
}
 
export default Dashboard;