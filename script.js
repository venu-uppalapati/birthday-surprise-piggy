const screens=[...document.querySelectorAll('.screen')],dots=[...document.querySelectorAll('.dot')];let current=0;function showScreen(id){const t=document.getElementById(id);if(!t)return;screens.forEach(s=>s.classList.remove('active'));t.classList.add('active');current=screens.indexOf(t);dots.forEach((d,i)=>d.classList.toggle('active',i===current));window.scrollTo({top:0,behavior:'smooth'});if(id==='message')startTyping();if(id==='final')launchConfetti()}document.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>showScreen(b.dataset.next)));const birthdayMessage=`Piggy,

Happy Birthday to one of the most wonderfully chaotic people I know. 😂

Thank you for all the laughs, random conversations, silly moments, and memories that somehow became some of my favorite ones.

I hope this year gives you a million reasons to smile, a little less stress, lots of adventures, and everything you've been wishing for.

Stay exactly as wonderfully weird as you are.

And yes... you are officially one year older.
Don't worry, I won't tell anyone. 🤫

Happy Birthday, Pushpa! 💗`;let typingStarted=false;function startTyping(){if(typingStarted)return;typingStarted=true;const box=document.getElementById('typing');let i=0;const tick=()=>{box.textContent=birthdayMessage.slice(0,i++);if(i<=birthdayMessage.length)setTimeout(tick,18);else document.getElementById('finalButton').classList.remove('hidden')};tick()}function heart(){const e=document.createElement('span');e.className='heart';e.textContent=['♥','♡','✦','✧'][Math.floor(Math.random()*4)];e.style.left=Math.random()*100+'vw';e.style.fontSize=12+Math.random()*22+'px';e.style.animationDuration=5+Math.random()*5+'s';document.getElementById('hearts').appendChild(e);setTimeout(()=>e.remove(),10000)}setInterval(heart,650);function launchConfetti(){for(let i=0;i<80;i++)setTimeout(()=>{const e=document.createElement('span');e.className='heart';e.textContent=['🎉','💗','✨','🎈','💕'][Math.floor(Math.random()*5)];e.style.left=Math.random()*100+'vw';e.style.fontSize=14+Math.random()*20+'px';e.style.animationDuration=2.5+Math.random()*3+'s';document.getElementById('hearts').appendChild(e);setTimeout(()=>e.remove(),6000)},i*25)}document.getElementById('confettiButton').addEventListener('click',launchConfetti);