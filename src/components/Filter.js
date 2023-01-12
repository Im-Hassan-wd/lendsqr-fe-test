const Filter = () => {
    return (
      <div className="filter">
        <form>
          <div className="font-xs text-primary"></div>
          <label>
            <span className="font-xs text-primary display-b">Organization</span>
            <input className="form-input" type="text" />
          </label>
          <label>
            <span className="font-xs text-primary display-b">Username</span>
            <input className="form-input" type="text" />
          </label>
          <label>
            <span className="font-xs text-primary display-b">Email</span>
            <input className="form-input" type="email" />
          </label>
          <label>
            <span className="font-xs text-primary display-b">Date</span>
            <input className="form-input" type="date" />
          </label>
          <label>
            <span className="font-xs text-primary display-b">Phone number</span>
            <input className="form-input" type="text" />
          </label>
          <label>
            <span className="font-xs text-primary display-b">Status</span>
            <select className="form-input">
              <option value="Active">Active</option>
              <option value="In active">Inactive</option>
              <option value="Blacklisted">Blaklisted</option>
              <option value="Pending">Pending</option>
            </select>
          </label>
        </form>
      </div>
    );
}
 
export default Filter;