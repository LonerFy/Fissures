// FISSURE v2 — fissures seules + morceaux qui reforment le monde + chapitres à effets
const MYTHS = [
{id:'dan', title:'Dan Ayido Houedo', sub:'le serpent arc-en-ciel · vodun fon', ex:'Le serpent qui porte la terre. Quand il bouge, le monde tremble.',
 color:'#7ef9c6', mbg:'radial-gradient(320px 160px at 50% 120%,#12382c,#08080a)',
 bg:['linear-gradient(180deg,#06120e,#0a2b22 60%,#123b2e)','linear-gradient(180deg,#0b0b10,#14231d 55%,#1d3a2d)','linear-gradient(180deg,#0a0f14,#123524 60%,#3d2b5a)'],
 fx:['dan','dan','dan'], chSym:['🌀','🌍','🐍'],
 chTitles:["I — L'ENROULEMENT","II — LE FRÉMISSEMENT","III — LA MUE"],
 chapters:[
  "Au commencement, Mawu la lune et Lisa le soleil roulèrent le monde comme une boule d'argile. Elle s'affaissait. Ils appelèrent Dan Ayido Houedo, le serpent arc-en-ciel.\nDan s'enroula autour de la terre, la tête mordant sa queue, et le monde tint. Ses sept couleurs devinrent le ciel après la pluie.",
  "Les montagnes sont ses anneaux. Les rivières, sa sueur. Quand Dan éternue ou se tourne dans son sommeil, la terre tremble — les vieux disent « Dan ɖo sisɔ », le serpent remue. Les devins du Fa lisent chacun de ses mouvements.",
  "Un jour Dan devra changer de place pour se reposer. Ce jour-là le monde se fissurera. Les conteurs sourient : ce n'est pas la fin, c'est la mue. Comme le serpent, le monde doit perdre sa peau pour grandir. Les initiés portent l'anneau enroulé pour s'en souvenir."],
 details:[
  {tag:'DÉTAIL RARE · FON', text:"« Dan ayido houedo » : à la fois mâle et femelle, serpent et arc-en-ciel. Il habite fourmilières, sources et fromagers. On ne le peint jamais d'une seule couleur."},
  {tag:'DÉTAIL RARE · SÉISME', text:"Au Bénin, certains tremblements sont racontés aux enfants comme Dan qui change de côté. Les devins consultent le Fa avant de déplacer une maison."},
  {tag:'DÉTAIL RARE · ANNEAU DAN', text:"L'asen enroulé et les bracelets-serpents en fer rappellent la mue : perdre sa peau sans mourir. Porter Dan, c'est accepter de changer de monde."}]},
{id:'ymir', title:'Ymir', sub:'le géant originel · nord', ex:'De sa chair, les dieux firent le monde. De son sang, la mer.',
 color:'#9fd8ff', mbg:'radial-gradient(320px 160px at 50% 120%,#1b2c3f,#08080a)',
 bg:['linear-gradient(180deg,#04060a,#0d1622 60%,#1a2636)','linear-gradient(180deg,#0a0e14,#1c2a1a 55%,#3a2a12)','linear-gradient(180deg,#120607,#3a0f0f 55%,#0a1a2a)'],
 fx:['ymir-mist','ymir-snow','ymir-ember'], chSym:['🕳️','🐄','💀'],
 chTitles:["I — LE VIDE BÉANT","II — LA VACHE ET LE MEURTRE","III — LE CADAVRE-MONDE"],
 chapters:[
  "Avant les dieux : Ginnungagap, le vide béant. Au nord Niflheim, monde de glace et de brume. Au sud Muspell, monde de feu. Le souffle chaud rencontra le givre, sua, et de cette sueur naquit Ymir, premier géant, et avec lui le temps.",
  "Ymir dormit et sua des géants de ses aisselles. Puis vint Audhumla, la vache sans cornes, qui lécha les blocs de glace salée : jour un des cheveux, jour deux une tête, jour trois un homme entier — Búri, ancêtre d'Odin. Odin, Vili et Vé tuèrent Ymir. Il le fallait, dirent-ils.",
  "De sa chair la terre, de son sang la mer, de ses os les montagnes, de ses dents les cailloux, de son crâne le ciel, porté par quatre nains : Norðri, Suðri, Austri, Vestri. De ses cils, l'enclos des hommes, Miðgarðr. Chaque pierre est un fragment du premier corps."],
 details:[
  {tag:'DÉTAIL RARE · VÖLUSPÁ 3', text:"« Ár var alda þat er ekki var » — jadis il n'y avait ni sable, ni mer, ni vagues froides. Ni terre ni ciel : juste le vide béant. Le poème le plus vieux du Nord commence par rien."},
  {tag:'DÉTAIL RARE · AUDHUMLA', text:"La vache lécha TROIS blocs en TROIS jours. Le sel de la glace révèle Búri (« le producteur »). Les dieux naissent du léchage patient, pas du tonnerre."},
  {tag:'DÉTAIL RARE · LES 4 NAINS', text:"Le crâne-ciel d'Ymir repose sur quatre nains cardinaux. En vieux norrois leurs noms sont les points cardinaux eux-mêmes. Le ciel pèse sur des épaules minuscules."}]},
{id:'osiris', title:'Osiris', sub:'le corps dépecé · kemet', ex:'Découpé en quatorze morceaux, il devint le premier ressuscité.',
 color:'#e8c66a', mbg:'radial-gradient(320px 160px at 50% 120%,#3a2c10,#08080a)',
 bg:['linear-gradient(180deg,#0a0a06,#2a2110 60%,#4a3a14)','linear-gradient(180deg,#0c0606,#2b1414 55%,#4a2a10)','linear-gradient(180deg,#060a08,#122a1e 60%,#3a3a12)'],
 fx:['osiris-nile','osiris-sand','osiris-djed'], chSym:['🌊','🧩','⚖️'],
 chTitles:["I — LE COFFRE","II — LES QUATORZE","III — LE REDRESSEMENT"],
 chapters:[
  "Osiris apprit aux hommes le blé, la vigne et la loi. Seth, jaloux, fit tailler un coffre somptueux aux mesures exactes de son frère. Pendant un banquet, promesse : le coffre à qui l'emplira. Osiris s'y allongea. Les 72 conjurés clouèrent le couvercle et le jetèrent au Nil. Le fleuve le porta jusqu'à Byblos, où un tamaris poussa autour de lui.",
  "Isis retrouva le coffre. Seth le reprit et dépeça le corps en quatorze morceaux, semés du Delta à Abydos. Isis et Nephtys, en milans, ramassèrent chaque fragment. Le phallus, mangé par l'oxyrhynque, fut refait en or. Chaque nome d'Égypte garda une relique et s'en vanta.",
  "Embaumé par Anubis, Osiris n'est pas revenu chez les vivants : il est devenu le roi des morts. Lors de la fête, on redresse le pilier Djed — sa colonne vertébrale. Chaque défunt devient « Osiris N » et pèse son cœur contre la plume de Maât. Mourir, c'est être rassemblé pièce par pièce pour germer ailleurs."],
 details:[
  {tag:'DÉTAIL RARE · BYBLOS', text:"Le coffre échoua à Byblos (Liban actuel) : un tamaris l'enferma dans son tronc, devenu pilier du palais royal. Isis s'y fit nourrice pour le récupérer. Le mythe voyage déjà entre pays."},
  {tag:'DÉTAIL RARE · 14 NOMES', text:"Plutarque compte 14 morceaux. Abydos garda la tête, Philæ le cœur. Les prêtres de chaque ville affirmaient posséder LE vrai fragment — la concurrence des reliques est vieille de 3000 ans."},
  {tag:'DÉTAIL RARE · PILIER DJED', text:"Le Djed, colonne vertebrale d'Osiris, se redresse a la fete Heb-Sed. Le hieroglyphe lui-meme est une promesse de stabilite."}]},
{id:'izanami', title:'Izanami & Izanagi', sub:'la brèche de yomi · japon', ex:'Il regarda sa femme morte. Ce regard brisa les mondes.',
 color:'#c9a6ff', mbg:'radial-gradient(320px 160px at 50% 120%,#2a1b3f,#08080a)',
 bg:['linear-gradient(180deg,#060a12,#10233a 60%,#1c3a55)','linear-gradient(180deg,#0c060a,#2a0f1a 55%,#12060a)','linear-gradient(180deg,#0a0805,#3a2410 55%,#0a0a0a)'],
 fx:['izanami-sea','izanami-yomi','izanami-oath'], chSym:['🔱','🔥','🍑'],
 chTitles:["I — LA LANCE CÉLESTE","II — NE ME REGARDE PAS","III — LE SERMENT DES MORTS"],
 chapters:[
  "Debout sur Ame-no-Ukihashi, le pont flottant du ciel, Izanagi et Izanami plongèrent Ame-no-Nuboko, la lance céleste sertie de joyaux, dans l'océan primordial. Le sel qui en goutta en la retirant forma l'île Onogoro. Ils y descendirent, firent le tour du pilier en sens inverse, et enfantèrent les îles du Japon une à une.",
  "En enfantant Kagutsuchi, le feu, Izanami mourut et descendit à Yomi, le pays de la souillure. Izanagi la suivit avec une torche. « Ne me regarde pas », supplia-t-elle. Il brisa sa promesse et alluma la lumière : son corps pourrissait, huit tonnerres-vers grouillaient sur lui. Horrifié, il s'enfuit. Elle l'envoya poursuivre par les sorcières de Yomi.",
  "Sur la pente, Izanagi lança trois pêches — elles repoussèrent les démons (d'où la pêche sacrée au Japon). Il scella Yomi du rocher Chibiki-no-Iwa. Face à face, le divorce : Izanami jura d'étrangler 1000 vivants par jour, Izanagi promit 1500 naissances. Puis il se lava : de son œil gauche naquit Amaterasu, le soleil. La première brèche ne s'est jamais refermée."],
 details:[
  {tag:'DÉTAIL RARE · KOJIKI', text:"Ame-no-Nuboko, la lance céleste, est l'arme créatrice : le Japon naît d'une goutte de sel, pas d'un combat. Onogoro veut dire « l'île qui se fige d'elle-même »."},
  {tag:'DÉTAIL RARE · KEGARE', text:"À Yomi, manger la nourriture des morts vous lie aux morts — Izanami avait déjà mangé. La souillure (kegare) exigeait un lavage (misogi) : le shintō naît de cette fuite."},
  {tag:'DÉTAIL RARE · 1000 CONTRE 1500', text:"Le premier divorce du monde est un compte macabre : 1000 morts / jour contre 1500 naissances. Les Japonais expliquent ainsi que la vie gagne toujours d'une courte tête. Et la pêche (momo) reste un talisman anti-demons."}]},
{id:'obatala', title:'Obatala', sub:"l'argile des hommes · yoruba", ex:'Le dieu potier qui modela les humains — puis but trop de vin de palme.',
 color:'#d98a5a', mbg:'radial-gradient(320px 160px at 50% 120%,#3a1f10,#08080a)',
 bg:['linear-gradient(180deg,#0a0806,#2e1c0e 60%,#4a2c12)','linear-gradient(180deg,#0d0605,#3a1408 55%,#5a2a0a)','linear-gradient(180deg,#080a06,#1e2e16 60%,#3a4a1e)'],
 fx:['obatala-descent','obatala-wine','obatala-mercy'], chSym:['⛓️','🍷','🤲'],
 chTitles:["I — LA DESCENTE","II — L'IVRESSE","III — LE PARDON"],
 chapters:[
  "Olodumare confia à Obatala une chaîne d'or, un coquillage de sable, une poule à cinq doigts et un caméléon. Obatala descendit à Ile-Ife, versa le sable sur l'eau primordiale, la poule le gratta pour faire la terre ferme. Le caméléon testa la solidité du sol de son pas prudent. Puis Obatala se mit à modeler les hommes dans l'argile, un par un.",
  "Fier, il but de l'ẹmu, le vin de palme, pour fêter son œuvre. Ivre, ses mains tremblèrent : il modela des corps aveugles, boiteux, bossus, albinos. Pendant son sommeil, Oduduwa, son rival, vola même la royauté d'Ife. À son réveil, honteux devant ses ratés, Obatala jura de les protéger pour toujours et interdit l'alcool à ses prêtres.",
  "C'est pourquoi Obatala est le patron des ẹni-orìṣà, les « gens du dieu ». Le proverbe prévient : qui se moque d'une forme insulte Obatala lui-même. L'erreur du dieu ivre devint miséricorde éternelle — et les Yoruba confient les enfants différents à sa garde blanche."],
 details:[
  {tag:'DÉTAIL RARE · IFE', text:"Ile-Ife, « la terre qui s'étend », berceau yoruba. La chaîne d'or, la poule à cinq doigts et le caméléon-testeur forment le kit de création le plus étrange d'Afrique de l'Ouest."},
  {tag:'DÉTAIL RARE · ẸMU INTERDIT', text:"Le vin de palme (ẹmu) est tabou pour les prêtres d'Obatala : ils boivent de l'eau et portent du blanc. La faute du dieu est devenue la loi de ses fidèles."},
  {tag:'DÉTAIL RARE · PROVERBE', text:"« Ẹni tí ó bá ṣe ẹlẹ́yà, ó ṣe Ọbàtálá » — qui se moque d'un différent insulte Obatala. L'albinisme et les handicaps y sont des marques sacrées, pas des hontes."}]},
{id:'nyx', title:'Nyx', sub:'la nuit avant les dieux · grèce', ex:'Avant Zeus, avant le ciel : une femme noire qui pondit le jour.',
 color:'#8a9bff', mbg:'radial-gradient(320px 160px at 50% 120%,#141a3a,#08080a)',
 bg:['linear-gradient(180deg,#020208,#0d0d20 60%,#1a1a3a)','linear-gradient(180deg,#050508,#141428 55%,#2a1a3a)','linear-gradient(180deg,#080810,#1c1c34 50%,#3a3a5a)'],
 fx:['nyx-void','nyx-birth','nyx-egg'], chSym:['🌑','😴','🥚'],
 chTitles:["I — AVANT LES DIEUX","II — L'ENFANTEMENT SEUL","III — L'ŒUF D'ARGENT"],
 chapters:[
  "Au commencement : Chaos, puis Gaia, Tartare, Éros — et Nyx, la Nuit, noire et voilée (Théogonie). Elle traverse le ciel en char noir, voilée d'ombre. Même Zeus la craint : dans l'Iliade (chant XIV), il renonce à punir Hypnos, le Sommeil, parce qu'il s'est réfugié auprès de sa mère Nyx. Le roi des dieux recule devant la Nuit.",
  "Sans mâle, Nyx enfante seule sa cour : Moros (le Destin), Kère (la Mort violente), Thanatos (la Mort douce), Hypnos (le Sommeil), les Oneiroi (les Rêves), Momos, Oizys, les Hespérides, les Moires, Némésis, Apaté, Philotès et Éris. Chaque nuit, elle recouvre le monde pour rappeler aux Olympiens qu'ils ne sont que des locataires du noir.",
  "Les Orphiques racontent qu'elle pondit un œuf d'argent d'où sortit Phanès-Éros, l'être ailé d'or qui mit le monde en mouvement. Le jour n'est donc qu'une fissure brève dans sa nuit éternelle. Chaque aube est une brèche qui se referme — et chaque nuit, la mère reprend son enfant."],
 details:[
  {tag:'DÉTAIL RARE · ILIADE XIV', text:"Hypnos échappe à Zeus « parce qu'il craignait de déplaire à Nyx ». Une seule divinité fait peur au maître de la foudre : la Nuit. Zeus lui-même a des limites."},
  {tag:'DÉTAIL RARE · THÉOGONIE 211-225', text:"Hésiode liste 13 enfants de Nyx sans père. Ce sont presque tous des abstractions sombres : le Blâme, la Tromperie, la Discorde. La Nuit est la mère des idées noires."},
  {tag:'DÉTAIL RARE · ŒUF ORPHIQUE', text:"Νὺξ pond l'œuf d'argent, Éros-Phanès en sort en Jaillissement de lumière. Les Orphiques inversent tout : l'amour naît de la nuit, pas du jour. Le cosmos éclot, il n'est pas construit."}]}
];

