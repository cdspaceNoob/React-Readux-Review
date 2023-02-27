import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 2,
    title: "My Second Book",
    description: "This is a first product - beautiful!",
  },
  {
    id: "p3",
    price: 7,
    title: "My Third Book",
    description: "This is a first product - wonderful!",
  },
  {
    id: "p4",
    price: 11,
    title: "My Forth Book",
    description: "This is a first product - fantastic!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            //map()을 사용할 때 key 속성이 필수적으로 들어가는 것을 기억하기.
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
