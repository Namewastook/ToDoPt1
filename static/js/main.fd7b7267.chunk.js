(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,o){e.exports=o(17)},17:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),l=o(8),c=o.n(l),s=(o(7),o(10)),i=o(1),r=o(2),d=o(4),u=o(3),m=o(5),h=o(9),p=function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={todos:h,value:""},o.handleDeleteToDo=function(e){return function(t){var a=o.state.todos.filter(function(t){return t.id!==e});o.setState({todos:a})}},o.handleChange=function(e){o.setState({value:e.target.value})},o.handleCheckToDo=function(e){return function(t){var a=o.state.todos.map(function(t){return t.id===e?Object(s.a)({},t,{completed:!t.completed}):t});o.setState({todos:a})}},o.handleAddToDo=function(e){if("Enter"===e.key){var t=o.state.todos.slice(),a={userId:1,id:Math.ceil(1e7*Math.random()),title:o.state.value,completed:!1};t.push(a),o.setState({todos:t,value:""})}},o.handleClearToDos=function(e){var t=o.state.todos.filter(function(e){return!1===e.completed});o.setState({todos:t})},o}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"todoapp"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"todos"),n.a.createElement("input",{onKeyDown:this.handleAddToDo,value:this.state.value,className:"new-todo",placeholder:"What needs to be done?",autofocus:!0,onChange:this.handleChange})),n.a.createElement(v,{todos:this.state.todos,handleDeleteToDo:this.handleDeleteToDo,handleCheckToDo:this.handleCheckToDo}),n.a.createElement("footer",{className:"footer"},n.a.createElement("span",{className:"todo-count"},n.a.createElement("strong",null,"0")," item(s) left"),n.a.createElement("button",{onClick:this.handleClearToDos,className:"clear-completed"},"Clear completed")))}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("li",{className:this.props.completed?"completed":""},n.a.createElement("div",{className:"view"},n.a.createElement("input",{className:"toggle",type:"checkbox",checked:this.props.completed,onClick:this.props.handleCheckToDo}),n.a.createElement("label",null,this.props.title),n.a.createElement("button",{onClick:this.props.handleDeleteToDo,className:"destroy"})))}}]),t}(a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{className:"main"},n.a.createElement("ul",{className:"todo-list"},this.props.todos.map(function(t){return n.a.createElement(f,{title:t.title,completed:t.completed,handleDeleteToDo:e.props.handleDeleteToDo(t.id),handleCheckToDo:e.props.handleCheckToDo(t.id)})})))}}]),t}(a.Component),b=p;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,o){},9:function(e){e.exports=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1}]}},[[11,2,1]]]);
//# sourceMappingURL=main.fd7b7267.chunk.js.map