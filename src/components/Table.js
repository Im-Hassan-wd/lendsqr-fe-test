import { Link } from "react-router-dom";
// static files
import filter from "../icon/filter.svg"

const Table = ({ user, end, start, setShowFilterContainer }) => {
  return (
    <div className="p-2 table bg-white">
      <table className="user-list">
      {user && <tr>
        <th onClick={() => setShowFilterContainer(true)}>
          <div className="text-gray transform-uppercase font-xs display-i">Organization</div>
          <img src={filter} alt="filter" />
        </th>
        <th onClick={() => setShowFilterContainer(true)}>
          <div className="text-gray transform-uppercase font-xs display-i">Username</div>
          <img src={filter} alt="filter" />
        </th>
        <th onClick={() => setShowFilterContainer(true)}>
          <div className="text-gray transform-uppercase font-xs display-i">Email</div>
          <img src={filter} alt="filter" />
        </th>
        <th onClick={() => setShowFilterContainer(true)}>
          <div className="text-gray transform-uppercase font-xs display-i">Phone Number</div>
          <img src={filter} alt="filter" />
        </th>
        <th onClick={() => setShowFilterContainer(true)}>
          <div className="text-gray transform-uppercase font-xs display-i">Date Joined</div>
          <img src={filter} alt="filter" />
        </th>
        <th onClick={() => setShowFilterContainer(true)}>
          <div className="text-gray transform-uppercase font-xs display-i">Status</div>
          <img src={filter} alt="filter" />
        </th>
      </tr>}

        {user && user.map(u => (
            <tr className="tr" key={u.id}>
            <td>
              <p className="text-primary org wrap font-xs">{u.orgName}</p>
            </td>
            <td>
              <p className="text-primary name font-xs"><Link to={`/user/${u.id}`}>{u.profile.firstName} {u.profile.lastName}</Link></p>
            </td>
            <td>
              <p className="text-primary email font-xs">{u.email}</p>
            </td>
            <td>
              <p className="text-primary number font-xs">{u.phoneNumber.slice(0, 14)}</p>
            </td>
            <td>
              <p className="text-primary date font-xs">{u.createdAt.slice(0, 10)}</p>
            </td>
            <td>
            {u.lastActiveDate.slice(0, 4) > 2050 && <p className="text-active btn-p font-xs bg-active-light-9 p-1 br-full">Active</p> }
            {u.lastActiveDate.slice(0, 4) > 2030 && u.lastActiveDate.slice(0, 4) < 2050 && <p className="text-pending btn-p font-xs bg-pending-light-9 p-1 br-full">Pending</p> }
            {u.lastActiveDate.slice(0, 4) > 2019 && u.lastActiveDate.slice(0, 4) < 2030 && <p className="text-gray btn-p font-xs bg-gray-light-9 p-1 br-full">Inactive</p> }
            {u.lastActiveDate.slice(0, 4) < 2019 && <p className="text-blacklist btn-p font-xs bg-blacklist-light-9 p-1 br-full">Blacklisted</p> }
              
            </td>
        </tr>
        )).slice(start, end)}
    </table>
    </div>
  );
}
 
export default Table;