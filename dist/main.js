(()=>{"use strict";const e=e=>{let t=document.createElement("p");return t.innerHTML=e,t},t=()=>{let t=document.createElement("div");return t.setAttribute("class","fade-in"),t.appendChild(e("Hello there!")),t.appendChild(e("My name is Maciej, I'm a recent engineering graduate seeking to launch his IT career.")),t.appendChild(e("My main area of interests currently is full-stack web development, although I've also been busy making various programs in C++ and Python and also games using Unity engine.")),t.appendChild(e("Skills that I'm trying to incorporate fully into my stack: <ul> \n    <li>React</li>\n    <li>Node</li>\n    <li>MongoDB</li>\n    <li>Docker</li>\n    ")),t.appendChild(e("When I'm not busy coding you could probably find me playing guitar, chess or cooking.")),t};(()=>{let n=(()=>{let e=document.getElementById("content"),t=document.createElement("h1");t.setAttribute("class","glow"),t.innerHTML="Maciej Borkowski";let n=document.createElement("div");n.setAttribute("id","tab-wrapper");let i=document.createElement("div");i.setAttribute("class","scroll"),e.appendChild(t),e.appendChild(n),e.appendChild(i);let a=[];for(let e=0;e<3;++e)a.push(document.createElement("div")),a[e].setAttribute("class","tab"),n.appendChild(a[e]);return a[0].innerHTML="Intro",a[1].innerHTML="Portfolio",a[2].innerHTML="Contact",{intro:a[0],portfolio:a[1],contact:a[2],scrollContent:i}})(),i=t();n.scrollContent.appendChild(i);let a=e=>{n.scrollContent.removeChild(i),i=e,n.scrollContent.appendChild(i)};n.intro.onclick=function(){a(t())},n.portfolio.onclick=function(){a((()=>{let t=document.createElement("div");t.setAttribute("class","fade-in");let n=e("<a href='https://github.com/macborkow'>github</a>");return n.style.textAlign="center",n.style.position="relative",n.style.right="2vw",t.appendChild(n),t.appendChild(document.createElement("br")),t.appendChild(e("Few examples of my projects: <ul>\n    <li><a href='https://github.com/macborkow/website-intk'>This very page</a></li>\n    <li><a href='https://github.com/macborkow/calculator'>Calculator</a></li>\n    <li><a href='https://github.com/macborkow/etch-a-sketch'>Etch-a-sketch</a></li>\n    <li><a href='https://github.com/macborkow/unnamed-game'>C++ platformer game</a></li>\n    <li><a href='https://github.com/macborkow/spaceJump'>Android unity hypercasual game</a></li>\n    <li><a href='https://github.com/macborkow/chat-app'>Chat app with PHP backend</a></li>\n    <li><a href='https://github.com/macborkow/google-homepage'>Visual clone of Google mainpage</a></li>\n    ")),t})())},n.contact.onclick=function(){a((()=>{let t=document.createElement("div");return t.setAttribute("class","fade-in"),t.style.textAlign="center",t.style.position="relative",t.style.right="2vw",t.appendChild(e("<a href='mailto:macborkow@gmail.com'>Email</a>")),t.appendChild(document.createElement("br")),t.appendChild(e("<a href='https://www.linkedin.com/in/macborkow/'>Linkedin</a>")),t})())}})()})();