import "./Pagination.scss"
import dropdown from "../icon/dropdown.svg"
const Pagination = ({}) => {
  return (
    <div className="pagination container row-flex mt-2">
      <div className="div">
        <div className="display-f align-center">
        <div className='font-sm mr-1 bg-light'>Showing</div>
        <div className="">
          <input className='font-sm mr-1 page-input' type="number" placeholder="10" />
        </div>
        <div className='font-sm mr-1'>out of 100</div>
        </div>
      </div>
      <div className='align-center'>
        <button className='page-btn'>-</button>
        <span className="pl-1">1</span>
        <span className="pl-1">2</span>
        <span className="pl-1">.</span><span>.</span><span>.</span>
        <span className="pl-1">3</span>
        <span className="pl-1">4</span>
        <button className='page-btn'>+</button>
      </div>
      {/* {start === 0  ? 
        <button className="disable">prev</button> :
        <button onClick={() => {
          setStart(start -= 10)
          setEnd(end -= 10)
        }}>prev</button>
      }

      {end === user.length ? 
        <button className="disable">next</button> :
        <button onClick={() => {
          setStart(start += 10)
          setEnd(end += 10)
        }}>next</button>
      }

      {end === user.length ? 
        <button className="disable">Show All</button> :
        <button onClick={() => {
          setStart(0)
          setEnd(user.length)
        }}>Show All</button>
      } */}
    </div>
  )
}

export default Pagination;