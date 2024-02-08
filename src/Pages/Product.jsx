import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext';
import {useParams} from 'react-router-dom';
import Breadcrum from '../Compontents/Breadcrum/Breadcrum';
import ProductDisplay from '../Compontents/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Compontents/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Compontents/RelatedProducts/RelatedProducts'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product = {product}  />
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default Product
