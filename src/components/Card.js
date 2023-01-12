// static files
import auser from "../img/auser.png"
import luser from "../img/luser.png"
import suser from "../img/suser.png"
import user from "../img/user.png"

const Card = () => {
  return (
    <div className="row gap-1">
      <div className="col-12-xs col-5-sm col-3-xl">
        <div className="card">
          <div className="card-img"><img src={user} alt="user" /></div>
          <div className="card-body">Users</div>
          <div className="card-h">2,453</div>
        </div>
      </div>
      <div className="col-12-xs col-5-sm col-3-xl">
        <div className="card">
          <div className="card-img"><img src={auser} alt="user" /></div>
          <div className="card-body">Active Users</div>
          <div className="card-h">2,453</div>
        </div>
      </div>
      <div className="col-12-xs col-5-sm col-3-xl">
        <div className="card">
          <div className="card-img"><img src={luser} alt="user" /></div>
          <div className="card-body">User with loans</div>
          <div className="card-h">12,453</div>
        </div>
      </div>
      <div className="col-12-xs col-5-sm col-3-xl">
        <div className="card">
          <div className="card-img"><img src={suser} alt="user" /></div>
          <div className="card-body">User with savings</div>
          <div className="card-h">102,453</div>
        </div>
      </div>
    </div>
  );
}
 
export default Card;