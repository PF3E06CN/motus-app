(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="184",Yf=0,Pc=1,$f=2,Ws=1,ju=2,kr=3,fi=0,$t=1,Vn=2,kn=0,ur=1,Dc=2,Ic=3,Uc=4,Kf=5,Ai=100,Zf=101,jf=102,Jf=103,Qf=104,eh=200,th=201,nh=202,ih=203,bo=204,To=205,rh=206,sh=207,ah=208,oh=209,lh=210,ch=211,uh=212,dh=213,fh=214,Ao=0,wo=1,Ro=2,mr=3,Co=4,Lo=5,Po=6,Do=7,Ju=0,hh=1,ph=2,Rn=0,Qu=1,ed=2,td=3,nd=4,id=5,rd=6,sd=7,ad=300,Ui=301,gr=302,Fa=303,Oa=304,ma=306,ia=1e3,Hn=1001,Io=1002,Nt=1003,mh=1004,vs=1005,Gt=1006,Ba=1007,Ri=1008,Qt=1009,od=1010,ld=1011,Zr=1012,Rl=1013,Pn=1014,An=1015,qn=1016,Cl=1017,Ll=1018,jr=1020,cd=35902,ud=35899,dd=1021,fd=1022,mn=1023,Yn=1026,Ci=1027,hd=1028,Pl=1029,Ni=1030,Dl=1031,Il=1033,Xs=33776,qs=33777,Ys=33778,$s=33779,Uo=35840,No=35841,Fo=35842,Oo=35843,Bo=36196,zo=37492,Go=37496,Vo=37488,Ho=37489,ra=37490,ko=37491,Wo=37808,Xo=37809,qo=37810,Yo=37811,$o=37812,Ko=37813,Zo=37814,jo=37815,Jo=37816,Qo=37817,el=37818,tl=37819,nl=37820,il=37821,rl=36492,sl=36494,al=36495,ol=36283,ll=36284,sa=36285,cl=36286,gh=3200,ul=0,_h=1,ci="",an="srgb",aa="srgb-linear",oa="linear",nt="srgb",Wi=7680,Nc=519,vh=512,xh=513,Mh=514,Ul=515,Sh=516,yh=517,Nl=518,Eh=519,Fc=35044,Oc="300 es",wn=2e3,Jr=2001;function bh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Th(){const n=la("canvas");return n.style.display="block",n}const Bc={};function zc(...n){const e="THREE."+n.shift();console.log(e,...n)}function pd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pe(...n){n=pd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function je(...n){n=pd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function dl(...n){const e=n.join(" ");e in Bc||(Bc[e]=!0,Pe(...n))}function Ah(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const wh={[Ao]:wo,[Ro]:Po,[Co]:Do,[mr]:Lo,[wo]:Ao,[Po]:Ro,[Do]:Co,[Lo]:mr};class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],za=Math.PI/180,fl=180/Math.PI;function ss(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Rh(n,e){return(n%e+e)%e}function Ga(n,e,t){return(1-t)*n+t*e}function Ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const vc=class vc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vc.prototype.isVector2=!0;let tt=vc;class yr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],u=s[a+0],m=s[a+1],x=s[a+2],E=s[a+3];if(h!==E||l!==u||c!==m||f!==x){let p=l*u+c*m+f*x+h*E;p<0&&(u=-u,m=-m,x=-x,E=-E,p=-p);let d=1-o;if(p<.9995){const M=Math.acos(p),A=Math.sin(M);d=Math.sin(d*M)/A,o=Math.sin(o*M)/A,l=l*d+u*o,c=c*d+m*o,f=f*d+x*o,h=h*d+E*o}else{l=l*d+u*o,c=c*d+m*o,f=f*d+x*o,h=h*d+E*o;const M=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=M,c*=M,f*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],u=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+f*h+l*m-c*u,e[t+1]=l*x+f*u+c*h-o*m,e[t+2]=c*x+f*m+o*u-l*h,e[t+3]=f*x-o*h-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),u=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=u*f*h+c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h-u*m*x;break;case"YXZ":this._x=u*f*h+c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h+u*m*x;break;case"ZXY":this._x=u*f*h-c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h-u*m*x;break;case"ZYX":this._x=u*f*h-c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h+u*m*x;break;case"YZX":this._x=u*f*h+c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h-u*m*x;break;case"XZY":this._x=u*f*h-c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h+u*m*x;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],h=t[10],u=i+o+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xc=class xc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xc.prototype.isVector3=!0;let B=xc;const Va=new B,Gc=new yr,Mc=class Mc{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],m=i[5],x=i[8],E=r[0],p=r[3],d=r[6],M=r[1],A=r[4],y=r[7],R=r[2],T=r[5],P=r[8];return s[0]=a*E+o*M+l*R,s[3]=a*p+o*A+l*T,s[6]=a*d+o*y+l*P,s[1]=c*E+f*M+h*R,s[4]=c*p+f*A+h*T,s[7]=c*d+f*y+h*P,s[2]=u*E+m*M+x*R,s[5]=u*p+m*A+x*T,s[8]=u*d+m*y+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,u=o*l-f*s,m=c*s-a*l,x=t*h+i*u+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=h*E,e[1]=(r*c-f*i)*E,e[2]=(o*i-r*a)*E,e[3]=u*E,e[4]=(f*t-r*l)*E,e[5]=(r*s-o*t)*E,e[6]=m*E,e[7]=(i*l-c*t)*E,e[8]=(a*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mc.prototype.isMatrix3=!0;let Ue=Mc;const Ha=new Ue,Vc=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ch(){const n={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ci?oa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return dl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return dl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[aa]:{primaries:e,whitePoint:i,transfer:oa,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}const $e=Ch();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class Lh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xi===void 0&&(Xi=la("canvas")),Xi.width=e.width,Xi.height=e.height;const r=Xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=la("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wn(t[i]/255)*255):t[i]=Wn(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ph=0;class Fl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ka(r[a].image)):s.push(ka(r[a]))}else s=ka(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ka(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Dh=0;const Wa=new B;class Vt extends Bi{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=Hn,r=Hn,s=Gt,a=Ri,o=mn,l=Qt,c=Vt.DEFAULT_ANISOTROPY,f=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=ss(),this.name="",this.source=new Fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=ad;Vt.DEFAULT_ANISOTROPY=1;const Sc=class Sc{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],m=l[5],x=l[9],E=l[2],p=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-E)<.01&&Math.abs(x-p)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+E)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,y=(m+1)/2,R=(d+1)/2,T=(f+u)/4,P=(h+E)/4,v=(x+p)/4;return A>y&&A>R?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=T/i,s=P/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=v/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=P/s,r=v/s),this.set(i,r,s,t),this}let M=Math.sqrt((p-x)*(p-x)+(h-E)*(h-E)+(u-f)*(u-f));return Math.abs(M)<.001&&(M=1),this.x=(p-x)/M,this.y=(h-E)/M,this.z=(u-f)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sc.prototype.isVector4=!0;let St=Sc;class Ih extends Bi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Vt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Fl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Ih{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class md extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uh extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pa=class pa{constructor(e,t,i,r,s,a,o,l,c,f,h,u,m,x,E,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,f,h,u,m,x,E,p)}set(e,t,i,r,s,a,o,l,c,f,h,u,m,x,E,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=m,d[7]=x,d[11]=E,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*f,m=a*h,x=o*f,E=o*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=u-E*c,t[9]=-o*l,t[2]=E-u*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*f,m=l*h,x=c*f,E=c*h;t[0]=u+E*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=m*o-x,t[6]=E+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*f,m=l*h,x=c*f,E=c*h;t[0]=u-E*o,t[4]=-a*h,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*f,t[9]=E-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*f,m=a*h,x=o*f,E=o*h;t[0]=l*f,t[4]=x*c-m,t[8]=u*c+E,t[1]=l*h,t[5]=E*c+u,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,x=o*l,E=o*c;t[0]=l*f,t[4]=E-u*h,t[8]=x*h+m,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=m*h+x,t[10]=u-E*h}else if(e.order==="XZY"){const u=a*l,m=a*c,x=o*l,E=o*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=u*h+E,t[5]=a*f,t[9]=m*h-x,t[2]=x*h-m,t[6]=o*f,t[10]=E*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nh,e,Fh)}lookAt(e,t,i){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ei.crossVectors(i,jt),ei.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ei.crossVectors(i,jt)),ei.normalize(),xs.crossVectors(jt,ei),r[0]=ei.x,r[4]=xs.x,r[8]=jt.x,r[1]=ei.y,r[5]=xs.y,r[9]=jt.y,r[2]=ei.z,r[6]=xs.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],m=i[13],x=i[2],E=i[6],p=i[10],d=i[14],M=i[3],A=i[7],y=i[11],R=i[15],T=r[0],P=r[4],v=r[8],b=r[12],L=r[1],w=r[5],F=r[9],G=r[13],q=r[2],I=r[6],V=r[10],H=r[14],k=r[3],$=r[7],te=r[11],oe=r[15];return s[0]=a*T+o*L+l*q+c*k,s[4]=a*P+o*w+l*I+c*$,s[8]=a*v+o*F+l*V+c*te,s[12]=a*b+o*G+l*H+c*oe,s[1]=f*T+h*L+u*q+m*k,s[5]=f*P+h*w+u*I+m*$,s[9]=f*v+h*F+u*V+m*te,s[13]=f*b+h*G+u*H+m*oe,s[2]=x*T+E*L+p*q+d*k,s[6]=x*P+E*w+p*I+d*$,s[10]=x*v+E*F+p*V+d*te,s[14]=x*b+E*G+p*H+d*oe,s[3]=M*T+A*L+y*q+R*k,s[7]=M*P+A*w+y*I+R*$,s[11]=M*v+A*F+y*V+R*te,s[15]=M*b+A*G+y*H+R*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],m=e[14],x=e[3],E=e[7],p=e[11],d=e[15],M=l*m-c*u,A=o*m-c*h,y=o*u-l*h,R=a*m-c*f,T=a*u-l*f,P=a*h-o*f;return t*(E*M-p*A+d*y)-i*(x*M-p*R+d*T)+r*(x*A-E*R+d*P)-s*(x*y-E*T+p*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],m=e[11],x=e[12],E=e[13],p=e[14],d=e[15],M=t*o-i*a,A=t*l-r*a,y=t*c-s*a,R=i*l-r*o,T=i*c-s*o,P=r*c-s*l,v=f*E-h*x,b=f*p-u*x,L=f*d-m*x,w=h*p-u*E,F=h*d-m*E,G=u*d-m*p,q=M*G-A*F+y*w+R*L-T*b+P*v;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/q;return e[0]=(o*G-l*F+c*w)*I,e[1]=(r*F-i*G-s*w)*I,e[2]=(E*P-p*T+d*R)*I,e[3]=(u*T-h*P-m*R)*I,e[4]=(l*L-a*G-c*b)*I,e[5]=(t*G-r*L+s*b)*I,e[6]=(p*y-x*P-d*A)*I,e[7]=(f*P-u*y+m*A)*I,e[8]=(a*F-o*L+c*v)*I,e[9]=(i*L-t*F-s*v)*I,e[10]=(x*T-E*y+d*M)*I,e[11]=(h*y-f*T-m*M)*I,e[12]=(o*b-a*w-l*v)*I,e[13]=(t*w-i*b+r*v)*I,e[14]=(E*A-x*R-p*M)*I,e[15]=(f*R-h*A+u*M)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,h=o+o,u=s*c,m=s*f,x=s*h,E=a*f,p=a*h,d=o*h,M=l*c,A=l*f,y=l*h,R=i.x,T=i.y,P=i.z;return r[0]=(1-(E+d))*R,r[1]=(m+y)*R,r[2]=(x-A)*R,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(u+d))*T,r[6]=(p+M)*T,r[7]=0,r[8]=(x+A)*P,r[9]=(p-M)*P,r[10]=(1-(u+E))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=qi.set(r[0],r[1],r[2]).length();const o=qi.set(r[4],r[5],r[6]).length(),l=qi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),dn.copy(this);const c=1/a,f=1/o,h=1/l;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=f,dn.elements[5]*=f,dn.elements[6]*=f,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,t.setFromRotationMatrix(dn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=wn,l=!1){const c=this.elements,f=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),m=(i+r)/(i-r);let x,E;if(l)x=s/(a-s),E=a*s/(a-s);else if(o===wn)x=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===Jr)x=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=wn,l=!1){const c=this.elements,f=2/(t-e),h=2/(i-r),u=-(t+e)/(t-e),m=-(i+r)/(i-r);let x,E;if(l)x=1/(a-s),E=a/(a-s);else if(o===wn)x=-2/(a-s),E=-(a+s)/(a-s);else if(o===Jr)x=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};pa.prototype.isMatrix4=!0;let At=pa;const qi=new B,dn=new At,Nh=new B(0,0,0),Fh=new B(1,1,1),ei=new B,xs=new B,jt=new B,kc=new At,Wc=new yr;class hi{constructor(e=0,t=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class gd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oh=0;const Xc=new B,Yi=new yr,Nn=new At,Ms=new B,Ur=new B,Bh=new B,zh=new yr,qc=new B(1,0,0),Yc=new B(0,1,0),$c=new B(0,0,1),Kc={type:"added"},Gh={type:"removed"},$i={type:"childadded",child:null},Xa={type:"childremoved",child:null};class Ht extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new B,t=new hi,i=new yr,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ue}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis($c,e)}translateOnAxis(e,t){return Xc.copy(e).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis($c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ms.copy(e):Ms.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ur,Ms,this.up):Nn.lookAt(Ms,Ur,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kc),$i.child=e,this.dispatchEvent($i),$i.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gh),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kc),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,Bh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,zh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),u=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new B(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ss extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vh={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,i),d=this._getHandJoint(c,E);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Ya(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=Rh(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ya(a,s,e+1/3),this.g=Ya(a,s,e),this.b=Ya(a,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=an){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const i=_d[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return $e.workingToColorSpace(Bt.copy(this),e),Math.round(Ke(Bt.r*255,0,255))*65536+Math.round(Ke(Bt.g*255,0,255))*256+Math.round(Ke(Bt.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Bt.copy(this),t);const i=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=an){$e.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,r=Bt.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(ys);const i=Ga(ti.h,ys.h,t),r=Ga(ti.s,ys.s,t),s=Ga(ti.l,ys.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Je;Je.NAMES=_d;class Ol{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=i}clone(){return new Ol(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hh extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const fn=new B,Fn=new B,$a=new B,On=new B,Ki=new B,Zi=new B,Zc=new B,Ka=new B,Za=new B,ja=new B,Ja=new St,Qa=new St,eo=new St;class pn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Fn.subVectors(i,t),$a.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Fn),l=fn.dot($a),c=Fn.dot(Fn),f=Fn.dot($a),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,m=(c*l-o*f)*u,x=(a*f-o*l)*u;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ja.setScalar(0),Qa.setScalar(0),eo.setScalar(0),Ja.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,i),eo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ja,s.x),a.addScaledVector(Qa,s.y),a.addScaledVector(eo,s.z),a}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Fn.subVectors(e,t),fn.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),fn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ki.subVectors(r,i),Zi.subVectors(s,i),Ka.subVectors(e,i);const l=Ki.dot(Ka),c=Zi.dot(Ka);if(l<=0&&c<=0)return t.copy(i);Za.subVectors(e,r);const f=Ki.dot(Za),h=Zi.dot(Za);if(f>=0&&h<=f)return t.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(Ki,a);ja.subVectors(e,s);const m=Ki.dot(ja),x=Zi.dot(ja);if(x>=0&&m<=x)return t.copy(s);const E=m*c-l*x;if(E<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(Zi,o);const p=f*x-m*h;if(p<=0&&h-f>=0&&m-x>=0)return Zc.subVectors(s,r),o=(h-f)/(h-f+(m-x)),t.copy(r).addScaledVector(Zc,o);const d=1/(p+E+u);return a=E*d,o=u*d,t.copy(i).addScaledVector(Ki,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class as{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Es.copy(i.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),bs.subVectors(this.max,Nr),ji.subVectors(e.a,Nr),Ji.subVectors(e.b,Nr),Qi.subVectors(e.c,Nr),ni.subVectors(Ji,ji),ii.subVectors(Qi,Ji),_i.subVectors(ji,Qi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-_i.z,_i.y,ni.z,0,-ni.x,ii.z,0,-ii.x,_i.z,0,-_i.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-_i.y,_i.x,0];return!to(t,ji,Ji,Qi,bs)||(t=[1,0,0,0,1,0,0,0,1],!to(t,ji,Ji,Qi,bs))?!1:(Ts.crossVectors(ni,ii),t=[Ts.x,Ts.y,Ts.z],to(t,ji,Ji,Qi,bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new B,new B,new B,new B,new B,new B,new B,new B],hn=new B,Es=new as,ji=new B,Ji=new B,Qi=new B,ni=new B,ii=new B,_i=new B,Nr=new B,bs=new B,Ts=new B,vi=new B;function to(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){vi.fromArray(n,s);const o=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),f=i.dot(vi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Rt=new B,As=new tt;let kh=0;class Ln extends Bi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class vd extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xd extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class cn extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Wh=new as,Fr=new B,no=new B;class Bl{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(no)),this.expandByPoint(Fr.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Xh=0;const sn=new At,io=new Ht,er=new B,Jt=new as,Or=new as,Ut=new B;class In extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bh(e)?xd:vd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(Jt.min,Or.min),Jt.expandByPoint(Ut),Ut.addVectors(Jt.max,Or.max),Jt.expandByPoint(Ut)):(Jt.expandByPoint(Or.min),Jt.expandByPoint(Or.max))}Jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Ut.fromBufferAttribute(o,c),l&&(er.fromBufferAttribute(e,c),Ut.add(er)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new B,l[v]=new B;const c=new B,f=new B,h=new B,u=new tt,m=new tt,x=new tt,E=new B,p=new B;function d(v,b,L){c.fromBufferAttribute(i,v),f.fromBufferAttribute(i,b),h.fromBufferAttribute(i,L),u.fromBufferAttribute(s,v),m.fromBufferAttribute(s,b),x.fromBufferAttribute(s,L),f.sub(c),h.sub(c),m.sub(u),x.sub(u);const w=1/(m.x*x.y-x.x*m.y);isFinite(w)&&(E.copy(f).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(w),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(w),o[v].add(E),o[b].add(E),o[L].add(E),l[v].add(p),l[b].add(p),l[L].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,b=M.length;v<b;++v){const L=M[v],w=L.start,F=L.count;for(let G=w,q=w+F;G<q;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const A=new B,y=new B,R=new B,T=new B;function P(v){R.fromBufferAttribute(r,v),T.copy(R);const b=o[v];A.copy(b),A.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(T,b);const w=y.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,w)}for(let v=0,b=M.length;v<b;++v){const L=M[v],w=L.start,F=L.count;for(let G=w,q=w+F;G<q;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,f=new B,h=new B;if(e)for(let u=0,m=e.count;u<m;u+=3){const x=e.getX(u+0),E=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,p),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,p),o.add(f),l.add(f),c.add(f),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,u=new c.constructor(l.length*f);let m=0,x=0;for(let E=0,p=l.length;E<p;E++){o.isInterleavedBufferAttribute?m=l[E]*o.data.stride+o.offset:m=l[E]*f;for(let d=0;d<f;d++)u[x++]=c[m++]}return new Ln(u,f,h)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const u=c[f],m=e(u,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,m=h.length;u<m;u++)f.push(h[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let qh=0;class os extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=ur,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bo,this.blendDst=To,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bo&&(i.blendSrc=this.blendSrc),this.blendDst!==To&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zn=new B,ro=new B,ws=new B,ri=new B,so=new B,Rs=new B,ao=new B;class Yh{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ro.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(ro);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ws),o=ri.dot(this.direction),l=-ri.dot(ws),c=ri.lengthSq(),f=Math.abs(1-a*a);let h,u,m,x;if(f>0)if(h=a*l-o,u=a*o-l,x=s*f,h>=0)if(u>=-x)if(u<=x){const E=1/f;h*=E,u*=E,m=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;else u<=-x?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c):u<=x?(h=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ro).addScaledVector(ws,u),m}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,s){so.subVectors(t,e),Rs.subVectors(i,e),ao.crossVectors(so,Rs);let a=this.direction.dot(ao),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const l=o*this.direction.dot(Rs.crossVectors(ri,Rs));if(l<0)return null;const c=o*this.direction.dot(so.cross(ri));if(c<0||l+c>a)return null;const f=-o*ri.dot(ao);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Md extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jc=new At,xi=new Yh,Cs=new Bl,Jc=new B,Ls=new B,Ps=new B,Ds=new B,oo=new B,Is=new B,Qc=new B,Us=new B;class un extends Ht{constructor(e=new In,t=new Md){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(oo.fromBufferAttribute(h,e),a?Is.addScaledVector(oo,f):Is.addScaledVector(oo.sub(t),f))}t.add(Is)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(Cs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Cs,Jc)===null||xi.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(jc.copy(s).invert(),xi.copy(e.ray).applyMatrix4(jc),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,E=u.length;x<E;x++){const p=u[x],d=a[p.materialIndex],M=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,R=A;y<R;y+=3){const T=o.getX(y),P=o.getX(y+1),v=o.getX(y+2);r=Ns(this,d,e,i,c,f,h,T,P,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let p=x,d=E;p<d;p+=3){const M=o.getX(p),A=o.getX(p+1),y=o.getX(p+2);r=Ns(this,a,e,i,c,f,h,M,A,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,E=u.length;x<E;x++){const p=u[x],d=a[p.materialIndex],M=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,R=A;y<R;y+=3){const T=y,P=y+1,v=y+2;r=Ns(this,d,e,i,c,f,h,T,P,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let p=x,d=E;p<d;p+=3){const M=p,A=p+1,y=p+2;r=Ns(this,a,e,i,c,f,h,M,A,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function $h(n,e,t,i,r,s,a,o){let l;if(e.side===$t?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===fi,o),l===null)return null;Us.copy(o),Us.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Us);return c<t.near||c>t.far?null:{distance:c,point:Us.clone(),object:n}}function Ns(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ls),n.getVertexPosition(l,Ps),n.getVertexPosition(c,Ds);const f=$h(n,e,t,i,Ls,Ps,Ds,Qc);if(f){const h=new B;pn.getBarycoord(Qc,Ls,Ps,Ds,h),r&&(f.uv=pn.getInterpolatedAttribute(r,o,l,c,h,new tt)),s&&(f.uv1=pn.getInterpolatedAttribute(s,o,l,c,h,new tt)),a&&(f.normal=pn.getInterpolatedAttribute(a,o,l,c,h,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new B,materialIndex:0};pn.getNormal(Ls,Ps,Ds,u.normal),f.face=u,f.barycoord=h}return f}class Kh extends Vt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Nt,f=Nt,h,u){super(null,a,o,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lo=new B,Zh=new B,jh=new Ue;class Ei{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=lo.subVectors(i,t).cross(Zh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(lo),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jh.getNormalMatrix(e),r=this.coplanarPoint(lo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Bl,Jh=new tt(.5,.5),Fs=new B;class zl{constructor(e=new Ei,t=new Ei,i=new Ei,r=new Ei,s=new Ei,a=new Ei){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],u=s[6],m=s[7],x=s[8],E=s[9],p=s[10],d=s[11],M=s[12],A=s[13],y=s[14],R=s[15];if(r[0].setComponents(c-a,m-f,d-x,R-M).normalize(),r[1].setComponents(c+a,m+f,d+x,R+M).normalize(),r[2].setComponents(c+o,m+h,d+E,R+A).normalize(),r[3].setComponents(c-o,m-h,d-E,R-A).normalize(),i)r[4].setComponents(l,u,p,y).normalize(),r[5].setComponents(c-l,m-u,d-p,R-y).normalize();else if(r[4].setComponents(c-l,m-u,d-p,R-y).normalize(),t===wn)r[5].setComponents(c+l,m+u,d+p,R+y).normalize();else if(t===Jr)r[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=Jh.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sd extends Vt{constructor(e=[],t=Ui,i,r,s,a,o,l,c,f){super(e,t,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qh extends Vt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _r extends Vt{constructor(e,t,i=Pn,r,s,a,o=Nt,l=Nt,c,f=Yn,h=1){if(f!==Yn&&f!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ep extends _r{constructor(e,t=Pn,i=Ui,r,s,a=Nt,o=Nt,l,c=Yn){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yd extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ls extends In{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let u=0,m=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(f,3)),this.setAttribute("uv",new cn(h,2));function x(E,p,d,M,A,y,R,T,P,v,b){const L=y/P,w=R/v,F=y/2,G=R/2,q=T/2,I=P+1,V=v+1;let H=0,k=0;const $=new B;for(let te=0;te<V;te++){const oe=te*w-G;for(let xe=0;xe<I;xe++){const ie=xe*L-F;$[E]=ie*M,$[p]=oe*A,$[d]=q,c.push($.x,$.y,$.z),$[E]=0,$[p]=0,$[d]=T>0?1:-1,f.push($.x,$.y,$.z),h.push(xe/P),h.push(1-te/v),H+=1}}for(let te=0;te<v;te++)for(let oe=0;oe<P;oe++){const xe=u+oe+I*te,ie=u+oe+I*(te+1),Be=u+(oe+1)+I*(te+1),Te=u+(oe+1)+I*te;l.push(xe,ie,Te),l.push(ie,Be,Te),k+=6}o.addGroup(m,k,b),m+=k,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class vr extends In{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,u=t/l,m=[],x=[],E=[],p=[];for(let d=0;d<f;d++){const M=d*u-a;for(let A=0;A<c;A++){const y=A*h-s;x.push(y,-M,0),E.push(0,0,1),p.push(A/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const A=M+c*d,y=M+c*(d+1),R=M+1+c*(d+1),T=M+1+c*d;m.push(A,y,T),m.push(y,R,T)}this.setIndex(m),this.setAttribute("position",new cn(x,3)),this.setAttribute("normal",new cn(E,3)),this.setAttribute("uv",new cn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gl extends In{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new B,u=new B,m=[],x=[],E=[],p=[];for(let d=0;d<=i;d++){const M=[],A=d/i;let y=0;d===0&&a===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const T=R/t;h.x=-e*Math.cos(r+T*s)*Math.sin(a+A*o),h.y=e*Math.cos(a+A*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+A*o),x.push(h.x,h.y,h.z),u.copy(h).normalize(),E.push(u.x,u.y,u.z),p.push(T+y,1-A),M.push(c++)}f.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){const A=f[d][M+1],y=f[d][M],R=f[d+1][M],T=f[d+1][M+1];(d!==0||a>0)&&m.push(A,y,T),(d!==i-1||l<Math.PI)&&m.push(y,R,T)}this.setIndex(m),this.setAttribute("position",new cn(x,3)),this.setAttribute("normal",new cn(E,3)),this.setAttribute("uv",new cn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(eu(r))r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(eu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=xr(n[t]);for(const r in i)e[r]=i[r]}return e}function eu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function tp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ed(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const np={clone:xr,merge:Wt};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sp extends Dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Br extends os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ap extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class op extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bd extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const co=new At,tu=new B,nu=new B;class lp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(tu),nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nu),t.updateMatrixWorld(),co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Jr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Os=new B,Bs=new yr,Sn=new B;class Td extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Os,Bs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Bs,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Os,Bs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Bs,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new B,iu=new tt,ru=new tt;class on extends Td{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fl*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,iu,ru),t.subVectors(ru,iu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(za*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Vl extends Td{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cp extends lp{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class up extends bd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new cp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class dp extends bd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const tr=-90,nr=1;class fp extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(tr,nr,e,t);r.layers=this.layers,this.add(r);const s=new on(tr,nr,e,t);s.layers=this.layers,this.add(s);const a=new on(tr,nr,e,t);a.layers=this.layers,this.add(a);const o=new on(tr,nr,e,t);o.layers=this.layers,this.add(o);const l=new on(tr,nr,e,t);l.layers=this.layers,this.add(l);const c=new on(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,u,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class hp extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yc=class yc{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};yc.prototype.isMatrix2=!0;let su=yc;function au(n,e,t,i){const r=pp(i);switch(t){case dd:return n*e;case hd:return n*e/r.components*r.byteLength;case Pl:return n*e/r.components*r.byteLength;case Ni:return n*e*2/r.components*r.byteLength;case Dl:return n*e*2/r.components*r.byteLength;case fd:return n*e*3/r.components*r.byteLength;case mn:return n*e*4/r.components*r.byteLength;case Il:return n*e*4/r.components*r.byteLength;case Xs:case qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ys:case $s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case No:case Oo:return Math.max(n,16)*Math.max(e,8)/4;case Uo:case Fo:return Math.max(n,8)*Math.max(e,8)/2;case Bo:case zo:case Vo:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:case ra:case ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case rl:case sl:case al:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ol:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sa:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pp(n){switch(n){case Qt:case od:return{byteLength:1,components:1};case Zr:case ld:case qn:return{byteLength:2,components:1};case Cl:case Ll:return{byteLength:2,components:4};case Pn:case Rl:case An:return{byteLength:4,components:1};case cd:case ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ad(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mp(n){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,f);else{h.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<h.length;m++){const x=h[u],E=h[m];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++u,h[u]=E)}h.length=u+1;for(let m=0,x=h.length;m<x;m++){const E=h[m];n.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,om=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Am=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_g=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Eg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ng=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$g=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:gp,alphahash_pars_fragment:_p,alphamap_fragment:vp,alphamap_pars_fragment:xp,alphatest_fragment:Mp,alphatest_pars_fragment:Sp,aomap_fragment:yp,aomap_pars_fragment:Ep,batching_pars_vertex:bp,batching_vertex:Tp,begin_vertex:Ap,beginnormal_vertex:wp,bsdfs:Rp,iridescence_fragment:Cp,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Dp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Up,color_fragment:Np,color_pars_fragment:Fp,color_pars_vertex:Op,color_vertex:Bp,common:zp,cube_uv_reflection_fragment:Gp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Hp,displacementmap_vertex:kp,emissivemap_fragment:Wp,emissivemap_pars_fragment:Xp,colorspace_fragment:qp,colorspace_pars_fragment:Yp,envmap_fragment:$p,envmap_common_pars_fragment:Kp,envmap_pars_fragment:Zp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:lm,envmap_vertex:Jp,fog_vertex:Qp,fog_pars_vertex:em,fog_fragment:tm,fog_pars_fragment:nm,gradientmap_pars_fragment:im,lightmap_pars_fragment:rm,lights_lambert_fragment:sm,lights_lambert_pars_fragment:am,lights_pars_begin:om,lights_toon_fragment:cm,lights_toon_pars_fragment:um,lights_phong_fragment:dm,lights_phong_pars_fragment:fm,lights_physical_fragment:hm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:_m,lightprobes_pars_fragment:vm,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:ym,map_fragment:Em,map_pars_fragment:bm,map_particle_fragment:Tm,map_particle_pars_fragment:Am,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Rm,morphinstance_vertex:Cm,morphcolor_vertex:Lm,morphnormal_vertex:Pm,morphtarget_pars_vertex:Dm,morphtarget_vertex:Im,normal_fragment_begin:Um,normal_fragment_maps:Nm,normal_pars_fragment:Fm,normal_pars_vertex:Om,normal_vertex:Bm,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Hm,iridescence_pars_fragment:km,opaque_fragment:Wm,packing:Xm,premultiplied_alpha_fragment:qm,project_vertex:Ym,dithering_fragment:$m,dithering_pars_fragment:Km,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:jm,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:Qm,shadowmap_vertex:eg,shadowmask_pars_fragment:tg,skinbase_vertex:ng,skinning_pars_vertex:ig,skinning_vertex:rg,skinnormal_vertex:sg,specularmap_fragment:ag,specularmap_pars_fragment:og,tonemapping_fragment:lg,tonemapping_pars_fragment:cg,transmission_fragment:ug,transmission_pars_fragment:dg,uv_pars_fragment:fg,uv_pars_vertex:hg,uv_vertex:pg,worldpos_vertex:mg,background_vert:gg,background_frag:_g,backgroundCube_vert:vg,backgroundCube_frag:xg,cube_vert:Mg,cube_frag:Sg,depth_vert:yg,depth_frag:Eg,distance_vert:bg,distance_frag:Tg,equirect_vert:Ag,equirect_frag:wg,linedashed_vert:Rg,linedashed_frag:Cg,meshbasic_vert:Lg,meshbasic_frag:Pg,meshlambert_vert:Dg,meshlambert_frag:Ig,meshmatcap_vert:Ug,meshmatcap_frag:Ng,meshnormal_vert:Fg,meshnormal_frag:Og,meshphong_vert:Bg,meshphong_frag:zg,meshphysical_vert:Gg,meshphysical_frag:Vg,meshtoon_vert:Hg,meshtoon_frag:kg,points_vert:Wg,points_frag:Xg,shadow_vert:qg,shadow_frag:Yg,sprite_vert:$g,sprite_frag:Kg},he={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},bn={basic:{uniforms:Wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Wt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Wt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Wt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Wt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Wt([he.points,he.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Wt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Wt([he.common,he.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Wt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Wt([he.sprite,he.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Wt([he.common,he.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Wt([he.lights,he.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};bn.physical={uniforms:Wt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const zs={r:0,b:0,g:0},Zg=new At,wd=new Ue;wd.set(-1,0,0,0,1,0,0,0,1);function jg(n,e,t,i,r,s){const a=new Je(0);let o=r===!0?0:1,l,c,f=null,h=0,u=null;function m(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const y=M.backgroundBlurriness>0;A=e.get(A,y)}return A}function x(M){let A=!1;const y=m(M);y===null?p(a,o):y&&y.isColor&&(p(y,1),A=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(M,A){const y=m(A);y&&(y.isCubeTexture||y.mapping===ma)?(c===void 0&&(c=new un(new ls(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:xr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wd),c.material.toneMapped=$e.getTransfer(y.colorSpace)!==nt,(f!==y||h!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new un(new vr(2,2),new Dn({name:"BackgroundMaterial",uniforms:xr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=$e.getTransfer(y.colorSpace)!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,A){M.getRGB(zs,Ed(n)),t.buffers.color.setClear(zs.r,zs.g,zs.b,A,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:x,addToRenderList:E,dispose:d}}function Jg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(w,F,G,q,I){let V=!1;const H=h(w,q,G,F);s!==H&&(s=H,c(s.object)),V=m(w,q,G,I),V&&x(w,q,G,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(w,F,G,q),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function f(w){return n.deleteVertexArray(w)}function h(w,F,G,q){const I=q.wireframe===!0;let V=i[F.id];V===void 0&&(V={},i[F.id]=V);const H=w.isInstancedMesh===!0?w.id:0;let k=V[H];k===void 0&&(k={},V[H]=k);let $=k[G.id];$===void 0&&($={},k[G.id]=$);let te=$[I];return te===void 0&&(te=u(l()),$[I]=te),te}function u(w){const F=[],G=[],q=[];for(let I=0;I<t;I++)F[I]=0,G[I]=0,q[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:q,object:w,attributes:{},index:null}}function m(w,F,G,q){const I=s.attributes,V=F.attributes;let H=0;const k=G.getAttributes();for(const $ in k)if(k[$].location>=0){const oe=I[$];let xe=V[$];if(xe===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor)),oe===void 0||oe.attribute!==xe||xe&&oe.data!==xe.data)return!0;H++}return s.attributesNum!==H||s.index!==q}function x(w,F,G,q){const I={},V=F.attributes;let H=0;const k=G.getAttributes();for(const $ in k)if(k[$].location>=0){let oe=V[$];oe===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(oe=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(oe=w.instanceColor));const xe={};xe.attribute=oe,oe&&oe.data&&(xe.data=oe.data),I[$]=xe,H++}s.attributes=I,s.attributesNum=H,s.index=q}function E(){const w=s.newAttributes;for(let F=0,G=w.length;F<G;F++)w[F]=0}function p(w){d(w,0)}function d(w,F){const G=s.newAttributes,q=s.enabledAttributes,I=s.attributeDivisors;G[w]=1,q[w]===0&&(n.enableVertexAttribArray(w),q[w]=1),I[w]!==F&&(n.vertexAttribDivisor(w,F),I[w]=F)}function M(){const w=s.newAttributes,F=s.enabledAttributes;for(let G=0,q=F.length;G<q;G++)F[G]!==w[G]&&(n.disableVertexAttribArray(G),F[G]=0)}function A(w,F,G,q,I,V,H){H===!0?n.vertexAttribIPointer(w,F,G,I,V):n.vertexAttribPointer(w,F,G,q,I,V)}function y(w,F,G,q){E();const I=q.attributes,V=G.getAttributes(),H=F.defaultAttributeValues;for(const k in V){const $=V[k];if($.location>=0){let te=I[k];if(te===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(te=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(te=w.instanceColor)),te!==void 0){const oe=te.normalized,xe=te.itemSize,ie=e.get(te);if(ie===void 0)continue;const Be=ie.buffer,Te=ie.type,J=ie.bytesPerElement,ge=Te===n.INT||Te===n.UNSIGNED_INT||te.gpuType===Rl;if(te.isInterleavedBufferAttribute){const le=te.data,Ce=le.stride,Ie=te.offset;if(le.isInstancedInterleavedBuffer){for(let Le=0;Le<$.locationSize;Le++)d($.location+Le,le.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<$.locationSize;Le++)p($.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let Le=0;Le<$.locationSize;Le++)A($.location+Le,xe/$.locationSize,Te,oe,Ce*J,(Ie+xe/$.locationSize*Le)*J,ge)}else{if(te.isInstancedBufferAttribute){for(let le=0;le<$.locationSize;le++)d($.location+le,te.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let le=0;le<$.locationSize;le++)p($.location+le);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let le=0;le<$.locationSize;le++)A($.location+le,xe/$.locationSize,Te,oe,xe*J,xe/$.locationSize*le*J,ge)}}else if(H!==void 0){const oe=H[k];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv($.location,oe);break;case 3:n.vertexAttrib3fv($.location,oe);break;case 4:n.vertexAttrib4fv($.location,oe);break;default:n.vertexAttrib1fv($.location,oe)}}}}M()}function R(){b();for(const w in i){const F=i[w];for(const G in F){const q=F[G];for(const I in q){const V=q[I];for(const H in V)f(V[H].object),delete V[H];delete q[I]}}delete i[w]}}function T(w){if(i[w.id]===void 0)return;const F=i[w.id];for(const G in F){const q=F[G];for(const I in q){const V=q[I];for(const H in V)f(V[H].object),delete V[H];delete q[I]}}delete i[w.id]}function P(w){for(const F in i){const G=i[F];for(const q in G){const I=G[q];if(I[w.id]===void 0)continue;const V=I[w.id];for(const H in V)f(V[H].object),delete V[H];delete I[w.id]}}}function v(w){for(const F in i){const G=i[F],q=w.isInstancedMesh===!0?w.id:0,I=G[q];if(I!==void 0){for(const V in I){const H=I[V];for(const k in H)f(H[k].object),delete H[k];delete I[V]}delete G[q],Object.keys(G).length===0&&delete i[F]}}}function b(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:p,disableUnusedAttributes:M}}function Qg(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),t.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let m=0;m<f;m++)u+=c[m];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function e_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==mn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const v=P===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Qt&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==An&&!v)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Pe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:y,maxSamples:R,samples:T}}function t_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ei,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||i!==0||r;return r=u,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=f(h,u,0)},this.setState=function(h,u,m){const x=h.clippingPlanes,E=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!r||x===null||x.length===0||s&&!p)s?f(null):c();else{const M=s?0:i,A=M*4;let y=d.clippingState||null;l.value=y,y=f(x,u,A,m);for(let R=0;R!==A;++R)y[R]=t[R];d.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,m,x){const E=h!==null?h.length:0;let p=null;if(E!==0){if(p=l.value,x!==!0||p===null){const d=m+E*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,y=m;A!==E;++A,y+=4)a.copy(h[A]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}const ui=4,ou=[.125,.215,.35,.446,.526,.582],wi=20,n_=256,zr=new Vl,lu=new Je;let uo=null,fo=0,ho=0,po=!1;const i_=new B;class cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=i_}=s;uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uo,fo,ho),this._renderer.xr.enabled=po,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:qn,format:mn,colorSpace:aa,depthBuffer:!1},r=uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=r_(s)),this._blurMaterial=a_(s,e,t),this._ggxMaterial=s_(s,e,t)}return r}_compileMaterial(e){const t=new un(new In,e);this._renderer.compile(t,zr)}_sceneToCubeUV(e,t,i,r,s){const l=new on(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(lu),h.toneMapping=Rn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new un(new ls,new Md({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,p=E.material;let d=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,d=!0):(p.color.copy(lu),d=!0);for(let A=0;A<6;A++){const y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[A],s.y,s.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[A]));const R=this._cubeSize;ir(r,y*R,A>2?R:0,R,R),h.setRenderTarget(r),d&&h.render(E,l),h.render(e,l)}h.toneMapping=m,h.autoClear=u,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ui||e.mapping===gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ir(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,zr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=0+c*1.25,m=h*u,{_lodMax:x}=this,E=this._sizeLods[i],p=3*E*(i>x-ui?i-x+ui:0),d=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-t,ir(s,p,d,3*E,2*E),r.setRenderTarget(s),r.render(o,zr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,ir(e,p,d,3*E,2*E),r.setRenderTarget(e),r.render(o,zr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wi-1),E=s/x,p=isFinite(s)?1+Math.floor(f*E):wi;p>wi&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wi}`);const d=[];let M=0;for(let P=0;P<wi;++P){const v=P/E,b=Math.exp(-v*v/2);d.push(b),P===0?M+=b:P<p&&(M+=2*b)}for(let P=0;P<d.length;P++)d[P]=d[P]/M;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:A}=this;u.dTheta.value=x,u.mipInt.value=A-i;const y=this._sizeLods[r],R=3*y*(r>A-ui?r-A+ui:0),T=4*(this._cubeSize-y);ir(t,R,T,3*y,2*y),l.setRenderTarget(t),l.render(h,zr)}}function r_(n){const e=[],t=[],i=[];let r=n;const s=n-ui+1+ou.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-ui?l=ou[a-n+ui-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,x=6,E=3,p=2,d=1,M=new Float32Array(E*x*m),A=new Float32Array(p*x*m),y=new Float32Array(d*x*m);for(let T=0;T<m;T++){const P=T%3*2/3-1,v=T>2?0:-1,b=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];M.set(b,E*x*T),A.set(u,p*x*T);const L=[T,T,T,T,T,T];y.set(L,d*x*T)}const R=new In;R.setAttribute("position",new Ln(M,E)),R.setAttribute("uv",new Ln(A,p)),R.setAttribute("faceIndex",new Ln(y,d)),i.push(new un(R,null)),r>ui&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function uu(n,e,t){const i=new Cn(n,e,t);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ir(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function s_(n,e,t){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ga(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function a_(n,e,t){const i=new Float32Array(wi),r=new B(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function du(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function fu(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ga(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Rd extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ls(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:kn});s.uniforms.tEquirect.value=t;const a=new un(r,s),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Gt),new fp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function o_(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===Fa||m===Oa)if(e.has(u)){const x=e.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const E=new Rd(x.height);return E.fromEquirectangularTexture(n,u),e.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,x=m===Fa||m===Oa,E=m===Ui||m===gr;if(x||E){let p=t.get(u);const d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new cu(n)),p=x?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const M=u.image;return x&&M&&M.height>0||E&&M&&l(M)?(i===null&&(i=new cu(n)),p=x?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",f),p.texture):null}}}return u}function o(u,m){return m===Fa?u.mapping=Ui:m===Oa&&(u.mapping=gr),u}function l(u){let m=0;const x=6;for(let E=0;E<x;E++)u[E]!==void 0&&m++;return m===x}function c(u){const m=u.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function l_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&dl("WebGLRenderer: "+i+" extension not supported."),r}}}function c_(n,e,t,i){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)e.update(u[m],n.ARRAY_BUFFER)}function c(h){const u=[],m=h.index,x=h.attributes.position;let E=0;if(x===void 0)return;if(m!==null){const M=m.array;E=m.version;for(let A=0,y=M.length;A<y;A+=3){const R=M[A+0],T=M[A+1],P=M[A+2];u.push(R,T,T,P,P,R)}}else{const M=x.array;E=x.version;for(let A=0,y=M.length/3-1;A<y;A+=3){const R=A+0,T=A+1,P=A+2;u.push(R,T,T,P,P,R)}}const p=new(x.count>=65535?xd:vd)(u,1);p.version=E;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function f(h){const u=s.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function u_(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){n.drawElements(i,u,s,h*a),t.update(u,i,1)}function c(h,u,m){m!==0&&(n.drawElementsInstanced(i,u,s,h*a,m),t.update(u,i,m))}function f(h,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,m);let E=0;for(let p=0;p<m;p++)E+=u[p];t.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function d_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function f_(n,e,t){const i=new WeakMap,r=new St;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let b=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),x===!0&&(A=2),E===!0&&(A=3);let y=o.attributes.position.count*A,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*R*4*h),P=new md(T,y,R,h);P.type=An,P.needsUpdate=!0;const v=A*4;for(let L=0;L<h;L++){const w=p[L],F=d[L],G=M[L],q=y*R*4*L;for(let I=0;I<w.count;I++){const V=I*v;m===!0&&(r.fromBufferAttribute(w,I),T[q+V+0]=r.x,T[q+V+1]=r.y,T[q+V+2]=r.z,T[q+V+3]=0),x===!0&&(r.fromBufferAttribute(F,I),T[q+V+4]=r.x,T[q+V+5]=r.y,T[q+V+6]=r.z,T[q+V+7]=0),E===!0&&(r.fromBufferAttribute(G,I),T[q+V+8]=r.x,T[q+V+9]=r.y,T[q+V+10]=r.z,T[q+V+11]=G.itemSize===4?r.w:1)}}u={count:h,texture:P,size:new tt(y,R)},i.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let E=0;E<c.length;E++)m+=c[E];const x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function h_(n,e,t,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return u}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const p_={[Qu]:"LINEAR_TONE_MAPPING",[ed]:"REINHARD_TONE_MAPPING",[td]:"CINEON_TONE_MAPPING",[nd]:"ACES_FILMIC_TONE_MAPPING",[rd]:"AGX_TONE_MAPPING",[sd]:"NEUTRAL_TONE_MAPPING",[id]:"CUSTOM_TONE_MAPPING"};function m_(n,e,t,i,r){const s=new Cn(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new _r(e,t):void 0}),a=new Cn(e,t,{type:qn,depthBuffer:!1,stencilBuffer:!1}),o=new In;o.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new cn([0,2,0,0,2,0],2));const l=new sp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new un(o,l),f=new Vl(-1,1,1,-1,0,1);let h=null,u=null,m=!1,x,E=null,p=[],d=!1;this.setSize=function(M,A){s.setSize(M,A),a.setSize(M,A);for(let y=0;y<p.length;y++){const R=p[y];R.setSize&&R.setSize(M,A)}},this.setEffects=function(M){p=M,d=p.length>0&&p[0].isRenderPass===!0;const A=s.width,y=s.height;for(let R=0;R<p.length;R++){const T=p[R];T.setSize&&T.setSize(A,y)}},this.begin=function(M,A){if(m||M.toneMapping===Rn&&p.length===0)return!1;if(E=A,A!==null){const y=A.width,R=A.height;(s.width!==y||s.height!==R)&&this.setSize(y,R)}return d===!1&&M.setRenderTarget(s),x=M.toneMapping,M.toneMapping=Rn,!0},this.hasRenderPass=function(){return d},this.end=function(M,A){M.toneMapping=x,m=!0;let y=s,R=a;for(let T=0;T<p.length;T++){const P=p[T];if(P.enabled!==!1&&(P.render(M,R,y,A),P.needsSwap!==!1)){const v=y;y=R,R=v}}if(h!==M.outputColorSpace||u!==M.toneMapping){h=M.outputColorSpace,u=M.toneMapping,l.defines={},$e.getTransfer(h)===nt&&(l.defines.SRGB_TRANSFER="");const T=p_[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(E),M.render(c,f),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Cd=new Vt,hl=new _r(1,1),Ld=new md,Pd=new Uh,Dd=new Sd,hu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function Er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=hu[r];if(s===void 0&&(s=new Float32Array(r),hu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _a(n,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function g_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function x_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function M_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;_u.set(i),n.uniformMatrix2fv(this.addr,!1,_u),It(t,i)}}function S_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;gu.set(i),n.uniformMatrix3fv(this.addr,!1,gu),It(t,i)}}function y_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;mu.set(i),n.uniformMatrix4fv(this.addr,!1,mu),It(t,i)}}function E_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function b_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function A_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function w_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function R_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function C_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function L_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function P_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(hl.compareFunction=t.isReversedDepthBuffer()?Nl:Ul,s=hl):s=Cd,t.setTexture2D(e||s,r)}function D_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Pd,r)}function I_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Dd,r)}function U_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ld,r)}function N_(n){switch(n){case 5126:return g_;case 35664:return __;case 35665:return v_;case 35666:return x_;case 35674:return M_;case 35675:return S_;case 35676:return y_;case 5124:case 35670:return E_;case 35667:case 35671:return b_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return w_;case 36294:return R_;case 36295:return C_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return U_}}function F_(n,e){n.uniform1fv(this.addr,e)}function O_(n,e){const t=Er(e,this.size,2);n.uniform2fv(this.addr,t)}function B_(n,e){const t=Er(e,this.size,3);n.uniform3fv(this.addr,t)}function z_(n,e){const t=Er(e,this.size,4);n.uniform4fv(this.addr,t)}function G_(n,e){const t=Er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function V_(n,e){const t=Er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function H_(n,e){const t=Er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function k_(n,e){n.uniform1iv(this.addr,e)}function W_(n,e){n.uniform2iv(this.addr,e)}function X_(n,e){n.uniform3iv(this.addr,e)}function q_(n,e){n.uniform4iv(this.addr,e)}function Y_(n,e){n.uniform1uiv(this.addr,e)}function $_(n,e){n.uniform2uiv(this.addr,e)}function K_(n,e){n.uniform3uiv(this.addr,e)}function Z_(n,e){n.uniform4uiv(this.addr,e)}function j_(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=hl:a=Cd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function J_(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Pd,s[a])}function Q_(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Dd,s[a])}function e0(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ld,s[a])}function t0(n){switch(n){case 5126:return F_;case 35664:return O_;case 35665:return B_;case 35666:return z_;case 35674:return G_;case 35675:return V_;case 35676:return H_;case 5124:case 35670:return k_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return Y_;case 36294:return $_;case 36295:return K_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return e0}}class n0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=N_(t.type)}}class i0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t0(t.type)}}class r0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function vu(n,e){n.seq.push(e),n.map[e.id]=e}function s0(n,e,t){const i=n.name,r=i.length;for(mo.lastIndex=0;;){const s=mo.exec(i),a=mo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){vu(t,c===void 0?new n0(o,n,e):new i0(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new r0(o),vu(t,h)),t=h}}}class Ks{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);s0(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function xu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const a0=37297;let o0=0;function l0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Mu=new Ue;function c0(n){$e._getMatrix(Mu,$e.workingColorSpace,n);const e=`mat3( ${Mu.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case oa:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Su(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+l0(n.getShaderSource(e),o)}else return s}function u0(n,e){const t=c0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const d0={[Qu]:"Linear",[ed]:"Reinhard",[td]:"Cineon",[nd]:"ACESFilmic",[rd]:"AgX",[sd]:"Neutral",[id]:"Custom"};function f0(n,e){const t=d0[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gs=new B;function h0(){$e.getLuminanceCoefficients(Gs);const n=Gs.x.toFixed(4),e=Gs.y.toFixed(4),t=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function m0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function g0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Wr(n){return n!==""}function yu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(n){return n.replace(_0,x0)}const v0=new Map;function x0(n,e){let t=Ge[e];if(t===void 0){const i=v0.get(e);if(i!==void 0)t=Ge[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pl(t)}const M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(n){return n.replace(M0,S0)}function S0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const y0={[Ws]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function E0(n){return y0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const b0={[Ui]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function T0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":b0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const A0={[gr]:"ENVMAP_MODE_REFRACTION"};function w0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":A0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const R0={[Ju]:"ENVMAP_BLENDING_MULTIPLY",[hh]:"ENVMAP_BLENDING_MIX",[ph]:"ENVMAP_BLENDING_ADD"};function C0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":R0[n.combine]||"ENVMAP_BLENDING_NONE"}function L0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function P0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=E0(t),c=T0(t),f=w0(t),h=C0(t),u=L0(t),m=p0(t),x=m0(s),E=r.createProgram();let p,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Wr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Wr).join(`
`),d.length>0&&(d+=`
`)):(p=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),d=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Rn?f0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,u0("linearToOutputTexel",t.outputColorSpace),h0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),a=pl(a),a=yu(a,t),a=Eu(a,t),o=pl(o),o=yu(o,t),o=Eu(o,t),a=bu(a),o=bu(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=M+p+a,y=M+d+o,R=xu(r,r.VERTEX_SHADER,A),T=xu(r,r.FRAGMENT_SHADER,y);r.attachShader(E,R),r.attachShader(E,T),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function P(w){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(E)||"",G=r.getShaderInfoLog(R)||"",q=r.getShaderInfoLog(T)||"",I=F.trim(),V=G.trim(),H=q.trim();let k=!0,$=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,R,T);else{const te=Su(r,R,"vertex"),oe=Su(r,T,"fragment");je("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+te+`
`+oe)}else I!==""?Pe("WebGLProgram: Program Info Log:",I):(V===""||H==="")&&($=!1);$&&(w.diagnostics={runnable:k,programLog:I,vertexShader:{log:V,prefix:p},fragmentShader:{log:H,prefix:d}})}r.deleteShader(R),r.deleteShader(T),v=new Ks(r,E),b=g0(r,E)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(E,a0)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o0++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=T,this}let D0=0;class I0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new U0(e),t.set(e,i)),i}}class U0{constructor(e){this.id=D0++,this.code=e,this.usedTimes=0}}function N0(n){return n===Ni||n===ra||n===sa}function F0(n,e,t,i,r,s){const a=new gd,o=new I0,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function E(v,b,L,w,F,G){const q=w.fog,I=F.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=e.get(v.envMap||V,H),$=k&&k.mapping===ma?k.image.height:null,te=m[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Pe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const oe=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,xe=oe!==void 0?oe.length:0;let ie=0;I.morphAttributes.position!==void 0&&(ie=1),I.morphAttributes.normal!==void 0&&(ie=2),I.morphAttributes.color!==void 0&&(ie=3);let Be,Te,J,ge;if(te){const Fe=bn[te];Be=Fe.vertexShader,Te=Fe.fragmentShader}else Be=v.vertexShader,Te=v.fragmentShader,o.update(v),J=o.getVertexShaderID(v),ge=o.getFragmentShaderID(v);const le=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,Le=F.isBatchedMesh===!0,_t=!!v.map,We=!!v.matcap,it=!!k,pt=!!v.aoMap,ke=!!v.lightMap,Lt=!!v.bumpMap,vt=!!v.normalMap,Kt=!!v.displacementMap,D=!!v.emissiveMap,Pt=!!v.metalnessMap,Xe=!!v.roughnessMap,dt=v.anisotropy>0,fe=v.clearcoat>0,xt=v.dispersion>0,S=v.iridescence>0,g=v.sheen>0,N=v.transmission>0,Z=dt&&!!v.anisotropyMap,ne=fe&&!!v.clearcoatMap,re=fe&&!!v.clearcoatNormalMap,de=fe&&!!v.clearcoatRoughnessMap,Y=S&&!!v.iridescenceMap,j=S&&!!v.iridescenceThicknessMap,_e=g&&!!v.sheenColorMap,Se=g&&!!v.sheenRoughnessMap,ce=!!v.specularMap,se=!!v.specularColorMap,De=!!v.specularIntensityMap,ze=N&&!!v.transmissionMap,Qe=N&&!!v.thicknessMap,C=!!v.gradientMap,ae=!!v.alphaMap,K=v.alphaTest>0,ve=!!v.alphaHash,ue=!!v.extensions;let ee=Rn;v.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ee=n.toneMapping);const Ae={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:Be,fragmentShader:Te,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:ge,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Le,batchingColor:Le&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:_t,matcap:We,envMap:it,envMapMode:it&&k.mapping,envMapCubeUVHeight:$,aoMap:pt,lightMap:ke,bumpMap:Lt,normalMap:vt,displacementMap:Kt,emissiveMap:D,normalMapObjectSpace:vt&&v.normalMapType===_h,normalMapTangentSpace:vt&&v.normalMapType===ul,packedNormalMap:vt&&v.normalMapType===ul&&N0(v.normalMap.format),metalnessMap:Pt,roughnessMap:Xe,anisotropy:dt,anisotropyMap:Z,clearcoat:fe,clearcoatMap:ne,clearcoatNormalMap:re,clearcoatRoughnessMap:de,dispersion:xt,iridescence:S,iridescenceMap:Y,iridescenceThicknessMap:j,sheen:g,sheenColorMap:_e,sheenRoughnessMap:Se,specularMap:ce,specularColorMap:se,specularIntensityMap:De,transmission:N,transmissionMap:ze,thicknessMap:Qe,gradientMap:C,opaque:v.transparent===!1&&v.blending===ur&&v.alphaToCoverage===!1,alphaMap:ae,alphaTest:K,alphaHash:ve,combine:v.combine,mapUv:_t&&x(v.map.channel),aoMapUv:pt&&x(v.aoMap.channel),lightMapUv:ke&&x(v.lightMap.channel),bumpMapUv:Lt&&x(v.bumpMap.channel),normalMapUv:vt&&x(v.normalMap.channel),displacementMapUv:Kt&&x(v.displacementMap.channel),emissiveMapUv:D&&x(v.emissiveMap.channel),metalnessMapUv:Pt&&x(v.metalnessMap.channel),roughnessMapUv:Xe&&x(v.roughnessMap.channel),anisotropyMapUv:Z&&x(v.anisotropyMap.channel),clearcoatMapUv:ne&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(v.sheenRoughnessMap.channel),specularMapUv:ce&&x(v.specularMap.channel),specularColorMapUv:se&&x(v.specularColorMap.channel),specularIntensityMapUv:De&&x(v.specularIntensityMap.channel),transmissionMapUv:ze&&x(v.transmissionMap.channel),thicknessMapUv:Qe&&x(v.thicknessMap.channel),alphaMapUv:ae&&x(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(vt||dt),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(_t||ae),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&vt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ce,skinning:F.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,decodeVideoTexture:_t&&v.map.isVideoTexture===!0&&$e.getTransfer(v.map.colorSpace)===nt,decodeVideoTextureEmissive:D&&v.emissiveMap.isVideoTexture===!0&&$e.getTransfer(v.emissiveMap.colorSpace)===nt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vn,flipSided:v.side===$t,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ue&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&v.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function p(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)b.push(L),b.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(d(b,v),M(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function d(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function A(v){const b=m[v.type];let L;if(b){const w=bn[b];L=np.clone(w.uniforms)}else L=v.uniforms;return L}function y(v,b){let L=f.get(b);return L!==void 0?++L.usedTimes:(L=new P0(n,b,v,r),c.push(L),f.set(b,L)),L}function R(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function P(){o.dispose()}return{getParameters:E,getProgramCacheKey:p,getUniforms:A,acquireProgram:y,releaseProgram:R,releaseShaderCache:T,programs:c,dispose:P}}function O0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function B0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Au(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,E,p,d){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:E,renderOrder:u.renderOrder,z:p,group:d},n[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=x,M.materialVariant=a(u),M.groupOrder=E,M.renderOrder=u.renderOrder,M.z=p,M.group=d),e++,M}function l(u,m,x,E,p,d){const M=o(u,m,x,E,p,d);x.transmission>0?i.push(M):x.transparent===!0?r.push(M):t.push(M)}function c(u,m,x,E,p,d){const M=o(u,m,x,E,p,d);x.transmission>0?i.unshift(M):x.transparent===!0?r.unshift(M):t.unshift(M)}function f(u,m){t.length>1&&t.sort(u||B0),i.length>1&&i.sort(m||Au),r.length>1&&r.sort(m||Au)}function h(){for(let u=e,m=n.length;u<m;u++){const x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function z0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new wu,n.set(i,[a])):r>=s.length?(a=new wu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function G0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Je};break;case"SpotLight":t={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function V0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let H0=0;function k0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W0(n){const e=new G0,t=V0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new At,a=new At;function o(c){let f=0,h=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,x=0,E=0,p=0,d=0,M=0,A=0,y=0,R=0,T=0,P=0;c.sort(k0);for(let b=0,L=c.length;b<L;b++){const w=c[b],F=w.color,G=w.intensity,q=w.distance;let I=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Ni?I=w.shadow.map.texture:I=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)f+=F.r*G,h+=F.g*G,u+=F.b*G;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],G);P++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const H=w.shadow,k=t.get(w);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=I,i.directionalShadowMatrix[m]=w.shadow.matrix,M++}i.directional[m]=V,m++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(F).multiplyScalar(G),V.distance=q,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[E]=V;const H=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,H.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[E]=H.matrix,w.castShadow){const k=t.get(w);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,i.spotShadow[E]=k,i.spotShadowMap[E]=I,y++}E++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(F).multiplyScalar(G),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=V,p++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const H=w.shadow,k=t.get(w);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,i.pointShadow[x]=k,i.pointShadowMap[x]=I,i.pointShadowMatrix[x]=w.shadow.matrix,A++}i.point[x]=V,x++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(G),V.groundColor.copy(w.groundColor).multiplyScalar(G),i.hemi[d]=V,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==m||v.pointLength!==x||v.spotLength!==E||v.rectAreaLength!==p||v.hemiLength!==d||v.numDirectionalShadows!==M||v.numPointShadows!==A||v.numSpotShadows!==y||v.numSpotMaps!==R||v.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=p,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,v.directionalLength=m,v.pointLength=x,v.spotLength=E,v.rectAreaLength=p,v.hemiLength=d,v.numDirectionalShadows=M,v.numPointShadows=A,v.numSpotShadows=y,v.numSpotMaps=R,v.numLightProbes=P,i.version=H0++)}function l(c,f){let h=0,u=0,m=0,x=0,E=0;const p=f.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const A=c[d];if(A.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),h++}else if(A.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(A.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(A.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),u++}else if(A.isHemisphereLight){const y=i.hemi[E];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(p),E++}}}return{setup:o,setupView:l,state:i}}function Ru(n){const e=new W0(n),t=[],i=[],r=[];function s(u){h.camera=u,t.length=0,i.length=0,r.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function f(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function X0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ru(n),e.set(r,[o])):s>=a.length?(o=new Ru(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$0=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],K0=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Cu=new At,Gr=new B,go=new B;function Z0(n,e,t){let i=new zl;const r=new tt,s=new tt,a=new St,o=new ap,l=new op,c={},f=t.maxTextureSize,h={[fi]:$t,[$t]:fi,[Vn]:Vn},u=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:q0,fragmentShader:Y0}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const x=new In;x.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new un(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ws;let d=this.type;this.render=function(T,P,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===ju&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ws);const b=n.getRenderTarget(),L=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),F=n.state;F.setBlending(kn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=d!==this.type;G&&P.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(I=>I.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,I=T.length;q<I;q++){const V=T[q],H=V.shadow;if(H===void 0){Pe("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const k=H.getFrameExtents();r.multiply(k),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/k.x),r.x=s.x*k.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/k.y),r.y=s.y*k.y,H.mapSize.y=s.y));const $=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=$,H.map===null||G===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===kr){if(V.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Cn(r.x,r.y,{format:Ni,type:qn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new _r(r.x,r.y,An),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=Yn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt}else V.isPointLight?(H.map=new Rd(r.x),H.map.depthTexture=new ep(r.x,Pn)):(H.map=new Cn(r.x,r.y),H.map.depthTexture=new _r(r.x,r.y,Pn)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=Yn,this.type===Ws?(H.map.depthTexture.compareFunction=$?Nl:Ul,H.map.depthTexture.minFilter=Gt,H.map.depthTexture.magFilter=Gt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nt,H.map.depthTexture.magFilter=Nt);H.camera.updateProjectionMatrix()}const te=H.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<te;oe++){if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,oe),n.clear();else{oe===0&&(n.setRenderTarget(H.map),n.clear());const xe=H.getViewport(oe);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),F.viewport(a)}if(V.isPointLight){const xe=H.camera,ie=H.matrix,Be=V.distance||xe.far;Be!==xe.far&&(xe.far=Be,xe.updateProjectionMatrix()),Gr.setFromMatrixPosition(V.matrixWorld),xe.position.copy(Gr),go.copy(xe.position),go.add($0[oe]),xe.up.copy(K0[oe]),xe.lookAt(go),xe.updateMatrixWorld(),ie.makeTranslation(-Gr.x,-Gr.y,-Gr.z),Cu.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Cu,xe.coordinateSystem,xe.reversedDepth)}else H.updateMatrices(V);i=H.getFrustum(),y(P,v,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===kr&&M(H,v),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(b,L,w)};function M(T,P){const v=e.update(E);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Cn(r.x,r.y,{format:Ni,type:qn})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,v,u,E,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,v,m,E,null)}function A(T,P,v,b){let L=null;const w=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)L=w;else if(L=v.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=L.uuid,G=P.uuid;let q=c[F];q===void 0&&(q={},c[F]=q);let I=q[G];I===void 0&&(I=L.clone(),q[G]=I,P.addEventListener("dispose",R)),L=I}if(L.visible=P.visible,L.wireframe=P.wireframe,b===kr?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:h[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const F=n.properties.get(L);F.light=v}return L}function y(T,P,v,b,L){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===kr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const G=e.update(T),q=T.material;if(Array.isArray(q)){const I=G.groups;for(let V=0,H=I.length;V<H;V++){const k=I[V],$=q[k.materialIndex];if($&&$.visible){const te=A(T,$,b,L);T.onBeforeShadow(n,T,P,v,G,te,k),n.renderBufferDirect(v,null,G,te,T,k),T.onAfterShadow(n,T,P,v,G,te,k)}}}else if(q.visible){const I=A(T,q,b,L);T.onBeforeShadow(n,T,P,v,G,I,null),n.renderBufferDirect(v,null,G,I,T,null),T.onAfterShadow(n,T,P,v,G,I,null)}}const F=T.children;for(let G=0,q=F.length;G<q;G++)y(F[G],P,v,b,L)}function R(T){T.target.removeEventListener("dispose",R);for(const v in c){const b=c[v],L=T.target.uuid;L in b&&(b[L].dispose(),delete b[L])}}}function j0(n,e){function t(){let C=!1;const ae=new St;let K=null;const ve=new St(0,0,0,0);return{setMask:function(ue){K!==ue&&!C&&(n.colorMask(ue,ue,ue,ue),K=ue)},setLocked:function(ue){C=ue},setClear:function(ue,ee,Ae,Fe,Et){Et===!0&&(ue*=Fe,ee*=Fe,Ae*=Fe),ae.set(ue,ee,Ae,Fe),ve.equals(ae)===!1&&(n.clearColor(ue,ee,Ae,Fe),ve.copy(ae))},reset:function(){C=!1,K=null,ve.set(-1,0,0,0)}}}function i(){let C=!1,ae=!1,K=null,ve=null,ue=null;return{setReversed:function(ee){if(ae!==ee){const Ae=e.get("EXT_clip_control");ee?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ae=ee;const Fe=ue;ue=null,this.setClear(Fe)}},getReversed:function(){return ae},setTest:function(ee){ee?le(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(ee){K!==ee&&!C&&(n.depthMask(ee),K=ee)},setFunc:function(ee){if(ae&&(ee=wh[ee]),ve!==ee){switch(ee){case Ao:n.depthFunc(n.NEVER);break;case wo:n.depthFunc(n.ALWAYS);break;case Ro:n.depthFunc(n.LESS);break;case mr:n.depthFunc(n.LEQUAL);break;case Co:n.depthFunc(n.EQUAL);break;case Lo:n.depthFunc(n.GEQUAL);break;case Po:n.depthFunc(n.GREATER);break;case Do:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=ee}},setLocked:function(ee){C=ee},setClear:function(ee){ue!==ee&&(ue=ee,ae&&(ee=1-ee),n.clearDepth(ee))},reset:function(){C=!1,K=null,ve=null,ue=null,ae=!1}}}function r(){let C=!1,ae=null,K=null,ve=null,ue=null,ee=null,Ae=null,Fe=null,Et=null;return{setTest:function(rt){C||(rt?le(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(rt){ae!==rt&&!C&&(n.stencilMask(rt),ae=rt)},setFunc:function(rt,Un,xn){(K!==rt||ve!==Un||ue!==xn)&&(n.stencilFunc(rt,Un,xn),K=rt,ve=Un,ue=xn)},setOp:function(rt,Un,xn){(ee!==rt||Ae!==Un||Fe!==xn)&&(n.stencilOp(rt,Un,xn),ee=rt,Ae=Un,Fe=xn)},setLocked:function(rt){C=rt},setClear:function(rt){Et!==rt&&(n.clearStencil(rt),Et=rt)},reset:function(){C=!1,ae=null,K=null,ve=null,ue=null,ee=null,Ae=null,Fe=null,Et=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},u={},m=new WeakMap,x=[],E=null,p=!1,d=null,M=null,A=null,y=null,R=null,T=null,P=null,v=new Je(0,0,0),b=0,L=!1,w=null,F=null,G=null,q=null,I=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,k=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),H=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=k>=2);let te=null,oe={};const xe=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Be=new St().fromArray(xe),Te=new St().fromArray(ie);function J(C,ae,K,ve){const ue=new Uint8Array(4),ee=n.createTexture();n.bindTexture(C,ee),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<K;Ae++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(ae+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return ee}const ge={};ge[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),ge[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ge[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(n.DEPTH_TEST),a.setFunc(mr),Lt(!1),vt(Pc),le(n.CULL_FACE),pt(kn);function le(C){f[C]!==!0&&(n.enable(C),f[C]=!0)}function Ce(C){f[C]!==!1&&(n.disable(C),f[C]=!1)}function Ie(C,ae){return u[C]!==ae?(n.bindFramebuffer(C,ae),u[C]=ae,C===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),C===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Le(C,ae){let K=x,ve=!1;if(C){K=m.get(ae),K===void 0&&(K=[],m.set(ae,K));const ue=C.textures;if(K.length!==ue.length||K[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ae=ue.length;ee<Ae;ee++)K[ee]=n.COLOR_ATTACHMENT0+ee;K.length=ue.length,ve=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ve=!0);ve&&n.drawBuffers(K)}function _t(C){return E!==C?(n.useProgram(C),E=C,!0):!1}const We={[Ai]:n.FUNC_ADD,[Zf]:n.FUNC_SUBTRACT,[jf]:n.FUNC_REVERSE_SUBTRACT};We[Jf]=n.MIN,We[Qf]=n.MAX;const it={[eh]:n.ZERO,[th]:n.ONE,[nh]:n.SRC_COLOR,[bo]:n.SRC_ALPHA,[lh]:n.SRC_ALPHA_SATURATE,[ah]:n.DST_COLOR,[rh]:n.DST_ALPHA,[ih]:n.ONE_MINUS_SRC_COLOR,[To]:n.ONE_MINUS_SRC_ALPHA,[oh]:n.ONE_MINUS_DST_COLOR,[sh]:n.ONE_MINUS_DST_ALPHA,[ch]:n.CONSTANT_COLOR,[uh]:n.ONE_MINUS_CONSTANT_COLOR,[dh]:n.CONSTANT_ALPHA,[fh]:n.ONE_MINUS_CONSTANT_ALPHA};function pt(C,ae,K,ve,ue,ee,Ae,Fe,Et,rt){if(C===kn){p===!0&&(Ce(n.BLEND),p=!1);return}if(p===!1&&(le(n.BLEND),p=!0),C!==Kf){if(C!==d||rt!==L){if((M!==Ai||R!==Ai)&&(n.blendEquation(n.FUNC_ADD),M=Ai,R=Ai),rt)switch(C){case ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dc:n.blendFunc(n.ONE,n.ONE);break;case Ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",C);break}else switch(C){case ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ic:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uc:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",C);break}A=null,y=null,T=null,P=null,v.set(0,0,0),b=0,d=C,L=rt}return}ue=ue||ae,ee=ee||K,Ae=Ae||ve,(ae!==M||ue!==R)&&(n.blendEquationSeparate(We[ae],We[ue]),M=ae,R=ue),(K!==A||ve!==y||ee!==T||Ae!==P)&&(n.blendFuncSeparate(it[K],it[ve],it[ee],it[Ae]),A=K,y=ve,T=ee,P=Ae),(Fe.equals(v)===!1||Et!==b)&&(n.blendColor(Fe.r,Fe.g,Fe.b,Et),v.copy(Fe),b=Et),d=C,L=!1}function ke(C,ae){C.side===Vn?Ce(n.CULL_FACE):le(n.CULL_FACE);let K=C.side===$t;ae&&(K=!K),Lt(K),C.blending===ur&&C.transparent===!1?pt(kn):pt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const ve=C.stencilWrite;o.setTest(ve),ve&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),D(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(C){w!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),w=C)}function vt(C){C!==Yf?(le(n.CULL_FACE),C!==F&&(C===Pc?n.cullFace(n.BACK):C===$f?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),F=C}function Kt(C){C!==G&&(H&&n.lineWidth(C),G=C)}function D(C,ae,K){C?(le(n.POLYGON_OFFSET_FILL),(q!==ae||I!==K)&&(q=ae,I=K,a.getReversed()&&(ae=-ae),n.polygonOffset(ae,K))):Ce(n.POLYGON_OFFSET_FILL)}function Pt(C){C?le(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function Xe(C){C===void 0&&(C=n.TEXTURE0+V-1),te!==C&&(n.activeTexture(C),te=C)}function dt(C,ae,K){K===void 0&&(te===null?K=n.TEXTURE0+V-1:K=te);let ve=oe[K];ve===void 0&&(ve={type:void 0,texture:void 0},oe[K]=ve),(ve.type!==C||ve.texture!==ae)&&(te!==K&&(n.activeTexture(K),te=K),n.bindTexture(C,ae||ge[C]),ve.type=C,ve.texture=ae)}function fe(){const C=oe[te];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function xt(){try{n.compressedTexImage2D(...arguments)}catch(C){je("WebGLState:",C)}}function S(){try{n.compressedTexImage3D(...arguments)}catch(C){je("WebGLState:",C)}}function g(){try{n.texSubImage2D(...arguments)}catch(C){je("WebGLState:",C)}}function N(){try{n.texSubImage3D(...arguments)}catch(C){je("WebGLState:",C)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(C){je("WebGLState:",C)}}function ne(){try{n.compressedTexSubImage3D(...arguments)}catch(C){je("WebGLState:",C)}}function re(){try{n.texStorage2D(...arguments)}catch(C){je("WebGLState:",C)}}function de(){try{n.texStorage3D(...arguments)}catch(C){je("WebGLState:",C)}}function Y(){try{n.texImage2D(...arguments)}catch(C){je("WebGLState:",C)}}function j(){try{n.texImage3D(...arguments)}catch(C){je("WebGLState:",C)}}function _e(C){return h[C]!==void 0?h[C]:n.getParameter(C)}function Se(C,ae){h[C]!==ae&&(n.pixelStorei(C,ae),h[C]=ae)}function ce(C){Be.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),Be.copy(C))}function se(C){Te.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Te.copy(C))}function De(C,ae){let K=c.get(ae);K===void 0&&(K=new WeakMap,c.set(ae,K));let ve=K.get(C);ve===void 0&&(ve=n.getUniformBlockIndex(ae,C.name),K.set(C,ve))}function ze(C,ae){const ve=c.get(ae).get(C);l.get(ae)!==ve&&(n.uniformBlockBinding(ae,ve,C.__bindingPointIndex),l.set(ae,ve))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},h={},te=null,oe={},u={},m=new WeakMap,x=[],E=null,p=!1,d=null,M=null,A=null,y=null,R=null,T=null,P=null,v=new Je(0,0,0),b=0,L=!1,w=null,F=null,G=null,q=null,I=null,Be.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Ce,bindFramebuffer:Ie,drawBuffers:Le,useProgram:_t,setBlending:pt,setMaterial:ke,setFlipSided:Lt,setCullFace:vt,setLineWidth:Kt,setPolygonOffset:D,setScissorTest:Pt,activeTexture:Xe,bindTexture:dt,unbindTexture:fe,compressedTexImage2D:xt,compressedTexImage3D:S,texImage2D:Y,texImage3D:j,pixelStorei:Se,getParameter:_e,updateUBOMapping:De,uniformBlockBinding:ze,texStorage2D:re,texStorage3D:de,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:Z,compressedTexSubImage3D:ne,scissor:ce,viewport:se,reset:Qe}}function J0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,f=new WeakMap,h=new Set;let u;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(S,g){return x?new OffscreenCanvas(S,g):la("canvas")}function p(S,g,N){let Z=1;const ne=xt(S);if((ne.width>N||ne.height>N)&&(Z=N/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const re=Math.floor(Z*ne.width),de=Math.floor(Z*ne.height);u===void 0&&(u=E(re,de));const Y=g?E(re,de):u;return Y.width=re,Y.height=de,Y.getContext("2d").drawImage(S,0,0,re,de),Pe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+re+"x"+de+")."),Y}else return"data"in S&&Pe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),S;return S}function d(S){return S.generateMipmaps}function M(S){n.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(S,g,N,Z,ne,re=!1){if(S!==null){if(n[S]!==void 0)return n[S];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let de;Z&&(de=e.get("EXT_texture_norm16"),de||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=g;if(g===n.RED&&(N===n.FLOAT&&(Y=n.R32F),N===n.HALF_FLOAT&&(Y=n.R16F),N===n.UNSIGNED_BYTE&&(Y=n.R8),N===n.UNSIGNED_SHORT&&de&&(Y=de.R16_EXT),N===n.SHORT&&de&&(Y=de.R16_SNORM_EXT)),g===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.R8UI),N===n.UNSIGNED_SHORT&&(Y=n.R16UI),N===n.UNSIGNED_INT&&(Y=n.R32UI),N===n.BYTE&&(Y=n.R8I),N===n.SHORT&&(Y=n.R16I),N===n.INT&&(Y=n.R32I)),g===n.RG&&(N===n.FLOAT&&(Y=n.RG32F),N===n.HALF_FLOAT&&(Y=n.RG16F),N===n.UNSIGNED_BYTE&&(Y=n.RG8),N===n.UNSIGNED_SHORT&&de&&(Y=de.RG16_EXT),N===n.SHORT&&de&&(Y=de.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RG8UI),N===n.UNSIGNED_SHORT&&(Y=n.RG16UI),N===n.UNSIGNED_INT&&(Y=n.RG32UI),N===n.BYTE&&(Y=n.RG8I),N===n.SHORT&&(Y=n.RG16I),N===n.INT&&(Y=n.RG32I)),g===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),N===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),N===n.UNSIGNED_INT&&(Y=n.RGB32UI),N===n.BYTE&&(Y=n.RGB8I),N===n.SHORT&&(Y=n.RGB16I),N===n.INT&&(Y=n.RGB32I)),g===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),N===n.UNSIGNED_INT&&(Y=n.RGBA32UI),N===n.BYTE&&(Y=n.RGBA8I),N===n.SHORT&&(Y=n.RGBA16I),N===n.INT&&(Y=n.RGBA32I)),g===n.RGB&&(N===n.UNSIGNED_SHORT&&de&&(Y=de.RGB16_EXT),N===n.SHORT&&de&&(Y=de.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),g===n.RGBA){const j=re?oa:$e.getTransfer(ne);N===n.FLOAT&&(Y=n.RGBA32F),N===n.HALF_FLOAT&&(Y=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Y=j===nt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&de&&(Y=de.RGBA16_EXT),N===n.SHORT&&de&&(Y=de.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function R(S,g){let N;return S?g===null||g===Pn||g===jr?N=n.DEPTH24_STENCIL8:g===An?N=n.DEPTH32F_STENCIL8:g===Zr&&(N=n.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Pn||g===jr?N=n.DEPTH_COMPONENT24:g===An?N=n.DEPTH_COMPONENT32F:g===Zr&&(N=n.DEPTH_COMPONENT16),N}function T(S,g){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==Nt&&S.minFilter!==Gt?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function P(S){const g=S.target;g.removeEventListener("dispose",P),b(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&h.delete(g)}function v(S){const g=S.target;g.removeEventListener("dispose",v),w(g)}function b(S){const g=i.get(S);if(g.__webglInit===void 0)return;const N=S.source,Z=m.get(N);if(Z){const ne=Z[g.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&L(S),Object.keys(Z).length===0&&m.delete(N)}i.remove(S)}function L(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const N=S.source,Z=m.get(N);delete Z[g.__cacheKey],a.memory.textures--}function w(S){const g=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let ne=0;ne<g.__webglFramebuffer[Z].length;ne++)n.deleteFramebuffer(g.__webglFramebuffer[Z][ne]);else n.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[Z]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=S.textures;for(let Z=0,ne=N.length;Z<ne;Z++){const re=i.get(N[Z]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(N[Z])}i.remove(S)}let F=0;function G(){F=0}function q(){return F}function I(S){F=S}function V(){const S=F;return S>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),F+=1,S}function H(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function k(S,g){const N=i.get(S);if(S.isVideoTexture&&dt(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&N.__version!==S.version){const Z=S.image;if(Z===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(N,S,g);return}}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+g)}function $(S,g){const N=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){Ce(N,S,g);return}else S.isExternalTexture&&(N.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+g)}function te(S,g){const N=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){Ce(N,S,g);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+g)}function oe(S,g){const N=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&N.__version!==S.version){Ie(N,S,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+g)}const xe={[ia]:n.REPEAT,[Hn]:n.CLAMP_TO_EDGE,[Io]:n.MIRRORED_REPEAT},ie={[Nt]:n.NEAREST,[mh]:n.NEAREST_MIPMAP_NEAREST,[vs]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[Ba]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},Be={[vh]:n.NEVER,[Eh]:n.ALWAYS,[xh]:n.LESS,[Ul]:n.LEQUAL,[Mh]:n.EQUAL,[Nl]:n.GEQUAL,[Sh]:n.GREATER,[yh]:n.NOTEQUAL};function Te(S,g){if(g.type===An&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Gt||g.magFilter===Ba||g.magFilter===vs||g.magFilter===Ri||g.minFilter===Gt||g.minFilter===Ba||g.minFilter===vs||g.minFilter===Ri)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,xe[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,xe[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,xe[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ie[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ie[g.minFilter]),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Be[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Nt||g.minFilter!==vs&&g.minFilter!==Ri||g.type===An&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function J(S,g){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",P));const Z=g.source;let ne=m.get(Z);ne===void 0&&(ne={},m.set(Z,ne));const re=H(g);if(re!==S.__cacheKey){ne[re]===void 0&&(ne[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),ne[re].usedTimes++;const de=ne[S.__cacheKey];de!==void 0&&(ne[S.__cacheKey].usedTimes--,de.usedTimes===0&&L(g)),S.__cacheKey=re,S.__webglTexture=ne[re].texture}return N}function ge(S,g,N){return Math.floor(Math.floor(S/N)/g)}function le(S,g,N,Z){const re=S.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,N,Z,g.data);else{re.sort((Se,ce)=>Se.start-ce.start);let de=0;for(let Se=1;Se<re.length;Se++){const ce=re[de],se=re[Se],De=ce.start+ce.count,ze=ge(se.start,g.width,4),Qe=ge(ce.start,g.width,4);se.start<=De+1&&ze===Qe&&ge(se.start+se.count-1,g.width,4)===ze?ce.count=Math.max(ce.count,se.start+se.count-ce.start):(++de,re[de]=se)}re.length=de+1;const Y=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),_e=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Se=0,ce=re.length;Se<ce;Se++){const se=re[Se],De=Math.floor(se.start/4),ze=Math.ceil(se.count/4),Qe=De%g.width,C=Math.floor(De/g.width),ae=ze,K=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,C),t.texSubImage2D(n.TEXTURE_2D,0,Qe,C,ae,K,N,Z,g.data)}S.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function Ce(S,g,N){let Z=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=n.TEXTURE_3D);const ne=J(S,g),re=g.source;t.bindTexture(Z,S.__webglTexture,n.TEXTURE0+N);const de=i.get(re);if(re.version!==de.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const K=$e.getPrimaries($e.workingColorSpace),ve=g.colorSpace===ci?null:$e.getPrimaries(g.colorSpace),ue=g.colorSpace===ci||K===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let j=p(g.image,!1,r.maxTextureSize);j=fe(g,j);const _e=s.convert(g.format,g.colorSpace),Se=s.convert(g.type);let ce=y(g.internalFormat,_e,Se,g.normalized,g.colorSpace,g.isVideoTexture);Te(Z,g);let se;const De=g.mipmaps,ze=g.isVideoTexture!==!0,Qe=de.__version===void 0||ne===!0,C=re.dataReady,ae=T(g,j);if(g.isDepthTexture)ce=R(g.format===Ci,g.type),Qe&&(ze?t.texStorage2D(n.TEXTURE_2D,1,ce,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,ce,j.width,j.height,0,_e,Se,null));else if(g.isDataTexture)if(De.length>0){ze&&Qe&&t.texStorage2D(n.TEXTURE_2D,ae,ce,De[0].width,De[0].height);for(let K=0,ve=De.length;K<ve;K++)se=De[K],ze?C&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,se.width,se.height,_e,Se,se.data):t.texImage2D(n.TEXTURE_2D,K,ce,se.width,se.height,0,_e,Se,se.data);g.generateMipmaps=!1}else ze?(Qe&&t.texStorage2D(n.TEXTURE_2D,ae,ce,j.width,j.height),C&&le(g,j,_e,Se)):t.texImage2D(n.TEXTURE_2D,0,ce,j.width,j.height,0,_e,Se,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ze&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,ce,De[0].width,De[0].height,j.depth);for(let K=0,ve=De.length;K<ve;K++)if(se=De[K],g.format!==mn)if(_e!==null)if(ze){if(C)if(g.layerUpdates.size>0){const ue=au(se.width,se.height,g.format,g.type);for(const ee of g.layerUpdates){const Ae=se.data.subarray(ee*ue/se.data.BYTES_PER_ELEMENT,(ee+1)*ue/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,ee,se.width,se.height,1,_e,Ae)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,j.depth,_e,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,ce,se.width,se.height,j.depth,0,se.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,j.depth,_e,Se,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,ce,se.width,se.height,j.depth,0,_e,Se,se.data)}else{ze&&Qe&&t.texStorage2D(n.TEXTURE_2D,ae,ce,De[0].width,De[0].height);for(let K=0,ve=De.length;K<ve;K++)se=De[K],g.format!==mn?_e!==null?ze?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,se.width,se.height,_e,se.data):t.compressedTexImage2D(n.TEXTURE_2D,K,ce,se.width,se.height,0,se.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?C&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,se.width,se.height,_e,Se,se.data):t.texImage2D(n.TEXTURE_2D,K,ce,se.width,se.height,0,_e,Se,se.data)}else if(g.isDataArrayTexture)if(ze){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,ce,j.width,j.height,j.depth),C)if(g.layerUpdates.size>0){const K=au(j.width,j.height,g.format,g.type);for(const ve of g.layerUpdates){const ue=j.data.subarray(ve*K/j.data.BYTES_PER_ELEMENT,(ve+1)*K/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ve,j.width,j.height,1,_e,Se,ue)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,_e,Se,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ce,j.width,j.height,j.depth,0,_e,Se,j.data);else if(g.isData3DTexture)ze?(Qe&&t.texStorage3D(n.TEXTURE_3D,ae,ce,j.width,j.height,j.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,_e,Se,j.data)):t.texImage3D(n.TEXTURE_3D,0,ce,j.width,j.height,j.depth,0,_e,Se,j.data);else if(g.isFramebufferTexture){if(Qe)if(ze)t.texStorage2D(n.TEXTURE_2D,ae,ce,j.width,j.height);else{let K=j.width,ve=j.height;for(let ue=0;ue<ae;ue++)t.texImage2D(n.TEXTURE_2D,ue,ce,K,ve,0,_e,Se,null),K>>=1,ve>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),h.add(g),K.onpaint=Fe=>{const Et=Fe.changedElements;for(const rt of h)Et.includes(rt.image)&&(rt.needsUpdate=!0)},K.requestPaint();return}const ve=0,ue=n.RGBA,ee=n.RGBA,Ae=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,ve,ue,ee,Ae,j),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(De.length>0){if(ze&&Qe){const K=xt(De[0]);t.texStorage2D(n.TEXTURE_2D,ae,ce,K.width,K.height)}for(let K=0,ve=De.length;K<ve;K++)se=De[K],ze?C&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,_e,Se,se):t.texImage2D(n.TEXTURE_2D,K,ce,_e,Se,se);g.generateMipmaps=!1}else if(ze){if(Qe){const K=xt(j);t.texStorage2D(n.TEXTURE_2D,ae,ce,K.width,K.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Se,j)}else t.texImage2D(n.TEXTURE_2D,0,ce,_e,Se,j);d(g)&&M(Z),de.__version=re.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Ie(S,g,N){if(g.image.length!==6)return;const Z=J(S,g),ne=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+N);const re=i.get(ne);if(ne.version!==re.__version||Z===!0){t.activeTexture(n.TEXTURE0+N);const de=$e.getPrimaries($e.workingColorSpace),Y=g.colorSpace===ci?null:$e.getPrimaries(g.colorSpace),j=g.colorSpace===ci||de===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const _e=g.isCompressedTexture||g.image[0].isCompressedTexture,Se=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let ee=0;ee<6;ee++)!_e&&!Se?ce[ee]=p(g.image[ee],!0,r.maxCubemapSize):ce[ee]=Se?g.image[ee].image:g.image[ee],ce[ee]=fe(g,ce[ee]);const se=ce[0],De=s.convert(g.format,g.colorSpace),ze=s.convert(g.type),Qe=y(g.internalFormat,De,ze,g.normalized,g.colorSpace),C=g.isVideoTexture!==!0,ae=re.__version===void 0||Z===!0,K=ne.dataReady;let ve=T(g,se);Te(n.TEXTURE_CUBE_MAP,g);let ue;if(_e){C&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Qe,se.width,se.height);for(let ee=0;ee<6;ee++){ue=ce[ee].mipmaps;for(let Ae=0;Ae<ue.length;Ae++){const Fe=ue[Ae];g.format!==mn?De!==null?C?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Fe.width,Fe.height,De,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Qe,Fe.width,Fe.height,0,Fe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Fe.width,Fe.height,De,ze,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Qe,Fe.width,Fe.height,0,De,ze,Fe.data)}}}else{if(ue=g.mipmaps,C&&ae){ue.length>0&&ve++;const ee=xt(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Se){C?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ce[ee].width,ce[ee].height,De,ze,ce[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,ce[ee].width,ce[ee].height,0,De,ze,ce[ee].data);for(let Ae=0;Ae<ue.length;Ae++){const Et=ue[Ae].image[ee].image;C?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,Et.width,Et.height,De,ze,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Qe,Et.width,Et.height,0,De,ze,Et.data)}}else{C?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,ze,ce[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,De,ze,ce[ee]);for(let Ae=0;Ae<ue.length;Ae++){const Fe=ue[Ae];C?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,De,ze,Fe.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Qe,De,ze,Fe.image[ee])}}}d(g)&&M(n.TEXTURE_CUBE_MAP),re.__version=ne.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Le(S,g,N,Z,ne,re){const de=s.convert(N.format,N.colorSpace),Y=s.convert(N.type),j=y(N.internalFormat,de,Y,N.normalized,N.colorSpace),_e=i.get(g),Se=i.get(N);if(Se.__renderTarget=g,!_e.__hasExternalTextures){const ce=Math.max(1,g.width>>re),se=Math.max(1,g.height>>re);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,re,j,ce,se,g.depth,0,de,Y,null):t.texImage2D(ne,re,j,ce,se,0,de,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Xe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ne,Se.__webglTexture,0,Pt(g)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ne,Se.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(S,g,N){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer){const Z=g.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,re=R(g.stencilBuffer,ne),de=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xe(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(g),re,g.width,g.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(g),re,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,re,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,S)}else{const Z=g.textures;for(let ne=0;ne<Z.length;ne++){const re=Z[ne],de=s.convert(re.format,re.colorSpace),Y=s.convert(re.type),j=y(re.internalFormat,de,Y,re.normalized,re.colorSpace);Xe(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt(g),j,g.width,g.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt(g),j,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,j,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function We(S,g,N){const Z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(g.depthTexture);if(ne.__renderTarget=g,(!ne.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Te(n.TEXTURE_CUBE_MAP,g.depthTexture);const _e=s.convert(g.depthTexture.format),Se=s.convert(g.depthTexture.type);let ce;g.depthTexture.format===Yn?ce=n.DEPTH_COMPONENT24:g.depthTexture.format===Ci&&(ce=n.DEPTH24_STENCIL8);for(let se=0;se<6;se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ce,g.width,g.height,0,_e,Se,null)}}else k(g.depthTexture,0);const re=ne.__webglTexture,de=Pt(g),Y=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,j=g.depthTexture.format===Ci?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Yn)Xe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Y,re,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,j,Y,re,0);else if(g.depthTexture.format===Ci)Xe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Y,re,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,j,Y,re,0);else throw new Error("Unknown depthTexture format")}function it(S){const g=i.get(S),N=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const Z=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){const ne=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),g.__depthDisposeCallback=ne}g.__boundDepthTexture=Z}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let Z=0;Z<6;Z++)We(g.__webglFramebuffer[Z],S,Z);else{const Z=S.texture.mipmaps;Z&&Z.length>0?We(g.__webglFramebuffer[0],S,0):We(g.__webglFramebuffer,S,0)}else if(N){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=n.createRenderbuffer(),_t(g.__webglDepthbuffer[Z],S,!1);else{const ne=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,re)}}else{const Z=S.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),_t(g.__webglDepthbuffer,S,!1);else{const ne=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(S,g,N){const Z=i.get(S);g!==void 0&&Le(Z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&it(S)}function ke(S){const g=S.texture,N=i.get(S),Z=i.get(g);S.addEventListener("dispose",v);const ne=S.textures,re=S.isWebGLCubeRenderTarget===!0,de=ne.length>1;if(de||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=g.version,a.memory.textures++),re){N.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[Y]=[];for(let j=0;j<g.mipmaps.length;j++)N.__webglFramebuffer[Y][j]=n.createFramebuffer()}else N.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let Y=0;Y<g.mipmaps.length;Y++)N.__webglFramebuffer[Y]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(de)for(let Y=0,j=ne.length;Y<j;Y++){const _e=i.get(ne[Y]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&Xe(S)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Y=0;Y<ne.length;Y++){const j=ne[Y];N.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[Y]);const _e=s.convert(j.format,j.colorSpace),Se=s.convert(j.type),ce=y(j.internalFormat,_e,Se,j.normalized,j.colorSpace,S.isXRRenderTarget===!0),se=Pt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,se,ce,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,N.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Te(n.TEXTURE_CUBE_MAP,g);for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)Le(N.__webglFramebuffer[Y][j],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,j);else Le(N.__webglFramebuffer[Y],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);d(g)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let Y=0,j=ne.length;Y<j;Y++){const _e=ne[Y],Se=i.get(_e);let ce=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ce=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Se.__webglTexture),Te(ce,_e),Le(N.__webglFramebuffer,S,_e,n.COLOR_ATTACHMENT0+Y,ce,0),d(_e)&&M(ce)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Y=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,Z.__webglTexture),Te(Y,g),g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)Le(N.__webglFramebuffer[j],S,g,n.COLOR_ATTACHMENT0,Y,j);else Le(N.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,Y,0);d(g)&&M(Y),t.unbindTexture()}S.depthBuffer&&it(S)}function Lt(S){const g=S.textures;for(let N=0,Z=g.length;N<Z;N++){const ne=g[N];if(d(ne)){const re=A(S),de=i.get(ne).__webglTexture;t.bindTexture(re,de),M(re),t.unbindTexture()}}}const vt=[],Kt=[];function D(S){if(S.samples>0){if(Xe(S)===!1){const g=S.textures,N=S.width,Z=S.height;let ne=n.COLOR_BUFFER_BIT;const re=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(S),Y=g.length>1;if(Y)for(let _e=0;_e<g.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const j=S.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let _e=0;_e<g.length;_e++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Se=i.get(g[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,N,Z,0,0,N,Z,ne,n.NEAREST),l===!0&&(vt.length=0,Kt.length=0,vt.push(n.COLOR_ATTACHMENT0+_e),S.depthBuffer&&S.resolveDepthBuffer===!1&&(vt.push(re),Kt.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Kt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let _e=0;_e<g.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const Se=i.get(g[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const g=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Pt(S){return Math.min(r.maxSamples,S.samples)}function Xe(S){const g=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function dt(S){const g=a.render.frame;f.get(S)!==g&&(f.set(S,g),S.update())}function fe(S,g){const N=S.colorSpace,Z=S.format,ne=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||N!==aa&&N!==ci&&($e.getTransfer(N)===nt?(Z!==mn||ne!==Qt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",N)),g}function xt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.getTextureUnits=q,this.setTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=te,this.setTextureCube=oe,this.rebindTextures=pt,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Q0(n,e){function t(i,r=ci){let s;const a=$e.getTransfer(r);if(i===Qt)return n.UNSIGNED_BYTE;if(i===Cl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ll)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ud)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===od)return n.BYTE;if(i===ld)return n.SHORT;if(i===Zr)return n.UNSIGNED_SHORT;if(i===Rl)return n.INT;if(i===Pn)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===dd)return n.ALPHA;if(i===fd)return n.RGB;if(i===mn)return n.RGBA;if(i===Yn)return n.DEPTH_COMPONENT;if(i===Ci)return n.DEPTH_STENCIL;if(i===hd)return n.RED;if(i===Pl)return n.RED_INTEGER;if(i===Ni)return n.RG;if(i===Dl)return n.RG_INTEGER;if(i===Il)return n.RGBA_INTEGER;if(i===Xs||i===qs||i===Ys||i===$s)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uo||i===No||i===Fo||i===Oo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Uo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===No)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Oo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bo||i===zo||i===Go||i===Vo||i===Ho||i===ra||i===ko)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bo||i===zo)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Go)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vo)return s.COMPRESSED_R11_EAC;if(i===Ho)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ra)return s.COMPRESSED_RG11_EAC;if(i===ko)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Ko||i===Zo||i===jo||i===Jo||i===Qo||i===el||i===tl||i===nl||i===il)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$o)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ko)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===el)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nl)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===il)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===sl||i===al)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===rl)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===al)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ol||i===ll||i===sa||i===cl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ol)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ll)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new yd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Dn({vertexShader:ev,fragmentShader:tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new vr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iv extends Bi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,u=null,m=null,x=null;const E=typeof XRWebGLBinding<"u",p=new nv,d={},M=t.getContextAttributes();let A=null,y=null;const R=[],T=[],P=new tt;let v=null;const b=new on;b.viewport=new St;const L=new on;L.viewport=new St;const w=[b,L],F=new hp;let G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ge=R[J];return ge===void 0&&(ge=new qa,R[J]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(J){let ge=R[J];return ge===void 0&&(ge=new qa,R[J]=ge),ge.getGripSpace()},this.getHand=function(J){let ge=R[J];return ge===void 0&&(ge=new qa,R[J]=ge),ge.getHandSpace()};function I(J){const ge=T.indexOf(J.inputSource);if(ge===-1)return;const le=R[ge];le!==void 0&&(le.update(J.inputSource,J.frame,c||a),le.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",H);for(let J=0;J<R.length;J++){const ge=T[J];ge!==null&&(T[J]=null,R[J].disconnect(ge))}G=null,q=null,p.reset();for(const J in d)delete d[J];e.setRenderTarget(A),m=null,u=null,h=null,r=null,y=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",V),r.addEventListener("inputsourceschange",H),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ce=null,Ie=null;M.depth&&(Ie=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=M.stencil?Ci:Yn,Ce=M.stencil?jr:Pn);const Le={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Le),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Cn(u.textureWidth,u.textureHeight,{format:mn,type:Qt,depthTexture:new _r(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Cn(m.framebufferWidth,m.framebufferHeight,{format:mn,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function H(J){for(let ge=0;ge<J.removed.length;ge++){const le=J.removed[ge],Ce=T.indexOf(le);Ce>=0&&(T[Ce]=null,R[Ce].disconnect(le))}for(let ge=0;ge<J.added.length;ge++){const le=J.added[ge];let Ce=T.indexOf(le);if(Ce===-1){for(let Le=0;Le<R.length;Le++)if(Le>=T.length){T.push(le),Ce=Le;break}else if(T[Le]===null){T[Le]=le,Ce=Le;break}if(Ce===-1)break}const Ie=R[Ce];Ie&&Ie.connect(le)}}const k=new B,$=new B;function te(J,ge,le){k.setFromMatrixPosition(ge.matrixWorld),$.setFromMatrixPosition(le.matrixWorld);const Ce=k.distanceTo($),Ie=ge.projectionMatrix.elements,Le=le.projectionMatrix.elements,_t=Ie[14]/(Ie[10]-1),We=Ie[14]/(Ie[10]+1),it=(Ie[9]+1)/Ie[5],pt=(Ie[9]-1)/Ie[5],ke=(Ie[8]-1)/Ie[0],Lt=(Le[8]+1)/Le[0],vt=_t*ke,Kt=_t*Lt,D=Ce/(-ke+Lt),Pt=D*-ke;if(ge.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Pt),J.translateZ(D),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ie[10]===-1)J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Xe=_t+D,dt=We+D,fe=vt-Pt,xt=Kt+(Ce-Pt),S=it*We/dt*Xe,g=pt*We/dt*Xe;J.projectionMatrix.makePerspective(fe,xt,S,g,Xe,dt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function oe(J,ge){ge===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ge.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ge=J.near,le=J.far;p.texture!==null&&(p.depthNear>0&&(ge=p.depthNear),p.depthFar>0&&(le=p.depthFar)),F.near=L.near=b.near=ge,F.far=L.far=b.far=le,(G!==F.near||q!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,q=F.far),F.layers.mask=J.layers.mask|6,b.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const Ce=J.parent,Ie=F.cameras;oe(F,Ce);for(let Le=0;Le<Ie.length;Le++)oe(Ie[Le],Ce);Ie.length===2?te(F,b,L):F.projectionMatrix.copy(b.projectionMatrix),xe(J,F,Ce)};function xe(J,ge,le){le===null?J.matrix.copy(ge.matrixWorld):(J.matrix.copy(le.matrixWorld),J.matrix.invert(),J.matrix.multiply(ge.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=fl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(J){return d[J]};let ie=null;function Be(J,ge){if(f=ge.getViewerPose(c||a),x=ge,f!==null){const le=f.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Ce=!1;le.length!==F.cameras.length&&(F.cameras.length=0,Ce=!0);for(let We=0;We<le.length;We++){const it=le[We];let pt=null;if(m!==null)pt=m.getViewport(it);else{const Lt=h.getViewSubImage(u,it);pt=Lt.viewport,We===0&&(e.setRenderTargetTextures(y,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(y))}let ke=w[We];ke===void 0&&(ke=new on,ke.layers.enable(We),ke.viewport=new St,w[We]=ke),ke.matrix.fromArray(it.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(it.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(pt.x,pt.y,pt.width,pt.height),We===0&&(F.matrix.copy(ke.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ce===!0&&F.cameras.push(ke)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const We=h.getDepthInformation(le[0]);We&&We.isValid&&We.texture&&p.init(We,r.renderState)}if(Ie&&Ie.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let We=0;We<le.length;We++){const it=le[We].camera;if(it){let pt=d[it];pt||(pt=new yd,d[it]=pt);const ke=h.getCameraImage(it);pt.sourceTexture=ke}}}}for(let le=0;le<R.length;le++){const Ce=T[le],Ie=R[le];Ce!==null&&Ie!==void 0&&Ie.update(Ce,ge,c||a)}ie&&ie(J,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),x=null}const Te=new Ad;Te.setAnimationLoop(Be),this.setAnimationLoop=function(J){ie=J},this.dispose=function(){}}}const rv=new At,Id=new Ue;Id.set(-1,0,0,0,1,0,0,0,1);function sv(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Ed(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,M,A,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(p,d):d.isMeshLambertMaterial?(s(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),f(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(s(p,d),x(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),E(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,M,A):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===$t&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===$t&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=e.get(d),A=M.envMap,y=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(rv.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Id),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function E(p,d){const M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function av(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const y=A.program;i.uniformBlockBinding(M,y)}function c(M,A){let y=r[M.id];y===void 0&&(x(M),y=f(M),r[M.id]=y,M.addEventListener("dispose",p));const R=A.program;i.updateUBOMapping(M,R);const T=e.render.frame;s[M.id]!==T&&(u(M),s[M.id]=T)}function f(M){const A=h();M.__bindingPointIndex=A;const y=n.createBuffer(),R=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const A=r[M.id],y=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let T=0,P=y.length;T<P;T++){const v=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,L=v.length;b<L;b++){const w=v[b];if(m(w,T,b,R)===!0){const F=w.__offset,G=Array.isArray(w.value)?w.value:[w.value];let q=0;for(let I=0;I<G.length;I++){const V=G[I],H=E(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,F+q,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):ArrayBuffer.isView(V)?w.__data.set(new V.constructor(V.buffer,V.byteOffset,w.__data.length)):(V.toArray(w.__data,q),q+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,A,y,R){const T=M.value,P=A+"_"+y;if(R[P]===void 0)return typeof T=="number"||typeof T=="boolean"?R[P]=T:ArrayBuffer.isView(T)?R[P]=T.slice():R[P]=T.clone(),!0;{const v=R[P];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return R[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(v.equals(T)===!1)return v.copy(T),!0}}return!1}function x(M){const A=M.uniforms;let y=0;const R=16;for(let P=0,v=A.length;P<v;P++){const b=Array.isArray(A[P])?A[P]:[A[P]];for(let L=0,w=b.length;L<w;L++){const F=b[L],G=Array.isArray(F.value)?F.value:[F.value];for(let q=0,I=G.length;q<I;q++){const V=G[q],H=E(V),k=y%R,$=k%H.boundary,te=k+$;y+=$,te!==0&&R-te<H.storage&&(y+=R-te),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=H.storage}}}const T=y%R;return T>0&&(y+=R-T),M.__size=y,M.__cache={},this}function E(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",M),A}function p(M){const A=M.target;A.removeEventListener("dispose",p);const y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const ov=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function lv(){return yn===null&&(yn=new Kh(ov,16,16,Ni,qn),yn.name="DFG_LUT",yn.minFilter=Gt,yn.magFilter=Gt,yn.wrapS=Hn,yn.wrapT=Hn,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class cv{constructor(e={}){const{canvas:t=Th(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Qt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const E=m,p=new Set([Il,Dl,Pl]),d=new Set([Qt,Pn,Zr,jr,Cl,Ll]),M=new Uint32Array(4),A=new Int32Array(4),y=new B;let R=null,T=null;const P=[],v=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let w=!1,F=null;this._outputColorSpace=an;let G=0,q=0,I=null,V=-1,H=null;const k=new St,$=new St;let te=null;const oe=new Je(0);let xe=0,ie=t.width,Be=t.height,Te=1,J=null,ge=null;const le=new St(0,0,ie,Be),Ce=new St(0,0,ie,Be);let Ie=!1;const Le=new zl;let _t=!1,We=!1;const it=new At,pt=new B,ke=new St,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Kt(){return I===null?Te:1}let D=i;function Pt(_,U){return t.getContext(_,U)}try{const _={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),D===null){const U="webgl2";if(D=Pt(U,_),D===null)throw Pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw je("WebGLRenderer: "+_.message),_}let Xe,dt,fe,xt,S,g,N,Z,ne,re,de,Y,j,_e,Se,ce,se,De,ze,Qe,C,ae,K;function ve(){Xe=new l_(D),Xe.init(),C=new Q0(D,Xe),dt=new e_(D,Xe,e,C),fe=new j0(D,Xe),dt.reversedDepthBuffer&&u&&fe.buffers.depth.setReversed(!0),xt=new d_(D),S=new O0,g=new J0(D,Xe,fe,S,dt,C,xt),N=new o_(L),Z=new mp(D),ae=new Jg(D,Z),ne=new c_(D,Z,xt,ae),re=new h_(D,ne,Z,ae,xt),De=new f_(D,dt,g),Se=new t_(S),de=new F0(L,N,Xe,dt,ae,Se),Y=new sv(L,S),j=new z0,_e=new X0(Xe),se=new jg(L,N,fe,re,x,l),ce=new Z0(L,re,dt),K=new av(D,xt,dt,fe),ze=new Qg(D,Xe,xt),Qe=new u_(D,Xe,xt),xt.programs=de.programs,L.capabilities=dt,L.extensions=Xe,L.properties=S,L.renderLists=j,L.shadowMap=ce,L.state=fe,L.info=xt}ve(),E!==Qt&&(b=new m_(E,t.width,t.height,r,s));const ue=new iv(L,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const _=Xe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Xe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(_){_!==void 0&&(Te=_,this.setSize(ie,Be,!1))},this.getSize=function(_){return _.set(ie,Be)},this.setSize=function(_,U,W=!0){if(ue.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=_,Be=U,t.width=Math.floor(_*Te),t.height=Math.floor(U*Te),W===!0&&(t.style.width=_+"px",t.style.height=U+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,_,U)},this.getDrawingBufferSize=function(_){return _.set(ie*Te,Be*Te).floor()},this.setDrawingBufferSize=function(_,U,W){ie=_,Be=U,Te=W,t.width=Math.floor(_*W),t.height=Math.floor(U*W),this.setViewport(0,0,_,U)},this.setEffects=function(_){if(E===Qt){je("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let U=0;U<_.length;U++)if(_[U].isOutputPass===!0){Pe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(k)},this.getViewport=function(_){return _.copy(le)},this.setViewport=function(_,U,W,O){_.isVector4?le.set(_.x,_.y,_.z,_.w):le.set(_,U,W,O),fe.viewport(k.copy(le).multiplyScalar(Te).round())},this.getScissor=function(_){return _.copy(Ce)},this.setScissor=function(_,U,W,O){_.isVector4?Ce.set(_.x,_.y,_.z,_.w):Ce.set(_,U,W,O),fe.scissor($.copy(Ce).multiplyScalar(Te).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(_){fe.setScissorTest(Ie=_)},this.setOpaqueSort=function(_){J=_},this.setTransparentSort=function(_){ge=_},this.getClearColor=function(_){return _.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(_=!0,U=!0,W=!0){let O=0;if(_){let z=!1;if(I!==null){const me=I.texture.format;z=p.has(me)}if(z){const me=I.texture.type,ye=d.has(me),pe=se.getClearColor(),Ee=se.getClearAlpha(),we=pe.r,Oe=pe.g,Ve=pe.b;ye?(M[0]=we,M[1]=Oe,M[2]=Ve,M[3]=Ee,D.clearBufferuiv(D.COLOR,0,M)):(A[0]=we,A[1]=Oe,A[2]=Ve,A[3]=Ee,D.clearBufferiv(D.COLOR,0,A))}else O|=D.COLOR_BUFFER_BIT}U&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),F=_},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),se.dispose(),j.dispose(),_e.dispose(),S.dispose(),N.dispose(),re.dispose(),ae.dispose(),K.dispose(),de.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ec),ue.removeEventListener("sessionend",bc),gi.stop()};function ee(_){_.preventDefault(),zc("WebGLRenderer: Context Lost."),w=!0}function Ae(){zc("WebGLRenderer: Context Restored."),w=!1;const _=xt.autoReset,U=ce.enabled,W=ce.autoUpdate,O=ce.needsUpdate,z=ce.type;ve(),xt.autoReset=_,ce.enabled=U,ce.autoUpdate=W,ce.needsUpdate=O,ce.type=z}function Fe(_){je("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Et(_){const U=_.target;U.removeEventListener("dispose",Et),rt(U)}function rt(_){Un(_),S.remove(_)}function Un(_){const U=S.get(_).programs;U!==void 0&&(U.forEach(function(W){de.releaseProgram(W)}),_.isShaderMaterial&&de.releaseShaderCache(_))}this.renderBufferDirect=function(_,U,W,O,z,me){U===null&&(U=Lt);const ye=z.isMesh&&z.matrixWorld.determinant()<0,pe=Vf(_,U,W,O,z);fe.setMaterial(O,ye);let Ee=W.index,we=1;if(O.wireframe===!0){if(Ee=ne.getWireframeAttribute(W),Ee===void 0)return;we=2}const Oe=W.drawRange,Ve=W.attributes.position;let Re=Oe.start*we,st=(Oe.start+Oe.count)*we;me!==null&&(Re=Math.max(Re,me.start*we),st=Math.min(st,(me.start+me.count)*we)),Ee!==null?(Re=Math.max(Re,0),st=Math.min(st,Ee.count)):Ve!=null&&(Re=Math.max(Re,0),st=Math.min(st,Ve.count));const bt=st-Re;if(bt<0||bt===1/0)return;ae.setup(z,O,pe,W,Ee);let Mt,lt=ze;if(Ee!==null&&(Mt=Z.get(Ee),lt=Qe,lt.setIndex(Mt)),z.isMesh)O.wireframe===!0?(fe.setLineWidth(O.wireframeLinewidth*Kt()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(z.isLine){let Ft=O.linewidth;Ft===void 0&&(Ft=1),fe.setLineWidth(Ft*Kt()),z.isLineSegments?lt.setMode(D.LINES):z.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else z.isPoints?lt.setMode(D.POINTS):z.isSprite&&lt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ft=z._multiDrawStarts,Me=z._multiDrawCounts,Zt=z._multiDrawCount,Ze=Ee?Z.get(Ee).bytesPerElement:1,rn=S.get(O).currentProgram.getUniforms();for(let Mn=0;Mn<Zt;Mn++)rn.setValue(D,"_gl_DrawID",Mn),lt.render(Ft[Mn]/Ze,Me[Mn])}else if(z.isInstancedMesh)lt.renderInstances(Re,bt,z.count);else if(W.isInstancedBufferGeometry){const Ft=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Me=Math.min(W.instanceCount,Ft);lt.renderInstances(Re,bt,Me)}else lt.render(Re,bt)};function xn(_,U,W){_.transparent===!0&&_.side===Vn&&_.forceSinglePass===!1?(_.side=$t,_.needsUpdate=!0,_s(_,U,W),_.side=fi,_.needsUpdate=!0,_s(_,U,W),_.side=Vn):_s(_,U,W)}this.compile=function(_,U,W=null){W===null&&(W=_),T=_e.get(W),T.init(U),v.push(T),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),_!==W&&_.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const O=new Set;return _.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const me=z.material;if(me)if(Array.isArray(me))for(let ye=0;ye<me.length;ye++){const pe=me[ye];xn(pe,W,z),O.add(pe)}else xn(me,W,z),O.add(me)}),T=v.pop(),O},this.compileAsync=function(_,U,W=null){const O=this.compile(_,U,W);return new Promise(z=>{function me(){if(O.forEach(function(ye){S.get(ye).currentProgram.isReady()&&O.delete(ye)}),O.size===0){z(_);return}setTimeout(me,10)}Xe.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ua=null;function zf(_){Ua&&Ua(_)}function Ec(){gi.stop()}function bc(){gi.start()}const gi=new Ad;gi.setAnimationLoop(zf),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(_){Ua=_,ue.setAnimationLoop(_),_===null?gi.stop():gi.start()},ue.addEventListener("sessionstart",Ec),ue.addEventListener("sessionend",bc),this.render=function(_,U){if(U!==void 0&&U.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;F!==null&&F.renderStart(_,U);const W=ue.enabled===!0&&ue.isPresenting===!0,O=b!==null&&(I===null||W)&&b.begin(L,I);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(U),U=ue.getCamera()),_.isScene===!0&&_.onBeforeRender(L,_,U,I),T=_e.get(_,v.length),T.init(U),T.state.textureUnits=g.getTextureUnits(),v.push(T),it.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Le.setFromProjectionMatrix(it,wn,U.reversedDepth),We=this.localClippingEnabled,_t=Se.init(this.clippingPlanes,We),R=j.get(_,P.length),R.init(),P.push(R),ue.enabled===!0&&ue.isPresenting===!0){const ye=L.xr.getDepthSensingMesh();ye!==null&&Na(ye,U,-1/0,L.sortObjects)}Na(_,U,0,L.sortObjects),R.finish(),L.sortObjects===!0&&R.sort(J,ge),vt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,vt&&se.addToRenderList(R,_),this.info.render.frame++,_t===!0&&Se.beginShadows();const z=T.state.shadowsArray;if(ce.render(z,_,U),_t===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O&&b.hasRenderPass())===!1){const ye=R.opaque,pe=R.transmissive;if(T.setupLights(),U.isArrayCamera){const Ee=U.cameras;if(pe.length>0)for(let we=0,Oe=Ee.length;we<Oe;we++){const Ve=Ee[we];Ac(ye,pe,_,Ve)}vt&&se.render(_);for(let we=0,Oe=Ee.length;we<Oe;we++){const Ve=Ee[we];Tc(R,_,Ve,Ve.viewport)}}else pe.length>0&&Ac(ye,pe,_,U),vt&&se.render(_),Tc(R,_,U)}I!==null&&q===0&&(g.updateMultisampleRenderTarget(I),g.updateRenderTargetMipmap(I)),O&&b.end(L),_.isScene===!0&&_.onAfterRender(L,_,U),ae.resetDefaultState(),V=-1,H=null,v.pop(),v.length>0?(T=v[v.length-1],g.setTextureUnits(T.state.textureUnits),_t===!0&&Se.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?R=P[P.length-1]:R=null,F!==null&&F.renderEnd()};function Na(_,U,W,O){if(_.visible===!1)return;if(_.layers.test(U.layers)){if(_.isGroup)W=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(U);else if(_.isLightProbeGrid)T.pushLightProbeGrid(_);else if(_.isLight)T.pushLight(_),_.castShadow&&T.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Le.intersectsSprite(_)){O&&ke.setFromMatrixPosition(_.matrixWorld).applyMatrix4(it);const ye=re.update(_),pe=_.material;pe.visible&&R.push(_,ye,pe,W,ke.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Le.intersectsObject(_))){const ye=re.update(_),pe=_.material;if(O&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ke.copy(_.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ke.copy(ye.boundingSphere.center)),ke.applyMatrix4(_.matrixWorld).applyMatrix4(it)),Array.isArray(pe)){const Ee=ye.groups;for(let we=0,Oe=Ee.length;we<Oe;we++){const Ve=Ee[we],Re=pe[Ve.materialIndex];Re&&Re.visible&&R.push(_,ye,Re,W,ke.z,Ve)}}else pe.visible&&R.push(_,ye,pe,W,ke.z,null)}}const me=_.children;for(let ye=0,pe=me.length;ye<pe;ye++)Na(me[ye],U,W,O)}function Tc(_,U,W,O){const{opaque:z,transmissive:me,transparent:ye}=_;T.setupLightsView(W),_t===!0&&Se.setGlobalState(L.clippingPlanes,W),O&&fe.viewport(k.copy(O)),z.length>0&&gs(z,U,W),me.length>0&&gs(me,U,W),ye.length>0&&gs(ye,U,W),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Ac(_,U,W,O){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){const Re=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new Cn(1,1,{generateMipmaps:!0,type:Re?qn:Qt,minFilter:Ri,samples:Math.max(4,dt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const me=T.state.transmissionRenderTarget[O.id],ye=O.viewport||k;me.setSize(ye.z*L.transmissionResolutionScale,ye.w*L.transmissionResolutionScale);const pe=L.getRenderTarget(),Ee=L.getActiveCubeFace(),we=L.getActiveMipmapLevel();L.setRenderTarget(me),L.getClearColor(oe),xe=L.getClearAlpha(),xe<1&&L.setClearColor(16777215,.5),L.clear(),vt&&se.render(W);const Oe=L.toneMapping;L.toneMapping=Rn;const Ve=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),_t===!0&&Se.setGlobalState(L.clippingPlanes,O),gs(_,W,O),g.updateMultisampleRenderTarget(me),g.updateRenderTargetMipmap(me),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let st=0,bt=U.length;st<bt;st++){const Mt=U[st],{object:lt,geometry:Ft,material:Me,group:Zt}=Mt;if(Me.side===Vn&&lt.layers.test(O.layers)){const Ze=Me.side;Me.side=$t,Me.needsUpdate=!0,wc(lt,W,O,Ft,Me,Zt),Me.side=Ze,Me.needsUpdate=!0,Re=!0}}Re===!0&&(g.updateMultisampleRenderTarget(me),g.updateRenderTargetMipmap(me))}L.setRenderTarget(pe,Ee,we),L.setClearColor(oe,xe),Ve!==void 0&&(O.viewport=Ve),L.toneMapping=Oe}function gs(_,U,W){const O=U.isScene===!0?U.overrideMaterial:null;for(let z=0,me=_.length;z<me;z++){const ye=_[z],{object:pe,geometry:Ee,group:we}=ye;let Oe=ye.material;Oe.allowOverride===!0&&O!==null&&(Oe=O),pe.layers.test(W.layers)&&wc(pe,U,W,Ee,Oe,we)}}function wc(_,U,W,O,z,me){_.onBeforeRender(L,U,W,O,z,me),_.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),z.onBeforeRender(L,U,W,O,_,me),z.transparent===!0&&z.side===Vn&&z.forceSinglePass===!1?(z.side=$t,z.needsUpdate=!0,L.renderBufferDirect(W,U,O,z,_,me),z.side=fi,z.needsUpdate=!0,L.renderBufferDirect(W,U,O,z,_,me),z.side=Vn):L.renderBufferDirect(W,U,O,z,_,me),_.onAfterRender(L,U,W,O,z,me)}function _s(_,U,W){U.isScene!==!0&&(U=Lt);const O=S.get(_),z=T.state.lights,me=T.state.shadowsArray,ye=z.state.version,pe=de.getParameters(_,z.state,me,U,W,T.state.lightProbeGridArray),Ee=de.getProgramCacheKey(pe);let we=O.programs;O.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?U.environment:null,O.fog=U.fog;const Oe=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;O.envMap=N.get(_.envMap||O.environment,Oe),O.envMapRotation=O.environment!==null&&_.envMap===null?U.environmentRotation:_.envMapRotation,we===void 0&&(_.addEventListener("dispose",Et),we=new Map,O.programs=we);let Ve=we.get(Ee);if(Ve!==void 0){if(O.currentProgram===Ve&&O.lightsStateVersion===ye)return Cc(_,pe),Ve}else pe.uniforms=de.getUniforms(_),F!==null&&_.isNodeMaterial&&F.build(_,W,pe),_.onBeforeCompile(pe,L),Ve=de.acquireProgram(pe,Ee),we.set(Ee,Ve),O.uniforms=pe.uniforms;const Re=O.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Re.clippingPlanes=Se.uniform),Cc(_,pe),O.needsLights=kf(_),O.lightsStateVersion=ye,O.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),O.lightProbeGrid=T.state.lightProbeGridArray.length>0,O.currentProgram=Ve,O.uniformsList=null,Ve}function Rc(_){if(_.uniformsList===null){const U=_.currentProgram.getUniforms();_.uniformsList=Ks.seqWithValue(U.seq,_.uniforms)}return _.uniformsList}function Cc(_,U){const W=S.get(_);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Gf(_,U){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let W=0,O=_.length;W<O;W++){const z=_[W];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function Vf(_,U,W,O,z){U.isScene!==!0&&(U=Lt),g.resetTextureUnits();const me=U.fog,ye=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?U.environment:null,pe=I===null?L.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:$e.workingColorSpace,Ee=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,we=N.get(O.envMap||ye,Ee),Oe=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Re=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,bt=!!W.morphAttributes.color;let Mt=Rn;O.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Mt=L.toneMapping);const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ft=lt!==void 0?lt.length:0,Me=S.get(O),Zt=T.state.lights;if(_t===!0&&(We===!0||_!==H)){const ft=_===H&&O.id===V;Se.setState(O,_,ft)}let Ze=!1;O.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Zt.state.version||Me.outputColorSpace!==pe||z.isBatchedMesh&&Me.batching===!1||!z.isBatchedMesh&&Me.batching===!0||z.isBatchedMesh&&Me.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Me.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Me.instancing===!1||!z.isInstancedMesh&&Me.instancing===!0||z.isSkinnedMesh&&Me.skinning===!1||!z.isSkinnedMesh&&Me.skinning===!0||z.isInstancedMesh&&Me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Me.instancingMorph===!1&&z.morphTexture!==null||Me.envMap!==we||O.fog===!0&&Me.fog!==me||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Se.numPlanes||Me.numIntersection!==Se.numIntersection)||Me.vertexAlphas!==Oe||Me.vertexTangents!==Ve||Me.morphTargets!==Re||Me.morphNormals!==st||Me.morphColors!==bt||Me.toneMapping!==Mt||Me.morphTargetsCount!==Ft||!!Me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,Me.__version=O.version);let rn=Me.currentProgram;Ze===!0&&(rn=_s(O,U,z),F&&O.isNodeMaterial&&F.onUpdateProgram(O,rn,Me));let Mn=!1,jn=!1,Hi=!1;const ct=rn.getUniforms(),Tt=Me.uniforms;if(fe.useProgram(rn.program)&&(Mn=!0,jn=!0,Hi=!0),O.id!==V&&(V=O.id,jn=!0),Me.needsLights){const ft=Gf(T.state.lightProbeGridArray,z);Me.lightProbeGrid!==ft&&(Me.lightProbeGrid=ft,jn=!0)}if(Mn||H!==_){fe.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ct.setValue(D,"projectionMatrix",_.projectionMatrix),ct.setValue(D,"viewMatrix",_.matrixWorldInverse);const Qn=ct.map.cameraPosition;Qn!==void 0&&Qn.setValue(D,pt.setFromMatrixPosition(_.matrixWorld)),dt.logarithmicDepthBuffer&&ct.setValue(D,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ct.setValue(D,"isOrthographic",_.isOrthographicCamera===!0),H!==_&&(H=_,jn=!0,Hi=!0)}if(Me.needsLights&&(Zt.state.directionalShadowMap.length>0&&ct.setValue(D,"directionalShadowMap",Zt.state.directionalShadowMap,g),Zt.state.spotShadowMap.length>0&&ct.setValue(D,"spotShadowMap",Zt.state.spotShadowMap,g),Zt.state.pointShadowMap.length>0&&ct.setValue(D,"pointShadowMap",Zt.state.pointShadowMap,g)),z.isSkinnedMesh){ct.setOptional(D,z,"bindMatrix"),ct.setOptional(D,z,"bindMatrixInverse");const ft=z.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ct.setValue(D,"boneTexture",ft.boneTexture,g))}z.isBatchedMesh&&(ct.setOptional(D,z,"batchingTexture"),ct.setValue(D,"batchingTexture",z._matricesTexture,g),ct.setOptional(D,z,"batchingIdTexture"),ct.setValue(D,"batchingIdTexture",z._indirectTexture,g),ct.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ct.setValue(D,"batchingColorTexture",z._colorsTexture,g));const Jn=W.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&De.update(z,W,rn),(jn||Me.receiveShadow!==z.receiveShadow)&&(Me.receiveShadow=z.receiveShadow,ct.setValue(D,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&U.environment!==null&&(Tt.envMapIntensity.value=U.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=lv()),jn){if(ct.setValue(D,"toneMappingExposure",L.toneMappingExposure),Me.needsLights&&Hf(Tt,Hi),me&&O.fog===!0&&Y.refreshFogUniforms(Tt,me),Y.refreshMaterialUniforms(Tt,O,Te,Be,T.state.transmissionRenderTarget[_.id]),Me.needsLights&&Me.lightProbeGrid){const ft=Me.lightProbeGrid;Tt.probesSH.value=ft.texture,Tt.probesMin.value.copy(ft.boundingBox.min),Tt.probesMax.value.copy(ft.boundingBox.max),Tt.probesResolution.value.copy(ft.resolution)}Ks.upload(D,Rc(Me),Tt,g)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ks.upload(D,Rc(Me),Tt,g),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ct.setValue(D,"center",z.center),ct.setValue(D,"modelViewMatrix",z.modelViewMatrix),ct.setValue(D,"normalMatrix",z.normalMatrix),ct.setValue(D,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){const ft=O.uniformsGroups;for(let Qn=0,ki=ft.length;Qn<ki;Qn++){const Lc=ft[Qn];K.update(Lc,rn),K.bind(Lc,rn)}}return rn}function Hf(_,U){_.ambientLightColor.needsUpdate=U,_.lightProbe.needsUpdate=U,_.directionalLights.needsUpdate=U,_.directionalLightShadows.needsUpdate=U,_.pointLights.needsUpdate=U,_.pointLightShadows.needsUpdate=U,_.spotLights.needsUpdate=U,_.spotLightShadows.needsUpdate=U,_.rectAreaLights.needsUpdate=U,_.hemisphereLights.needsUpdate=U}function kf(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(_,U,W){const O=S.get(_);O.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),S.get(_.texture).__webglTexture=U,S.get(_.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:W,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,U){const W=S.get(_);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const Wf=D.createFramebuffer();this.setRenderTarget=function(_,U=0,W=0){I=_,G=U,q=W;let O=null,z=!1,me=!1;if(_){const pe=S.get(_);if(pe.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(D.FRAMEBUFFER,pe.__webglFramebuffer),k.copy(_.viewport),$.copy(_.scissor),te=_.scissorTest,fe.viewport(k),fe.scissor($),fe.setScissorTest(te),V=-1;return}else if(pe.__webglFramebuffer===void 0)g.setupRenderTarget(_);else if(pe.__hasExternalTextures)g.rebindTextures(_,S.get(_.texture).__webglTexture,S.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Oe=_.depthTexture;if(pe.__boundDepthTexture!==Oe){if(Oe!==null&&S.has(Oe)&&(_.width!==Oe.image.width||_.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(_)}}const Ee=_.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(me=!0);const we=S.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(we[U])?O=we[U][W]:O=we[U],z=!0):_.samples>0&&g.useMultisampledRTT(_)===!1?O=S.get(_).__webglMultisampledFramebuffer:Array.isArray(we)?O=we[W]:O=we,k.copy(_.viewport),$.copy(_.scissor),te=_.scissorTest}else k.copy(le).multiplyScalar(Te).floor(),$.copy(Ce).multiplyScalar(Te).floor(),te=Ie;if(W!==0&&(O=Wf),fe.bindFramebuffer(D.FRAMEBUFFER,O)&&fe.drawBuffers(_,O),fe.viewport(k),fe.scissor($),fe.setScissorTest(te),z){const pe=S.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,W)}else if(me){const pe=U;for(let Ee=0;Ee<_.textures.length;Ee++){const we=S.get(_.textures[Ee]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ee,we.__webglTexture,W,pe)}}else if(_!==null&&W!==0){const pe=S.get(_.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(_,U,W,O,z,me,ye,pe=0){if(!(_&&_.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=S.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){fe.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const we=_.textures[pe],Oe=we.format,Ve=we.type;if(_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),!dt.textureFormatReadable(Oe)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ve)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=_.width-O&&W>=0&&W<=_.height-z&&D.readPixels(U,W,O,z,C.convert(Oe),C.convert(Ve),me)}finally{const we=I!==null?S.get(I).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(_,U,W,O,z,me,ye,pe=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=S.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(U>=0&&U<=_.width-O&&W>=0&&W<=_.height-z){fe.bindFramebuffer(D.FRAMEBUFFER,Ee);const we=_.textures[pe],Oe=we.format,Ve=we.type;if(_.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),!dt.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,me.byteLength,D.STREAM_READ),D.readPixels(U,W,O,z,C.convert(Oe),C.convert(Ve),0);const st=I!==null?S.get(I).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,st);const bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ah(D,bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,me),D.deleteBuffer(Re),D.deleteSync(bt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,U=null,W=0){const O=Math.pow(2,-W),z=Math.floor(_.image.width*O),me=Math.floor(_.image.height*O),ye=U!==null?U.x:0,pe=U!==null?U.y:0;g.setTexture2D(_,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ye,pe,z,me),fe.unbindTexture()};const Xf=D.createFramebuffer(),qf=D.createFramebuffer();this.copyTextureToTexture=function(_,U,W=null,O=null,z=0,me=0){let ye,pe,Ee,we,Oe,Ve,Re,st,bt;const Mt=_.isCompressedTexture?_.mipmaps[me]:_.image;if(W!==null)ye=W.max.x-W.min.x,pe=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,Oe=W.min.y,Ve=W.isBox3?W.min.z:0;else{const Tt=Math.pow(2,-z);ye=Math.floor(Mt.width*Tt),pe=Math.floor(Mt.height*Tt),_.isDataArrayTexture?Ee=Mt.depth:_.isData3DTexture?Ee=Math.floor(Mt.depth*Tt):Ee=1,we=0,Oe=0,Ve=0}O!==null?(Re=O.x,st=O.y,bt=O.z):(Re=0,st=0,bt=0);const lt=C.convert(U.format),Ft=C.convert(U.type);let Me;U.isData3DTexture?(g.setTexture3D(U,0),Me=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(g.setTexture2DArray(U,0),Me=D.TEXTURE_2D_ARRAY):(g.setTexture2D(U,0),Me=D.TEXTURE_2D),fe.activeTexture(D.TEXTURE0),fe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),fe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),fe.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Zt=fe.getParameter(D.UNPACK_ROW_LENGTH),Ze=fe.getParameter(D.UNPACK_IMAGE_HEIGHT),rn=fe.getParameter(D.UNPACK_SKIP_PIXELS),Mn=fe.getParameter(D.UNPACK_SKIP_ROWS),jn=fe.getParameter(D.UNPACK_SKIP_IMAGES);fe.pixelStorei(D.UNPACK_ROW_LENGTH,Mt.width),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mt.height),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,we),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve);const Hi=_.isDataArrayTexture||_.isData3DTexture,ct=U.isDataArrayTexture||U.isData3DTexture;if(_.isDepthTexture){const Tt=S.get(_),Jn=S.get(U),ft=S.get(Tt.__renderTarget),Qn=S.get(Jn.__renderTarget);fe.bindFramebuffer(D.READ_FRAMEBUFFER,ft.__webglFramebuffer),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ki=0;ki<Ee;ki++)Hi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(_).__webglTexture,z,Ve+ki),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,S.get(U).__webglTexture,me,bt+ki)),D.blitFramebuffer(we,Oe,ye,pe,Re,st,ye,pe,D.DEPTH_BUFFER_BIT,D.NEAREST);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||_.isRenderTargetTexture||S.has(_)){const Tt=S.get(_),Jn=S.get(U);fe.bindFramebuffer(D.READ_FRAMEBUFFER,Xf),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,qf);for(let ft=0;ft<Ee;ft++)Hi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,z,Ve+ft):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tt.__webglTexture,z),ct?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Jn.__webglTexture,me,bt+ft):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Jn.__webglTexture,me),z!==0?D.blitFramebuffer(we,Oe,ye,pe,Re,st,ye,pe,D.COLOR_BUFFER_BIT,D.NEAREST):ct?D.copyTexSubImage3D(Me,me,Re,st,bt+ft,we,Oe,ye,pe):D.copyTexSubImage2D(Me,me,Re,st,we,Oe,ye,pe);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ct?_.isDataTexture||_.isData3DTexture?D.texSubImage3D(Me,me,Re,st,bt,ye,pe,Ee,lt,Ft,Mt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Me,me,Re,st,bt,ye,pe,Ee,lt,Mt.data):D.texSubImage3D(Me,me,Re,st,bt,ye,pe,Ee,lt,Ft,Mt):_.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,me,Re,st,ye,pe,lt,Ft,Mt.data):_.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,me,Re,st,Mt.width,Mt.height,lt,Mt.data):D.texSubImage2D(D.TEXTURE_2D,me,Re,st,ye,pe,lt,Ft,Mt);fe.pixelStorei(D.UNPACK_ROW_LENGTH,Zt),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,rn),fe.pixelStorei(D.UNPACK_SKIP_ROWS,Mn),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,jn),me===0&&U.generateMipmaps&&D.generateMipmap(Me),fe.unbindTexture()},this.initRenderTarget=function(_){S.get(_).__webglFramebuffer===void 0&&g.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?g.setTextureCube(_,0):_.isData3DTexture?g.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?g.setTexture2DArray(_,0):g.setTexture2D(_,0),fe.unbindTexture()},this.resetState=function(){G=0,q=0,I=null,fe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const Vs=13116416,uv=16436245,dv=4251856,fv=1710618,rr={studio:{pos:[0,1.8,7],look:[0,.4,0]},"letters-fly":{pos:[.5,2.2,6],look:[0,1,0]},orbit:{pos:[3.2,2.4,5.5],look:[0,.8,0]},cascade:{pos:[0,.8,4.5],look:[0,-.8,-2]},pivot:{pos:[0,2,6],look:[0,0,0]},"letters-spin":{pos:[0,1.5,5],look:[0,0,0]},"logo-ball":{pos:[0,.3,3.8],look:[0,0,0]}};function hv(n=512,e="#f5e6e0",t="#d4a574"){const i=document.createElement("canvas");i.width=n,i.height=n;const r=i.getContext("2d"),s=n/8;for(let o=0;o<8;o++)for(let l=0;l<8;l++)r.fillStyle=(l+o)%2===0?e:t,r.fillRect(l*s,o*s,s,s);const a=new Qh(i);return a.wrapS=a.wrapT=ia,a.repeat.set(4,4),a}const sr=.35,pv=7.2,Ud=.97,Lu=.993,Pu=5.6,mv=.94,ml=Math.PI/2.15,gl=-.05,Du=new B(0,Math.sin(ml),Math.cos(ml));function or(n,e){const t=Du.y;return Math.abs(t)<1e-6?gl:gl-Du.z*e/t}function gv(n,e=sr){const t=n.position,r=or(t.x,t.z)+e;return t.y<r?(t.y=r,!0):!1}function _v(n,e=Ud){const t=n.mesh.position,r=or(t.x,t.z)+n.radius;t.y>=r||(t.y=r,n.vy<0&&(n.vy=-n.vy*e),n.vx*=Lu,n.vz*=Lu)}function Iu(n,e,t){return n.map((i,r)=>i+(e[r]-i)*t)}function vv(n){const e=new Hh;e.background=new Je(Vs),e.fog=new Ol(Vs,8,22);const t=new on(45,1,.05,100);t.position.set(0,1.8,7),t.lookAt(0,.4,0);let i;try{i=new cv({canvas:n,antialias:!0,alpha:!1}),i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.shadowMap.enabled=!0,i.shadowMap.type=ju,i.setClearColor(Vs)}catch{return null}e.add(new dp(16777215,.55));const r=new up(16777215,1.1);r.position.set(4,8,6),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),e.add(r);const s=hv(),a=new Br({map:s,roughness:.45,metalness:.08}),o=new un(new vr(24,24),a);o.rotation.x=-ml,o.position.y=gl,o.receiveShadow=!0,e.add(o);const l=new un(new vr(30,14),new Br({color:Vs,roughness:.9}));l.position.set(0,5,-8),e.add(l);const c=new Gl(sr,24,24),f={yellow:new Br({color:uv,roughness:.28,metalness:.05}),cyan:new Br({color:dv,roughness:.28,metalness:.05}),black:new Br({color:fv,roughness:.35,metalness:.1})},h=[];let u="studio",m=rr.studio.pos,x=rr.studio.pos,E=rr.studio.look,p=rr.studio.look,d=1,M=!0,A=0;function y(k,$,te,oe,xe,ie,Be){const Te=new un(c,f[k]||f.yellow);return Te.castShadow=!0,Te.position.set($,te,oe),gv(Te),e.add(Te),h.push({mesh:Te,vx:xe,vy:ie,vz:Be,radius:sr,mode:"bounce"}),h[h.length-1]}function R(k,$,te,oe,xe,ie,Be=1.2){const Te=or($,te)+sr+Be;return y(k,$,Te,te,oe,xe,ie)}function T(){for(const k of h)e.remove(k.mesh);h.length=0}function P(){T(),R("black",-1.4,.2,.1,.07,.05,2.4),R("cyan",2.6,-.6,-.11,.08,.12,2.5),R("cyan",-2.6,-.4,.13,.06,-.09,2.2)}function v(k=5){T();const $=[["yellow",-2,.5,.14,.08,.1,3.2],["cyan",1.5,-1,-.12,.1,.14,3.6],["black",-.5,1.2,.16,-.06,-.12,2.8],["yellow",2.8,0,-.14,.05,-.1,3],["cyan",-1.8,-.8,.12,.08,.11,2.6]];for(let te=0;te<Math.min(k,$.length);te++){const oe=$[te];R(oe[0],oe[1],oe[2],oe[3],oe[4],oe[5],oe[6])}}function b(){T();const k=["yellow","yellow","yellow","cyan","yellow","cyan","yellow"];for(let $=0;$<k.length;$++){const te=$/k.length*Math.PI*2,oe=2.2+$%3*.3,xe=Math.cos(te)*oe,ie=Math.sin(te)*oe,Be=1.2+$%2*.5;y(k[$],xe,or(xe,ie)+sr+Be,ie,0,0,0);const Te=h[h.length-1];Te.mode="orbit",Te.orbitAngle=te,Te.orbitR=oe,Te.orbitY=Be,Te.orbitSpeed=.7+$*.08}}function L(){T(),R("yellow",-1.2,.5,.28,.12,.18,3.2),R("cyan",1,-.3,-.22,.14,-.16,2.8)}function w(){T();const k=y("yellow",0,or(0,0)+sr,0,0,0,0);k.mode="static"}function F(){const k=(Math.random()-.5)*4,$=-2-Math.random()*2;R("yellow",k,$,(Math.random()-.5)*.16,.04,.18+Math.random()*.1,5+Math.random()*2.5)}function G(k){const $=rr[k]||rr.studio;m=[t.position.x,t.position.y,t.position.z],x=$.pos;const te=new B;t.getWorldDirection(te),E=[t.position.x+te.x,t.position.y+te.y,t.position.z+te.z],p=$.look,d=0}function q(k){if(u=k,G(k),M=k!=="pivot"&&k!=="letters-spin"&&k!=="logo-ball",o.visible=M,l.visible=M,k==="studio")v(4);else if(k==="letters-fly")P();else if(k==="orbit")b();else if(k==="cascade"){T(),A=0;for(let $=0;$<12;$++)F()}else k==="pivot"?L():k==="letters-spin"?(T(),R("black",0,0,.06,0,.04,1.3)):k==="logo-ball"&&w()}v(4);function I(k){if(d<1){d=Math.min(1,d+k*1.8);const $=d*d*(3-2*d),te=Iu(m,x,$),oe=Iu(E,p,$);t.position.set(te[0],te[1],te[2]),t.lookAt(oe[0],oe[1],oe[2])}}function V(k,$){u==="cascade"&&(A+=k,A>.08&&h.length<38&&(A=0,F()));const te=M,oe=Math.max(1,Math.min(4,Math.ceil(k*60))),xe=k/oe;for(const ie of h)if(ie.mode!=="static"){if(ie.mode==="orbit"){ie.orbitAngle+=ie.orbitSpeed*k;const Be=Math.cos(ie.orbitAngle)*ie.orbitR,Te=Math.sin(ie.orbitAngle)*ie.orbitR;ie.mesh.position.x=Be,ie.mesh.position.z=Te;const J=ie.orbitY+Math.sin($*2+ie.orbitAngle)*.15;ie.mesh.position.y=te?or(Be,Te)+ie.radius+J:J;continue}for(let Be=0;Be<oe;Be++)ie.vy-=pv*xe,ie.mesh.position.x+=ie.vx*xe,ie.mesh.position.y+=ie.vy*xe,ie.mesh.position.z+=ie.vz*xe,te?_v(ie):ie.mesh.position.y<ie.radius&&(ie.mesh.position.y=ie.radius,ie.vy<0&&(ie.vy=-ie.vy*Ud)),ie.mesh.position.y>Pu&&(ie.mesh.position.y=Pu,ie.vy>0&&(ie.vy=-ie.vy*mv)),Math.abs(ie.mesh.position.x)>5&&(ie.mesh.position.x=Math.sign(ie.mesh.position.x)*5,ie.vx*=-.96),Math.abs(ie.mesh.position.z)>5&&(ie.mesh.position.z=Math.sign(ie.mesh.position.z)*5,ie.vz*=-.96);(u==="pivot"||u==="letters-fly")&&(ie.vx+=Math.sin($*3+ie.mesh.position.x)*.004)}}function H(){const k=n.clientWidth||window.innerWidth,$=n.clientHeight||window.innerHeight;!k||!$||(t.aspect=k/$,t.updateProjectionMatrix(),i.setSize(k,$,!1))}return q("studio"),{setScene(k){k!==u&&q(k)},update(k,$=0){I(k),V(k,$),i.render(e,t)},resize:H,dispose(){T(),c.dispose(),s.dispose(),a.dispose(),Object.values(f).forEach(k=>k.dispose()),i.dispose()}}}const xv=29,_o=[{at:0,action:"scene3d",id:"studio"},{at:3,action:"scene3d",id:"letters-fly"},{at:3,action:"motus",phase:"fly"},{at:3,action:"letter",id:"m"},{at:3.25,action:"letter",id:"o"},{at:3.625,action:"letter",id:"t"},{at:4.125,action:"letter",id:"u"},{at:4.75,action:"letter",id:"s"},{at:6.5,action:"motus",phase:"hide"},{at:8.5,action:"credit",id:"nicole"},{at:11.75,action:"credit",id:"nicole",hide:!0},{at:12,action:"scene3d",id:"orbit"},{at:12,action:"credit",id:"beccaro"},{at:14.75,action:"credit",id:"beccaro",hide:!0},{at:15,action:"scene3d",id:"cascade"},{at:17,action:"scene3d",id:"pivot"},{at:19,action:"credit",id:"masson"},{at:21.5,action:"credit",id:"masson",hide:!0},{at:22,action:"scene3d",id:"letters-spin"},{at:22,action:"motus",phase:"spin"},{at:22,action:"letter",id:"m"},{at:22.4,action:"letter",id:"o"},{at:22.8,action:"letter",id:"t"},{at:23.2,action:"letter",id:"u"},{at:23.6,action:"letter",id:"s"},{at:24,action:"scene3d",id:"logo-ball"},{at:24,action:"motus",phase:"logo"},{at:29,action:"finish"}];function Nd(n){const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches;return!n.force&&e?yv(n):Sv(n)}function Mv(n){return Nd({...n,force:!0})}function Sv(n){const e=document.getElementById("generique-overlay"),t=document.getElementById("app"),i=document.getElementById("generique-canvas"),r=document.getElementById("motus-snd-generique"),s=document.getElementById("generique-skip");if(!(e instanceof HTMLElement)||!(i instanceof HTMLCanvasElement))return Promise.resolve({withAudio:!1});const a={nicole:e.querySelector('[data-credit="nicole"]'),beccaro:e.querySelector('[data-credit="beccaro"]'),masson:e.querySelector('[data-credit="masson"]')},o=e.querySelector('[data-overlay="motus"]');function l(){o&&(o.classList.remove("is-visible","generique__motus--fly","generique__motus--spin","generique__motus--logo"),c())}function c(){o==null||o.querySelectorAll("[data-part]").forEach(G=>{G.classList.remove("is-revealed")})}function f(G){const q=o==null?void 0:o.querySelector(`[data-part="${G}"]`);q&&(q.classList.remove("is-revealed"),q.offsetWidth,q.classList.add("is-revealed"))}function h(G){if(o instanceof HTMLElement){if(G==="hide"){l();return}if(G==="logo"){const q=o.classList.contains("generique__motus--spin");o.classList.remove("generique__motus--fly","generique__motus--spin","generique__motus--logo"),o.classList.add("is-visible");const I=()=>{o.classList.add("generique__motus--logo"),o.querySelectorAll("[data-part]").forEach(V=>{V.classList.add("is-revealed")})};q?(o.classList.add("generique__motus--spin"),requestAnimationFrame(()=>{o.classList.remove("generique__motus--spin"),I()})):I();return}c(),o.classList.remove("generique__motus--fly","generique__motus--spin","generique__motus--logo"),o.classList.add(`generique__motus--${G}`,"is-visible")}}let u=!1,m=null,x=!1,E=0,p=0,d=0,M=0;const A=n.menuVolume??.42;n.pauseMenuGenerique(),t&&(t.style.visibility="hidden"),e.hidden=!1,e.classList.remove("generique--fade-out","generique--static");let y=vv(i);y?y.resize():(e.classList.add("generique--static"),h("logo"));const R=()=>y==null?void 0:y.resize();window.addEventListener("resize",R);function T(){for(const G of Object.values(a))G==null||G.classList.remove("is-visible")}function P(G,q){var I;T(),q&&((I=a[G])==null||I.classList.add("is-visible"))}function v(G){G.action==="scene3d"&&y&&y.setScene(G.id),G.action==="credit"&&P(G.id,!G.hide),G.action==="letter"&&f(G.id),G.action==="motus"&&h(G.phase),G.action==="finish"&&w()}function b(G){for(;d<_o.length&&_o[d].at<=G;)v(_o[d]),d+=1}function L(){if(typeof n.handoffGeneriqueToMenuMusic=="function"){n.handoffGeneriqueToMenuMusic();return}r instanceof HTMLAudioElement&&(r.loop=!0,r.volume=A,r.muted=!1,r.play().catch(()=>{})),n.syncMenuGenerique()}function w(){u||(u=!0,cancelAnimationFrame(E),window.removeEventListener("resize",R),s==null||s.removeEventListener("click",F),e.classList.add("generique--fade-out"),y&&(y.dispose(),y=null),L(),setTimeout(()=>{e.hidden=!0,e.classList.remove("generique--fade-out","generique--static"),T(),l(),t&&(t.style.visibility=""),L(),m==null||m({withAudio:x}),m=null},520))}function F(){w()}return s==null||s.addEventListener("click",F),y?(typeof n.playGeneriqueAudio=="function"?(x=!0,n.playGeneriqueAudio({loop:!1,resetTime:!0})):r instanceof HTMLAudioElement&&(x=!0,r.loop=!1,r.currentTime=0,r.volume=A,r.muted=!1,r.play().catch(()=>{})),new Promise(G=>{m=G;function q(I){if(u)return;const V=p?Math.min(.05,(I-p)/1e3):1/60;p=I;let H;if(r instanceof HTMLAudioElement&&!r.paused&&r.currentTime>0?(H=r.currentTime,M=H):(M+=V,H=M),b(H),y.update(V,H),r instanceof HTMLAudioElement&&H>=28&&!r.loop&&(r.loop=!0,r.play().catch(()=>{})),H>=xv){w();return}E=requestAnimationFrame(q)}E=requestAnimationFrame(q)})):new Promise(G=>{m=G,setTimeout(()=>w(),2200)})}function yv(n){const e=document.getElementById("generique-overlay"),t=document.getElementById("app"),i=e==null?void 0:e.querySelector('[data-overlay="motus"]');return e instanceof HTMLElement?(n.pauseMenuGenerique(),t&&(t.style.visibility="hidden"),e.hidden=!1,e.classList.add("generique--static"),i instanceof HTMLElement&&(i.classList.add("is-visible","generique__motus--logo"),i.querySelectorAll("[data-part]").forEach(r=>{r.classList.add("is-revealed")})),new Promise(r=>{setTimeout(()=>{e.hidden=!0,e.classList.remove("generique--static"),i instanceof HTMLElement&&(i.classList.remove("is-visible","generique__motus--logo"),i.querySelectorAll("[data-part]").forEach(s=>{s.classList.remove("is-revealed")})),t&&(t.style.visibility=""),n.syncMenuGenerique(),r({withAudio:!1})},2200)})):Promise.resolve({withAudio:!1})}const Fd="motus-audio-settings",Ev=.42,bv=1;let cs=!1,br=!1,Tr=!1;function Tv(){try{const n=localStorage.getItem(Fd);if(!n)return;const e=JSON.parse(n);cs=!!e.voicesMuted,br=!!e.musicMuted,Tr=!!e.sfxMuted}catch{}}function Av(){try{localStorage.setItem(Fd,JSON.stringify({voicesMuted:cs,musicMuted:br,sfxMuted:Tr}))}catch{}}function wv(){return{voicesMuted:cs,musicMuted:br,sfxMuted:Tr}}function Rv({voicesMuted:n,musicMuted:e,sfxMuted:t}={}){n!==void 0&&(cs=!!n),e!==void 0&&(br=!!e),t!==void 0&&(Tr=!!t),Av()}function Od(){return!cs}function Ar(){return!br}function tn(){return!Tr}function Cv(){return br?0:Ev}function Lv(){return Tr?0:bv}function us(){return Math.min(1,Math.max(0,Lv()))}const Hl=[".mp3"],ht={menuGenerique:"generique",verifyCorrect:"verify-correct",verifyWrong:"verify-wrong",verifyMissing:"verify-missing",wordInvalid:"word-invalid",wordNotFound:"mot-not-nound",wordWin:"word-win",noMoreTry:"no-more-try",timeout:"Timeout",letterBonus:"Lettre-Bonus",plateauReveal:"Retournement-Chiffre",plateauHideEight:"Retournement-Chiffre",plateauDrawFlip:"Tirrage-Chiffre",plateauMotusLine:"Motus",plateauBlackBall:"BouleNoire",plateauMagicBall:"boule_magique",plateauBallRoll:"motus_roll"},kl={correct:[ht.verifyCorrect],wrong:[ht.verifyWrong],missing:[ht.verifyMissing],invalid:[ht.wordInvalid,ht.wordNotFound],win:[ht.wordWin]};function Si(n){return n?[n]:[]}const Bd={correct:"motus-snd-correct",wrong:"motus-snd-wrong",missing:"motus-snd-missing",invalid:"motus-snd-invalid",win:"motus-snd-win"},zd=["correct","wrong","missing","invalid","win"],vo=new Map,ca=new Map;let Hs=null;const gt=new Map;function nn(n){const e=typeof import.meta<"u"&&"/motus-app/"||"./",t=`sounds/${n}`;try{const i=new URL(e,window.location.href);return new URL(t,i).href}catch{return`${e}${t}`.replace(/([^:]\/)\/+/g,"$1")}}async function Gd(n){return tn()?(be(),Zl(nn(n),`public-${n}`)):!1}async function Vd(n,e=22e3){if(!n||!tn())return!1;be();const t=nn(n);if(!t)return!1;const i=document.createElement("audio");i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.preload="auto",i.style.display="none",i.setAttribute("data-motus-plateau",`public-wait-${n}`),document.body.appendChild(i),i.src=t,i.volume=us();try{i.load()}catch{return at(i),!1}if(!await zi(i,5e3)||i.error)return at(i),!1;const s=Math.min(e,Number.isFinite(i.duration)&&i.duration>0?Math.ceil(i.duration*1e3)+1200:e),a=Fi(i,s);try{i.muted=!1,i.currentTime=0;const l=i.play();l!==void 0&&await l.catch(()=>{})}catch{return at(i),!1}if(i.error||i.paused)return at(i),!1;const o=await a;return at(i),o==="ended"||o==="timeout"}async function Pv(){return be(),Gd(`${ht.letterBonus}.mp3`)}async function Dv(){return be(),Gd(`${ht.wordNotFound}.mp3`)}async function Iv(){return Vd(`${ht.timeout}.mp3`)}async function Uv(){return Nv()}async function Nv(){if(!tn())return!1;const{cacheKey:n,bases:e,domId:t}=mt.ballRoll;try{be(),fs();const i=qe();if(i){await Ye(i);let r=gt.get(n);if(wt(r)||(r=await Yt(i,n,e)),wt(r))return await wr(i,r),!0}return t&&await Cr(t,{maxWaitMs:3e4})||t&&await Jd(t,{maxWaitMs:3e4})?!0:Vd(`${ht.plateauBallRoll}.mp3`,3e4)}catch{return!1}}async function Xr(n,e=22e3){if(!tn())return!1;be();const t=document.getElementById(n);if(!(t instanceof HTMLAudioElement)||t.error)return!1;t.muted=!1,t.currentTime=0;const i=Math.min(e,Number.isFinite(t.duration)&&t.duration>0?Math.ceil(t.duration*1e3)+1200:e),r=Fi(t,i);try{const a=t.play();a!==void 0&&await a.catch(()=>{})}catch{return!1}if(t.error||t.paused)return!1;const s=await r;return s==="ended"||s==="timeout"}const _l="motus-snd-cast-voice",lr=new Map,Hd={t:"motus-snd-cast-t",23:"motus-snd-cast-23",51:"motus-snd-cast-51"};function Fv(){const n=document.getElementById(_l);if(n instanceof HTMLAudioElement)return n;const e=document.createElement("audio");return e.id=_l,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.preload="auto",document.body.appendChild(e),e}async function kd(n,e={}){const{forceReload:t=!1}=e,i=Fv(),r=i.getAttribute("data-motus-cast-href");if(!t&&r===n&&i.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA&&!i.error)return!0;i.setAttribute("data-motus-cast-href",n),i.src=n;try{i.load()}catch{}return zi(i,6e3)}async function Wd(n,e={}){const{useCache:t=!1}=e;if(!t)lr.delete(n);else{const s=lr.get(n);if(wt(s))return s;lr.delete(n)}const i=qe();if(!i)return null;await Ye(i);const r=nn(`${n}.mp3`);try{const s=await Xl(i,r,{cache:"no-store"});return wt(s)?(lr.set(n,s),s):null}catch{return null}}function Xd(n){if(!Od()||!(n!=null&&n.length))return;be();const e=qe();e&&Ye(e);for(const t of n)Hd[t]||(kd(nn(`${t}.mp3`)),e&&Wd(t,{useCache:!0}))}async function qd(n){if(!Od()||!(n!=null&&n.length))return!1;const e=qe();e&&await Ye(e);for(const t of n){lr.delete(t);const i=Hd[t];if(i&&await Xr(i))return!0;const r=nn(`${t}.mp3`);if(await kd(r,{forceReload:!0})&&await Xr(_l))return!0;if(e){const s=await Wd(t);if(wt(s))return await wr(e,s),!0}}return!1}function vl(n){const e=[],t=kl[n];if(!t)return e;for(const i of t)for(const r of Hl)e.push(nn(i+r));return e}function ot(n){return new Promise(e=>setTimeout(e,n))}function kt(){if(typeof navigator>"u")return!1;const n=navigator.userAgent;return/Safari/i.test(n)&&!/Chrome|Chromium|CriOS|EdgiOS|FxiOS|OPR\//i.test(n)}function ds(){if(typeof navigator>"u")return!1;const n=navigator.userAgent;return/iPad|iPhone|iPod/i.test(n)?!0:navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}const Qr=new Set(["correct","wrong","missing"]);let va=!1,ar=null;const qr=new Map;let fr=null;function Wl(){if(fr){try{fr.stop()}catch{}fr=null}}function Ov(n){const e=kl[n];return e!=null&&e.length?nn(`${e[0]}${Hl[0]}`):""}function qe(){try{if(!Hs){const n=window.AudioContext||window.webkitAudioContext;if(!n)return null;try{Hs=new n({latencyHint:"playback",sampleRate:44100})}catch{Hs=new n({latencyHint:"playback"})}}return Hs}catch{return null}}function fs(){const n=document.getElementById("motus-snd-generique");if(n instanceof HTMLAudioElement&&!n.paused)try{n.pause()}catch{}}function Bv(){for(const n of qr.values())try{URL.revokeObjectURL(n)}catch{}qr.clear()}async function Ye(n){if(!(!n||n.state==="running")){if(n.state==="suspended")try{await n.resume()}catch{}if(n.state==="suspended")try{await n.resume()}catch{}}}function Fi(n,e){return new Promise(t=>{let i=!1;function r(c){i||(i=!0,clearTimeout(l),n.removeEventListener("ended",s),n.removeEventListener("error",a),n.removeEventListener("timeupdate",o),t(c))}function s(){r("ended")}function a(){r("error")}function o(){const c=n.duration;Number.isFinite(c)&&c>.02&&n.currentTime>=c-.02&&r("ended")}const l=setTimeout(()=>r("timeout"),e);n.addEventListener("ended",s,{once:!0}),n.addEventListener("error",a,{once:!0}),n.addEventListener("timeupdate",o)})}function Uu(n,e){n.dataset.motusWired!=="1"&&(n.dataset.motusWired="1",n.addEventListener("error",()=>{const t=vl(e);let i=(ca.get(e)??0)+1;if(i<t.length){ca.set(e,i),n.src=t[i];try{n.load()}catch{}}},!1))}function Yd(n){const e=vo.get(n);if(e)return e;const t=Bd[n],i=t?document.getElementById(t):null;if(i){if(!i.currentSrc&&!i.getAttribute("src")){const a=vl(n);ca.set(n,0),a[0]&&(i.src=a[0],Uu(i,n))}return vo.set(n,i),i}const r=document.createElement("audio");r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.preload="auto",r.style.display="none",r.setAttribute("data-motus-snd",n),document.body.appendChild(r);const s=vl(n);return ca.set(n,0),s[0]&&(r.src=s[0]),Uu(r,n),vo.set(n,r),r}let xo=null;function zv(){if(xo)return xo;const n=document.createElement("audio");return n.setAttribute("playsinline",""),n.setAttribute("webkit-playsinline",""),n.preload="auto",n.style.display="none",n.setAttribute("data-motus-snd","unlock-ping"),n.src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=",document.body.appendChild(n),xo=n,n}function be(){try{const n=qe();if(n){n.state==="suspended"&&n.resume();const e=n.createBuffer(1,1,n.sampleRate),t=n.createBufferSource(),i=n.createGain();i.gain.value=0,t.buffer=e,t.connect(i),i.connect(n.destination);const r=n.currentTime;t.start(r),t.stop(r+.001)}}catch{}try{const n=zv();n.muted=!0;const e=n.play();e!==void 0&&e.then(()=>{n.pause(),n.currentTime=0,n.muted=!0}).catch(()=>{n.muted=!0})}catch{}}async function Gv(n,e={}){const{keepMuted:t=!1}=e;if(ds()||kt()){if(n.muted=!0,n.readyState<HTMLMediaElement.HAVE_METADATA)try{n.load()}catch{}await ix(n,8e3).catch(()=>!1),n.muted=!0;return}const i=n.muted;n.muted=!0;const r=n.volume;n.volume=0;try{const s=n.play();s!==void 0&&await s.catch(()=>{})}catch{}try{n.pause(),n.currentTime=0}catch{}n.volume=r>0?r:1,n.muted=t?!0:i}async function oi(){try{be();for(const e of zd){const t=Yd(e),i=Qr.has(e);kt()&&i||(await Gv(t,{keepMuted:i}),await ot(12))}await Ta().catch(()=>{});const n=qe();if(n&&(await Ye(n),kt()&&!ds()))for(const e of Qr)await $d(n,e)}catch{}}async function Vv(n){if(qr.has(n))return qr.get(n);const e=Ov(n);if(!e)return null;const t=await fetch(e,{mode:"cors",cache:"force-cache"});if(!t.ok)return null;const i=await t.arrayBuffer();if(!i.byteLength)return null;const r=URL.createObjectURL(new Blob([i],{type:"audio/mpeg"}));qr.set(n,r);const s=qe();if(s){await Ye(s);try{const a=i.slice(0),o=await s.decodeAudioData(a);wt(o)&&gt.set(n,o)}catch{}}return r}async function Hv(){fs(),be();const n=qe();if(n&&await Ye(n),await Promise.all([...Qr].map(e=>Vv(e))),(n==null?void 0:n.state)==="running")try{await n.suspend()}catch{}va=!0}function xa(){return!kt()||va?Promise.resolve():ar||(ar=Hv().catch(()=>{}).finally(()=>{ar=null}),ar)}async function kv(n){const e=Yd(n);if(e.error)return!1;e.muted=!1,e.currentTime=0;const t=Math.min(15e3,Number.isFinite(e.duration)&&e.duration>0?Math.ceil(e.duration*1e3)+1200:1e4),i=Fi(e,t);try{const s=e.play();s!==void 0?await s:await ot(80)}catch{return!1}if(e.error)return!1;const r=await i;return e.error?!1:r==="ended"}async function Xl(n,e,t={}){await Ye(n);const i=new AbortController,r=setTimeout(()=>i.abort(),15e3),s=t.cache??"force-cache";try{const a=await fetch(e,{mode:"cors",cache:s,signal:i.signal});if(!a.ok)throw new Error(String(a.status));const o=await a.arrayBuffer(),l=o.byteLength?o.slice(0):o;return await n.decodeAudioData(l)}finally{clearTimeout(r)}}function wt(n){return n&&typeof n.duration=="number"&&Number.isFinite(n.duration)&&n.duration>.001}async function $d(n,e){if(!n)return null;if(await Ye(n),gt.has(e)){const i=gt.get(e);if(wt(i))return i;gt.delete(e)}const t=kl[e];if(!(t!=null&&t.length))return null;for(const i of t)for(const r of Hl){const s=nn(i+r);try{const a=await Xl(n,s);if(!wt(a))continue;return gt.set(e,a),a}catch{}}return null}async function wr(n,e){wt(e)&&(await Ye(n),Wl(),await new Promise(t=>{const i=n.createBufferSource(),r=n.createGain();r.gain.value=us(),i.buffer=e,i.connect(r),r.connect(n.destination),fr=i;const s=()=>{fr===i&&(fr=null),t()};i.onended=s;try{i.start(n.currentTime+.002)}catch{s()}}))}async function Kd(n){if(!kt())return!1;await xa();const e=qe();if(!e)return!1;const t=gt.get(n);return wt(t)?(fs(),Wl(),await wr(e,t),!0):!1}function Wv(){gt.clear(),lr.clear(),Bv(),va=!1,ar=null}async function ql(n){const e=Qr.has(n),t=kt()&&e;if(t||be(),t)return Kd(n);if(await kv(n))return!0;const i=qe();if(i){await Ye(i);const r=await $d(i,n);if(wt(r))return await wr(i,r),!0}return!1}function Yl(n,e,t,i,r,s){const a=n.createOscillator(),o=n.createGain();a.type=r,a.frequency.setValueAtTime(t,e),o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(s,e+.012),o.gain.linearRampToValueAtTime(1e-4,e+i),a.connect(o),o.connect(n.destination),a.start(e),a.stop(e+i+.04)}function Xv(n,e,t,i){return i&&n==="correct"?523.25*2**(e*5/Math.max(t,1)/12):n==="correct"?698.46:n==="wrong"?220:n==="missing"?311:196}function qv(n){return n==="missing"?"triangle":"sine"}const Nu=.09;function Yv(n){return kt()?35:25}async function $l(n,e={}){if(n!=="correct"&&n!=="wrong"&&n!=="missing"||!tn())return;const{index:t=0,wordLen:i=1,isWin:r=!1}=e;try{if(kt()&&va&&await Kd(n)){await ot(55);return}const s=qe();if(s&&!kt()&&await Ye(s),!await ql(n)){const o=qe();if(o){await Ye(o);const l=o.currentTime+.02,c=Xv(n,t,i,r),f=qv(n);Yl(o,l,c,Nu,f,n==="missing"?.24:n==="wrong"?.22:.3),await ot(Math.ceil(Nu*1e3)+90)}}await ot(Yv(n))}catch{}}const $v=55;async function Kv(n,e={}){const{onLetter:t}=e;if(!n.length)return;await xa(),fs(),Wl();const i=qe();if(i){await Ye(i);for(let r=0;r<n.length;r++){const s=n[r];if(s!=="correct"&&s!=="wrong"&&s!=="missing")continue;const a=gt.get(s);wt(a)&&(await wr(i,a),t&&t(r,s),await ot($v))}}}async function Zd(n,e={}){const{isWin:t=!1,onLetter:i}=e;if(!n.length)return;if(kt()){await Kv(n,{onLetter:i});return}be();const r=qe();r&&await Ye(r);for(let s=0;s<n.length;s++){const a=n[s];a!=="correct"&&a!=="wrong"&&a!=="missing"||(i&&i(s,a),await $l(a,{index:s,wordLen:n.length,isWin:t}))}}async function li(){if(tn())try{if(be(),await ql("invalid"))return;const e=qe();if(!e)return;await Ye(e);const t=e.currentTime+.02,i=e.createOscillator(),r=e.createGain();i.type="sawtooth",i.frequency.setValueAtTime(185,t),i.frequency.linearRampToValueAtTime(95,t+.18),r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.24,t+.02),r.gain.linearRampToValueAtTime(1e-4,t+.24),i.connect(r),r.connect(e.destination),i.start(t),i.stop(t+.28),await ot(320)}catch{}}async function Kl(){if(tn())try{if(be(),await ql("win"))return;const e=qe();if(!e)return;await Ye(e);const t=e.currentTime+.02;[523.25,659.25,783.99,1046.5].forEach((r,s)=>{Yl(e,t+s*.088,r,.13,"sine",.22)}),await ot(520)}catch{}}async function Zv(n){if(zd.includes(n)){if(n==="correct"||n==="wrong"||n==="missing"){await $l(n,{index:0,wordLen:1,isWin:!1});return}if(n==="invalid"){await li();return}if(n==="win"){await Kl();return}}}async function jv(){try{be();const n=qe();if(!n)return;await Ye(n);const e=n.currentTime+.015,t=n.createOscillator(),i=n.createGain();t.type="sine",t.frequency.setValueAtTime(440,e),i.gain.setValueAtTime(1e-4,e),i.gain.linearRampToValueAtTime(.22,e+.02),i.gain.linearRampToValueAtTime(1e-4,e+.32),t.connect(i),i.connect(n.destination),t.start(e),t.stop(e+.34),await ot(380)}catch{}}const Ma=[".mp3"],mt={revealNumber:{cacheKey:"plateau-reveal",bases:Si(ht.plateauReveal),clipSec:.08,domId:"motus-snd-plateau-reveal"},hideEight:{cacheKey:"plateau-hide",bases:Si(ht.plateauHideEight),clipSec:null,domId:"motus-snd-plateau-hide"},drawFlip:{cacheKey:"plateau-flip",bases:Si(ht.plateauDrawFlip),clipSec:null,domId:"motus-snd-plateau-flip"},motusLine:{cacheKey:"plateau-motus",bases:Si(ht.plateauMotusLine),clipSec:null,domId:"motus-snd-plateau-motus"},blackBall:{cacheKey:"plateau-black",bases:Si(ht.plateauBlackBall),clipSec:null,domId:"motus-snd-plateau-black"},magicBall:{cacheKey:"plateau-magic",bases:Si(ht.plateauMagicBall),clipSec:null,domId:"motus-snd-plateau-magic"},ballRoll:{cacheKey:"plateau-ball-roll",bases:Si(ht.plateauBallRoll),clipSec:null,domId:"motus-snd-plateau-roll"}},Sa=34,Rr=44;function Jv(n,e){return n.length>0||!0}function Qv(){for(const n of Qr){const e=Bd[n],t=e?document.getElementById(e):null;t instanceof HTMLAudioElement&&(t.preload="none",t.muted=!0,t.removeAttribute("src"),t.removeAttribute("data-motus-verify-href"))}}function ex(){const n=[["motus-snd-plateau-reveal",ht.plateauReveal],["motus-snd-plateau-hide",ht.plateauHideEight],["motus-snd-plateau-flip",ht.plateauDrawFlip],["motus-snd-plateau-motus",ht.plateauMotusLine],["motus-snd-plateau-black",ht.plateauBlackBall],["motus-snd-plateau-magic",ht.plateauMagicBall],["motus-snd-plateau-roll",ht.plateauBallRoll]];for(const[e,t]of n){const i=document.getElementById(e);if(i instanceof HTMLAudioElement)if(t){i.src=nn(`${t}.mp3`);try{i.load()}catch{}}else i.removeAttribute("src")}}function ya(n,e){const t=document.getElementById(n);if(!t||!(t instanceof HTMLAudioElement)||t.error||!Number.isFinite(e)||e<=0)return!1;try{t.muted=!1,t.currentTime=0}catch{return!1}try{const i=t.play();i!==void 0&&i.catch(()=>{})}catch{return!1}return window.setTimeout(()=>{try{t.pause(),t.currentTime=0}catch{}},Math.ceil(e*1e3)+Sa),!0}function Fu(n){const e=Number.isFinite(n)&&n>0?n:.08;return Math.ceil(e*1e3)+Sa+Rr}async function Cr(n,e={}){const t=e.maxWaitMs??2e4,i=document.getElementById(n);if(!i||!(i instanceof HTMLAudioElement)||i.error)return!1;try{if(i.pause(),i.muted=!1,i.currentTime=0,i.volume=us(),ds()||kt()){try{i.load()}catch{}if(!await zi(i,4e3)||i.error)return!1}}catch{return!1}try{const a=i.play();a!==void 0&&await a}catch{return!1}if(i.error||i.paused)return!1;const r=Number.isFinite(i.duration)&&i.duration>0?Math.min(t,Math.ceil(i.duration*1e3)+2e3):t,s=await Fi(i,r);return s==="ended"?!0:s==="timeout"?i.currentTime>.04&&!i.paused:!1}let Ou=Promise.resolve();function jd(n){const e=Ou.then(()=>n());return Ou=e.catch(()=>{}),e}function at(n){if(n){try{n.pause(),n.removeAttribute("src"),n.load()}catch{}try{n.remove()}catch{}}}async function Zl(n,e){if(!n)return!1;const t=document.createElement("audio");t.setAttribute("playsinline",""),t.setAttribute("webkit-playsinline",""),t.preload="auto",t.style.display="none",t.setAttribute("data-motus-plateau",e),document.body.appendChild(t),t.src=n;try{t.load()}catch{return at(t),!1}if(!await zi(t,5e3)||t.error)return at(t),!1;const r=()=>at(t);try{t.muted=!1,t.currentTime=0;const s=t.play();s!==void 0&&await s.catch(()=>{})}catch{return at(t),!1}return t.error?(at(t),!1):(t.addEventListener("ended",r,{once:!0}),t.addEventListener("error",r,{once:!0}),window.setTimeout(r,12e3),!0)}async function Ea(n){for(const e of n)for(const t of Ma){const i=nn(e+t);if(await Zl(i,`ephemeral-${e}${t}`))return!0}return!1}async function ba(n){const e=document.getElementById(n);if(!e||!(e instanceof HTMLAudioElement)||e.error)return!1;const t=e.currentSrc||e.src;return t?Zl(t,`ephemeral-dom-${n}`):!1}async function Jd(n,e={}){const t=document.getElementById(n);if(!t||!(t instanceof HTMLAudioElement)||t.error)return!1;const i=t.currentSrc||t.src;if(!i)return!1;const r=e.maxWaitMs??12e4,s=document.createElement("audio");s.setAttribute("playsinline",""),s.setAttribute("webkit-playsinline",""),s.preload="auto",s.style.display="none",s.setAttribute("data-motus-plateau",`ephemeral-end-dom-${n}`),document.body.appendChild(s),s.src=i;try{s.load()}catch{return at(s),!1}if(!await zi(s,8e3)||s.error)return at(s),!1;try{s.muted=!1,s.currentTime=0,s.volume=us();const c=s.play();c!==void 0&&await c}catch{return at(s),!1}if(s.error||s.paused)return at(s),!1;const o=Number.isFinite(s.duration)&&s.duration>0?Math.min(r,Math.ceil(s.duration*1e3)+2e3):r,l=await Fi(s,o);return at(s),l==="ended"?!0:l==="timeout"?s.currentTime>.04:!1}async function Qd(n,e,t){if(!n||!Number.isFinite(e)||e<=0)return!1;const i=document.createElement("audio");i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.preload="auto",i.style.display="none",i.setAttribute("data-motus-plateau",t),document.body.appendChild(i),i.src=n;try{i.load()}catch{return at(i),!1}if(!await zi(i,5e3)||i.error)return at(i),!1;const s=()=>at(i);try{i.muted=!1,i.currentTime=0;const a=i.play();a!==void 0&&await a.catch(()=>{})}catch{return at(i),!1}return i.error?(at(i),!1):(window.setTimeout(s,Math.ceil(e*1e3)+Sa),!0)}async function tx(n,e){const t=document.getElementById(n);if(!t||!(t instanceof HTMLAudioElement)||t.error)return!1;const i=t.currentSrc||t.src;return i?Qd(i,e,`ephemeral-short-dom-${n}`):!1}async function nx(n,e){for(const t of n)for(const i of Ma){const r=nn(t+i);if(await Qd(r,e,`ephemeral-short-${t}${i}`))return!0}return!1}function ix(n,e){const t=()=>n.readyState>=HTMLMediaElement.HAVE_ENOUGH_DATA&&!n.error;return t()?Promise.resolve(!0):new Promise(i=>{let r=!1;const s=setTimeout(()=>a(!1),e);function a(f){r||(r=!0,clearTimeout(s),n.removeEventListener("canplaythrough",o),n.removeEventListener("canplay",o),n.removeEventListener("loadeddata",l),n.removeEventListener("error",c),i(f))}function o(){t()&&a(!0)}function l(){n.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA&&!n.error&&a(!0)}function c(){a(!1)}n.addEventListener("canplaythrough",o,{once:!0}),n.addEventListener("canplay",o,{once:!0}),n.addEventListener("loadeddata",l,{once:!0}),n.addEventListener("error",c,{once:!0}),queueMicrotask(()=>{t()&&a(!0)})})}function zi(n,e){const t=()=>n.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA&&!n.error;return t()?Promise.resolve(!0):new Promise(i=>{let r=!1;const s=setTimeout(()=>a(!1),e);function a(f){r||(r=!0,clearTimeout(s),n.removeEventListener("canplay",o),n.removeEventListener("loadeddata",l),n.removeEventListener("error",c),i(f))}function o(){t()&&a(!0)}function l(){t()&&a(!0)}function c(){a(!1)}n.addEventListener("canplay",o,{once:!0}),n.addEventListener("loadeddata",l,{once:!0}),n.addEventListener("error",c,{once:!0}),queueMicrotask(()=>{t()&&a(!0)})})}async function Lr(n,e,t=!1){for(const i of n)for(const r of Ma){const s=nn(i+r),a=document.createElement("audio");a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.preload="auto",a.style.display="none",a.setAttribute("data-motus-plateau",`${i}${r}`),document.body.appendChild(a),a.src=s;try{a.load()}catch{at(a);continue}if(!await zi(a,5e3)||a.error){at(a);continue}try{a.currentTime=0}catch{at(a);continue}try{const l=a.play();l!==void 0&&await l}catch{at(a);continue}if(await ot(45),a.error){at(a);continue}if(e!=null&&Number.isFinite(e))window.setTimeout(()=>{try{a.pause(),a.currentTime=0}catch{}at(a)},Math.ceil(e*1e3)+Sa);else if(t){const l=Math.min(12e4,Number.isFinite(a.duration)&&a.duration>0?Math.ceil(a.duration*1e3)+2e3:6e4);await Fi(a,l),at(a)}else{const l=Math.min(2e4,Number.isFinite(a.duration)&&a.duration>0?Math.ceil(a.duration*1e3)+1e3:8e3);await Fi(a,l),at(a)}return!0}return!1}async function Yt(n,e,t){if(gt.has(e))return gt.get(e);for(const i of t)for(const r of Ma)try{const s=await Xl(n,nn(i+r));if(wt(s))return gt.set(e,s),s}catch{}return null}function rx(n,e){return e==null||!Number.isFinite(e)?n.duration:Math.min(Math.max(e,.022),n.duration)}function hs(n,e,t){const i=gt.get(e);if(!wt(i))return null;const r=rx(i,t),s=n.createBufferSource(),a=n.createGain();a.gain.value=us(),s.buffer=i,s.connect(a),a.connect(n.destination);const o=n.currentTime+.003;return s.start(o),s.stop(o+r),r}function vn(n){try{const e=qe();if(!e)return;e.state==="suspended"&&e.resume();const t=e.currentTime+.004;Yl(e,t,n==="down"?360:920,.062,"sine",.13)}catch{}}async function Ta(){try{be();const n=qe();if(!n)return;await Ye(n),await Yt(n,mt.revealNumber.cacheKey,mt.revealNumber.bases),mt.hideEight.bases.length&&await Yt(n,mt.hideEight.cacheKey,mt.hideEight.bases),await Yt(n,mt.drawFlip.cacheKey,mt.drawFlip.bases),await Yt(n,mt.blackBall.cacheKey,mt.blackBall.bases),mt.magicBall.bases.length&&await Yt(n,mt.magicBall.cacheKey,mt.magicBall.bases),await Yt(n,mt.motusLine.cacheKey,mt.motusLine.bases),mt.ballRoll.bases.length&&await Yt(n,mt.ballRoll.cacheKey,mt.ballRoll.bases)}catch{}}function xl(n={}){return sx(n)}async function sx(n={}){if(!tn()){n.awaitCompletion&&await ot(80);return}const{cacheKey:e,bases:t,clipSec:i,domId:r}=mt.revealNumber;try{be();const s=qe();if(s){await Ye(s),gt.get(e)||await Yt(s,e,t);const o=gt.get(e);if(wt(o)){const l=hs(s,e,i);if(l!=null){n.awaitCompletion&&await ot(Math.ceil(l*1e3)+Rr);return}}}if(n.awaitCompletion){if(r&&ya(r,i)){await ot(Fu(i));return}if(await Lr(t,i,!1)){await ot(Fu(i));return}const o=qe();o&&await Ye(o),vn("up"),await ot(95);return}if(r&&i!=null&&Number.isFinite(i)&&await tx(r,i)||i!=null&&Number.isFinite(i)&&await nx(t,i))return;const a=qe();a&&await Ye(a),vn("up")}catch{}}function ef(n={}){return ax(n)}async function ax(n={}){if(!tn()){n.awaitCompletion&&await ot(80);return}const{cacheKey:e,bases:t,clipSec:i,domId:r}=mt.hideEight;Jv(t);try{be();const s=qe();if(s){await Ye(s),gt.get(e)||await Yt(s,e,t);const o=gt.get(e);if(wt(o)){const l=hs(s,e,i);if(l!=null){n.awaitCompletion&&await ot(Math.ceil(l*1e3)+Rr);return}}}if(n.awaitCompletion){if(r&&await Cr(r,{maxWaitMs:15e3})||await Lr(t,i,!0))return;const o=qe();o&&await Ye(o),vn("down"),await ot(95);return}if(r&&await ba(r)||await Ea(t))return;const a=qe();a&&await Ye(a),vn("down")}catch{}}function tf(n={}){return cx(n)}function ox(n={}){return lx(n)}async function lx(n={}){if(!tn()){n.awaitCompletion&&await ot(80);return}const{cacheKey:e,bases:t,clipSec:i,domId:r}=mt.magicBall;try{be();const s=qe();if(s){await Ye(s),gt.get(e)||await Yt(s,e,t);const o=gt.get(e);if(wt(o)){const l=hs(s,e,i);if(l!=null){n.awaitCompletion&&await ot(Math.ceil(l*1e3)+Rr);return}}}if(n.awaitCompletion){if(r&&i!=null&&Number.isFinite(i)&&ya(r,i),r&&(i==null||!Number.isFinite(i))&&await Cr(r,{maxWaitMs:15e3})||await Lr(t,i,!0))return;const o=qe();o&&await Ye(o),vn("up"),await ot(95);return}if(r&&await ba(r)||await Ea(t))return;const a=qe();a&&await Ye(a),vn("up")}catch{}}async function cx(n={}){if(!tn()){n.awaitCompletion&&await ot(80);return}const{cacheKey:e,bases:t,clipSec:i,domId:r}=mt.blackBall;try{be();const s=qe();if(s){await Ye(s),gt.get(e)||await Yt(s,e,t);const o=gt.get(e);if(wt(o)){const l=hs(s,e,i);if(l!=null){n.awaitCompletion&&await ot(Math.ceil(l*1e3)+Rr);return}}}if(n.awaitCompletion){if(r&&i!=null&&Number.isFinite(i)&&ya(r,i),r&&(i==null||!Number.isFinite(i))&&await Cr(r,{maxWaitMs:15e3})||await Lr(t,i,!0))return;const o=qe();o&&await Ye(o),vn("down"),await ot(95);return}if(r&&await ba(r)||await Ea(t))return;const a=qe();a&&await Ye(a),vn("down")}catch{}}function nf(n={}){return n.awaitCompletion?jd(()=>Bu({awaitCompletion:!0})):Bu(n)}async function Bu(n={}){if(!tn()){n.awaitCompletion&&await ot(80);return}const{cacheKey:e,bases:t,clipSec:i,domId:r}=mt.drawFlip;try{be();const s=qe();if(s){await Ye(s),gt.get(e)||await Yt(s,e,t);const o=gt.get(e);if(wt(o)){const l=hs(s,e,i);if(l!=null){n.awaitCompletion&&await ot(Math.ceil(l*1e3)+Rr);return}}}if(n.awaitCompletion){if(r&&i!=null&&Number.isFinite(i)&&ya(r,i),r&&(i==null||!Number.isFinite(i))&&await Cr(r,{maxWaitMs:15e3})||await Lr(t,i,!0))return;const o=qe();o&&await Ye(o),vn("up"),await ot(95);return}if(r&&await ba(r)||await Ea(t))return;const a=qe();a&&await Ye(a),vn("up")}catch{}}function rf(){return jd(ux)}async function ux(){if(!tn())return;const{cacheKey:n,bases:e,domId:t}=mt.motusLine;try{be(),fs();const i=qe();if(i){await Ye(i);let s=gt.get(n);if(wt(s)||(s=await Yt(i,n,e)),wt(s)){await wr(i,s);return}}if(t&&await Cr(t,{maxWaitMs:12e4})||t&&await Jd(t,{maxWaitMs:12e4})||await Lr(e,null,!0))return;const r=qe();r&&await Ye(r),vn("up"),await ot(95)}catch{}}const dx=new Set("abcdefghijklmnopqrstuvwxyz".split(""));function sf(n){const e=Math.round(Number(n));return e>=1&&e<=70?[String(e)]:[]}function af(n){const e=String(n).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().slice(0,1);return dx.has(e)?[e]:[]}function ua(n){if(!n||typeof n!="string")return;const e=af(n[0]);e.length&&Xd(e)}function fx(n){const e=sf(n);e.length&&Xd(e)}function of(n){const e=sf(n);return e.length?(be(),qd(e)):Promise.resolve(!1)}function hx(n){if(!n||typeof n!="string")return Promise.resolve(!1);const e=af(n[0]);return e.length?(be(),qd(e)):Promise.resolve(!1)}function px(n,e){const t=e.length,i=Array(t).fill("missing"),r={};for(const s of e)r[s]=(r[s]||0)+1;for(let s=0;s<t;s++)n[s]===e[s]&&(i[s]="correct",r[n[s]]--);for(let s=0;s<t;s++){if(i[s]==="correct")continue;const a=n[s];r[a]>0&&(i[s]="wrong",r[a]--)}return i}const mx={5:{targets:["MAISON","PLAGE","ROUGE","VERTE","MONDE"],verify:new Set(["MAISON","PLAGE","ROUGE","VERTE","MONDE","TABLE","CHIEN","FLEUR","PORTE","LIVRE","PARIS","GRAND","PETIT","BLANC","NOIRE"])},6:{targets:["MAISON","BEAUTE","GARDER","MOMENT","SOLEIL","GUERRE"],verify:new Set(["MAISON","BEAUTE","GARDER","MOMENT","SOLEIL","GUERRE","FLEURS","CHAISE","MARCHE","PARLER","COURIR","DORMIR","JARDIN","COULEUR"])},7:{targets:["MAISON","BONHEUR","TRAVAIL","MUSIQUE","HISTOIRE"],verify:new Set(["MAISON","BONHEUR","TRAVAIL","MUSIQUE","HISTOIRE","FAMILLE","CULTURE","NATURE","LIBERTE","JARDINS","CHAMBRE"])},8:{targets:["MAISON","ELEPHANT","MUSIQUE","HISTOIRE","BUREAU"],verify:new Set(["MAISON","ELEPHANT","MUSIQUE","HISTOIRE","BUREAU","CHOCOLAT","MONTAGNE","PARADIS","VOYAGES","CULTURE"])},9:{targets:["MAISON","ELEPHANT","AVENTURE","PLANETE"],verify:new Set(["MAISON","ELEPHANT","AVENTURE","PLANETE","MAGNIFIQUE"])},10:{targets:["MAISON","ELEPHANT","MAGNIFIQUE"],verify:new Set(["MAISON","ELEPHANT","MAGNIFIQUE","ARCHITECTE"])}},yi={targets:{},verify:{}};function gx(n){const e=typeof import.meta<"u"&&"/motus-app/"||"./",t=`dictionary/${n}`;try{const i=new URL(e,window.location.href);return new URL(t,i).href}catch{return`${e}${t}`.replace(/([^:]\/)\/+/g,"$1")}}function _x(n){const e=n.indexOf("["),t=n.lastIndexOf("]");return e===-1||t===-1?[]:JSON.parse(n.slice(e,t+1))}async function zu(n,e){const t=gx(`${n}/${e}_lettres.js`),i=await fetch(t);if(!i.ok)throw new Error(`Fichier dictionnaire introuvable (${e} lettres)`);const r=await i.text();return _x(r).map(s=>s.toUpperCase())}async function vx(n){if(yi.targets[n]&&yi.verify[n])return{targets:yi.targets[n],verify:yi.verify[n]};try{const[e,t]=await Promise.all([zu("mot_a_trouver",n),zu("verification",n)]);return yi.targets[n]=e,yi.verify[n]=new Set(t),{targets:e,verify:yi.verify[n]}}catch(e){console.warn("Dictionnaire embarqué indisponible — jeu de secours",e);const t=mx[n];if(!t)throw e;return{targets:t.targets,verify:t.verify}}}function Gu(n){return n[Math.floor(Math.random()*n.length)]}function xx(n,e){return e.has(n.toUpperCase())}function Mx(){if(typeof location>"u")return!1;const n=location.hostname;return n==="localhost"||n==="127.0.0.1"||n==="[::1]"}function Vu(n){if(!Mx())return;const e=new URL("/__motus__/reponse",location.origin);fetch(e,{method:"POST",headers:{"Content-Type":"text/plain; charset=utf-8"},body:n}).catch(t=>{console.warn("[motus-reponse] Impossible d’écrire le fichier (lancez ./start.sh ou npm run dev)",t)})}const Sx=1250,Hu=180;function yx(n){return new Promise(e=>setTimeout(e,n))}const Ex=["AZERTYUIOP","QSDFGHJKLM","WXCVBN"],bx=[[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6,7,8,9,10],[1,2,3,4,5,6]];class Tx{constructor({onUpdate:e,onEnd:t}){this.onUpdate=e,this.onEnd=t,this.length=6,this.maxAttempts=6,this.target="",this.verifySet=null,this.targets=null,this.rows=[],this.currentRow=0,this.cursorIndex=0,this.nextTypeCol=0,this.placement=[],this.absentLetters=new Set,this.correctPlaceLetters=new Set,this.wrongPlaceLetters=new Set,this.finished=!1,this.loading=!1,this.inputLocked=!1,this.winBallPhase=!1,this.verifyAnimating=!1,this.teamMode=!1,this.teamSize=1,this.currentTeamIndex=0,this.teamOnErrorBehavior="add-bonus",this.turnTimerEnabled=!1,this.turnTimerSeconds=8,this.bonusRevealCol=-1,this.bonusRevealBlinking=!1,this.bonusRevealVisible=!0}configureTeam({teamMode:e=!1,teamSize:t=2,teamOnErrorBehavior:i="add-bonus"}={},{resetHand:r=!0}={}){this.teamMode=!!e,this.teamSize=this.teamMode?Math.min(4,Math.max(2,t)):1;const a={"relay-bonus":"add-bonus",relay:"add",stay:"replace"}[i]??i,o=new Set(["replace-bonus","replace","add-bonus","add"]);this.teamOnErrorBehavior=o.has(a)?a:"add-bonus",r&&(this.currentTeamIndex=0)}getCurrentTeamName(){return`Équipe ${this.currentTeamIndex+1}`}advanceTeam(){this.teamMode&&(this.currentTeamIndex=(this.currentTeamIndex+1)%this.teamSize)}findFirstBonusLetterIndex(){for(let e=0;e<this.length;e++)if(this.placement[e]!=="correct")return e;return-1}async runBonusLetterBlink(){this.bonusRevealBlinking=!0,this.bonusRevealVisible=!0,this.emit();const e=Math.ceil(Sx/Hu);for(let t=0;t<e;t++)await yx(Hu),this.bonusRevealVisible=!this.bonusRevealVisible,this.emit();this.bonusRevealBlinking=!1,this.bonusRevealVisible=!0,this.emit()}async grantBonusLetterWithReveal(){const e=this.findFirstBonusLetterIndex();if(e<0)return;this.placement[e]="correct",this.correctPlaceLetters.add(this.target[e]),this.wrongPlaceLetters.delete(this.target[e]);const t=this.getActiveRow();t&&(t.letters[e]=this.target[e],t.states[e]="given"),this.bonusRevealCol=e,this.inputLocked=!0,this.emit(),await Promise.all([this.runBonusLetterBlink(),Pv().catch(()=>{})]),this.bonusRevealCol=-1,this.nextTypeCol<=e&&(this.nextTypeCol=Math.min(e+1,this.length),this.initCursor()),this.inputLocked=!1,this.emit()}async start(e,t={}){this.loading=!0,this.emit(),this.length=e,this.maxAttempts=e;const i=t.preserveTeamHand===!0;this.configureTeam(t,{resetHand:!i}),this.turnTimerEnabled=!!t.turnTimerEnabled;const r=Number(t.turnTimerSeconds)||8;this.turnTimerSeconds=Math.max(8,Math.min(30,r));const{targets:s,verify:a}=await vx(e);this.targets=s,this.verifySet=a,this.target=Gu(s),Vu(this.target),this.resetState(),this.loading=!1,this.emit()}startNextWordAfterWin(){if(!Array.isArray(this.targets)||this.targets.length===0||!this.verifySet){this.start(this.length);return}this.target=Gu(this.targets),Vu(this.target),this.resetState(),this.message="",this.emit()}resetState(){var e;this.rows=[],this.currentRow=0,this.placement=Array(this.length).fill(null),this.placement[0]="correct",this.absentLetters=new Set,this.correctPlaceLetters=new Set,this.wrongPlaceLetters=new Set,(e=this.target)!=null&&e[0]&&this.correctPlaceLetters.add(this.target[0]),this.finished=!1,this.inputLocked=!1,this.winBallPhase=!1,this.bonusRevealCol=-1,this.bonusRevealBlinking=!1,this.bonusRevealVisible=!0,this.newRow()}getActiveRow(){return this.rows[this.currentRow]}isLetterEditable(e){const t=this.getActiveRow();if(!t||e<0||e>=this.length)return!1;const i=t.states[e];return i==="empty"||i==="typed"||i==="given"}initCursor(){this.cursorIndex=Math.min(this.nextTypeCol,this.length-1)}restorePrefill(e,t){if(t===0||this.placement[t]==="correct"){e.letters[t]=this.target[t],e.states[t]="given";return}e.letters[t]="",e.states[t]="empty"}isPrefilledCol(e){return e===0||this.placement[e]==="correct"}setCursor(e){this.finished||this.loading||this.inputLocked||this.winBallPhase||this.isLetterEditable(e)&&(this.cursorIndex=e,this.nextTypeCol=e,this.message="",this.emit())}moveCursor(e){if(this.finished||this.loading||this.inputLocked||this.winBallPhase)return;const t=Math.max(0,Math.min(this.length-1,this.cursorIndex+e));this.setCursor(t)}newRow(){if(this.currentRow>=this.maxAttempts)return;this.rows.push({letters:Array(this.length).fill(""),states:Array(this.length).fill("empty")});const e=this.rows[this.currentRow];e.teamIndex=this.teamMode?this.currentTeamIndex:0;for(let t=0;t<this.length;t++)this.isPrefilledCol(t)&&(e.letters[t]=this.target[t],e.states[t]="given");this.nextTypeCol=0,this.cursorIndex=0}typeLetter(e){if(this.finished||this.loading||this.winBallPhase)return;if(this.inputLocked){this.message="Correction en cours…",this.emit();return}const t=e.toUpperCase();if(!/^[A-Z]$/.test(t))return;const i=this.getActiveRow();if(!i)return;const r=this.nextTypeCol;r>=this.length||(i.letters[r]=t,(i.states[r]==="empty"||i.states[r]==="given"&&t!==this.target[r])&&(i.states[r]="typed"),this.nextTypeCol=r+1,this.initCursor(),this.message="",this.emit())}deleteLetter(){if(this.finished||this.loading||this.winBallPhase)return;if(this.inputLocked){this.message="Correction en cours…",this.emit();return}const e=this.getActiveRow();if(!e||this.nextTypeCol<=0)return;const t=this.nextTypeCol-1;this.restorePrefill(e,t),this.nextTypeCol=t,this.initCursor(),this.message="",this.emit()}isRowComplete(){const e=this.getActiveRow();if(!e)return!1;for(let t=0;t<this.length;t++)if(!e.letters[t]||e.states[t]==="empty")return!1;return!0}canSubmit(){return this.finished||this.loading||this.inputLocked||this.winBallPhase?!1:!!this.getActiveRow()}buildGuess(){return this.getActiveRow().letters.join("")}wasAlreadyProposed(e){const t=e.toUpperCase();for(let i=0;i<this.currentRow;i++){const r=this.rows[i];if(!(!r||r.states.some(s=>s==="invalid"))&&r.letters.join("").toUpperCase()===t)return!0}return!1}async replaceCurrentAttempt({grantBonus:e=!1}={}){const t=this.getActiveRow();if(t){for(let i=0;i<this.length;i++)this.isPrefilledCol(i)?(t.letters[i]=this.target[i],t.states[i]="given"):(t.letters[i]="",t.states[i]="empty");for(this.nextTypeCol=0;this.nextTypeCol<this.length&&this.isPrefilledCol(this.nextTypeCol);)this.nextTypeCol++;this.initCursor(),e&&await this.grantBonusLetterWithReveal(),this.message="",this.emit()}}async handleTeamRelayAttempt(e){const t=this.getActiveRow();if(t)for(let i=0;i<this.length;i++)t.states[i]="invalid";this.advanceTeam(),await this.goToNextAttempt({skipTeamAdvance:!0,grantBonus:e})}async handleTeamErrorAttempt(){const e=this.teamOnErrorBehavior;if(e==="replace-bonus"){await this.replaceCurrentAttempt({grantBonus:!0});return}if(e==="replace"){await this.replaceCurrentAttempt({grantBonus:!1});return}await this.handleTeamRelayAttempt(e==="add-bonus")}async handleTeamTimeoutAttempt(){const e=this.teamOnErrorBehavior;if(e==="replace-bonus"){this.advanceTeam(),await this.replaceCurrentAttempt({grantBonus:!0});return}if(e==="replace"){this.advanceTeam(),await this.replaceCurrentAttempt({grantBonus:!1});return}await this.handleTeamRelayAttempt(e==="add-bonus")}async handleTurnTimeout(){if(this.finished||this.loading||this.winBallPhase||this.inputLocked)return;if(be(),this.inputLocked=!0,await Iv().catch(()=>!1)||await li().catch(()=>{}),this.teamMode){this.message="Temps écoulé — à l’équipe suivante.",await this.handleTeamTimeoutAttempt(),this.inputLocked=!1,this.emit();return}this.inputLocked=!1,this.rejectAttempt("Temps écoulé — essai perdu.")}rejectAttempt(e){if(this.message=e,this.teamMode){this.handleTeamErrorAttempt();return}const t=this.getActiveRow();for(let i=0;i<this.length;i++)t.states[i]="invalid";this.goToNextAttempt()}async goToNextAttempt({skipTeamAdvance:e=!1,grantBonus:t=!1}={}){if(this.currentRow++,this.currentRow>=this.maxAttempts){this.finishWithLoss();return}this.teamMode&&!e&&this.advanceTeam(),this.newRow(),t&&await this.grantBonusLetterWithReveal(),this.message="",this.emit()}async playLossRevealAnimation(){const e=this.rows[this.maxAttempts-1]??this.getActiveRow();if(!e)return;this.inputLocked=!0,this.finished=!0,this.message="Mot non trouvé…",this.emit();for(let i=0;i<this.length;i++)e.letters[i]="",e.states[i]="empty";this.emit(),await new Promise(i=>setTimeout(i,120));for(let i=0;i<this.length;i++)e.letters[i]=this.target[i],e.states[i]="correct",this.emit(),await $l("correct",{index:i,wordLen:this.length,isWin:!1}).catch(()=>{});await Dv().catch(()=>!1)||await li().catch(()=>{}),this.message="",this.inputLocked=!1,this.emit()}async finishWithLoss(){var e;try{await this.playLossRevealAnimation()}catch{}(e=this.onEnd)==null||e.call(this,{won:!1,word:this.target}),this.emit()}async submit(){var a;if(be(),this.winBallPhase)return;if(this.inputLocked){this.message="Correction en cours…",this.emit();return}if(!this.canSubmit()){this.message="Validation indisponible pour le moment.",this.emit();return}const e=this.currentRow>=this.maxAttempts-1,t=this.getActiveRow();if(!this.isRowComplete()){e||await li().catch(()=>{}),this.rejectAttempt("Mot incomplet — épeler le mot en entier.");return}const i=this.buildGuess();if(i[0]!==this.target[0]){e||await li().catch(()=>{}),this.rejectAttempt(`Le mot doit commencer par ${this.target[0]} — essai perdu.`);return}if(!xx(i,this.verifySet)){e||await li().catch(()=>{}),this.rejectAttempt("Mot inconnu — essai perdu.");return}if(this.wasAlreadyProposed(i)){e||await li().catch(()=>{}),this.rejectAttempt("Mot déjà proposé — essai perdu.");return}this.message="";const r=px(i,this.target),s=i===this.target;this.inputLocked=!0;try{await xa();const o=l=>{const c=i[l];t.states[l]=r[l],r[l]==="correct"&&(this.placement[l]="correct",this.correctPlaceLetters.add(c),this.wrongPlaceLetters.delete(c)),r[l]==="wrong"&&this.wrongPlaceLetters.add(c),r[l]==="missing"&&(this.absentLetters.add(c),this.wrongPlaceLetters.delete(c)),this.emit()};this.verifyAnimating=kt();try{await Zd(r,{isWin:s,onLetter:l=>o(l)}).catch(()=>{})}finally{this.verifyAnimating=!1}if(s){await Kl().catch(()=>{}),this.finished=!0,this.winBallPhase=!0,this.emit(),(a=this.onEnd)==null||a.call(this,{won:!0,word:this.target,attempts:this.currentRow+1});return}await this.goToNextAttempt()}finally{this.inputLocked=!1,!this.finished&&!this.winBallPhase&&this.getActiveRow()&&this.emit()}}getTypingIndicator(){const e=[];for(let t=0;t<this.length;t++)this.placement[t]==="correct"?e.push(this.target[t]):e.push("·");return e.join(" ")}emit(){var e;(e=this.onUpdate)==null||e.call(this,this)}}window.__MOTUS__=null;function Ax(){const n=document.querySelectorAll(".logo-img");if(!n.length)return;const e=["Images/motus-logo.png","public/Images/motus-logo.png"];let t=0;const i=()=>{if(t>=e.length)return;const r=new URL(e[t],document.baseURI).href,s=new Image;s.onload=()=>{n.forEach(a=>{a.src=r})},s.onerror=()=>{t+=1,i()},s.src=r};i()}Ax();const Q=n=>document.querySelector(n),ln=Q("#menu"),Ne=Q("#game"),et=Q("#grid"),Gn=Q("#ball-draw"),Tn=Q("#keyboard"),Zs=Q("#message"),ku=Q("#ball-draw-title"),cr=Q("#attempts-label"),Vr=Q("#word-progress"),En=Q("#turn-timer"),bi=Q("#motus-scores"),$n=Q("#modal"),lf=Q("#modal-title"),cf=Q("#modal-word"),da=Q("#overlay-aide"),jl=Q("#overlay-settings"),Jl=Q("#overlay-credits"),es=Q("#overlay-debug"),Ql=[da,jl,Jl,es],Mo=Q("#pwa-install-hint"),uf="motus-pwa-hint-dismissed";let js=6,pi="solo",Yr=2,Ml="add-bonus",ts=!1,ec=8,Xt=0,Gi=0,tc=0,nc=0,X=null,ns=!1;const Ti=4;let zt=1;const ic=.42;function Pr(){return ic*Cv()}let _n=!1,ps=0,Oi="",Pi=!1,Xn=-1,Li=null,Js=0,Qs=0,Sl="",So=!1,fa=!1,yl=0;function He(n){return n!=null&&n!==ps}function wx(n){return X!=null&&X.teamMode&&X.teamSize>1?`Grille Motus équipe ${n+1}`:"Grille Motus"}function di(n){return!(!n||!Ne||Ne.classList.contains("hidden")||n.loading||n.finished||n.winBallPhase||et!=null&&et.classList.contains("hidden"))}function df(n){return!n||pi!=="solo"||n.teamMode||!di(n)||n.inputLocked||n.verifyAnimating||n.bonusRevealCol>=0||n.bonusRevealBlinking?!1:n.findFirstBonusLetterIndex()>=0}function Rx(n){const e=Q("#solo-bonus-wrap"),t=Q("#btn-solo-bonus");if(!e||!t)return;const i=pi==="solo"&&di(n);e.classList.toggle("hidden",!i),e.hidden=!i,t.disabled=!df(n)}function Cx(n){return di(n)}const Lx={KeyQ:"a",KeyW:"z",KeyE:"e",KeyR:"r",KeyT:"t",KeyY:"y",KeyU:"u",KeyI:"i",KeyO:"o",KeyP:"p",KeyA:"q",KeyS:"s",KeyD:"d",KeyF:"f",KeyG:"g",KeyH:"h",KeyJ:"j",KeyK:"k",KeyL:"l",KeyM:"m",KeySemicolon:"m",KeyN:"n",KeyZ:"w",KeyX:"x",KeyC:"c",KeyV:"v",KeyB:"b"};function Px(n){if(n.altKey||n.ctrlKey||n.metaKey)return null;if(n.key&&n.key.length===1){const t=n.key.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();if(/^[a-z]$/.test(t))return t}const e=Lx[n.code];return e&&/^[a-z]$/.test(e)?e:null}function $r(){if(!(!Ne||Ne.classList.contains("hidden"))&&typeof Ne.focus=="function")try{Ne.focus({preventScroll:!0})}catch{Ne.focus()}}function Dx(n){if(!n)return;fa=!0,mi();const e=++yl;Promise.resolve(n).finally(()=>{e===yl&&(fa=!1,X&&fc(X))})}function rc(n){if(!n)return Promise.resolve(!1);const e=hx(n).then(t=>(t&&(X==null?void 0:X.target)===n&&(Oi=n),t));return Dx(e),e}function sc(){const n=X;!(n!=null&&n.target)||n.loading||n.winBallPhase||n.target!==Oi&&rc(n.target)}function ff(){if(!(X!=null&&X.target)||X.target===Oi)return;const n=X.target,e=()=>{(X==null?void 0:X.target)===n&&sc()};Ne.addEventListener("pointerdown",e,{once:!0,passive:!0})}function hf(){const n=document.getElementById("generique-overlay");return n instanceof HTMLElement&&!n.hidden}function en(){const n=document.getElementById("motus-snd-generique");if(!(!n||!(n instanceof HTMLAudioElement))){_n=!1;try{n.pause()}catch{}}}function ac(n={}){const{loop:e=!0,resetTime:t=!1}=n,i=document.getElementById("motus-snd-generique");if(!i||!(i instanceof HTMLAudioElement))return Promise.resolve("off");if(!Ar())return en(),i.muted=!0,Promise.resolve("off");if(!Ne.classList.contains("hidden"))return en(),Promise.resolve("off");if(i.loop=e,i.volume=Pr(),t)try{i.currentTime=0}catch{}i.muted=!1;const r=i.play();return r===void 0?Promise.resolve("playing"):r.then(()=>(_n=!1,"playing")).catch(()=>{i.muted=!0,_n=!0;const s=i.play();return s===void 0?"muted":s.then(()=>"muted").catch(()=>"blocked")})}function pf(){const n=wv(),e=Q("#audio-mute-voices"),t=Q("#audio-mute-music"),i=Q("#audio-mute-sfx");e&&(e.checked=n.voicesMuted),t&&(t.checked=n.musicMuted),i&&(i.checked=n.sfxMuted)}function Ix(){var n,e,t;Rv({voicesMuted:((n=Q("#audio-mute-voices"))==null?void 0:n.checked)??!1,musicMuted:((e=Q("#audio-mute-music"))==null?void 0:e.checked)??!1,sfxMuted:((t=Q("#audio-mute-sfx"))==null?void 0:t.checked)??!1}),mf()}function mf(){const n=document.getElementById("motus-snd-generique");if(!Ar()){en(),n instanceof HTMLAudioElement&&(n.muted=!0);return}n instanceof HTMLAudioElement&&(n.muted=!1,n.volume=Pr()),Ne.classList.contains("hidden")&&Kn()}function oc(){if(!Ar()||!Ne.classList.contains("hidden"))return;const n=document.getElementById("motus-snd-generique");if(!n||!(n instanceof HTMLAudioElement)||!n.paused&&!n.muted||!n.paused&&n.muted&&_n)return;if(n.currentTime>.5&&!n.paused){n.muted=!1,_n=!1,n.loop=!0;return}n.loop=!0,n.volume=Pr(),n.muted=!0;const e=n.play();if(e===void 0){n.muted=!1;return}e.then(()=>{if(!Ne.classList.contains("hidden")){try{n.pause()}catch{}n.muted=!1;return}hf()||!n.paused&&!n.muted||(_n=!0)}).catch(()=>{n.muted=!1})}function gf(){const n=()=>{oc()},e=()=>requestAnimationFrame(()=>requestAnimationFrame(n));document.readyState==="complete"?e():window.addEventListener("load",e,{once:!0})}function Kn(){const n=document.getElementById("motus-snd-generique");if(!(!n||!(n instanceof HTMLAudioElement))){if(!Ar()){en(),n.muted=!0;return}if(n.muted=!1,!Ne.classList.contains("hidden")){en();return}if(be(),_n){_n=!1;const e=n.paused||n.currentTime<=.05;if(n.muted=!1,e)try{n.currentTime=0}catch{}}if(n.loop=!0,n.volume=Pr(),n.muted=!1,n.paused||n.ended){const e=n.play();e!==void 0&&e.catch(()=>{})}}}function ha(){const n=document.getElementById("motus-snd-generique");if(!n||!(n instanceof HTMLAudioElement))return;if(!Ar()){en(),n.muted=!0;return}if(!Ne.classList.contains("hidden")){en();return}if(be(),n.loop=!0,n.volume=Pr(),n.paused||n.ended){ac({loop:!0,resetTime:!1});return}_n=!1,n.muted=!1;const e=n.play();e!==void 0&&e.catch(()=>{n.muted=!0,_n=!0,n.play().catch(()=>{})})}function Ux(){const n=document.getElementById("motus-snd-generique");if(!n||!(n instanceof HTMLAudioElement))return;if(!Ar()){en(),n.muted=!0;return}be(),_n=!1,n.loop=!0,n.volume=Pr(),n.muted=!1;try{n.pause(),n.currentTime=0}catch{}const e=n.play();e!==void 0&&e.catch(()=>{})}const Nx=50,Fx=100,Ox=100;let gn=[0];function _f(n=1){gn=Array.from({length:n},()=>0),xf(n),Mr()}function vf(n,e=0){gn[e]||(gn[e]=0),gn[e]=Math.max(0,gn[e]+n),Mr()}function xf(n){if(!bi)return;const e=n>1;if(bi.classList.toggle("motus-scores--team",e),!e){bi.innerHTML=`
      <div id="motus-score-group" class="motus-score motus-score--solo" role="group" aria-label="Score plateau : 0 points">
        <span class="motus-score-label">Pts</span>
        <div class="motus-score-cells">
          <span class="motus-score-cell" id="motus-score-d0">0</span>
          <span class="motus-score-cell" id="motus-score-d1">0</span>
          <span class="motus-score-cell" id="motus-score-d2">0</span>
        </div>
      </div>`;return}bi.innerHTML="",bi.classList.add("motus-scores--team");for(let t=0;t<n;t++){const i=document.createElement("div");i.id=`motus-score-group-${t}`,i.className="motus-score motus-score--team",i.setAttribute("role","group"),i.innerHTML=`
      <span class="motus-score-team-name">Éq. ${t+1}</span>
      <div class="motus-score-cells">
        <span class="motus-score-cell" id="motus-score-t${t}-d0">0</span>
        <span class="motus-score-cell" id="motus-score-t${t}-d1">0</span>
        <span class="motus-score-cell" id="motus-score-t${t}-d2">0</span>
      </div>`,bi.appendChild(i)}}function Mr(){const n=(X==null?void 0:X.teamMode)&&X.teamSize>1,e=n?X.teamSize:1;n&&bi&&!document.getElementById("motus-score-group-0")&&xf(e);const t=Xn>=0?Xn:(X==null?void 0:X.currentTeamIndex)??0;for(let i=0;i<e;i++){const r=gn[i]??0,s=Math.min(r,999),a=String(s).padStart(3,"0");for(let l=0;l<3;l++){const c=document.getElementById(n?`motus-score-t${i}-d${l}`:`motus-score-d${l}`);c&&(c.textContent=a[l]??"0")}const o=document.getElementById(n?`motus-score-group-${i}`:"motus-score-group");if(o){const l=n&&i===t;o.classList.toggle("motus-score--active",l);const c=`Équipe ${i+1}`;o.setAttribute("aria-label",l?`${c} — à vous · ${r} points`:`${c} · ${r} points`)}}}function lc(){if(!ln)return;ln.querySelectorAll("[data-setup-step]").forEach(a=>{const l=Number(a.dataset.setupStep)===zt;a.classList.toggle("menu-card--wizard-hidden",!l),a.hidden=!l});const n=Q("#menu-setup-lead");n&&(n.textContent=`Étape ${zt} sur ${Ti}`);const e=ln.querySelector(".menu-setup-progress");e&&(e.setAttribute("aria-valuenow",String(zt)),e.setAttribute("aria-label",`Étape ${zt} sur ${Ti}`)),ln.querySelectorAll("[data-step-dot]").forEach(a=>{const o=Number(a.dataset.stepDot);a.classList.toggle("is-active",o===zt),a.classList.toggle("is-done",o<zt)});const t=Q("#menu-setup-prev"),i=Q("#menu-setup-next"),r=Q("#btn-play"),s=Q("#menu-setup-rules");t==null||t.classList.toggle("hidden",zt<=1),i==null||i.classList.toggle("hidden",zt>=Ti),r==null||r.classList.toggle("hidden",zt<Ti),s==null||s.classList.toggle("hidden",zt<Ti),s==null||s.classList.toggle("menu-setup-rules--wizard-hidden",zt<Ti)}function Mf(){zt=1,lc()}function Bx(){zt>=Ti||(zt+=1,lc())}function zx(){zt<=1||(zt-=1,lc())}function Sf(){return document.documentElement.classList.contains("pwa-standalone")||window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}function yf(){try{return localStorage.getItem(uf)==="1"}catch{return!1}}function cc(){if(!Mo)return;const n=Ql.some(r=>r&&!r.classList.contains("hidden")),e=Ne&&!Ne.classList.contains("hidden"),t=ln&&!ln.classList.contains("hidden"),i=!Sf()&&!yf()&&!e&&!n&&!t;Mo.classList.toggle("hidden",!i),Mo.hidden=!i}function Aa(){if(!ln)return;const n=ns&&Ne.classList.contains("hidden");ln.classList.toggle("hidden",!n),cc()}function Di(){Ql.forEach(n=>{n.classList.add("hidden"),n.setAttribute("aria-hidden","true")}),Aa()}function Hr(n){Di(),ln.classList.add("hidden"),n.classList.remove("hidden"),n.setAttribute("aria-hidden","false"),Sr(),Kn()}function Sr(){var n;if(document.querySelectorAll(".nav-tab").forEach(e=>e.classList.remove("active")),!da.classList.contains("hidden")){Q("#nav-aide").classList.add("active");return}if(!jl.classList.contains("hidden")){Q("#nav-settings").classList.add("active");return}if(!Jl.classList.contains("hidden")){Q("#nav-credits").classList.add("active");return}if(!es.classList.contains("hidden")){Q("#nav-debug").classList.add("active");return}if(!ln.classList.contains("hidden")){Q("#nav-play").classList.add("active");return}Ne.classList.contains("hidden")&&((n=Q("#nav-play"))==null||n.classList.add("active"))}function El(n){var o,l;const e=document.getElementById("btn-play"),t=document.getElementById("menu-loading-status"),i=document.getElementById("length-picker");e&&(e.disabled=!!n,n?(e.dataset.menuLabelBackup==null&&(e.dataset.menuLabelBackup=(e.textContent||"").trim()||"Lancer la partie"),e.textContent="Chargement…"):(e.textContent=e.dataset.menuLabelBackup||"Lancer la partie",delete e.dataset.menuLabelBackup)),i==null||i.querySelectorAll(".length-btn").forEach(c=>{c.disabled=!!n}),document.querySelectorAll(".mode-btn, .team-size-btn").forEach(c=>{c.disabled=!!n}),(o=Q("#menu-setup-prev"))==null||o.toggleAttribute("disabled",!!n),(l=Q("#menu-setup-next"))==null||l.toggleAttribute("disabled",!!n);const r=Q("#team-error-behavior");r&&(r.disabled=!!n);const s=Q("#turn-timer-enabled"),a=Q("#turn-timer-seconds");s&&(s.disabled=!!n),a&&(a.disabled=!!n||!ts),t&&(n?(t.textContent="Chargement du dictionnaire…",t.classList.remove("hidden")):(t.textContent="",t.classList.add("hidden")))}function bl(){ns=!0;const n=!Ne.classList.contains("hidden"),e=!!(X&&Ne.classList.contains("hidden")&&X.loading);(n||e)&&ps++,Pi=!1,Xn=-1,mi(),yl++,fa=!1,Oi="",El(!1),X=null,window.__MOTUS__=null,Di(),$n.classList.add("hidden"),Ne.classList.add("hidden"),ln.classList.remove("hidden"),Nf(),Gn==null||Gn.classList.add("hidden"),et.classList.remove("grid--ball-pending"),Ne.classList.remove("game--win-ball"),Da(),Cf(),pc(),_f(),bf(),Ca(),$n.classList.add("hidden"),Mr(),Sr(),n?Ux():Kn(),Mf(),Aa()}function Gx(){return{teamMode:pi==="team",teamSize:Yr,teamOnErrorBehavior:Ml}}function Ef(){return{...Gx(),turnTimerEnabled:ts,turnTimerSeconds:ec}}function Tl(){const n=Q("#words-per-session");n&&(Xt=Number(n.value)),(!Number.isFinite(Xt)||Xt<0)&&(Xt=0)}function bf(){Gi=0,tc=0,nc=0}function wa(){return Xt<=0?!0:Gi<Xt}function uc(){return Xt<=0?!1:Gi>=Xt-1}function Ra(){return X!=null&&X.teamMode&&X.teamSize>1?X.teamSize:1}function Vx(n){let e=0;const t=Ra();for(let i=0;i<t;i++)i!==n&&(e=Math.max(e,gn[i]??0));return e}function Hx(){return uc()?Fx:Nx}function Tf(){return Ox}function kx(n){if(!(X!=null&&X.teamMode)||X.teamSize<2)return!1;const e=gn[n]??0,t=Vx(n);return e>t?!1:e+Tf()>t}function Wx(n,e=2){const t=ut(n),i=t.hiddenCellIndices,r=t.hitNumbers;if(!(i instanceof Set)||i.size!==8)return!1;gc(n);const s=t.urnRemaining;if(!Array.isArray(s)||s.length===0)return!1;const a=ms.flat(),o=new Set(s.filter(l=>l!==Ii));for(const l of Pa()){const c=[];for(const f of l){if(i.has(f))continue;const h=a[f];_c(r,h)||c.push(h)}if(!(c.length===0||c.length>e)&&c.every(f=>o.has(f)))return!0}return!1}function Xx(n){if(!uc()||!(X!=null&&X.teamMode)||X.teamSize<2)return!0;if(!kx(n))return!1;const e=ut(n);return Al(e.hitNumbers,n)?!0:Wx(n)}function qx(){const n=Ra(),e=[];for(let r=0;r<n;r++)e.push(gn[r]??0);const t=e.length?Math.max(...e):0,i=[];for(let r=0;r<n;r++)e[r]===t&&i.push(r);return{scores:e,max:t,winners:i}}function Yx(){const{scores:n,max:e,winners:t}=qx();if(n.length<=1)return`Score final : ${n[0]??0} points.`;const i=n.map((r,s)=>`Éq. ${s+1} : ${r} pt${r!==1?"s":""}`).join(" · ");return t.length===1?`${i} — Victoire de l’équipe ${t[0]+1} (${e} points) !`:`${i} — Égalité entre les équipes ${t.map(r=>r+1).join(" et ")} (${e} points).`}function $x(){X&&(X.winBallPhase=!1,X.emit()),Pi=!1,Ne==null||Ne.classList.remove("game--win-ball"),La()}function Wu(n){Gi++,n?tc++:nc++}function Ca(){const n=Q("#btn-modal-close");n&&(n.textContent="Continuer")}function La(n=""){$n.dataset.action="session-end",$n.classList.remove("hidden");const e=Xt>0?Xt:Gi;lf.textContent="Partie terminée";const t=tc,i=nc;let r=`${t} mot${t!==1?"s":""} trouvé${t!==1?"s":""}, ${i} non trouvé${i!==1?"s":""} — ${e} joué${e!==1?"s":""}.`;n&&(r=`Le mot était : ${n}. ${r}`),r=`${r} ${Yx()}`,cf.textContent=r;const s=Q("#btn-modal-close");s&&(s.textContent="Retour au menu")}function dc(){if(!Vr)return;if(Xt<=0){Vr.classList.add("hidden"),Vr.textContent="";return}const n=Math.min(Gi+1,Xt);Vr.textContent=`Mot ${n} / ${Xt}`,Vr.classList.remove("hidden")}async function Af(){X&&(mi(),be(),X.winBallPhase=!1,et==null||et.classList.remove("grid--ball-pending"),Ne.classList.remove("game--win-ball"),pc(),X.startNextWordAfterWin(),Oi="",X.target?(ua(X.target),rc(X.target)):ff(),dc(),X.emit(),et==null||et.scrollIntoView({block:"nearest",behavior:"smooth"}))}function ea(){const n=Q("#turn-timer-enabled"),e=Q("#turn-timer-seconds");n&&(ts=n.checked),e&&(e.disabled=!ts,ec=Number(e.value)||8)}function Xu(n){return!(!(n!=null&&n.turnTimerEnabled)||fa||n.bonusRevealCol>=0||n.bonusRevealBlinking||!di(n)||n.inputLocked||n.verifyAnimating||Xn>=0)}function Kx(n){return`${ps}:${n.currentTeamIndex}:${n.currentRow}`}function ta(n){if(En){if(n==null||n<=0){En.classList.add("hidden"),En.textContent="",En.classList.remove("turn-timer--urgent");return}En.classList.remove("hidden"),En.textContent=`${n}s`,En.classList.toggle("turn-timer--urgent",n<=3)}}function mi(){Qs++,Sl="",Li!=null&&(clearInterval(Li),Li=null),Js=0,ta(null)}function fc(n){if(!Xu(n)){mi();return}const e=Kx(n);if(e===Sl&&Li!=null){const r=Math.ceil((Js-Date.now())/1e3);ta(Math.max(0,r));return}Sl=e,Qs++;const t=Qs,i=Math.max(8,Math.min(30,n.turnTimerSeconds||8));Js=Date.now()+i*1e3,ta(i),Li!=null&&clearInterval(Li),Li=setInterval(()=>{if(t!==Qs||X!==n)return;const r=Math.ceil((Js-Date.now())/1e3);if(r<=0){mi(),X===n&&Xu(n)&&!So&&(So=!0,Promise.resolve(n.handleTurnTimeout()).finally(()=>{So=!1,X===n&&fc(n)}));return}ta(r)},250)}function qu(){const n=Q("#team-options"),e=pi==="team";n==null||n.classList.toggle("hidden",!e),n&&n.setAttribute("aria-hidden",e?"false":"true")}function na(){const n=Q("#debug-state-line"),e=Q("#debug-target-word"),t=!Ne.classList.contains("hidden");if(!t&&(X!=null&&X.loading)){n.textContent="Chargement du dictionnaire depuis le menu…",e.textContent="—";return}if(!t||!X){n.textContent="Aucune partie en cours. Utilisez l’onglet « Jouer » puis le bouton orange pour lancer une partie.",e.textContent="—";return}if(X.loading){n.textContent="Chargement du dictionnaire…",e.textContent="—";return}const i=X.verifySet instanceof Set?X.verifySet.size:"?",r=X.teamMode?` · ${X.getCurrentTeamName()} / ${X.teamSize} équipes`:"",s=X.teamMode?gn.map((a,o)=>`Éq.${o+1}:${a??0}`).join(" "):String(gn[0]??0);n.textContent=`Longueur ${X.length} · Essai ${X.currentRow+1} / ${X.maxAttempts}${r} · Terminé : ${X.finished?"oui":"non"} · Score : ${s} · Mots vérif. (Set) : ${i}`,e.textContent=X.target||"—"}function Zx(){var f,h,u,m,x,E,p,d,M,A,y,R,T,P,v;ex(),Qv();const n=Q("#debug-snd-grid-hide");n&&ht.plateauHideEight&&(n.disabled=!1,n.textContent=`Masquer 8 — ${ht.plateauHideEight}`);const e=Q("#mode-picker");e==null||e.querySelectorAll(".mode-btn").forEach(b=>{b.addEventListener("click",()=>{pi=b.dataset.mode==="team"?"team":"solo",e.querySelectorAll(".mode-btn").forEach(L=>{const w=L.dataset.mode===pi;L.classList.toggle("active",w),L.setAttribute("aria-pressed",w?"true":"false")}),qu()})}),qu();const t=Q("#team-size-picker");for(let b=2;b<=4;b++){const L=document.createElement("button");L.type="button",L.className="team-size-btn length-btn"+(b===Yr?" active":""),L.textContent=String(b),L.dataset.teamSize=String(b),L.setAttribute("aria-pressed",b===Yr?"true":"false"),L.addEventListener("click",()=>{Yr=b,t.querySelectorAll(".team-size-btn").forEach(w=>{const F=Number(w.dataset.teamSize)===b;w.classList.toggle("active",F),w.setAttribute("aria-pressed",F?"true":"false")})}),t.appendChild(L)}const i=Q("#team-error-behavior");i&&(i.value=Ml,i.addEventListener("change",()=>{const b=i.value,w={"relay-bonus":"add-bonus",relay:"add",stay:"replace"}[b]??b;(w==="replace-bonus"||w==="replace"||w==="add-bonus"||w==="add")&&(Ml=w,w!==b&&(i.value=w))}));const r=Q("#turn-timer-enabled"),s=Q("#turn-timer-seconds");r&&(r.checked=ts,r.addEventListener("change",ea)),s&&(s.value=String(ec),s.addEventListener("change",()=>{ea()})),ea();const a=Q("#length-picker");for(let b=5;b<=10;b++){const L=document.createElement("button");L.type="button",L.className="length-btn"+(b===js?" active":""),L.textContent=b,L.dataset.length=b,L.addEventListener("click",()=>{js=b,a.querySelectorAll(".length-btn").forEach(w=>{w.classList.toggle("active",Number(w.dataset.length)===b)})}),a.appendChild(L)}Q("#btn-play").addEventListener("click",async()=>{Di(),be(),!ds()&&!kt()&&oi().catch(()=>{}),await yM(),X!=null&&X.target&&ua(X.target)}),Q("#nav-play").addEventListener("click",()=>{bl()}),(f=Q("#pwa-install-hint-dismiss"))==null||f.addEventListener("click",()=>{try{localStorage.setItem(uf,"1")}catch{}ns?cc():(ns=!0,Aa())}),(h=Q("#menu-setup-prev"))==null||h.addEventListener("click",zx),(u=Q("#menu-setup-next"))==null||u.addEventListener("click",Bx);const o=()=>Hr(da);(m=Q("#menu-setup-rules"))==null||m.addEventListener("click",o),Mf(),Q("#nav-aide").addEventListener("click",()=>{Hr(da)}),Q("#nav-settings").addEventListener("click",()=>{pf(),Hr(jl)}),Q("#nav-credits").addEventListener("click",()=>{Hr(Jl)}),Q("#nav-debug").addEventListener("click",()=>{Hr(es),na()}),document.querySelectorAll("[data-close-overlay]").forEach(b=>{b.addEventListener("click",()=>{Di(),Sr(),Kn()})}),Q("#debug-refresh-state").addEventListener("click",()=>na()),Q("#debug-new-word").addEventListener("click",()=>{X==null||X.start(js,Ef()).then(()=>na())}),Q("#debug-copy-target").addEventListener("click",async()=>{var L;const b=(L=Q("#debug-target-word").textContent)==null?void 0:L.trim();if(!(!b||b==="—"))try{await navigator.clipboard.writeText(b)}catch{}});const l=[["debug-snd-sample-correct","correct"],["debug-snd-sample-wrong","wrong"],["debug-snd-sample-missing","missing"],["debug-snd-sample-invalid","invalid"],["debug-snd-sample-win","win"]];for(const[b,L]of l){const w=document.getElementById(b);w&&w.addEventListener("click",()=>{be(),Zv(L).catch(()=>{})})}Q("#debug-snd-synth").addEventListener("click",()=>{be(),jv().catch(()=>{})}),Q("#debug-snd-prime").addEventListener("click",()=>{be(),Wv(),oi().catch(()=>{})}),Q("#debug-snd-buzz").addEventListener("click",()=>{be(),li().catch(()=>{})}),Q("#debug-snd-verify").addEventListener("click",()=>{be(),Zd(["correct","wrong","missing"],{isWin:!1}).catch(()=>{})}),Q("#debug-snd-win").addEventListener("click",()=>{be(),Kl().catch(()=>{})}),(x=Q("#debug-replay-generique"))==null||x.addEventListener("click",()=>{Di(),be(),Mv({pauseMenuGenerique:en,syncMenuGenerique:Kn,handoffGeneriqueToMenuMusic:ha,playGeneriqueAudio:ac,menuVolume:ic,force:!0}).then(b=>{b!=null&&b.withAudio?(ha(),oc()):gf()})}),Q("#debug-snd-grid-prime").addEventListener("click",()=>{be(),Ta().catch(()=>{})}),(E=Q("#debug-snd-grid-reveal"))==null||E.addEventListener("click",()=>{be(),xl().catch(()=>{})}),(p=Q("#debug-snd-grid-hide"))==null||p.addEventListener("click",()=>{be(),ef().catch(()=>{})}),(d=Q("#debug-snd-grid-flip"))==null||d.addEventListener("click",()=>{be(),nf().catch(()=>{})}),(M=Q("#debug-snd-grid-motus"))==null||M.addEventListener("click",()=>{be(),rf().catch(()=>{})}),(A=Q("#debug-snd-grid-black"))==null||A.addEventListener("click",()=>{be(),tf().catch(()=>{})}),(y=Q("#debug-snd-cast-letter"))==null||y.addEventListener("click",()=>{be(),oi().catch(()=>{}),Xr("motus-snd-cast-t")}),(R=Q("#debug-snd-cast-number"))==null||R.addEventListener("click",()=>{be(),oi().catch(()=>{}),Xr("motus-snd-cast-23")}),(T=Q("#debug-snd-cast-3"))==null||T.addEventListener("click",()=>{be(),oi().catch(()=>{}),of(3).catch(()=>{})}),(P=Q("#debug-snd-cast-51"))==null||P.addEventListener("click",()=>{be(),oi().catch(()=>{}),Xr("motus-snd-cast-51")}),Q("#btn-win-continue").addEventListener("click",()=>{if(!(!X||Pi)){if(!wa()){La();return}Af()}});const c=Q("#words-per-session");c&&(c.addEventListener("change",Tl),Tl());for(const b of["audio-mute-voices","audio-mute-music","audio-mute-sfx"])(v=Q(`#${b}`))==null||v.addEventListener("change",Ix);Sr()}function yt(n){return new Promise(e=>setTimeout(e,n))}const ms=[[7,17,35,49,57],[11,25,29,51,59],[3,19,41,43,69],[5,21,33,53,63],[9,23,37,45,61]];function jx(n){if(n){n.innerHTML="";for(let e=0;e<5;e++)for(let t=0;t<5;t++){const i=ms[e][t],r=document.createElement("div");r.className="ball-flip-wrap",r.dataset.num=String(i),r.dataset.cellIdx=String(e*5+t),r.setAttribute("role","gridcell");const s=document.createElement("div");s.className="ball-flip-inner";const a=document.createElement("div");a.className="ball-flip-face ball-flip-face--hemi",a.setAttribute("aria-hidden","true");const o=document.createElement("div");o.className="ball-flip-face ball-flip-face--flat",o.textContent=String(i),s.appendChild(a),s.appendChild(o),r.appendChild(s),n.appendChild(r)}}}function Pa(){const n=[];for(let e=0;e<5;e++)n.push([0,1,2,3,4].map(t=>e*5+t));for(let e=0;e<5;e++)n.push([0,1,2,3,4].map(t=>t*5+e));return n.push([0,6,12,18,24]),n.push([4,8,12,16,20]),n}function wf(n){if(!(n instanceof Set)||n.size!==8)return!1;for(const e of Pa()){const t=e.filter(i=>n.has(i)).length;if(t<1||t>2)return!1}return!0}function Jx(){for(let n=0;n<48e3;n++){const e=Array.from({length:25},(i,r)=>r);Rf(e);const t=new Set(e.slice(0,8));if(wf(t))return t}return Qx()}function Qx(){const n=eM();return n||new Set([0,1,5,7,11,12,19,23])}function eM(){let n=null;function e(t,i){if(!n){if(i.length===8){wf(new Set(i))&&(n=new Set(i));return}for(let r=t;r<25;r++)i.push(r),e(r+1,i),i.pop()}}return e(0,[]),n}const tM=680,nM=180,iM=100;async function rM(n=null){const e=Array.from(document.querySelectorAll("#ball-motus-grid .ball-flip-inner"));if(!e.length)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){if(e.forEach(i=>i.classList.add("ball-flip-inner--revealed")),await xl({awaitCompletion:!0}),He(n))return;await yt(140);return}const t=26;for(let i=0;i<e.length;i++){if(He(n))return;await yt(t),e[i].classList.add("ball-flip-inner--revealed"),await xl(),await yt(iM)}He(n)||await yt(220)}async function sM(n=null,e=Ct()){var s,a;Vi(e);const t=ut(e).hiddenCellIndices;if(!t||t.size!==8)return;const i=[...t].sort((o,l)=>o-l);if(window.matchMedia("(prefers-reduced-motion: reduce)").matches?await yt(120):await yt(200),!He(n)){for(const o of i){if(He(n))return;(a=(s=document.querySelector(`#ball-motus-grid .ball-flip-wrap[data-cell-idx="${o}"]`))==null?void 0:s.querySelector(".ball-flip-inner"))==null||a.classList.remove("ball-flip-inner--revealed"),await ef(),await yt(nM)}He(n)||await yt(220)}}const aM=3,Ii="BLACK",oM=3200;function Rf(n){for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n}function hc(){return{hitNumbers:new Set,urnNumbers:null,hiddenCellIndices:null,introSequenceComplete:!1,urnRemaining:null,magicDesignationShown:!1}}let Kr=[hc()],Dr=!1,Zn=null,is=!1,hr=null;function Ct(){return X!=null&&X.teamMode?X.currentTeamIndex:0}function ut(n=Ct()){return Kr[n]||(Kr[n]=hc()),Kr[n]}function lM(n){Kr=Array.from({length:n},()=>hc())}function Cf(){Dr=!1,Zn=null,is=!1,hr=null}function Lf(){return Dr&&!!(X!=null&&X.teamMode)&&X.teamSize>1&&Zn!=null}function cM(){if(!Dr||Zn!=null)return;const n=Ra();if(n<2)return;let e=null;for(let i=0;i<n;i++){Vi(i);const r=ut(i).urnNumbers;if(!Array.isArray(r)||!r.length)return;const s=new Set(r);e?e=new Set([...e].filter(a=>s.has(a))):e=s}const t=e!=null&&e.size?[...e]:[...ut(0).urnNumbers??[]];t.length&&(Zn=t[Math.floor(Math.random()*t.length)])}function uM(){Dr=!1,Zn=null,is=!1,hr=null}function dM(n){n&&(n.classList.remove("ball-flip-wrap--magic"),delete n.dataset.magicSparkleUntilDraw)}function rs(n=Ct()){const e=Q("#ball-motus-grid");if(!e)return;const t=Zn,i=ut(n).magicDesignationShown,r=Lf()&&t!=null&&i&&!is;e.querySelectorAll(".ball-flip-wrap").forEach(s=>{var c;const o=Number(s.dataset.num)===t,l=s.dataset.magicSparkleUntilDraw==="1";s.classList.toggle("ball-flip-wrap--magic",r&&o||l&&o),o&&r?(s.setAttribute("title","Boule magique"),s.setAttribute("aria-label",`Numéro ${t} — boule magique`)):l||(s.removeAttribute("title"),(c=s.getAttribute("aria-label"))!=null&&c.includes("boule magique")&&s.removeAttribute("aria-label"))})}function fM(n,e){if(!Lf()||is)return!1;const t=typeof e=="number"?e:Number(e);return!Number.isFinite(t)||t!==Zn?!1:(is=!0,hr=n,!0)}function Da(n={}){const e=n.full!==!1,t=n.teamIndex!=null?[n.teamIndex]:Kr.map((i,r)=>r);for(const i of t){const r=ut(i);r.hitNumbers.clear(),r.urnRemaining=null,e&&(r.urnNumbers=null,r.hiddenCellIndices=null,r.introSequenceComplete=!1,r.magicDesignationShown=!1)}if(e&&n.teamIndex==null){const i=Q("#ball-motus-grid");i&&(i.innerHTML="",delete i.dataset.plateauTeam)}}function Ia(n){var r,s;const e=ut(n);Vi(n);const t=Q("#ball-motus-grid");if(!t||(t.innerHTML="",t.dataset.plateauTeam=String(n),jx(t),!e.introSequenceComplete))return;t.querySelectorAll(".ball-flip-inner").forEach(a=>{a.classList.add("ball-flip-inner--revealed")});const i=e.hiddenCellIndices;if(i)for(const a of i)(s=(r=t.querySelector(`[data-cell-idx="${a}"]`))==null?void 0:r.querySelector(".ball-flip-inner"))==null||s.classList.remove("ball-flip-inner--revealed");mc(n),rs(n)}function pc(){var n;for(let e=0;e<2;e++){(n=document.getElementById(`win-ball-mini-${e}`))==null||n.classList.remove("win-ball-mini--shake","win-ball-mini--pop","win-ball-mini--black");const t=document.getElementById(`win-ball-char-${e}`);t&&(t.textContent="?",t.removeAttribute("aria-label"))}}async function hM(n=null,e=Ct()){uM();const t=Ra();pc();for(let i=0;i<t;i++)if(i===e?await pM(n,i):(Da({full:!0,teamIndex:i}),Vi(i),ut(i).introSequenceComplete=!1),He(n))return}async function pM(n=null,e=Ct()){if(Da({full:!0,teamIndex:e}),Vi(e),!Q("#ball-motus-grid")){ut(e).introSequenceComplete=!1;return}Ia(e),ut(e).introSequenceComplete=!1,X==null||X.emit(),await Pf(n,e),!He(n)&&(gc(e),X==null||X.emit())}let yo=!1;async function mM(n=null,e=Ct()){if(!Dr||He(n))return;Zn==null&&cM();const t=Zn;if(t==null)return;const i=ut(e);if(i.magicDesignationShown){rs(e);return}const r=document.querySelector(`#ball-motus-grid .ball-flip-wrap[data-num="${t}"]`);if(i.magicDesignationShown=!0,!r)return;const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches;r.classList.add("ball-flip-wrap--magic-reveal"),await yt(s?450:1750),!He(n)&&(r.classList.remove("ball-flip-wrap--magic-reveal"),r.classList.add("ball-flip-wrap--magic"),rs(e),await yt(s?100:320))}async function Pf(n=null,e=Ct()){Ia(e),await Ta(),!He(n)&&(await rM(n),!He(n)&&(await sM(n,e),!He(n)&&(await mM(n,e),!He(n)&&(ut(e).introSequenceComplete=!0,mc(e)))))}async function gM(n,e,t){const i=Math.max(1,e);for(let r=0;r<i;r++){if(He(n)||(Xn=r,t.emit(),await Df(n,r),He(n)))return;r<i-1&&await yt(400)}}async function Df(n=null,e=Ct()){if(!He(n)&&!ut(e).introSequenceComplete){for(;yo;){if(He(n))return;await yt(40)}if(!He(n)&&!ut(e).introSequenceComplete){yo=!0;try{await Pf(n,e)}finally{yo=!1,He(n)||(ut(e).introSequenceComplete=!0)}}}}function Vi(n=Ct()){const e=ut(n);if(e.urnNumbers)return;const t=ms.flat(),i=Jx();e.hiddenCellIndices=i,e.urnNumbers=t.filter((r,s)=>!i.has(s))}function mc(n=Ct()){ut(n).hitNumbers.forEach(e=>{var i;const t=document.querySelector(`#ball-motus-grid .ball-flip-wrap[data-num="${e}"]`);!t||t.classList.contains("ball-flip-wrap--motus-letter")||(t.classList.add("ball-flip-wrap--hit"),(i=t.querySelector(".ball-flip-inner"))==null||i.classList.remove("ball-flip-inner--revealed"))}),rs(n)}function _M(n=Ct()){const e=Q("#ball-motus-grid");if(!e)return;const t=e.dataset.plateauTeam;if(e.childElementCount>0&&t===String(n)){mc(n);return}e.dataset.plateauTeam=String(n),Ia(n)}function gc(n=Ct()){Vi(n);const e=ut(n);e.urnRemaining===null&&(e.urnRemaining=[...e.urnNumbers,...Array(aM).fill(Ii)])}function Yu(n=Ct()){const e=ut(n).urnRemaining;return!e||e.length===0?Ii:(Rf(e),e.pop())}function _c(n,e){return n.has(e)||n.has(Number(e))}function Al(n,e=Ct()){const t=ut(e).hiddenCellIndices;if(!(t instanceof Set)||t.size!==8)return!1;const i=ms.flat();for(const r of Pa()){let s=!0;for(const a of r){if(t.has(a))continue;const o=i[a];if(!_c(n,o)){s=!1;break}}if(s)return!0}return!1}function vM(n,e=Ct()){const t=ut(e).hiddenCellIndices;if(!(t instanceof Set)||t.size!==8)return null;const i=ms.flat();for(const r of Pa()){let s=!0;for(const a of r)if(!t.has(a)&&!_c(n,i[a])){s=!1;break}if(s)return r}return null}function If(n){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches?120:tM+80;return n?new Promise(i=>{let r=!1;const s=()=>{r||(r=!0,i())},a=window.setTimeout(s,t);n.addEventListener("transitionend",o=>{o.target!==n||o.propertyName!=="transform"||(window.clearTimeout(a),s())},{once:!0})}):yt(t)}const $u=["M","O","T","U","S"];async function xM(n,e=Ct()){const t=ut(e),i=vM(t.hitNumbers,e);if(!(i!=null&&i.length)){await yt(200);return}const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=r?90:220;for(let a=0;a<i.length&&a<$u.length;a++){if(He(n))return;const o=i[a],l=$u[a],c=document.querySelector(`#ball-motus-grid .ball-flip-wrap[data-cell-idx="${o}"]`);if(!c)continue;const f=c.querySelector(".ball-flip-inner"),h=c.querySelector(".ball-flip-face--flat");if(!(!f||!h)){if(h.textContent=l,h.setAttribute("aria-label",`Lettre ${l}`),c.classList.add("ball-flip-wrap--motus-letter"),f.classList.remove("ball-flip-inner--revealed"),f.offsetWidth,f.classList.add("ball-flip-inner--revealed"),await If(f),He(n))return;await yt(s)}}He(n)||await yt(r?100:280)}function MM(n,e,t,i){i?(n.classList.add("win-ball-mini--black"),e.textContent="●",e.setAttribute("aria-label","Boule noire")):(e.textContent=String(t),e.setAttribute("aria-label",`Numéro ${t}`))}async function Ku(n,e,t=null,i=Ct()){const r=document.getElementById(`win-ball-mini-${n}`),s=document.getElementById(`win-ball-char-${n}`);if(!r||!s)return;const a=e===Ii;!a&&e!=null&&fx(e),r.classList.remove("win-ball-mini--pop","win-ball-mini--black"),s.textContent="?",s.removeAttribute("aria-label"),r.classList.add("win-ball-mini--shake"),be();const o=Uv().catch(()=>!1),l=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(await yt(l?420:oM),!He(t)&&(r.classList.remove("win-ball-mini--shake"),MM(r,s,e,a),await o,!He(t))){if(a){if(be(),tf().catch(()=>{}),r.classList.add("win-ball-mini--pop"),await yt(450),He(t))return;r.classList.remove("win-ball-mini--pop")}else{const c=document.querySelector(`#ball-motus-grid .ball-flip-wrap[data-num="${e}"]`),f=fM(i,e);if(f&&c&&(c.dataset.magicSparkleUntilDraw="1"),f&&(be(),await ox({awaitCompletion:!0}).catch(()=>!1),He(t))||(be(),r.classList.add("win-ball-mini--pop"),await of(e).catch(()=>{}),He(t)))return;r.classList.remove("win-ball-mini--pop");const h=c==null?void 0:c.querySelector(".ball-flip-inner");if(c&&h){if(h.classList.remove("ball-flip-inner--revealed"),h.offsetWidth,await nf({awaitCompletion:!0}).catch(()=>{}),He(t)||(await If(h),He(t)))return;dM(c),rs(i),c.classList.add("ball-flip-wrap--hit")}const u=typeof e=="number"?e:Number(e);Number.isFinite(u)&&ut(i).hitNumbers.add(u)}await yt(180)}}function Zu(n=Ct()){if(!(!(X!=null&&X.teamMode)||X.teamSize<2)){if(hr!=null&&hr===n){hr=null,X.message="Boule magique : vous gardez la main malgré la boule noire !",X.emit();return}X.advanceTeam(),X.emit()}}async function SM(n,e=Ct()){if(await yt(200),He(n)||(Ia(e),!ut(e).introSequenceComplete&&(await Df(n,e),He(n)||(await yt(280),He(n)))))return;gc(e),X==null||X.emit();const t=ut(e),i=Yu(e);if(await Ku(0,i,n,e),He(n))return;i===Ii?Zu(e):X==null||X.emit();let r=null;if(!Al(t.hitNumbers,e)&&i!==Ii){if(await yt(320),He(n)||(r=Yu(e),await Ku(1,r,n,e),He(n)))return;r===Ii?Zu(e):X==null||X.emit()}if(Al(t.hitNumbers,e)){vf(Tf(),e),be(),en(),await Ta().catch(()=>{});const o=rf().catch(()=>{});if(await Promise.all([xM(n,e),o]),He(n)||(await hM(n,e),He(n)))return;X==null||X.emit();return}}async function yM(){Di(),mi(),ea(),Tl(),bf(),Ca(),$n.classList.add("hidden"),El(!0);try{const n=pi==="team"?Yr:1;_f(n),Cf(),lM(n),Da({full:!0}),pi==="team"&&n>1&&(Dr=!0);const e=new Tx({onUpdate:wM,onEnd:EM});X=e,Zs.textContent="Chargement du dictionnaire…";try{await e.start(js,Ef())}catch{}if(X!==e)return;e.target&&ua(e.target),Mr(),ln.classList.add("hidden"),Ne.classList.remove("hidden"),Sr(),requestAnimationFrame(()=>{Ne.classList.contains("hidden")||en()}),window.__MOTUS__=e,Oi="";const t=ps;for(let i=0;i<n;i++)Vi(i);try{await gM(t,n,e)}finally{Xn=-1,X===e&&(e.message="",e.emit())}if(X!==e)return;ua(e.target),Oi="",rc(e.target),ff(),kt()&&xa(),dc()}finally{El(!1)}}function EM(n){if(n.won){const t=uc();Wu(!0);const i=(X==null?void 0:X.currentTeamIndex)??0;if(vf(Hx(),i),t&&!Xx(i)){$x();return}const r=ps,s=X;if(Pi)return;Pi=!0,X===s&&s.emit(),SM(r,i).catch(()=>{}).finally(()=>{Pi=!1,X===s&&(s!=null&&s.winBallPhase)&&s.emit()});return}if(Wu(!1),!wa()){La(n.word);return}$n.dataset.action="next-word",Ca(),$n.classList.remove("hidden"),lf.textContent="Motus !";const e=Xt>0?` — mot ${Gi} / ${Xt}`:"";cf.textContent=`Le mot était : ${n.word}${e}`}const Uf=()=>window.matchMedia("(max-width: 520px), (hover: none) and (pointer: coarse)");function pr(){const n=document.querySelector(".keyboard-zone");!n||!document.body.classList.contains("game-in-play")||!Uf().matches||n.classList.contains("hidden")||n.hidden||n.clientHeight<48&&requestAnimationFrame(pr)}function Nf(){const n=!!(Ne&&!Ne.classList.contains("hidden"));document.body.classList.toggle("game-in-play",n);const e=document.querySelector(".game-top-logo");e&&e.setAttribute("aria-hidden",n?"false":"true"),requestAnimationFrame(()=>{requestAnimationFrame(pr)})}let Eo;function bM(){var e;const n=document.querySelector(".keyboard-zone");!n||Eo||(Eo=new ResizeObserver(()=>pr()),Eo.observe(n),window.addEventListener("resize",pr,{passive:!0}),(e=window.visualViewport)==null||e.addEventListener("resize",pr,{passive:!0}))}function TM(n){!Ne||!n||(Ne.style.setProperty("--word-len",String(n.length)),Ne.style.setProperty("--grid-rows",String(n.maxAttempts)),et==null||et.style.setProperty("--cols",String(n.length)),et==null||et.style.setProperty("--rows",String(n.maxAttempts)))}function Ff(n,e,t){return n.bonusRevealCol>=0&&e===n.currentRow&&t===n.bonusRevealCol}function Of(n,e,t,i){Ff(e,t,i)&&(n.classList.add("cell--bonus-blink"),e.bonusRevealBlinking&&!e.bonusRevealVisible&&n.classList.add("cell--bonus-hidden"))}function Bf(n,e,t,i,r){if(Ff(n,e,t)&&n.bonusRevealBlinking&&!n.bonusRevealVisible)return"·";const s=e<=n.currentRow&&!i&&r==="empty";return i||(s?"·":"")}function AM(n){if(!et||!(n!=null&&n.verifyAnimating))return!1;const e=n.currentRow,t=n.rows[e];if(!t)return!1;const i=n.length,r=i*n.maxAttempts;if(et.children.length<r)return!1;cr&&(cr.textContent=`Essai ${Math.min(n.currentRow+1,n.maxAttempts)} / ${n.maxAttempts}`);for(let s=0;s<i;s++){const a=et.children[e*i+s];if(!(a instanceof HTMLElement))return!1;const o=t.states[s],l=t.letters[s];a.className="cell",a.setAttribute("role","gridcell"),o!=="empty"&&a.classList.add(o),(o==="locked"||o==="given")&&a.classList.add("correct","given"),(o==="typed"||o==="pending")&&a.classList.add("pending"),a.classList.remove("editable","cursor"),a.removeAttribute("aria-current");let c=a.querySelector(".cell-char");c||(c=document.createElement("span"),c.className="cell-char",a.appendChild(c)),c.textContent=Bf(n,e,s,l,o),Of(a,n,e,s)}return!0}function wM(n){var E;if(X!==n)return;if(Nf(),TM(n),n.loading){Zs.textContent="Chargement du dictionnaire…",et.innerHTML='<p class="loading">Chargement…</p>',Gn==null||Gn.classList.add("hidden"),et.classList.add("hidden"),Tn==null||Tn.classList.add("hidden"),(E=document.querySelector(".game-actions"))==null||E.classList.add("hidden"),et.classList.remove("grid--ball-pending"),Ne.classList.remove("game--win-ball"),mi();return}const e=!!(n.winBallPhase&&n.finished),t=!n.loading&&!n.winBallPhase,i=Xn>=0?Xn:Ct();ut(i);const r=Xn>=0&&t,s=e||r,a=t&&!s;if(Gn){Gn.classList.toggle("hidden",!s),Q("#ball-motus-grid"),s&&_M(i);const p=Gn.querySelector(".win-ball-slots"),d=Q("#btn-win-continue");p==null||p.classList.toggle("hidden",!e),d==null||d.classList.toggle("hidden",!e),d&&(d.disabled=e&&Pi,d.setAttribute("aria-busy",d.disabled?"true":"false"),d.textContent=wa()?"Mot suivant":"Terminer la partie")}const o=!a;et&&(et.classList.toggle("hidden",o),et.hidden=o),et==null||et.classList.remove("grid--ball-pending"),Ne.classList.toggle("game--win-ball",e),Ne.classList.toggle("game--plateau-intro",s);const l=document.querySelector(".keyboard-zone");l&&(l.classList.toggle("hidden",o),l.hidden=o),Tn&&(Tn.classList.toggle("hidden",o),Tn.hidden=o);const c=document.querySelector(".game-actions");c&&(c.classList.toggle("hidden",o),c.hidden=o);const f=document.querySelector(".game-top-meta");if(f&&(f.classList.toggle("hidden",o),f.hidden=o),cr&&(cr.classList.toggle("hidden",o),cr.hidden=o),En){const p=!o&&n.turnTimerEnabled;En.classList.toggle("hidden",!p),En.hidden=!p}if(Mr(),ku&&s&&(ku.textContent=wx(i)),Zs){const p=n.winBallPhase&&n.finished&&!n.message?"":n.message||"";Zs.textContent=s?"":a?p:""}if(!a){et.innerHTML="",mi();return}if($r(),cr.textContent=`Essai ${Math.min(n.currentRow+1,n.maxAttempts)} / ${n.maxAttempts}`,dc(),Mr(),n.verifyAnimating&&AM(n))return;et.innerHTML="",n.rows.forEach((p,d)=>{for(let M=0;M<n.length;M++){const A=document.createElement("div");A.className="cell",A.setAttribute("role","gridcell");const y=p.states[M],R=p.letters[M];y!=="empty"&&A.classList.add(y),(y==="locked"||y==="given")&&A.classList.add("correct","given"),(y==="typed"||y==="pending")&&A.classList.add("pending"),d===n.currentRow&&n.isLetterEditable(M)&&(n.winBallPhase||(A.classList.add("editable"),A.addEventListener("click",()=>n.setCursor(M))),M===n.nextTypeCol&&(A.classList.add("cursor"),A.setAttribute("aria-current","true"))),Of(A,n,d,M);const P=document.createElement("span");P.className="cell-char",P.textContent=Bf(n,d,M,R,y),A.appendChild(P),et.appendChild(A)}});const h=di(n),u=Cx(n);RM(n,u);const m=Q("#btn-submit"),x=Q("#btn-delete");m&&(m.disabled=!h||n.inputLocked),x&&(x.disabled=!u||n.inputLocked),Rx(n),es&&!es.classList.contains("hidden")&&na(),requestAnimationFrame(pr),fc(n)}function RM(n,e=!0){const t=Tn.querySelector(".game-actions");Tn.querySelectorAll(".kb-row").forEach(i=>i.remove()),Ex.forEach((i,r)=>{var o,l;const s=document.createElement("div");s.className="kb-row";const a=bx[r];for(let c=0;c<i.length;c++){const f=i[c],h=document.createElement("button");h.type="button",h.className="key",h.setAttribute("lang","fr"),(a==null?void 0:a[c])!=null&&(h.style.gridColumn=String(a[c]),h.style.gridRow=String(r+1)),h.textContent=f,n.absentLetters.has(f)?h.classList.add("absent"):(o=n.correctPlaceLetters)!=null&&o.has(f)?h.classList.add("well-placed"):(l=n.wrongPlaceLetters)!=null&&l.has(f)&&h.classList.add("wrong-place"),e?h.addEventListener("click",()=>{be(),sc(),n.typeLetter(f),$r()}):h.disabled=!0,s.appendChild(h)}t?Tn.insertBefore(s,t):Tn.appendChild(s)})}function CM(){var n;Q("#btn-menu").addEventListener("click",()=>{bl()}),Q("#btn-submit").addEventListener("click",()=>{!X||!di(X)||(be(),kt()||oi().catch(()=>{}),X.submit().then(()=>$r()))}),Q("#btn-delete").addEventListener("click",()=>X==null?void 0:X.deleteLetter()),(n=Q("#btn-solo-bonus"))==null||n.addEventListener("click",()=>{!X||!df(X)||(be(),X.grantBonusLetterWithReveal().then(()=>$r()))}),Ne.addEventListener("pointerdown",()=>{be()},{passive:!0}),Q("#btn-modal-close").addEventListener("click",()=>{const e=$n.dataset.action||"next-word";if($n.classList.add("hidden"),Ca(),e==="session-end"){bl();return}if(!wa()){La();return}Af()}),window.addEventListener("keydown",e=>{const t=Ql.some(r=>!r.classList.contains("hidden"));if(e.key==="Escape"&&t){e.preventDefault(),Di(),Sr(),Kn();return}if(t||!X||Ne.classList.contains("hidden")||X.winBallPhase||!di(X))return;if(e.key==="Enter"||e.key==="NumpadEnter"){e.preventDefault(),be(),X.submit().then(()=>$r());return}if(!di(X)||X.inputLocked)return;if(e.key==="Backspace"){e.preventDefault(),X.deleteLetter();return}if(e.key==="ArrowLeft"){e.preventDefault(),X.moveCursor(-1);return}if(e.key==="ArrowRight"){e.preventDefault(),X.moveCursor(1);return}const i=Px(e);i&&(e.preventDefault(),be(),sc(),X.typeLetter(i))},!0)}let ks=0;function LM(){const n=()=>{if(hf()){const i=typeof performance<"u"?performance.now():Date.now();if(i-ks<40)return;ks=i,be(),Kn();return}if(!Ne.classList.contains("hidden")){en();return}const e=typeof performance<"u"?performance.now():Date.now();if(e-ks<40)return;ks=e,be();const t=document.getElementById("motus-snd-generique");t instanceof HTMLAudioElement&&t.paused&&!ds()&&!kt()&&oi().catch(()=>{}),Kn()};for(const e of["pointerdown","touchstart","click"])document.addEventListener(e,n,{capture:!0,passive:!0})}function ai(){const n=document.documentElement,e=window.innerHeight,t=window.visualViewport,i=t?Math.round(t.height+t.offsetTop):e,r=Math.max(e,i,n.clientHeight);n.style.setProperty("--motus-viewport-h",`${r}px`)}function PM(){var n,e;ai(),requestAnimationFrame(()=>{ai(),requestAnimationFrame(ai)}),window.addEventListener("resize",ai,{passive:!0}),window.addEventListener("orientationchange",ai,{passive:!0}),window.addEventListener("pageshow",ai,{passive:!0}),(n=window.visualViewport)==null||n.addEventListener("resize",ai,{passive:!0}),(e=window.visualViewport)==null||e.addEventListener("scroll",ai,{passive:!0})}function DM(){(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)&&document.documentElement.classList.add("pwa-standalone"),cc()}Tv();pf();mf();PM();DM();Zx();(Sf()||Uf().matches&&yf())&&(ns=!0);Aa();Ne&&!Ne.hasAttribute("tabindex")&&Ne.setAttribute("tabindex","-1");CM();LM();Nd({pauseMenuGenerique:en,syncMenuGenerique:Kn,handoffGeneriqueToMenuMusic:ha,playGeneriqueAudio:ac,menuVolume:ic}).then(n=>{n!=null&&n.withAudio?(ha(),oc()):gf()});bM();
