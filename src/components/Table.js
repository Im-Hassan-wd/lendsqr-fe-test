import { Link } from "react-router-dom";
// static files
// import filter from "../icon/filter.svg"

const Table = ({ user, end, start }) => {
  return (
    <div className="p-2 table bg-white">
      <table className="user-list">
      {user && <tr>
        <th>
          <div className="text-gray transform-uppercase font-xs display-i">Organization</div>
          
        </th>
        <th className="">
          <div className="text-gray transform-uppercase font-xs display-i">Username</div>
          
        </th>
        <th className="">
          <div className="text-gray transform-uppercase font-xs display-i">Email</div>
          
        </th>
        <th className="">
          <div className="text-gray transform-uppercase font-xs display-i">Phone Number</div>
          
        </th>
        <th className="">
          <div className="text-gray transform-uppercase font-xs display-i">Date Joined</div>
          
        </th>
        <th className="">
          <div className="text-gray transform-uppercase font-xs display-i">Status</div>
          
        </th>
      </tr>}

        {user && user.map(u => (
            <tr key={u.id}>
            <td>
              <p className="text-primary font-xs">{u.orgName}</p>
            </td>
            <td>
              <p className="text-primary font-xs"><Link to={`/user/${u.id}`}>{u.profile.firstName} {u.profile.lastName}</Link></p>
            </td>
            <td>
              <p className="text-primary font-xs">{u.email}</p>
            </td>
            <td>
              <p className="text-primary font-xs">{u.phoneNumber}</p>
            </td>
            <td>
              <p className="text-primary font-xs">{u.createdAt.toLocaleString()}</p>
            </td>
            <td>
              <p className="text-blacklist font-xs bg-blacklist-light-9 p-1 br-full">{u.education.employmentStatus}</p>
            </td>
        </tr>
        )).slice(start, end)}
    </table>
    </div>
  );
}
 
export default Table;