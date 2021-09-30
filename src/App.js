import React, {useState}from 'react';
import CONSTANTS from './constants'
import styles from './App.module.sass'
import ShopItemsContainer from './Shop/ShopItemsContainer/ShopItemsContainer';
import json from './items.json';
import ShoppingCartContainer from './ShoppingCart/ShoppingCartContainer/ShoppingCartContainer';

function App() {
  const [viewMode, setViewMode] = useState(CONSTANTS.VIEW_MODE_SHOP)
  
  return(
    <div className = {styles.mainPage}>
      <div className = {styles.nav}>
        <div 
          className = {styles.navItem}
          style = {
            viewMode === CONSTANTS.VIEW_MODE_SHOP ? {backgroundColor: "green", color: "white"} : null
          }
          onClick={() => {setViewMode(CONSTANTS.VIEW_MODE_SHOP)}}
          >Shop
        </div>
        <div 
          className = {styles.navItem} 
          style = {
            viewMode === CONSTANTS.VIEW_MODE_SHOPPING_CART ? {backgroundColor: "green", color: "white"} : null
          }
          onClick={() => {setViewMode(CONSTANTS.VIEW_MODE_SHOPPING_CART)}}
          >Shopping cart
        </div>
      </div>
      <div className = {styles.infoDiv}>
        {viewMode === CONSTANTS.VIEW_MODE_SHOP 
          ? <ShopItemsContainer itemsList = {json}/> 
          : <ShoppingCartContainer/>}
      </div>
    </div>
  );
}

export default App;
