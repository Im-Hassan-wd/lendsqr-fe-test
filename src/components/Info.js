const Info = ({ title, first, last, number, email, bvn, sex, ms, children, res }) => {
    return (
      <div className="info">
        <div className="font-sm text-primary mb-1">{ title }</div>
        <ul className="grid pb-3">
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Full name</p>
            <h5 className="text-primary m-0">{first} {last}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Phone number</p>
            <h5 className="text-primary m-0">{number}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Email address</p>
            <h5 className="text-primary m-0 email">{email}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Bvn</p>
            <h5 className="text-primary m-0">{bvn}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Gender</p>
            <h5 className="text-primary m-0">{sex}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Marital status</p>
            <h5 className="text-primary m-0">{ms}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Children</p>
            <h5 className="text-primary m-0">{children}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Type of residence</p>
            <h5 className="text-primary m-0">{res}</h5>
          </li>
        </ul>
      </div>
    );
}
 
export default Info;