(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,a,s){e.exports=s(14)},,,,,function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){"use strict";s.r(a);var t=s(0),r=s.n(t),n=s(2),m=s.n(n);const i={elaine:{username:"Elaine",avatar:"/assets/elaine.jpg"},george:{username:"George",avatar:"/assets/george.png"},jerry:{username:"Jerry",avatar:"/assets/jerry.jpg"}};var o={currentUser:i.elaine,conversation:{participants:[i.elaine,i.george,i.jerry],messages:[{id:"a",user:i.elaine,body:"How about you bring me back something?",timestamp:"11:38"},{id:"b",user:i.george,body:"Sure, alright",timestamp:"11:39"},{id:"c",user:i.george,body:"What do you want?",timestamp:"11:39"},{id:"d",user:i.elaine,body:"Hm... get me a big salad \ud83d\ude0b",timestamp:"11:42"},{id:"e",user:i.george,body:"What big salad? I'm going to the coffee shop.",timestamp:"11:44"},{id:"f",user:i.elaine,body:"They have big salads",timestamp:"11:45"},{id:"g",user:i.george,body:"\ud83e\udd14 I've never seen a big salad",timestamp:"11:45"},{id:"h",user:i.elaine,body:"They have a big salad",timestamp:"11:45"},{id:"i",user:i.george,body:"Is that what I ask for? The _big_ salad? \ud83e\udd28",timestamp:"11:46"},{id:"j",user:i.elaine,body:"you know what nevermind",timestamp:"11:50"},{id:"k",user:i.george,body:"No hey I'll get it! What's in the _big_ salad?",timestamp:"11:51"},{id:"l",user:i.jerry,body:"Big lettuce",timestamp:"11:52"},{id:"m",user:i.jerry,body:"Big carrots",timestamp:"11:52"},{id:"n",user:i.jerry,body:"Tomatoes like volleyballs \ud83c\udf45",timestamp:"11:52"}]}};s(8);var c=e=>(console.log(e),r.a.createElement("header",null,r.a.createElement("div",{className:"user-container"},e.filter())));s(9),s(10);const l=e=>r.a.createElement("div",{className:"sent-message"},r.a.createElement("div",{className:"sent-text"},e.message.body)),g=e=>r.a.createElement("div",{className:"received-message"},r.a.createElement("img",{className:"avatar",src:e.message.user.avatar}),r.a.createElement("div",{className:"chat-body"},r.a.createElement("div",{className:"user-name"},e.message.user.username),r.a.createElement("div",{className:"received-text"},e.message.body)));var d=e=>"sent"===e.messageType?r.a.createElement(l,{message:e.message}):r.a.createElement(g,{message:e.message});var u=e=>r.a.createElement("section",{className:"chat-stream"},e.messages.map(a=>{let s="";return s=a.user===e.currentUser?"sent":"received",r.a.createElement(d,{message:a,messageType:s})}));s(11);var v=e=>r.a.createElement("footer",null);s(12);var y=e=>r.a.createElement("div",{className:"wrapper"},r.a.createElement(c,{messages:e.conversation.messages,currentUser:e.currentUser}),r.a.createElement(u,{messages:e.conversation.messages,currentUser:e.currentUser}),r.a.createElement(v,null));s(13);const b=document.getElementById("root");m.a.render(r.a.createElement(y,{currentUser:o.currentUser,conversation:o.conversation}),b)}],[[3,1,2]]]);
//# sourceMappingURL=main.dee723dd.chunk.js.map