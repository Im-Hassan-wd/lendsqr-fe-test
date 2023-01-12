import { useState } from 'react'

const Pagination = () => {
  return (
    <div className="pagination row-flex">
      <div className="div">
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
      </div>
    </div>
  )
}

export default Pagination;