const weddingDate = new Date('2027-06-27T15:00:00').getTime();

function updateCountdown() {
	const distance = weddingDate - Date.now();
	const countdowns = document.querySelectorAll('.countdown');

	if (!countdowns.length) return;

	if (distance <= 0) {
		countdowns.forEach((c) => {
			c.innerHTML = '<div><span>Today</span><p>IS THE DAY</p></div>';
		});
		return;
	}

	const day = 1000 * 60 * 60 * 24;
	const values = {
		days: Math.floor(distance / day),
		hours: Math.floor((distance % day) / (1000 * 60 * 60)),
		minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
		seconds: Math.floor((distance % (1000 * 60)) / 1000),
	};

	document.querySelectorAll('[data-unit]').forEach((el) => {
		el.textContent = values[el.dataset.unit];
	});
}

updateCountdown();

setInterval(updateCountdown, 1000);

// RSVP form

const form = document.getElementById('rsvp-form');

if (form) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const name = document.getElementById('name').value.trim();

		const attending = document.getElementById('attendance').value === 'yes';

		document.getElementById('rsvp-message').textContent = attending
			? `Thank you, ${name}! We can't wait to celebrate with you.`
			: `Thank you for letting us know, ${name}. We'll miss you!`;

		form.reset();
	});
}

// Departures board letter tiles
document.querySelectorAll('.flap').forEach((el, n) => {
	const s = el.textContent;
	el.setAttribute('aria-label', s);
	el.textContent = '';
	[...s].forEach((c, i) => {
		const t = document.createElement('span');
		t.className = 't';
		t.setAttribute('aria-hidden', 'true');
		t.textContent = c === ' ' ? '\u00a0' : c.toUpperCase();
		t.style.animationDelay = n * 0.05 + i * 0.03 + 's';
		el.appendChild(t);
	});
});

// FAQ tabs
const faqTabs = document.querySelectorAll('.faq-tab');
faqTabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		faqTabs.forEach((t) => {
			const on = t === tab;
			t.setAttribute('aria-selected', on);
			document.getElementById(t.dataset.p).hidden = !on;
		});
	});
});

