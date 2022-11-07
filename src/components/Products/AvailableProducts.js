import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'm1',
    name: 'Bonzo',
    description: '15 kg',
    price: 80,
  },
  {
    id: 'm2',
    name: 'Akana',
    description: '13 kg',
    price: 75,
  },
  {
    id: 'm3',
    name: 'Select',
    description: '13 kg',
    price: 70,
  },
  {
    id: 'm4',
    name: 'Science Planet',
    description: '15 kg',
    price: 95,
  },
];

const AvailableProducts = () => {
  const productsList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));
  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
