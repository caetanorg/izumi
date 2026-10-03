
const $=s=>document.querySelectorAll(s),hd=document.getElementById('hd');
let L='pt';try{L=localStorage.getItem('l')||(navigator.language.startsWith('en')?'en':'pt')}catch(e){}
function setL(l){L=l;document.documentElement.lang=l;try{localStorage.setItem('l',l)}catch(e){}
$('[data-pt]').forEach(e=>e.innerHTML=e.dataset[l]);$('.lang button').forEach(b=>b.classList.toggle('on',b.dataset.l==l))}
$('.lang button').forEach(b=>b.onclick=()=>setL(b.dataset.l));setL(L);
const sc=()=>hd.classList.toggle('s',scrollY>40);addEventListener('scroll',sc,{passive:true});
function route(){const h=location.hash,id=h=='#/menu'?'menu':h=='#/nf'||/^#\//.test(h)&&h!='#/'?'nf':'home';
$('.view').forEach(v=>v.classList.toggle('on',v.id==id));if(id!='home')scrollTo(0,0);
$('nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==(id=='menu'?'#/menu':'#/')));sc()}

const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&(e.target.classList.add('in'),io.unobserve(e.target))),{threshold:.15});
$('.rv').forEach(e=>io.observe(e));

(function(){const a=document.getElementById('tk1');if(a){const g=[...a.children],mk=(el,ix)=>{el.innerHTML='';for(let r=0;r<4;r++)ix.forEach(i=>el.appendChild(g[i].cloneNode()))},b=document.createElement('div');b.className='tk r';mk(b,[1,3,5,7]);mk(a,[0,2,4,6]);a.parentNode.appendChild(b);
const ps=document.getElementById('ps'),sl=[...document.querySelectorAll('#pimgs img')].map(i=>i.src),C=[['Sushi clássico','Maki, nigiri e peças frescas variadas.','Classic sushi','Maki, nigiri and assorted fresh pieces.'],['Seleção de sushi','Combinadas coloridas de sushi e sashimi.','Sushi selection','Colorful sushi and sashimi combinations.'],['Pratos quentes','Carnes, marisco, legumes salteados.','Hot dishes','Meats, seafood and sautéed vegetables.'],['Carnes e espetadas','Espetadas douradas e suculentas, grelhadas no ponto.','Meats and skewers','Golden, juicy skewers, grilled to perfection.'],['Sobremesas','Mousses, gelados e frutas secas.','Desserts','Mousses, ice cream and dried fruit.'],['Bebidas','Não incluídas no preço.','Drinks','Not included in the price.']];
let k=0,iv;const cap=()=>{const c=C[k],o=L=='en'?2:0;document.getElementById('cb').textContent=c[o];document.getElementById('cs').textContent=c[o+1]};
const go=d=>{k=(k+d+6)%6;ps.style.opacity=0;setTimeout(()=>{ps.src=sl[k];ps.style.opacity=1;cap();kb()},200)};
const rs=()=>{clearInterval(iv);iv=setInterval(()=>go(1),5000)};
const kb=()=>{ps.classList.remove('kb');void ps.offsetWidth;ps.classList.add('kb')};ps.src=sl[0];cap();kb();rs();
document.getElementById('pn').onclick=()=>{go(1);rs()};document.getElementById('pp').onclick=()=>{go(-1);rs()};
const _s=setL;setL=function(l){_s(l);cap()}}
const rt=document.getElementById('rt');if(!rt)return;let bz=0;const st=()=>rt.firstElementChild.offsetWidth+14;
document.getElementById('rn').onclick=()=>{if(bz)return;bz=1;rt.style.transition='transform .45s';rt.style.transform='translateX(-'+st()+'px)';setTimeout(()=>{rt.style.transition='none';rt.appendChild(rt.firstElementChild);rt.style.transform='none';bz=0},460)};
document.getElementById('rp').onclick=()=>{if(bz)return;bz=1;rt.style.transition='none';rt.prepend(rt.lastElementChild);rt.style.transform='translateX(-'+st()+'px)';rt.offsetWidth;rt.style.transition='transform .45s';rt.style.transform='none';setTimeout(()=>bz=0,460)};
})();
(function(){const mn=document.getElementById('mn');if(!mn)return;
const N={bebidas:['Não incluídas no rodízio.','Not included in the all you can eat.']};N.alcool=N.sobremesas=N.bebidas;
const D=[['sopas','Sopas','Soups','汁物','Sopa miso'],
['sashimi','Sashimi','Sashimi','刺身','Sashimi de salmão|Sashimi de atum|Peixe manteiga'],
['nigiri','Nigiri','Nigiri','握り','Nigiri de salmão|Nigiri de atum|Nigiri de peixe manteiga|Nigiri de camarão cozido|Nigiri de salmão braseado'],
['maki','Maki','Maki','巻き','Maki de salmão|Maki de atum|Maki de camarão panado|Maki de salmão com queijo em fatia e cebola frita|Maki de salmão braseado|Maki de salmão frito com Filadélfia|Maki de ovo|Maki de camarão com cebola frita|Uramaki de morango'],
['gunkan','Gunkan','Gunkan','軍艦','Gunkan de salmão|Gunkan de salmão braseado|Gunkan de salmão com Filadélfia|Gunkan de salmão misto'],
['rolos','Rolos fritos','Fried rolls','揚げ','Rolo de salmão frito|Delícias do mar|Cebola frita'],
['california','Califórnias','California rolls','','Califórnia de salmão|Califórnia de camarão|Califórnia de atum|Califórnia de salmão e Filadélfia|Califórnia de salmão com maionese e cebola frita'],
['temaki','Temakis','Temaki','手巻き','Temaki de salmão'],
['vegetais','Vegetais','Vegetables','野菜','Maki de pepino|Nigiri de abacate|Maki de manga'],
['cozinha','Cozinha','Kitchen','料理','Crepes vegetarianos|Tempura de camarão|Camarão panado|Porco panado|Gyozas de frango|Frango com amêndoas frito|Massa udon de frango|Massa udon de camarão|Massa udon de vaca|Massa udon|Camarão com bacon|Salmão teriyaki|Frango teriyaki|Camarão picante|Massa com gambas|Massa com arroz|Massa com frango|Cogumelos brancos com teriyaki|Teppanyaki de frango|Teppanyaki de vaca|Teppanyaki de lulas|Teppanyaki de gambas'],
['sobremesas','Sobremesas','Desserts','デザート','Tartelete de limão'],
['bebidas','Bebidas','Drinks','飲物','Coca-Cola|Coca-Cola Zero|Fanta Laranja|Seven Up|Guaraná|Ice Tea de Pêssego|Ice Tea de Limão|Ice Tea de Manga|Sumo de Laranja|Sumo de Ananás|Água das Pedras|Água'],
['alcool','Bebidas alcoólicas','Alcoholic drinks','酒','Super Bock|Super Bock Zero|Super Bock Stout|Cerveja japonesa']];
const mc=document.getElementById('mc');let h='',c='';
D.forEach(d=>{const n=N[d[0]];c+=`<button data-t="${d[0]}" data-pt="${d[1]}" data-en="${d[2]}"></button>`;
h+=`<section class="ms" id="m-${d[0]}"><h2 class="serif"><span data-pt="${d[1]}" data-en="${d[2]}"></span><i>${d[3]}</i></h2>`+(n?`<div class="nt" data-pt="${n[0]}" data-en="${n[1]}"></div>`:'')+'<ul class="ml">'+d[4].split('|').map((x,i)=>`<li style="--i:${i}"><b>${String(i+1).padStart(2,'0')}</b><span>${x}</span></li>`).join('')+'</ul></section>'});
mn.innerHTML=h;mc.innerHTML=c;setL(L);
const S=[...mn.children],B=[...mc.children];
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.05});S.forEach(s=>io.observe(s));
const sp=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){B.forEach(b=>b.classList.toggle('on',b.dataset.t==e.target.id.slice(2)));const b=mc.querySelector('.on');if(b)mc.scrollTo({left:b.offsetLeft-20,behavior:'smooth'})}}),{rootMargin:'-35% 0px -60% 0px'});S.forEach(s=>sp.observe(s));
B.forEach(b=>b.onclick=()=>document.getElementById('m-'+b.dataset.t).scrollIntoView({behavior:'smooth'}));
const nz=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
document.getElementById('mq').oninput=e=>{const q=nz(e.target.value);S.forEach(s=>{let v=0;s.querySelectorAll('li').forEach(l=>{const m=!q||nz(l.textContent).includes(q);l.classList.toggle('h',!m);v+=m});s.classList.toggle('h',!v);if(v)s.classList.add('in')})};
})();
