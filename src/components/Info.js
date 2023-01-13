const Info = ({ title, first, last, body2, body3, body4, body5, body6, body7, body8, subT1, subT2, subT3, subT4, subT5, subT6, subT7, subT8 }) => {
    return (
      <div className="info pt-3">
        <div className="font-sm text-primary mb-1">{ title }</div>
        <ul className="grid pb-3">
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT1 }</p>
            <h5 className="text-primary m-0">{first} {last}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT2 }</p>
            <h5 className="text-primary m-0">{ body2 }</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT3 }</p>
            <h5 className="text-primary m-0 email">{ body3 }</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT4 }</p>
            <h5 className="text-primary m-0">{ body4 }</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT5 }</p>
            <h5 className="text-primary m-0">{ body5 }</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT6 }</p>
            <h5 className="text-primary m-0">{ body6 }</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT7 }</p>
            <h5 className="text-primary m-0">{ body7 }</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">{ subT8 }</p>
            <h5 className="text-primary m-0">{ body8 }</h5>
          </li>
        </ul>
      </div>
    );
}
 
export default Info;