(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(t,e,n){t.exports={itemContainer:"ShopItem_itemContainer__TiU3n",itemImg:"ShopItem_itemImg__3d62x",itemName:"ShopItem_itemName__2IglE",itemPrice:"ShopItem_itemPrice___p8FD",buyButton:"ShopItem_buyButton__Ighta",amountInfo:"ShopItem_amountInfo__2ouqe",amountContainer:"ShopItem_amountContainer__3aJ-A",chooseAmountButton:"ShopItem_chooseAmountButton__2GbZ9"}},,function(t,e,n){t.exports={shoppingCartItemContainer:"ShoppingCartItem_shoppingCartItemContainer__1ymAA",itemImg:"ShoppingCartItem_itemImg__QC_bq",itemName:"ShoppingCartItem_itemName__1TJ8d",itemAmount:"ShoppingCartItem_itemAmount__2Iy-W",itemSum:"ShoppingCartItem_itemSum__juB31",deleteItemButton:"ShoppingCartItem_deleteItemButton__30pIA",amountInfo:"ShoppingCartItem_amountInfo__1zB-X",amountContainer:"ShoppingCartItem_amountContainer__20cor",chooseAmountButton:"ShoppingCartItem_chooseAmountButton__JLg_m"}},function(t,e,n){t.exports={mainPage:"App_mainPage__3hAMu",infoDiv:"App_infoDiv__1sxha",nav:"App_nav__1FzSt",navItem:"App_navItem__2RC4t"}},function(t){t.exports=JSON.parse('[{"name":"Banana","price":10,"img":"https://www.lovemysalad.com/sites/default/files/styles/image_530x397/public/banaan-large.jpg?itok=dZxH6D_w"},{"name":"Apple","price":8,"img":"https://ezsai.com/wp-content/uploads/2021/02/firefox_2018-07-10_07-50-11.png"},{"name":"Papaya","price":10,"img":"https://sudhaventures.com/wp-content/uploads/2021/07/Papaya.jpg"}]')},,,function(t,e,n){t.exports={shoppingCartItemsContainer:"ShoppingCartContainer_shoppingCartItemsContainer__27zhy",totallySum:"ShoppingCartContainer_totallySum__1YlTf"}},,function(t,e,n){t.exports={itemsContainer:"ShopItemsContainer_itemsContainer__1GTkE"}},,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),o=n(10),m=n.n(o),r=n(3),c="INCREASE",s="DECREASE",u="VIEW_MODE_SHOPPING_CART",p="VIEW_MODE_SHOP",l=n(5),h=n.n(l),g=n(2),_=n.n(g),j=n(0),d=function(t){var e=Object(a.useState)(.25),n=Object(r.a)(e,2),i=n[0],o=n[1],m=Object(a.useRef)();Object(a.useEffect)((function(){m.current.value=i}),[i]);var u=function(t){switch(t){case"INCREASE":o(parseFloat(m.current.value)+.25);break;case"DECREASE":o(i-.25<0?0:parseFloat(m.current.value)-.25)}},p=function(t,e){if(null===t)localStorage.setItem("shopping_cart",JSON.stringify([{name:e.name,amount:e.amount,price:e.price,sum:l(e)}]));else if(!0===function(t,e){var n;return t.forEach((function(t){t.name===e&&(n=t)})),!!n}(t,e.name)){for(var n=0;n<=t.length-1;n++)t[n].name===e.name&&(t[n].amount+=e.amount,t[n].sum=l({name:t[n].name,amount:t[n].amount,price:e.price}));localStorage.setItem("shopping_cart",JSON.stringify(t))}else t.push({name:e.name,amount:e.amount,sum:l(e)}),localStorage.setItem("shopping_cart",JSON.stringify(t))},l=function(t){var e;if("Papaya"===t.name)e=t.amount%3*t.price+25*(t.amount-t.amount%3)/3;else e=t.amount*t.price;return e};return Object(j.jsxs)("div",{className:_.a.itemContainer,children:[Object(j.jsx)("div",{className:_.a.itemImg,children:Object(j.jsx)("img",{src:t.img,alt:"item img"})}),Object(j.jsx)("div",{className:_.a.itemName,children:t.name}),Object(j.jsxs)("div",{className:_.a.itemPrice,children:["$",t.price," per kilogram"]}),Object(j.jsx)("div",{className:_.a.amountInfo,children:Object(j.jsxs)("div",{className:_.a.amountContainer,children:[Object(j.jsx)("button",{className:_.a.chooseAmountButton,onClick:function(){return u(s)},children:"-"}),Object(j.jsx)("input",{ref:m,onChange:function(t){return o(t.target.value)}}),Object(j.jsx)("button",{className:_.a.chooseAmountButton,onClick:function(){return u(c)},children:"+"})]})}),Object(j.jsx)("button",{className:_.a.buyButton,onClick:function(){return function(t,e,n){var a=JSON.parse(localStorage.getItem("shopping_cart"));if(n<=0)return alert("Amount must be greater than zero");p(a,{name:t,price:e,amount:n})}(t.name,t.price,i)},children:"Buy"})]})},f=n(11),b=n.n(f),I=function(t){return Object(j.jsx)("div",{className:b.a.itemsContainer,children:t.itemsList.map((function(t,e){return Object(j.jsx)(d,{name:t.name,price:t.price,img:t.img},e)}))})},C=n(6),O=n(9),S=n.n(O),v=n(12),x=n(4),N=n.n(x),A=function(t){var e=Object(a.useState)(!1),n=Object(r.a)(e,2),i=n[0],o=n[1];return Object(j.jsx)(j.Fragment,{children:!i&&Object(j.jsxs)("div",{className:N.a.shoppingCartItemContainer,children:[Object(j.jsx)("div",{className:N.a.itemImg,children:function(t){var e,n,a=Object(v.a)(C);try{for(a.s();!(n=a.n()).done;){var i=n.value;i.name===t&&(e=i.img)}}catch(o){a.e(o)}finally{a.f()}return Object(j.jsx)("img",{src:e,alt:"item img"})}(t.name)}),Object(j.jsx)("div",{className:N.a.itemName,children:t.name}),Object(j.jsxs)("div",{className:N.a.itemAmount,children:["Amount: ",Object(j.jsxs)("strong",{children:[t.amount," kg"]})]}),Object(j.jsxs)("div",{className:N.a.itemSum,children:["Total cost: ",Object(j.jsxs)("strong",{children:["$ ",t.sum]})]}),Object(j.jsx)("button",{className:N.a.deleteItemButton,onClick:function(){return function(t){for(var e=JSON.parse(localStorage.getItem("shopping_cart")),n=0;n<=e.length-1;n++)e[n].name===t&&e.splice(n,1);o(!0),localStorage.setItem("shopping_cart",JSON.stringify(e))}(t.name)},children:"Delete from shopping cart"})]})})},y=function(t){var e=Object(a.useState)(JSON.parse(localStorage.getItem("shopping_cart"))),n=Object(r.a)(e,1)[0];return Object(j.jsx)("div",{className:S.a.shoppingCartContainer,children:Object(j.jsx)("div",{className:S.a.shoppingCartItemsContainer,children:null!==n&&n.length>0?n.map((function(t,e){return Object(j.jsx)(A,{name:t.name,amount:t.amount,sum:t.sum,img:t.img},e)})):"Nothing was found"})})};var E=function(){var t=Object(a.useState)(p),e=Object(r.a)(t,2),n=e[0],i=e[1];return Object(j.jsxs)("div",{className:h.a.mainPage,children:[Object(j.jsxs)("div",{className:h.a.nav,children:[Object(j.jsx)("div",{className:h.a.navItem,style:n===p?{backgroundColor:"green",color:"white"}:null,onClick:function(){i(p)},children:"Shop"}),Object(j.jsx)("div",{className:h.a.navItem,style:n===u?{backgroundColor:"green",color:"white"}:null,onClick:function(){i(u)},children:"Shopping cart"})]}),Object(j.jsx)("div",{className:h.a.infoDiv,children:n===p?Object(j.jsx)(I,{itemsList:C}):Object(j.jsx)(y,{})})]})},B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,m=e.getTTFB;n(t),a(t),i(t),o(t),m(t)}))};m.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root")),B()}],[[18,1,2]]]);
//# sourceMappingURL=main.fb875c52.chunk.js.map