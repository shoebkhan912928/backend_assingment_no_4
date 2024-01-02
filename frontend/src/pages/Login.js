import React from 'react'

const Login = () => {
  return (
    <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-12 col-md-12 d-flex justify-content-center align-items-center mt-3'>
                    <h1>LOGIN FORM</h1>
                </div>
            </div>
            <div className='row border shadow'>
                <div className='col-sm-12 col-md-12 col-12'>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="passeord" />
                    </div>
                    
                    <div className="d-grid mb-3">
                        
                        <button className="btn btn-primary" type="button">Button</button>
                    </div>
                </div>
            </div>
            
    </div>
  )
}

export default Login;