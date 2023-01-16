import { Helmet } from "react-helmet-async"; 
import { Link, useNavigate, useParams } from "react-router-dom";
// static files
import loading from "../../img/loading.png"
import arrowBack from "../../icon/arrow-back.svg"
import star from "../../icon/star.svg"
import starFill from "../../icon/star-fill.svg"
import "./UserDetails.scss"
//components
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Info from "../../components/Info";
// hooks
import useFetch from "../../Hooks/useFetch"

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: user, error, isPending} = useFetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/" + id)
  
  return (
    <div className="user-details">
    <Helmet>
      <title>Lendsqr | User details</title>
      <meta name="description" content="At Lendsqr, many of our lenders use web apps to reach over half a million customers" />
      <link rel="canonical" href={`/user/${id}`} />
    </Helmet>
    <Navbar />
      <div className="display-f">
        <Sidebar />
        <div className="container user-details-cont">
          <div className="text-md btn-navi text-primary row-flex align-center">
            <button onClick={() => navigate(-1) } className="display-f align-center font-xs back text-primary mt-2">
              <img className="mr-1" src={arrowBack} alt="go back" />
              <span className="back">Back to user</span>
              </button>
            <div className="align-center btn-wrap">
              <button className="btn-outlined-blacklist text-blacklist text-hover-white mr-1">Blacklist user</button>
              <button className="btn-outlined-active text-active text-hover-white  mr-1">Active user</button>
            </div>
          </div >
          <h1 className="font-lg mt-1 mb-2 text-primary">User details</h1>
          {isPending && <div className="loading"><img src={loading} alt="loading" /></div>}
          {error && 
            <div className="error mt-2 text-primary font-lg bg-white p-2">{error}, but don't fret- let's give it another shot
              <button className="btn-blue text-white font-sm mt-1" onClick={() => window.location.reload()}>Refresh</button>
            </div>
          }
          {user && (
            <div>
            <div className="bg-white p-2 pb-0 mt-2">
              <div className="row">
                <span className="pr-2 pl-2"><img className="avatar" src={user.profile.avatar} alt="avatar" /></span>
                <span className="pr-2 pl-2">
                  <h1 className="font-lg mb-1 text-primary">{user.profile.firstName} {user.profile.lastName}</h1>
                  <p className="font-sm text-gray">{user.accountNumber}</p>
                </span>
                <span className="pr-2 pl-2">
                  <h2 className="font-sm text-gray">User's Tier</h2>
                  <div className="">
                    <img src={starFill} alt="start" />
                    <img src={star} alt="start" />
                    <img src={star} alt="start" />
                  </div>
                </span>
                <span className="pr-2 pl-2">
                  <h1 className="font-lg mb text-primary"><span className="naira">N</span>{user.accountBalance}</h1>
                  <p className="font-sm text-gray">{user.profile.bvn}</p>
                </span>
              </div>
              <ul className="tab-head mt-3 row-flex">
                <li className="mr-1"><button className="display-f text-blue pb-1">
                  <span>General</span> <span className="pl-1">Details</span></button></li>
                <li className="mr-1"><button className="text-primary pb-1">Documents</button></li>
                <li className="mr-1"><button className="display-f text-primary pb-1">
                  <span>Bank </span> <span className="pl-1">Details</span></button></li>
                <li className="mr-1"><button className="text-primary pb-1">Loans</button></li>
                <li className="mr-1"><button className="text-primary pb-1">Savings</button></li>
                <li className="mr-1"><button className="display-f text-primary pb-1">
                  <span>App</span> <span className="pl-1">and</span> <span className="pl-1">System</span></button></li>
              </ul>
            </div>
            <Info user={user} />
            </div>
          )}
        </div>
      </div>
  </div>
);
}
 
export default UserDetails;