import { useParams } from "react-router-dom";
// static files
import loading from "../../img/loading.png"
import avatar from "../../img/d-avatar.png"
import "./UserDetails.scss"
//components
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
// hooks
import useFetch from "../../Hooks/useFetch"

const UserDetails = () => {
  const { id } = useParams();
  const { data: user, error, isPending} = useFetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/" + id)
  console.log(user)
  return (
    <div className="user-details">
      <Navbar />
        <div className="display-f">
          <Sidebar />
          <div className="container">
            <div className="text-md text-primary row-flex">
              <div className="font-xs text-primary mt-2">Back to user</div>
              <div className="align-center btn-wrap">
                <button className="btn-outlined-blacklist text-blacklist text-hover-white mr-1">Reset</button>
                <button className="btn-outlined-active text-active text-hover-white  mr-1">Filter</button>
              </div>
            </div >
            <h1 className="font-lg mt-1 mb-2 text-primary">User details</h1>
            {isPending && <div className="loading"><img src={loading} alt="loading" /></div>}
            {error && <div className="loading">{error}, let's <p onClick={window.location.reload()}>try again</p></div>}
            {user && (
              <div className="bg-white p-2 mt-2">
              <span><img className="avatar" src={avatar} alt="avatar" /></span> |
              <span>
                <h1 className="font-lg mb-1 text-primary">{user.userName}</h1>
              </span>
              <span></span>
              <span></span>
            </div>
            )}
          </div>
        </div>
    </div>
  );
}
 
export default UserDetails;