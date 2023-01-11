// static files
import filter from "../icon/filter.svg"

const UserList = () => {
  return (
    <table border="1" className="user-list">
      <th>
        <td>
          <div className="text-gray transform-uppercase font-xs display-i">Organization</div>
          <img className="ml-1" src={filter} alt="filter" />
        </td>
        <td className="">
          <div className="text-gray transform-uppercase font-xs display-i">Username</div>
          <img className="ml-1" src={filter} alt="filter" />
        </td>
        <td className="">
          <div className="text-gray transform-uppercase font-xs display-i">Email</div>
          <img className="ml-1" src={filter} alt="filter" />
        </td>
        <td className="">
          <div className="text-gray transform-uppercase font-xs display-i">Phone Number</div>
          <img className="ml-1" src={filter} alt="filter" />
        </td>
        <td className="">
          <div className="text-gray transform-uppercase font-xs display-i">Date Joined</div>
          <img className="ml-1" src={filter} alt="filter" />
        </td>
        <td className="">
          <div className="text-gray transform-uppercase font-xs display-i">Status</div>
          <img className="ml-1" src={filter} alt="filter" />
        </td>
      </th>
    </table>
  );
}
 
export default UserList;