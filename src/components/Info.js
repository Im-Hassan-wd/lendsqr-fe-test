import Education from "./Education";
import Guarantor from "./Guarantor";
import PersonalInfo from "./PersonalInfo";
import Social from "./Social";

const Info = ({ user }) => {
    return (
      <div className="info bg-white mt-3 p-2">
        <PersonalInfo user={user} />
        <Education user={user} />
        <Social user={user} />
        <Guarantor user={user} />
      </div>
    );
}
 
export default Info;