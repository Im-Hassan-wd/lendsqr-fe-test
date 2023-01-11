// static files
import filter from "../icon/filter.svg"

const UserList = () => {
  return (
    <div className="user-list">
      <ul className="display-f align-center">
        <li className="display-f align-center">
          <div className="text-gray font-xs">Organization</div>
          <img className="ml-1" src={filter} alt="filter" />
        </li>
      </ul>
    </div>
  );
}
 
export default UserList;