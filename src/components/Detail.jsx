import React from 'react'
import {useParams} from 'react-router-dom'
import { API } from '../config/api';
import { useQuery } from 'react-query';
import { useCart } from "react-use-cart";

export const Detail = () => {
    const { addItem } = useCart();
    const {id} =useParams()

    let { data: products } = useQuery("producrtttttttCache", async () => {
        const response = await API.get("/products/"+id);
        return response.data
      });
      
  return (
    
    <div className='detail'>
        <img src={products?.thumbnail} alt="" />
        <div className='details'>
            <h2 className='my-3'>{products?.title}</h2>
            <div className='my-4'>
                <span>{products?.brand} | {products?.category} | {products?.stock}</span>
            </div>
            <p className='my-5'>{products?.description}</p>
            <div className='d-flex'>
            <h2 className='w-75'>$ {products?.price}</h2>
            <button onClick={() => addItem(products)} className="buttondetail bg-dark" >beli</button>
            </div>
        </div>
    </div>
  )
}
