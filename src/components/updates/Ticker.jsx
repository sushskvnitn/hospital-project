import React from 'react'
import FiberNewIcon from '@mui/icons-material/FiberNew';
const Ticker = (props) => {
  return (
    <div>
    <div className="ticker-wrap ">
<div className="ticker">
   <div className="ticker_item">{props.ticker} {props.new==="yes"||props.new==="Yes"||props.new==="YES"?<FiberNewIcon/>:<></> } 
    {props.link ? <a className=" text-lowercase text-warning" href={props.link} >for more </a> : <></>} 
    </div>
  </div>
</div>
    </div>
  )
}

export default Ticker