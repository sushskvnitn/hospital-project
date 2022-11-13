import React from 'react'

const contact_form = () => {
  return (
    <>
      <div className="col-lg-8">
              <div className="contact-box p-4">
                <h4 className="title">send us message</h4>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="name"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="email"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="phone"/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="location"/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-3">
                        <input className="form-control" type="text" placeholder="message"/>
                      </div>
                    </div>
                    <div className="col-lg-12 my-4">
                      <button className="btn btn-danger">submit now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

    </>
  )
}

export default contact_form