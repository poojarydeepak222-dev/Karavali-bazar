const businesses=[
{name:'Smart Fitout',cat:'AC Service',area:'Udupi',phone:'+919606963170',desc:'Home and office maintenance services'},
{name:'Udupi Electrical Services',cat:'Electrician',area:'Udupi',phone:'+919606963170',desc:'Electrical repair and installation'},
{name:'Coastal Plumbing Services',cat:'Plumber',area:'Manipal',phone:'+919000000001',desc:'Plumbing repairs and maintenance'},
{name:'Karavali Wood Works',cat:'Carpenter',area:'Brahmagiri',phone:'+919000000002',desc:'Furniture and carpentry work'},
{name:'Local Family Restaurant',cat:'Restaurant',area:'Udupi',phone:'+919000000003',desc:'Local food and coastal cuisine'},
{name:'Udupi City Hotel',cat:'Hotel',area:'Udupi',phone:'+919000000004',desc:'Hotel and accommodation'},
{name:'City Medical Store',cat:'Medical',area:'Manipal',phone:'+919000000005',desc:'Pharmacy and everyday medicines'}
];
const $=id=>document.getElementById(id);
function cleanPhone(phone){return phone.replace(/[^0-9+]/g,'')}
function render(list=businesses){
 const box=$('businesses'); $('count').textContent=`${list.length} ${list.length===1?'business':'businesses'}`;
 box.innerHTML=list.map(b=>`<article class="card"><div class="card-top"><span class="tag">${b.cat}</span><span class="verified">✓ Local</span></div><h3>${b.name}</h3><p class="desc">${b.desc}</p><div class="meta">📍 ${b.area}, Udupi<br>📞 ${b.phone}</div><div class="actions"><a href="tel:${cleanPhone(b.phone)}">Call</a><a href="https://wa.me/${cleanPhone(b.phone).replace('+','')}" target="_blank" rel="noopener">WhatsApp</a><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.name+' '+b.area+' Udupi')}" target="_blank" rel="noopener">Maps</a></div></article>`).join('')||'<div class="empty"><strong>No businesses found</strong><span>Try another keyword or area.</span></div>';
}
function filterBusinesses(){
 const q=$('search').value.trim().toLowerCase(), area=$('area').value;
 render(businesses.filter(b=>(!q||`${b.name} ${b.cat} ${b.area} ${b.desc}`.toLowerCase().includes(q))&&(!area||b.area===area)));
}
function setCategory(cat){$('search').value=cat;filterBusinesses();$('businesses-section').scrollIntoView({behavior:'smooth'});}
document.querySelectorAll('[data-category]').forEach(btn=>btn.addEventListener('click',()=>setCategory(btn.dataset.category)));
$('search').addEventListener('input',filterBusinesses);$('area').addEventListener('change',filterBusinesses);$('searchBtn').addEventListener('click',filterBusinesses);
$('businessForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));const saved=JSON.parse(localStorage.getItem('karavaliBusinessRequests')||'[]');saved.push({...data,submittedAt:new Date().toISOString()});localStorage.setItem('karavaliBusinessRequests',JSON.stringify(saved));$('formMessage').textContent='Thank you! Your listing request has been saved on this device.';e.target.reset();});
render();
