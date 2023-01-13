import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch"

const UserDetails = () => {
  const { id } = useParams();
  const { data, error, isPending} = useFetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/" + id)
  return (
    <div className="user-details">User details - { id }</div>
  );
}
 
export default UserDetails;