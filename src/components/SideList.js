import { Link } from "react-router-dom";

const SideList = ({img, text, link}) => {
  return (
    <li className="p-2">
      <Link className="display-f align-center" to={link}>
        <img className="mr-1" src={img} alt="" />
        <div className="font-sm text-gray">{text}</div>
      </Link>
    </li>
  );
}
 
export default SideList;