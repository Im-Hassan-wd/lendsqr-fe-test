import { useParams } from "react-router-dom";


const UserDetails = () => {
  const { id } = useParams();
  return (
    <div className="user-details">User details - { id }</div>
  );
}
 
export default UserDetails;