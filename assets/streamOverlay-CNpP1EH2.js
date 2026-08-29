import{d as e,i as t,p as n,t as r,u as i}from"./jsx-runtime-DGqNZS-D.js";import{a,i as o,n as s,u as c}from"./deepLabels--Y-iGcZ1.js";import{E as l,G as u,U as d,n as f,r as p,v as m,y as h}from"./squareSetFormat-DcCuB1td.js";import{a as g,d as _,f as v,i as y,o as ee}from"./challenges-oO5nvlBz.js";var b=n(e(),1),te={mode:`results`,zoom:1,cx:.5,cy:.5,names:!0,coords:!0,opacity:1,visible:!0,markers:!0,markerTeams:null,spot:null,text:1};function ne(e){return JSON.stringify({view:e.view,fleets:e.fleets})}function re(e,t,n){return n||e===null?`state`:t===e?`ping`:`state`}function x(e){return S(e,`opacity`)}function ie(e){return S(e,`empty`)}function S(e,t){let n=e.get(t);if(n===null||n===``)return 1;let r=Number(n);return Number.isFinite(r)?Math.min(1,Math.max(0,r)):1}function ae(e){let t=Number(e.get(`secs`));return!Number.isFinite(t)||t<=0?6:Math.min(30,Math.max(2,t))}var C=`cast-state`,w=`cast-hello`,T=`cast-size`,E=`cast-ping`,D=5e3,oe=110,se=2e4,O=e=>`cast:${e.toUpperCase()}`;function ce(e){let t=(0,b.useRef)(null),n=(0,b.useRef)(null),[r,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(null),c=(0,b.useRef)(0),l=(0,b.useRef)(null),u=(0,b.useRef)(null),d=(0,b.useCallback)((e=!1)=>{l.current&&=(clearTimeout(l.current),null);let r=t.current,i=n.current;if(!r||!i)return;c.current=Date.now();let a=ne(i);if(re(u.current,a,e)===`ping`){r.send({type:`broadcast`,event:E,payload:{at:c.current}});return}u.current=a,r.send({type:`broadcast`,event:C,payload:{...i,at:c.current}})},[]),f=(0,b.useCallback)(()=>{let e=oe-(Date.now()-c.current);if(e<=0){d();return}l.current||=setTimeout(()=>{l.current=null,d()},e)},[d]);return(0,b.useEffect)(()=>{if(!e)return;let n=i.channel(O(e),{config:{broadcast:{self:!1}}});t.current=n,n.on(`broadcast`,{event:w},()=>d(!0)).on(`broadcast`,{event:T},({payload:e})=>s(e)).subscribe(e=>a(e===`SUBSCRIBED`));let r=setInterval(()=>d(),D);return()=>{clearInterval(r),l.current&&clearTimeout(l.current),l.current=null,t.current=null,u.current=null,a(!1),i.removeChannel(n)}},[e,d]),{publish:(0,b.useCallback)(e=>{n.current={...e,at:Date.now()},f()},[f]),ready:r,sourceSize:o}}function le(e){let[t,n]=(0,b.useState)(null),r=(0,b.useRef)(null),[a,o]=(0,b.useState)(0);return(0,b.useEffect)(()=>{if(!e)return;let t=i.channel(O(e),{config:{broadcast:{self:!1}}});return r.current=t,t.on(`broadcast`,{event:C},({payload:e})=>n(e)).on(`broadcast`,{event:E},({payload:e})=>{let t=e.at??Date.now();n(e=>e&&{...e,at:t})}).subscribe(e=>{e===`SUBSCRIBED`&&(o(e=>e+1),t.send({type:`broadcast`,event:w,payload:{}}))}),()=>{r.current=null,i.removeChannel(t)}},[e]),{message:t,report:(0,b.useCallback)(e=>{let t=r.current;!t||e.w<=0||e.h<=0||t.send({type:`broadcast`,event:T,payload:e})},[]),linkEpoch:a}}var k=r(),ue=[{value:.8,label:`Small`,note:`long names on fewer lines`},{value:1,label:`Normal`,note:`sized to the square`},{value:1.25,label:`Large`,note:`comfortable on a 1080p stream`},{value:1.5,label:`Huge`,note:`readable across a room`},{value:1.8,label:`Giant`,note:`for a small board on a big source`},{value:2.2,label:`Colossal`,note:`as far as a square will stretch`}],A=.5;function de(e){let t=e.get(`text`);if(t===null||t===``)return 1;let n=Number(t);return Number.isFinite(n)?Math.min(3,Math.max(A,n)):1}function fe({label:e,url:t,size:n,note:r}){let[i,a]=(0,b.useState)(!1);return(0,k.jsxs)(`div`,{className:`src-row`,children:[(0,k.jsxs)(`div`,{className:`src-line`,children:[(0,k.jsx)(`span`,{className:`src-label`,children:e}),(0,k.jsx)(`input`,{readOnly:!0,value:t,onFocus:e=>e.currentTarget.select()}),(0,k.jsx)(`button`,{onClick:()=>{navigator.clipboard?.writeText(t),a(!0),setTimeout(()=>a(!1),1500)},children:i?`Copied`:`Copy`})]}),(0,k.jsxs)(`span`,{className:`src-size`,children:[(0,k.jsx)(`strong`,{children:n}),` - `,r]})]})}function pe({label:e,hint:t,min:n,max:r,step:i,value:a,onChange:o,readout:s}){return(0,k.jsxs)(`div`,{className:`stack`,style:{gap:`0.25rem`},children:[(0,k.jsxs)(`div`,{className:`row`,style:{justifyContent:`space-between`,gap:`0.4rem`},children:[(0,k.jsx)(`span`,{style:{fontSize:`0.78rem`},children:e}),(0,k.jsx)(`span`,{className:`muted`,style:{fontSize:`0.72rem`},children:s})]}),(0,k.jsx)(`input`,{type:`range`,className:`eb-slider`,min:n,max:r,step:i,value:a,onChange:e=>o(Number(e.target.value)),"aria-label":e,style:{"--eb-fill":(a-n)/(r-n)}}),(0,k.jsx)(`span`,{className:`muted`,style:{fontSize:`0.68rem`,lineHeight:1.35},children:t})]})}function me(e){let t=ue.reduce((t,n)=>Math.abs(n.value-e)<Math.abs(t.value-e)?n:t);return`${e.toFixed(2).replace(/0+$/,``).replace(/.$/,``)}x - ${t.label}`}function j({mark:e,who:t,team:n,where:r}){return(0,k.jsxs)(`div`,{className:`ove-card`,children:[(0,k.jsx)(`div`,{className:`ove-art`,children:(0,k.jsx)(a,{mark:e})}),(0,k.jsxs)(`div`,{className:`ove-words`,children:[(0,k.jsx)(`div`,{className:`ove-what`,children:s(e)}),(0,k.jsxs)(`div`,{className:`ove-who`,children:[(0,k.jsx)(`span`,{style:{color:m(n)},children:t}),(0,k.jsx)(`span`,{className:`ove-where`,children:r})]})]})]})}function M(){let[e,t]=(0,b.useState)({w:0,h:0}),n=(0,b.useRef)(null);return[(0,b.useCallback)(e=>{if(n.current?.el===e||(n.current?.ro.disconnect(),n.current=null,!e))return;let r=new ResizeObserver(([e])=>{let{width:n,height:r}=e.contentRect;t(e=>e.w===n&&e.h===r?e:{w:n,h:r})});r.observe(e),n.current={el:e,ro:r}},[]),e]}function he(e,t,n=12,r=18){if(t===0||e.w===0||e.h===0)return 0;let i=Math.min(2,t),a=Math.ceil(t/i),o=(e.w-n*(i-1))/i,s=(e.h-n*(a-1))/a-r;return Math.max(0,Math.floor(Math.min(o,s)))}function ge(e){return Math.max(1,Math.min(2,e))}function N(e,t,n=8,r=1){if(e.w<=0||e.h<=0||t.w<=0||t.h<=0)return 1;let i=Math.max(1,t.w-n*2),a=Math.max(1,t.h-n*2);return Math.min(r,i/e.w,a/e.h)}var P=.35,F=.617,I=6,L=.3;function _e(e){let t=Math.max(0,e-1);return Math.sqrt(1/(t+I)+L*L)}function ve(e){return(e()+e()+e()-1.5)/.5}var ye=1e4;function be(e){return e.reduce((e,t)=>e+t.size,0)}function xe(e,t,n){let r=150/Math.max(1,t);if(e.length<2)return r;let i=d(n),a=e[0],o=e[e.length-1],s=u(i,o)-u(i,a),c=Math.max(0,o-a-s)/1e3,l=e.length-1;return(c+I*r)/(l+I)}function R(e,t,n,r,i,a){let o=be(n),s=l(e,n.length),c=new Map;for(let e of r)e.team!==null&&e.team!==void 0&&c.set(e.team,(c.get(e.team)??0)+1);let u=new Map,d=new Map,f=new Map,p=new Map;for(let t of e){if(t.cell_index<0)continue;let e=new Date(t.created_at).getTime();if(a!==void 0&&e>a)continue;let n=u.get(t.attacker_team);n||u.set(t.attacker_team,n=new Set),n.add(t.cell_index);let r=p.get(t.attacker_team);if(r||p.set(t.attacker_team,r=new Set),!r.has(t.cell_index)){r.add(t.cell_index);let n=f.get(t.attacker_team);n?n.push(e):f.set(t.attacker_team,[e])}if(t.result===`hit`||t.result===`sunk`){let e=d.get(t.defender_team);e||d.set(t.defender_team,e=new Set),e.add(t.cell_index)}}return t.map(e=>{let t=(f.get(e)??[]).sort((e,t)=>e-t),n=c.get(e)??1,r=d.get(e)?.size??0;return{team:e,hull:Math.max(0,o-r),totalHull:o,fired:u.get(e)?.size??0,shots:t.length,pace:xe(t,n,i),crew:n,eliminated:s.has(e)}})}function Se(e,t,n,r,i,a,o,s,c){let l=t.length,u=0;for(let e=0;e<l;e++)r[e]=t[e].eliminated?0:t[e].hull,i[e]=t[e].fired,o[e]=t[e].pace*Math.exp(n[e]*ve(c)),a[e]=o[e]*c(),s[e]=0,r[e]>0&&u++;for(;u>1;){let t=-1,n=1/0;for(let e=0;e<l;e++)r[e]>0&&!s[e]&&a[e]<n&&(n=a[e],t=e);if(t<0)break;a[t]+=o[t]*(.5+c());let d=e-i[t];if(d<=0){s[t]=1;continue}i[t]++;let f=c()<P;for(let e=0;e<l;e++){if(e===t||r[e]<=0)continue;let n=f?F:r[e]/d;c()<n&&--r[e]===0&&u--}}for(let e=0;e<l;e++)if(r[e]>0)return e;return-1}function z(e,t,n=ye){let r=e.map(e=>e.team),i=e.filter(e=>!e.eliminated&&e.hull>0);if(i.length<=1)return{teams:r,odds:e.map(e=>+(i.length===1&&e.team===i[0].team)),draw:+(i.length===0),decided:!0,fleets:e};let a=t*t,o=e.length,s=new Int32Array(o),c=new Int32Array(o),l=new Float64Array(o),u=new Float64Array(o),d=new Uint8Array(o),f=Float64Array.from(e,e=>_e(e.shots)),p=e.map(e=>`${e.team}:${e.hull}:${e.fired}:${e.shots}:${Math.round(e.pace)}`).join(`|`),m=y(g(`odds:${t}:${p}`)),h=Array(o).fill(0),_=0;for(let t=0;t<n;t++){let t=Se(a,e,f,s,c,l,u,d,m);t>=0?h[t]++:_++}return{teams:r,odds:h.map(e=>e/n),draw:_/n,decided:!1,fleets:e}}function Ce(e,t,n,r,i,a,o,s=60,c=500){if(!a)return[];let l=new Date(a).getTime(),f=d(o),p=[...new Set(e.filter(e=>e.cell_index>=0).map(e=>new Date(e.created_at).getTime()))].sort((e,t)=>e-t);if(p.length===0)return[];let m=Math.max(1,Math.ceil(p.length/s)),h=[];for(let e=0;e<p.length;e+=m)h.push(p[e]);return h[h.length-1]!==p[p.length-1]&&h.push(p[p.length-1]),h.map(a=>{let s=z(R(e,t,n,r,o,a),i,c);return{seconds:Math.max(0,a-l-u(f,a))/1e3,odds:s.odds}})}function B(e){return`${Math.round(e*100)}%`}function we(e,t,n,r){if(t.length<2||n<=0||r<=0)return[];let i=t[0].seconds,a=t[t.length-1].seconds-i||1,o=e=>(e-i)/a*n,s=t.map(t=>{let n=[],r=0;for(let i=0;i<e.length;i++)r+=t.odds[i]??0,n[i]=r;return n});return e.map((e,n)=>{let i=t.map((e,t)=>[o(e.seconds),r-s[t][n]*r]),a=t.map((e,t)=>[o(e.seconds),r-(n===0?0:s[t][n-1])*r]).reverse();return{team:e,polygon:[...i,...a]}})}function Te(e){return e!==null&&!e.fleets.every(e=>e.shots===0)}function V(e){return e.map((e,t)=>({def:e,index:t})).sort((e,t)=>t.def.size-e.def.size||e.index-t.index)}function H({teamLabel:e,colorHex:t,shipDefs:n,sunkHulls:r,isMine:i}){let a=r,o=a.filter(e=>!e).length;return(0,k.jsxs)(`div`,{className:`ov-fleet${i?` ov-fleet-mine`:``}`,children:[(0,k.jsxs)(`div`,{className:`ov-fleet-head`,children:[(0,k.jsx)(`span`,{className:`ov-team-name`,style:{color:t},children:e}),(0,k.jsxs)(`span`,{className:`ov-afloat${o===0?` ov-dead`:``}`,children:[o,`/`,n.length]})]}),(0,k.jsx)(`div`,{className:`ov-fleet-ships`,children:V(n).map(({def:e,index:n})=>(0,k.jsx)(`span`,{className:`ov-fleet-ship${a[n]?` ov-fleet-ship-sunk`:``}`,title:`${e.name} - ${e.size}${a[n]?`, sunk`:``}`,style:{width:`calc(${e.size} * var(--ov-ship-unit, 9px))`,maskImage:`url(${c(e.name,e.size)})`,WebkitMaskImage:`url(${c(e.name,e.size)})`,backgroundColor:a[n]?`#6b2020`:t}},n))})]})}function U({teams:e,points:t,width:n,height:r,rule:i=!0}){let a=we(e,t,n,r);return a.length===0?null:(0,k.jsxs)(`svg`,{className:`odds-graph`,width:n,height:r,viewBox:`0 0 ${n} ${r}`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:[a.map(({team:e,polygon:t})=>(0,k.jsx)(`polygon`,{points:t.map(([e,t])=>`${e},${t}`).join(` `),fill:m(e),fillOpacity:.85},e)),i&&(0,k.jsx)(`line`,{x1:0,y1:r/2,x2:n,y2:r/2,stroke:`rgba(255,255,255,0.5)`,strokeWidth:1,strokeDasharray:`4 4`})]})}function W({phaseLabel:e,clock:t,fleets:n,shipDefs:r,highlightTeam:i,showFleets:a,odds:o,opacity:s,textSize:c}){let[l,u]=M(),[d,f]=M(),[p,g]=M(),_=N(f,u,8,c),v=Math.ceil(n.length/2),y=e=>e.map(e=>(0,k.jsx)(H,{teamLabel:h(e.team),colorHex:m(e.team),shipDefs:r,sunkHulls:e.sunkHulls,isMine:i===e.team},e.team));return(0,k.jsx)(`div`,{className:`ovt-fit`,ref:l,children:(0,k.jsxs)(`div`,{className:`ovt-bar`,ref:d,style:{transform:`translate(-50%, -50%) scale(${_})`,opacity:s},children:[(0,k.jsxs)(`div`,{className:`ovt-row`,ref:p,children:[a&&(0,k.jsx)(`div`,{className:`ovt-side ovt-left`,children:y(n.slice(0,v))}),(0,k.jsxs)(`div`,{className:`ovt-clock`,children:[(0,k.jsx)(`span`,{className:`ovt-phase`,children:e}),(0,k.jsx)(`span`,{className:`ovt-time`,children:t})]}),a&&(0,k.jsx)(`div`,{className:`ovt-side ovt-right`,children:y(n.slice(v))})]}),o&&o.points.length>1&&g.w>0&&(0,k.jsxs)(`div`,{className:`ovt-odds`,children:[(0,k.jsx)(U,{teams:o.teams,points:o.points,width:g.w,height:26,rule:!1}),(0,k.jsx)(`div`,{className:`ovt-odds-keys`,children:o.teams.map((e,t)=>(0,k.jsxs)(`span`,{className:`ovt-odds-key`,children:[(0,k.jsx)(`i`,{style:{background:m(e)}}),h(e),` `,B(o.odds[t])]},e))})]})]})})}function G({items:e,heading:t,showLabel:n,plate:r,opacity:i,textSize:a}){let[o,s]=M(),[c,l]=M(),u=N(l,s,8,a);return(0,k.jsx)(`div`,{className:`ovk-fit`,ref:o,children:(0,k.jsxs)(`div`,{className:`ovk-bar${r?` ovk-plate`:``}`,ref:c,style:{transform:`translate(-50%, -50%) scale(${u})`,opacity:i},children:[n&&(0,k.jsx)(`span`,{className:`ovk-label`,children:t}),e.map(e=>(0,k.jsxs)(`span`,{className:`ovk-item`,children:[(0,k.jsx)(`span`,{className:`${e.className} ovk-swatch`,style:e.style,"aria-hidden":!0}),e.label]},e.key))]})})}function K(e,t){let n=new Set,r=new Set;for(let t of e)t.region&&n.add(t.region),t.color&&r.add(t.color);let i=p.filter(e=>n.has(e)),a=_(t).filter(e=>r.has(e.hex));return{items:[...i.map(e=>({key:e,label:f[e],className:`bg-region-${e}`})),...a.map(e=>({key:e.hex,label:e.label,className:``,style:{"--bg-region":e.hex}}))],heading:i.length===0?`Colours`:a.length===0?`Regions`:`Key`}}var q=6,J=`38cqw`,Y=`20.8cqw`,Ee=[{name:`Carrier`,size:5},{name:`Battleship`,size:4},{name:`Cruiser`,size:3},{name:`Submarine`,size:3},{name:`Destroyer`,size:2}],De=[{team:1,sunkHulls:[!1,!0,!1,!1,!0]},{team:2,sunkHulls:[!0,!0,!1,!0,!1]}],Oe={teams:[1,2],odds:[.68,.32],points:[{seconds:0,odds:[.5,.5]},{seconds:420,odds:[.42,.58]},{seconds:900,odds:[.55,.45]},{seconds:1320,odds:[.68,.32]}]},ke={3:`miss`,9:`hit`,14:`miss`,26:`sunk`,32:`hit`},Ae=[{row:1,col:1,size:3,horizontal:!0,shipName:`Cruiser`,colorHex:`#2f9ee0`},{row:4,col:3,size:2,horizontal:!1,shipName:`Destroyer`,colorHex:`#2f9ee0`}],X={0:{label:`Godrick`,region:`limgrave`},1:{label:`Rennala`,region:`liurnia`},2:{label:`Radahn`,region:`caelid`},3:{label:`Morgott`,region:`altus`},4:{label:`Rykard`,region:`altus`},5:{label:`Astel`,region:`underground`},6:{label:`Maliketh, the Black Blade`,region:`mountaintops`},7:{label:`Mohg`,region:`underground`},8:{label:`Malenia`,region:`mountaintops`},9:{label:`Messmer`,region:`dlc`},10:{label:`Bayle`,region:`dlc`},11:{label:`Radagon`,region:`altus`},12:{label:`Margit`,region:`limgrave`},13:{label:`Godfrey`,region:`altus`},14:{label:`Rellana`,region:`dlc`},15:{label:`Midra`,region:`dlc`},16:{label:`Placidusax`,region:`mountaintops`},17:{label:`Fortissax`,region:`underground`}},je={8:`miss`,13:`hit`,20:`sunk`,21:`sunk`,22:`sunk`,27:`miss`,30:`hit`};function Me({opacity:e,emptyFade:t,textSize:n,alertMark:r,isCaster:i}){let a=K(Object.values(X).map(e=>({name:e.label,region:e.region})),null);return(0,k.jsxs)(`div`,{className:`ovp-wrap`,children:[(0,k.jsx)(`div`,{className:`ovp-shot`,style:{backgroundImage:`url(/Elden-Battleship/preview/footage.jpg)`}}),(0,k.jsx)(`div`,{className:`ovp-clock`,children:(0,k.jsx)(W,{phaseLabel:`Match`,clock:`18:42`,fleets:De,shipDefs:Ee,highlightTeam:i?null:1,showFleets:!0,odds:i?Oe:null,opacity:e,textSize:n})}),(0,k.jsx)(`div`,{className:`ovp-board ovb-board ovl-fade`,style:{"--ovb-cells":q,"--ovb-text":n},children:(0,k.jsx)(`div`,{className:`ovl-fade-stage`,style:{"--ovl-a-bg":e,"--ovl-a-empty":t},children:(0,k.jsx)(o,{boardSize:q,cellVisual:e=>je[e]??`empty`,maxVh:J,maxVw:J,textBoost:n,growText:!0,ships:[{row:3,col:2,size:3,horizontal:!0,shipName:`Cruiser`,colorHex:`#e08a3c`}],sunkOrientation:new Map([[20,!0],[21,!0],[22,!0]]),cellText:e=>{let t=X[e];return t?{label:t.label,region:t.region}:null},cellTint:e=>{let t=X[e];return t?{region:t.region}:null}})})}),!i&&(0,k.jsx)(`div`,{className:`ovp-fleet ovf-board ovl-fade`,children:(0,k.jsx)(`div`,{className:`ovl-fade-stage`,style:{"--ovl-a-bg":e,"--ovl-a-empty":t},children:(0,k.jsx)(o,{boardSize:q,cellVisual:e=>ke[e]??`empty`,maxVh:Y,maxVw:Y,ships:Ae,cellTint:e=>{let t=X[e];return t?{region:t.region}:null}})})}),(0,k.jsx)(`div`,{className:`ovp-key`,children:(0,k.jsx)(G,{items:a.items,heading:a.heading,showLabel:!0,plate:!0,opacity:e,textSize:n})}),r?(0,k.jsx)(`div`,{className:`ovp-alert`,children:(0,k.jsx)(j,{mark:r,who:`Your crew`,team:1,where:`D7`})}):null]})}var Ne=`overlay_config.toml`;function Pe(e,t){return`[ingest]
# An empty token disables all networking.
# Changes to timing settings require a restart.
url = "${t}"
token = "${e}"
interval_ms = 1000
heartbeat_s = 60

[common]
# Reuse an inherited/ModEngine3 console when available. Otherwise the DLL
# attaches to its parent console or creates one as a last resort.
console=false

# set font file, which is located in \`data\` folder
# leave empty to use embedded font, which only supports Latin characters
font=""

# font size
font_size=32
# Runtime multiplier for the loaded font. Hot reloads while the game is open.
# Accepted range is 0.25 to 4.0.
font_scale=1

# accpeted charsets:
#  enUS, frFR, deDE, esES, esAR, itIT, ptBr -> Latin
#  jaJP -> Japanese
#  koKR -> Korean
#  plPL -> Latin with extra characters used by Polish
#  ruRU -> Cyrillic
#  thTH -> Thai
#  zhCN, zhTW -> CJK
# Leave empty to use engus
charset=""

# language used to load data file, if you set this to empty, engus will be used
language=""

[input]
# You can bind any of the following key names:
# Use uppercase names. Combine multiple keys with '+', e.g. CTRL+SHIFT+F1
#
# --- Modifier keys ---
#   CTRL, LCTRL, RCTRL, SHIFT, LSHIFT, RSHIFT, ALT, LALT, RALT, WIN, LWIN, RWIN
#
# --- Mouse buttons ---
#   LBUTTON, RBUTTON, MBUTTON, XBUTTON1, XBUTTON2
#
# --- Navigation & control ---
#   BACK, BACKSPACE, TAB, RETURN, ENTER, ESC, ESCAPE,
#   SPACE, INSERT, DELETE, HOME, END, PRIOR, PAGEUP, NEXT, PAGEDOWN,
#   LEFT, RIGHT, UP, DOWN
#
# --- Function keys ---
#   F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12
#
# --- Letters (A–Z) ---
#   A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
#
# --- Number row (0–9) ---
#   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, HYPHEN (- or MINUS)
#
# --- Numpad keys ---
#   NUMPAD0–NUMPAD9, NUM0–NUM9,
#   DECIMAL (NUMPADPERIOD), DIVIDE (/), MULTIPLY (*), SUBTRACT (NUMPADSUBTRACT), ADD (+), EQUAL (=)
#
# --- Lock keys ---
#   CAPSLOCK, CAPITAL, NUMLOCK, SCROLL, SCROLLLOCK
#
# --- Symbols ---
#   ',', ';', "'", '[', ']', '\\\\', '~', '.' (PERIOD)
#
# --- Misc / System ---
#   PRINT, PRINTSCREEN, SNAPSHOT, PAUSE
#
# Example:
#   toggle_full_mode = "F1"
#
# Notes:
# - F13–F24 and other OEM / multimedia keys are NOT supported.
# - Ensure no spaces around '+' in combined bindings.

# shortcut key to toggle full mode
toggle_full_mode="="
# shortcut key to trigger a mouse click
click_action="-"

[style]
text_color=[243,238,231,248]
check_mark_color=[86,184,148,230]
bg_color=[12,13,16,232]
border_color=[239,87,38,180]
button_color=[239,87,38,150]
button_hover_color=[255,117,64,170]
button_press_color=[169,54,22,230]
node_color=[23,23,28,160]
node_hover_color=[239,87,38,160]
node_press_color=[255,117,64,180]
scroll_bg_color=[12,13,16,160]
scroll_color=[239,87,38,160]
scroll_hover_color=[255,117,64,180]
scroll_press_color=[169,54,22,200]
border_width=2
rounding=4
panel_pos=[-10,10]
panel_dim=[0.30, 0.92]

[boss]
# data filename for boss list, which is located in \`data/<language>\` folder
data_file="bosses.json"

[overlay]
# Optional fixed compact-mode width in pixels. Remove this setting to size the
# compact window from its current text content.
# closed_width=320
# how to display the text on the overlay
# display text = "IGT: {igt}$nBosses: {kills}/{total}$nGreat Runes: {runes}$nShards: {shards}$nDeaths: {deaths}"
#  $n = newline
#  {kills} = current kill count
#  {total} = total boss count
#  {deaths}= Death count in current game
#  {igt}   = In-game time
#  {shards}= Number of messmer's kindling shards acquired
#  {runes} = Number of great runes acquired
display_text = "IGT: {igt}$nBosses: {kills}/{total}$nGreat Runes: {runes}$nDeaths: {deaths}"
show_ingest_tally = true

[timer]
# Regular: elapsed IGT
# Timer: countdown from timer_minutes
# Prep: elapsed IGT offset by prep_minutes
# PrepTimer: preparation countdown followed by timer_minutes countdown
mode="Regular"
prep_minutes=2
timer_minutes=0

`}function Fe(e){return v(e)===ee}async function Ie(){let{data:e,error:t}=await i.from(`ingest_tokens`).select(`token`).maybeSingle();if(t)throw t;return e?.token??null}async function Z(){let{data:e}=await i.auth.getUser(),t=e.user?.id;if(!t)throw Error(`Not signed in`);let{data:n,error:r}=await i.from(`ingest_tokens`).insert({user_id:t}).select(`token`).single();if(r)throw r;return n.token}async function Le(){let{data:e}=await i.auth.getUser(),t=e.user?.id;if(!t)throw Error(`Not signed in`);let{error:n}=await i.from(`ingest_tokens`).delete().eq(`user_id`,t);if(n)throw n;return Z()}function Re(){return`https://zltjdeikpsbohvgtmmsn.supabase.co/functions/v1/auto-fire`}function Q(e){return Pe(e,Re())}function ze(e){return e.length<=12?e:`${e.slice(0,6)}${`·`.repeat(8)}${e.slice(-4)}`}async function Be(){let{data:e,error:t}=await i.from(`overlay_tokens`).select(`token`).maybeSingle();if(t)throw t;return e?.token??null}async function $(){let{data:e}=await i.auth.getUser(),t=e.user?.id;if(!t)throw Error(`Not signed in`);let{data:n,error:r}=await i.from(`overlay_tokens`).insert({user_id:t}).select(`token`).single();if(r)throw r;return n.token}async function Ve(){let{data:e}=await i.auth.getUser(),t=e.user?.id;if(!t)throw Error(`Not signed in`);let{error:n}=await i.from(`overlay_tokens`).delete().eq(`user_id`,t);if(n)throw n;return $()}async function He(e){if(!t||!e)return null;let{data:n,error:r}=await i.rpc(`overlay_session`,{p_token:e});if(r)return console.warn(`[overlay] could not resolve token:`,r.message),null;let a=Array.isArray(n)?n[0]:n;return!a||typeof a.user_id!=`string`?null:{roomCode:typeof a.room_code==`string`?a.room_code:null,status:typeof a.room_status==`string`?a.room_status:null,team:typeof a.team==`number`?a.team:null,userId:a.user_id}}function Ue(e){return e.length<=12?e:`${e.slice(0,6)}${`·`.repeat(8)}${e.slice(-4)}`}export{pe as A,le as B,Te as C,he as D,ge as E,se as F,ae as I,ie as L,fe as M,A as N,M as O,de as P,x as R,Ce as S,N as T,te as V,U as _,Ve as a,R as b,Z as c,Le as d,Ne as f,W as g,G as h,He as i,me as j,j as k,Ie as l,K as m,Be as n,Fe as o,Me as p,Ue as r,Q as s,$ as t,ze as u,H as v,z as w,B as x,V as y,ce as z};