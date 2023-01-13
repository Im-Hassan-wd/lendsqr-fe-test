const Guarantor = ({ user }) => {
    const { firstName, lastName, phoneNumber} = user.guarantor;
    return (
      <div className="">
        <div className="font-sm text-primary pt-3 mb-1">Guarantor</div>
        <ul className="grid pb-3">
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Full name</p>
            <h5 className="text-primary m-0">{ firstName } { lastName }</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Phone number</p>
            <h5 className="text-primary m-0">{ phoneNumber }</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Email address</p>
            <h5 className="email text-primary m-0">{ user.email}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Relationship</p>
            <h5 className="text-primary m-0">Cousin</h5>
          </li>
        </ul>
      </div>
    );
}
 
export default Guarantor;