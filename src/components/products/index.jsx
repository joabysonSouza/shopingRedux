import products from "../../data/products";

// Components
import ProductItem from "../product-item/index";

// Styles
import * as Styles from "./styles";

const Products = () => {
  return (
    <Styles.Container>
      {products.map((product) => (
        <div key={product.id}>
        
          <ProductItem product={product} />{" "}
        </div>
      ))}
    </Styles.Container>
  );
};

export default Products;