// ---------- grille ----------
const grid=document.getElementById('myth-grid');
MYTHS.forEach((m,i)=>{
  const b=document.createElement('button');
  b.className='card';b.style.setProperty('--mc',m.color);b.style.setProperty('--mbg',m.mbg);
  b.innerHTML=`<div class="art">${m.chSym[1]}</div><div class="txt"><h3>${m.title}<small>${m.sub}</small></h3><p>${m.ex}</p><span class="open">OUVRIR LA BRÈCHE →</span></div>`;
  b.addEventListener('click',e=>{fissureGo(()=>openRecit(i),e.clientX||innerWidth/2,e.clientY||innerHeight/2);});
  grid.appendChild(b);
});

// ---------- MOTEUR FISSURE V2 : fissures seules, morceaux reforment le monde ----------
const cv=document.getElementById('fissure-canvas'),ctx=cv.getContext('2d');
const mainEl=document.getElementById('main');
function sizeCv(){cv.width=innerWidth;cv.height=innerHeight}
sizeCv();addEventListener('resize',sizeCv);
let cracks=[],drops=[],shards=[],animId=null,busy=false;

function buildCracks(x,y){
  cracks=[];drops=[];
  const n=11+Math.floor(Math.random()*4);
  for(let i=0;i<n;i++){
    const a=(i/n)*Math.PI*2+Math.random()*.6;
    const pts=[{x,y}];let px=x,py=y;
    const segs=8+Math.floor(Math.random()*6),len=(140+Math.random()*300)/segs;
    for(let s=0;s<segs;s++){
      const aa=a+(Math.random()-.5)*1.0;
      px+=Math.cos(aa)*len*(1+Math.random());py+=Math.sin(aa)*len*(1+Math.random());
      pts.push({x:px,y:py});
      if(Math.random()<.45){
        const bpts=[{x:px,y:py}];let bx=px,by=py;
        for(let k=0;k<3;k++){bx+=(Math.random()-.5)*100;by+=(Math.random()-.5)*100;bpts.push({x:bx,y:by});}
        cracks.push({pts:bpts,branch:true});
      }
    }
    cracks.push({pts,branch:false});
  }
  for(let i=0;i<150;i++){
    const a=Math.random()*Math.PI*2,sp=2+Math.random()*8;
    drops.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-2.5,r:.8+Math.random()*3.6,life:1,decay:.007+Math.random()*.012});
  }
}
function buildShards(x,y){
  shards=[];
  const maxD=Math.hypot(cv.width,cv.height);
  const SEC=26,RINGS=[0,.14,.34,.58,.85,1.3];
  for(let s=0;s<SEC;s++){
    for(let r=0;r<RINGS.length-1;r++){
      const a0=(s/SEC)*Math.PI*2+Math.random()*.08,a1=((s+1)/SEC)*Math.PI*2+Math.random()*.08;
      const r0=RINGS[r]*maxD*.5,r1=RINGS[r+1]*maxD*.5;
      const j=()=> (Math.random()-.5)*24;
      const pts=[
        {x:x+Math.cos(a0)*r0+j(),y:y+Math.sin(a0)*r0+j()},
        {x:x+Math.cos(a1)*r0+j(),y:y+Math.sin(a1)*r0+j()},
        {x:x+Math.cos(a1)*r1+j(),y:y+Math.sin(a1)*r1+j()},
        {x:x+Math.cos(a0)*r1+j(),y:y+Math.sin(a0)*r1+j()}];
      const cx=(pts[0].x+pts[2].x)/2,cy=(pts[0].y+pts[2].y)/2;
      const ang=Math.atan2(cy-y,cx-x),dist=Math.hypot(cx-x,cy-y)/maxD;
      shards.push({pts,cx,cy,ang,dist,rot:(Math.random()-.5)*1.4,shade:8+Math.floor(Math.random()*14)});
    }
  }
}
function strokeCracks(p){
  ctx.lineCap='round';ctx.lineJoin='round';
  cracks.forEach(c=>{
    const upto=Math.max(2,Math.floor(c.pts.length*p));
    ctx.beginPath();ctx.moveTo(c.pts[0].x,c.pts[0].y);
    for(let i=1;i<upto;i++)ctx.lineTo(c.pts[i].x,c.pts[i].y);
    ctx.strokeStyle='rgba(0,0,0,.9)';ctx.lineWidth=c.branch?6:9;ctx.stroke();
    ctx.beginPath();ctx.moveTo(c.pts[0].x,c.pts[0].y);
    for(let i=1;i<upto;i++)ctx.lineTo(c.pts[i].x,c.pts[i].y);
    ctx.strokeStyle=c.branch?'rgba(225,225,235,.85)':'rgba(255,255,255,.95)';ctx.lineWidth=c.branch?1.2:2.4;ctx.stroke();
  });
  const bx=drops[0]?.x||0,by=drops[0]?.y||0,br=16+46*p;
  const g=ctx.createRadialGradient(bx,by,2,bx,by,br);
  g.addColorStop(0,'#000');g.addColorStop(.7,'rgba(0,0,0,.92)');g.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=g;ctx.beginPath();ctx.arc(bx,by,br,0,7);ctx.fill();
}
function stepDrops(){
  drops.forEach(d=>{d.x+=d.vx;d.y+=d.vy;d.vy+=.22;d.vx*=.986;d.life-=d.decay;});
  drops=drops.filter(d=>d.life>0);
  drops.forEach(d=>{
    ctx.beginPath();ctx.arc(d.x,d.y,Math.max(.3,d.r*d.life),0,7);
    ctx.fillStyle=`rgba(240,240,246,${.92*d.life})`;ctx.fill();
    if(d.r>2.2){ctx.beginPath();ctx.moveTo(d.x,d.y);ctx.lineTo(d.x-d.vx*2.2,d.y-d.vy*2.2);ctx.strokeStyle=`rgba(215,215,225,${.5*d.life})`;ctx.lineWidth=1;ctx.stroke();}
  });
}
function drawShards(prog,bx,by){
  ctx.clearRect(0,0,cv.width,cv.height);
  shards.forEach(s=>{
    const local=Math.min(1,Math.max(0,(prog-s.dist*.45)*1.6));
    const e=local*local*(3-2*local);
    const fly=e*320*(0.5+s.dist);
    const dx=Math.cos(s.ang)*fly,dy=Math.sin(s.ang)*fly+ e*120;
    ctx.save();ctx.translate(dx,dy);ctx.rotate(s.rot*e);ctx.globalAlpha=1-e;
    ctx.beginPath();ctx.moveTo(s.pts[0].x,s.pts[0].y);
    for(let i=1;i<4;i++)ctx.lineTo(s.pts[i].x,s.pts[i].y);
    ctx.closePath();
    ctx.fillStyle=`rgb(${s.shade},${s.shade},${s.shade+4})`;ctx.fill();
    ctx.strokeStyle='rgba(230,230,238,.9)';ctx.lineWidth=1.4;ctx.stroke();
    ctx.restore();
  });
  stepDrops();
}
const easeIO=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;

