 import { Fragment }  from 'react';
 import HeaderCartButtton from './HeaderCartButton';
 import mealsImage from './meals.jpeg';
 import classes from './Header.module.css';


 const Header = props => {
     return <Fragment>
         <header className={classes.header}>
             <h1>ReactMeals</h1>
             <HeaderCartButtton  onClick={props.onShowCart}/>
             <button>Cart</button>
         </header>
         <div className={classes['main-image']}>
    <img src={mealsImage}  alt="A table full of delicious food!"/>
         </div>

     </Fragment> 
 };

 export default Header;