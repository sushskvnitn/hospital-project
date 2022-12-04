import React from 'react'
import FiberNewIcon from '@mui/icons-material/FiberNew';
const Ticker = (props) => {
  return (
    <div>
    <div class="ticker-wrap ">
<div class="ticker">
   <div class="ticker_item">{props.update} <FiberNewIcon/> </div>

  </div>
</div>
    </div>
  )
}

export default Ticker