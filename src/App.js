import React, { useState } from 'react';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Products from './components/Products/Products';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Products />
      </main>
    </CartProvider>
  );
}

export default App;