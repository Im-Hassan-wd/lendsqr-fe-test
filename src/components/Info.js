const Info = ({ user }) => {
    return (
      <div className="info bg-white mt-3 p-2">
        <div className="font-sm text-primary mb-1">Personal infomation</div>
        <ul className="grid">
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Full name</p>
            <h5 className="text-primary m-0">{user.profile.firstName} {user.profile.lastName}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Phone number</p>
            <h5 className="text-primary m-0">{user.phoneNumber.slice(0, 12)}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Email address</p>
            <h5 className="text-primary m-0 email">{user.email}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Bvn</p>
            <h5 className="text-primary m-0">{user.profile.bvn}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Gender</p>
            <h5 className="text-primary m-0">{user.profile.gender}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Marital status</p>
            <h5 className="text-primary m-0">{user.profile.firstName}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Children</p>
            <h5 className="text-primary m-0">{user.profile.firstName}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Type of residence</p>
            <h5 className="text-primary m-0">{user.profile.firstName}</h5>
          </li>
        </ul>
      </div>
    );
}
 
export default Info;