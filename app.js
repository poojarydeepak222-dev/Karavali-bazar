const businesses=[
{name:'Udupi Electrical Services',cat:'Electrician',area:'Udupi',phone:'+919606963170'},
{name:'Coastal Plumbing Services',cat:'Plumber',area:'Manipal',phone:'+919000000001'},
{name:'Karavali Wood Works',cat:'Carpenter',area:'Brahmagiri',phone:'+919000000002'},
{name:'Local Family Restaurant',cat:'Restaurant',area:'Udupi',phone:'+919000000003'},
{name:'Udupi City Hotel',cat:'Hotel',area:'Udupi',phone:'+919000000004'},
{name:'City Medical Store',cat:'Medical',area:'Manipal',phone:'+919000000005'}
];
function render(list=businesses){const box=document.getElementById('businesses');document.getElementById('count').textContent=`${list.length} businesses`;box.innerHTML=list.map(b=>`<article class="card"><span class="tag">${b.cat}</span><h3>${b.name}</h3><div class="meta">📍 ${b.area}, Udupi<br>📞 ${b.phone}</div><div class="actions"><a href="tel:${b.phone}">Call</a><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.name+' '+b.area+' Udupi')}" target="_blank">Maps</a></div></article>`).join('')||'<p>No businesses found. Try another search.</p>'}
function filterBusinesses(){const q=document.getElementById('search').value.toLowerCase();const area=document.getElementById('area').value;render(businesses.filter(b=>(!q||`${b.name} ${b.cat} ${b.area}`.toLowerCase().includes(q))&&(!area||b.area===area)))}
function setCategory(cat){document.getElementById('search').value=cat;filterBusinesses();document.querySelector('.directory').scrollIntoView({behavior:'smooth'})}
function submitBusiness(e){e.preventDefault();alert('Thank you! Business submission will be reviewed by Karavali Bazar admin.');e.target.reset()}
document.getElementById('search').addEventListener('input',filterBusinesses);document.getElementById('area').addEventListener('change',filterBusinesses);render();
