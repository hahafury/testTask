import React, {useEffect, useState} from 'react';
import ShopItem from '../ShopItem/ShopItem.js';
import styles from './ShopItemsContainer.module.sass';

const ItemsContainer = (props) => {
    return (
        <div className = {styles.itemsContainer}>
            {props.itemsList.map((e,i) => {
                return <ShopItem key = {i} name = {e.name} price = {e.price} img = {e.img}/>
            })}
        </div>
    );
};

export default ItemsContainer;