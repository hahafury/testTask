import React, {useState, useRef} from 'react';
import styles from './ShopItem.module.sass';
import CONSTANTS from '../../constants'

const ShopItem = (props) => {
    const [amount, setAmount] = useState(0.25)

    const inputValue = useRef()

    const handleChangeAmountValue = (action) => {
        switch (action) {
            case 'INCREASE': {
                setAmount(parseFloat(inputValue.current.value) + 0.25)
                break;
            }
            case 'DECREASE': {
                if((amount - 0.25) < 0) setAmount(0)
                else setAmount(parseFloat(inputValue.current.value)-0.25)
                break;
            }
            default: {
                break;
            }
        }
    }

    const buyItem = (name, price, amount, discount) => {
        const shoppingCart = JSON.parse(localStorage.getItem('shopping_cart'));
        if(amount <= 0){
            return alert('Amount must be greater than zero')
        }
        const item = {
            name: name,
            price: price,
            amount: amount,
        };
        if(discount) item.discount = discount;
        setItemInShoppingCart(shoppingCart, item)
    }

    const findItemInShoppingCart = (shoppingCart, itemName) => {
        let result;
        shoppingCart.forEach(item =>{
            if(item.name === itemName){
                result = item;
            };
        })
        return result ? true : false
    };

    const setItemInShoppingCart = (shoppingCart, data) => {
        
        if(shoppingCart === null) {
            localStorage.setItem('shopping_cart', JSON.stringify([{
                name: data.name,
                amount: data.amount,
                price: data.price,
                sum: checkDiscount(data),
            }]))
        } else if(findItemInShoppingCart(shoppingCart, data.name) === true){
            for(let i = 0; i <= shoppingCart.length - 1 ; i++){
                if(shoppingCart[i].name === data.name) {
                    shoppingCart[i].amount += data.amount
                    shoppingCart[i].sum = checkDiscount({
                        name: shoppingCart[i].name,
                        amount: shoppingCart[i].amount,
                        price: data.price,
                        discount: data.discount
                    })
                }
            }
            localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart))
        } else{
            shoppingCart.push({
                name: data.name,
                amount: data.amount,
                sum: checkDiscount(data)
            })
            localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart))
        }
    }

    const checkDiscount = (data) => {
        if (data.discount){
            return (
                (data.amount % data.discount.perKg)*data.price)
                + ((data.amount - (data.amount % data.discount.perKg)) 
                * data.discount.value/data.discount.perKg)
        } else{
            return data.amount * data.price
        }
    }

    return (
        <div className = {styles.itemContainer}>
            <div className = {styles.itemImg}>
                <img src={props.img} alt = "item img"/>
            </div>
            <div className = {styles.itemName}>{props.name}</div>
            <div className = {styles.itemPrice}>&#36;{props.price} per kilogram</div>
            <div className = {styles.amountInfo}>
                <div className = {styles.amountContainer}>
                    <button className = {styles.chooseAmountButton} onClick={() => handleChangeAmountValue(CONSTANTS.DECREASE)}>-</button>
                    <input ref = {inputValue} value = {amount} onChange = {(changedValue) => setAmount(parseFloat(changedValue.target.value))}/>
                    <button className = {styles.chooseAmountButton} onClick={() => handleChangeAmountValue(CONSTANTS.INCREASE)}>+</button>
                </div>
            </div>
            <button className = {styles.buyButton} onClick = {() => buyItem(props.name, props.price, amount, props.discount)}>Buy</button>
        </div>
    );
};

export default ShopItem;