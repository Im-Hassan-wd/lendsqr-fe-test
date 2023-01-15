// static files (images, styles)
import "./Filter.scss"

const Filter = () => {
  return (
    <div className="filter bg-white p-2 br-md">
      <form>
        <div className="font-xs text-primary"></div>
        <label>
          <span className="font-xs text-primary display-b">Organization</span>
          <input className="form-input mb-1" type="text" />
        </label>
        <label>
          <span className="font-xs text-primary display-b">Username</span>
          <input className="form-input mb-1" type="text" />
        </label>
        <label>
          <span className="font-xs text-primary display-b">Email</span>
          <input className="form-input mb-1" type="email" />
        </label>
        <label>
          <span className="font-xs text-primary display-b">Date</span>
          <input className="form-input mb-1" type="date" />
        </label>
        <label>
          <span className="font-xs text-primary display-b">Phone number</span>
          <input className="form-input mb-1" type="text" />
        </label>
        <label>
          <span className="font-xs text-primary display-b">Status</span>
          <select className="form-input mb-1">
            <option value="Active">Active</option>
            <option value="In active">Inactive</option>
            <option value="Blacklisted">Blaklisted</option>
            <option value="Pending">Pending</option>
          </select>
        </label>
        <div className="align-center mt-2">
          <button className="btn-outlined-gray text-gray text-hover-white mr-1">Reset</button>
          <button className="btn-blue text-white mr-1">Filter</button>
        </div>
      </form>
    </div>
  );
}
 
export default Filter;