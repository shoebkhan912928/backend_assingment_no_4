import React from 'react'

const Addseles = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-12 col-md-12 d-flex justify-content-center align-items-center mt-3'>
                    <h1>ADD SALE ENTRY</h1>
                </div>
            </div>
            <div className='row border shadow'>
                <div className='col-sm-12 col-md-12 col-12'>
                    <div className="mb-3">
                        <label for="product" className="form-label">Product Name</label>
                        <input type="text" className="form-control" id="product" />
                    </div>
                    <div className="mb-3">
                        <label for="quantity" className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="quantity" />
                    </div>
                    <div className="mb-3">
                        <label for="amount" className="form-label">Amount</label>
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

export default Addseles