(function(){
var svg=document.getElementById('isle-svg');if(!svg)return;
var NS='http://www.w3.org/2000/svg';
function P(lon,lat){return [(lon-57.255)*720+10,(-19.955-lat)*766+18];}
var coast=[[57.612,-19.982],[57.668,-20.006],[57.705,-20.058],[57.748,-20.105],[57.781,-20.158],[57.787,-20.205],[57.796,-20.246],[57.776,-20.300],[57.742,-20.352],[57.712,-20.405],[57.724,-20.452],[57.680,-20.475],[57.600,-20.505],[57.520,-20.520],[57.440,-20.505],[57.380,-20.492],[57.318,-20.470],[57.312,-20.442],[57.345,-20.428],[57.370,-20.380],[57.368,-20.330],[57.358,-20.290],[57.372,-20.250],[57.400,-20.210],[57.450,-20.180],[57.492,-20.162],[57.505,-20.120],[57.522,-20.080],[57.528,-20.050],[57.548,-20.025],[57.580,-20.008]];
function smooth(pts,t){var d='',n=pts.length;for(var i=0;i<n;i++){var p0=pts[(i-1+n)%n],p1=pts[i],p2=pts[(i+1)%n],p3=pts[(i+2)%n];if(i===0)d+='M'+p1[0].toFixed(1)+' '+p1[1].toFixed(1);var c1=[p1[0]+(p2[0]-p0[0])*t,p1[1]+(p2[1]-p0[1])*t],c2=[p2[0]-(p3[0]-p1[0])*t,p2[1]-(p3[1]-p1[1])*t];d+='C'+c1.map(function(v){return v.toFixed(1)}).join(' ')+' '+c2.map(function(v){return v.toFixed(1)}).join(' ')+' '+p2[0].toFixed(1)+' '+p2[1].toFixed(1);}return d+'Z';}
var pts=coast.map(function(c){return P(c[0],c[1]);});
var cx=0,cy=0;pts.forEach(function(p){cx+=p[0];cy+=p[1];});cx/=pts.length;cy/=pts.length;
function el(tag,attrs,parent){var e=document.createElementNS(NS,tag);for(var k in attrs)e.setAttribute(k,attrs[k]);(parent||svg).appendChild(e);return e;}
el('path',{d:smooth(pts.map(function(p){return [cx+(p[0]-cx)*1.07,cy+(p[1]-cy)*1.06];}),.17),'class':'reef'});
el('path',{d:smooth(pts,.17),'class':'land'});
var hill=[[57.46,-20.25],[57.55,-20.22],[57.62,-20.28],[57.60,-20.38],[57.50,-20.42],[57.43,-20.36]].map(function(c){return P(c[0],c[1]);});
el('path',{d:smooth(hill,.2),'class':'hills'});
var t=el('text',{x:24,y:448,'class':'sea'});t.textContent='Indian Ocean';
var pl=P(57.505,-20.162);var tt=el('text',{x:pl[0]+8,y:pl[1]+3,'class':'town'});tt.textContent='PORT LOUIS';
var gb=P(57.58,-20.008);var tg=el('text',{x:gb[0]-6,y:gb[1]+14,'class':'town'});tg.textContent='GRAND BAIE';
var ff=P(57.372,-20.278);el('circle',{cx:ff[0],cy:ff[1],r:26,'class':'halo'});
var ap=P(57.683,-20.430);
var mx=(ap[0]+ff[0])/2,my=(ap[1]+ff[1])/2+46;
el('path',{d:'M'+ap[0]+' '+ap[1]+' Q'+mx+' '+my+' '+(ff[0]+12)+' '+(ff[1]+10),'class':'route'});
var rl=el('text',{x:mx-34,y:my-16,'class':'route-lbl'});rl.textContent='about 1 hour';
var pinIcon='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
function q(s){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(s);}
var places=[
 {id:'mru',chip:'AIRPORT',lbl:'YOU LAND HERE',name:'MRU Airport',when:'Aim for 21–23 June',ll:[57.683,-20.430],side:'r',
  txt:'Sir Seewoosagur Ramgoolam International Airport, in the south-east. Flic en Flac is about an hour’s drive away, and taxis and pre-booked transfers are easy to arrange. Remember the free SafeMauritius travel form before you fly.',map:q('Sir Seewoosagur Ramgoolam International Airport')},
 {id:'ffl',chip:'FLIC EN FLAC',lbl:'WHERE TO STAY',name:'Flic en Flac',when:'Our recommended base',ll:[57.372,-20.278],side:'l',dy:-20,
  txt:'A relaxed beach town on the west coast, close to the Mehendi and the wedding. It’s a small island, though, so you’ll be fine wherever you land. More hotel suggestions coming soon.',map:q('Flic en Flac Mauritius')},
 {id:'anna',chip:'MEHENDI',lbl:'SATURDAY, 26 JUNE',name:'Domaine Anna',when:'Mehendi · 6:00 – 10:00 PM',ll:[57.392,-20.262],side:'r',
  txt:'A joyful start to the weekend with good food and colour, just inland from Flic en Flac.',map:q('Domaine Anna Flic en Flac Mauritius')},
 {id:'hilton',chip:'WEDDING',lbl:'SUNDAY, 27 JUNE',name:'Hilton Mauritius',when:'The Wedding · 3:00 – 6:00 PM',ll:[57.362,-20.297],side:'l',dy:12,
  txt:'Hilton Mauritius Resort & Spa, right on the beach at Flic en Flac. Join us as we exchange vows and celebrate.',map:q('Hilton Mauritius Resort & Spa Flic en Flac')},
 {id:'ruins',chip:'RECEPTION',lbl:'MONDAY, 28 JUNE',name:'Ruins of Balaclava',when:'The Reception · from 6:00 PM',ll:[57.516,-20.082],side:'l',
  txt:'Welcome drinks among the old stone ruins at Maritim Resort & Spa, then dinner and dancing under the stars on the north-west coast.',map:q('Ruines de Balaclava Maritim Resort Mauritius')}
];
var chips=document.getElementById('isle-chips'),card=document.getElementById('isle-card'),pins={},btns={};
places.forEach(function(pl){
 var xy=P(pl.ll[0],pl.ll[1]);
 var g=el('g',{'class':'pin',tabindex:'0',role:'button','aria-label':pl.name});
 el('circle',{cx:xy[0],cy:xy[1],r:8,'class':'ring'},g);
 el('circle',{cx:xy[0],cy:xy[1],r:6.5,'class':'dot'},g);
 el('circle',{cx:xy[0],cy:xy[1],r:2.2,'class':'core'},g);
 var lx=pl.side==='r'?xy[0]+11:xy[0]-11,ly=xy[1]+3+(pl.dy||0);
 var tx=el('text',{x:lx,y:ly,'text-anchor':pl.side==='r'?'start':'end'},g);tx.textContent=pl.chip;
 g.addEventListener('click',function(){show(pl.id)});
 g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();show(pl.id)}});
 pins[pl.id]=g;
 var b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.textContent=pl.chip;b.addEventListener('click',function(){show(pl.id)});chips.appendChild(b);btns[pl.id]=b;
});
function show(id){var pl=places.filter(function(p){return p.id===id})[0];
 for(var k in pins){pins[k].classList.toggle('on',k===id);btns[k].setAttribute('aria-selected',k===id?'true':'false');}
 svg.appendChild(pins[id]);
 card.style.animation='none';void card.offsetWidth;card.style.animation='';
 card.innerHTML='<p class="lbl">'+pl.lbl+'</p><h4>'+pl.name+'</h4><p class="when">'+pl.when+'</p><p class="txt">'+pl.txt.replace(/&/g,'&amp;')+'</p><a class="go" href="'+pl.map+'" target="_blank" rel="noopener">'+pinIcon+'OPEN IN GOOGLE MAPS</a>';
}
show('mru');
})();
