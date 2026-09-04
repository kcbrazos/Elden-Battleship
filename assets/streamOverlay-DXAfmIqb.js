import{d as e,i as t,p as n,t as r,u as i}from"./jsx-runtime-jiiTPUv2.js";import{n as a,s as o,t as s}from"./BoardGrid-CeumD1CZ.js";import{F as c,N as l,c as u,g as d,l as f}from"./teamColors-490Udgj8.js";import{_ as p,a as m,b as h,l as g,u as _,v,y}from"./challenges-ulG1BATj.js";import{n as ee}from"./deepLabels-MwumYbGL.js";import{r as b}from"./useBoxSize-DekkUdRl.js";var x=n(e(),1),te={mode:`results`,zoom:1,cx:.5,cy:.5,names:!0,coords:!0,opacity:1,visible:!0,markers:!0,markerTeams:null,spot:null,text:1,motion:null};function S(e){return JSON.stringify({view:e.view,fleets:e.fleets})}function C(e,t,n){return n||e===null?`state`:t===e?`ping`:`state`}function ne(e){return w(e,`opacity`)}function re(e){return w(e,`empty`)}function w(e,t){let n=e.get(t);if(n===null||n===``)return 1;let r=Number(n);return Number.isFinite(r)?Math.min(1,Math.max(0,r)):1}function ie(e){let t=Number(e.get(`secs`));return!Number.isFinite(t)||t<=0?6:Math.min(30,Math.max(2,t))}var T=`cast-state`,E=`cast-hello`,D=`cast-size`,O=`cast-ping`,ae=5e3,oe=110,se=2e4,k=e=>`cast:${e.toUpperCase()}`;function ce(e){let t=(0,x.useRef)(null),n=(0,x.useRef)(null),[r,a]=(0,x.useState)(!1),[o,s]=(0,x.useState)(null),c=(0,x.useRef)(0),l=(0,x.useRef)(null),u=(0,x.useRef)(null),d=(0,x.useCallback)((e=!1)=>{l.current&&=(clearTimeout(l.current),null);let r=t.current,i=n.current;if(!r||!i)return;c.current=Date.now();let a=S(i);if(C(u.current,a,e)===`ping`){r.send({type:`broadcast`,event:O,payload:{at:c.current}});return}u.current=a,r.send({type:`broadcast`,event:T,payload:{...i,at:c.current}})},[]),f=(0,x.useCallback)(()=>{let e=oe-(Date.now()-c.current);if(e<=0){d();return}l.current||=setTimeout(()=>{l.current=null,d()},e)},[d]);return(0,x.useEffect)(()=>{if(!e)return;let n=i.channel(k(e),{config:{broadcast:{self:!1}}});t.current=n,n.on(`broadcast`,{event:E},()=>d(!0)).on(`broadcast`,{event:D},({payload:e})=>s(e)).subscribe(e=>a(e===`SUBSCRIBED`));let r=setInterval(()=>d(),ae);return()=>{clearInterval(r),l.current&&clearTimeout(l.current),l.current=null,t.current=null,u.current=null,a(!1),i.removeChannel(n)}},[e,d]),{publish:(0,x.useCallback)(e=>{n.current={...e,at:Date.now()},f()},[f]),ready:r,sourceSize:o}}function le(e){let[t,n]=(0,x.useState)(null),r=(0,x.useRef)(null),[a,o]=(0,x.useState)(0);return(0,x.useEffect)(()=>{if(!e)return;let t=i.channel(k(e),{config:{broadcast:{self:!1}}});return r.current=t,t.on(`broadcast`,{event:T},({payload:e})=>n(e)).on(`broadcast`,{event:O},({payload:e})=>{let t=e.at??Date.now();n(e=>e&&{...e,at:t})}).subscribe(e=>{e===`SUBSCRIBED`&&(o(e=>e+1),t.send({type:`broadcast`,event:E,payload:{}}))}),()=>{r.current=null,i.removeChannel(t)}},[e]),{message:t,report:(0,x.useCallback)(e=>{let t=r.current;!t||e.w<=0||e.h<=0||t.send({type:`broadcast`,event:D,payload:e})},[]),linkEpoch:a}}var A=r(),ue=[{value:.8,label:`Small`,note:`long names on fewer lines`},{value:1,label:`Normal`,note:`sized to the square`},{value:1.25,label:`Large`,note:`comfortable on a 1080p stream`},{value:1.5,label:`Huge`,note:`readable across a room`},{value:1.8,label:`Giant`,note:`for a small board on a big source`},{value:2.2,label:`Colossal`,note:`as far as a square will stretch`}],j=.5;function de(e){let t=e.get(`text`);if(t===null||t===``)return 1;let n=Number(t);return Number.isFinite(n)?Math.min(3,Math.max(j,n)):1}function M({label:e,url:t,size:n,note:r}){let[i,a]=(0,x.useState)(!1);return(0,A.jsxs)(`div`,{className:`src-row`,children:[(0,A.jsxs)(`div`,{className:`src-line`,children:[(0,A.jsx)(`span`,{className:`src-label`,children:e}),(0,A.jsx)(`input`,{readOnly:!0,value:t,onFocus:e=>e.currentTarget.select()}),(0,A.jsx)(`button`,{onClick:()=>{navigator.clipboard?.writeText(t),a(!0),setTimeout(()=>a(!1),1500)},children:i?`Copied`:`Copy`})]}),(0,A.jsxs)(`span`,{className:`src-size`,children:[(0,A.jsx)(`strong`,{children:n}),` - `,r]})]})}function fe({label:e,hint:t,min:n,max:r,step:i,value:a,onChange:o,readout:s}){return(0,A.jsxs)(`div`,{className:`stack`,style:{gap:`0.25rem`},children:[(0,A.jsxs)(`div`,{className:`row`,style:{justifyContent:`space-between`,gap:`0.4rem`},children:[(0,A.jsx)(`span`,{style:{fontSize:`0.78rem`},children:e}),(0,A.jsx)(`span`,{className:`muted`,style:{fontSize:`0.72rem`},children:s})]}),(0,A.jsx)(`input`,{type:`range`,className:`eb-slider`,min:n,max:r,step:i,value:a,onChange:e=>o(Number(e.target.value)),"aria-label":e,style:{"--eb-fill":(a-n)/(r-n)}}),(0,A.jsx)(`span`,{className:`muted`,style:{fontSize:`0.68rem`,lineHeight:1.35},children:t})]})}function pe(e){let t=ue.reduce((t,n)=>Math.abs(n.value-e)<Math.abs(t.value-e)?n:t);return`${e.toFixed(2).replace(/0+$/,``).replace(/.$/,``)}x - ${t.label}`}function N({mark:e,who:t,team:n,where:r}){return(0,A.jsxs)(`div`,{className:`ove-card`,children:[(0,A.jsx)(`div`,{className:`ove-art`,children:(0,A.jsx)(a,{mark:e})}),(0,A.jsxs)(`div`,{className:`ove-words`,children:[(0,A.jsx)(`div`,{className:`ove-what`,children:ee(e)}),(0,A.jsxs)(`div`,{className:`ove-who`,children:[(0,A.jsx)(`span`,{style:{color:u(n)},children:t}),(0,A.jsx)(`span`,{className:`ove-where`,children:r})]})]})]})}function P(e,t,n=8,r=1){if(e.w<=0||e.h<=0||t.w<=0||t.h<=0)return 1;let i=Math.max(1,t.w-n*2),a=Math.max(1,t.h-n*2);return Math.min(r,i/e.w,a/e.h)}var me=.35,he=.617,F=6,I=.3;function L(e){let t=Math.max(0,e-1);return Math.sqrt(1/(t+F)+I*I)}function R(e){return(e()+e()+e()-1.5)/.5}var ge=1e4;function _e(e){return e.reduce((e,t)=>e+t.size,0)}function ve(e,t,n){let r=150/Math.max(1,t);if(e.length<2)return r;let i=l(n),a=e[0],o=e[e.length-1],s=c(i,o)-c(i,a),u=Math.max(0,o-a-s)/1e3,d=e.length-1;return(u+F*r)/(d+F)}function z(e,t,n,r,i,a){let o=_e(n),s=d(e,n.length),c=new Map;for(let e of r)e.team!==null&&e.team!==void 0&&c.set(e.team,(c.get(e.team)??0)+1);let l=new Map,u=new Map,f=new Map,p=new Map;for(let t of e){if(t.cell_index<0)continue;let e=new Date(t.created_at).getTime();if(a!==void 0&&e>a)continue;let n=l.get(t.attacker_team);n||l.set(t.attacker_team,n=new Set),n.add(t.cell_index);let r=p.get(t.attacker_team);if(r||p.set(t.attacker_team,r=new Set),!r.has(t.cell_index)){r.add(t.cell_index);let n=f.get(t.attacker_team);n?n.push(e):f.set(t.attacker_team,[e])}if(t.result===`hit`||t.result===`sunk`){let e=u.get(t.defender_team);e||u.set(t.defender_team,e=new Set),e.add(t.cell_index)}}return t.map(e=>{let t=(f.get(e)??[]).sort((e,t)=>e-t),n=c.get(e)??1,r=u.get(e)?.size??0;return{team:e,hull:Math.max(0,o-r),totalHull:o,fired:l.get(e)?.size??0,shots:t.length,pace:ve(t,n,i),crew:n,eliminated:s.has(e)}})}function ye(e,t,n,r,i,a,o,s,c){let l=t.length,u=0;for(let e=0;e<l;e++)r[e]=t[e].eliminated?0:t[e].hull,i[e]=t[e].fired,o[e]=t[e].pace*Math.exp(n[e]*R(c)),a[e]=o[e]*c(),s[e]=0,r[e]>0&&u++;for(;u>1;){let t=-1,n=1/0;for(let e=0;e<l;e++)r[e]>0&&!s[e]&&a[e]<n&&(n=a[e],t=e);if(t<0)break;a[t]+=o[t]*(.5+c());let d=e-i[t];if(d<=0){s[t]=1;continue}i[t]++;let f=c()<me;for(let e=0;e<l;e++){if(e===t||r[e]<=0)continue;let n=f?he:r[e]/d;c()<n&&--r[e]===0&&u--}}for(let e=0;e<l;e++)if(r[e]>0)return e;return-1}function B(e,t,n=ge){let r=e.map(e=>e.team),i=e.filter(e=>!e.eliminated&&e.hull>0);if(i.length<=1)return{teams:r,odds:e.map(e=>+(i.length===1&&e.team===i[0].team)),draw:+(i.length===0),decided:!0,fleets:e};let a=t*t,o=e.length,s=new Int32Array(o),c=new Int32Array(o),l=new Float64Array(o),u=new Float64Array(o),d=new Uint8Array(o),f=Float64Array.from(e,e=>L(e.shots)),m=e.map(e=>`${e.team}:${e.hull}:${e.fired}:${e.shots}:${Math.round(e.pace)}`).join(`|`),h=p(v(`odds:${t}:${m}`)),g=Array(o).fill(0),_=0;for(let t=0;t<n;t++){let t=ye(a,e,f,s,c,l,u,d,h);t>=0?g[t]++:_++}return{teams:r,odds:g.map(e=>e/n),draw:_/n,decided:!1,fleets:e}}function be(e,t,n,r,i,a,o,s=60,u=500){if(!a)return[];let d=new Date(a).getTime(),f=l(o),p=[...new Set(e.filter(e=>e.cell_index>=0).map(e=>new Date(e.created_at).getTime()))].sort((e,t)=>e-t);if(p.length===0)return[];let m=Math.max(1,Math.ceil(p.length/s)),h=[];for(let e=0;e<p.length;e+=m)h.push(p[e]);return h[h.length-1]!==p[p.length-1]&&h.push(p[p.length-1]),h.map(a=>{let s=B(z(e,t,n,r,o,a),i,u);return{seconds:Math.max(0,a-d-c(f,a))/1e3,odds:s.odds}})}function V(e){return`${Math.round(e*100)}%`}function xe(e,t,n,r){if(t.length<2||n<=0||r<=0)return[];let i=t[0].seconds,a=t[t.length-1].seconds-i||1,o=e=>(e-i)/a*n,s=t.map(t=>{let n=[],r=0;for(let i=0;i<e.length;i++)r+=t.odds[i]??0,n[i]=r;return n});return e.map((e,n)=>{let i=t.map((e,t)=>[o(e.seconds),r-s[t][n]*r]),a=t.map((e,t)=>[o(e.seconds),r-(n===0?0:s[t][n-1])*r]).reverse();return{team:e,polygon:[...i,...a]}})}function Se(e){return e!==null&&!e.fleets.every(e=>e.shots===0)}function H(e){return e.map((e,t)=>({def:e,index:t})).sort((e,t)=>t.def.size-e.def.size||e.index-t.index)}function U({teamLabel:e,colorHex:t,shipDefs:n,sunkHulls:r,isMine:i}){let a=r,s=a.filter(e=>!e).length;return(0,A.jsxs)(`div`,{className:`ov-fleet${i?` ov-fleet-mine`:``}`,children:[(0,A.jsxs)(`div`,{className:`ov-fleet-head`,children:[(0,A.jsx)(`span`,{className:`ov-team-name`,style:{color:t},children:e}),(0,A.jsxs)(`span`,{className:`ov-afloat${s===0?` ov-dead`:``}`,children:[s,`/`,n.length]})]}),(0,A.jsx)(`div`,{className:`ov-fleet-ships`,children:H(n).map(({def:e,index:n})=>(0,A.jsx)(`span`,{className:`ov-fleet-ship${a[n]?` ov-fleet-ship-sunk`:``}`,title:`${e.name} - ${e.size}${a[n]?`, sunk`:``}`,style:{width:`calc(${e.size} * var(--ov-ship-unit, 9px))`,maskImage:`url(${o(e.name,e.size)})`,WebkitMaskImage:`url(${o(e.name,e.size)})`,backgroundColor:a[n]?`#6b2020`:t}},n))})]})}function W({teams:e,points:t,width:n,height:r,rule:i=!0}){let a=xe(e,t,n,r);return a.length===0?null:(0,A.jsxs)(`svg`,{className:`odds-graph`,width:n,height:r,viewBox:`0 0 ${n} ${r}`,preserveAspectRatio:`none`,"aria-hidden":`true`,children:[a.map(({team:e,polygon:t})=>(0,A.jsx)(`polygon`,{points:t.map(([e,t])=>`${e},${t}`).join(` `),fill:u(e),fillOpacity:.85},e)),i&&(0,A.jsx)(`line`,{x1:0,y1:r/2,x2:n,y2:r/2,stroke:`rgba(255,255,255,0.5)`,strokeWidth:1,strokeDasharray:`4 4`})]})}function G({phaseLabel:e,clock:t,fleets:n,shipDefs:r,highlightTeam:i,showFleets:a,odds:o,opacity:s,textSize:c}){let[l,d]=b(),[p,m]=b(),[h,g]=b(),_=P(m,d,8,c),v=Math.ceil(n.length/2),y=e=>e.map(e=>(0,A.jsx)(U,{teamLabel:f(e.team),colorHex:u(e.team),shipDefs:r,sunkHulls:e.sunkHulls,isMine:i===e.team},e.team));return(0,A.jsx)(`div`,{className:`ovt-fit`,ref:l,children:(0,A.jsxs)(`div`,{className:`ovt-bar`,ref:p,style:{transform:`translate(-50%, -50%) scale(${_})`,opacity:s},children:[(0,A.jsxs)(`div`,{className:`ovt-row`,ref:h,children:[a&&(0,A.jsx)(`div`,{className:`ovt-side ovt-left`,children:y(n.slice(0,v))}),(0,A.jsxs)(`div`,{className:`ovt-clock`,children:[(0,A.jsx)(`span`,{className:`ovt-phase`,children:e}),(0,A.jsx)(`span`,{className:`ovt-time`,children:t})]}),a&&(0,A.jsx)(`div`,{className:`ovt-side ovt-right`,children:y(n.slice(v))})]}),o&&o.points.length>1&&g.w>0&&(0,A.jsxs)(`div`,{className:`ovt-odds`,children:[(0,A.jsx)(W,{teams:o.teams,points:o.points,width:g.w,height:26,rule:!1}),(0,A.jsx)(`div`,{className:`ovt-odds-keys`,children:o.teams.map((e,t)=>(0,A.jsxs)(`span`,{className:`ovt-odds-key`,children:[(0,A.jsx)(`i`,{style:{background:u(e)}}),f(e),` `,V(o.odds[t])]},e))})]})]})})}function K({items:e,heading:t,showLabel:n,plate:r,opacity:i,textSize:a}){let[o,s]=b(),[c,l]=b(),u=P(l,s,8,a);return(0,A.jsx)(`div`,{className:`ovk-fit`,ref:o,children:(0,A.jsxs)(`div`,{className:`ovk-bar${r?` ovk-plate`:``}`,ref:c,style:{transform:`translate(-50%, -50%) scale(${u})`,opacity:i},children:[n&&(0,A.jsx)(`span`,{className:`ovk-label`,children:t}),e.map(e=>(0,A.jsxs)(`span`,{className:`ovk-item`,children:[(0,A.jsx)(`span`,{className:`${e.className} ovk-swatch`,style:e.style,"aria-hidden":!0}),e.label]},e.key))]})})}function q(e,t){let n=new Set,r=new Set;for(let t of e)t.region&&n.add(t.region),t.color&&r.add(t.color);let i=h.filter(e=>n.has(e)),a=g(t).filter(e=>r.has(e.hex));return{items:[...i.map(e=>({key:e,label:y[e],className:`bg-region-${e}`})),...a.map(e=>({key:e.hex,label:e.label,className:``,style:{"--bg-region":e.hex}}))],heading:i.length===0?`Colours`:a.length===0?`Regions`:`Key`}}var J=6,Y=`38cqw`,X=`20.8cqw`,Ce=[{name:`Carrier`,size:5},{name:`Battleship`,size:4},{name:`Cruiser`,size:3},{name:`Submarine`,size:3},{name:`Destroyer`,size:2}],we=[{team:1,sunkHulls:[!1,!0,!1,!1,!0]},{team:2,sunkHulls:[!0,!0,!1,!0,!1]}],Te={teams:[1,2],odds:[.68,.32],points:[{seconds:0,odds:[.5,.5]},{seconds:420,odds:[.42,.58]},{seconds:900,odds:[.55,.45]},{seconds:1320,odds:[.68,.32]}]},Ee={3:`miss`,9:`hit`,14:`miss`,26:`sunk`,32:`hit`},De=[{row:1,col:1,size:3,horizontal:!0,shipName:`Cruiser`,colorHex:`#2f9ee0`},{row:4,col:3,size:2,horizontal:!1,shipName:`Destroyer`,colorHex:`#2f9ee0`}],Z={0:{label:`Godrick`,region:`limgrave`},1:{label:`Rennala`,region:`liurnia`},2:{label:`Radahn`,region:`caelid`},3:{label:`Morgott`,region:`altus`},4:{label:`Rykard`,region:`altus`},5:{label:`Astel`,region:`underground`},6:{label:`Maliketh, the Black Blade`,region:`mountaintops`},7:{label:`Mohg`,region:`underground`},8:{label:`Malenia`,region:`mountaintops`},9:{label:`Messmer`,region:`dlc`},10:{label:`Bayle`,region:`dlc`},11:{label:`Radagon`,region:`altus`},12:{label:`Margit`,region:`limgrave`},13:{label:`Godfrey`,region:`altus`},14:{label:`Rellana`,region:`dlc`},15:{label:`Midra`,region:`dlc`},16:{label:`Placidusax`,region:`mountaintops`},17:{label:`Fortissax`,region:`underground`}},Oe={8:`miss`,13:`hit`,20:`sunk`,21:`sunk`,22:`sunk`,27:`miss`,30:`hit`};function ke({opacity:e,emptyFade:t,textSize:n,alertMark:r,isCaster:i}){let a=q(Object.values(Z).map(e=>({name:e.label,region:e.region})),null);return(0,A.jsxs)(`div`,{className:`ovp-wrap`,children:[(0,A.jsx)(`div`,{className:`ovp-shot`,style:{backgroundImage:`url(/Elden-Battleship/preview/footage.jpg)`}}),(0,A.jsx)(`div`,{className:`ovp-clock`,children:(0,A.jsx)(G,{phaseLabel:`Match`,clock:`18:42`,fleets:we,shipDefs:Ce,highlightTeam:i?null:1,showFleets:!0,odds:i?Te:null,opacity:e,textSize:n})}),(0,A.jsx)(`div`,{className:`ovp-board ovb-board ovl-fade`,style:{"--ovb-cells":J,"--ovb-text":n},children:(0,A.jsx)(`div`,{className:`ovl-fade-stage`,style:{"--ovl-a-bg":e,"--ovl-a-empty":t},children:(0,A.jsx)(s,{boardSize:J,cellVisual:e=>Oe[e]??`empty`,maxVh:Y,maxVw:Y,textBoost:n,growText:!0,ships:[{row:3,col:2,size:3,horizontal:!0,shipName:`Cruiser`,colorHex:`#e08a3c`}],sunkOrientation:new Map([[20,!0],[21,!0],[22,!0]]),cellText:e=>{let t=Z[e];return t?{label:t.label,region:t.region}:null},cellTint:e=>{let t=Z[e];return t?{region:t.region}:null}})})}),!i&&(0,A.jsx)(`div`,{className:`ovp-fleet ovf-board ovl-fade`,children:(0,A.jsx)(`div`,{className:`ovl-fade-stage`,style:{"--ovl-a-bg":e,"--ovl-a-empty":t},children:(0,A.jsx)(s,{boardSize:J,cellVisual:e=>Ee[e]??`empty`,maxVh:X,maxVw:X,ships:De,cellTint:e=>{let t=Z[e];return t?{region:t.region}:null}})})}),(0,A.jsx)(`div`,{className:`ovp-key`,children:(0,A.jsx)(K,{items:a.items,heading:a.heading,showLabel:!0,plate:!0,opacity:e,textSize:n})}),r?(0,A.jsx)(`div`,{className:`ovp-alert`,children:(0,A.jsx)(N,{mark:r,who:`Your crew`,team:1,where:`D7`})}):null]})}var Ae=`overlay_config.toml`;function je(e,t){return`[ingest]
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
display_text = "IGT: {igt}$nDeaths: {deaths}"
show_ingest_tally = true

[timer]
# Regular: elapsed IGT
# Timer: countdown from timer_minutes
# Prep: elapsed IGT offset by prep_minutes
# PrepTimer: preparation countdown followed by timer_minutes countdown
mode="Regular"
prep_minutes=2
timer_minutes=0

`}function Me(e){return _(e)===m}async function Ne(){let{data:e,error:t}=await i.from(`ingest_tokens`).select(`token`).maybeSingle();if(t)throw t;return e?.token??null}async function Q(){let{data:e}=await i.auth.getUser(),t=e.user?.id;if(!t)throw Error(`Not signed in`);let{data:n,error:r}=await i.from(`ingest_tokens`).insert({user_id:t}).select(`token`).single();if(r)throw r;return n.token}async function Pe(){let{data:e}=await i.auth.getUser(),t=e.user?.id;if(!t)throw Error(`Not signed in`);let{error:n}=await i.from(`ingest_tokens`).delete().eq(`user_id`,t);if(n)throw n;return Q()}function Fe(){return`https://zltjdeikpsbohvgtmmsn.supabase.co/functions/v1/auto-fire`}function Ie(e){return je(e,Fe())}function Le(e){return e.length<=12?e:`${e.slice(0,6)}${`·`.repeat(8)}${e.slice(-4)}`}async function Re(){let{data:e,error:t}=await i.from(`overlay_tokens`).select(`token`).maybeSingle();if(t)throw t;return e?.token??null}async function $(){let{data:e}=await i.auth.getUser(),t=e.user?.id;if(!t)throw Error(`Not signed in`);let{data:n,error:r}=await i.from(`overlay_tokens`).insert({user_id:t}).select(`token`).single();if(r)throw r;return n.token}async function ze(){let{data:e}=await i.auth.getUser(),t=e.user?.id;if(!t)throw Error(`Not signed in`);let{error:n}=await i.from(`overlay_tokens`).delete().eq(`user_id`,t);if(n)throw n;return $()}async function Be(e){if(!t||!e)return null;let{data:n,error:r}=await i.rpc(`overlay_session`,{p_token:e});if(r)return console.warn(`[overlay] could not resolve token:`,r.message),null;let a=Array.isArray(n)?n[0]:n;return!a||typeof a.user_id!=`string`?null:{roomCode:typeof a.room_code==`string`?a.room_code:null,status:typeof a.room_status==`string`?a.room_status:null,team:typeof a.team==`number`?a.team:null,userId:a.user_id}}function Ve(e){return e.length<=12?e:`${e.slice(0,6)}${`·`.repeat(8)}${e.slice(-4)}`}export{j as A,Se as C,fe as D,N as E,ne as F,ce as I,le as L,se as M,ie as N,pe as O,re as P,te as R,be as S,P as T,W as _,ze as a,z as b,Q as c,Pe as d,Ae as f,G as g,K as h,Be as i,de as j,M as k,Ne as l,q as m,Re as n,Me as o,ke as p,Ve as r,Ie as s,$ as t,Le as u,U as v,B as w,V as x,H as y};