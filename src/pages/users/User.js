import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const User = () => {
    return (
      <div className="user">
        <Navbar />
        <div className="display-f">
          <Sidebar />
        </div>
      </div>
    );
}
 
export default User;