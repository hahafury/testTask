import React, {useState} from 'react';
import styles from './ShoppingCartItem.module.sass'
import json from '../../items.json'

const ShoppingCartItem = (props) => {
    const [isDeleted, setIsDeleted] = useState(false)

    const renderImg = (itemName) => {
        let img
        for(let elem of json){
            if(elem.name === itemName){
                img = elem.img
            }
        }
        return <img src={img} alt = "item img"/>
    }

    const handleDeleteItem = (name) => {
        setIsDeleted(true)
        props.handleDelete(name)
    }

    return (
        <>
        {
            !isDeleted ? (
                <div className =  {styles.shoppingCartItemContainer}>
                    <div className = {styles.itemImg}>
                        {renderImg(props.name)}
                    </div>
                    <div className = {styles.itemName}>{props.name}</div>
                    <div className = {styles.itemAmount}>Amount: <strong>{props.amount} kg</strong></div>
                    <div className = {styles.itemSum}>Total cost: <strong>&#36; {props.sum}</strong></div>
                    <button className = {styles.deleteItemButton} onClick={() => handleDeleteItem(props.name)}>Delete from shopping cart</button>
                </div>
            ) :(
                false
            )
        }
        </>
    )
}

export default ShoppingCartItem;