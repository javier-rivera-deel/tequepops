(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.96667c24.jpg"},function(e,a,t){e.exports=t.p+"static/media/alert-triangle.207fba57.svg"},function(e,a,t){e.exports=t.p+"static/media/plus-circle.73d3c13e.svg"},,function(e,a,t){e.exports=t(48)},,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},,,,,,,,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(9),r=t.n(l),s=(t(19),t(1)),m=t(2),i=t(4),o=t(3),u=t(5),d=(n.Component,t(21),t(10)),E=t.n(d),p=t(11),v=t.n(p),N=t(12),f=t.n(N),O=t(13),b=t.n(O),y=c.a.createContext(),h=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={amount:6,order:"tequenio",clients:[{id:1,name:"javier"},{id:2,name:"raul"},{id:3,name:"marcos"},{id:4,name:"princesa"},{id:5,name:"martina"},{id:6,name:"pericles"},{id:7,name:"antonio"},{id:8,name:"milagritos josefina"}]},t.addUser=function(e){var a=Array.from(t.state.clients),n={name:e,id:b()()};a.push(n),t.setState({clients:a})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(y.Provider,{value:{state:this.state,increaseOrder:function(){return e.setState({amount:e.state.amount+1})},addUser:this.addUser}},this.props.children)}}]),a}(n.Component),j=(t(33),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={name:"",enableAdding:!1},t.addUser=function(e){console.log(t.context.addUser(t.state.name))},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(y.Consumer,null,function(a){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"logo"},c.a.createElement("div",{className:"logo-written"},c.a.createElement("p",null,"TEQUEPOPS-CALC!")),c.a.createElement("div",{className:"logo-image"},c.a.createElement("img",{className:"logo-jpg",src:E.a,alt:""}))),c.a.createElement("div",{className:"username-input"},c.a.createElement("div",{className:"username"},c.a.createElement("input",{value:e.state.name,type:"text",placeholder:"QUIEN COME?",onChange:function(a){e.setState({name:a.target.value})}})),c.a.createElement("div",{className:"buttons"},c.a.createElement("div",{onClick:function(){e.state.name.length>1&&(a.addUser(e.state.name),e.setState({name:""}))},className:"btn-add-user"},c.a.createElement("img",{className:"icon",src:f.a,alt:""}),c.a.createElement("span",{className:"icon-label"},"AGREGA")),c.a.createElement("div",{className:"btn-reset-app"},c.a.createElement("img",{className:"icon",src:v.a,alt:""}),c.a.createElement("span",{className:"icon-label"},"RESET")))))}))}}]),a}(n.Component)),g=(t(35),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={selected:0},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.context.state.clients}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y.Consumer,null,function(e){return c.a.createElement("div",{className:"client-list"},e.state.clients.map(function(e){return c.a.createElement("div",{key:e.id,className:"client-name"},e.name)}))}))}}]),a}(n.Component));g.contextType=y;var A=g,C=(t(37),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"product-list"},c.a.createElement("div",{className:"product"},c.a.createElement("span",{className:"product-name"},"TEQUENOS"),c.a.createElement("select",{className:"product-select"},c.a.createElement("option",{value:"volvo"},"0"),c.a.createElement("option",{value:"volvo"},"1"),c.a.createElement("option",{value:"saab"},"2"),c.a.createElement("option",{value:"mercedes"},"3"),c.a.createElement("option",{value:"audi"},"4"))),c.a.createElement("div",{className:"product"},c.a.createElement("span",{className:"product-name"},"PASTELITO CARNE"),c.a.createElement("select",{className:"product-select"},c.a.createElement("option",{value:"volvo"},"0"),c.a.createElement("option",{value:"volvo"},"1"),c.a.createElement("option",{value:"saab"},"2"),c.a.createElement("option",{value:"mercedes"},"3"),c.a.createElement("option",{value:"audi"},"4"))),c.a.createElement("div",{className:"product"},c.a.createElement("span",{className:"product-name"},"PASTELITO PIZZA"),c.a.createElement("select",{className:"product-select"},c.a.createElement("option",{value:"volvo"},"0"),c.a.createElement("option",{value:"volvo"},"1"),c.a.createElement("option",{value:"saab"},"2"),c.a.createElement("option",{value:"mercedes"},"3"),c.a.createElement("option",{value:"audi"},"4"))),c.a.createElement("div",{className:"product"},c.a.createElement("span",{className:"product-name"},"PASTELITO PAPA CON QUESO"),c.a.createElement("select",{className:"product-select"},c.a.createElement("option",{value:"volvo"},"0"),c.a.createElement("option",{value:"volvo"},"1"),c.a.createElement("option",{value:"saab"},"2"),c.a.createElement("option",{value:"mercedes"},"3"),c.a.createElement("option",{value:"audi"},"4"))))}}]),a}(n.Component)),w=(t(39),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"calculations"},c.a.createElement(A,null),c.a.createElement(C,null))}}]),a}(n.Component)),T=(t(41),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"results"},c.a.createElement("div",{className:"summary"},c.a.createElement("div",{className:"summary-detail"},c.a.createElement("div",{className:"dozen-wrapper"},c.a.createElement("div",{className:"summary-detail-desc"},"DOCENAS"),c.a.createElement("span",null,"4 mas para 3 docenas")),c.a.createElement("div",{className:"summary-detail-quantity"},"2")),c.a.createElement("div",{className:"summary-detail"},c.a.createElement("div",{className:"summary-detail-desc"},"TEQUEBACON"),c.a.createElement("div",{className:"summary-detail-quantity"},"5")),c.a.createElement("div",{className:"summary-detail"},c.a.createElement("div",{className:"summary-detail-desc"},"TEQUEYOYO"),c.a.createElement("div",{className:"summary-detail-quantity"},"30")),c.a.createElement("div",{className:"summary-detail"},c.a.createElement("div",{className:"summary-detail-desc"},"PAPITAS"),c.a.createElement("div",{className:"summary-detail-quantity"},"8")),c.a.createElement("div",{className:"summary-detail"},c.a.createElement("div",{className:"summary-detail-desc"},"MANDOCAS"),c.a.createElement("div",{className:"summary-detail-quantity"},"5")),c.a.createElement("div",{className:"summary-detail"},c.a.createElement("div",{className:"summary-detail-desc"},"TEQUEBACON"),c.a.createElement("div",{className:"summary-detail-quantity"},"6"))),c.a.createElement(y.Consumer,null,function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"btn-container"},c.a.createElement("a",{className:"btn-whatsapp",href:"https://wa.me/5491132379456?text=Hola%20tequepops%20queria%20pedirte%20lo%20siguiente:"},"WHATSAPP")),c.a.createElement("p",null,"i want ",e.state.amount," ",e.state.order," please!"))})))}}]),a}(n.Component)),k=(t(43),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer"},"FOOTER!")}}]),a}(n.Component)),S=(t(45),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(h,null,c.a.createElement("div",{className:"App"},c.a.createElement(j,null),c.a.createElement("div",{className:"middle"},c.a.createElement(w,null),c.a.createElement(T,null)),c.a.createElement(k,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,2,1]]]);
//# sourceMappingURL=main.1ec37db2.chunk.js.map