function fissureGo(swap,x,y){
  if(busy)return;busy=true;
  x=x||innerWidth/2;y=y||innerHeight/2;
  buildCracks(x,y);buildShards(x,y);
  cancelAnimationFrame(animId);
  const t0=performance.now();
  const phase1=(t)=>{
    const p=Math.min(1,(t-t0)/700);
    ctx.clearRect(0,0,cv.width,cv.height);
    strokeCracks(easeIO(p));stepDrops();
    // tremblement du monde pendant la fissure
    if(p<1){mainEl.style.transform=`translate(${(Math.random()-.5)*7*p}px,${(Math.random()-.5)*7*p}px)`;animId=requestAnimationFrame(phase1);}
    else{
      mainEl.style.transform='';
      swap(); // le nouveau monde est déjà là, sous les morceaux
      const t1=performance.now();
      const phase2=(t2)=>{
        const q=Math.min(1,(t2-t1)/850);
        drawShards(easeIO(q),x,y);
        if(q<1)animId=requestAnimationFrame(phase2);
        else{ctx.clearRect(0,0,cv.width,cv.height);busy=false;}
      };
      animId=requestAnimationFrame(phase2);
    }
  };
  animId=requestAnimationFrame(phase1);
}

// ---------- navigation ----------
function goPage(name,ex,ey){
  fissureGo(()=>{
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById('page-'+name).classList.add('active');
    document.querySelectorAll('#top nav button').forEach(b=>b.classList.toggle('active',b.dataset.go===name));
    window.scrollTo(0,0);
  },ex,ey);
}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();goPage(b.dataset.go,e.clientX,e.clientY);}));
const eclatHit=()=>{const r=document.getElementById('eclat').getBoundingClientRect();goPage('mythes',r.left+r.width/2,r.top+r.height/2);};
document.getElementById('btn-fendre').addEventListener('click',eclatHit);
document.getElementById('eclat').addEventListener('click',eclatHit);

