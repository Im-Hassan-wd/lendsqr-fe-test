import { Link } from "react-router-dom";
import { useState } from "react";
// static files
import filter from "../icon/filter.svg"
import ellipse from "../icon/ellipse.svg"
import DropDown from "./DropDown";

const Table = ({ user, end, start, setShowFilterContainer }) => {
  const tableHead = [
    'ORGANIZATION',
    'USERNAME',
    'EMAIL',
    'PNONE NUMBER',
    'DATE JOINED',
    'STATUS'
  ]
  const [top, setTop] = useState(0)
  const [dropDown, setDropDown] = useState(false)

  const handleClick = (e) => {
    setTop(e.pageY)
    setDropDown(false)
  }

  const handleClickAgain = (e) => {
    setTop(e.pageY)
    setDropDown(true)

  } 

  return (
    <div className="p-2 table bg-white">
      <table className="user-list">
      {user && <tr>
        {tableHead.map(head => (
          <th onClick={() => setShowFilterContainer(true)}>
            <div className="text-gray transform-uppercase font-xs display-i">{ head }</div>
          <img src={filter} alt="filter" />
        </th>
        ))}
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
              <p className="text-primary date font-xs">{u.lastActiveDate.slice(0, 10)}</p>
            </td>
            <td className="row-flex">
            {u.lastActiveDate.slice(0, 4) >= 2050 && <p className="text-active btn-p font-xs bg-active-light-9 p-1 br-full">Active</p> }
            {u.lastActiveDate.slice(0, 4) >= 2030 && u.lastActiveDate.slice(0, 4) < 2050 && <p className="text-pending btn-p font-xs bg-pending-light-9 p-1 br-full">Pending</p> }
            {u.lastActiveDate.slice(0, 4) > 2019 && u.lastActiveDate.slice(0, 4) < 2030 && <p className="text-gray btn-p font-xs bg-gray-light-9 p-1 br-full">Inactive</p> }
            {u.lastActiveDate.slice(0, 4) <= 2019 && <p className="text-blacklist btn-p font-xs bg-blacklist-light-9 p-1 br-full">Blacklisted</p> }
            {dropDown === true ? <button onClick={(e) => handleClick(e)}><img src={ellipse} alt="filter-icon" /></button> : null }
            {dropDown === false ? <button onClick={(e) => handleClickAgain(e)}><img src={ellipse} alt="filter-icon" /></button> : null }
              
            </td>
        </tr>
        )).slice(start, end)}
    </table>
    {dropDown && <DropDown top={top} /> }
    </div>
  );
}
 
export default Table;