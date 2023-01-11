const Card = () => {
    return (
      <div className="row gap-2">
        <div className="col-12-xs col-6-sm col-4-lg col-3-xl">
          <div className="card">
            <div className="card-img"></div>
            <div className="card-body">Users</div>
            <div className="card-h">2,453</div>
          </div>
        </div>
        <div className="col-12-xs col-6-sm col-4-lg col-3-xl">
          <div className="card">
            <div className="card-img"></div>
            <div className="card-body">Active Users</div>
            <div className="card-h">2,453</div>
          </div>
        </div>
        <div className="col-12-xs col-6-sm col-4-lg col-3-xl">
          <div className="card">
            <div className="card-img"></div>
            <div className="card-body">User with loans</div>
            <div className="card-h">12,453</div>
          </div>
        </div>
        <div className="col-12-xs col-6-sm col-4-lg col-3-xl">
          <div className="card">
            <div className="card-img"></div>
            <div className="card-body">User with savings</div>
            <div className="card-h">102,453</div>
          </div>
        </div>
      </div>
    );
}
 
export default Card;