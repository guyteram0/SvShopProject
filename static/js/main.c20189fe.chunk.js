(this.webpackJsonpsvshop=this.webpackJsonpsvshop||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=(a(13),a(7)),i=a(1),u=a(2),s=a(4),m=a(3),p=(a(14),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Name:",this.props.name," "),r.a.createElement("h3",null,"Price:",this.props.price," ")," ",r.a.createElement("br",null),r.a.createElement("button",{className:"btn1",style:{backgroundColor:"green"},onClick:function(){e.props.add(e.props.name,e.props.price)}},"Add To Cart"))}}]),a}(n.Component)),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Name:",this.props.name," "),r.a.createElement("h3",null,"Price:",this.props.price," ")," ",r.a.createElement("br",null))}}]),a}(n.Component),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={products:[{name:" Computer ",price:3500},{name:" Microwave ",price:2500},{name:" Television ",price:4e3},{name:" Laptop ",price:3e3},{name:" Camera ",price:5200},{name:" CellPhone  ",price:2800}],cart:[],flag:!1},e.buyButton=function(){return r.a.createElement("div",null,e.setState({cart:[]}),alert("Purchase Accepted"))},e.addItem=function(t,a){e.setState({cart:[{name:t,price:a}].concat(Object(o.a)(e.state.cart))})},e.totalPrice=function(){var t=0;return e.state.cart.map((function(e){return t+=e.price})),t},e.ShowCart=function(){return 1==e.state.flag?r.a.createElement("div",{className:"a3"},r.a.createElement("div",null,r.a.createElement("h3",null,"totalPrice:",e.totalPrice()),r.a.createElement("button",{className:"btn1",style:{backgroundColor:"red"},onClick:e.buyButton},"Buy"),r.a.createElement("h1",null,"Cart")),r.a.createElement("div",{className:"a2"},e.state.cart.map((function(t){return r.a.createElement(d,{name:t.name,price:t.price,cart:e.state.cart})})))):r.a.createElement("div",{className:"a1"},e.state.products.map((function(t){return r.a.createElement(p,{name:t.name,price:t.price,add:e.addItem})})))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("button",{className:"btn2",style:{backgroundColor:"blue"},onClick:function(){e.setState({flag:!0})}},"Cart")," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"btn2",style:{backgroundColor:"blue"},onClick:function(){e.setState({flag:!1})}},"Shop"),this.ShowCart())}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c20189fe.chunk.js.map