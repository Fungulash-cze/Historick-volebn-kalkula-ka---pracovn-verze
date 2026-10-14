(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(N(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function k(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function A(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=k(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}})}else _.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var j;function M(){return j||=A(null,{useWorker:!0,resize:!0}),j}function N(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function P(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function F(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return M().apply(this,arguments)},n.exports.reset=function(){M().reset()},n.exports.create=A,n.exports.shapeFromPath=P,n.exports.shapeFromText=F})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),e,!1);var t=e.exports;e.exports.create;var n={1920:{year:1920,title:`Volby do Poslanecké sněmovny 1920`,subtitle:`První parlamentní volby v nově zrozené Československé republice`,date:`18. a 25. dubna 1920`,turnout:`89,6 %`,stakes:`Rozhodovalo se o samotném charakteru mladého státu: zvítězí socialistická vize nového řádu, agrárně-venkovský konzervatismus, nebo občansko-demokratická a národně-konzervativní vize státu?`,atmosphereQuote:`„Pryč od Vídně, pryč od Říma! Republika musí být sociálně spravedlivá a svobodná!“ – dobové heslo`,historicalContext:`V dubnu 1920 se konaly vůbec první parlamentní volby samostatného Československa podle nové demokratické ústavy z února 1920, které nahradily dosavadní nevolené Revoluční národní shromáždění. Po rozpadu habsburské monarchie a kruté světové válce čelila republika obrovským výzvám: hyperinflaci, nedostatku potravin a uhlí, radikalizaci dělnictva ovlivněného bolševickou revolucí v Rusku a napětí s početnou německou a maďarskou menšinou, které se ocitly v novém státě nedobrovolně.

Mezi hlavní témata patřila pozemková reforma (rozdělení šlechtických velkostatků), odluka církve od státu, 8hodinová pracovní doba a postavení Slovenska v novém unitárním státě. Zároveň to byly první celostátní volby v naší historii, v nichž měly ženy plné a rovné volební právo.`,outcomeSummary:`Volby přinesly triumf levice. Sociální demokraté (ČSSD) vedení Vlastimilem Tusarem získali přes 25,7 % hlasů a stali se nejsilnější stranou. Společně s německou sociální demokracií (DSAP) měla levice v parlamentu téměř většinu. Tusar sestavil koaliční vládu „rudozelené koalice“ (sociální demokraté a agrárníci).

Již na podzim 1920 však v ČSSD propukl hluboký rozkol mezi demokratickým křídlem a radikální leninskou levicí, což vedlo k pádu vlády, generální stávce a v květnu 1921 k založení Komunistické strany Československa (KSČ). Moc následně převzala úřednická vláda Jana Černého a posléze tzv. Pětka v čele s agrárníkem Antonínem Švehlou.`,parties:[{id:`cssd`,shortName:`ČSSD`,fullName:`Československá sociálně demokratická strana dělnická`,ideology:`Demokratický socialismus, odborové hnutí`,leaders:[`Vlastimil Tusar`,`Rudolf Bechyně`,`Bohumír Šmeral`],color:`#dc2626`,historicalPercentage:25.7,historicalSeats:74,description:`Dominantní politická síla průmyslového dělnictva a městského proletariátu, která vzešla z voleb 1920 jako nejsilnější strana nového státu. Hájila sociální spravedlnost, radikální pozemkovou reformu, zavedení 8hodinové pracovní doby, progresivní zdanění a postupné zestátnění klíčového průmyslu a dolů. Vedení v čele s ministerským předsedou Vlastimilem Tusarem a Rudolfem Bechyněm stálo na pozicích demokratického parlamentarismu a loajality k republice. Uvnitř strany však již silně vřelo radikální marxistické křídlo (Bohumír Šmeral, Antonín Zápotocký), které se po rozkolu na podzim 1920 odštěpilo a založilo KSČ.`,programHighlight:`Socializace velkých podniků, 8hodinový pracovní den, sociální pojištění a odluka církve od státu.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_soci%C3%A1ln%C4%9B_demokratick%C3%A1_strana_d%C4%9Blnick%C3%A1`},{id:`rszml`,shortName:`RSČV (Agrárníci)`,fullName:`Republikánská strana československého venkova`,ideology:`Agrarismus, venkovský konzervatismus, ochranářství`,leaders:[`Antonín Švehla`,`František Udržal`,`Karel Prášek`],color:`#16a34a`,historicalPercentage:9.7,historicalSeats:28,description:`Klíčový politický pilíř meziválečné československé demokracie a nejsilnější nesocialistická formace. Její hlavní voličskou základnu tvořili samostatní rolníci, sedláci, venkovská inteligence a družstevníci. Pod pragmatickým vedením Antonína Švehly strana kombinovala obranu soukromého vlastnictví půdy a agrární cla s důslednou státotvorností a sociálním smírem. Společně se slovenskými agrárníky (kandidujícími v rámci Slovenské národní a rolnické strany) vytvořili po volbách poslanecký klub o celkem 40 poslancích (13,7 % hlasů). Byla motorem pozemkové reformy, která měla půdu šlechtických velkostatků rozdělit venkovskému lidu, avšak odmítala jakékoliv socialistické experimenty a kolektivizaci.`,programHighlight:`Půda do rukou rolníků, agrární cla proti levnému dovozu, zachování křesťanských tradic a řádu.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/Republik%C3%A1nsk%C3%A1_strana_zem%C4%9Bd%C4%9Blsk%C3%A9ho_a_malorolnick%C3%A9ho_lidu`},{id:`csl`,shortName:`ČSL (Lidovci)`,fullName:`Československá strana lidová`,ideology:`Křesťanský socialismus, křesťanská demokracie, katolicismus`,leaders:[`Jan Šrámek`,`Bohumil Stašek`,`Alois Kříž`],color:`#eab308`,historicalPercentage:7.5,historicalSeats:21,description:`Hlavní politický reprezentant katolicky orientovaného obyvatelstva, především malorolníků, venkovských řemeslníků, drobných úředníků a věřících dělníků na Moravě a ve východních Čechách. Vznikla v lednu 1919 sloučením katolických proudů pod vedením monsignora Jana Šrámka. Ve volbách 1920 kandidovala na společné kandidátce se SĽS, s níž získala celkem 11,3 % hlasů a 33 křesel (z toho 21 připadlo ČSL). V napjaté atmosféře mladé republiky důsledně bránila pozice církve, církevní školy, náboženství ve školních osnovách a nedotknutelnost rodiny, přičemž v hospodářské oblasti razila křesťansko-sociální učení a solidaritu.`,programHighlight:`Obrana katolické církve proti sekularismu, podpora církevního školství a rodinná politika.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/KDU-%C4%8CSL`},{id:`csns`,shortName:`ČSS (Socialisté)`,fullName:`Československá strana socialistická`,ideology:`Národní socialismus, vlastenectví, reformismus`,leaders:[`Václav Klofáč`,`Jiří Stříbrný`,`Emil Franke`],color:`#f97316`,historicalPercentage:8.1,historicalSeats:24,description:`Středolevicová reformní strana s výrazným vlasteneckým profilem, orientovaná především na městskou inteligenci, úřednictvo, živnostníky a uvědomělé dělníky. Vznikla již před válkou jako národně sociální strana pod vedením Václava Klofáče. Hlásala socialismus zbavený marxistického internacionalismu a třídního boje, který stavěla na svébytném národním a humanistickém základě v tradici T. G. Masaryka. Patřila k nejradikálnějším zastáncům odluky církve od státu, sekulární školy a unitárního československého státu.`,programHighlight:`Socializace bez marxistického dogmatismu, jednotný národní stát a radikální protikatolický postoj.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_strana_n%C3%A1rodn%C4%9B_socialistick%C3%A1`},{id:`csnd`,shortName:`ČsND (Národní dem.)`,fullName:`Československá národní demokracie`,ideology:`Národní liberalismus, konzervatismus, hospodářský liberalismus`,leaders:[`Karel Kramář`,`Alois Rašín`,`Viktor Dyk`],color:`#2563eb`,historicalPercentage:6.3,historicalSeats:19,description:`Tradiční národně-liberální a konzervativní formace vedená Karlem Kramářem a prvním ministrem financí Aloisem Rašínem. Oporu nacházela u velkoprůmyslu, bankovního sektoru, velkoobchodu a národovecké měšťanské inteligence. Prosazovala hospodářský liberalismus, pevnou a stabilní měnu, striktní rozpočtovou disciplínu a ochranu soukromého podnikání. Byla nekompromisně protibolševická, prosazovala nostrifikaci (přenesení sídel podniků ze zahraničí do ČSR), přísný unitární stát a zahraničněpolitickou orientaci na Francii.`,programHighlight:`Silná a stabilní měna, ochrana soukromého vlastnictví, nostrifikace podniků a spojenectví s Francií.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_n%C3%A1rodn%C3%AD_demokracie`},{id:`dsap`,shortName:`DSAP (Něm. soc. dem.)`,fullName:`Deutsche sozialdemokratische Arbeiterpartei`,ideology:`Sociální demokracie, práva německojazyčné menšiny`,leaders:[`Ludwig Czech`,`Josef Seliger`],color:`#b91c1c`,historicalPercentage:11.1,historicalSeats:31,description:`Nejsilnější politická strana německé menšiny v ČSR a celkově třetí nejsilnější poslanecký klub po volbách 1920. Reprezentovala německojazyčné dělnictvo v průmyslovém pohraničí (Sudetech). Ačkoliv byla ideově spřízněna s českou sociální demokracií a hájila marxistický program a dělnická práva, v otázce státoprávní zpočátku odmítala vznik unitárního Československa a požadovala právo na sebeurčení a národnostní samosprávu. Postupně pod vedením Ludwiga Czecha přešla k loajální spolupráci a stala se pilířem demokratického tábora.`,programHighlight:`Socialismus, národnostní rovnoprávnost pro Němce, odmítnutí čechoslovakismu a podpora autonomie.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/N%C4%9Bmeck%C3%A1_soci%C3%A1ln%C4%9B_demokratick%C3%A1_strana_d%C4%9Blnick%C3%A1_v_%C4%8Ceskoslovensk%C3%A9_republice`},{id:`bdl`,shortName:`BdL (Něm. agrárníci)`,fullName:`Bund der Landwirte`,ideology:`Německý agrarismus, ochrana venkova`,leaders:[`Franz Spina`,`Wolfgang Zierhut`],color:`#15803d`,historicalPercentage:3.9,historicalSeats:11,description:`Konzervativní stavovská organizace sdružující německé rolníky, sedláky a venkovské majitele půdy v Sudetech. V roce 1920 se ostře vymezovala proti pozemkové reformě, kterou vnímala jako pokus o počeštění pohraničí a nespravedlivé vyvlastnění německých velkostatků bez tržní náhrady. Žádala ochranu zemědělské výroby a hospodářská cla. Pod vedením Franze Spiny se v druhé polovině 20. let stala průkopníkem tzv. německého aktivismu – vstoupila do československé vlády a loajálně spolupracovala na rozvoji státu.`,programHighlight:`Obrana německého venkova, odmítání konfiskace půdy bez spravedlivé náhrady, dovozní cla.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/Bund_der_Landwirte`},{id:`sls`,shortName:`SĽS (Ľudovci)`,fullName:`Slovenská ľudová strana`,ideology:`Slovenský autonomismus, křesťanský konzervatismus`,leaders:[`Andrej Hlinka`,`Ferdiš Juriga`,`Florián Tománek`],color:`#854d0e`,historicalPercentage:3.8,historicalSeats:12,description:`Autonomistické hnutí reprezentující katolické slovenské obyvatelstvo, vedené charismatickým katolickým knězem Andrejem Hlinkou. Ve volbách 1920 kandidovala na společné kandidátce s českou lidovou stranou pod hlavičkou ČSL (získala 12 mandátů a cca 3,8 % celostátních hlasů), brzy se však plně osamostatnila. Hlásala nedílnou národní svébytnost Slováků, bojovala proti pražskému centralismu a ideologii jednotného „československého národa“. Žádala plné naplnění Pittsburské dohody, zákonodárnou autonomii pro Slovensko a důslednou ochranu katolické víry před pražským laicismem.`,programHighlight:`Zákonodárná autonomie Slovenska, obrana katolické církve proti pražskému laicismu a čechoslovakismu.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/Hlinkova_slovensk%C3%A1_%C4%BEudov%C3%A1_strana`}],questions:[{id:1,title:`Pozemková reforma a velkostatky`,category:`Hospodářství a půda`,statement:`Rozsáhlé velkostatky šlechty a církve by měly být státem vyvlastněny a rozděleny mezi bezzemky a drobné rolníky.`,historicalNote:`Po vzniku Československa vlastnila šlechta a církev většinu zemědělské a lesní půdy. Řešilo se, zda má nová republika provést zábor velkostatků a půdu přerozdělit drobným hospodářům k nápravě historických poměrů, anebo chránit nedotknutelnost soukromého vlastnictví a zachovat efektivitu velkých zemědělských celků.`,context:`Po vzniku Československa vlastnila šlechta a církev většinu zemědělské a lesní půdy. Řešilo se, zda má nová republika provést zábor velkostatků a půdu přerozdělit drobným hospodářům k nápravě historických poměrů, anebo chránit nedotknutelnost soukromého vlastnictví a zachovat efektivitu velkých zemědělských celků.`,partyStances:{cssd:1,rszml:1,csl:0,csns:1,csnd:-1,dsap:1,bdl:-1,sls:0}},{id:2,title:`Socializace klíčového průmyslu`,category:`Socializace a průmysl`,statement:`Klíčové uhelné doly, energetika a velké velkokapitálové podniky by měly být převedeny do veřejného vlastnictví pod správu pracujících.`,historicalNote:`V poválečné vlně roku 1920 rezonovalo volání po tzv. socializaci strategického průmyslu. Spor se vedl o to, zda má stát převzít uhelné doly a energetiku do veřejného vlastnictví ve prospěch zaměstnanců, či zda ponechat strategická odvětví v soukromých rukou kvůli investicím a efektivnímu hospodaření.`,context:`V poválečné vlně roku 1920 rezonovalo volání po tzv. socializaci strategického průmyslu. Spor se vedl o to, zda má stát převzít uhelné doly a energetiku do veřejného vlastnictví ve prospěch zaměstnanců, či zda ponechat strategická odvětví v soukromých rukou kvůli investicím a efektivnímu hospodaření.`,partyStances:{cssd:1,rszml:-1,csl:-1,csns:1,csnd:-1,dsap:1,bdl:-1,sls:-1}},{id:3,title:`Osmihodinová pracovní doba`,category:`Sociální práva`,statement:`Zákonná pracovní doba by měla činit nanejvýš 8 hodin denně a stát by měl dbát na její dodržování u všech zaměstnavatelů.`,historicalNote:`Zákon o osmihodinové pracovní době z prosince 1918 patřil k významným sociálním reformám mladé republiky. Diskuse se točila kolem důslednosti jeho uplatňování a případného udělování výjimek – zejména v zemědělství během sezónních žní a v nepřetržitých provozech, kde hrozilo narušení výroby.`,context:`Zákon o osmihodinové pracovní době z prosince 1918 patřil k významným sociálním reformám mladé republiky. Diskuse se točila kolem důslednosti jeho uplatňování a případného udělování výjimek – zejména v zemědělství během sezónních žní a v nepřetržitých provozech, kde hrozilo narušení výroby.`,partyStances:{cssd:1,rszml:-1,csl:0,csns:1,csnd:-1,dsap:1,bdl:-1,sls:0}},{id:4,title:`Odluka církve od státu`,category:`Církev a stát`,statement:`Stát by měl být oddělen od římskokatolické církve a historická církevní privilegia by měla být odstraněna.`,historicalNote:`Po pádu monarchie sílily požadavky na sekularizaci veřejného života a heslo „Pryč od Říma“. Řešila se otázka, zda má nová republika oddělit veřejný život od vlivu církve a omezit její historická privilegia, anebo zachovat respekt k tradičním náboženským institucím a jejich majetku.`,context:`Po pádu monarchie sílily požadavky na sekularizaci veřejného života a heslo „Pryč od Říma“. Řešila se otázka, zda má nová republika oddělit veřejný život od vlivu církve a omezit její historická privilegia, anebo zachovat respekt k tradičním náboženským institucím a jejich majetku.`,partyStances:{cssd:1,rszml:0,csl:-1,csns:1,csnd:0,dsap:1,bdl:-1,sls:-1}},{id:5,title:`Náboženská výchova ve školách`,category:`Školství a víra`,statement:`Náboženská výchova a křesťanské hodnoty by měly zůstat součástí vzdělávání mládeže na školách.`,historicalNote:`Ve školství probíhal spor o charakter výuky. Diskutovalo se o tom, zda má škola vychovávat žáky v tradičních křesťanských morálních zásadách s náboženskou výchovou, nebo zda má být výuka čistě laická a založená na vědeckém poznání bez vlivu církví.`,context:`Ve školství probíhal spor o charakter výuky. Diskutovalo se o tom, zda má škola vychovávat žáky v tradičních křesťanských morálních zásadách s náboženskou výchovou, nebo zda má být výuka čistě laická a založená na vědeckém poznání bez vlivu církví.`,partyStances:{cssd:-1,rszml:0,csl:1,csns:-1,csnd:0,dsap:-1,bdl:1,sls:1}},{id:6,title:`Slovenská autonomie`,category:`Státoprávní uspořádání`,statement:`Slovensku by měla být udělena zákonodárná a správní autonomie s vlastním sněmem podle zásad Pittsburské dohody.`,historicalNote:`Zahraniční odboj podepsal v roce 1918 Pittsburskou dohodu předpokládající slovenskou samosprávu. V době vzniku ústavy 1920 se řešilo, zda Slovensku poskytnout vlastní zákonodárný sněm a správu, nebo zda je pro udržení stability a celistvosti mladého státu vhodnější centralizovaná správa v Praze.`,context:`Zahraniční odboj podepsal v roce 1918 Pittsburskou dohodu předpokládající slovenskou samosprávu. V době vzniku ústavy 1920 se řešilo, zda Slovensku poskytnout vlastní zákonodárný sněm a správu, nebo zda je pro udržení stability a celistvosti mladého státu vhodnější centralizovaná správa v Praze.`,partyStances:{cssd:-1,rszml:-1,csl:0,csns:-1,csnd:-1,dsap:0,bdl:0,sls:1}},{id:7,title:`Idea čechoslovakismu`,category:`Národní identita`,statement:`Češi a Slováci by měli být vnímáni jako jeden společný státotvorný národ československý s jedním státním jazykem.`,historicalNote:`Ústava z února 1920 definovala jednotný „národ československý“. Šlo o státotvorný koncept, který měl zajistit Slovanům většinu vůči početným národnostním menšinám, narážel však na otázku svébytnosti a rovnoprávnosti samostatného slovenského národa.`,context:`Ústava z února 1920 definovala jednotný „národ československý“. Šlo o státotvorný koncept, který měl zajistit Slovanům většinu vůči početným národnostním menšinám, narážel však na otázku svébytnosti a rovnoprávnosti samostatného slovenského národa.`,partyStances:{cssd:1,rszml:1,csl:1,csns:1,csnd:1,dsap:-1,bdl:-1,sls:-1}},{id:8,title:`Samospráva menšin a německý jazyk`,category:`Národnostní menšiny`,statement:`Německá a maďarská menšina by měla mít v oblastech s převahou svého obyvatelstva samosprávu a jejich jazyk by měl mít rovnocenné postavení.`,historicalNote:`V novém státě žily početné menšiny Němců a Maďarů. Vedla se debata, nakolik nová republika umožní pohraničním regionům s převahou německého obyvatelstva samosprávu a uznání jejich jazyka, a nakolik má prosazovat jednotnou suverenitu československého státu.`,context:`V novém státě žily početné menšiny Němců a Maďarů. Vedla se debata, nakolik nová republika umožní pohraničním regionům s převahou německého obyvatelstva samosprávu a uznání jejich jazyka, a nakolik má prosazovat jednotnou suverenitu československého státu.`,partyStances:{cssd:0,rszml:-1,csl:-1,csns:-1,csnd:-1,dsap:1,bdl:1,sls:0}},{id:9,title:`Měnová politika a deflace`,category:`Měnová politika`,statement:`Stát by měl uplatňovat přísnou rozpočtovou disciplínu k udržení stabilní měny, i kdyby to dočasně omezilo hospodářský růst.`,historicalNote:`Poválečná střední Evropa čelila hospodářským otřesům a znehodnocení měny. Československo volilo mezi přísnou měnovou politikou s pevnou korunou (která chránila úspory a stabilitu, ale ztěžovala export) a expanzivnější politikou podporující okamžitou zaměstnanost a výrobu.`,context:`Poválečná střední Evropa čelila hospodářským otřesům a znehodnocení měny. Československo volilo mezi přísnou měnovou politikou s pevnou korunou (která chránila úspory a stabilitu, ale ztěžovala export) a expanzivnější politikou podporující okamžitou zaměstnanost a výrobu.`,partyStances:{cssd:-1,rszml:0,csl:0,csns:-1,csnd:1,dsap:-1,bdl:0,sls:0}},{id:10,title:`Nostrifikace podniků`,category:`Hospodářský nacionalismus`,statement:`Podniky působící na našem území by měly mít své sídlo i vedení v Československu namísto zahraničí.`,historicalNote:`Mnohé klíčové akciové společnosti a banky v novém státě byly administrativně navázány na Vídeň či Budapešť. Zvažovalo se, zda právně vyžadovat přesun sídel a vedení do ČSR (tzv. nostrifikace) k posílení hospodářské nezávislosti, či ponechat volnější mezinárodní kapitálové toky.`,context:`Mnohé klíčové akciové společnosti a banky v novém státě byly administrativně navázány na Vídeň či Budapešť. Zvažovalo se, zda právně vyžadovat přesun sídel a vedení do ČSR (tzv. nostrifikace) k posílení hospodářské nezávislosti, či ponechat volnější mezinárodní kapitálové toky.`,partyStances:{cssd:1,rszml:1,csl:1,csns:1,csnd:1,dsap:-1,bdl:-1,sls:1}},{id:11,title:`Zemědělská cla a ochrana trhu`,category:`Zemědělství a cla`,statement:`Domácí zemědělci by měli být chráněni před levnější zahraniční konkurencí pomocí cel na dovoz obilí a potravin.`,historicalNote:`Poválečný trh řešil rozpor mezi zájmy venkova a měst. Ochranná cla pomáhala domácím hospodářům udržet rentabilní ceny produkce proti levnějšímu dovozu, avšak pro městské obyvatelstvo znamenala zvýšení cen základních potravin.`,context:`Poválečný trh řešil rozpor mezi zájmy venkova a měst. Ochranná cla pomáhala domácím hospodářům udržet rentabilní ceny produkce proti levnějšímu dovozu, avšak pro městské obyvatelstvo znamenala zvýšení cen základních potravin.`,partyStances:{cssd:-1,rszml:1,csl:1,csns:-1,csnd:1,dsap:-1,bdl:1,sls:1}},{id:12,title:`Spojenectví s Francií`,category:`Zahraniční politika`,statement:`Bezpečnost Československa by měla být primárně postavena na spojenecké smlouvě s Francií.`,historicalNote:`Československo hledalo záruky své nezávislosti v novém poválečném uspořádání. Řešilo se, zda zahraniční orientaci primárně opřít o vojenské spojenectví s Francií a versailleský mírový systém, či spíše hledat širší mezinárodní spolupráci v rámci Společnosti národů.`,context:`Československo hledalo záruky své nezávislosti v novém poválečném uspořádání. Řešilo se, zda zahraniční orientaci primárně opřít o vojenské spojenectví s Francií a versailleský mírový systém, či spíše hledat širší mezinárodní spolupráci v rámci Společnosti národů.`,partyStances:{cssd:1,rszml:1,csl:1,csns:1,csnd:1,dsap:-1,bdl:-1,sls:0}},{id:13,title:`Diplomatické vztahy se Sovětským Ruskem`,category:`Vztah k Sovětskému Rusku`,statement:`Československo by mělo diplomaticky uznat sovětské Rusko a navázat s ním oficiální vztahy.`,historicalNote:`V roce 1920 se řešil postoj evropských zemí k uspořádání v Rusku po revoluci. Vedl se spor o to, zda novou vládu v Moskvě diplomaticky uznat a otevřít hospodářské styky, nebo zachovat zdrženlivost z obavy o mezinárodní stabilitu.`,context:`V roce 1920 se řešil postoj evropských zemí k uspořádání v Rusku po revoluci. Vedl se spor o to, zda novou vládu v Moskvě diplomaticky uznat a otevřít hospodářské styky, nebo zachovat zdrženlivost z obavy o mezinárodní stabilitu.`,partyStances:{cssd:0,rszml:-1,csl:-1,csns:-1,csnd:-1,dsap:1,bdl:-1,sls:-1}},{id:14,title:`Výsady pro československé legionáře`,category:`Zásluhy o stát`,statement:`Českoslovenští legionáři by měli mít přednostní právo na uplatnění ve státní správě a na další sociální výhody.`,historicalNote:`Legionáři byli vnímáni jako klíčoví zakladatelé a obránci republiky. Diskutovalo se o tom, zda by jim měl stát zajistit zvláštní výhody jako projev uznání za zásluhy, nebo zda má v demokratické republice platit pro všechny občany rovná soutěž o státní pozice.`,context:`Legionáři byli vnímáni jako klíčoví zakladatelé a obránci republiky. Diskutovalo se o tom, zda by jim měl stát zajistit zvláštní výhody jako projev uznání za zásluhy, nebo zda má v demokratické republice platit pro všechny občany rovná soutěž o státní pozice.`,partyStances:{cssd:1,rszml:1,csl:0,csns:1,csnd:1,dsap:-1,bdl:-1,sls:-1}},{id:15,title:`Jednokomorový parlament versus Senát`,category:`Parlament a Senát`,statement:`Parlament by měl mít pouze jednu komoru namísto zřízení druhé komory v podobě Senátu.`,historicalNote:`Při tvorbě nové ústavy stála otázka struktury parlamentu. Zvažovalo se, zda má mít zákonodárný sbor pouze jednu přímo volenou komoru vyjadřující bezprostřední vůli lidu, anebo zda zřídit druhou komoru (Senát) jako uvážlivou pojistku pro důkladnější posuzování zákonů.`,context:`Při tvorbě nové ústavy stála otázka struktury parlamentu. Zvažovalo se, zda má mít zákonodárný sbor pouze jednu přímo volenou komoru vyjadřující bezprostřední vůli lidu, anebo zda zřídit druhou komoru (Senát) jako uvážlivou pojistku pro důkladnější posuzování zákonů.`,partyStances:{cssd:1,rszml:-1,csl:-1,csns:1,csnd:-1,dsap:1,bdl:-1,sls:-1}}],expandedQuestions:[{id:1,title:`Pozemková reforma a velkostatky`,category:`Hospodářství a půda`,statement:`Rozsáhlé velkostatky šlechty a církve by měly být státem vyvlastněny a rozděleny mezi bezzemky a drobné rolníky.`,historicalNote:`Po vzniku Československa vlastnila šlechta a církev většinu zemědělské a lesní půdy. Řešilo se, zda má nová republika provést zábor velkostatků a půdu přerozdělit drobným hospodářům k nápravě historických poměrů, anebo chránit nedotknutelnost soukromého vlastnictví a zachovat efektivitu velkých zemědělských celků.`,context:`Po vzniku Československa vlastnila šlechta a církev většinu zemědělské a lesní půdy. Řešilo se, zda má nová republika provést zábor velkostatků a půdu přerozdělit drobným hospodářům k nápravě historických poměrů, anebo chránit nedotknutelnost soukromého vlastnictví a zachovat efektivitu velkých zemědělských celků.`,partyStances:{cssd:1,rszml:1,csl:0,csns:1,csnd:-1,dsap:1,bdl:-1,sls:0}},{id:2,title:`Socializace klíčového průmyslu`,category:`Socializace a průmysl`,statement:`Klíčové uhelné doly, energetika a velké velkokapitálové podniky by měly být převedeny do veřejného vlastnictví pod správu pracujících.`,historicalNote:`V poválečné vlně roku 1920 rezonovalo volání po tzv. socializaci strategického průmyslu. Spor se vedl o to, zda má stát převzít uhelné doly a energetiku do veřejného vlastnictví ve prospěch zaměstnanců, či zda ponechat strategická odvětví v soukromých rukou kvůli investicím a efektivnímu hospodaření.`,context:`V poválečné vlně roku 1920 rezonovalo volání po tzv. socializaci strategického průmyslu. Spor se vedl o to, zda má stát převzít uhelné doly a energetiku do veřejného vlastnictví ve prospěch zaměstnanců, či zda ponechat strategická odvětví v soukromých rukou kvůli investicím a efektivnímu hospodaření.`,partyStances:{cssd:1,rszml:-1,csl:-1,csns:1,csnd:-1,dsap:1,bdl:-1,sls:-1}},{id:3,title:`Osmihodinová pracovní doba`,category:`Sociální práva`,statement:`Zákonná pracovní doba by měla činit nanejvýš 8 hodin denně a stát by měl dbát na její dodržování u všech zaměstnavatelů.`,historicalNote:`Zákon o osmihodinové pracovní době z prosince 1918 patřil k významným sociálním reformám mladé republiky. Diskuse se točila kolem důslednosti jeho uplatňování a případného udělování výjimek – zejména v zemědělství během sezónních žní a v nepřetržitých provozech, kde hrozilo narušení výroby.`,context:`Zákon o osmihodinové pracovní době z prosince 1918 patřil k významným sociálním reformám mladé republiky. Diskuse se točila kolem důslednosti jeho uplatňování a případného udělování výjimek – zejména v zemědělství během sezónních žní a v nepřetržitých provozech, kde hrozilo narušení výroby.`,partyStances:{cssd:1,rszml:-1,csl:0,csns:1,csnd:-1,dsap:1,bdl:-1,sls:0}},{id:4,title:`Odluka církve od státu`,category:`Církev a stát`,statement:`Stát by měl být oddělen od římskokatolické církve a historická církevní privilegia by měla být odstraněna.`,historicalNote:`Po pádu monarchie sílily požadavky na sekularizaci veřejného života a heslo „Pryč od Říma“. Řešila se otázka, zda má nová republika oddělit veřejný život od vlivu církve a omezit její historická privilegia, anebo zachovat respekt k tradičním náboženským institucím a jejich majetku.`,context:`Po pádu monarchie sílily požadavky na sekularizaci veřejného života a heslo „Pryč od Říma“. Řešila se otázka, zda má nová republika oddělit veřejný život od vlivu církve a omezit její historická privilegia, anebo zachovat respekt k tradičním náboženským institucím a jejich majetku.`,partyStances:{cssd:1,rszml:0,csl:-1,csns:1,csnd:0,dsap:1,bdl:-1,sls:-1}},{id:5,title:`Náboženská výchova ve školách`,category:`Školství a víra`,statement:`Náboženská výchova a křesťanské hodnoty by měly zůstat součástí vzdělávání mládeže na školách.`,historicalNote:`Ve školství probíhal spor o charakter výuky. Diskutovalo se o tom, zda má škola vychovávat žáky v tradičních křesťanských morálních zásadách s náboženskou výchovou, nebo zda má být výuka čistě laická a založená na vědeckém poznání bez vlivu církví.`,context:`Ve školství probíhal spor o charakter výuky. Diskutovalo se o tom, zda má škola vychovávat žáky v tradičních křesťanských morálních zásadách s náboženskou výchovou, nebo zda má být výuka čistě laická a založená na vědeckém poznání bez vlivu církví.`,partyStances:{cssd:-1,rszml:0,csl:1,csns:-1,csnd:0,dsap:-1,bdl:1,sls:1}},{id:6,title:`Slovenská autonomie`,category:`Státoprávní uspořádání`,statement:`Slovensku by měla být udělena zákonodárná a správní autonomie s vlastním sněmem podle zásad Pittsburské dohody.`,historicalNote:`Zahraniční odboj podepsal v roce 1918 Pittsburskou dohodu předpokládající slovenskou samosprávu. V době vzniku ústavy 1920 se řešilo, zda Slovensku poskytnout vlastní zákonodárný sněm a správu, nebo zda je pro udržení stability a celistvosti mladého státu vhodnější centralizovaná správa v Praze.`,context:`Zahraniční odboj podepsal v roce 1918 Pittsburskou dohodu předpokládající slovenskou samosprávu. V době vzniku ústavy 1920 se řešilo, zda Slovensku poskytnout vlastní zákonodárný sněm a správu, nebo zda je pro udržení stability a celistvosti mladého státu vhodnější centralizovaná správa v Praze.`,partyStances:{cssd:-1,rszml:-1,csl:0,csns:-1,csnd:-1,dsap:0,bdl:0,sls:1}},{id:7,title:`Idea čechoslovakismu`,category:`Národní identita`,statement:`Češi a Slováci by měli být vnímáni jako jeden společný státotvorný národ československý s jedním státním jazykem.`,historicalNote:`Ústava z února 1920 definovala jednotný „národ československý“. Šlo o státotvorný koncept, který měl zajistit Slovanům většinu vůči početným národnostním menšinám, narážel však na otázku svébytnosti a rovnoprávnosti samostatného slovenského národa.`,context:`Ústava z února 1920 definovala jednotný „národ československý“. Šlo o státotvorný koncept, který měl zajistit Slovanům většinu vůči početným národnostním menšinám, narážel však na otázku svébytnosti a rovnoprávnosti samostatného slovenského národa.`,partyStances:{cssd:1,rszml:1,csl:1,csns:1,csnd:1,dsap:-1,bdl:-1,sls:-1}},{id:8,title:`Samospráva menšin a německý jazyk`,category:`Národnostní menšiny`,statement:`Německá a maďarská menšina by měla mít v oblastech s převahou svého obyvatelstva samosprávu a jejich jazyk by měl mít rovnocenné postavení.`,historicalNote:`V novém státě žily početné menšiny Němců a Maďarů. Vedla se debata, nakolik nová republika umožní pohraničním regionům s převahou německého obyvatelstva samosprávu a uznání jejich jazyka, a nakolik má prosazovat jednotnou suverenitu československého státu.`,context:`V novém státě žily početné menšiny Němců a Maďarů. Vedla se debata, nakolik nová republika umožní pohraničním regionům s převahou německého obyvatelstva samosprávu a uznání jejich jazyka, a nakolik má prosazovat jednotnou suverenitu československého státu.`,partyStances:{cssd:0,rszml:-1,csl:-1,csns:-1,csnd:-1,dsap:1,bdl:1,sls:0}},{id:9,title:`Měnová politika a deflace`,category:`Měnová politika`,statement:`Stát by měl uplatňovat přísnou rozpočtovou disciplínu k udržení stabilní měny, i kdyby to dočasně omezilo hospodářský růst.`,historicalNote:`Poválečná střední Evropa čelila hospodářským otřesům a znehodnocení měny. Československo volilo mezi přísnou měnovou politikou s pevnou korunou (která chránila úspory a stabilitu, ale ztěžovala export) a expanzivnější politikou podporující okamžitou zaměstnanost a výrobu.`,context:`Poválečná střední Evropa čelila hospodářským otřesům a znehodnocení měny. Československo volilo mezi přísnou měnovou politikou s pevnou korunou (která chránila úspory a stabilitu, ale ztěžovala export) a expanzivnější politikou podporující okamžitou zaměstnanost a výrobu.`,partyStances:{cssd:-1,rszml:0,csl:0,csns:-1,csnd:1,dsap:-1,bdl:0,sls:0}},{id:10,title:`Nostrifikace podniků`,category:`Hospodářský nacionalismus`,statement:`Podniky působící na našem území by měly mít své sídlo i vedení v Československu namísto zahraničí.`,historicalNote:`Mnohé klíčové akciové společnosti a banky v novém státě byly administrativně navázány na Vídeň či Budapešť. Zvažovalo se, zda právně vyžadovat přesun sídel a vedení do ČSR (tzv. nostrifikace) k posílení hospodářské nezávislosti, či ponechat volnější mezinárodní kapitálové toky.`,context:`Mnohé klíčové akciové společnosti a banky v novém státě byly administrativně navázány na Vídeň či Budapešť. Zvažovalo se, zda právně vyžadovat přesun sídel a vedení do ČSR (tzv. nostrifikace) k posílení hospodářské nezávislosti, či ponechat volnější mezinárodní kapitálové toky.`,partyStances:{cssd:1,rszml:1,csl:1,csns:1,csnd:1,dsap:-1,bdl:-1,sls:1}},{id:11,title:`Zemědělská cla a ochrana trhu`,category:`Zemědělství a cla`,statement:`Domácí zemědělci by měli být chráněni před levnější zahraniční konkurencí pomocí cel na dovoz obilí a potravin.`,historicalNote:`Poválečný trh řešil rozpor mezi zájmy venkova a měst. Ochranná cla pomáhala domácím hospodářům udržet rentabilní ceny produkce proti levnějšímu dovozu, avšak pro městské obyvatelstvo znamenala zvýšení cen základních potravin.`,context:`Poválečný trh řešil rozpor mezi zájmy venkova a měst. Ochranná cla pomáhala domácím hospodářům udržet rentabilní ceny produkce proti levnějšímu dovozu, avšak pro městské obyvatelstvo znamenala zvýšení cen základních potravin.`,partyStances:{cssd:-1,rszml:1,csl:1,csns:-1,csnd:1,dsap:-1,bdl:1,sls:1}},{id:12,title:`Spojenectví s Francií`,category:`Zahraniční politika`,statement:`Bezpečnost Československa by měla být primárně postavena na spojenecké smlouvě s Francií.`,historicalNote:`Československo hledalo záruky své nezávislosti v novém poválečném uspořádání. Řešilo se, zda zahraniční orientaci primárně opřít o vojenské spojenectví s Francií a versailleský mírový systém, či spíše hledat širší mezinárodní spolupráci v rámci Společnosti národů.`,context:`Československo hledalo záruky své nezávislosti v novém poválečném uspořádání. Řešilo se, zda zahraniční orientaci primárně opřít o vojenské spojenectví s Francií a versailleský mírový systém, či spíše hledat širší mezinárodní spolupráci v rámci Společnosti národů.`,partyStances:{cssd:1,rszml:1,csl:1,csns:1,csnd:1,dsap:-1,bdl:-1,sls:0}},{id:13,title:`Diplomatické vztahy se Sovětským Ruskem`,category:`Vztah k Sovětskému Rusku`,statement:`Československo by mělo diplomaticky uznat sovětské Rusko a navázat s ním oficiální vztahy.`,historicalNote:`V roce 1920 se řešil postoj evropských zemí k uspořádání v Rusku po revoluci. Vedl se spor o to, zda novou vládu v Moskvě diplomaticky uznat a otevřít hospodářské styky, nebo zachovat zdrženlivost z obavy o mezinárodní stabilitu.`,context:`V roce 1920 se řešil postoj evropských zemí k uspořádání v Rusku po revoluci. Vedl se spor o to, zda novou vládu v Moskvě diplomaticky uznat a otevřít hospodářské styky, nebo zachovat zdrženlivost z obavy o mezinárodní stabilitu.`,partyStances:{cssd:0,rszml:-1,csl:-1,csns:-1,csnd:-1,dsap:1,bdl:-1,sls:-1}},{id:14,title:`Výsady pro československé legionáře`,category:`Zásluhy o stát`,statement:`Českoslovenští legionáři by měli mít přednostní právo na uplatnění ve státní správě a na další sociální výhody.`,historicalNote:`Legionáři byli vnímáni jako klíčoví zakladatelé a obránci republiky. Diskutovalo se o tom, zda by jim měl stát zajistit zvláštní výhody jako projev uznání za zásluhy, nebo zda má v demokratické republice platit pro všechny občany rovná soutěž o státní pozice.`,context:`Legionáři byli vnímáni jako klíčoví zakladatelé a obránci republiky. Diskutovalo se o tom, zda by jim měl stát zajistit zvláštní výhody jako projev uznání za zásluhy, nebo zda má v demokratické republice platit pro všechny občany rovná soutěž o státní pozice.`,partyStances:{cssd:1,rszml:1,csl:0,csns:1,csnd:1,dsap:-1,bdl:-1,sls:-1}},{id:15,title:`Jednokomorový parlament versus Senát`,category:`Parlament a Senát`,statement:`Parlament by měl mít pouze jednu komoru namísto zřízení druhé komory v podobě Senátu.`,historicalNote:`Při tvorbě nové ústavy stála otázka struktury parlamentu. Zvažovalo se, zda má mít zákonodárný sbor pouze jednu přímo volenou komoru vyjadřující bezprostřední vůli lidu, anebo zda zřídit druhou komoru (Senát) jako uvážlivou pojistku pro důkladnější posuzování zákonů.`,context:`Při tvorbě nové ústavy stála otázka struktury parlamentu. Zvažovalo se, zda má mít zákonodárný sbor pouze jednu přímo volenou komoru vyjadřující bezprostřední vůli lidu, anebo zda zřídit druhou komoru (Senát) jako uvážlivou pojistku pro důkladnější posuzování zákonů.`,partyStances:{cssd:1,rszml:-1,csl:-1,csns:1,csnd:-1,dsap:1,bdl:-1,sls:-1}},{id:16,title:`Dávka z majetku (Mimořádné zdanění bohatství)`,category:`Daně a finance`,statement:`Stát by měl zavést jednorázovou progresivní daň z většího majetku a válečných zisků, aby stáhl přebytečné peníze z oběhu a vyrovnal dluhy.`,historicalNote:`Po vzniku Československa panovala hrozba inflace kvůli množství znehodnocených peněz z dob války. Dávka z majetku a z přírůstku na majetku měla stabilizovat měnu a stáhnout přebytečné oběživo. Zvažovalo se, zda je takový zásah do majetku nezbytný pro stabilitu měny a snížení státního dluhu, nebo zda nepřiměřeně zatíží sedláky, podnikatele a majitele nemovitostí.`,context:`Po vzniku Československa panovala hrozba inflace kvůli množství znehodnocených peněz z dob války. Dávka z majetku a z přírůstku na majetku měla stabilizovat měnu a stáhnout přebytečné oběživo. Zvažovalo se, zda je takový zásah do majetku nezbytný pro stabilitu měny a snížení státního dluhu, nebo zda nepřiměřeně zatíží sedláky, podnikatele a majitele nemovitostí.`,partyStances:{cssd:1,rszml:-1,csl:0,csns:1,csnd:1,dsap:1,bdl:-1,sls:0}},{id:17,title:`Zrušení celibátu učitelek`,category:`Práva žen a školství`,statement:`Učitelky by měly mít právo se vdát a založit rodinu, aniž by tím automaticky ztratily místo ve státní škole.`,historicalNote:`Za dob monarchie platil pro učitelky celibát, což v praxi znamenalo, že sňatkem automaticky přišly o své zaměstnání. V novém státě se vedla společenská debata, zda tuto omezující praxi zrušit a umožnit jim kombinovat pedagogickou dráhu s rodinným životem, nebo zda si výchova dětí žádá výlučnou oddanost povolání.`,context:`Za dob monarchie platil pro učitelky celibát, což v praxi znamenalo, že sňatkem automaticky přišly o své zaměstnání. V novém státě se vedla společenská debata, zda tuto omezující praxi zrušit a umožnit jim kombinovat pedagogickou dráhu s rodinným životem, nebo zda si výchova dětí žádá výlučnou oddanost povolání.`,partyStances:{cssd:1,rszml:1,csl:-1,csns:1,csnd:1,dsap:1,bdl:0,sls:-1}},{id:18,title:`Odstranění šlechtických titulů`,category:`Rovnost a občanská práva`,statement:`Stát by neměl tolerovat další užívání aristokratických titulů, protože v demokratické republice by si měli být všichni rovni bez ohledu na původ.`,historicalNote:`S koncem Rakouska-Uherska se formoval vztah nové demokratické republiky k domácí aristokracii. Diskutovalo se o tom, zda historické šlechtické tituly ponechat jako tradici a projev kontinuity, nebo jejich užívání zrušit a postavit mimo zákon ve jménu občanské rovnosti.`,context:`S koncem Rakouska-Uherska se formoval vztah nové demokratické republiky k domácí aristokracii. Diskutovalo se o tom, zda historické šlechtické tituly ponechat jako tradici a projev kontinuity, nebo jejich užívání zrušit a postavit mimo zákon ve jménu občanské rovnosti.`,partyStances:{cssd:1,rszml:1,csl:0,csns:1,csnd:-1,dsap:1,bdl:-1,sls:0}},{id:19,title:`Státní podpora bytových družstev a ochrana nájemníků`,category:`Bydlení a sociální péče`,statement:`Stát by měl chránit nájemníky regulací nájmů a finančně podporovat výstavbu dostupných bytů.`,historicalNote:`Poválečná léta přinesla nedostatek ubytování, který dopadal především na chudší vrstvy ve městech. Zvažovalo se, zda má stát více zasáhnout do trhu s bydlením regulací cen nájemného a přímou podporou stavebních družstev, nebo zda situaci vyřeší soukromý trh a soutěž.`,context:`Poválečná léta přinesla nedostatek ubytování, který dopadal především na chudší vrstvy ve městech. Zvažovalo se, zda má stát více zasáhnout do trhu s bydlením regulací cen nájemného a přímou podporou stavebních družstev, nebo zda situaci vyřeší soukromý trh a soutěž.`,partyStances:{cssd:1,rszml:0,csl:1,csns:1,csnd:-1,dsap:1,bdl:0,sls:1}},{id:20,title:`Prohibiční tendence (Omezování alkoholu)`,category:`Veřejné zdraví a společnost`,statement:`Stát by měl omezit výrobu a prodej alkoholických nápojů a regulovat provoz hostinců.`,historicalNote:`Po válce se diskutovalo o potírání alkoholismu po vzoru americké prohibice. Zvažovalo se, zda omezit výrobu i prodej alkoholických nápojů a regulovat hostince v zájmu veřejného zdraví, anebo zachovat volnost obchodu a respektovat společenské zvyklosti.`,context:`Po válce se diskutovalo o potírání alkoholismu po vzoru americké prohibice. Zvažovalo se, zda omezit výrobu i prodej alkoholických nápojů a regulovat hostince v zájmu veřejného zdraví, anebo zachovat volnost obchodu a respektovat společenské zvyklosti.`,partyStances:{cssd:1,rszml:-1,csl:0,csns:1,csnd:0,dsap:1,bdl:-1,sls:0}},{id:21,title:`Nahrazení stálé armády milicemi`,category:`Obrana a bezpečnost`,statement:`Československo by se mělo vyhnout budování stálé armády a nahradit ji systémem dobrovolnických či lidových milicí.`,historicalNote:`Zkušenosti z první světové války vyvolaly ve společnosti antimilitaristické nálady. Diskutovalo se o tom, zda je k obraně mladého státu nezbytné vybudovat stálou profesionální armádu, anebo zda by postačoval systém dobrovolnických lidových milicí.`,context:`Zkušenosti z první světové války vyvolaly ve společnosti antimilitaristické nálady. Diskutovalo se o tom, zda je k obraně mladého státu nezbytné vybudovat stálou profesionální armádu, anebo zda by postačoval systém dobrovolnických lidových milicí.`,partyStances:{cssd:1,rszml:-1,csl:-1,csns:-1,csnd:-1,dsap:1,bdl:-1,sls:0}},{id:22,title:`Nemocenské a úrazové pojištění rolníků`,category:`Sociální zabezpečení`,statement:`Státní sociální pojištění by se mělo rozšířit i na samostatně hospodařící rolníky, nikoliv chránit pouze dělníky v továrnách.`,historicalNote:`Vznikající státní systém sociálního a nemocenského zabezpečení původně pokrýval primárně průmyslové dělnictvo z velkých měst. Zákonodárci řešili, zda je spravedlivé a rozpočtově únosné tento záchytný systém rozšířit na venkov.`,context:`Vznikající státní systém sociálního a nemocenského zabezpečení původně pokrýval primárně průmyslové dělnictvo z velkých měst. Zákonodárci řešili, zda je spravedlivé a rozpočtově únosné tento záchytný systém rozšířit na venkov.`,partyStances:{cssd:1,rszml:1,csl:1,csns:1,csnd:-1,dsap:1,bdl:1,sls:1}},{id:23,title:`Volební právo vojáků`,category:`Volební právo`,statement:`Vojáci v činné službě by neměli mít volební právo, aby se předešlo politizaci ozbrojených složek.`,historicalNote:`Při tvorbě ústavy se řešilo, zda připustit vojáky k volebním urnám. Názory stály mezi obavou, že volební agitace v kasárnách armádu vnitřně naruší, a demokratickým principem, podle něhož by uniforma neměla nikoho připravit o základní občanská práva.`,context:`Při tvorbě ústavy se řešilo, zda připustit vojáky k volebním urnám. Názory stály mezi obavou, že volební agitace v kasárnách armádu vnitřně naruší, a demokratickým principem, podle něhož by uniforma neměla nikoho připravit o základní občanská práva.`,partyStances:{cssd:-1,rszml:1,csl:1,csns:1,csnd:1,dsap:-1,bdl:1,sls:1}},{id:24,title:`Zrovnoprávnění nemanželských dětí`,category:`Rovnost a rodinné právo`,statement:`Zákon by měl zajistit, aby nemanželské děti měly v dědickém právu stejné postavení jako děti narozené v manželském svazku.`,historicalNote:`Dědičné a občanské právo pocházející z doby monarchie děti svobodných matek znevýhodňovalo. Společnost se přela, zda zachovat specifické postavení dětí z manželských svazků coby ochrany tradiční rodiny, nebo vyžadovat právní rovnost dětí bez ohledu na způsob jejich zrození.`,context:`Dědičné a občanské právo pocházející z doby monarchie děti svobodných matek znevýhodňovalo. Společnost se přela, zda zachovat specifické postavení dětí z manželských svazků coby ochrany tradiční rodiny, nebo vyžadovat právní rovnost dětí bez ohledu na způsob jejich zrození.`,partyStances:{cssd:1,rszml:0,csl:-1,csns:1,csnd:0,dsap:1,bdl:0,sls:-1}},{id:25,title:`Zastoupení menšin ve státní správě`,category:`Státní správa a menšiny`,statement:`Místa úředníků, policistů a soudců v pohraničí by se měla obsazovat loajálními občany Československa i za cenu toho, že budou uvolněni dosavadní zaměstnanci německé národnosti.`,historicalNote:`V oblastech státu obývaných převážně německou menšinou nadále sloužila většina původních německy mluvících úředníků. Stát zvažoval, do jaké míry by se tyto strategické posty měly obměnit za nové státotvorné občany, aby republika potvrdila svou moc a zajistila loajalitu státního aparátu.`,context:`V oblastech státu obývaných převážně německou menšinou nadále sloužila většina původních německy mluvících úředníků. Stát zvažoval, do jaké míry by se tyto strategické posty měly obměnit za nové státotvorné občany, aby republika potvrdila svou moc a zajistila loajalitu státního aparátu.`,partyStances:{cssd:0,rszml:1,csl:1,csns:1,csnd:1,dsap:-1,bdl:-1,sls:0}},{id:26,title:`Financování církví státem (Kongrua)`,category:`Církev a finance`,statement:`Stát by měl přestat hradit platy duchovních z veřejných peněz; toto finanční zabezpečení by mělo přejít na samotné církve.`,historicalNote:`V době vzniku republiky existoval systém, kdy stát církvím z rozpočtu doplácel na platy duchovních. Řešilo se, zda by stát měl z pozice svobody vyznání tento náklad zrušit a nechat farnosti, ať se financují samy, nebo zda zachovat dosavadní garanci z obavy o životní úroveň kněžích.`,context:`V době vzniku republiky existoval systém, kdy stát církvím z rozpočtu doplácel na platy duchovních. Řešilo se, zda by stát měl z pozice svobody vyznání tento náklad zrušit a nechat farnosti, ať se financují samy, nebo zda zachovat dosavadní garanci z obavy o životní úroveň kněžích.`,partyStances:{cssd:1,rszml:0,csl:-1,csns:1,csnd:0,dsap:1,bdl:0,sls:-1}},{id:27,title:`Trest smrti`,category:`Spravedlnost a trestní právo`,statement:`Trest smrti by se v novém demokratickém trestním zákoníku měl zrušit jako nehumánní přežitek a nahradit doživotním trestem.`,historicalNote:`Během tvorby nového československého trestního práva se objevilo dilema, zda si má budovaná demokracie ponechat právo popravovat zločince z důvodu odstrašení a udržení pořádku, nebo tento trest zrušit v duchu budovaného humanismu.`,context:`Během tvorby nového československého trestního práva se objevilo dilema, zda si má budovaná demokracie ponechat právo popravovat zločince z důvodu odstrašení a udržení pořádku, nebo tento trest zrušit v duchu budovaného humanismu.`,partyStances:{cssd:1,rszml:-1,csl:-1,csns:1,csnd:-1,dsap:1,bdl:-1,sls:-1}},{id:28,title:`Znárodnění železnic`,category:`Doprava a infrastruktura`,statement:`Zbytky soukromých železničních drah a související infrastruktury by se měly postupně přesunout do vlastnictví státu.`,historicalNote:`Vedle hlavních tahů v zemi nadále fungovala řada komerčních a zemských železnic. Diskutovalo se o tom, zda by nová republika měla z bezpečnostních a strategických důvodů více převzít železniční síť do vlastních rukou, nebo ponechat prostor volnému trhu a komerčním majitelům.`,context:`Vedle hlavních tahů v zemi nadále fungovala řada komerčních a zemských železnic. Diskutovalo se o tom, zda by nová republika měla z bezpečnostních a strategických důvodů více převzít železniční síť do vlastních rukou, nebo ponechat prostor volnému trhu a komerčním majitelům.`,partyStances:{cssd:1,rszml:1,csl:1,csns:1,csnd:1,dsap:-1,bdl:0,sls:1}},{id:29,title:`Autonomie a majetek německých univerzit`,category:`Školství a menšiny`,statement:`Německé univerzitě v Praze by mělo zůstat její dosavadní postavení i historický majetek a stát by jej neměl převádět ve prospěch české univerzity.`,historicalNote:`Během prvních let ČSR se řešilo, komu náleží univerzitní budovy (např. Karolinum), které v té době z velké části vlastnila nebo spravovala německá část pražské univerzity. Zákonodárci zvažovali, zda majetek částečně převést českým institucím, nebo respektovat samosprávu a postavení starých akademických celků.`,context:`Během prvních let ČSR se řešilo, komu náleží univerzitní budovy (např. Karolinum), které v té době z velké části vlastnila nebo spravovala německá část pražské univerzity. Zákonodárci zvažovali, zda majetek částečně převést českým institucím, nebo respektovat samosprávu a postavení starých akademických celků.`,partyStances:{cssd:0,rszml:-1,csl:0,csns:-1,csnd:-1,dsap:1,bdl:1,sls:1}},{id:30,title:`Omezení stávkového práva státních zaměstnanců`,category:`Práce a veřejná správa`,statement:`Zaměstnanci v klíčové státní infrastruktuře, jako jsou železnice a pošty, by neměli mít povoleno stávkovat, aby neohrozili chod republiky.`,historicalNote:`Některé stávky zaměstnanců na počátku existence Československa, motivované požadavky na zlepšení platových a sociálních podmínek v době poválečné drahoty, způsobovaly komplikace v zásobování a dopravě. Státní představitelé stáli před rozhodnutím, zda je zajištění spolehlivého chodu státu nadřazeno, nebo zda lze omezit dělnické právo stávkovat.`,context:`Některé stávky zaměstnanců na počátku existence Československa, motivované požadavky na zlepšení platových a sociálních podmínek v době poválečné drahoty, způsobovaly komplikace v zásobování a dopravě. Státní představitelé stáli před rozhodnutím, zda je zajištění spolehlivého chodu státu nadřazeno, nebo zda lze omezit dělnické právo stávkovat.`,partyStances:{cssd:-1,rszml:1,csl:1,csns:-1,csnd:1,dsap:-1,bdl:1,sls:0}},{id:31,title:`Rovnoprávnost civilních sňatků`,category:`Rodinné a občanské právo`,statement:`Civilní sňatek na úřadě by měl mít stejnou právní platnost jako sňatek uzavřený v kostele.`,historicalNote:`Za monarchie byl občanský sňatek určen pro osoby bez vyznání. Manželská novela z roku 1919 zavedla fakultativní civilní sňatek, kdy si snoubenci mohli zvolit mezi sňatkem na úřadě a v kostele.`,context:`Za monarchie byl občanský sňatek určen pro osoby bez vyznání. Manželská novela z roku 1919 zavedla fakultativní civilní sňatek, kdy si snoubenci mohli zvolit mezi sňatkem na úřadě a v kostele.`,partyStances:{cssd:1,rszml:1,csl:-1,csns:1,csnd:1,dsap:1,bdl:0,sls:-1}},{id:32,title:`Výjimky ze zákonné pracovní doby pro rolníky`,category:`Zemědělství a práce`,statement:`Ochrana pracovníků v podobě osmihodinové pracovní doby by v zemědělství neměla platit plošně; mělo by se umožnit nařizování přesčasů během probíhajících žní.`,historicalNote:`Jako jedno ze svých prvních rozhodnutí zavedlo Československo osmihodinovou pracovní dobu. Okamžitě se však řešilo, zda pravidlo vytvořené pro moderní továrny lze stejně uplatňovat na statcích, kde je nutné přizpůsobovat pracovní tempo sezóně a záchraně plodin.`,context:`Jako jedno ze svých prvních rozhodnutí zavedlo Československo osmihodinovou pracovní dobu. Okamžitě se však řešilo, zda pravidlo vytvořené pro moderní továrny lze stejně uplatňovat na statcích, kde je nutné přizpůsobovat pracovní tempo sezóně a záchraně plodin.`,partyStances:{cssd:-1,rszml:1,csl:1,csns:-1,csnd:1,dsap:-1,bdl:1,sls:1}},{id:33,title:`Odškodnění za rakouské válečné půjčky`,category:`Finance a válečné dluhy`,statement:`Stát by měl občanům proplatit staré rakouské válečné dluhopisy, do kterých vložili své úspory.`,historicalNote:`Rakousko-Uhersko financovalo válku půjčkami od vlastního obyvatelstva formou dluhopisů. Nově vzniklé Československo stálo před rozhodnutím, zda tyto závazky za neexistující stát vůči občanům převezme a zatíží státní rozpočet, nebo zda je nechá propadnout.`,context:`Rakousko-Uhersko financovalo válku půjčkami od vlastního obyvatelstva formou dluhopisů. Nově vzniklé Československo stálo před rozhodnutím, zda tyto závazky za neexistující stát vůči občanům převezme a zatíží státní rozpočet, nebo zda je nechá propadnout.`,partyStances:{cssd:-1,rszml:0,csl:1,csns:-1,csnd:-1,dsap:1,bdl:1,sls:1}},{id:34,title:`Financování menšinového školství`,category:`Školství a menšiny`,statement:`Stát by měl z rozpočtu cíleně financovat výstavbu českých škol v příhraničních oblastech, a to i v obcích, kde žije menší množství českých dětí.`,historicalNote:`V převážně německy mluvících sudetských oblastech chyběly budovy a kapacity pro české vzdělávání. Na vládní úrovni se rozhodovalo, zda tam cíleně investovat do nových českých škol jako formy demonstrace vlivu na hranicích, nebo zda to odmítnout jako nehospodárné.`,context:`V převážně německy mluvících sudetských oblastech chyběly budovy a kapacity pro české vzdělávání. Na vládní úrovni se rozhodovalo, zda tam cíleně investovat do nových českých škol jako formy demonstrace vlivu na hranicích, nebo zda to odmítnout jako nehospodárné.`,partyStances:{cssd:1,rszml:1,csl:1,csns:1,csnd:1,dsap:-1,bdl:-1,sls:0}},{id:35,title:`Zrušení svátků katolických svatých`,category:`Svátky a tradice`,statement:`Státem uznané dny volna na katolické svátky by měly být zrušeny a v kalendáři by je měly nahradit svátky vzniku republiky či výročí spojená s reformační tradicí.`,historicalNote:`Tvorba nového kalendáře oficiálních svátků vyvolala debatu ohledně duchovního směřování státu. Zatímco část společnosti vnímala státní svátky jako nutný odklon od rakouské katolické tradice, jiní hájili zvyklosti a kulturní kořeny, na které byl běžný lid zvyklý.`,context:`Tvorba nového kalendáře oficiálních svátků vyvolala debatu ohledně duchovního směřování státu. Zatímco část společnosti vnímala státní svátky jako nutný odklon od rakouské katolické tradice, jiní hájili zvyklosti a kulturní kořeny, na které byl běžný lid zvyklý.`,partyStances:{cssd:1,rszml:0,csl:-1,csns:1,csnd:0,dsap:1,bdl:-1,sls:-1}},{id:36,title:`Zdanění piva a cukru`,category:`Daně a spotřeba`,statement:`Vláda by měla navýšit příjmy státního rozpočtu zdaněním piva a cukru, i kdyby to vedlo ke zdražení těchto produktů pro běžné občany.`,historicalNote:`Ve snaze pokrýt vyšší státní výdaje hledala nová republika nové zdroje příjmů. Objevily se návrhy na navýšení spotřebních daní na hojně užívané produkty. Rozhodovalo se, zda je vyrovnaný rozpočet důležitější než ochrana dostupných cen pro nejchudší obyvatele.`,context:`Ve snaze pokrýt vyšší státní výdaje hledala nová republika nové zdroje příjmů. Objevily se návrhy na navýšení spotřebních daní na hojně užívané produkty. Rozhodovalo se, zda je vyrovnaný rozpočet důležitější než ochrana dostupných cen pro nejchudší obyvatele.`,partyStances:{cssd:-1,rszml:-1,csl:0,csns:-1,csnd:1,dsap:-1,bdl:-1,sls:0}},{id:37,title:`Domovské právo pro uprchlíky z Haliče`,category:`Občanství a uprchlíci`,statement:`Stát by měl umožnit snadné udělení občanství (domovského práva) židovským uprchlíkům z Haliče, kteří zde nalezli útočiště na počátku války.`,historicalNote:`V důsledku pohybu vojsk prchlo z frontové Haliče do českých zemí větší množství chudých obyvatel, kteří zde přečkali válečné roky. Nový stát po válce balancoval mezi humanistickým závazkem poskytnout těmto válkou zasaženým uprchlíkům integraci do společnosti a domácími tlaky, které požadovaly jejich vyhoštění k uvolnění kapacity bydlení.`,context:`V důsledku pohybu vojsk prchlo z frontové Haliče do českých zemí větší množství chudých obyvatel, kteří zde přečkali válečné roky. Nový stát po válce balancoval mezi humanistickým závazkem poskytnout těmto válkou zasaženým uprchlíkům integraci do společnosti a domácími tlaky, které požadovaly jejich vyhoštění k uvolnění kapacity bydlení.`,partyStances:{cssd:1,rszml:-1,csl:-1,csns:0,csnd:-1,dsap:1,bdl:-1,sls:-1}},{id:38,title:`Zákaz podávání alkoholu mladistvým`,category:`Veřejné zdraví a mládež`,statement:`Stát by měl zákonem zakázat podávání a prodej alkoholických nápojů dětem a mladistvým.`,historicalNote:`Do vzniku republiky neexistovalo zákonné věkové omezení pro prodej a konzumaci alkoholu. Řešilo se, zda by měl stát zákonem chránit dospívající a zakázat podávání alkoholu mladistvým, anebo zda má regulace zůstat v odpovědnosti rodin a hostinských.`,context:`Do vzniku republiky neexistovalo zákonné věkové omezení pro prodej a konzumaci alkoholu. Řešilo se, zda by měl stát zákonem chránit dospívající a zakázat podávání alkoholu mladistvým, anebo zda má regulace zůstat v odpovědnosti rodin a hostinských.`,partyStances:{cssd:1,rszml:0,csl:1,csns:1,csnd:1,dsap:1,bdl:0,sls:1}},{id:39,title:`Délka povinné vojenské služby (zkrácení na 14 měsíců)`,category:`Obrana a bezpečnost`,statement:`Délka povinné vojenské služby by měla být zkrácena z dosavadních dvou let (24 měsíců) na 14 měsíců.`,historicalNote:`Při přijímání branného zákona na jaře 1920 se o úplném zrušení branné povinnosti neuvažovalo, neboť nová republika potřebovala zajistit obranu svých dosud neklidných hranic. Zásadní spor se vedl o délku prezenční služby: na jedné straně stál požadavek na dvouletou službu (24 měsíců) pro zajištění důkladného výcviku a stálé bojeschopnosti, na druhé straně požadavek na zkrácení na 14 měsíců z důvodu úspor státního rozpočtu a snahy, aby odvedenci dlouhodobě nechyběli v zemědělství a hospodářství.`,context:`Při přijímání branného zákona na jaře 1920 se o úplném zrušení branné povinnosti neuvažovalo, neboť nová republika potřebovala zajistit obranu svých dosud neklidných hranic. Zásadní spor se vedl o délku prezenční služby: na jedné straně stál požadavek na dvouletou službu (24 měsíců) pro zajištění důkladného výcviku a stálé bojeschopnosti, na druhé straně požadavek na zkrácení na 14 měsíců z důvodu úspor státního rozpočtu a snahy, aby odvedenci dlouhodobě nechyběli v zemědělství a hospodářství.`,partyStances:{cssd:1,rszml:0,csl:0,csns:-1,csnd:-1,dsap:1,bdl:1,sls:1}},{id:40,title:`Uzákonění rozvodu manželství`,category:`Rodinné a občanské právo`,statement:`Stát by měl všem občanům umožnit úřední rozvod manželství s právem uzavřít nový sňatek.`,historicalNote:`Dosavadní rakouské právo katolikům neumožňovalo rozvod (tzv. rozluku), který by dovoloval uzavřít nové manželství. Nová úprava čelila sporu, zda upřednostnit světské právo na rozvod, nebo se držet náboženské zásady nerozlučitelnosti rodiny.`,context:`Dosavadní rakouské právo katolikům neumožňovalo rozvod (tzv. rozluku), který by dovoloval uzavřít nové manželství. Nová úprava čelila sporu, zda upřednostnit světské právo na rozvod, nebo se držet náboženské zásady nerozlučitelnosti rodiny.`,partyStances:{cssd:1,rszml:0,csl:-1,csns:1,csnd:1,dsap:1,bdl:0,sls:-1}}],electionSystem:{body:`Parlament se skládal ze dvou komor: Poslanecké sněmovny (300 mandátů) a Senátu (150 mandátů). V dubnu 1920 se však fakticky obsadilo jen 281 poslaneckých a 142 senátorských křesel. Kvůli tehdy neuzavřeným hranicím a sporům se totiž nevolilo na Těšínsku, Hlučínsku, Vitorazsku ani na Podkarpatské Rusi.`,system:`Poměrný systém ve 23 vícemandátových krajích (pro sněmovnu). Pro přepočet se v prvním skrutiniu používala Hareova kvóta, ve druhém a třetím Hagenbach-Bischoffova. Pro zisk mandátu v kraji neexistovala žádná umělá uzavírací klauzule, stačilo dosáhnout volebního čísla. Hlasovalo se pomocí přísně vázaných kandidátních listin bez možnosti kroužkování.`,franchise:`Všeobecné a rovné volební právo pro muže i ženy (poprvé v historii bez omezujícího majetkového censu). Věk pro volbu do Sněmovny byl stanoven na 21 let, pro Senát na 26 let. Podmínkou bylo státní občanství a bydliště v obci alespoň po dobu 3 měsíců.`,eligibility:`Do Poslanecké sněmovny mohl kandidovat občan od 30 let věku, do Senátu až od 45 let.`,trivia:[`Volební povinnost: Účast u voleb byla ze zákona povinná. Kdo se bez vážného důvodu (nemoc, věk nad 70 let, vzdálenost přes 100 km) nedostavil k urnám, riskoval pokutu od 20 do 5 000 Kč nebo vězení až na 1 měsíc.`,`Zákaz alkoholu: V den voleb i den předcházející platil v celé republice přísný zákaz nalévání a prodeje jakéhokoli alkoholu.`,`První účast žen: Ženy tvořily více než 53 % všech zapsaných voličů. Do parlamentu bylo poprvé zvoleno celkem 16 žen (13 poslankyň a 3 senátorky).`,`Národnostní rozmanitost: Německé a maďarské strany získaly přes 30 % všech poslaneckých mandátů, což věrně odráželo etnické složení nového státu.`]}},1946:{year:1946,title:`Volby do Ústavodárného shromáždění 1946`,subtitle:`Poslední částečně svobodné volby před čtyřiceti lety komunistické totality`,date:`26. května 1946`,turnout:`94,0 %`,stakes:`Rozhodovalo se o geopolitickém a mocenském směřování země: zůstane Československo pluralitní demokracií a mostem na Západ, nebo se stane součástí sovětské sféry vlivu s omezenou suverenitou?`,atmosphereQuote:`„Se Sovětským svazem na věčné časy a nikdy jinak!“ vs. „Za svobodu a křesťanskou kulturu!“`,historicalContext:`Volby v květnu 1946 probíhaly v jedinečné a vypjaté atmosféře těsně po skončení druhé světové války. V zemi panovala vděčnost Sovětskému svazu za osvobození od nacistické okupace a zároveň rozhořčení ze zrady západních mocností v Mnichově 1938. 

Politická scéna byla zásadně omezena systémem tzv. Národní fronty: předválečné pravicové strany (především agrárníci a národní sjednocení) byly zakázány pod záminkou kolaborace. Probíhal masový odsun téměř 3 milionů Němců, konfiskace jejich majetku a osidlování pohraničí. Klíčový těžký průmysl, doly a banky byly již od října 1945 znárodněny Benešovými dekrety. Komunisté (KSČ) pod vedením Klementa Gottwalda vystupovali v roli vlastenců hájících drobné živnostníky a sedláky, zatímco demokratické strany (ČSNS, ČSL a slovenská Demokratická strana) se snažily bránit zbytek občanských svobod a parlamentní pluralitu.`,outcomeSummary:`KSČ v českých zemích drtivě zvítězila se ziskem 40,17 % hlasů (celostátně 31,05 %). Na Slovensku však došlo k politickému zemětřesení: nekomunistická Demokratická strana (DS) získala 62 % hlasů a porazila slovenské komunisty. 

Klement Gottwald se stal předsedou koaliční vlády Národní fronty. Komunisté obsadili klíčová ministerstva vnitra (SNB), informací, zemědělství a financí. Vítězství demokratů na Slovensku komunisté neutralizovali tzv. třetí pražskou dohodou, která omezila pravomoci slovenských orgánů. Výsledek voleb 1946 otevřel komunistům přímou cestu k ovládnutí bezpečnostního aparátu a k definitivnímu uchvácení moci během komunistického převratu v únoru 1948.`,parties:[{id:`ksc`,shortName:`KSČ`,fullName:`Komunistická strana Československa`,ideology:`Marxismus-leninismus, lidová demokracie, sovětská orientace`,leaders:[`Klement Gottwald`,`Rudolf Slánský`,`Václav Kopecký`],color:`#dc2626`,historicalPercentage:31.05,historicalSeats:93,description:`Jednoznačný vítěz voleb v českých zemích (přes 40 % hlasů), který těžil z obrovské prestiže SSSR jako osvoboditele a z traumatické paměti mnichovské zrady. Pod vedením Klementa Gottwalda a Rudolfa Slánského vystupovala strana v umírněném, vlasteneckém tónu a slibovala specifickou „československou cestu k socialismu“ bez kolchozů a násilné kolektivizace. Oslovila dělnictvo, bezzemky osidlující vysídlené pohraničí i část inteligence. Držela v rukou klíčová ministerstva vnitra (bezpečnostní složky) a informací, což jí umožnilo systematicky připravovat půdu pro převrat v únoru 1948.`,programHighlight:`Pevné spojenectví se SSSR, dvouletý plán obnovy, příděl půdy v pohraničí rolníkům a monopol Národní fronty.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/Komunistick%C3%A1_strana_%C4%8Ceskoslovenska`},{id:`csns`,shortName:`ČSNS`,fullName:`Československá strana národně socialistická`,ideology:`Národní socialismus, masarykovská demokracie, vlastenectví`,leaders:[`Petr Zenkl`,`Prokop Drtina`,`Hubert Ripka`],color:`#f97316`,historicalPercentage:18.37,historicalSeats:55,description:`Hlavní česká nekomunistická a protitotalitní síla poválečného období, která navazovala na myšlenkový odkaz zakladatelů státu T. G. Masaryka a prezidenta Edvarda Beneše. Jejími čelnými představiteli byli Petr Zenkl, ministr spravedlnosti Prokop Drtina a ministr zahraničního obchodu Hubert Ripka. Opírala se o úředníky, učitele, živnostníky a svobodomyslnou městskou inteligenci. Důsledně bránila nezávislost soudnictví, svobodu tisku a parlamentní pluralitu. Hájila soukromé vlastnictví drobných a středních podniků a odmítala další vlny znárodňování po dekretech z roku 1945.`,programHighlight:`Zastavení dalšího znárodňování, právní stát, ochrana živností a rovnováha mezi Východem a Západem.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_strana_n%C3%A1rodn%C4%9B_socialistick%C3%A1`},{id:`csl`,shortName:`ČSL (Lidovci)`,fullName:`Československá strana lidová`,ideology:`Křesťanská demokracie, křesťanský socialismus`,leaders:[`Jan Šrámek`,`František Hála`,`Adolf Procházka`],color:`#eab308`,historicalPercentage:15.64,historicalSeats:46,description:`Tradiční křesťanskodemokratická strana, která byla jedinou povolenou nelevicovou formací v českých zemích v rámci Národní fronty. V čele stál zkušený předválečný politik a premiér exilové vlády v Londýně msgre. Jan Šrámek a František Hála. Silnou oporu měla na moravském venkově, mezi katolickými rolníky, věřícími a řemeslníky. Byla jedním z hlavních útočišť bývalých voličů zakázané agrární strany. Vystupovala jako nekompromisní obránce náboženské svobody, církevních škol a rodinných hodnot a varovala před marxistickou totalitou a protikřesťanským materialismem.`,programHighlight:`Obrana křesťanských rodinných hodnot, ochrana soukromého vlastnictví a svobodné volby bez diktátu.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/KDU-%C4%8CSL`},{id:`ds`,shortName:`DS`,fullName:`Demokratická strana`,ideology:`Občanská demokracie, křesťanství, slovenská samospráva`,leaders:[`Jozef Lettrich`,`Ján Ursíny`,`Matej Josko`],color:`#2563eb`,historicalPercentage:14.07,historicalSeats:43,description:`Slovenský fenomén a symbol odporu proti totalitě ve volbách 1946. Vznikla během Slovenského národního povstání a před volbami uzavřela přelomovou tzv. Aprílovou dohodu, která sjednotila slovenské evangelíky i většinové katolíky do jednoho mohutného občanského bloku pod vedením Jozefa Lettricha a Jána Ursínyho. Na Slovensku dosáhla senzačního triumfu se ziskem 62 % hlasů a drtivě porazila komunisty. Hájila principy západní parlamentní demokracie, tržní hospodářství a slovenskou samosprávu. Právě proto se stala hlavním terčem komunistických provokací, infiltrací StB a následné likvidace.`,programHighlight:`Slovenská národní samospráva, obnova tržních principů, svoboda vyznání a hráz proti bolševismu.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/Demokratick%C3%A1_strana_(Slovensko)`},{id:`cssd`,shortName:`ČSSD`,fullName:`Československá sociální demokracie`,ideology:`Demokratický socialismus, odborové hnutí`,leaders:[`Zdeněk Fierlinger`,`Bohumil Laušman`,`Václav Majer`],color:`#ea580c`,historicalPercentage:12.05,historicalSeats:37,description:`Historická dělnická strana, která se po návratu z exilu ocitla v hlubokém ideovém a personálním rozkolu. Levicové křídlo pod vedením Zdeňka Fierlingera nekriticky spolupracovalo s komunisty a prosazovalo těsný marxistický blok, zatímco demokratické křídlo vedené Václavem Majerem usilovalo o uchování nezávislého demokratického socialismu a spojenectví s národními socialisty a lidovci. Tento vnitřní rozpor stranu fatálně paralyzoval a vedl k volebnímu zklamání (pouhých 12 % hlasů). V únoru 1948 byla strana prokomunistickým křídlem násilně sloučena s KSČ.`,programHighlight:`Hospodářské plánování, sociální jistoty pracujících, zachování parlamentních procedur.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_soci%C3%A1ln%C4%9B_demokratick%C3%A1_strana_d%C4%9Blnick%C3%A1`},{id:`kss`,shortName:`KSS`,fullName:`Komunistická strana Slovenska`,ideology:`Marxismus-leninismus, státní socialismus, centralismus`,leaders:[`Viliam Široký`,`Gustáv Husák`,`Karol Šmidke`],color:`#991b1b`,historicalPercentage:6.89,historicalSeats:21,description:`Nominálně samostatná, ve skutečnosti však plně podřízená slovenská odnož KSČ vedená Viliamem Širokým, Gustávem Husákem a Karolem Šmidkem. Těžila ze své účasti v Slovenském národním povstání, avšak v hluboce věřícím slovenském prostředí utrpěla od Demokratické strany drtivou volební porážku (získala jen 30 % hlasů na Slovensku). Poražení slovenští komunisté se odmítli smířit s výsledkem a ve spojení s Gottwaldovým pražským ústředím prosadili třetí pražskou dohodu, která radikálně okleštila pravomoci slovenských orgánů a podřídila Sbor pověřenců centrální vládě.`,programHighlight:`Socializace, centralizace moci v rukou komunistů a potlačení vlivu církve na Slovensku.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/Komunistick%C3%A1_strana_Slovenska_(1939)`}],questions:[{id:1,category:`Zahraniční orientace`,statement:`Zahraniční a bezpečnostní politika ČSR by měla stát na trvalém spojenectví se Sovětským svazem jako záruce proti případnému německému revanšismu.`,historicalNote:`Po zkušenostech s mnichovskou dohodou a osvobození Rudou armádou byla otázka bezpečnosti klíčová. Zvažovalo se, zda opřít obranu státu primárně o spojenectví se Sovětským svazem, anebo zda se vyvarovat jednostranné zahraničněpolitické závislosti.`,partyStances:{ksc:1,csns:0,csl:0,ds:-1,cssd:1,kss:1}},{id:2,category:`Most mezi světy`,statement:`Československo by mělo usilovat o pozici mostu mezi Východem a Západem a zachovat politické i obchodní vztahy s USA a Velkou Británií.`,historicalNote:`V poválečné mezinárodní situaci se řešilo budoucí postavení Československa. Diskutovalo se o možnosti působit jako politický i hospodářský most mezi západními demokraciemi a východním blokem, nebo zda je taková pozice v rozděleném světě dlouhodobě udržitelná.`,partyStances:{ksc:-1,csns:1,csl:1,ds:1,cssd:0,kss:-1}},{id:3,category:`Odsun a právní stát`,statement:`Při odsunu a potrestání kolaborantů by měl stát důsledně dbát na právní stát a předcházet mimosoudnímu násilí.`,historicalNote:`Poválečný odsun německého obyvatelstva a trestání kolaborace provázely i excesy a mimosoudní násilí. Řešilo se, nakolik má stát přísně vymáhat dodržování právního řádu a řádných soudních postupů i za cenu zpomalení celého procesu.`,partyStances:{ksc:-1,csns:1,csl:1,ds:1,cssd:0,kss:-1}},{id:4,category:`Hranice znárodnění`,statement:`Další vlna znárodňování by měla být zastavena; soukromé řemeslo, maloobchod a střední firmy by měly zůstat v soukromých rukou.`,historicalNote:`Po první vlně znárodnění z podzimu 1945 vyvstala otázka budoucího rozsahu soukromého sektoru. Diskutovalo se o tom, zda má být soukromé vlastnictví drobných dílen, živností a maloobchodu garantováno, nebo zda má socializace hospodářství pokračovat i v dalších oblastech.`,partyStances:{ksc:-1,csns:1,csl:1,ds:1,cssd:0,kss:-1}},{id:5,category:`Další vlna socializace`,statement:`Stát by měl v další etapě převzít také velkoobchod, zahraniční obchod a průmyslové podniky s více než 50 zaměstnanci.`,historicalNote:`Po znárodnění klíčového průmyslu a bank se řešila hranice pro další převod podniků do státních rukou. Zvažovalo se, zda je pro efektivitu a plánování hospodářství nutné zestátnit i střední podniky a zahraniční obchod, anebo ponechat prostor soukromé iniciativě.`,partyStances:{ksc:1,csns:-1,csl:-1,ds:-1,cssd:0,kss:1}},{id:6,category:`Zákaz pravicových stran`,statement:`Zákaz předválečné agrární strany a dalších pravicových subjektů byl opodstatněným krokem na ochranu republiky před kolaborací.`,historicalNote:`Po osvobození byla činnost některých předválečných politických stran zakázána s poukazem na podíl jejich představitelů na událostech let 1938–1939. Část společnosti to vnímala jako nutnou očistu politického života, jiní v tom spatřovali nedemokratické omezení politické plurality.`,partyStances:{ksc:1,csns:1,csl:0,ds:-1,cssd:1,kss:1}},{id:7,category:`Kultura a svoboda tisku`,statement:`Kultura, tisk a rozhlas by měly být vyňaty z vlivu soukromého kapitálu a spravovány státem či veřejnými institucemi.`,historicalNote:`Po roce 1945 se proměnil mediální prostor – soukromé vydávání novin bylo zakázáno a tisk směly vydávat jen schválené organizace. Řešilo se, nakolik má mít stát kontrolu nad šířením informací a kulturou, a nakolik má být zachována nezávislost a názorová pluralita.`,partyStances:{ksc:1,csns:-1,csl:-1,ds:-1,cssd:1,kss:1}},{id:8,category:`Plánované hospodářství`,statement:`Hospodářství by mělo být usměrňováno státním plánem (Dvouletkou) a volný trh by měl ustoupit potřebám celku.`,historicalNote:`Poválečná obnova hospodářství otevřela otázku způsobu řízení ekonomiky. Zvažovalo se, nakolik má hospodářský život určovat centrální státní plánování, a jaký prostor má zůstat tržním mechanismům a svobodnému podnikání.`,partyStances:{ksc:1,csns:0,csl:0,ds:-1,cssd:1,kss:1}},{id:9,category:`Církev a školství`,statement:`Církevní školy a svoboda náboženského vyučování by měly být v nové ústavě zaručeny.`,historicalNote:`V rámci přípravy nové poválečné ústavy se střetávaly rozdílné pohledy na postavení církví ve vzdělávání. Řešilo se, zda zachovat církevní školy a náboženskou výuku jako součást svobody vyznání, nebo zda vybudovat jednotné laické školství spravované výhradně státem.`,partyStances:{ksc:-1,csns:0,csl:1,ds:1,cssd:-1,kss:-1}},{id:10,category:`Postavení Slovenska`,statement:`Slovenské národní orgány (SNR a Sbor pověřenců) by měly mít širokou autonomii a centrální vláda v Praze by neměla omezovat slovenskou samosprávu.`,historicalNote:`Vztah mezi českými zeměmi a Slovenskem patřil k ústředním otázkám státoprávního uspořádání. Diskutovalo se o tom, zda má mít Slovensko širokou autonomii s vlastními zákonodárnými a výkonnými orgány, nebo zda má převažovat centralizovaná správa řízená z Prahy.`,partyStances:{ksc:-1,csns:-1,csl:0,ds:1,cssd:-1,kss:-1}},{id:11,category:`Bezpečnostní složky`,statement:`Sbor národní bezpečnosti (SNB) a vojenské zpravodajství by měly být apolitické a neměly by podléhat vlivu jedné dominantní strany.`,historicalNote:`Po válce vznikl nový Sbor národní bezpečnosti. Zásadní otázkou bylo, jak zajistit striktní nestrannost a profesionalitu policie i armádního zpravodajství, aby bezpečnostní aparát nemohl být využíván k politickému vlivu.`,partyStances:{ksc:-1,csns:1,csl:1,ds:1,cssd:0,kss:-1}},{id:12,category:`Lidové soudnictví a retribuce`,statement:`Mimořádné lidové soudy pro potrestání zrádců a kolaborantů by měly postupovat rychle bez zbytečných procedurálních průtahů.`,historicalNote:`Poválečné retribuční soudnictví mělo zajistit rychlé potrestání nacistických zločinců a kolaborantů. Stály proti sobě požadavky na rychlost a přísnost na jedné straně a obavy z porušování procesních práv a rizika politického zneužití na straně druhé.`,partyStances:{ksc:1,csns:0,csl:-1,ds:-1,cssd:0,kss:1}},{id:13,category:`Odbory a závodní rady`,statement:`Jednotné odborové hnutí (ROH) a závodní rady by měly mít právo spolurozhodovat o chodu podniků a kontrolovat vedení firem.`,historicalNote:`Poválečná legislativa přiznala závodním radám a odborům významné pravomoci. Diskutovalo se o tom, nakolik mají zaměstnanci prostřednictvím odborů spolurozhodovat o vedení podniků, a kde končí pravomoci vlastníků či manažerů.`,partyStances:{ksc:1,csns:0,csl:-1,ds:-1,cssd:1,kss:1}},{id:14,category:`Monopol Národní fronty`,statement:`Systém Národní fronty, kde působí pouze povolené vládní strany, představuje vhodnou záruku poválečné národní jednoty.`,historicalNote:`Koncept Národní fronty vycházel z myšlenky poválečné jednoty a vyloučení předválečné stranické roztříštěnosti. Stály proti sobě argumenty zdůrazňující potřebu stability při obnově státu a námitky, že zákaz opozičních stran omezuje základní demokratickou soutěž.`,partyStances:{ksc:1,csns:0,csl:0,ds:-1,cssd:1,kss:1}},{id:15,category:`Bílé lístky jako protest`,statement:`Voličům by mělo být umožněno odevzdat prázdný bílý volební lístek jako legitimní projev nesouhlasu s nabídkou Národní fronty.`,historicalNote:`Vzhledem k tomu, že k volbám byly připuštěny pouze strany Národní fronty, zvažovala se možnost volby prázdného lístku. Řešilo se, zda má volič mít formální nástroj, jak odmítnout celou nabízenou politickou reprezentaci, nebo zda má volit pouze z navržených kandidátek.`,partyStances:{ksc:-1,csns:0,csl:0,ds:1,cssd:0,kss:-1}}],electionSystem:{body:`Ústavodárné národní shromáždění (jednokomorový parlament o celkových 300 poslancích). Poměr mandátů nebyl pevně daný, ale odvodil se až z volební účasti – nakonec připadlo 231 křesel na české země a 69 na Slovensko. Hlavním úkolem sboru bylo vypracování nové poválečné ústavy.`,system:`Poměrný volební systém ve 28 krajích. Kandidovat směly výhradně povolené strany sdružené v Národní frontě (4 v českých zemích, 4 na Slovensku). Všechny ostatní opoziční strany byly zakázány. Hlasovalo se vázanými kandidátkami.`,franchise:`Všichni českoslovenští státní občané od 18 let (věk byl snížen z předválečných 21 let). Z volebního práva však byli na základě dekretů zcela vyloučeni občané německé a maďarské národnosti a osoby označené za kolaboranty a zrádce.`,eligibility:`Každý občan s aktivním volebním právem, který dosáhl věku 21 let a byl zařazen na schválenou kandidátní listinu jedné ze stran Národní fronty.`,trivia:[`Volební povinnost: I v roce 1946 byla účast u voleb pro oprávněné voliče povinná pod sankcí pokuty nebo vězení.`,`Institut bílých lístků: Voliči, kteří nesouhlasili s nabídkou povolených stran Národní fronty, mohli do obálky vložit čistý bílý lístek. Celostátně jich bylo vhozeno zhruba 32 tisíc (0,45 % všech hlasů).`,`Zákaz pravice: Tradiční a nejsilnější prvorepublikové strany – agrárníci (RSČV) a národní demokraté (ČsND) – měly zakázáno obnovit činnost.`,`Slovenský paradox: Ačkoliv komunisté na Slovensku volby drtivě prohráli (vyhrála Demokratická strana s 62 %), tzv. třetí pražská dohoda podepsaná brzy po volbách účelově podřídila slovenské orgány (Sbor pověřenců) centrální pražské vládě řízené Klementem Gottwaldem.`]}},1990:{year:1990,title:`Volby do Federálního shromáždění 1990`,subtitle:`První svobodné a demokratické volby po 44 letech nadvlády jedné strany`,date:`8. a 9. června 1990`,turnout:`96,8 %`,stakes:`Rozhodovalo se o definitivním potvrzení pádu totality, tempu a charakteru ekonomické transformace a o budoucím soužití Čechů a Slováků ve společném státě.`,atmosphereQuote:`„Strany jsou pro straníky, Občanské fórum je pro všechny!“ – volební heslo OF`,historicalContext:`V červnu 1990 zažilo Československo první skutečně svobodné volby od roku 1946. V euforické atmosféře po sametové revoluci (listopad 1989), zrušení článku 4 Ústavy o vedoucí úloze KSČ a zvolení Václava Havla prezidentem se k volebním urnám dostavilo neuvěřitelných 96,8 % oprávněných voličů.

Volby fungovaly především jako plebiscit o odmítnutí čtyřicetileté komunistické totality. Za širokým deštníkem revolučních hnutí (Občanské fórum v Česku, Verejnosť proti násiliu na Slovensku) se však již rýsovaly klíčové střety: Jak rychle přejít na tržní ekonomiku? Má se zvolit radikální cesta (Václav Klaus) nebo opatrnější sociální varianta (Valtr Komárek)? Jak se vypořádat s exponenty totality a tajnou policií StB (lustrace)? A jak uspořádat vztahy mezi Čechy a Slováky po vypjaté „pomlčkové válce“?`,outcomeSummary:`Občanské fórum (OF) v Česku získalo drtivých 53,15 % hlasů do Sněmovny lidu FS (celostátně 36,05 %), zatímco na Slovensku zvítězila Verejnosť proti násiliu (VPN) s 32,54 %. Komunistická strana (KSČS) skončila s 13,6 % druhá, což potvrdilo přítomnost nezanedbatelného postkomunistického elektorátu. Výrazného úspěchu dosáhlo na Moravě moravistické Hnutí za samosprávnou demokracii (HSD-SMS) s více než 10 % hlasů do Sněmovny lidu v ČR.

Byla vytvořena koaliční federální vláda v čele s Marianem Čalfou (OF/VPN). Volby roku 1990 potvrdily návrat Československa k demokracii, ale mandát na dva roky předznamenal dramatické události: rozpad revolučních hnutí, spor o kuponovou privatizaci a následný rozpad společného státu v roce 1992.`,parties:[{id:`of`,shortName:`OF`,fullName:`Občanské fórum`,ideology:`Široké antiautoritářské hnutí, liberální demokracie, tržní reformy`,leaders:[`Václav Klaus`,`Jiří Dienstbier`,`Jan Urban`,`Petr Pithart`],color:`#2563eb`,historicalPercentage:36.05,historicalSeats:68,description:`Široké spontánní občanské hnutí, které se zrodilo během studentských a divadelních demonstrací v listopadu 1989 jako hlavní mluvčí sametové revoluce. Sjednotilo disidenty z Charty 77, reformní komunisty z roku 1968, nezávislé ekonomy i nestranické osobnosti. V čele stáli Václav Klaus, Jiří Dienstbier, Jan Urban či Petr Pithart. V prvních svobodných volbách v červnu 1990 triumfovalo se ziskem 53 % hlasů v ČR. Jeho prioritou byla obnova pluralitní demokracie, právního státu a rychlý návrat Československa do svobodné Evropy prostřednictvím zásadní transformace centrálně plánované ekonomiky na tržní hospodářství.`,programHighlight:`Návrat do Evropy, právní stát, rychlá privatizace a tržní ekonomika, svoboda jednotlivce.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/Ob%C4%8Dansk%C3%A9_f%C3%B3rum`},{id:`vpn`,shortName:`VPN`,fullName:`Verejnosť proti násiliu`,ideology:`Občanské demokratické hnutí, humanismus, reformismus`,leaders:[`Fedor Gál`,`Vladimír Mečiar`,`Marián Čalfa`,`Milan Kňažko`],color:`#0284c7`,historicalPercentage:8.56,historicalSeats:19,description:`Slovenský revoluční partner Občanského fóra, který vedl sametovou revoluci na Slovensku a v červnu 1990 tam s přehledem vyhrál volby (získal 32,5 % hlasů). Vzniklo v bratislavské Umelecké besedě a jeho vůdčími postavami byli sociolog Fedor Gál, charismatický herec Milan Kňažko, premiér Vladimír Mečiar a federální premiér Marián Čalfa. Hnutí prosazovalo demokratizaci, lidská práva a integraci do evropských struktur, přičemž kladlo důraz na zrovnoprávnění slovenské národní identity v moderní federaci a na sociální citlivost ekonomických reforem v podmínkách zranitelného slovenského průmyslu.`,programHighlight:`Demokratizace společnosti, federalismus s respektem k slovenské svébytnosti a sociálně citlivá transformace.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/Verejno%C4%BE_proti_n%C3%A1siliu`},{id:`kscs`,shortName:`KSČS`,fullName:`Komunistická strana Československa`,ideology:`Demokratický socialismus, reformní komunismus, obhajoba socialismu`,leaders:[`Ladislav Adamec`,`Vasil Mohorita`,`Jiří Svoboda`],color:`#dc2626`,historicalPercentage:13.59,historicalSeats:23,description:`Původní státostrana, která po listopadu 1989 ztratila ústavní monopol na moc a ocitla se v opozici. Prošla taktickou federalizací (vznikla KSČM v Česku a KSS na Slovensku) a do jejího čela se postavili Ladislav Adamec, Vasil Mohorita a filmový režisér Jiří Svoboda. Volební zisk přes 13,5 % hlasů potvrdil existenci silného disciplinovaného elektorátu bývalých členů, aparátčíků i občanů obávajících se kapitalismu. Strana nabízela reformní komunismus a demokratický socialismus, bránila sociální jistoty a varovala před masovou nezaměstnaností, plošnými lustracemi a výprodejem národního bohatství zahraničnímu kapitálu.`,programHighlight:`Zachování sociálních jistot, odpor k divoké privatizaci a plošným lustracím, vojenská neutralita.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/Komunistick%C3%A1_strana_%C4%8Ceskoslovenska`},{id:`kdu`,shortName:`KDU / KDH`,fullName:`Křesťanská a demokratická unie (ČR) / KDH (SR)`,ideology:`Křesťanská demokracie, sociálně-tržní hospodářství, etika`,leaders:[`Josef Bartončík`,`Ján Čarnogurský`,`Václav Benda`],color:`#eab308`,historicalPercentage:10.84,historicalSeats:20,description:`Předvolební koalice křesťanskodemokratických sil v ČSFR. V českých zemích tvořila KDU volební svazek tradiční Československé strany lidové (ČSL), Křesťanskodemokratické strany Václava Bendy (KDS) a nezávislých křesťanů. Těsně před volbami v době volebního moratoria ji těžce zasáhla aféra jejího lídra Josefa Bartončíka, obviněného z tajné spolupráce s StB. Na Slovensku naopak samostatné KDH vedené disidentem Jánem Čarnogurským zaznamenalo obrovský úspěch (druhá nejsilnější strana s 19 % hlasů). Hnutí hájilo křesťanskou etiku, restituce zabaveného majetku, ochranu tradiční rodiny a sociálně-tržní hospodářství.`,programHighlight:`Restituce církevního a soukromého majetku, ochrana rodiny, křesťanská morálka a sociálně-tržní řád.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/KDU-%C4%8CSL`},{id:`hsd_sms`,shortName:`HSD-SMS`,fullName:`Hnutí za samosprávnou demokracii – Společnost pro Moravu a Slezsko`,ideology:`Moravský regionalismus, samospráva, decentralizace`,leaders:[`Boleslav Bárta`,`Jaroslav Mezník`],color:`#9333ea`,historicalPercentage:5.39,historicalSeats:9,description:`Fenomenální překvapení voleb 1990 a svébytný hlas Moravy a Slezska. Vzniklo na vlně odporu proti centralistickému řízení z Prahy a za jeho raketovým vzestupem stál brněnský psycholog a disident Boleslav Bárta. Na Moravě získalo masovou podporu (v Jihomoravském kraji téměř 30 % hlasů) a celostátně obsadilo 9 křesel ve Sněmovně lidu a 16 mandátů v České národní radě. Požadovalo nápravu zrušení zemského zřízení z roku 1949, obnovu moravskoslezské samosprávy, zemský sněm, daňovou autonomii a přeměnu ČSFR na trojspolkovou federaci (Čechy, Morava a Slezsko, Slovensko).`,programHighlight:`Obnova moravskoslezské samosprávy, trojfederace (Čechy, Morava a Slezsko, Slovensko) a zemský sněm.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/Hnut%C3%AD_za_samospr%C3%A1vnou_demokracii_%E2%80%93_Spole%C4%8Dnost_pro_Moravu_a_Slezsko`},{id:`sns`,shortName:`SNS`,fullName:`Slovenská národná strana`,ideology:`Slovenský nacionalismus, suverenita`,leaders:[`Víťazoslav Móric`,`Stanislav Pánis`],color:`#84cc16`,historicalPercentage:3.67,historicalSeats:6,description:`Národně orientovaná strana, která se přihlásila k odkazu historické SNS z 19. století a rychle obsadila radikální křídlo slovenské politické scény. V jejím čele stáli Víťazoslav Móric a Stanislav Pánis. V prvních volbách získala 14 % hlasů na Slovensku a jako jediná relevantní parlamentní formace otevřeně zpochybňovala smysl společného československého státu. Požadovala úplné osamostatnění Slovenska, uzákonění slovenštiny jako jediného úředního jazyka bez výjimek pro menšiny a svrchovanou slovenskou reprezentaci v mezinárodních institucích.`,programHighlight:`Plná státní suverenita Slovenska, slovenština jako jediný úřední jazyk a samostatné vystupování v zahraničí.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/Slovensk%C3%A1_n%C3%A1rodn%C3%A1_strana`},{id:`css`,shortName:`ČSS (Socialisté)`,fullName:`Československá strana socialistická`,ideology:`Středový sociální liberalismus, reformismus`,leaders:[`Jiří Vyvadil`,`Milan Nevima`],color:`#ea580c`,historicalPercentage:2.68,historicalSeats:0,description:`Historická národně-sociální strana, která v dobách komunistického režimu přežívala v Národní frontě jako satelitní formace. V listopadu 1989 však sehrála slavnou roli, když se její vedení postavilo režimu a propůjčilo balkón svého nakladatelství Melantrich na Václavském náměstí Václavu Havlovi a Občanskému fóru pro masové demonstrace. Ve svobodné soutěži v červnu 1990 ji vedli Jiří Vyvadil a Milan Nevima. Nabízela středový národní reformismus, obranu sociálních práv a zájmy zaměstnanců, avšak se ziskem 2,7 % hlasů v ČR těsně nepřekročila nově zavedenou 5% uzavírací klauzuli.`,programHighlight:`Postupná sociálně-tržní transformace, posílení národní hrdosti a ochrana zaměstnanců.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_strana_socialistick%C3%A1`},{id:`sz`,shortName:`SZ (Zelení)`,fullName:`Strana zelených`,ideology:`Environmentální politika, ekologie, antinukleární hnutí`,leaders:[`Aleš Šulc`,`Jaroslav Slanec`],color:`#16a34a`,historicalPercentage:3.1,historicalSeats:0,description:`Ekologická formace zrozená bezprostředně po sametové revoluci v reakci na katastrofální ekologickou bilanci čtyřicetileté komunistické vlády – zdevastované ovzduší, kyselé deště, zničené lesy v Krušných horách a chronicky nemocné děti v uhelných pánvích severních Čech. Zpočátku se těšila masivním sympatiím veřejnosti, před volbami ji však oslabily vnitřní spory a ideová neujasněnost mezi pravicovými a levicovými proudy. S výsledkem 3,1 % hlasů zůstala těsně pod 5% hranicí, avšak její témata ochrany klimatu a čistého vzduchu zásadně ovlivnila vládní program nového kabinetu.`,programHighlight:`Okamžité zastavení těžby uhlí v severních Čechách, ochrana ovzduší a pitné vody jako vládní priorita.`,wikipediaUrl:`https://cs.wikipedia.org/wiki/Strana_zelen%C3%BDch`}],questions:[{id:1,category:`Ekonomická transformace`,statement:`Tržní transformace (liberalizace cen, privatizace a otevření trhů) by měla proběhnout rychle v podobě radikálních reforem, i za cenu dočasného poklesu životní úrovně.`,historicalNote:`Při přechodu od centrálně plánované ekonomiky k tržnímu hospodářství se řešila strategie a tempo reforem. Zvažovalo se, zda provést rychlou liberalizaci cen a otevření trhů za cenu krátkodobých sociálních otřesů, anebo zvolit postupnější, regulovaný přechod.`,partyStances:{of:1,vpn:1,kscs:-1,kdu:0,hsd_sms:0,sns:-1,css:-1,sz:0}},{id:2,category:`Kuponová privatizace`,statement:`Státní podniky by měly být zprivatizovány širokou účastí občanů formou investičních kuponů za symbolický poplatek.`,historicalNote:`Kuponová privatizace byla navržena jako metoda rychlého převodu velkého množství státních podniků do rukou občanů při nedostatku domácího kapitálu. Řešilo se, zda je tento masový model efektivní cestou k nalezení skutečných vlastníků, nebo zda upřednostnit standardní prodeje konkrétním investorům.`,partyStances:{of:1,vpn:1,kscs:-1,kdu:1,hsd_sms:0,sns:0,css:-1,sz:0}},{id:3,category:`Sociální jistoty`,statement:`Přechod na tržní hospodářství by měl být regulován a rozfázován státem tak, aby nevznikla vysoká nezaměstnanost a neohrozila sociálně slabší skupiny.`,historicalNote:`S nástupem hospodářských změn panovaly obavy z rychlého růstu nezaměstnanosti a sociálních dopadů na obyvatelstvo. Diskutovalo se o tom, do jaké míry by měl stát aktivně tlumit dopady trhu v ohrožených podnicích a regionech, či zda nechat plně působit tržní síly.`,partyStances:{of:-1,vpn:0,kscs:1,kdu:1,hsd_sms:1,sns:1,css:1,sz:1}},{id:4,category:`Zákaz KSČ`,statement:`Komunistická strana by měla být jako totalitní organizace postavena mimo zákon a její majetek by měl připadnout státu.`,historicalNote:`Po pádu totalitního režimu vyvstala otázka právního naložení s bývalou vládnoucí stranou. Zvažovalo se, zda ji z důvodu jejího čtyřicetiletého monopolu na moc zakázat a vyloučit z politického života, anebo jí umožnit účast v demokratické soutěži podle nových pravidel.`,partyStances:{of:0,vpn:0,kscs:-1,kdu:1,hsd_sms:0,sns:0,css:0,sz:0}},{id:5,category:`Lustrace a vyrovnání s minulostí`,statement:`Bývalí agenti a spolupracovníci StB a vysocí funkcionáři KSČ by měli být zákonem vyloučeni z veřejných funkcí a justice.`,historicalNote:`V otázce vyrovnání se s minulostí se zvažovalo zavedení lustračních pravidel. Diskutovalo se o potřebě očistit klíčové státní a bezpečnostní orgány od exponentů minulého režimu na straně jedné a o rizicích uplatnění principu kolektivní viny a spolehlivosti dochovaných záznamů na straně druhé.`,partyStances:{of:1,vpn:0,kscs:-1,kdu:1,hsd_sms:0,sns:0,css:-1,sz:0}},{id:6,category:`Restituce majetku`,statement:`Majetek zabavený po únoru 1948 (včetně polností a domů) by měl být v rámci restitucí vrácen původním vlastníkům či jejich dědicům.`,historicalNote:`Při nápravě majetkových křivd minulého režimu se vedla debata o rozsahu a formě restitucí. Řešila se otázka, zda vrátit původní majetek v naturální podobě i s rizikem právních komplikací a znejistění současných uživatelů, anebo poskytnout pouze finanční odškodnění.`,partyStances:{of:1,vpn:1,kscs:-1,kdu:1,hsd_sms:1,sns:0,css:0,sz:1}},{id:7,category:`Společný stát`,statement:`Československá federace by měla být zachována se silnými společnými pravomocemi v měně, zahraniční politice a obraně.`,historicalNote:`Debata o uspořádání federace řešila rovnováhu mezi zachováním společných federálních pravomocí nezbytných pro soudržnost státu a požadavky na posílení pravomocí obou národních republik.`,partyStances:{of:1,vpn:0,kscs:1,kdu:1,hsd_sms:1,sns:-1,css:1,sz:1}},{id:8,category:`Slovenská suverenita`,statement:`Slovensko by mělo získat plnou národní suverenitu a s Českou republikou vytvořit volnou konfederaci či samostatný stát.`,historicalNote:`Po uvolnění poměrů se otevřela diskuse o míře samostatnosti obou republik. Zvažovalo se, zda má Slovensko získat plnou národní suverenitu a budovat vlastní mezinárodní subjektivitu, nebo zda zachovat společný federální stát.`,partyStances:{of:-1,vpn:-1,kscs:-1,kdu:-1,hsd_sms:-1,sns:1,css:-1,sz:-1}},{id:9,category:`Moravská samospráva`,statement:`V rámci nového státoprávního uspořádání by mělo být obnoveno historické zemské zřízení Moravy a Slezska s vlastním zemským sněmem a rozpočtem.`,historicalNote:`Při hledání nové územněsprávní podoby státu vyvstala otázka postavení Moravy a Slezska. Diskutovalo se o tom, zda obnovit historické zemské zřízení a posílit regionální samosprávu, či zachovat dosavadní model členění státu.`,partyStances:{of:-1,vpn:0,kscs:0,kdu:0,hsd_sms:1,sns:0,css:1,sz:0}},{id:10,category:`Vstup do NATO a na Západ`,statement:`Československo by mělo usilovat o plné členství v Severoatlantické alianci (NATO) a Evropském společenství.`,historicalNote:`V době rozpadu bipolárního světa hledalo Československo své nové zahraničněpolitické ukotvení. Zvažovalo se, zda usilovat o rychlou integraci do západních struktur a Severoatlantické aliance, nebo hledat jiné formy celoevropské bezpečnostní architektury.`,partyStances:{of:1,vpn:1,kscs:-1,kdu:1,hsd_sms:0,sns:0,css:0,sz:0}},{id:11,category:`Vojenská neutralita`,statement:`Československo by mělo vyhlásit trvalou vojenskou neutralitu po vzoru Rakouska a Švýcarska a nevstupovat do vojenských aliancí.`,historicalNote:`Jako jedna z možností budoucího mezinárodního postavení byla zvažována trvalá vojenská neutralita. Diskutovalo se o tom, zda by neutralita zajistila zemi klid a nezávislost na velmocích, anebo zda bez zapojení do bezpečnostní aliance nelze suverenitu státu účinně garantovat.`,partyStances:{of:-1,vpn:-1,kscs:1,kdu:-1,hsd_sms:0,sns:1,css:1,sz:1}},{id:12,category:`Odchod sovětských vojsk`,statement:`Odchod sovětských vojsk z našeho území by měl proběhnout v co nejkratším termínu a do posledního vojáka.`,historicalNote:`Po roce 1968 pobývala na území státu sovětská armáda. Řešilo se, jak rychle a za jakých logistických i diplomatických podmínek má proběhnout jejich úplný odsun, a nakolik má být odchod podmíněn širšími mezinárodními dohodami.`,partyStances:{of:1,vpn:1,kscs:0,kdu:1,hsd_sms:1,sns:1,css:1,sz:1}},{id:13,category:`Ekologie a životní prostředí`,statement:`Zlepšení stavu poškozeného životního prostředí a ovzduší by mělo mít v rozpočtu vysokou prioritu i s ohledem na tempo růstu ekonomiky.`,historicalNote:`Dlouhodobé znečištění ovzduší a vody představovalo vážný problém pro zdraví obyvatel i přírodu. Diskuse se vedla o tom, nakolik má mít okamžitá ekologizace provozů přednost před ekonomickými náklady a tempem průmyslové výroby.`,partyStances:{of:1,vpn:1,kscs:0,kdu:1,hsd_sms:1,sns:0,css:1,sz:1}},{id:14,category:`Křesťanské hodnoty a interrupce`,statement:`Zákony nové republiky by měly zohledňovat křesťanskou etiku a stát by měl regulovat umělá přerušení těhotenství.`,historicalNote:`V debatách o etických otázkách a hodnotovém směřování společnosti se střetávaly rozdílné pohledy na ochranu počatého života. Zvažovalo se, zda zpřísnit právní podmínky pro umělá přerušení těhotenství, anebo ponechat dosavadní liberálnější úpravu s právem ženy na vlastní rozhodnutí.`,partyStances:{of:-1,vpn:-1,kscs:-1,kdu:1,hsd_sms:0,sns:0,css:-1,sz:-1}},{id:15,category:`Charakter politiky (OF vs. strany)`,statement:`Politiku by neměly ovládat tradiční stranické aparáty; široká občanská hnutí jsou pro novou společnost vhodnější než klasické ideologické strany.`,historicalNote:`Po pádu monopolu jedné strany se řešila budoucí podoba politického systému. Diskutovalo se o tom, zda je pro demokracii vhodnější široké nestranické hnutí sdružující různé proudy občanů, nebo zda je nezbytné zformovat standardní politické strany s jasně vymezeným ideologickým programem.`,partyStances:{of:1,vpn:1,kscs:-1,kdu:-1,hsd_sms:1,sns:-1,css:-1,sz:0}},{id:16,category:`Rodinná a sociální politika`,statement:`Stát by měl i v době ekonomických reforem finančně podporovat rodiny s dětmi prostřednictvím rodinných přídavků a zvýhodněných půjček.`,historicalNote:`V souvislosti s přechodem k tržnímu hospodářství a liberalizací cen panovaly obavy z dopadů na životní úroveň rodin s dětmi. Řešilo se, zda zachovat plošnou státní finanční podporu a zvýhodněné půjčky pro rodiny, anebo sociální pomoc zúžit pouze na nejvíce ohrožené skupiny.`,partyStances:{of:0,vpn:0,kscs:1,kdu:1,hsd_sms:1,sns:1,css:1,sz:1}}],electionSystem:{body:`Volilo se do dvou komor Federálního shromáždění ČSFR: Sněmovny lidu (150 poslanců) a Sněmovny národů (150 poslanců). Občan zároveň volil i do republikových parlamentů – České národní rady (200 poslanců) nebo Slovenské národní rady (150 poslanců).`,system:`Poměrný systém ve 12 vícemandátových krajích. Poprvé byla zavedena uzavírací klauzule 5 % pro vstup do FS a ČNR (pro SNR platila mírnější hranice 3 %). Pro přepočet hlasů se použila Hagenbach-Bischoffova kvóta. Voliči měli poprvé k dispozici preferenční hlasy (kroužkování až 4 kandidátů).`,franchise:`Všichni občané bez rozdílu národnosti, kteří v den voleb dosáhli věku 18 let. Volební účast již nebyla povinná.`,eligibility:`Každý občan s aktivním volebním právem od 21 let.`,trivia:[`Zkrácené volební období: Parlament byl zvolen pouze na přechodné 2leté období (1990–1992), jehož cílem bylo vytvořit novou demokratickou ústavu a nastartovat ekonomické reformy.`,`Mimořádně vysoká účast: K urnám dorazilo 96,8 % voličů, což představuje historický rekord ve svobodných volbách v našich moderních dějinách.`,`Aféra Bartončík: Těsně před volbami v době volebního moratoria obvinil náměstek ministra vnitra Jan Ruml předsedu lidovců Josefa Bartončíka ze spolupráce s StB, což mělo citelný dopad na výsledek KDU.`,`Síla kroužkování: Voliči hned v prvních volbách hojně využívali preferenční hlasy, díky čemuž se z nižších míst na volitelná křesla posunula řada známých disidentů a nezávislých osobností.`]}}};function r(e,t,n){let r=n||e.questions,i=r.length;return i===0?[]:e.parties.map(e=>{let n=0,a=i*2,o=0,s=0,c=0;r.forEach(r=>{let i=t[r.id]??0,a=r.partyStances[e.id]??0,l=Math.abs(i-a);n+=l,i!==0&&a!==0?i===a?o++:s++:c++});let l=Math.round((1-n/a)*100);return{party:e,matchPercentage:Math.max(0,Math.min(100,l)),agreeCount:o,disagreeCount:s,neutralCount:c}}).sort((e,t)=>t.matchPercentage-e.matchPercentage)}var i={view:`home`,year:1920,quizMode:`standard`,selectedYearMode:{1920:`standard`,1946:`standard`,1990:`standard`},questionIndex:0,answers:{},partyScores:[],showHistoricalNote:!1,activeContextTooltipId:null,toastMessage:null,comparisonFilter:`all`,selectedPartyForDetails:null,expandedPartiesYear:null,sliderYearFilter:`all`,activeModalParty:null,activeModalSystemYear:null};function a(e,t){let r=n[e];return t===`expanded`&&r.expandedQuestions&&r.expandedQuestions.length>0?r.expandedQuestions:r.questions}function o(e){i.toastMessage=e,T(),setTimeout(()=>{i.toastMessage=null,T()},3e3)}function s(e){i.view=e,window.scrollTo({top:0,behavior:`smooth`}),T()}function c(e,t){i.year=e,i.quizMode=t||i.selectedYearMode[e]||`standard`,i.questionIndex=0,i.answers={},i.partyScores=[],i.showHistoricalNote=!1,i.activeContextTooltipId=null,i.view=`quiz`,window.scrollTo({top:0,behavior:`smooth`}),T()}function l(e){let t=a(i.year,i.quizMode),n=t[i.questionIndex];i.answers[n.id]=e,i.questionIndex<t.length-1?(i.questionIndex++,i.showHistoricalNote=!1,i.activeContextTooltipId=null,T()):u()}function u(){let e=n[i.year],o=a(i.year,i.quizMode),s=r(e,i.answers,o);i.partyScores=s,i.selectedPartyForDetails=s[0]?.party.id||null,i.view=`results`;try{t({particleCount:50,spread:60,origin:{y:.6}})}catch(e){console.error(e)}window.scrollTo({top:0,behavior:`smooth`}),T()}function d(e,t){let r=n[t].parties.find(t=>t.id===e);r&&(i.activeModalParty={party:r,year:t},T())}function f(){i.activeModalParty=null,T()}function p(e){i.activeModalSystemYear=e,T()}function m(){i.activeModalSystemYear=null,T()}function h(e){let t=document.getElementById(`party-slider-scroll`);if(t){let n=e===`left`?-320:320;t.scrollBy({left:n,behavior:`smooth`})}}function g(){return`
    <header class="bg-white border-b border-zinc-200 sticky top-0 z-30">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        <!-- Logo / Brand s HVK -->
        <button onclick="window.calcSetView('home')" class="flex items-center gap-3 text-left group cursor-pointer">
          <div class="w-9 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-extrabold text-xs tracking-wider shadow-xs border border-zinc-800 transition-colors group-hover:bg-zinc-800">
            HVK
          </div>
          <div>
            <span class="font-bold text-sm text-zinc-900 block leading-tight">
              Historická volební kalkulačka
            </span>
            <span class="text-[11px] text-zinc-500 font-medium block">
              1920 · 1946 · 1990
            </span>
          </div>
        </button>

        <!-- Navigace v bílošedém stylu -->
        <nav class="flex items-center gap-2.5 text-xs font-medium">
          <button 
            onclick="window.calcSetView('home')" 
            class="px-3 py-1.5 rounded-md transition-colors cursor-pointer ${i.view===`home`?`bg-zinc-100 text-zinc-900 font-semibold`:`text-zinc-600 hover:text-zinc-900`}"
          >
            Výběr voleb
          </button>
          ${i.view===`quiz`||i.view===`results`?`
            <span class="text-zinc-300">/</span>
            <span class="text-zinc-800 font-semibold px-2 py-0.5 bg-zinc-100 rounded text-[11px] border border-zinc-200">
              Volby ${i.year}
            </span>
          `:``}
        </nav>
      </div>
    </header>
  `}function _(){return`
    <main class="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex-1 animate-fadeIn">
      
      <!-- Minimalistický Editorial Úvod -->
      <section class="max-w-2xl mb-10">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-3">
          Koho byste volili v minulosti?
        </h1>
        <p class="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
          Zvolte si jedny ze tří zlomových voleb. Odpovězte na 15 dobových otázek a zjistěte, ke komu byste tehdy měli nejblíž.
        </p>
      </section>

      <!-- 3 Karty Volebních Období (Bílošedý design) -->
      <section class="space-y-4 mb-14">
        ${[1920,1946,1990].map(e=>{let t=n[e],r=i.expandedPartiesYear===e;return`
            <div class="election-card p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <!-- Levý obsah -->
              <div class="flex-1">
                <!-- Rok & Meta řádek -->
                <div class="flex items-center gap-2.5 mb-2">
                  <span class="text-2xl font-extrabold text-zinc-900 font-mono tracking-tight">
                    ${t.year}
                  </span>
                  <span class="text-zinc-300">·</span>
                  <span class="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                    ${t.date}
                  </span>
                  <span class="text-zinc-300">·</span>
                  <span class="text-xs text-zinc-500 font-medium">
                    Účast ${t.turnout}
                  </span>
                </div>

                <!-- Název a podstata voleb -->
                <h2 class="text-lg font-bold text-zinc-900 mb-1.5">
                  ${t.title}
                </h2>
                
                <p class="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-3 text-justify [hyphens:auto]">
                  ${t.stakes}
                </p>

                <!-- Přehled stran -->
                <div class="text-xs text-zinc-500">
                  <span>Kandidující subjekty (${t.parties.length}): </span>
                  <span class="text-zinc-700 font-medium">
                    ${t.parties.map(e=>e.shortName).slice(0,4).join(`, `)}${t.parties.length>4?` a další ${t.parties.length-4}`:``}
                  </span>
                  <button 
                    onclick="window.calcToggleParties(${e})"
                    class="text-zinc-700 hover:text-zinc-900 underline ml-1 text-xs font-medium cursor-pointer"
                  >
                    ${r?`skrýt přehled`:`zobrazit všechny`}
                  </button>
                </div>

                ${r?`
                  <div class="mt-3 p-3 bg-zinc-50 rounded-lg border border-zinc-200 text-xs text-zinc-700 animate-fadeIn">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      ${t.parties.map(t=>`
                        <div 
                          onclick="window.calcOpenPartyModal('${t.id}', ${e})" 
                          class="flex items-center gap-2.5 p-1.5 rounded hover:bg-zinc-100 transition-colors cursor-pointer group"
                        >
                          <div class="w-1.5 h-5 rounded-full shrink-0" style="background-color: ${t.color};"></div>
                          <strong class="text-zinc-900 font-semibold group-hover:underline">${t.shortName}:</strong>
                          <span class="text-zinc-500 truncate">${t.fullName}</span>
                          <span class="text-[10px] text-zinc-400 ml-auto group-hover:text-zinc-700">info ↗</span>
                        </div>
                      `).join(``)}
                    </div>
                  </div>
                `:``}
              </div>

              <!-- Tlačítka akcí (Volební systém + Volba verze + Spustit kalkulačku) -->
              <div class="shrink-0 pt-2 md:pt-0 flex flex-col gap-2.5 w-full md:w-56">
                <button 
                  onclick="window.calcOpenSystemModal(${e})"
                  class="w-full px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-100 text-zinc-800 font-semibold text-xs tracking-tight transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-zinc-300 group"
                  title="Informace o volebním systému, kdo mohl volit a zajímavosti"
                >
                  <svg class="w-4 h-4 text-zinc-500 group-hover:text-zinc-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Volební systém a další info</span>
                </button>

                ${e===1920?`
                  <!-- Přepínač verze pro rok 1920 -->
                  <div class="bg-zinc-100 p-1 rounded-lg border border-zinc-200 flex items-center gap-1 text-[11px] font-medium w-full">
                    <button 
                      type="button"
                      onclick="window.calcSetYearMode(1920, 'standard')"
                      class="flex-1 py-1.5 px-2 rounded-md transition-all cursor-pointer text-center ${i.selectedYearMode[1920]===`standard`?`bg-white text-zinc-900 font-bold shadow-xs border border-zinc-200`:`text-zinc-600 hover:text-zinc-900`}"
                    >
                      Základní (${t.questions.length})
                    </button>
                    <button 
                      type="button"
                      onclick="window.calcSetYearMode(1920, 'expanded')"
                      class="flex-1 py-1.5 px-2 rounded-md transition-all cursor-pointer text-center ${i.selectedYearMode[1920]===`expanded`?`bg-white text-zinc-900 font-bold shadow-xs border border-zinc-200`:`text-zinc-600 hover:text-zinc-900`}"
                    >
                      Rozšířená (${t.expandedQuestions?t.expandedQuestions.length:40})
                    </button>
                  </div>
                `:``}

                <button 
                  onclick="window.calcStartQuiz(${e})"
                  class="w-full px-6 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm tracking-tight transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-zinc-800"
                >
                  <span>Spustit kalkulačku</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          `}).join(``)}
      </section>

      <!-- Vzdělávací pozadí projektu -->
      <section class="border-t border-zinc-200 pt-8">
        <h3 class="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
          O projektu a historických datech
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-zinc-600 leading-relaxed text-justify [hyphens:auto]">
          <div>
            <strong class="text-zinc-900 block mb-1 font-semibold">15 dobových otázek pro každý rok</strong>
            Otázky pokrývají klíčová hospodářská, společenská, zahraničněpolitická i státoprávní témata, která určovala ráz volebních kampaní.
          </div>
          <div>
            <strong class="text-zinc-900 block mb-1 font-semibold">Historicky doložené postoje stran</strong>
            Všechny odpovědi politických subjektů vycházejí ze skutečných volebních manifestů, tiskovin, programů a parlamentních hlasování.
          </div>
          <div>
            <strong class="text-zinc-900 block mb-1 font-semibold">Skutečné volební výsledky</strong>
            Po dokončení kalkulačky získáte nejen procentuální shodu, ale také přehled o tom, jak volby reálně dopadly a jaké měly důsledky.
          </div>
        </div>
      </section>
    </main>
  `}function v(){n[i.year];let e=a(i.year,i.quizMode),t=e.length,r=e[i.questionIndex],o=Math.round((i.questionIndex+1)/t*100),s=i.answers[r.id];return`
    <main class="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 animate-fadeIn">
      
      <!-- Progress Bar & Krok otázky -->
      <div class="mb-6">
        <div class="flex items-center justify-between text-xs mb-2">
          <button 
            onclick="window.calcSetView('home')" 
            class="text-zinc-500 hover:text-zinc-900 transition-colors font-medium flex items-center gap-1 cursor-pointer"
          >
            <span>←</span>
            <span>Výběr roku</span>
          </button>
          
          <div class="flex items-center gap-2">
            <span class="font-bold text-zinc-900">Volby ${i.year}</span>
            ${i.quizMode===`expanded`?`
              <span class="text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full">
                Rozšířená verze
              </span>
            `:`
              <span class="text-[10px] font-medium text-zinc-600 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded-full">
                Základní verze
              </span>
            `}
            <span class="text-zinc-300">·</span>
            <span class="text-zinc-600 font-medium">
              Otázka ${i.questionIndex+1} z ${t}
            </span>
          </div>
        </div>

        <div class="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
          <div 
            class="bg-zinc-900 h-full transition-all duration-300 ease-out" 
            style="width: ${o}%;"
          ></div>
        </div>
      </div>

      <!-- Hlavní dotazníková karta v bílošedém stylu -->
      <div class="bg-white border border-zinc-200 rounded-xl p-6 sm:p-8 shadow-xs mb-6 relative">
        
        <!-- Kategorie a Otazníček s dobovým kontextem -->
        <div class="flex items-center justify-between gap-3 mb-3 relative">
          <span class="text-[11px] font-bold text-zinc-500 uppercase tracking-wider bg-zinc-100 px-2.5 py-1 rounded border border-zinc-200">
            ${r.category}
          </span>

          ${r.context||r.historicalNote?`
            <div class="relative group/tooltip">
              <button 
                type="button"
                onclick="window.calcToggleContextTooltip(${r.id})"
                class="w-7 h-7 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 hover:text-zinc-950 border border-zinc-300 font-bold text-xs flex items-center justify-center transition-all cursor-help shadow-2xs focus:outline-none focus:ring-2 focus:ring-zinc-400"
                title="Dobový kontext otázky (najetím myší nebo kliknutím zobrazíte vysvětlení)"
                aria-label="Dobový kontext otázky"
              >
                ?
              </button>

              <!-- Tooltip bublina (zobrazí se při najetí myší i při kliknutí/tapnutí) -->
              <div 
                id="context-tooltip-${r.id}"
                class="${i.activeContextTooltipId===r.id?`block`:`hidden group-hover/tooltip:block`} absolute right-0 top-full mt-2 w-72 sm:w-88 md:w-96 p-4 bg-zinc-900 text-zinc-100 text-xs leading-relaxed rounded-xl shadow-2xl z-50 border border-zinc-800 text-justify [hyphens:auto] animate-fadeIn"
              >
                <div class="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800">
                  <div class="flex items-center gap-1.5 text-zinc-200 font-semibold text-[11px]">
                    <span class="text-amber-400">💡</span> Dobový kontext otázky
                  </div>
                  <button 
                    type="button"
                    onclick="event.stopPropagation(); window.calcCloseContextTooltip()"
                    class="text-zinc-400 hover:text-white p-0.5 text-xs font-bold leading-none cursor-pointer"
                    title="Zavřít"
                  >
                    ✕
                  </button>
                </div>
                <p class="text-zinc-300 font-normal leading-relaxed text-justify [hyphens:auto]">
                  ${r.context||r.historicalNote}
                </p>
              </div>
            </div>
          `:``}
        </div>

        <!-- Tvrzení -->
        <h2 class="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight leading-snug mb-8">
          ${r.statement}
        </h2>

        <!-- 3 Volební tlačítka (Ano / Nevím / Ne) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          <!-- Souhlasím (+1) -->
          <button 
            onclick="window.calcHandleAnswer(1)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${s===1?`bg-emerald-700 text-white border-emerald-700 shadow-sm`:`bg-white hover:bg-emerald-50 text-zinc-900 border-zinc-300 hover:border-emerald-600`}"
          >
            <span class="text-base text-emerald-600 ${s===1?`text-white`:``}">✔</span>
            <span>Ano / Souhlasím</span>
          </button>

          <!-- Nevím / Neutrální (0) -->
          <button 
            onclick="window.calcHandleAnswer(0)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${s===0?`bg-zinc-800 text-white border-zinc-800 shadow-sm`:`bg-white hover:bg-zinc-100 text-zinc-700 border-zinc-300 hover:border-zinc-400`}"
          >
            <span class="text-base text-zinc-400 ${s===0?`text-white`:``}">—</span>
            <span>Nevím / Neutrální</span>
          </button>

          <!-- Nesouhlasím (-1) -->
          <button 
            onclick="window.calcHandleAnswer(-1)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${s===-1?`bg-rose-700 text-white border-rose-700 shadow-sm`:`bg-white hover:bg-rose-50 text-zinc-900 border-zinc-300 hover:border-rose-600`}"
          >
            <span class="text-base text-rose-600 ${s===-1?`text-white`:``}">✖</span>
            <span>Ne / Nesouhlasím</span>
          </button>

        </div>

      </div>

      <!-- Navigace mezi otázkami (Předchozí / Přeskočit) -->
      <div class="flex items-center justify-between text-xs text-zinc-500 mb-4 px-1">
        <button 
          ${i.questionIndex>0?`onclick="window.calcPrevQuestion()"`:`disabled`}
          class="hover:text-zinc-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-medium flex items-center gap-1.5 cursor-pointer py-1.5 px-3 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-50 shadow-2xs"
        >
          <span>←</span>
          <span>Předchozí otázka</span>
        </button>

        <span class="text-xs font-medium text-zinc-500">
          Otázka ${i.questionIndex+1} z ${t}
        </span>

        <button 
          onclick="window.calcHandleAnswer(0)"
          class="hover:text-zinc-900 transition-colors font-medium flex items-center gap-1.5 cursor-pointer py-1.5 px-3 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-50 shadow-2xs"
        >
          <span>Přeskočit</span>
          <span>→</span>
        </button>
      </div>

      <!-- Číselník otázek: zarovnaný přesně na šířku okna s otázkou ve více řádcích -->
      <div class="w-full bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 shadow-xs">
        <div class="flex items-center justify-between text-xs text-zinc-500 font-medium mb-3 pb-2 border-b border-zinc-100">
          <span class="text-zinc-800 font-semibold">Číselník otázek:</span>
          <span>Zodpovězeno ${Object.keys(i.answers).length} z ${t}</span>
        </div>

        <div class="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-1.5 sm:gap-2 w-full">
          ${e.map((e,t)=>{let n=i.answers[e.id]!==void 0,r=t===i.questionIndex;return`
              <button 
                onclick="window.calcJumpQuestion(${t})"
                title="Přejít na otázku ${t+1}: ${e.title||e.category}"
                class="h-8 rounded-lg flex items-center justify-center text-xs font-mono font-medium transition-all cursor-pointer border ${r?`bg-zinc-900 text-white border-zinc-900 font-bold shadow-xs ring-2 ring-zinc-400 ring-offset-1`:n?`bg-zinc-100 text-zinc-800 border-zinc-300 hover:bg-zinc-200 font-semibold`:`bg-white text-zinc-400 border-zinc-200 hover:border-zinc-300 hover:text-zinc-700 hover:bg-zinc-50`}"
              >
                ${t+1}
              </button>
            `}).join(``)}
        </div>
      </div>

    </main>
  `}function y(){let e=n[i.year],t=a(i.year,i.quizMode),r=i.partyScores[0],o=i.selectedPartyForDetails||r?.party.id,s=e.parties.find(e=>e.id===o)||r?.party;return`
    <main class="max-w-4xl mx-auto px-4 sm:px-6 py-10 flex-1 animate-fadeIn">
      
      <!-- Titulek výsledků -->
      <div class="mb-8">
        <div class="flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
          <span>Výsledky kalkulačky</span>
          <span>·</span>
          <span>Volby ${i.year}</span>
          ${i.quizMode===`expanded`?`
            <span>·</span>
            <span class="text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200 normal-case font-bold">
              Rozšířená verze (${t.length} otázek)
            </span>
          `:`
            <span>·</span>
            <span class="text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200 normal-case font-medium">
              Základní verze (${t.length} otázek)
            </span>
          `}
        </div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
          Vaše názorová shoda s kandidujícími stranami
        </h1>
      </div>

      <!-- Hlavní vítězná strana -->
      ${r?`
        <div class="bg-zinc-900 text-white rounded-xl p-6 sm:p-8 mb-8 shadow-sm border border-zinc-800">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div class="max-w-xl">
              <div class="flex items-center gap-3.5 mb-3">
                <div class="w-2 h-12 rounded-full shrink-0 shadow-xs" style="background-color: ${r.party.color};"></div>
                <div>
                  <span class="text-xs uppercase tracking-wider font-semibold text-zinc-400 block">
                    Nejvyšší programová shoda
                  </span>
                  <h2 class="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                    ${r.party.fullName} (${r.party.shortName})
                  </h2>
                </div>
              </div>

              <div class="text-xs text-zinc-400 mb-3 font-medium">
                ${r.party.ideology} · Osobnosti: <strong class="text-zinc-200">${r.party.leaders.join(`, `)}</strong>
              </div>
              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-4 text-justify [hyphens:auto]">
                ${r.party.description}
              </p>
              <div class="p-3 rounded-lg bg-zinc-800 text-xs text-zinc-200 border border-zinc-700 text-justify [hyphens:auto]">
                <strong>Programové pilíře:</strong> ${r.party.programHighlight}
              </div>
            </div>

            <div class="flex flex-col items-center justify-center p-5 rounded-xl bg-zinc-800 border border-zinc-700 min-w-[130px] shrink-0 self-center sm:self-auto text-center">
              <span class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
                ${r.matchPercentage}%
              </span>
              <span class="text-[11px] uppercase tracking-wider text-zinc-400 mt-1 font-semibold">
                Shoda
              </span>
              <button 
                onclick="window.calcOpenPartyModal('${r.party.id}', ${i.year})"
                class="mt-3 text-[11px] text-zinc-300 hover:text-white underline font-medium cursor-pointer"
              >
                Detail strany ↗
              </button>
            </div>
          </div>
        </div>
      `:``}

      <!-- Kompletní žebříček stran -->
      <div class="bg-white border border-zinc-200 rounded-xl p-6 mb-8 shadow-xs">
        <h3 class="text-base font-bold text-zinc-900 mb-1">
          Celkové pořadí všech kandidujících stran
        </h3>
        <p class="text-xs text-zinc-500 mb-5">
          Klepnutím na libovolnou stranu zobrazíte podrobný rozbor konkrétních otázek.
        </p>

        <div class="space-y-3">
          ${i.partyScores.map((e,t)=>{let n=s?.id===e.party.id;return`
              <div 
                onclick="window.calcSelectPartyDetails('${e.party.id}')"
                class="p-3.5 rounded-lg border transition-all cursor-pointer ${n?`border-zinc-900 bg-zinc-50`:`border-zinc-200 hover:border-zinc-300 bg-white`}"
              >
                <div class="flex items-center justify-between mb-2 text-xs">
                  <div class="flex items-center gap-3">
                    <span class="w-5 h-5 rounded bg-zinc-100 text-zinc-700 font-bold flex items-center justify-center text-[10px]">
                      ${t+1}
                    </span>
                    <div class="w-1.5 h-6 rounded-full shrink-0" style="background-color: ${e.party.color};"></div>
                    <div>
                      <strong class="text-zinc-900 text-sm font-semibold">${e.party.shortName}</strong>
                      <span class="text-zinc-500 text-xs hidden sm:inline ml-1">– ${e.party.fullName}</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <button 
                      onclick="event.stopPropagation(); window.calcOpenPartyModal('${e.party.id}', ${i.year})"
                      class="text-[11px] text-zinc-400 hover:text-zinc-900 font-medium underline"
                    >
                      profil
                    </button>
                    <div class="font-mono font-bold text-sm text-zinc-900">
                      ${e.matchPercentage}%
                    </div>
                  </div>
                </div>

                <!-- Match bar -->
                <div class="w-full bg-zinc-100 h-2.5 rounded-full overflow-hidden mb-1.5">
                  <div 
                    class="h-full rounded-full transition-all duration-300" 
                    style="width: ${e.matchPercentage}%; background-color: ${e.party.color};"
                  ></div>
                </div>

                <div class="flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Shoda: <strong>${e.agreeCount}</strong> · Rozpor: <strong>${e.disagreeCount}</strong></span>
                  <span>Skutečný výsledek ${i.year}: <strong class="text-zinc-800">${e.party.historicalPercentage}%</strong></span>
                </div>
              </div>
            `}).join(``)}
        </div>
      </div>

      <!-- Rozbor otázek -->
      ${s?`
        <div class="bg-white border border-zinc-200 rounded-xl p-6 mb-8 shadow-xs">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-zinc-100 mb-5">
            <div class="flex items-center gap-3">
              <div class="w-2 h-10 rounded-full shrink-0" style="background-color: ${s.color};"></div>
              <div>
                <span class="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">Podrobný rozbor</span>
                <h3 class="text-base font-bold text-zinc-900">
                  Vaše odpovědi vs. ${s.fullName} (${s.shortName})
                </h3>
              </div>
            </div>

            <!-- Filtry shody / rozporu -->
            <div class="flex items-center gap-1 p-1 bg-zinc-100 rounded-lg text-xs font-medium">
              <button 
                onclick="window.calcSetComparisonFilter('all')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${i.comparisonFilter===`all`?`bg-white text-zinc-900 shadow-xs font-semibold`:`text-zinc-600 hover:text-zinc-900`}"
              >
                Všechny (${t.length})
              </button>
              <button 
                onclick="window.calcSetComparisonFilter('agree')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${i.comparisonFilter===`agree`?`bg-white text-zinc-900 shadow-xs font-semibold`:`text-zinc-600 hover:text-zinc-900`}"
              >
                Shoda
              </button>
              <button 
                onclick="window.calcSetComparisonFilter('disagree')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${i.comparisonFilter===`disagree`?`bg-white text-zinc-900 shadow-xs font-semibold`:`text-zinc-600 hover:text-zinc-900`}"
              >
                Rozpor
              </button>
            </div>
          </div>

          <div class="space-y-3">
            ${t.filter(e=>{let t=i.answers[e.id]??0,n=e.partyStances[s.id]??0;return i.comparisonFilter===`agree`?t!==0&&n!==0&&t===n:i.comparisonFilter!==`disagree`||t!==0&&n!==0&&t!==n}).map(e=>{let t=i.answers[e.id]??0,n=e.partyStances[s.id]??0,r=t!==0&&n!==0&&t===n,a=t!==0&&n!==0&&t!==n,o=t===1?`Ano`:t===-1?`Ne`:`Nevím`,c=n===1?`Ano`:n===-1?`Ne`:`Neutrální`;return`
                  <div class="p-3.5 rounded-lg border text-xs ${r?`border-emerald-200 bg-emerald-50/20`:a?`border-rose-200 bg-rose-50/20`:`border-zinc-200 bg-white`}">
                    <div class="flex items-center justify-between mb-1.5">
                      <span class="text-zinc-500 font-semibold uppercase text-[10px]">${e.category}</span>
                      <span class="text-[11px] font-semibold px-2 py-0.5 rounded ${r?`text-emerald-700 bg-emerald-100`:a?`text-rose-700 bg-rose-100`:`text-zinc-600 bg-zinc-100`}">
                        ${r?`✔ Shoda`:a?`✖ Rozpor`:`— Neutrální`}
                      </span>
                    </div>

                    <p class="font-medium text-zinc-900 mb-2 leading-relaxed">
                      ${e.statement}
                    </p>

                    <div class="grid grid-cols-2 gap-3 pt-2 border-t border-zinc-100">
                      <div>
                        <span class="text-zinc-500 block text-[10px]">Váš hlas:</span>
                        <strong class="${t===1?`text-emerald-700`:t===-1?`text-rose-700`:`text-zinc-700`} font-semibold">
                          ${o}
                        </strong>
                      </div>
                      <div>
                        <span class="text-zinc-500 block text-[10px]">Postoj ${s.shortName}:</span>
                        <strong class="${n===1?`text-emerald-700`:n===-1?`text-rose-700`:`text-zinc-700`} font-semibold">
                          ${c}
                        </strong>
                      </div>
                    </div>
                  </div>
                `}).join(``)}
          </div>
        </div>
      `:``}

      <!-- Skutečné historické výsledky -->
      <div class="bg-white border border-zinc-200 rounded-xl p-6 mb-8 shadow-xs">
        <h3 class="text-base font-bold text-zinc-900 mb-1">
          Jak tyto volby v roce ${i.year} skutečně dopadly?
        </h3>
        <p class="text-xs text-zinc-600 leading-relaxed mb-5 text-justify [hyphens:auto]">
          ${e.historicalContext}
        </p>

        <div class="p-4 bg-zinc-50 rounded-lg border border-zinc-200 text-xs text-zinc-800 leading-relaxed mb-6 text-justify [hyphens:auto]">
          <strong>Povolební vývoj:</strong> ${e.outcomeSummary}
        </div>

        <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
          Oficiální volební zisk stran (${i.year})
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          ${e.parties.map(e=>`
            <div 
              onclick="window.calcOpenPartyModal('${e.id}', ${i.year})"
              class="p-3 rounded-lg bg-zinc-50 border border-zinc-200 text-xs hover:border-zinc-300 hover:bg-zinc-100 transition-colors cursor-pointer group"
            >
              <div class="flex items-center justify-between mb-1.5">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-5 rounded-full shrink-0" style="background-color: ${e.color};"></div>
                  <div>
                    <strong class="text-zinc-900 font-semibold group-hover:underline block">${e.shortName}</strong>
                    <span class="text-[10px] text-zinc-500 truncate block">${e.fullName}</span>
                  </div>
                </div>
                <span class="font-mono font-bold text-zinc-900">${e.historicalPercentage}%</span>
              </div>
              <div class="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden mb-1.5">
                <div class="h-full rounded-full" style="width: ${Math.min(100,e.historicalPercentage*2.2)}%; background-color: ${e.color};"></div>
              </div>
              <div class="text-[11px] text-zinc-500 flex justify-between">
                <span>Mandátů: <strong>${e.historicalSeats>0?e.historicalSeats:`0`}</strong></span>
                <span class="group-hover:text-zinc-900">profil ↗</span>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>

      <!-- Akční tlačítka -->
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button 
          onclick="window.calcShareResult()"
          class="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs tracking-tight transition-colors cursor-pointer shadow-xs border border-zinc-800"
        >
          Kopírovat výsledek
        </button>
        <button 
          onclick="window.calcSetView('home')"
          class="px-5 py-2.5 rounded-lg bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-300 font-semibold text-xs tracking-tight transition-colors cursor-pointer"
        >
          Vyzkoušet jiný volební rok
        </button>
      </div>

    </main>
  `}function b(){let e=[1920,1946,1990],t=[];return e.forEach(e=>{(i.sliderYearFilter===`all`||i.sliderYearFilter===e)&&n[e].parties.forEach(n=>{t.push({party:n,year:e})})}),`
    <section class="border-t border-zinc-200 bg-white py-8 px-4 sm:px-6 mt-12 shadow-xs">
      <div class="max-w-5xl mx-auto">
        
        <!-- Hlavička slidovacího baru -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-zinc-900"></span>
              <h3 class="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight">
                Strany a hnutí
              </h3>
            </div>
            <p class="text-xs text-zinc-500 mt-0.5">
              Klikněte na libovolnou stranu pro zobrazení historického profilu, programu a odkazu na Wikipedii.
            </p>
          </div>

          <!-- Filtry období & Šipky posuvu -->
          <div class="flex items-center gap-3">
            <!-- Záložky období -->
            <div class="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg text-xs font-medium">
              <button 
                onclick="window.calcSetSliderFilter('all')" 
                class="px-2.5 py-1 rounded transition-colors cursor-pointer ${i.sliderYearFilter===`all`?`bg-white text-zinc-900 shadow-xs font-semibold`:`text-zinc-600 hover:text-zinc-900`}"
              >
                Vše (22)
              </button>
              <button 
                onclick="window.calcSetSliderFilter(1920)" 
                class="px-2.5 py-1 rounded transition-colors cursor-pointer ${i.sliderYearFilter===1920?`bg-white text-zinc-900 shadow-xs font-semibold`:`text-zinc-600 hover:text-zinc-900`}"
              >
                1920
              </button>
              <button 
                onclick="window.calcSetSliderFilter(1946)" 
                class="px-2.5 py-1 rounded transition-colors cursor-pointer ${i.sliderYearFilter===1946?`bg-white text-zinc-900 shadow-xs font-semibold`:`text-zinc-600 hover:text-zinc-900`}"
              >
                1946
              </button>
              <button 
                onclick="window.calcSetSliderFilter(1990)" 
                class="px-2.5 py-1 rounded transition-colors cursor-pointer ${i.sliderYearFilter===1990?`bg-white text-zinc-900 shadow-xs font-semibold`:`text-zinc-600 hover:text-zinc-900`}"
              >
                1990
              </button>
            </div>

            <!-- Posuvná navigační tlačítka -->
            <div class="flex items-center gap-1.5">
              <button 
                onclick="window.calcScrollSlider('left')" 
                aria-label="Posunout doleva" 
                class="w-8 h-8 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                ◀
              </button>
              <button 
                onclick="window.calcScrollSlider('right')" 
                aria-label="Posunout doprava" 
                class="w-8 h-8 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                ▶
              </button>
            </div>
          </div>
        </div>

        <!-- Samotný vodorovný slidovací bar -->
        <div 
          id="party-slider-scroll" 
          class="party-slider flex items-stretch gap-3 overflow-x-auto no-scrollbar py-2 px-0.5"
        >
          ${t.map(({party:e,year:t})=>`
            <div 
              onclick="window.calcOpenPartyModal('${e.id}', ${t})"
              class="w-[230px] sm:w-[250px] shrink-0 bg-white rounded-xl border border-zinc-200 p-4 hover:border-zinc-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <!-- Barevný proužek nahoře v typické barvě strany -->
                <div class="h-1.5 w-full rounded-t-xl -mt-4 -mx-4 mb-3" style="background-color: ${e.color};"></div>

                <!-- Vrchní lišta: Rok & Výsledek -->
                <div class="flex items-center justify-between mb-2.5">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                    Volby ${t}
                  </span>
                  <span class="text-xs font-mono font-bold text-zinc-900">
                    ${e.historicalPercentage}%
                  </span>
                </div>

                <!-- Barevný proužek a název strany v době voleb -->
                <div class="flex items-start gap-2.5 mb-2">
                  <div class="w-1.5 h-9 rounded-full shrink-0 mt-0.5" style="background-color: ${e.color};"></div>
                  <div class="overflow-hidden">
                    <h4 class="font-extrabold text-sm text-zinc-900 truncate group-hover:underline">
                      ${e.shortName}
                    </h4>
                    <p class="text-[11px] text-zinc-700 font-medium line-clamp-1" title="${e.fullName}">
                      ${e.fullName}
                    </p>
                  </div>
                </div>

                <div class="mb-2">
                  <span class="inline-block px-1.5 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600 border border-zinc-200 truncate max-w-full">
                    ${e.ideology}
                  </span>
                </div>

                <p class="text-[11px] text-zinc-600 line-clamp-3 leading-relaxed mb-3 text-justify [hyphens:auto]">
                  ${e.description}
                </p>
              </div>

              <!-- Spodní proklik na popis & Wikipedii -->
              <div class="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500 group-hover:text-zinc-900">
                <span class="font-medium">Popis & Wikipedie</span>
                <span class="font-bold text-xs group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          `).join(``)}
        </div>

      </div>
    </section>
  `}function x(){if(!i.activeModalParty)return``;let{party:e,year:t}=i.activeModalParty;return`
    <div 
      id="party-modal-backdrop"
      class="fixed inset-0 z-50 bg-zinc-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onclick="if (event.target.id === 'party-modal-backdrop') window.calcClosePartyModal();"
    >
      <div 
        class="max-w-xl w-full bg-white rounded-2xl border border-zinc-200 shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto animate-fadeIn text-zinc-900 overflow-hidden"
        onclick="event.stopPropagation();"
      >
        <!-- Barevný proužek nahoře v barvě strany -->
        <div class="h-2 w-full rounded-t-2xl -mt-6 sm:-mt-8 -mx-6 sm:-mx-8 mb-6" style="background-color: ${e.color};"></div>
        
        <!-- Zavírací tlačítko -->
        <button 
          onclick="window.calcClosePartyModal()" 
          aria-label="Zavřít"
          class="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
        >
          ✕
        </button>

        <!-- Hlavička s barevným proužkem a dobovým názvem -->
        <div class="flex items-start gap-3.5 mb-5 pr-8">
          <div class="w-2 h-14 rounded-full shrink-0 shadow-xs" style="background-color: ${e.color};"></div>
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1.5">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-zinc-900 text-white font-mono">
                Volby ${t}
              </span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                ${e.ideology}
              </span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-zinc-900 leading-tight">
              ${e.fullName}
            </h3>
            <div class="flex items-center gap-2 mt-1.5">
              <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${e.color};"></span>
              <span class="text-xs text-zinc-600 font-medium">
                Dobový název a zkratka: <strong class="text-zinc-900 font-bold">${e.shortName}</strong>
              </span>
            </div>
          </div>
        </div>

        <!-- Statistiky volebního výsledku -->
        <div class="grid grid-cols-2 gap-3 p-3.5 bg-zinc-50 rounded-xl border border-zinc-200 mb-5 text-xs">
          <div>
            <span class="text-zinc-500 block text-[11px]">Skutečný volební zisk v roce ${t}:</span>
            <strong class="text-base font-extrabold text-zinc-900 font-mono">${e.historicalPercentage} %</strong>
          </div>
          <div>
            <span class="text-zinc-500 block text-[11px]">Získaných poslaneckých mandátů:</span>
            <strong class="text-base font-extrabold text-zinc-900 font-mono">${e.historicalSeats>0?e.historicalSeats:`0 křesel`}</strong>
          </div>
        </div>

        <!-- Významné osobnosti -->
        <div class="mb-4 text-xs">
          <span class="text-zinc-400 uppercase tracking-wider font-bold block mb-1">Klíčové osobnosti</span>
          <p class="font-semibold text-zinc-800">
            ${e.leaders.join(` · `)}
          </p>
        </div>

        <!-- Historický popis (Wikipedie data) -->
        <div class="mb-4 text-xs sm:text-sm text-zinc-700 leading-relaxed space-y-2">
          <span class="text-zinc-400 uppercase tracking-wider font-bold block text-xs">Historický profil & kontext</span>
          <p class="text-justify [hyphens:auto]">
            ${e.description}
          </p>
        </div>

        <!-- Programový pilíř -->
        <div class="p-3.5 rounded-lg bg-zinc-100 border border-zinc-200 text-xs text-zinc-800 leading-relaxed mb-6 text-justify [hyphens:auto]">
          <strong class="text-zinc-900">Hlavní programová teze:</strong> ${e.programHighlight}
        </div>

        <!-- Akční tlačítka v patce modálu -->
        <div class="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-zinc-200">
          ${e.wikipediaUrl?`
            <a 
              href="${e.wikipediaUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-full sm:w-auto flex-1 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs tracking-tight transition-colors text-center flex items-center justify-center gap-1.5 shadow-xs cursor-pointer border border-zinc-800"
            >
              <span>Otevřít článek na Wikipedii</span>
              <span class="text-xs">↗</span>
            </a>
          `:``}

          <button 
            onclick="window.calcStartQuiz(${t}); window.calcClosePartyModal();"
            class="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold text-xs tracking-tight transition-colors text-center cursor-pointer border border-zinc-200"
          >
            Spustit kalkulačku pro rok ${t}
          </button>
        </div>

      </div>
    </div>
  `}function S(){if(!i.activeModalSystemYear)return``;let e=i.activeModalSystemYear,t=n[e],r=t.electionSystem;return`
    <div 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-xs animate-fadeIn"
      onclick="if (event.target === this) window.calcCloseSystemModal()"
    >
      <div class="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200">
        
        <!-- Hlavička modálu -->
        <div class="flex items-start justify-between gap-4 pb-4 border-b border-zinc-200 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-bold text-zinc-500 uppercase tracking-wider font-mono">
                Volební systém a pravidla · ${e}
              </span>
              <span class="text-zinc-300">·</span>
              <span class="text-xs text-zinc-500 font-medium">Účast ${t.turnout}</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight leading-snug">
              ${t.title}
            </h3>
            <p class="text-xs sm:text-sm text-zinc-600 mt-1">
              ${t.subtitle}
            </p>
          </div>

          <!-- Zavírací křížek -->
          <button 
            onclick="window.calcCloseSystemModal()"
            class="text-zinc-400 hover:text-zinc-800 p-1 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer shrink-0"
            aria-label="Zavřít"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- 4 Sekce informací -->
        <div class="space-y-4 mb-6">
          
          <!-- 1. Do jakého tělesa se volilo -->
          <div class="p-4 rounded-lg bg-zinc-50 border border-zinc-200">
            <div class="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-wider mb-1.5">
              <svg class="w-4 h-4 text-zinc-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Zastupitelské těleso (Parlament)</span>
            </div>
            <p class="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify [hyphens:auto]">
              ${r.body}
            </p>
          </div>

          <!-- 2. Volební systém a pravidla -->
          <div class="p-4 rounded-lg bg-zinc-50 border border-zinc-200">
            <div class="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-wider mb-1.5">
              <svg class="w-4 h-4 text-zinc-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span>Volební systém & přepočet mandátů</span>
            </div>
            <p class="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify [hyphens:auto]">
              ${r.system}
            </p>
          </div>

          <!-- Dvousloupec: Kdo mohl volit vs Kdo mohl být zvolen -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <!-- Aktivní volební právo -->
            <div class="p-4 rounded-lg bg-zinc-50 border border-zinc-200">
              <div class="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-wider mb-1.5">
                <svg class="w-4 h-4 text-zinc-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Kdo mohl volit (Aktivní právo)</span>
              </div>
              <p class="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify [hyphens:auto]">
                ${r.franchise}
              </p>
            </div>

            <!-- Pasivní volební právo -->
            <div class="p-4 rounded-lg bg-zinc-50 border border-zinc-200">
              <div class="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-wider mb-1.5">
                <svg class="w-4 h-4 text-zinc-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Kdo mohl kandidovat (Pasivní právo)</span>
              </div>
              <p class="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify [hyphens:auto]">
                ${r.eligibility}
              </p>
            </div>

          </div>

          <!-- Zajímavosti k volbám -->
          <div class="p-4 rounded-lg bg-zinc-100/70 border border-zinc-200">
            <div class="flex items-center gap-2 text-zinc-900 font-bold text-xs uppercase tracking-wider mb-2">
              <svg class="w-4 h-4 text-zinc-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Zajímavosti a historické reálie</span>
            </div>
            <ul class="space-y-2 text-xs sm:text-sm text-zinc-700">
              ${r.trivia.map(e=>`
                <li class="flex items-start gap-2">
                  <span class="text-zinc-400 font-bold select-none">•</span>
                  <span class="text-justify [hyphens:auto]">${e}</span>
                </li>
              `).join(``)}
            </ul>
          </div>

        </div>

        <!-- Akční tlačítka v patce modálu -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-zinc-200">
          <button 
            onclick="window.calcCloseSystemModal()"
            class="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold text-xs tracking-tight transition-colors text-center cursor-pointer border border-zinc-200"
          >
            Zavřít okno
          </button>

          <button 
            onclick="window.calcStartQuiz(${e}); window.calcCloseSystemModal();"
            class="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm tracking-tight transition-colors text-center flex items-center justify-center gap-2 shadow-xs cursor-pointer border border-zinc-800"
          >
            <span>Spustit kalkulačku pro rok ${e}</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </div>
  `}function C(){return i.toastMessage?`
    <div class="fixed bottom-6 right-6 z-50 bg-zinc-900 text-white px-4 py-2.5 rounded-lg shadow-lg text-xs font-medium animate-fadeIn border border-zinc-700">
      <span>${i.toastMessage}</span>
    </div>
  `:``}function w(){return`
    <footer class="border-t border-zinc-200 py-8 px-4 sm:px-6 text-zinc-500 text-xs bg-[#f4f4f5]">
      <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div class="text-[11px] text-zinc-500">
          vytvořil po večerech Adam Simota :)
        </div>
        <div>
          <span class="font-bold text-zinc-900">Historická volební kalkulačka (HVK)</span>
          <span class="text-zinc-300 mx-2">·</span>
          <span>1920 · 1946 · 1990</span>
        </div>
      </div>
    </footer>
  `}function T(){let e=document.getElementById(`app`);if(!e)console.error(`Historická kalkulačka: Element s id="app" nebyl v dokumentu nalezen.`);else try{let t=``;switch(i.view){case`home`:t=_();break;case`quiz`:t=v();break;case`results`:t=y()}e.innerHTML=`
      ${g()}
      ${t}
      ${b()}
      ${w()}
      ${x()}
      ${S()}
      ${C()}
    `}catch(t){console.error(`Chyba při vykreslování Historické kalkulačky:`,t),e.innerHTML=`
      <div class="max-w-xl mx-auto my-12 p-6 bg-white rounded-xl border border-zinc-200 text-center font-sans">
        <h2 class="text-base font-bold text-zinc-900 mb-2">Historická volební kalkulačka se načítá...</h2>
        <p class="text-xs text-zinc-500 mb-4">Pokud tato zpráva nezmizí, zkuste prosím obnovit stránku (F5 / Ctrl+R).</p>
      </div>
    `}}window.addEventListener(`keydown`,e=>{e.key===`Escape`&&(i.activeModalParty&&f(),i.activeModalSystemYear&&m())}),window.calcStartQuiz=e=>c(e),window.calcHandleAnswer=e=>l(e),window.calcPrevQuestion=()=>{i.questionIndex>0&&(i.questionIndex--,i.showHistoricalNote=!1,i.activeContextTooltipId=null,T())},window.calcJumpQuestion=e=>{i.questionIndex=e,i.showHistoricalNote=!1,i.activeContextTooltipId=null,T()},window.calcSetView=e=>s(e),window.calcSelectPartyDetails=e=>{i.selectedPartyForDetails=e,T()},window.calcSetComparisonFilter=e=>{i.comparisonFilter=e,T()},window.calcToggleParties=e=>{i.expandedPartiesYear=i.expandedPartiesYear===e?null:e,T()},window.calcSetSliderFilter=e=>{i.sliderYearFilter=e,T()},window.calcScrollSlider=e=>h(e),window.calcOpenPartyModal=(e,t)=>d(e,t),window.calcClosePartyModal=()=>f(),window.calcOpenSystemModal=e=>p(e),window.calcCloseSystemModal=()=>m(),window.calcSetYearMode=(e,t)=>{i.selectedYearMode[e]=t,T()},window.calcToggleContextTooltip=e=>{i.activeContextTooltipId=i.activeContextTooltipId===e?null:e,T()},window.calcCloseContextTooltip=()=>{i.activeContextTooltipId=null,T()},window.calcShareResult=()=>{let e=i.partyScores[0],t=e?`V Historické volební kalkulačce pro rok ${i.year} mi vyšla nejvyšší shoda s: ${e.party.fullName} (${e.matchPercentage} %)!`:`Vyzkoušejte Historickou volební kalkulačku (1920, 1946, 1990)!`;navigator.clipboard?navigator.clipboard.writeText(t).then(()=>{o(`Zkopírováno do schránky`)}).catch(()=>{o(t)}):o(t)},document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,()=>T()):T();