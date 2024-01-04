import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Cart() {
  const cart = useSelector(state=>state.cartReducer)

  return (
    <div className='container mt-5'>
      { cart?.length>0? <div className="row mt-5">
        <div className="col-lg-8">
          <h3 className='mt-5 '>Cart Summary</h3>
          <table className='table shadow mt-3'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((product,index)=>(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{product.title}</td>
                <td><img style={{height:'60px',width:'60px'}} src={product.thumbnail} alt="" /></td>
                <td>$ {product.price}</td>
                <td> <button className='btn'><i className="fa-solid fa-trash text-danger"></i></button> </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 mt-5">
          <div className="shadow border rounded p-4">
            <h5>Total Product: <span className='fw-bolder'>3</span></h5>
            <h3>Total Amount: <span className='fw-bolder text-danger'>$ 560</span></h3>
            <hr />
            <div className="d-grid">
              <button className='btn btn-success'>Checkout</button>
            </div>
          </div>
        </div>
      </div>:
      <div className='text-center mt-5'>
      <img width={'25%'} height={'200px'} src="https://16stitches.com/assets/frontend/images/empty_cart.png" alt="" />
      <h1 className='mt-3'>Your Cart is Empty</h1>
      <Link to={'/'} className='btn btn-success'>Click here to Shop More</Link>
    </div>
      }
    </div>
  )
}

export default Cart