
import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [description, setDescription] = useState('')

  function onSubmit() {
    axios.post(
      'https://65c7cfb0e7c384aada6efcb0.mockapi.io/elements/products',
      {
        product_name: name,
        product_img: img,
        product_price: price,
        product_dicount: discount,
        product_description: description,

      }
    ).then((res) => {
      console.log(res);
    })
  }



  return (
    <div className="container">
      <div className='form'>
        <input className='input' type="text" placeholder='Enter product name' onChange={e => setName(e.target.value)} />
        <input className='input' type="text" placeholder='Enter product img' onChange={e => setImg(e.target.value)} />
        <input className='input' type="text" placeholder='Enter product price' onChange={e => setPrice(e.target.value)} />
        <input className='input' type="text" placeholder='Enter product discount' onChange={e => setDiscount(e.target.value)} />
        <textarea className='input' type="text" placeholder='Enter product description' onChange={e => setDescription(e.target.value)}></textarea>
        <button className='form-btn' onClick={onSubmit}>Send</button>
      </div>
    </div>
  )
}

export default App
