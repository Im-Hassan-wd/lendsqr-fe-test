import { Link } from "react-router-dom"
// components
import SideList from "./SideList"
// static files
import briefcase from "../icon/briefcase.svg"
import caretdown from "../icon/caretdown.svg"
import dec from "../icon/dec.svg"
import services from "../icon/services.svg"
import chart from "../icon/chart.svg"
import fees from "../icon/fees.svg"
import savprod from "../icon/savprod.svg"
import serviceacc from "../icon/serviceacc.svg"
import sett from "../icon/sett.svg"
import trans from "../icon/trans.svg"
import gua from "../icon/gua.svg"
import loan from "../icon/loan.svg"
import req from "../icon/req.svg"
import savings from "../icon/savings.svg"
import userTimes from "../icon/user-times.svg"
import users from "../icon/users.svg"
import whiteList from "../icon/white-l.svg"
import home from "../icon/home.svg"
import badge from "../icon/badge.svg"
import clipboard from "../icon/clipboard.svg"
import sliders from "../icon/sliders.svg"
import login from "../icon/login.svg"

const Sidebar = () => {
  return (
    <sidebar className="sidebar bg-white">
      <h5 className="pl-2">
        <a className="display-f align-center">
          <img className="mr-1" src={briefcase} alt="briefcase icon" />
          <div className="font-sm text-gray">Switch Organization</div>
          <img className="ml-1" src={caretdown} alt="caret down icon" />
        </a>
      </h5>
      <h5 className="pl-2 mt-2">
        <a className="display-f align-center" href="#">
          <img className="mr-1"  src={home} alt="dashboard icon" />
          <div className="font-sm text-gray-light-3"><Link to="/">Dashboard</Link></div>
        </a>
      </h5>
      <p className="font-sm text-gray mt-2 pl-2">Customers</p>
      <ul className="mb-2">
        <SideList img={users} text="Users" link={"/user"} />
        <SideList img={gua} text="Guarantors" link={"#"} />
        <SideList img={loan} text="Loans" link={"#"} />
        <SideList img={dec} text="Decision Models" link={"#"} />
        <SideList img={savings} text="Savings" link={"#"} />
        <SideList img={req} text="Loan Requests" link={"#"} />
        <SideList img={whiteList} text="Whitelist" link={"#"} />
        <SideList img={userTimes} text="Karma" link={"#"} />
      </ul>
      <p className="font-sm text-gray pl-2">Businesses</p>
      <ul className="mb-2">
        <SideList img={briefcase} text="Oganizaion" link={"#"} />
        <SideList img={req} text="Loan Products" link={"#"} />
        <SideList img={savprod} text="Savings Products" link={"#"} />
        <SideList img={fees} text="Fees and Charges" link={"#"} />
        <SideList img={trans} text="Transactions" link={"#"} />
        <SideList img={services} text="Services" link={"#"} />
        <SideList img={serviceacc} text="Service Account" link={"#"} />
        <SideList img={sett} text="Settlements" link={"#"} />
        <SideList img={chart} text="Reports" link={"#"} />
      </ul>
      <p className="font-sm text-gray pl-2">Settings</p>
      <ul className="mb-2">
        <SideList img={sliders} text="Preferences" link={"#"} />
        <SideList img={badge} text="Loan Products" link={"#"} />
        <SideList img={clipboard} text="Savings Products" link={"#"} />
      </ul>
      <ul className="mt-4">
        <SideList img={login} text="Login" link={"/login"} />
        <li className="ml-1 mb-1 font-xs text-primary">V 1.2.0</li>
      </ul>
    </sidebar>
  );
}
 
export default Sidebar;