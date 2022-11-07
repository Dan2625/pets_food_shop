import { Fragment } from 'react';

import classes from './Header.module.css';
import petsImage from '../../assets/dog&cat.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>The Pets Shop!</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={petsImage} alt="dogs&cat" />
      </div>
    </Fragment>
  );
};

export default Header;
