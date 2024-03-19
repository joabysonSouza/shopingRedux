// Styles
import * as Styles from "./styles";
import { useSelector } from "react-redux";
import CartItem from "../cart-item"
import { selectProductsTotalPrice } from "../../Redux/cart/cart.selectors"




const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);





  const { products } = useSelector((state) => state.cartReduce)
  const totalPrice = useSelector(selectProductsTotalPrice)
  console.log(products)
  console.log(totalPrice)




  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {

          products.map((product, index) => (
            <div key={index}><CartItem product={product} quantity={product.quantity} /></div>
          ))


        }
        <Styles.CartTotal>
          Preco Total R$:{totalPrice}
        </Styles.CartTotal>
      </Styles.CartContent>



    </Styles.CartContainer>
  );
};

export default Cart;
