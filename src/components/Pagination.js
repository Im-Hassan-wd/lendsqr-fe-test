// static files
import "./Pagination.scss"
import prev from "../icon/prev.svg"
import next from "../icon/next.svg"
const Pagination = ({ user, start, end, setStart, setEnd }) => {
  return (
    <div className="pagination row-flex mt-1">
      <div className="div">
        <div className="display-f align-center">
        <div className='font-sm mr-1 bg-light'>Showing</div>
        <div className="">
          <input className='font-sm mr-1 page-input' type="number" placeholder={end} />
        </div>
        <div className='font-sm mr-1'>out of 100</div>
        </div>
      </div>
      <div className='align-center'>
        {start === 0  ? 
          <button className='page-btn disable'><img src={prev} alt="previous" /></button> :
          <button className="page-btn" onClick={() => {
            setStart(start -= 10)
            setEnd(end -= 10)
          }}><img src={prev} alt="previous" /></button>
        }

        <span className="pl-1">1</span>
        <span className="pl-1">2</span>
        <span className="pl-1">.</span><span>.</span><span>.</span>
        <span className="pl-1">3</span>
        <span className="pl-1">4</span>

        {end === user.length ? 
          <button className='page-btn disble'><img src={next} alt="next" /></button> :
          <button className="page-btn" onClick={() => {
            setStart(start += 10)
            setEnd(end += 10)
          }}><img src={next} alt="next" /></button>
        }
        
      </div>
    </div>
  )
}

export default Pagination;