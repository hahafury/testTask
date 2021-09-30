import React, {useEffect, useState, useRef} from 'react';
import styles from './ShoppingCartContainer.module.sass';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

const ShoppingCartContainer = (props) => {
    const [shoppingCartItems] = useState(JSON.parse(localStorage.getItem('shopping_cart')))

    return (
        <div className= {styles.shoppingCartContainer}>
            <div className = {styles.shoppingCartItemsContainer}>
                {   
                    shoppingCartItems !== null && shoppingCartItems.length > 0 ? (
                        shoppingCartItems.map((e,i) => {
                            return <ShoppingCartItem key = {i} name = {e.name} amount = {e.amount} sum = {e.sum} img = {e.img}/>
                        })) : (
                        'Nothing was found'
                    )
                }
            </div>
        </div>
    );
};

export default ShoppingCartContainer;