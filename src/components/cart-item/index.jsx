import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import {useDispatch} from 'react-redux'
 import {RemoveProducts} from "../../Redux/cart/action"
 import {IncrementItem} from "../../Redux/cart/action"
 import {DecrementItem} from "../../Redux/cart/action"

// Styles
import * as Styles from "./styles";

const CartItem = ({product, quantity}) => {

  const dispatch = useDispatch()


  const handleRemoveClick = () => {
    dispatch(RemoveProducts(product.id))
    
   };

  const handleIncreaseClick = () => {
    dispatch(IncrementItem(product.id))
    
  };

  const handleDecreaseClick = () => {
    dispatch(DecrementItem(product.id))
  
  };


  

  return (
    

    <Styles.CartItemContainer>

      <Styles.CartItemImage imageUrl={product.imageUrl} />


      <Styles.CartItemInfo>
      <p>{product.name}</p>
      <p>R${product.price}</p>
      <p>Quantidade:{quantity}</p>
      
      
       

       <Styles.CartItemQuantity>
    
         <AiOutlineMinus
           size={20}
           onClick={handleDecreaseClick}
           aria-label={`Decrease quantity of ${product.name}`}
         
         />
         
         
         <AiOutlinePlus
           size={20}
           onClick={handleIncreaseClick}
           aria-label={`Increase quantity of ${product.name}`}
        
         />
     
       
       </Styles.CartItemQuantity>
      
       </Styles.CartItemInfo>
       
       <Styles.RemoveButton
       onClick={handleRemoveClick}
       aria-label={`Remove ${product.name}`}
       style={{color:"black" }}
       >
       <AiOutlineClose size={25} />
       </Styles.RemoveButton> 

       
    </Styles.CartItemContainer>
  
  );
};

export default CartItem;




 