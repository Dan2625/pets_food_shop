import classes from './ProductsSummary.module.css';

const ProductsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>The Best Food For Your Pets, Delivered To You</h2>
      <p>
        Choose your pets favorite food and toys from our broad selection of
        available products and enjoy a quick and free delivery.
      </p>
      <p>
        All our products are with high-quality ingredients, only from the best
        companies!
      </p>
    </section>
  );
};

export default ProductsSummary;
