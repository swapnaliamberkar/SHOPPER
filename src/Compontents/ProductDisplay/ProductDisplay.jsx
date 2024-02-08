import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addTocart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
       <img src={product.image} alt="" className="productdisplay-main-img" />     
        </div>
      </div>
      <div className="productdisplay-right">
    <h1>{product.name}</h1>
    <div className="productdisplay-right-star">
        <img src={start_icon} alt="" />
        <img src={start_icon} alt="" />
        <img src={start_icon} alt="" />
        <img src={start_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(122)</p>
    </div>
    <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">
            ${product.old_price}
        </div>
        <div className="productdisplay-right-price-new">
            ${product.new_price}
        </div>
    </div>
    <div className="productdisplay-right-description">
    Comfortable, casual, and loose-fitting, our heavyweight dark color t-shirt will quickly become one of your favorites. Made from 100% cotton, it wears well on anyone. 
    </div>
    <div className="productdisplay-right-size">
        <h1>Select Size</h1>
        <div className="productdisplay-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
    </div>
    <div>
        <button onClick={()=>{addTocart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category : </span>Women , T-shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest</p>
    </div>
      </div>
    </div>
  )
}

export default ProductDisplay
