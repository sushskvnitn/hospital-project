import React from 'react'

const Addmessage = () => {
  return (
    <>
    <div className="Addmessage">
      <h1> Add message</h1>
      <form>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">your occupation</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Another label</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
  </div>
</form>
    </div>
    

   </>
  )
}

export default Addmessage