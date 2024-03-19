import { useMemo, useState } from "react";

// redux

import {useDispatch, useSelector} from "react-redux"

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { LoginUser, LogoutUser, } from "../../Redux/User/actions";
import {selectProductsCount} from "../../Redux/cart/cart.selectors"

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const dispache = useDispatch()

   
    const { currentUser} = useSelector((rootReducer)=> rootReducer.userReduce)
   
    const { products} = useSelector((state)=> state.cartReduce)
    
    const productsCount = useSelector(selectProductsCount)


     
    
    
    

  const handleCartClick = () => {
    setCartIsVisible(true);
  };
  
   const handelLoginClick =()=>{
    dispache(LoginUser({name: "Usário" ,email: "Usario@gmail.com"}))
     
    
    
   }

   const handleLogoutClick =()=>{
    dispache(LogoutUser())

   }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {
        currentUser
         ? 
        <div onClick={handleLogoutClick}>Sair</div>
         : 
        <div onClick={handelLoginClick}>Login</div>}
        <div onClick={handleCartClick}>Carrinho </div>  ({productsCount})
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
