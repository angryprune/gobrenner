function asset(name){
  return (window.ASSETS && window.ASSETS[name]) ? window.ASSETS[name] : name
}
const PACKAGES = [
  { id:'basics', name:'Just the Basics', price:100, hours:48, includes:['Main home page','5 information pages','Contact form','Mobile-ready layout','First preview in 48 hours'] },
  { id:'gogetter', name:'The Go Getter', price:225, hours:72, includes:['Everything in Just the Basics','eCommerce store setup','2 categories','5 products','Store admin portal'] },
  { id:'baller', name:'The Big Baller Deluxe', price:500, hours:72, includes:['Everything in The Go Getter','5 categories','15 products','SEO + keyword research','Google Local listing setup'] }
]
const SERVICES = [
  ['Web Development','Sites that look expensive and load like they mean it.'],
  ['eCommerce','Stores that sell after the first scroll.'],
  ['Mobile App Development','Pocket-sized versions of the business.'],
  ['Integration Solutions','APIs, MCP, webhooks, the unglamorous glue.'],
  ['SEO','Get found by people who can pay you.'],
  ['Traditional & Social Marketing','Assets included. Not an afterthought.'],
  ['Branding','A mark people remember after one glance.'],
  ['Online Reputation','What the internet says when you are not in the room.']
]
const WORK = [
  { slug:'signsmania', name:'SignsMania', url:'https://signsmania.com', year:'2024', industry:'eCommerce', purpose:'Custom storefront with live pricing and catalog management.', image:'work-signsmania.jpg' },
  { slug:'wrapbandits', name:'WrapBandits', url:'https://wrapbandits.com', year:'2025', industry:'Interactive', purpose:'No-signup 3D studio so a customer can preview before they buy.', image:'work-wrapbandits.jpg' },
  { slug:'wherethehoseat', name:'Where The Hose At', url:'https://wherethehoseat.com', year:'2023', industry:'eCommerce', purpose:'A spec-heavy catalog that sells without a sales call.', image:'work-hose.jpg' },
  { slug:'geofear', name:'GeoFear', url:'https://geofear.com', year:'2023', industry:'Survival / Outdoor', purpose:'A field-tested gear list that also happens to be a store.', image:'work-geofear.jpg' },
  { slug:'krabbs', name:'Krabbs', url:'https://krabbs.com', year:'2025', industry:'Game Utility', purpose:'Path of Exile 2 overlay that flags upgrades before you buy.', image:'work-krabbs.jpg' },
  { slug:'aiuinc', name:'AIU Inc.', url:'https://aiuinc.com', year:'2024', industry:'Corporate', purpose:'Program administrator site for retail agencies.', image:'work-aiu.jpg' },
  { slug:'jitfuel', name:'JitFuel', url:'https://jitfuel.com', year:'2025', industry:'eCommerce', purpose:'Branded merch stores for gyms. Zero inventory. Live in days.', image:'work-jitfuel.jpg' }
]
const app = () => document.querySelector('#app')
function route(){
  const parts = (location.hash || '#/').replace(/^#/, '').split('/').filter(Boolean)
  return { path: parts[0] || 'home', id: parts[1] || '' }
}
function navHTML(){
  return '<header class="nav"><div class="nav-inner"><a class="brand" href="#/"><img src="'+asset('mark.png')+'" alt=""><span class="logo-type">GOBRENNER</span></a><nav class="links"><a href="#/work">Work</a><a href="#/services">Services</a><a href="#/pricing">Pricing</a><a href="#/about">About</a></nav><div class="nav-right"><a class="btn" href="#/start">Start a build</a></div></div></header>'
}
function workRow(w){
  return '<a class="work-row" href="#/work/'+w.slug+'"><div class="shot"><img src="'+asset(w.image)+'" alt="'+w.name+'"></div><div class="meta"><p class="kicker">'+w.industry+' · '+w.year+'</p><h3>'+w.name+'</h3><p class="muted">'+w.purpose+'</p></div></a>'
}
function pkgCard(p){
  return '<article class="card"><h3>'+p.name+'</h3><p class="price">$'+p.price+'</p><p class="kicker">'+p.hours+'hr first preview</p><ul class="list">'+p.includes.map(function(i){return '<li>— '+i+'</li>'}).join('')+'</ul><a class="btn" href="#/start" style="margin-top:24px">Build this</a></article>'
}
function pageHome(){
  return '<section class="hero"><div class="hero-inner"><p class="kicker">Web · Brand · Commerce · Marketing</p><h1 class="display">Turning dreams into<br><span class="gold">reality</span></h1><p class="lede">A development and branding studio that still touches the work. First look in 48 hours. Miss the clock and you do not pay.</p><div class="row"><a class="btn" href="#/start">Start the questionnaire</a><a class="btn ghost" href="#/work">See the work</a></div></div></section><section class="section wrap"><h2 class="display">48 Hours or It\'s Free.</h2><div class="grid-3" style="margin-top:28px"><article class="card"><h3>Submit Brief</h3><p class="muted">Pages, products, logos, emails, hosting.</p></article><article class="card"><h3>Clock Starts</h3><p class="muted">Pay. The countdown is now a contract.</p></article><article class="card"><h3>Monitor</h3><p class="muted">Watch remaining time in the client console.</p></article></div></section><section class="section wrap"><div class="grid-3">'+PACKAGES.map(pkgCard).join('')+'</div></section><section class="section wrap"><div class="svc-tight">'+SERVICES.map(function(s){return '<span class="svc-chip"><strong>'+s[0]+'</strong><em>'+s[1]+'</em></span>'}).join('')+'</div></section><section class="section wrap"><h2 class="display">View Our Work</h2><div class="work-list">'+WORK.map(workRow).join('')+'</div></section>'
}
function pageWork(){
  var w = WORK.filter(function(x){return x.slug===route().id})[0]
  if (w) return '<div class="wrap section"><a href="#/work">← Work</a><p class="kicker">'+w.industry+'</p><h1 class="display">'+w.name+'</h1><p class="lede">'+w.purpose+'</p><p><a href="'+w.url+'" style="color:var(--gold)">'+w.url+'</a></p></div>'
  return '<div class="wrap section"><h1 class="display">View Our Work</h1><div class="work-list">'+WORK.map(workRow).join('')+'</div></div>'
}
function pageServices(){
  return '<div class="wrap section"><h1 class="display">Services</h1><div class="grid-2" style="margin-top:28px">'+SERVICES.map(function(s){return '<article class="card"><h3>'+s[0]+'</h3><p class="muted">'+s[1]+'</p></article>'}).join('')+'</div></div>'
}
function pagePricing(){
  return '<div class="wrap section"><h1 class="display">Packages</h1><div class="grid-3" style="margin-top:28px">'+PACKAGES.map(pkgCard).join('')+'</div></div>'
}
function pageAbout(){
  return '<div class="wrap section"><h1 class="display">One continuous craft.</h1><p class="lede">Robert Brenner — web developer, designer, marketer, SEO.</p><p class="muted">University of Miami — Herbert School of Business, BBA · rob@gobrenner.com</p><a class="btn" href="#/start" style="margin-top:24px">Start a project</a></div>'
}
function pageStart(){
  return '<div class="wrap section"><h1 class="display">Questionnaire</h1><p class="lede">This live preview is for layout review. The full multi-step brief lives in the downloadable build.</p><a class="btn" href="#/">Back to site</a></div>'
}
function render(){
  var views = { home:pageHome, work:pageWork, services:pageServices, pricing:pagePricing, about:pageAbout, start:pageStart }
  var view = views[route().path] || pageHome
  app().innerHTML = navHTML() + '<main>' + view() + '</main>'
}
addEventListener('hashchange', render)
render()
