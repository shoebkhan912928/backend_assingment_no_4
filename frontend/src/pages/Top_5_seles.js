import React from 'react'

const Top_5_seles = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-12 col-md-12 d-flex justify-content-center align-items-center mt-3'>
                    <h1>TOP 5 SELES</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-md-12 col-12'>
                    <table class="table ">
                        <thead>
                            <tr  >
                                <th scope="col">#</th>
                                <th scope="col">Seles Id:</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Sale Amount</th>

                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr>
                                <th scope="row">1</th>
                                <td>s1212</td>
                                <td>Laptop</td>
                                <td>2</td>
                                <td>90000</td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>m1412</td>
                                <td>Desktop</td>
                                <td>1</td>
                                <td>70000</td>

                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Top_5_seles