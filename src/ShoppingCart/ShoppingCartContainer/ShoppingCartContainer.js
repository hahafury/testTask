import React, {useState, useRef} from 'react';
import styles from './ShoppingCartContainer.module.sass';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

const ShoppingCartContainer = (props) => {
    const [shoppingCartItems, setShoppingCart] = useState(JSON.parse(localStorage.getItem('shopping_cart')))
    const [totalCost, setTotalCost] = useState(() => {
        let result = 0;
        if(shoppingCartItems !== null && shoppingCartItems.length > 0){
            shoppingCartItems.forEach(item =>{
                result += item.sum
            })
        } else{
            return result
        } 
        return result
    })

    const handleDeleteFromShoppingCart = (name) => {
        for(let i = 0; i < shoppingCartItems.length; i++){
            if(shoppingCartItems[i].name === name) {
                setTotalCost(totalCost - shoppingCartItems[i].sum)
                shoppingCartItems.splice(i,1)
                setShoppingCart(shoppingCartItems)
            }
        }
        localStorage.setItem('shopping_cart', JSON.stringify(shoppingCartItems))
    }

    return (
        <div className= {styles.shoppingCartContainer}>
            <div className = {styles.shoppingCartItemsContainer}>
                {   
                    shoppingCartItems !== null && shoppingCartItems.length > 0 ? (
                        shoppingCartItems.map((e,i) => {
                            return <ShoppingCartItem
                                key = {e.name} 
                                name = {e.name} 
                                amount = {e.amount} 
                                sum = {e.sum}
                                img = {e.img}
                                handleDelete = {handleDeleteFromShoppingCart}
                            />
                        })) : (
                        'Nothing was found'
                    )
                }
            </div>
            <div className= {styles.totallySum}>
                Total cost: $ {totalCost}
            </div>
        </div>
    );
};

export default ShoppingCartContainer;