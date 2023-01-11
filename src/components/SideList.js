const SideList = ({img, text}) => {
    return (
      <li className="pl-2 mb-1 pb-1">
        <a className="display-f align-center" href="#">
          <img className="mr-1" src={img} alt="" />
          <div className="font-sm text-gray">{text}</div>
        </a>
      </li>
    );
}
 
export default SideList;