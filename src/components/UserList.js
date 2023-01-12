// static files
import filter from "../icon/filter.svg"

const UserList = ({user}) => {
  return (
    <table className="user-list">
      <tr>
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
      </tr>

        {user && user.map(u => (
        <tr key={u.id}>
            <td>
              <p className="text-primary font-xs">{u.orgName}</p>
            </td>
            <td>
              <p className="text-primary font-xs">{u.userName}</p>
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
              <p className="text-primary font-xs btn bg-gray-light-5 text-gray pr-1 pl-1 br-full">{u.education.employmentStatus}</p>
            </td>
        </tr>
        ))}
    </table>
  );
}
 
export default UserList;