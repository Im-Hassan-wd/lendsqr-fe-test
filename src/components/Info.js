const Info = ({ title, first, last, number, email, bvn, gender, ms, children, res, title1, title2, title3, title4, title5, title6, title7, title8 }) => {
    return (
      <div className="info pt-3">
        <div className="font-sm text-primary mb-1">{ title }</div>
        <ul className="grid pb-3">
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ title1 }</p>
            <h5 className="text-primary m-0">{first} {last}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ title2 }</p>
            <h5 className="text-primary m-0">{number}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ title3 }</p>
            <h5 className="text-primary m-0 email">{email}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ title4 }</p>
            <h5 className="text-primary m-0">{bvn}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ title5 }</p>
            <h5 className="text-primary m-0">{gender}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ title6 }</p>
            <h5 className="text-primary m-0">{ms}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ title7 }</p>
            <h5 className="text-primary m-0">{children}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ title8 }</p>
            <h5 className="text-primary m-0">{res}</h5>
          </li>
        </ul>
      </div>
    );
}
 
export default Info;