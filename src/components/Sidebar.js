// static files
import briefcase from "../icon/briefcase.svg"
import caretdown from "../icon/caretdown.svg"
import dec from "../icon/dec.svg"
import gua from "../icon/gua.svg"
import loan from "../icon/loan.svg"
import req from "../icon/req.svg"
import savings from "../icon/savings.svg"
import userTimes from "../icon/user-times.svg"
import users from "../icon/users.svg"
import whiteList from "../icon/white-l.svg"
import home from "../icon/home.svg"
import SideList from "./SideList"

const Sidebar = () => {
    return (
      <div className="sidebar">
        <h5>
          <a className="display-f align-center" href="#">
            <img className="mr-1" src={briefcase} alt="briefcase icon" />
            <div className="font-sm text-gray">Switch Organization</div>
            <img className="ml-1" src={caretdown} alt="caret down icon" />
          </a>
        </h5>
        <h5 className="mt-2">
          <a className="display-f align-center" href="#">
            <img className="mr-1"  src={home} alt="dashboard icon" />
            <div className="font-sm text-gray-light-3">Dashboard</div>
          </a>
        </h5>
        <p className="font-sm text-gray">Customers</p>
        <ul>
          <SideList img={users} text="Users" />
          <SideList img={gua} text="Guarantors" />
          <SideList img={loan} text="Loans" />
          <SideList img={dec} text="Decision Models" />
          <SideList img={savings} text="Savings" />
          <SideList img={req} text="Loan Requests" />
          <SideList img={whiteList} text="Whitelist" />
          <SideList img={userTimes} text="Karma" />
        </ul>
      </div>
    );
}
 
export default Sidebar;