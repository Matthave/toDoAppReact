(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=(a(14),a(6)),i=a(1),s=a(2),u=a(4),d=a(3),h=a(5),m=(a(15),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",checked:!1,defaultDate:(new Date).toISOString().slice(0,10)},a.handleChange=function(e){"text"===e.target.type?a.setState({value:e.target.value}):"checkbox"===e.target.type?a.setState({checked:e.target.checked}):"date"===e.target.type&&a.setState({defaultDate:e.target.value})},a.handleClick=function(){var e=a.state,t=e.value,n=e.defaultDate,r=e.checked;if(t.length<=2)return alert("Za kr\xf3tkie zadanie!");a.props.addTasks(t,n,r)&&a.setState({value:"",checked:!1})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=(new Date).toISOString().slice(0,10),t=1*e.slice(0,4)+1;return t+="-12-31",r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form"},r.a.createElement("label",{htmlFor:"text"},r.a.createElement("input",{id:"text",type:"text",placeholder:"Dodaj Zadanie...",name:"text",value:this.state.value,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"checkbox"},r.a.createElement("input",{id:"checkbox",type:"checkbox",name:"checkbox",checked:this.state.checked,onChange:this.handleChange})," Priorytet")),r.a.createElement("label",{htmlFor:"date"},"Zrobi\u0107 do ",r.a.createElement("input",{id:"date",type:"date",name:"date",min:e,max:t,value:this.state.defaultDate,onChange:this.handleChange}))),r.a.createElement("button",{className:"addTaskBtn",onClick:this.handleClick},"DODAJ"))}}]),t}(r.a.Component)),k=function(e){var t=e.task,a=t.id,n=t.text,l=t.date,c=t.important,o=t.active,i=t.finishDate;if(o)return r.a.createElement("div",null,r.a.createElement("p",null,c?r.a.createElement("strong",{className:"important"},n):r.a.createElement("strong",null,n),"  do ",r.a.createElement("span",null,l," "),r.a.createElement("button",{onClick:function(){return e.change(a)}},"ZROBIONE"),r.a.createElement("button",{onClick:function(){return e.delete(a)}},"X")));var s=new Date(i).toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,n)," ",r.a.createElement("span",null,"( zrobi\u0107 do ",l," ) "),r.a.createElement("br",null),r.a.createElement("span",null,"Potwierdzone wykonanie ",s,"  "),r.a.createElement("button",{onClick:function(){return e.delete(a)}},"X")))},f=function(e){var t=e.tasks.filter((function(e){return!0===e.active})),a=e.tasks.filter((function(e){return!1===e.active}));t.length>=2&&t.sort((function(e,t){return(e=e.text.toLowerCase())<(t=t.text.toLowerCase())?-1:e>t?1:0})),a.length>=2&&a.sort((function(e,t){return(e=e.finishDate)>(t=t.text.finishDate)?-1:e<t?1:0}));var n=t.map((function(t){return r.a.createElement(k,{key:t.id,task:t,delete:e.delete,change:e.change})})),l=a.map((function(t){return r.a.createElement(k,{key:t.id,task:t,delete:e.delete,change:e.change})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("div",{className:"active"},r.a.createElement("h1",null,"Zadania do zrobienia"),n.length>0?n:r.a.createElement("p",null,"Brak zada\u0144 do wykonania!")),r.a.createElement("hr",null),r.a.createElement("div",{className:"done"},r.a.createElement("h3",null,"Zadania zrobione ",r.a.createElement("span",{className:"spanColor"},"(",l.length,")")),l.length>5?r.a.createElement("span",{className:"spanColor"},"Wy\u015bwietlono 5 ostatnio wykonanych zada\u0144."):null,l.length>0?l.slice(0,5):r.a.createElement("p",null,"Nie masz wykonanych zda\u0144!")))},p=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).counter=0,a.state={tasks:[]},a.deleteTask=function(e){var t=Object(o.a)(a.state.tasks),n=t.findIndex((function(t){return t.id===e}));return t.splice(n,1),a.setState({tasks:t})},a.changeTasksStatus=function(e){var t=Array.from(a.state.tasks);return t.forEach((function(t){e===t.id&&(t.active=!1,t.finishDate=(new Date).getTime())})),a.setState({tasks:t})},a.addTask=function(e,t,n){var r={id:a.counter,text:e,date:t,important:n,active:!0,finishDate:null};return a.setState((function(e){return{tasks:[].concat(Object(o.a)(e.tasks),[r])}})),a.counter++,!0},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"ToDoApp"),r.a.createElement(m,{addTasks:this.addTask}),r.a.createElement(f,{tasks:this.state.tasks,change:this.changeTasksStatus,delete:this.deleteTask}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.0829e875.chunk.js.map