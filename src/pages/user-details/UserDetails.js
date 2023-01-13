import { useParams } from "react-router-dom";
// static files
import loading from "../../img/loading.png"
import avatar from "../../img/d-avatar.png"
import star from "../../icon/star.svg"
import starFill from "../../icon/star-fill.svg"
import "./UserDetails.scss"
//components
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
// hooks
import useFetch from "../../Hooks/useFetch"
import Info from "../../components/Info";

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
            {error && <div className="loading">{error}, let's <p onClick={() => window.location.reload()}>try again</p></div>}
            {user && (
             <div>
              <div className="bg-white p-2 pb-0 mt-2">
                <div className="display-f">
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
                  <li><button className="text-blue pb-1 mr-1">General details</button></li>
                  <li><button className="text-primary pb-1 mr-1">Documents</button></li>
                  <li><button className="text-primary pb-1 mr-1">Bank details</button></li>
                  <li><button className="text-primary pb-1 mr-1">Loans</button></li>
                  <li><button className="text-primary pb-1 mr-1">Savings</button></li>
                  <li><button className="text-primary pb-1 mr-1">App and System</button></li>
                </ul>
              </div>
              <div className="bg-white mt-3 pr-2 pl-2">
                <Info user={user} title="Personal information" subT1="Full name" first={user.profile.firstName} last={user.profile.lastName} subT2="Phone number" body2={user.phoneNumber.slice(0, 12)} subT3="Email address" body3={user.email} subT4="Bvn" body4={user.profile.bvn} subT5="Gender" body5={user.profile.gender} subT6="Marital status" body6="Married" subT7="Children" body7="None" subT8="Type of residence" body8="Remote"/>
                <Info user={user} subT="Education and Employment" subT1="Level of education" education={user.education.level} subT2="Employment status" status={user.education.employmentStatus} subT3="Sector of employment" sector={user.education.sector} subT4="Duration of employment" duration={user.education.duration} subT5="Gender" gender={user.profile.gender} subT6="Marital status" ms="Married" subT7="Children" children="None" subT8="Type of residence" res="Remote" />
              </div>
             </div>
            )}
          </div>
        </div>
    </div>
  );
}
 
export default UserDetails;