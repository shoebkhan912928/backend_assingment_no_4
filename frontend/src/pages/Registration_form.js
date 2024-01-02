import React from 'react'

const Registration_form = () => {
  return (
    <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-12 col-md-12 d-flex justify-content-center align-items-center mt-3'>
                    <h1>REGISTRATION FORM</h1>
                </div>
            </div>
            <div className='row border shadow'>
                <div className='col-sm-12 col-md-12 col-12'>
                    <div className="mb-3">
                        <label for="product" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="product" />
                    </div>
                    <div className="mb-3">
                        <label for="product" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="product" />
                    </div>
                    <div className="mb-3">
                        <label for="quantity" className="form-label">Email</label>
                        <input type="text" className="form-control" id="quantity" />
                    </div>
                    <div className="mb-3">
                        <label for="amount" className="form-label">Password</label>
                        <input type="number" className="form-control" id="amount" />
                    </div>
                    <div className="d-grid mb-3">
                        
                        <button className="btn btn-primary" type="button">Button</button>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Registration_form;