(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{50:function(t,e,c){},76:function(t,e,c){},77:function(t,e,c){},78:function(t,e,c){"use strict";c.r(e);var r=c(16),n=c(0),a=c.n(n),s=c(19),i=c.n(s),o=(c(50),c(17)),l=c(6),d=c(15),u=c(18),j=c.n(u),b=c(34),h=c(22),m=c(27),p=c(5),O=c(24),f=c.n(O),x=c(26),v=c(2),g={cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],cartTotalQuantity:0,cartTotalAmount:0},y=Object(v.d)({name:"cart",initialState:g,reducers:{addToCart:function(t,e){var c=t.cartItems.findIndex((function(t){return t.id===e.payload.id}));if(c>=0)t.cartItems[c]=Object(x.a)(Object(x.a)({},t.cartItems[c]),{},{cartQuantity:t.cartItems[c].cartQuantity+1}),d.b.info("Increased product quantity",{position:"bottom-left"});else{var r=Object(x.a)(Object(x.a)({},e.payload),{},{cartQuantity:1});t.cartItems.push(r),d.b.success("Product added to cart",{position:"bottom-left"})}localStorage.setItem("cartItems",JSON.stringify(t.cartItems))},decreaseCart:function(t,e){var c=t.cartItems.findIndex((function(t){return t.id===e.payload.id}));if(t.cartItems[c].cartQuantity>1)t.cartItems[c].cartQuantity-=1,d.b.info("Decreased product quantity",{position:"bottom-left"});else if(1===t.cartItems[c].cartQuantity){var r=t.cartItems.filter((function(t){return t.id!==e.payload.id}));t.cartItems=r,d.b.error("Product removed from cart",{position:"bottom-left"})}localStorage.setItem("cartItems",JSON.stringify(t.cartItems))},removeFromCart:function(t,e){t.cartItems.map((function(c){if(c.id===e.payload.id){var r=t.cartItems.filter((function(t){return t.id!==c.id}));t.cartItems=r,d.b.error("Product removed from cart",{position:"bottom-left"})}return localStorage.setItem("cartItems",JSON.stringify(t.cartItems)),t}))},getTotals:function(t,e){var c=t.cartItems.reduce((function(t,e){var c=e.price,r=e.cartQuantity,n=c*r;return t.total+=n,t.quantity+=r,t}),{total:0,quantity:0}),r=c.total,n=c.quantity;r=parseFloat(r.toFixed(2)),t.cartTotalQuantity=n,t.cartTotalAmount=r},clearCart:function(t,e){t.cartItems=[],localStorage.setItem("cartItems",JSON.stringify(t.cartItems)),d.b.error("Cart cleared",{position:"bottom-left"})}}}),N=y.actions,w=N.addToCart,I=N.decreaseCart,C=N.removeFromCart,S=N.getTotals,T=N.clearCart,k=y.reducer,Q=c(1),A=function(){var t=Object(p.e)((function(t){return t.cart})).cartTotalQuantity;return Object(Q.jsxs)("nav",{className:"nav-bar",children:[Object(Q.jsx)(o.b,{to:"/home",children:Object(Q.jsx)("h2",{children:"Shopping Mart"})}),Object(Q.jsx)(o.b,{to:"/cart",children:Object(Q.jsxs)("div",{className:"nav-bag",children:[Object(Q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",className:"bi bi-handbag-fill",viewBox:"0 0 16 16",children:Object(Q.jsx)("path",{d:"M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"})}),Object(Q.jsx)("span",{className:"bag-quantity",children:Object(Q.jsx)("span",{children:t})})]})})]})};var E=function(t){var e=t.setSearch,c=Object(n.useCallback)(function(t){var e;return function(){for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];var a=this;e&&clearTimeout(e),e=setTimeout((function(){e=null,t.apply(a,r)}),500)}}((function(t){e(t)})),[]);return Object(Q.jsx)("div",{style:{right:"0px",width:"100%",position:"fixed",marginRight:"20%",paddingLeft:"58%",paddingRight:"0%"},children:Object(Q.jsx)("input",{type:"text",placeholder:"Search Your Product ",style:{width:"40%",height:"35px"},onChange:function(t){return c(t.target.value)}})})},P=function(t){var e=t.product,c=Object(p.d)(),r=e.category,n=e.catData;return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)("div",{style:{display:"flex",marginTop:"4rem"},children:Object(Q.jsxs)("h1",{children:[Object(Q.jsx)("b",{children:"Category"})," ",": ",r.toUpperCase()]})}),Object(Q.jsx)("div",{className:"products",children:n.map((function(t){return Object(Q.jsxs)("div",{className:"product",children:[Object(Q.jsx)("h3",{children:t.title}),Object(Q.jsx)("img",{src:t.images[0],alt:t.name}),Object(Q.jsxs)("div",{className:"details",children:[Object(Q.jsx)("span",{children:t.description}),Object(Q.jsxs)("span",{className:"price",children:["$",t.price]})]}),Object(Q.jsx)("button",{onClick:function(){return function(t){c(w(t)),c(S())}(t)},children:"Add To Cart"})]},t.id)}))})]})},q=function(){var t=Object(p.e)((function(t){return t.products})).status,e=Object(n.useState)(0),c=Object(m.a)(e,2),r=c[0],a=c[1],s=Object(n.useState)(""),i=Object(m.a)(s,2),o=i[0],l=i[1],d=Object(p.d)(),u=Object(n.useState)([]),O=Object(m.a)(u,2),x=O[0],v=O[1],g=new Set(null===x||void 0===x?void 0:x.map((function(t){return t.category}))),y=Object(n.useState)([]),N=Object(m.a)(y,2),I=N[0],C=N[1],T=function(t){console.log(r,"page"),window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight&&a((function(t){return t+10}))};Object(n.useEffect)((function(){var t=function(){var t=Object(h.a)(j.a.mark((function t(){var e,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://dummyjson.com/products?skip=".concat(r,"&limit=10"));case 2:e=t.sent,c=e.data,console.log(c,"responseData"),v(0===r?c.products:function(t){return[].concat(Object(b.a)(t),Object(b.a)(c.products))});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=Object(h.a)(j.a.mark((function t(){var e,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://dummyjson.com/products?limit=100");case 2:e=t.sent,c=e.data,console.log(c,"responseData"),v(c.products),a(0);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();o.length?e():t()}),[r,o]),Object(n.useEffect)((function(){var t=[];null===g||void 0===g||g.forEach((function(e){var c={category:e,catData:[]};console.log(x,"data"),null===x||void 0===x||x.forEach((function(t){t.category===e&&c.catData.push(t)})),t.push(c)})),C(t)}),[x]);return Object(n.useEffect)((function(){return window.addEventListener("scroll",T),function(){return window.removeEventListener("scroll",T)}}),[]),Object(Q.jsx)("div",{className:"home-container",children:"success"===t?Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(A,{}),Object(Q.jsx)(E,{setSearch:function(t){return l(t)}}),Object(Q.jsx)("div",{className:"products",children:o.length?x&&(null===x||void 0===x?void 0:x.filter((function(t){var e;return null===(e=t.title)||void 0===e?void 0:e.toLowerCase().includes(o.toLowerCase())})).reverse().map((function(t){return Object(Q.jsxs)("div",{style:{marginTop:"4rem"},className:"product",children:[Object(Q.jsx)("h3",{children:t.title}),Object(Q.jsx)("img",{src:t.images[0],alt:t.name}),Object(Q.jsxs)("div",{className:"details",children:[Object(Q.jsx)("span",{children:t.description}),Object(Q.jsxs)("span",{className:"price",children:["$",t.price]})]}),Object(Q.jsx)("button",{onClick:function(){return function(t){d(w(t)),d(S())}(t)},children:"Add To Cart"})]},t.id)}))):null===I||void 0===I?void 0:I.map((function(t){return Object(Q.jsx)("div",{children:Object(Q.jsx)(P,{product:t})},t.category)}))})]}):"pending"===t?Object(Q.jsx)("p",{children:"Loading..."}):Object(Q.jsx)("p",{children:"Unexpected error occured..."})})},H=function(){return Object(Q.jsxs)("div",{className:"not-found",children:[Object(Q.jsx)("h2",{children:"404"}),Object(Q.jsx)("p",{children:"Page not found"})]})},L=function(){var t=Object(p.e)((function(t){return t.cart})),e=Object(p.d)();Object(n.useEffect)((function(){e(S())}),[t,e]);return Object(Q.jsxs)("div",{className:"cart-container",children:[Object(Q.jsx)(A,{}),Object(Q.jsx)("h2",{children:"Shopping Cart"}),0===t.cartItems.length?Object(Q.jsxs)("div",{className:"cart-empty",children:[Object(Q.jsx)("p",{children:"Your cart is currently empty"}),Object(Q.jsx)("div",{className:"start-shopping",children:Object(Q.jsxs)(o.b,{to:"/home",children:[Object(Q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16",children:Object(Q.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}),Object(Q.jsx)("span",{children:"Start Shopping"})]})})]}):Object(Q.jsxs)("div",{children:[Object(Q.jsxs)("div",{className:"titles",children:[Object(Q.jsx)("h3",{className:"product-title",children:"Product"}),Object(Q.jsx)("h3",{className:"price",children:"Price"}),Object(Q.jsx)("h3",{className:"quantity",children:"Quantity"}),Object(Q.jsx)("h3",{className:"total",children:"Total"})]}),Object(Q.jsx)("div",{className:"cart-items",children:t.cartItems&&t.cartItems.map((function(t){return Object(Q.jsxs)("div",{className:"cart-item",children:[Object(Q.jsxs)("div",{className:"cart-product",children:[Object(Q.jsx)("img",{src:t.images[0],alt:t.title}),Object(Q.jsxs)("div",{children:[Object(Q.jsx)("h3",{children:t.title}),Object(Q.jsx)("p",{children:t.description}),Object(Q.jsx)("button",{onClick:function(){e(C(t))},children:"Remove"})]})]}),Object(Q.jsxs)("div",{className:"cart-product-price",children:["$",t.price]}),Object(Q.jsxs)("div",{className:"cart-product-quantity",children:[Object(Q.jsx)("button",{onClick:function(){e(I(t))},children:"-"}),Object(Q.jsx)("div",{className:"count",children:t.cartQuantity}),Object(Q.jsx)("button",{onClick:function(){e(w(t))},children:"+"})]}),Object(Q.jsxs)("div",{className:"cart-product-total-price",children:["$",t.price*t.cartQuantity]})]},t.id)}))}),Object(Q.jsxs)("div",{className:"cart-summary",children:[Object(Q.jsx)("button",{className:"clear-btn",onClick:function(){e(T())},children:"Clear Cart"}),Object(Q.jsxs)("div",{className:"cart-checkout",children:[Object(Q.jsxs)("div",{className:"subtotal",children:[Object(Q.jsx)("span",{children:"Subtotal"}),Object(Q.jsxs)("span",{className:"amount",children:["$",t.cartTotalAmount]})]}),Object(Q.jsx)("p",{children:"Taxes and shipping calculated at checkout"}),Object(Q.jsx)("button",{children:"Check out"}),Object(Q.jsx)("div",{className:"continue-shopping",children:Object(Q.jsxs)(o.b,{to:"/home",children:[Object(Q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-arrow-left",viewBox:"0 0 16 16",children:Object(Q.jsx)("path",{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})}),Object(Q.jsx)("span",{children:"Continue Shopping"})]})})]})]})]})]})};c(75);var D,F=function(){return Object(Q.jsx)("div",{className:"App",children:Object(Q.jsxs)(o.a,{basename:"Shopping-Cart",children:[Object(Q.jsx)(d.a,{}),Object(Q.jsx)("div",{className:"content-container",children:Object(Q.jsxs)(l.c,{children:[Object(Q.jsx)(l.a,{path:"/",component:q,exact:!0}),Object(Q.jsx)(l.a,{path:"/cart",component:L}),Object(Q.jsx)(l.a,{path:"/not-found",component:H}),Object(Q.jsx)(l.a,{path:"/home",component:q})]})})]})})},J=Object(v.c)("products/productsFetch",Object(h.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("https://dummyjson.com/products?limit=30");case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))),M=Object(v.d)({name:"products",initialState:{items:[],status:null},reducers:{},extraReducers:(D={},Object(r.a)(D,J.pending,(function(t,e){t.status="pending"})),Object(r.a)(D,J.fulfilled,(function(t,e){t.items=e.payload,t.status="success"})),Object(r.a)(D,J.rejected,(function(t,e){t.status="rejected"})),D)}).reducer,R=c(44),$=c(9),z=Object(R.a)({reducerPath:"productsApi",baseQuery:Object($.d)({baseUrl:"https://dummyjson.com/"}),endpoints:function(t){return{getAllProducts:t.query({query:function(){return"/products?limit=30"}})}}}),B=(z.useGetAllProductsQuery,c(7)),V=c(25),U=c(45),Y=(c(76),c(77),[V.a]),G=Object(v.a)({reducer:Object(r.a)({products:M,cart:k},z.reducerPath,z.reducer),middleware:function(t){return t().concat(z.middleware)}},Object(U.composeWithDevTools)(B.applyMiddleware.apply(void 0,Y)));G.dispatch(J()),G.dispatch(S()),i.a.render(Object(Q.jsx)(a.a.StrictMode,{children:Object(Q.jsx)(p.a,{store:G,children:Object(Q.jsx)(F,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.92c9643b.chunk.js.map