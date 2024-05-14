import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext} from '../Contest/ShopContext'
import Breadcrums from '../Breadcrums/Breadcrums';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Description from '../DescriptionBox/Description';
import RelatedProduct from '../RelatedProducts/RelatedProduct';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const { productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId))

  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProduct/>
    </div>
  )
}

export default Product