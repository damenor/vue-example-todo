(function(t){function e(e){for(var n,r,a=e[0],i=e[1],l=e[2],s=0,b=[];s<a.length;s++)r=a[s],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(b.length)b.shift()();return d.push.apply(d,l||[]),o()}function o(){for(var t,e=0;e<d.length;e++){for(var o=d[e],n=!0,a=1;a<o.length;a++){var i=o[a];0!==c[i]&&(n=!1)}n&&(d.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},c={app:0},d=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=i;d.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"3dbb":function(t,e,o){"use strict";o("b050")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("830f"),c=o("5c40"),d=o("9ff4"),r={id:"header"},a={id:"main-container"};function i(t,e){var o=Object(c["r"])("TodoSearch"),n=Object(c["r"])("TodoAdd"),i=Object(c["r"])("TodoList");return Object(c["n"])(),Object(c["d"])("div",null,[Object(c["h"])("header",r,[Object(c["h"])("h1",null,Object(d["F"])(t.titleApp),1),Object(c["h"])(o,{"onTodo-search":t.todoSearch},null,8,["onTodo-search"])]),Object(c["h"])("main",a,[Object(c["h"])(n,{"onTodo-add":t.todoAdd},null,8,["onTodo-add"]),Object(c["h"])(i,{todoslist:t.todosCopy,"onTodo-delete":t.todoDelete},null,8,["todoslist","onTodo-delete"])])])}o("99af"),o("4de4"),o("caad"),o("2532"),o("498a");var l=o("2909"),u=Object(c["y"])("data-v-19411a70");Object(c["p"])("data-v-19411a70");var s={class:"todo-search"};Object(c["o"])();var b=u((function(t,e){return Object(c["n"])(),Object(c["d"])("div",s,[Object(c["x"])(Object(c["h"])("input",{type:"text",placeholder:t.placeholder,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.query=e}),onChange:e[2]||(e[2]=function(e){return t.$emit("todo-search",t.query)})},null,40,["placeholder"]),[[n["b"],t.query]])])})),p={name:"TodoSearch",data:function(){return{query:"",placeholder:"Search..."}}};o("9e2e");p.render=b,p.__scopeId="data-v-19411a70";var h=p,f=Object(c["y"])("data-v-e1130a94");Object(c["p"])("data-v-e1130a94");var O={class:"todo-add"},j=Object(c["h"])("button",null,"ADD",-1);Object(c["o"])();var v=f((function(t,e){return Object(c["n"])(),Object(c["d"])("div",O,[Object(c["h"])("form",{onSubmit:e[2]||(e[2]=function(){return t.onSubmit.apply(t,arguments)})},[Object(c["x"])(Object(c["h"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.title=e}),placeholder:t.placehoder},null,8,["placeholder"]),[[n["b"],t.title]]),j],32)])})),m=o("9612"),y={name:"TodoAdd",methods:{onSubmit:function(t){if(t.preventDefault(),this.title.length>0){var e={id:m["a"].v4(),title:this.title,completed:!1};this.title="",this.$emit("todo-add",e)}}},data:function(){return{title:"",placehoder:"add new todo"}}};o("3dbb");y.render=v,y.__scopeId="data-v-e1130a94";var T=y,_=Object(c["y"])("data-v-3aeabee6");Object(c["p"])("data-v-3aeabee6");var g={class:"todo-list"},S={key:0,class:"todo-list__empty"},x=Object(c["h"])("span",null,"😮",-1);Object(c["o"])();var w=_((function(t,e){var o=Object(c["r"])("TodoItem");return Object(c["n"])(),Object(c["d"])("div",g,[(Object(c["n"])(!0),Object(c["d"])(c["b"],null,Object(c["q"])(t.todoslist,(function(e){return Object(c["n"])(),Object(c["d"])(o,{key:e.id,todo:e,"onTodo-delete":function(o){return t.$emit("todo-delete",e.id)}},null,8,["todo","onTodo-delete"])})),128)),0===t.todoslist.length?(Object(c["n"])(),Object(c["d"])("div",S,[Object(c["h"])("h3",null,Object(d["F"])(t.textEmptyHeader),1),x,Object(c["h"])("p",null,Object(d["F"])(t.textEmptyCreateNew),1)])):Object(c["e"])("",!0)])})),C=o("ade3"),k=Object(c["y"])("data-v-4946ec90");Object(c["p"])("data-v-4946ec90");var A={class:"todo-item"},I={class:"todo-item__actions"};Object(c["o"])();var P=k((function(t,e){return Object(c["n"])(),Object(c["d"])("div",A,[Object(c["h"])("div",{class:"todo-item__body",onClick:e[1]||(e[1]=function(){return t.toggleCompleted.apply(t,arguments)})},[Object(c["h"])("div",{class:["todo-item__checkbox",Object(C["a"])({},"todo-item__checkbox--checked",t.todo.completed)]},Object(d["F"])(t.todo.completed?"😝":"😪"),3),Object(c["h"])("p",{class:["todo-item__title",Object(C["a"])({},"todo-item__title--completed",t.todo.completed)]},Object(d["F"])(t.todo.title),3)]),Object(c["h"])("div",I,[Object(c["h"])("button",{onClick:e[2]||(e[2]=function(e){return t.$emit("todo-delete",t.todo.id)})},Object(d["F"])(t.textButton),1)])])})),D={name:"TodoItem",props:["todo"],methods:{toggleCompleted:function(){this.todo.completed=!this.todo.completed}},data:function(){return{textButton:"borrar"}}};o("992b");D.render=P,D.__scopeId="data-v-4946ec90";var E=D,F={name:"TodoList",components:{TodoItem:E},props:["todoslist"],data:function(){return{textEmptyHeader:"ups!!!",textEmptyCreateNew:"there seems to be no homework, create a new one"}}};o("6fd4");F.render=w,F.__scopeId="data-v-3aeabee6";var q=F,J="todo-items",M=function(){return null!==window.localStorage},N=function(t,e){return!!M()&&localStorage.setItem(t,JSON.stringify(e))},U=function(t){return M()?JSON.parse(localStorage.getItem(t)):null},$={name:"App",components:{TodoSearch:h,TodoAdd:T,TodoList:q},methods:{todoAdd:function(t){this.todos=[].concat(Object(l["a"])(this.todos),[t]),this.setTodosCopy(),N(J,this.todos)},todoDelete:function(t){this.todos=this.todos.filter((function(e){return e.id!==t})),this.setTodosCopy(),N(J,this.todos)},todoSearch:function(t){if(console.log("QUERY",t),""===t.trim())this.setTodosCopy();else{var e=this.todos.filter((function(e){return e.title.includes(t)}));this.setTodosCopy(e)}},setTodosCopy:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.todos;this.todosCopy=Object(l["a"])(t)}},data:function(){return{titleApp:"TODO VUE",todos:[],todosCopy:[]}},created:function(){var t=U(J);t&&t.length>0&&(this.todos=t),this.todosCopy=Object(l["a"])(this.todos)}};o("64be");$.render=i;var L=$;Object(n["a"])(L).mount("#app")},"64be":function(t,e,o){"use strict";o("c894")},6609:function(t,e,o){},"6fd4":function(t,e,o){"use strict";o("c798")},"992b":function(t,e,o){"use strict";o("6609")},"9e2e":function(t,e,o){"use strict";o("ce2a")},b050:function(t,e,o){},c798:function(t,e,o){},c894:function(t,e,o){},ce2a:function(t,e,o){}});
//# sourceMappingURL=app.b5359e7a.js.map