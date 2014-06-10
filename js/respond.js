/*! Respond.js v1.4.0: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */

!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){s(!0)}var c={};if(a.respond=c,c.update=function(){},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var d,e,f,g=a.document,h=g.documentElement,i=[],j=[],k=[],l={},m=30,n=g.getElementsByTagName("head")[0]||h,o=g.getElementsByTagName("base")[0],p=n.getElementsByTagName("link"),q=[],r=function(){var a,b=g.createElement("div"),c=g.body,d=h.style.fontSize,e=c&&c.style.fontSize,i=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=i=g.createElement("body"),c.style.background="none"),h.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),h.insertBefore(c,h.firstChild),a=b.offsetWidth,i?h.removeChild(c):c.removeChild(b),h.style.fontSize=d,c.style.fontSize=e,a=f=parseFloat(a)},s=function(b){var c="clientWidth",l=h[c],o="CSS1Compat"===g.compatMode&&l||g.body[c]||l,q={},t=p[p.length-1],u=(new Date).getTime();if(b&&d&&m>u-d)return a.clearTimeout(e),e=a.setTimeout(s,m),void 0;d=u;for(var v in i)if(i.hasOwnProperty(v)){var w=i[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?f||r():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?f||r():1)),w.hasquery&&(z&&A||!(z||o>=x)||!(A||y>=o))||(q[w.media]||(q[w.media]=[]),q[w.media].push(j[w.rules]))}for(var C in k)k.hasOwnProperty(C)&&k[C]&&k[C].parentNode===n&&n.removeChild(k[C]);for(var D in q)if(q.hasOwnProperty(D)){var E=g.createElement("style"),F=q[D].join("\n");E.type="text/css",E.media=D,n.insertBefore(E,t.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(g.createTextNode(F)),k.push(E)}},t=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),e=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var f=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},g=!e&&c;b.length&&(b+="/"),g&&(e=1);for(var h=0;e>h;h++){var k,l,m,n;g?(k=c,j.push(f(a))):(k=d[h].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,j.push(RegExp.$2&&f(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],i.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:j.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}s()},u=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),v=function(a,b){var c=u();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){if(q.length){var b=q.shift();v(b.href,function(c){t(c,b.href,b.media),l[b.href]=!0,a.setTimeout(function(){w()},0)})}},x=function(){for(var b=0;b<p.length;b++){var c=p[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!l[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(t(c.styleSheet.rawCssText,d,e),l[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!o||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===d.substring(0,2)&&(d=a.location.protocol+d),q.push({href:d,media:e})))}w()};x(),c.update=x,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);
