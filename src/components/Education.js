const Education = ({user}) => {
    const education = user.education;
    return ( 
      <div className="">
        <div className="font-sm text-primary pt-3 mb-1">Education and Employment</div>
        <ul className="grid pb-3">
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Level of education</p>
            <h5 className="text-primary m-0">{education.level}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Sector of employment</p>
            <h5 className="text-primary m-0">{education.employmentStatus}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Duration of employment</p>
            <h5 className="text-primary m-0 email">{education.duration}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Official email</p>
            <h5 className="text-primary m-0 email">{education.officeEmail}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Monthly income</p>
            <h5 className="text-primary m-0"><span className="naira">N</span>{education.monthlyIncome[0]} - <span className="naira">N</span>{education.monthlyIncome[1]}</h5>
          </li>
          <li className="mr-1">
            <p className="text-gray font-xs m-0">Loan repayment</p>
            <h5 className="text-primary m-0"><span className="naira">N</span>{education.loanRepayment}</h5>
          </li>
        </ul>
      </div>
    );
}
 
export default Education;