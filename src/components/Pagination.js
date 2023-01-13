const Pagination = ({ user, start, end, setStart, setEnd}) => {
  console.table(user)
  return (
    <div className="pagination row-flex">
      {/* <div className="div">
        <div className="display-f align-center">
        <div className='font-xs mr-1 bg-light'>Showing</div>
        <input className='font-xs mr-1' type="number" />
        <div className='font-xs mr-1'>out of 100</div>
        </div>
      </div>
      <div className='align-center'>
        <button className='btn pl-1 pr-1'>-</button>
        <button>1</button>
        <button>2</button>
        <span>.</span><span>.</span><span>.</span>
        <button>3</button>
        <button>4</button>
        <button>+</button>
      </div> */}
      {start === 0  ? 
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
      }
    </div>
  )
}

export default Pagination;