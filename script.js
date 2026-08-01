const lines=[
"🌸 You make ordinary days special.",
"😂 Thanks for tolerating my random messages.",
"💙 Our chats always make me smile.",
"🍫 Late reply fine = One Dairy Milk.",
"✨ Friendship cancellation requests are rejected.",
"😄 Stay exactly the way you are."
];
let idx=0;
const msg=document.getElementById("message");
function rotate(){
msg.textContent=lines[idx++%lines.length];
}
setInterval(rotate,2500);rotate();

const text="Loading a surprise for Shravani...";
let i=0;
const t=document.getElementById("typing");
const type=setInterval(()=>{
t.textContent=text.slice(0,++i);
if(i>=text.length)clearInterval(type);
},70);

function openGift(){
document.getElementById("intro").classList.add("hidden");
document.getElementById("main").classList.remove("hidden");
document.getElementById("bgm").play().catch(()=>{});
startCountdown();
}

function startCountdown(){
let s=5;
const c=document.getElementById("countdown");
c.innerHTML="Surprise in "+s;
const id=setInterval(()=>{
s--;
c.innerHTML=s>0?"Surprise in "+s:"Enjoy! 💙";
if(s<=0)clearInterval(id);
},1000);
}

function finalSurprise(){
document.getElementById("final").classList.remove("hidden");
for(let i=0;i<220;i++){
let e=document.createElement("div");
e.innerHTML=["💖","🎉","✨","🌸","💙"][Math.floor(Math.random()*5)];
e.style.position="fixed";
e.style.left=Math.random()*100+"vw";
e.style.top="-20px";
e.style.fontSize=(18+Math.random()*20)+"px";
document.body.appendChild(e);
let y=-20;
const x=parseFloat(e.style.left);
const id=setInterval(()=>{
y+=3+Math.random()*2;
e.style.top=y+"px";
e.style.left=(x+Math.sin(y/25)*10)+"px";
if(y>innerHeight){clearInterval(id);e.remove();}
},16);
}
}
