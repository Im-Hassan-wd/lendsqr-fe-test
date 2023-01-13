const Info = ({ subT, first, last, number, email, bvn, gender, ms, children, res, subT1, subT2, subT3, subT4, subT5, subT6, subT7, subT8 }) => {
    return (
      <div className="info pt-3">
        <div className="font-sm text-primary mb-1">{ subT }</div>
        <ul className="grid pb-3">
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT1 }</p>
            <h5 className="text-primary m-0">{first} {last}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT2 }</p>
            <h5 className="text-primary m-0">{number}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT3 }</p>
            <h5 className="text-primary m-0 email">{email}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT4 }</p>
            <h5 className="text-primary m-0">{bvn}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT5 }</p>
            <h5 className="text-primary m-0">{gender}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT6 }</p>
            <h5 className="text-primary m-0">{ms}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT7 }</p>
            <h5 className="text-primary m-0">{children}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT8 }</p>
            <h5 className="text-primary m-0">{res}</h5>
          </li>
        </ul>
      </div>
    );
}
 
export default Info;