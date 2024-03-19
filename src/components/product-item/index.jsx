import { BsCartPlus } from "react-icons/bs";
import {addProductsToCart} from "../../Redux/cart/action"
import Products from "../products";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";

// redux
import {useDispatch} from "react-redux"
import products from "../../data/products";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()
  
  const handleProductsClick =()=>{
    
    dispatch(addProductsToCart(product))
  }

 
  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton  startIcon={<BsCartPlus />} onClick={handleProductsClick} >
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
