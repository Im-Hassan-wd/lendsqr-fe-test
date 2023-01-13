import PersonalInfo from "./PersonalInfo";

const Info = ({ user }) => {
    return (
      <div className="info bg-white mt-3 p-2">
        <PersonalInfo user={user} />
      </div>
    );
}
 
export default Info;