// ---------- lecteur : 1 chapitre = 1 décor + 1 effet + 1 détail ----------
const recit=document.getElementById('recit'),sw=document.getElementById('slide-wash');
const rfx=document.getElementById('recit-fx'),rctx=rfx.getContext('2d');
let cur=0,chap=0,fxParts=[],fxMode='dan',fxRun=false;
function sizeRfx(){rfx.width=innerWidth;rfx.height=innerHeight}
sizeRfx();addEventListener('resize',sizeRfx);
const RAINBOW=['#f00','#f80','#ff0','#0f0','#0cf','#a0f','#f0f'];
function spawnFx(){
  fxParts=[];
  const N= innerWidth<700?70:130;
  for(let i=0;i<N;i++){
    const base={x:Math.random()*rfx.width,y:Math.random()*rfx.height};
    if(fxMode.startsWith('dan'))fxParts.push({...base,vy:3+Math.random()*5,vx:-1-Math.random()*1.5,c:RAINBOW[i%7],r:1+Math.random()*2.5});
    else if(fxMode==='ymir-mist')fxParts.push({...base,vy:.2+Math.random()*.5,vx:.3,r:20+Math.random()*40,a:.03+Math.random()*.05});
    else if(fxMode==='ymir-snow')fxParts.push({...base,vy:.6+Math.random()*1.6,vx:0,ph:Math.random()*7,r:1+Math.random()*2.6});
    else if(fxMode==='ymir-ember')fxParts.push({x:Math.random()*rfx.width,y:rfx.height*Math.random(),vy:-(.5+Math.random()*1.8),vx:(Math.random()-.5),c:Math.random()<.5?'#f96':'#fc3',r:1+Math.random()*2.4});
    else if(fxMode.startsWith('osiris'))fxParts.push({...base,vy:.2+Math.random()*.6,vx:1+Math.random()*2,c:fxMode==='osiris-nile'?'#7ec8e3':'#e8c66a',r:.8+Math.random()*2});
    else if(fxMode.startsWith('izanami'))fxParts.push({...base,vy:1+Math.random()*2.5,vx:(Math.random()-.5),c:Math.random()<.08?'#f33':'#999',r:.8+Math.random()*2.2});
    else if(fxMode==='obatala-descent')fxParts.push({...base,vy:.4+Math.random()*.8,vx:0,c:'#d98a5a',r:1+Math.random()*3});
    else if(fxMode==='obatala-wine')fxParts.push({...base,vy:2+Math.random()*3,vx:0,c:Math.random()<.4?'#a00':'#d98a5a',r:1+Math.random()*2.6});
    else if(fxMode==='obatala-mercy')fxParts.push({...base,vy:-.3-Math.random()*.6,vx:(Math.random()-.5),c:'#fff',r:1+Math.random()*2});
    else fxParts.push({...base,tw:Math.random()*7,r:.6+Math.random()*1.8}); // nyx stars
  }
  if(fxMode.startsWith('nyx-')){fxParts.shoot=null;}
}
function tickFx(){
  if(!fxRun)return;
  rctx.clearRect(0,0,rfx.width,rfx.height);
  if(fxMode.startsWith('nyx-')){
    fxParts.forEach(p=>{p.tw+=.06;const a=.35+.65*Math.abs(Math.sin(p.tw));rctx.globalAlpha=a;rctx.fillStyle='#fff';rctx.beginPath();rctx.arc(p.x,p.y,p.r,0,7);rctx.fill();});
    rctx.globalAlpha=1;
    if(fxMode==='nyx-egg'&&Math.random()<.02){ // étoile filante
      fxParts.shoot={x:Math.random()*rfx.width,y:0,vx:-8,vy:5,life:1};
    }
    const s=fxParts.shoot;
    if(s){s.x+=s.vx;s.y+=s.vy;s.life-=.03;rctx.strokeStyle=`rgba(255,255,255,${s.life})`;rctx.lineWidth=2;rctx.beginPath();rctx.moveTo(s.x,s.y);rctx.lineTo(s.x-s.vx*6,s.y-s.vy*6);rctx.stroke();if(s.life<=0)fxParts.shoot=null;}
  }else{
    fxParts.forEach(p=>{
      if(fxMode.startsWith('dan')){p.y+=p.vy;p.x+=p.vx;if(p.y>rfx.height){p.y=-10;p.x=Math.random()*rfx.width;}rctx.fillStyle=p.c;rctx.beginPath();rctx.arc(p.x,p.y,p.r,0,7);rctx.fill();}
      else if(fxMode==='ymir-mist'){p.x+=p.vx;if(p.x>rfx.width+60)p.x=-60;rctx.fillStyle=`rgba(180,200,220,${p.a})`;rctx.beginPath();rctx.arc(p.x,p.y,p.r,0,7);rctx.fill();}
      else if(fxMode==='ymir-snow'){p.y+=p.vy;p.ph+=.03;p.x+=Math.sin(p.ph);if(p.y>rfx.height){p.y=-10;p.x=Math.random()*rfx.width;}rctx.fillStyle='#e8f4ff';rctx.beginPath();rctx.arc(p.x,p.y,p.r,0,7);rctx.fill();}
      else if(fxMode==='ymir-ember'){p.y+=p.vy;p.x+=p.vx+Math.sin(p.y*.05);if(p.y<-10){p.y=rfx.height+10;p.x=Math.random()*rfx.width;}rctx.fillStyle=p.c;rctx.beginPath();rctx.arc(p.x,p.y,p.r,0,7);rctx.fill();}
      else if(fxMode.startsWith('osiris')){p.x+=p.vx;p.y+=p.vy+Math.sin(p.x*.02)*.3;if(p.x>rfx.width+10){p.x=-10;p.y=Math.random()*rfx.height;}rctx.fillStyle=p.c;rctx.globalAlpha=.8;rctx.beginPath();rctx.arc(p.x,p.y,p.r,0,7);rctx.fill();rctx.globalAlpha=1;}
      else if(fxMode.startsWith('izanami')){p.y+=p.vy;p.x+=p.vx;if(p.y>rfx.height){p.y=-10;p.x=Math.random()*rfx.width;}rctx.fillStyle=p.c;rctx.beginPath();rctx.arc(p.x,p.y,p.r,0,7);rctx.fill();}
      else{p.y+=p.vy;p.x+=p.vx;if(p.y>rfx.height+10)p.y=-10;if(p.y<-10)p.y=rfx.height+10;rctx.fillStyle=p.c;rctx.beginPath();rctx.arc(p.x,p.y,p.r,0,7);rctx.fill();}
    });
  }
  requestAnimationFrame(tickFx);
}
function openRecit(i){cur=i;chap=0;renderRecit();recit.classList.add('open');recit.setAttribute('aria-hidden','false');fxRun=true;tickFx();}
function renderRecit(){
  const m=MYTHS[cur];
  recit.className='open theme-'+m.id;
  recit.style.background=m.bg[chap];
  document.getElementById('recit-kicker').textContent=m.sub+` — chapitre ${chap+1}/3`;
  document.getElementById('recit-title').textContent=m.title;
  document.getElementById('recit-chtitle').textContent=m.chTitles[chap];
  document.getElementById('recit-sym').textContent=m.chSym[chap];
  document.getElementById('recit-text').textContent=m.chapters[chap];
  document.getElementById('recit-detail').innerHTML=`<b>${m.details[chap].tag}</b>${m.details[chap].text}`;
  document.getElementById('recit-count').textContent=`${cur+1}/6 · ${chap+1}/3`;
  fxMode=m.fx[chap];spawnFx();
}
function slideTo(fn){
  sw.classList.add('on');sw.classList.remove('leave');sw.classList.add('go');
  setTimeout(()=>{fn();sw.classList.add('leave');setTimeout(()=>{sw.classList.remove('on','go','leave');},320);},380);
}
document.getElementById('recit-next').addEventListener('click',()=>slideTo(()=>{
  if(chap<2)chap++;else{chap=0;cur=(cur+1)%MYTHS.length;}renderRecit();recit.scrollTo(0,0);
}));
document.getElementById('recit-prev').addEventListener('click',()=>slideTo(()=>{
  if(chap>0)chap--;else{cur=(cur-1+MYTHS.length)%MYTHS.length;chap=2;}renderRecit();recit.scrollTo(0,0);
}));
document.getElementById('recit-close').addEventListener('click',e=>{fxRun=false;fissureGo(()=>{recit.classList.remove('open');},e.clientX,e.clientY);});

addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('off'),700));
setTimeout(()=>document.getElementById('loader').classList.add('off'),2500);
