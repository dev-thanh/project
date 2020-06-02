if
	(typeof jQuery == 'undefined' || typeof jQuery.fn.on == 'undefined') {
/*! jQuery v1.12.0 */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb,tb,ub=n.expr.attrHandle,vb=/^(?:checked|selected)$/i,wb=l.getSetAttribute,xb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?tb:sb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?xb&&wb||!vb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(wb?c:d)}}),tb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):xb&&wb||!vb.test(c)?a.setAttribute(!wb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ub[b]||n.find.attr;xb&&wb||!vb.test(b)?ub[b]=function(a,b,d){var e,f;return d||(f=ub[b],ub[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ub[b]=f),e}:ub[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),xb&&wb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):sb&&sb.set(a,b,c)}}),wb||(sb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ub.id=ub.name=ub.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:sb.set},n.attrHooks.contenteditable={set:function(a,b,c){sb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var yb=/^(?:input|select|textarea|button|object)$/i,zb=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Ab=/[\t\r\n\f]/g;function Bb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Bb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=Bb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Bb(c)+" ").replace(Ab," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Cb=a.location,Db=n.now(),Eb=/\?/,Fb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Fb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Gb=/#.*$/,Hb=/([?&])_=[^&]*/,Ib=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Jb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kb=/^(?:GET|HEAD)$/,Lb=/^\/\//,Mb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Nb={},Ob={},Pb="*/".concat("*"),Qb=Cb.href,Rb=Mb.exec(Qb.toLowerCase())||[];function Sb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Tb(a,b,c,d){var e={},f=a===Ob;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ub(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Vb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Wb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Qb,type:"GET",isLocal:Jb.test(Rb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ub(Ub(a,n.ajaxSettings),b):Ub(n.ajaxSettings,a)},ajaxPrefilter:Sb(Nb),ajaxTransport:Sb(Ob),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Ib.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Qb)+"").replace(Gb,"").replace(Lb,Rb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Mb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Rb[1]&&d[2]===Rb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Rb[3]||("http:"===Rb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Tb(Nb,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Kb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Eb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Hb.test(f)?f.replace(Hb,"$1_="+Db++):f+(Eb.test(f)?"&":"?")+"_="+Db++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Pb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Tb(Ob,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Vb(l,w,d)),v=Wb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Xb(a){return a.style&&a.style.display||n.css(a,"display")}function Yb(a){while(a&&1===a.nodeType){if("none"===Xb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Yb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Zb=/%20/g,$b=/\[\]$/,_b=/\r?\n/g,ac=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function cc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||$b.test(a)?d(a,e):cc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)cc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)cc(c,a[c],b,e);return d.join("&").replace(Zb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&bc.test(this.nodeName)&&!ac.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(_b,"\r\n")}}):{name:b.name,value:c.replace(_b,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?hc():d.documentMode>8?gc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&gc()||hc()}:gc;var dc=0,ec={},fc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ec)ec[a](void 0,!0)}),l.cors=!!fc&&"withCredentials"in fc,fc=l.ajax=!!fc,fc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++dc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ec[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ec[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function gc(){try{return new a.XMLHttpRequest}catch(b){}}function hc(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ic=[],jc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ic.pop()||n.expando+"_"+Db++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(jc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&jc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(jc,"$1"+e):b.jsonp!==!1&&(b.url+=(Eb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ic.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){if(!d.implementation.createHTMLDocument)return!1;var a=d.implementation.createHTMLDocument("");return a.body.innerHTML="<form></form><form></form>",2===a.body.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var kc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&kc)return kc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function lc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=lc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),c.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=lc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){
n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var mc=a.jQuery,nc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=nc),b&&a.jQuery===n&&(a.jQuery=mc),n},b||(a.jQuery=a.$=n),n});
/*! jQuery Migrate v1.4.1 */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
}
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(window.jQuery)}(function(e){"use strict";var t,i;e.fn.fileinputLocales={},e.fn.fileinputThemes={},String.prototype.setTokens=function(e){var t,i,a=this.toString();for(t in e)e.hasOwnProperty(t)&&(i=new RegExp("{"+t+"}","g"),a=a.replace(i,e[t]));return a},t={FRAMES:".kv-preview-thumb",SORT_CSS:"file-sortable",OBJECT_PARAMS:'<param name="controller" value="true" />\n<param name="allowFullScreen" value="true" />\n<param name="allowScriptAccess" value="always" />\n<param name="autoPlay" value="false" />\n<param name="autoStart" value="false" />\n<param name="quality" value="high" />\n',DEFAULT_PREVIEW:'<div class="file-preview-other">\n<span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>',MODAL_ID:"kvFileinputModal",MODAL_EVENTS:["show","shown","hide","hidden","loaded"],objUrl:window.URL||window.webkitURL,compare:function(e,t,i){return void 0!==e&&(i?e===t:e.match(t))},isIE:function(e){if("Microsoft Internet Explorer"!==navigator.appName)return!1;if(10===e)return new RegExp("msie\\s"+e,"i").test(navigator.userAgent);var t,i=document.createElement("div");return i.innerHTML="\x3c!--[if IE "+e+"]> <i></i> <![endif]--\x3e",t=i.getElementsByTagName("i").length,document.body.appendChild(i),i.parentNode.removeChild(i),t},canAssignFilesToInput:function(){var e=document.createElement("input");try{return e.type="file",e.files=null,!0}catch(e){return!1}},getDragDropFolders:function(e){var t,i,a=e.length,r=0;if(a>0&&e[0].webkitGetAsEntry())for(t=0;t<a;t++)(i=e[t].webkitGetAsEntry())&&i.isDirectory&&r++;return r},initModal:function(t){var i=e("body");i.length&&t.appendTo(i)},isEmpty:function(t,i){return null==t||0===t.length||i&&""===e.trim(t)},isArray:function(e){return Array.isArray(e)||"[object Array]"===Object.prototype.toString.call(e)},ifSet:function(e,t,i){return i=i||"",t&&"object"==typeof t&&e in t?t[e]:i},cleanArray:function(e){return e instanceof Array||(e=[]),e.filter(function(e){return null!=e})},spliceArray:function(t,i,a){var r,n,s=0,o=[];if(!(t instanceof Array))return[];for(n=e.extend(!0,[],t),a&&n.reverse(),r=0;r<n.length;r++)r!==i&&(o[s]=n[r],s++);return a&&o.reverse(),o},getNum:function(e,t){return t=t||0,"number"==typeof e?e:("string"==typeof e&&(e=parseFloat(e)),isNaN(e)?t:e)},hasFileAPISupport:function(){return!(!window.File||!window.FileReader)},hasDragDropSupport:function(){var e=document.createElement("div");return!t.isIE(9)&&(void 0!==e.draggable||void 0!==e.ondragstart&&void 0!==e.ondrop)},hasFileUploadSupport:function(){return t.hasFileAPISupport()&&window.FormData},hasBlobSupport:function(){try{return!!window.Blob&&Boolean(new Blob)}catch(e){return!1}},hasArrayBufferViewSupport:function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}},dataURI2Blob:function(e){var i,a,r,n,s,o,l=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,d=t.hasBlobSupport();if(!((d||l)&&window.atob&&window.ArrayBuffer&&window.Uint8Array))return null;for(i=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):decodeURIComponent(e.split(",")[1]),a=new ArrayBuffer(i.length),r=new Uint8Array(a),n=0;n<i.length;n+=1)r[n]=i.charCodeAt(n);return s=e.split(",")[0].split(":")[1].split(";")[0],d?new Blob([t.hasArrayBufferViewSupport()?r:a],{type:s}):((o=new l).append(a),o.getBlob(s))},arrayBuffer2String:function(e){if(window.TextDecoder)return new TextDecoder("utf-8").decode(e);var t,i,a,r,n=Array.prototype.slice.apply(new Uint8Array(e)),s="",o=0;for(t=n.length;o<t;)switch((i=n[o++])>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:s+=String.fromCharCode(i);break;case 12:case 13:a=n[o++],s+=String.fromCharCode((31&i)<<6|63&a);break;case 14:a=n[o++],r=n[o++],s+=String.fromCharCode((15&i)<<12|(63&a)<<6|(63&r)<<0)}return s},isHtml:function(e){var t=document.createElement("div");t.innerHTML=e;for(var i=t.childNodes,a=i.length;a--;)if(1===i[a].nodeType)return!0;return!1},isSvg:function(e){return e.match(/^\s*<\?xml/i)&&(e.match(/<!DOCTYPE svg/i)||e.match(/<svg/i))},getMimeType:function(e,t,i){switch(e){case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":return"image/jpeg";case"89504E47":return"image/png";case"47494638":return"image/gif";case"49492a00":return"image/tiff";case"52494646":return"image/webp";case"66747970":return"video/3gp";case"4f676753":return"video/ogg";case"1a45dfa3":return"video/mkv";case"000001ba":case"000001b3":return"video/mpeg";case"3026b275":return"video/wmv";case"25504446":return"application/pdf";case"25215053":return"application/ps";case"504b0304":case"504b0506":case"504b0508":return"application/zip";case"377abcaf":return"application/7z";case"75737461":return"application/tar";case"7801730d":return"application/dmg";default:switch(e.substring(0,6)){case"435753":return"application/x-shockwave-flash";case"494433":return"audio/mp3";case"425a68":return"application/bzip";default:switch(e.substring(0,4)){case"424d":return"image/bmp";case"fffb":return"audio/mp3";case"4d5a":return"application/exe";case"1f9d":case"1fa0":return"application/zip";case"1f8b":return"application/gzip";default:return t&&!t.match(/[^\u0000-\u007f]/)?"application/text-plain":i}}}},addCss:function(e,t){e.removeClass(t).addClass(t)},getElement:function(i,a,r){return t.isEmpty(i)||t.isEmpty(i[a])?r:e(i[a])},uniqId:function(){return Math.round((new Date).getTime())+"_"+Math.round(100*Math.random())},htmlEncode:function(e,t){return void 0===e?t||null:e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},replaceTags:function(t,i){var a=t;return i?(e.each(i,function(e,t){"function"==typeof t&&(t=t()),a=a.split(e).join(t)}),a):a},cleanMemory:function(e){var i=e.is("img")?e.attr("src"):e.find("source").attr("src");t.objUrl.revokeObjectURL(i)},findFileName:function(e){var t=e.lastIndexOf("/");return-1===t&&(t=e.lastIndexOf("\\")),e.split(e.substring(t,t+1)).pop()},checkFullScreen:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement},toggleFullScreen:function(e){var i=document,a=i.documentElement;a&&e&&!t.checkFullScreen()?a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):i.exitFullscreen?i.exitFullscreen():i.msExitFullscreen?i.msExitFullscreen():i.mozCancelFullScreen?i.mozCancelFullScreen():i.webkitExitFullscreen&&i.webkitExitFullscreen()},moveArray:function(t,i,a,r){var n=e.extend(!0,[],t);if(r&&n.reverse(),a>=n.length)for(var s=a-n.length;1+s--;)n.push(void 0);return n.splice(a,0,n.splice(i,1)[0]),r&&n.reverse(),n},cleanZoomCache:function(e){var t=e.closest(".kv-zoom-cache-theme");t.length||(t=e.closest(".kv-zoom-cache")),t.remove()},closeButton:function(e){return'<button type="button" class="'+(e=e?"close "+e:"close")+'" aria-label="Close">\n  <span aria-hidden="true">&times;</span>\n</button>'},getRotation:function(e){switch(e){case 2:return"rotateY(180deg)";case 3:return"rotate(180deg)";case 4:return"rotate(180deg) rotateY(180deg)";case 5:return"rotate(270deg) rotateY(180deg)";case 6:return"rotate(90deg)";case 7:return"rotate(90deg) rotateY(180deg)";case 8:return"rotate(270deg)";default:return""}},setTransform:function(e,t){e&&(e.style.transform=t,e.style.webkitTransform=t,e.style["-moz-transform"]=t,e.style["-ms-transform"]=t,e.style["-o-transform"]=t)},setImageOrientation:function(e,i,a){if(e&&e.length){var r="load.fileinputimageorient";e.off(r).on(r,function(){var r=e.get(0),n=i&&i.length?i.get(0):null,s=r.offsetHeight,o=r.offsetWidth,l=t.getRotation(a);if(e.data("orientation",a),n&&i.data("orientation",a),a<5)return t.setTransform(r,l),void t.setTransform(n,l);var d=Math.atan(o/s),c=Math.sqrt(Math.pow(s,2)+Math.pow(o,2)),h=c?s/Math.cos(Math.PI/2+d)/c:1,p=" scale("+Math.abs(h)+")";t.setTransform(r,l+p),t.setTransform(n,l+p)})}}},(i=function(i,a){this.$element=e(i),this.$parent=this.$element.parent(),this._validate()&&(this.isPreviewable=t.hasFileAPISupport(),this.isIE9=t.isIE(9),this.isIE10=t.isIE(10),(this.isPreviewable||this.isIE9)&&(this._init(a),this._listen()),this.$element.removeClass("file-loading"))}).prototype={constructor:i,_cleanup:function(){this.reader=null,this.formdata={},this.uploadCount=0,this.uploadStatus={},this.uploadLog=[],this.uploadAsyncCount=0,this.loadedImages=[],this.totalImagesCount=0,this.ajaxRequests=[],this.clearStack(),this.fileBatchCompleted=!0,this.isPreviewable||(this.showPreview=!1),this.isError=!1,this.ajaxAborted=!1,this.cancelling=!1},_init:function(i,a){var r,n,s,o,l=this,d=l.$element;l.options=i,e.each(i,function(e,i){switch(e){case"minFileCount":case"maxFileCount":case"minFileSize":case"maxFileSize":case"maxFilePreviewSize":case"resizeImageQuality":case"resizeIfSizeMoreThan":case"progressUploadThreshold":case"initialPreviewCount":case"zoomModalHeight":case"minImageHeight":case"maxImageHeight":case"minImageWidth":case"maxImageWidth":l[e]=t.getNum(i);break;default:l[e]=i}}),l.rtl&&(o=l.previewZoomButtonIcons.prev,l.previewZoomButtonIcons.prev=l.previewZoomButtonIcons.next,l.previewZoomButtonIcons.next=o),a||l._cleanup(),l.$form=d.closest("form"),l._initTemplateDefaults(),l.uploadFileAttr=t.isEmpty(d.attr("name"))?"file_data":d.attr("name"),s=l._getLayoutTemplate("progress"),l.progressTemplate=s.replace("{class}",l.progressClass),l.progressCompleteTemplate=s.replace("{class}",l.progressCompleteClass),l.progressErrorTemplate=s.replace("{class}",l.progressErrorClass),l.isDisabled=d.attr("disabled")||d.attr("readonly"),l.isDisabled&&d.attr("disabled",!0),l.isClickable=l.browseOnZoneClick&&l.showPreview&&(l.dropZoneEnabled||!t.isEmpty(l.defaultPreviewContent)),l.isAjaxUpload=t.hasFileUploadSupport()&&!t.isEmpty(l.uploadUrl),l.dropZoneEnabled=t.hasDragDropSupport()&&l.dropZoneEnabled,l.isAjaxUpload||(l.dropZoneEnabled=l.dropZoneEnabled&&t.canAssignFilesToInput()),l.slug="function"==typeof i.slugCallback?i.slugCallback:l._slugDefault,l.mainTemplate=l.showCaption?l._getLayoutTemplate("main1"):l._getLayoutTemplate("main2"),l.captionTemplate=l._getLayoutTemplate("caption"),l.previewGenericTemplate=l._getPreviewTemplate("generic"),!l.imageCanvas&&l.resizeImage&&(l.maxImageWidth||l.maxImageHeight)&&(l.imageCanvas=document.createElement("canvas"),l.imageCanvasContext=l.imageCanvas.getContext("2d")),t.isEmpty(d.attr("id"))&&d.attr("id",t.uniqId()),l.namespace=".fileinput_"+d.attr("id").replace(/-/g,"_"),void 0===l.$container?l.$container=l._createContainer():l._refreshContainer(),n=l.$container,l.$dropZone=n.find(".file-drop-zone"),l.$progress=n.find(".kv-upload-progress"),l.$btnUpload=n.find(".fileinput-upload"),l.$captionContainer=t.getElement(i,"elCaptionContainer",n.find(".file-caption")),l.$caption=t.getElement(i,"elCaptionText",n.find(".file-caption-name")),t.isEmpty(l.msgPlaceholder)||(r=d.attr("multiple")?l.filePlural:l.fileSingle,l.$caption.attr("placeholder",l.msgPlaceholder.replace("{files}",r))),l.$captionIcon=l.$captionContainer.find(".file-caption-icon"),l.$previewContainer=t.getElement(i,"elPreviewContainer",n.find(".file-preview")),l.$preview=t.getElement(i,"elPreviewImage",n.find(".file-preview-thumbnails")),l.$previewStatus=t.getElement(i,"elPreviewStatus",n.find(".file-preview-status")),l.$errorContainer=t.getElement(i,"elErrorContainer",l.$previewContainer.find(".kv-fileinput-error")),l._validateDisabled(),t.isEmpty(l.msgErrorClass)||t.addCss(l.$errorContainer,l.msgErrorClass),a?l._errorsExist()||l.$errorContainer.hide():(l.$errorContainer.hide(),l.previewInitId="preview-"+t.uniqId(),l._initPreviewCache(),l._initPreview(!0),l._initPreviewActions(),l.$parent.hasClass("file-loading")&&(l.$container.insertBefore(l.$parent),l.$parent.remove())),l._setFileDropZoneTitle(),d.attr("disabled")&&l.disable(),l._initZoom(),l.hideThumbnailContent&&t.addCss(l.$preview,"hide-content")},_initTemplateDefaults:function(){var i,a,r,n,s,o,l,d,c,h=this;i=t.closeButton("fileinput-remove"),a='<div id="'+t.MODAL_ID+'" class="file-zoom-dialog modal fade" tabindex="-1" aria-labelledby="'+t.MODAL_ID+'Label"></div>',r='<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}"',n='<video class="kv-preview-data file-preview-video" controls {style}>\n<source src="{data}" type="{type}">\n'+t.DEFAULT_PREVIEW+"\n</video>\n",s='\x3c!--suppress ALL --\x3e<audio class="kv-preview-data file-preview-audio" controls {style}>\n<source src="{data}" type="{type}">\n'+t.DEFAULT_PREVIEW+"\n</audio>\n",l='<embed class="kv-preview-data file-preview-pdf" src="{data}" type="application/pdf" {style}>\n',o='<object class="kv-preview-data file-preview-object file-object {typeCss}" data="{data}" type="{type}" {style}>\n<param name="movie" value="{caption}" />\n'+t.OBJECT_PARAMS+" "+t.DEFAULT_PREVIEW+"\n</object>\n",d='<div class="kv-preview-data file-preview-other-frame" {style}>\n'+t.DEFAULT_PREVIEW+"\n</div>\n",c={width:"100%",height:"100%","min-height":"480px"},h._isPdfRendered()&&(l=h.pdfRendererTemplate.replace("{renderer}",h.pdfRendererUrl)),h.defaults={layoutTemplates:{main1:'{preview}\n<div class="kv-upload-progress kv-hidden"></div><div class="clearfix"></div>\n<div class="input-group {class}">\n  {caption}\n<div class="input-group-btn input-group-append">\n      {remove}\n      {cancel}\n      {upload}\n      {browse}\n    </div>\n</div>',main2:'{preview}\n<div class="kv-upload-progress kv-hidden"></div>\n<div class="clearfix"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n',preview:'<div class="file-preview {class}">\n    {close}    <div class="{dropClass}">\n    <div class="file-preview-thumbnails">\n    </div>\n    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n    </div>\n</div>',close:i,fileIcon:'<i class="glyphicon glyphicon-file"></i>',caption:'<div class="file-caption form-control {class}" tabindex="500">\n  <span class="file-caption-icon"></span>\n  <input class="file-caption-name" onkeydown="return false;" onpaste="return false;">\n</div>',modalMain:a,modal:'<div class="modal-dialog modal-lg{rtl}" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <h5 class="modal-title">{heading}</h5>\n      <span class="kv-zoom-title"></span>\n      <div class="kv-zoom-actions">{toggleheader}{fullscreen}{borderless}{close}</div>\n    </div>\n    <div class="modal-body">\n      <div class="floating-buttons"></div>\n      <div class="kv-zoom-body file-zoom-content {zoomFrameClass}"></div>\n{prev} {next}\n    </div>\n  </div>\n</div>\n',progress:'<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {status}\n     </div>\n</div>',size:" <samp>({sizeText})</samp>",footer:'<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">\n        <div class="file-caption-info">{caption}</div>\n        <div class="file-size-info">{size}</div>\n    </div>\n    {progress}\n{indicator}\n{actions}\n</div>',indicator:'<div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>',actions:'<div class="file-actions">\n    <div class="file-footer-buttons">\n        {download} {upload} {delete} {zoom} {other}    </div>\n</div>\n{drag}\n<div class="clearfix"></div>',actionDelete:'<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n',actionUpload:'<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">{uploadIcon}</button>',actionDownload:'<a class="kv-file-download {downloadClass}" title="{downloadTitle}" href="{downloadUrl}" download="{caption}" target="_blank">{downloadIcon}</a>',actionZoom:'<button type="button" class="kv-file-zoom {zoomClass}" title="{zoomTitle}">{zoomIcon}</button>',actionDrag:'<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>',btnDefault:'<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</button>',btnLink:'<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</a>',btnBrowse:'<div tabindex="500" class="{css}" {status}>{icon} {label}</div>',zoomCache:'<div class="kv-zoom-cache" style="display:none">{zoomContent}</div>'},previewMarkupTags:{tagBefore1:'<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}"><div class="kv-file-content">\n',tagBefore2:'<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}" title="{caption}"><div class="kv-file-content">\n',tagAfter:"</div>{footer}\n</div>\n"},previewContentTemplates:{generic:"{content}\n",html:'<div class="kv-preview-data file-preview-html" title="{caption}" {style}>{data}</div>\n',image:'<img src="{data}" class="file-preview-image kv-preview-data" title="{caption}" alt="{caption}" {style}>\n',text:'<textarea class="kv-preview-data file-preview-text" title="{caption}" readonly {style}>{data}</textarea>\n',office:'<iframe class="kv-preview-data file-preview-office" src="https://view.officeapps.live.com/op/embed.aspx?src={data}" {style}></iframe>',gdocs:'<iframe class="kv-preview-data file-preview-gdocs" src="https://docs.google.com/gview?url={data}&embedded=true" {style}></iframe>',video:n,audio:s,flash:'<embed class="kv-preview-data file-preview-flash" src="{data}" type="application/x-shockwave-flash" {style}>\n',object:o,pdf:l,other:d},allowedPreviewTypes:["image","html","text","video","audio","flash","pdf","object"],previewTemplates:{},previewSettings:{image:{width:"auto",height:"auto","max-width":"100%","max-height":"100%"},html:{width:"213px",height:"160px"},text:{width:"213px",height:"160px"},office:{width:"213px",height:"160px"},gdocs:{width:"213px",height:"160px"},video:{width:"213px",height:"160px"},audio:{width:"100%",height:"30px"},flash:{width:"213px",height:"160px"},object:{width:"213px",height:"160px"},pdf:{width:"100%",height:"160px"},other:{width:"213px",height:"160px"}},previewSettingsSmall:{image:{width:"auto",height:"auto","max-width":"100%","max-height":"100%"},html:{width:"100%",height:"160px"},text:{width:"100%",height:"160px"},office:{width:"100%",height:"160px"},gdocs:{width:"100%",height:"160px"},video:{width:"100%",height:"auto"},audio:{width:"100%",height:"30px"},flash:{width:"100%",height:"auto"},object:{width:"100%",height:"auto"},pdf:{width:"100%",height:"160px"},other:{width:"100%",height:"160px"}},previewZoomSettings:{image:{width:"auto",height:"auto","max-width":"100%","max-height":"100%"},html:c,text:c,office:{width:"100%",height:"100%","max-width":"100%","min-height":"480px"},gdocs:{width:"100%",height:"100%","max-width":"100%","min-height":"480px"},video:{width:"auto",height:"100%","max-width":"100%"},audio:{width:"100%",height:"30px"},flash:{width:"auto",height:"480px"},object:{width:"auto",height:"100%","max-width":"100%","min-height":"480px"},pdf:c,other:{width:"auto",height:"100%","min-height":"480px"}},fileTypeSettings:{image:function(e,i){return t.compare(e,"image.*")&&!t.compare(e,/(tiff?|wmf)$/i)||t.compare(i,/\.(gif|png|jpe?g)$/i)},html:function(e,i){return t.compare(e,"text/html")||t.compare(i,/\.(htm|html)$/i)},office:function(e,i){return t.compare(e,/(word|excel|powerpoint|office)$/i)||t.compare(i,/\.(docx?|xlsx?|pptx?|pps|potx?)$/i)},gdocs:function(e,i){return t.compare(e,/(word|excel|powerpoint|office|iwork-pages|tiff?)$/i)||t.compare(i,/\.(docx?|xlsx?|pptx?|pps|potx?|rtf|ods|odt|pages|ai|dxf|ttf|tiff?|wmf|e?ps)$/i)},text:function(e,i){return t.compare(e,"text.*")||t.compare(i,/\.(xml|javascript)$/i)||t.compare(i,/\.(txt|md|csv|nfo|ini|json|php|js|css)$/i)},video:function(e,i){return t.compare(e,"video.*")&&(t.compare(e,/(ogg|mp4|mp?g|mov|webm|3gp)$/i)||t.compare(i,/\.(og?|mp4|webm|mp?g|mov|3gp)$/i))},audio:function(e,i){return t.compare(e,"audio.*")&&(t.compare(i,/(ogg|mp3|mp?g|wav)$/i)||t.compare(i,/\.(og?|mp3|mp?g|wav)$/i))},flash:function(e,i){return t.compare(e,"application/x-shockwave-flash",!0)||t.compare(i,/\.(swf)$/i)},pdf:function(e,i){return t.compare(e,"application/pdf",!0)||t.compare(i,/\.(pdf)$/i)},object:function(){return!0},other:function(){return!0}},fileActionSettings:{showRemove:!0,showUpload:!0,showDownload:!0,showZoom:!0,showDrag:!0,removeIcon:'<i class="glyphicon glyphicon-trash"></i>',removeClass:"btn btn-sm btn-kv btn-default btn-outline-secondary",removeErrorClass:"btn btn-sm btn-kv btn-danger",removeTitle:"Remove file",uploadIcon:'<i class="glyphicon glyphicon-upload"></i>',uploadClass:"btn btn-sm btn-kv btn-default btn-outline-secondary",uploadTitle:"Upload file",uploadRetryIcon:'<i class="glyphicon glyphicon-repeat"></i>',uploadRetryTitle:"Retry upload",downloadIcon:'<i class="glyphicon glyphicon-download"></i>',downloadClass:"btn btn-sm btn-kv btn-default btn-outline-secondary",downloadTitle:"Download file",zoomIcon:'<i class="glyphicon glyphicon-zoom-in"></i>',zoomClass:"btn btn-sm btn-kv btn-default btn-outline-secondary",zoomTitle:"View Details",dragIcon:'<i class="glyphicon glyphicon-move"></i>',dragClass:"text-info",dragTitle:"Move / Rearrange",dragSettings:{},indicatorNew:'<i class="glyphicon glyphicon-plus-sign text-warning"></i>',indicatorSuccess:'<i class="glyphicon glyphicon-ok-sign text-success"></i>',indicatorError:'<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',indicatorLoading:'<i class="glyphicon glyphicon-hourglass text-muted"></i>',indicatorNewTitle:"Not uploaded yet",indicatorSuccessTitle:"Uploaded",indicatorErrorTitle:"Upload Error",indicatorLoadingTitle:"Uploading ..."}},e.each(h.defaults,function(t,i){"allowedPreviewTypes"!==t?h[t]=e.extend(!0,{},i,h[t]):void 0===h.allowedPreviewTypes&&(h.allowedPreviewTypes=i)}),h._initPreviewTemplates()},_initPreviewTemplates:function(){var i,a=this,r=a.previewMarkupTags,n=r.tagAfter;e.each(a.previewContentTemplates,function(e,s){t.isEmpty(a.previewTemplates[e])&&(i=r.tagBefore2,"generic"!==e&&"image"!==e&&"html"!==e&&"text"!==e||(i=r.tagBefore1),a._isPdfRendered()&&"pdf"===e&&(i=i.replace("kv-file-content","kv-file-content kv-pdf-rendered")),a.previewTemplates[e]=i+s+n)})},_initPreviewCache:function(){var i=this;i.previewCache={data:{},init:function(){var e=i.initialPreview;e.length>0&&!t.isArray(e)&&(e=e.split(i.initialPreviewDelimiter)),i.previewCache.data={content:e,config:i.initialPreviewConfig,tags:i.initialPreviewThumbTags}},count:function(){return i.previewCache.data&&i.previewCache.data.content?i.previewCache.data.content.length:0},get:function(a,r){var n,s,o,l,d,c,h,p="init_"+a,u=i.previewCache.data,f=u.config[a],m=u.content[a],g=i.previewInitId+"-"+p,v=t.ifSet("previewAsData",f,i.initialPreviewAsData),w=function(e,a,r,n,s,o,l,d,c){return d=" file-preview-initial "+t.SORT_CSS+(d?" "+d:""),i._generatePreviewTemplate(e,a,r,n,s,!1,null,d,o,l,c)};return m?(r=void 0===r||r,o=t.ifSet("type",f,i.initialPreviewFileType||"generic"),d=t.ifSet("filename",f,t.ifSet("caption",f)),c=t.ifSet("filetype",f,o),l=i.previewCache.footer(a,r,f&&f.size||null),h=t.ifSet("frameClass",f),n=v?w(o,m,d,c,g,l,p,h):w("generic",m,d,c,g,l,p,h,o).setTokens({content:u.content[a]}),u.tags.length&&u.tags[a]&&(n=t.replaceTags(n,u.tags[a])),t.isEmpty(f)||t.isEmpty(f.frameAttr)||((s=e(document.createElement("div")).html(n)).find(".file-preview-initial").attr(f.frameAttr),n=s.html(),s.remove()),n):""},add:function(e,a,r,n){var s,o=i.previewCache.data;return t.isArray(e)||(e=e.split(i.initialPreviewDelimiter)),n?(s=o.content.push(e)-1,o.config[s]=a,o.tags[s]=r):(s=e.length-1,o.content=e,o.config=a,o.tags=r),i.previewCache.data=o,s},set:function(e,a,r,n){var s,o=i.previewCache.data;if(e&&e.length&&(t.isArray(e)||(e=e.split(i.initialPreviewDelimiter)),e.filter(function(e){return null!==e}).length)){if(void 0===o.content&&(o.content=[]),void 0===o.config&&(o.config=[]),void 0===o.tags&&(o.tags=[]),n){for(s=0;s<e.length;s++)e[s]&&o.content.push(e[s]);for(s=0;s<a.length;s++)a[s]&&o.config.push(a[s]);for(s=0;s<r.length;s++)r[s]&&o.tags.push(r[s])}else o.content=e,o.config=a,o.tags=r;i.previewCache.data=o}},unset:function(e){var a=i.previewCache.count(),r=i.reversePreviewOrder;if(a){if(1===a)return i.previewCache.data.content=[],i.previewCache.data.config=[],i.previewCache.data.tags=[],i.initialPreview=[],i.initialPreviewConfig=[],void(i.initialPreviewThumbTags=[]);i.previewCache.data.content=t.spliceArray(i.previewCache.data.content,e,r),i.previewCache.data.config=t.spliceArray(i.previewCache.data.config,e,r),i.previewCache.data.tags=t.spliceArray(i.previewCache.data.tags,e,r)}},out:function(){var e,t,a="",r=i.previewCache.count();if(0===r)return{content:"",caption:""};for(e=0;e<r;e++)t=i.previewCache.get(e),a=i.reversePreviewOrder?t+a:a+t;return{content:a,caption:i._getMsgSelected(r)}},footer:function(e,a,r){var n=i.previewCache.data||{};if(t.isEmpty(n.content))return"";(t.isEmpty(n.config)||t.isEmpty(n.config[e]))&&(n.config[e]={}),a=void 0===a||a;var s,o=n.config[e],l=t.ifSet("caption",o),d=t.ifSet("width",o,"auto"),c=t.ifSet("url",o,!1),h=t.ifSet("key",o,null),p=i.fileActionSettings,u=i.initialPreviewShowDelete||!1,f=o.downloadUrl||i.initialPreviewDownloadUrl||"",m=o.filename||o.caption||"",g=!!f,v=t.ifSet("showRemove",o,t.ifSet("showRemove",p,u)),w=t.ifSet("showDownload",o,t.ifSet("showDownload",p,g)),_=t.ifSet("showZoom",o,t.ifSet("showZoom",p,!0)),b=t.ifSet("showDrag",o,t.ifSet("showDrag",p,!0)),C=!1===c&&a;return w=w&&!1!==o.downloadUrl&&!!f,s=i._renderFileActions(!1,w,v,_,b,C,c,h,!0,f,m),i._getLayoutTemplate("footer").setTokens({progress:i._renderThumbProgress(),actions:s,caption:l,size:i._getSize(r),width:d,indicator:""})}},i.previewCache.init()},_isPdfRendered:function(){var e=this.usePdfRenderer;return("function"==typeof e?e():!!e)&&this.pdfRendererUrl},_handler:function(e,t,i){var a=this.namespace,r=t.split(" ").join(a+" ")+a;e&&e.length&&e.off(r).on(r,i)},_log:function(e){var t=this.$element.attr("id");t&&(e='"'+t+'": '+e),e="bootstrap-fileinput: "+e,void 0!==window.console.log?window.console.log(e):window.alert(e)},_validate:function(){var e="file"===this.$element.attr("type");return e||this._log('The input "type" must be set to "file" for initializing the "bootstrap-fileinput" plugin.'),e},_errorsExist:function(){var t;return!!this.$errorContainer.find("li").length||((t=e(document.createElement("div")).html(this.$errorContainer.html())).find(".kv-error-close").remove(),t.find("ul").remove(),!!e.trim(t.text()).length)},_errorHandler:function(e,t){var i=this,a=e.target.error,r=function(e){i._showError(e.replace("{name}",t))};a.code===a.NOT_FOUND_ERR?r(i.msgFileNotFound):a.code===a.SECURITY_ERR?r(i.msgFileSecured):a.code===a.NOT_READABLE_ERR?r(i.msgFileNotReadable):a.code===a.ABORT_ERR?r(i.msgFilePreviewAborted):r(i.msgFilePreviewError)},_addError:function(e){var t=this,i=t.$errorContainer;e&&i.length&&(i.html(t.errorCloseButton+e),t._handler(i.find(".kv-error-close"),"click",function(){setTimeout(function(){t.showPreview&&!t.getFrames().length&&t.clear(),i.fadeOut("slow")},10)}))},_setValidationError:function(e){e=(e?e+" ":"")+"has-error",this.$container.removeClass(e).addClass("has-error"),t.addCss(this.$captionContainer,"is-invalid")},_resetErrors:function(e){var t=this.$errorContainer;this.isError=!1,this.$container.removeClass("has-error"),this.$captionContainer.removeClass("is-invalid"),t.html(""),e?t.fadeOut("slow"):t.hide()},_showFolderError:function(e){var t,i=this.$errorContainer;e&&(this.isAjaxUpload||this._clearFileInput(),t=this.msgFoldersNotAllowed.replace("{n}",e),this._addError(t),this._setValidationError(),i.fadeIn(800),this._raise("filefoldererror",[e,t]))},_showUploadError:function(e,t,i){var a=this.$errorContainer,r=i||"fileuploaderror",n=t&&t.id?'<li data-file-id="'+t.id+'">'+e+"</li>":"<li>"+e+"</li>";return 0===a.find("ul").length?this._addError("<ul>"+n+"</ul>"):a.find("ul").append(n),a.fadeIn(800),this._raise(r,[t,e]),this._setValidationError("file-input-new"),!0},_showError:function(e,t,i){var a=this.$errorContainer,r=i||"fileerror";return(t=t||{}).reader=this.reader,this._addError(e),a.fadeIn(800),this._raise(r,[t,e]),this.isAjaxUpload||this._clearFileInput(),this._setValidationError("file-input-new"),this.$btnUpload.attr("disabled",!0),!0},_noFilesError:function(e){var t=this.minFileCount>1?this.filePlural:this.fileSingle,i=this.msgFilesTooLess.replace("{n}",this.minFileCount).replace("{files}",t),a=this.$errorContainer;this._addError(i),this.isError=!0,this._updateFileDetails(0),a.fadeIn(800),this._raise("fileerror",[e,i]),this._clearFileInput(),this._setValidationError()},_parseError:function(t,i,a,r){var n,s=e.trim(a+""),o=void 0!==i.responseJSON&&void 0!==i.responseJSON.error?i.responseJSON.error:i.responseText;return this.cancelling&&this.msgUploadAborted&&(s=this.msgUploadAborted),this.showAjaxErrorDetails&&o&&(n=(o=e.trim(o.replace(/\n\s*\n/g,"\n"))).length?"<pre>"+o+"</pre>":"",s+=s?n:o),s||(s=this.msgAjaxError.replace("{operation}",t)),this.cancelling=!1,r?"<b>"+r+": </b>"+s:s},_parseFileType:function(e,i){var a,r,n,s=this.allowedPreviewTypes||[];if("application/text-plain"===e)return"text";for(n=0;n<s.length;n++)if(r=s[n],a=(0,this.fileTypeSettings[r])(e,i)?r:"",!t.isEmpty(a))return a;return"other"},_getPreviewIcon:function(t){var i,a=this,r=null;return t&&t.indexOf(".")>-1&&(i=t.split(".").pop(),a.previewFileIconSettings&&(r=a.previewFileIconSettings[i]||a.previewFileIconSettings[i.toLowerCase()]||null),a.previewFileExtSettings&&e.each(a.previewFileExtSettings,function(e,t){a.previewFileIconSettings[e]&&t(i)&&(r=a.previewFileIconSettings[e])})),r},_parseFilePreviewIcon:function(e,t){var i=this._getPreviewIcon(t)||this.previewFileIcon,a=e;return a.indexOf("{previewFileIcon}")>-1&&(a=a.setTokens({previewFileIconClass:this.previewFileIconClass,previewFileIcon:i})),a},_raise:function(t,i){var a=e.Event(t);if(void 0!==i?this.$element.trigger(a,i):this.$element.trigger(a),a.isDefaultPrevented()||!1===a.result)return!1;switch(t){case"filebatchuploadcomplete":case"filebatchuploadsuccess":case"fileuploaded":case"fileclear":case"filecleared":case"filereset":case"fileerror":case"filefoldererror":case"fileuploaderror":case"filebatchuploaderror":case"filedeleteerror":case"filecustomerror":case"filesuccessremove":break;default:this.ajaxAborted||(this.ajaxAborted=a.result)}return!0},_listenFullScreen:function(e){var t,i,a=this.$modal;a&&a.length&&(t=a&&a.find(".btn-fullscreen"),i=a&&a.find(".btn-borderless"),t.length&&i.length&&(t.removeClass("active").attr("aria-pressed","false"),i.removeClass("active").attr("aria-pressed","false"),e?t.addClass("active").attr("aria-pressed","true"):i.addClass("active").attr("aria-pressed","true"),a.hasClass("file-zoom-fullscreen")?this._maximizeZoomDialog():e?this._maximizeZoomDialog():i.removeClass("active").attr("aria-pressed","false")))},_listen:function(){var i=this,a=i.$element,r=i.$form,n=i.$container;i._handler(a,"click",function(e){a.hasClass("file-no-browse")&&(a.data("zoneClicked")?a.data("zoneClicked",!1):e.preventDefault())}),i._handler(a,"change",e.proxy(i._change,i)),i.showBrowse&&i._handler(i.$btnFile,"click",e.proxy(i._browse,i)),i._handler(n.find(".fileinput-remove:not([disabled])"),"click",e.proxy(i.clear,i)),i._handler(n.find(".fileinput-cancel"),"click",e.proxy(i.cancel,i)),i._initDragDrop(),i._handler(r,"reset",e.proxy(i.clear,i)),i.isAjaxUpload||i._handler(r,"submit",e.proxy(i._submitForm,i)),i._handler(i.$container.find(".fileinput-upload"),"click",e.proxy(i._uploadClick,i)),i._handler(e(window),"resize",function(){i._listenFullScreen(screen.width===window.innerWidth&&screen.height===window.innerHeight)}),i._handler(e(document),"webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange",function(){i._listenFullScreen(t.checkFullScreen())}),i._autoFitContent(),i._initClickable(),i._refreshPreview()},_autoFitContent:function(){var t,i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a=this,r=i<400?a.previewSettingsSmall||a.defaults.previewSettingsSmall:a.previewSettings||a.defaults.previewSettings;e.each(r,function(e,i){t=".file-preview-frame .file-preview-"+e,a.$preview.find(t+".kv-preview-data,"+t+" .kv-preview-data").css(i)})},_scanDroppedItems:function(e,t,i){i=i||"";var a,r,n,s=this,o=function(e){s._log("Error scanning dropped files!"),s._log(e)};e.isFile?e.file(function(e){t.push(e)},o):e.isDirectory&&(r=e.createReader(),(n=function(){r.readEntries(function(r){if(r&&r.length>0){for(a=0;a<r.length;a++)s._scanDroppedItems(r[a],t,i+e.name+"/");n()}return null},o)})())},_initDragDrop:function(){var t=this.$dropZone;this.dropZoneEnabled&&this.showPreview&&(this._handler(t,"dragenter dragover",e.proxy(this._zoneDragEnter,this)),this._handler(t,"dragleave",e.proxy(this._zoneDragLeave,this)),this._handler(t,"drop",e.proxy(this._zoneDrop,this)),this._handler(e(document),"dragenter dragover drop",this._zoneDragDropInit))},_zoneDragDropInit:function(e){e.stopPropagation(),e.preventDefault()},_zoneDragEnter:function(i){var a=e.inArray("Files",i.originalEvent.dataTransfer.types)>-1;if(this._zoneDragDropInit(i),this.isDisabled||!a)return i.originalEvent.dataTransfer.effectAllowed="none",void(i.originalEvent.dataTransfer.dropEffect="none");t.addCss(this.$dropZone,"file-highlighted")},_zoneDragLeave:function(e){this._zoneDragDropInit(e),this.isDisabled||this.$dropZone.removeClass("file-highlighted")},_zoneDrop:function(e){var i,a=this,r=a.$element,n=e.originalEvent.dataTransfer,s=n.files,o=n.items,l=t.getDragDropFolders(o),d=function(){a.isAjaxUpload?a._change(e,s):(a.changeTriggered=!0,r.get(0).files=s,setTimeout(function(){a.changeTriggered=!1,r.trigger("change"+a.namespace)},10)),a.$dropZone.removeClass("file-highlighted")};if(e.preventDefault(),!a.isDisabled&&!t.isEmpty(s))if(l>0){if(!a.isAjaxUpload)return void a._showFolderError(l);for(s=[],i=0;i<o.length;i++){var c=o[i].webkitGetAsEntry();c&&a._scanDroppedItems(c,s)}setTimeout(function(){d()},500)}else d()},_uploadClick:function(e){var i,a=this.$container.find(".fileinput-upload"),r=!a.hasClass("disabled")&&t.isEmpty(a.attr("disabled"));e&&e.isDefaultPrevented()||(this.isAjaxUpload?(e.preventDefault(),r&&this.upload()):r&&"submit"!==a.attr("type")&&((i=a.closest("form")).length&&i.trigger("submit"),e.preventDefault()))},_submitForm:function(){return this._isFileSelectionValid()&&!this._abort({})},_clearPreview:function(){var i=this.$preview;(this.showUploadedThumbs?this.getFrames(":not(.file-preview-success)"):this.getFrames()).each(function(){var a=e(this);a.remove(),t.cleanZoomCache(i.find("#zoom-"+a.attr("id")))}),this.getFrames().length&&this.showPreview||this._resetUpload(),this._validateDefaultPreview()},_initSortable:function(){var i,a=this,r=a.$preview,n="."+t.SORT_CSS,s=a.reversePreviewOrder;window.KvSortable&&0!==r.find(n).length&&(i={handle:".drag-handle-init",dataIdAttr:"data-preview-id",scroll:!1,draggable:n,onSort:function(i){var r=i.oldIndex,n=i.newIndex,o=0;a.initialPreview=t.moveArray(a.initialPreview,r,n,s),a.initialPreviewConfig=t.moveArray(a.initialPreviewConfig,r,n,s),a.previewCache.init(),a.getFrames(".file-preview-initial").each(function(){e(this).attr("data-fileindex","init_"+o),o++}),a._raise("filesorted",{previewId:e(i.item).attr("id"),oldIndex:r,newIndex:n,stack:a.initialPreviewConfig})}},r.data("kvsortable")&&r.kvsortable("destroy"),e.extend(!0,i,a.fileActionSettings.dragSettings),r.kvsortable(i))},_setPreviewContent:function(e){this.$preview.html(e),this._autoFitContent()},_initPreview:function(e){var i,a=this.initialCaption||"";if(!this.previewCache.count())return this._clearPreview(),void(e?this._setCaption(a):this._initCaption());i=this.previewCache.out(),a=e&&this.initialCaption?this.initialCaption:i.caption,this._setPreviewContent(i.content),this._setInitThumbAttr(),this._setCaption(a),this._initSortable(),t.isEmpty(i.content)||this.$container.removeClass("file-input-new")},_getZoomButton:function(e){var t=this.previewZoomButtonIcons[e],i=this.previewZoomButtonClasses[e],a=' title="'+(this.previewZoomButtonTitles[e]||"")+'" '+("close"===e?' data-dismiss="modal" aria-hidden="true"':"");return"fullscreen"!==e&&"borderless"!==e&&"toggleheader"!==e||(a+=' data-toggle="button" aria-pressed="false" autocomplete="off"'),'<button type="button" class="'+i+" btn-"+e+'"'+a+">"+t+"</button>"},_getModalContent:function(){return this._getLayoutTemplate("modal").setTokens({rtl:this.rtl?" kv-rtl":"",zoomFrameClass:this.frameClass,heading:this.msgZoomModalHeading,prev:this._getZoomButton("prev"),next:this._getZoomButton("next"),toggleheader:this._getZoomButton("toggleheader"),fullscreen:this._getZoomButton("fullscreen"),borderless:this._getZoomButton("borderless"),close:this._getZoomButton("close")})},_listenModalEvent:function(e){var i=this,a=i.$modal;a.on(e+".bs.modal",function(r){var n=a.find(".btn-fullscreen"),s=a.find(".btn-borderless");i._raise("filezoom"+e,function(e){return{sourceEvent:e,previewId:a.data("previewId"),modal:a}}(r)),"shown"===e&&(s.removeClass("active").attr("aria-pressed","false"),n.removeClass("active").attr("aria-pressed","false"),a.hasClass("file-zoom-fullscreen")&&(i._maximizeZoomDialog(),t.checkFullScreen()?n.addClass("active").attr("aria-pressed","true"):s.addClass("active").attr("aria-pressed","true")))})},_initZoom:function(){var i,a=this,r=a._getLayoutTemplate("modalMain"),n="#"+t.MODAL_ID;a.showPreview&&(a.$modal=e(n),a.$modal&&a.$modal.length||(i=e(document.createElement("div")).html(r).insertAfter(a.$container),a.$modal=e(n).insertBefore(i),i.remove()),t.initModal(a.$modal),a.$modal.html(a._getModalContent()),e.each(t.MODAL_EVENTS,function(e,t){a._listenModalEvent(t)}))},_initZoomButtons:function(){var t,i,a=this.$modal.data("previewId")||"",r=this.getFrames().toArray(),n=r.length,s=this.$modal.find(".btn-prev"),o=this.$modal.find(".btn-next");if(r.length<2)return s.hide(),void o.hide();s.show(),o.show(),n&&(t=e(r[0]),i=e(r[n-1]),s.removeAttr("disabled"),o.removeAttr("disabled"),t.length&&t.attr("id")===a&&s.attr("disabled",!0),i.length&&i.attr("id")===a&&o.attr("disabled",!0))},_maximizeZoomDialog:function(){var t=this.$modal,i=t.find(".modal-header:visible"),a=t.find(".modal-footer:visible"),r=t.find(".modal-body"),n=e(window).height();t.addClass("file-zoom-fullscreen"),i&&i.length&&(n-=i.outerHeight(!0)),a&&a.length&&(n-=a.outerHeight(!0)),r&&r.length&&(n-=r.outerHeight(!0)-r.height()),t.find(".kv-zoom-body").height(n)},_resizeZoomDialog:function(e){var i=this.$modal,a=i.find(".btn-fullscreen"),r=i.find(".btn-borderless");if(i.hasClass("file-zoom-fullscreen"))t.toggleFullScreen(!1),e?a.hasClass("active")||(i.removeClass("file-zoom-fullscreen"),this._resizeZoomDialog(!0),r.hasClass("active")&&r.removeClass("active").attr("aria-pressed","false")):a.hasClass("active")?a.removeClass("active").attr("aria-pressed","false"):(i.removeClass("file-zoom-fullscreen"),this.$modal.find(".kv-zoom-body").css("height",this.zoomModalHeight));else{if(!e)return void this._maximizeZoomDialog();t.toggleFullScreen(!0)}i.focus()},_setZoomContent:function(i,a){var r,n,s,o,l,d,c,h,p=this,u=i.attr("id"),f=p.$modal,m=f.find(".btn-prev"),g=f.find(".btn-next"),v=f.find(".btn-fullscreen"),w=f.find(".btn-borderless"),_=f.find(".btn-toggleheader"),b=p.$preview.find("#zoom-"+u);n=b.attr("data-template")||"generic",s=(r=b.find(".kv-file-content")).length?r.html():"",o=(i.data("caption")||"")+" "+(i.data("size")||""),f.find(".kv-zoom-title").attr("title",e("<div/>").html(o).text()).html(o),l=f.find(".kv-zoom-body"),f.removeClass("kv-single-content"),a?(h=l.addClass("file-thumb-loading").clone().insertAfter(l),l.html(s).hide(),h.fadeOut("fast",function(){l.fadeIn("fast",function(){l.removeClass("file-thumb-loading")}),h.remove()})):l.html(s),(c=p.previewZoomSettings[n])&&(d=l.find(".kv-preview-data"),t.addCss(d,"file-zoom-detail"),e.each(c,function(e,t){d.css(e,t),(d.attr("width")&&"width"===e||d.attr("height")&&"height"===e)&&d.removeAttr(e)})),f.data("previewId",u),p._handler(m,"click",function(){p._zoomSlideShow("prev",u)}),p._handler(g,"click",function(){p._zoomSlideShow("next",u)}),p._handler(v,"click",function(){p._resizeZoomDialog(!0)}),p._handler(w,"click",function(){p._resizeZoomDialog(!1)}),p._handler(_,"click",function(){var e,t=f.find(".modal-header"),i=f.find(".modal-body .floating-buttons"),a=t.find(".kv-zoom-actions"),r=function(e){var i=p.$modal.find(".kv-zoom-body"),a=p.zoomModalHeight;f.hasClass("file-zoom-fullscreen")&&(a=i.outerHeight(!0),e||(a-=t.outerHeight(!0))),i.css("height",e?a+e:a)};t.is(":visible")?(e=t.outerHeight(!0),t.slideUp("slow",function(){a.find(".btn").appendTo(i),r(e)})):(i.find(".btn").appendTo(a),t.slideDown("slow",function(){r()})),f.focus()}),p._handler(f,"keydown",function(e){var t=e.which||e.keyCode;37!==t||m.attr("disabled")||p._zoomSlideShow("prev",u),39!==t||g.attr("disabled")||p._zoomSlideShow("next",u)})},_zoomPreview:function(e){var i,a=this.$modal;if(!e.length)throw"Cannot zoom to detailed preview!";t.initModal(a),a.html(this._getModalContent()),i=e.closest(t.FRAMES),this._setZoomContent(i),a.modal("show"),this._initZoomButtons()},_zoomSlideShow:function(t,i){var a,r,n,s=this.$modal.find(".kv-zoom-actions .btn-"+t),o=this.getFrames().toArray(),l=o.length;if(!s.attr("disabled")){for(r=0;r<l;r++)if(e(o[r]).attr("id")===i){n="prev"===t?r-1:r+1;break}n<0||n>=l||!o[n]||((a=e(o[n])).length&&this._setZoomContent(a,!0),this._initZoomButtons(),this._raise("filezoom"+t,{previewId:i,modal:this.$modal}))}},_initZoomButton:function(){var t=this;t.$preview.find(".kv-file-zoom").each(function(){var i=e(this);t._handler(i,"click",function(){t._zoomPreview(i)})})},_inputFileCount:function(){return this.$element.get(0).files.length},_refreshPreview:function(){var e;this._inputFileCount()&&this.showPreview&&this.isPreviewable&&(this.isAjaxUpload?(e=this.getFileStack(),this.filestack=[],e.length?this._clearFileInput():e=this.$element.get(0).files):e=this.$element.get(0).files,e&&e.length&&(this.readFiles(e),this._setFileDropZoneTitle()))},_clearObjects:function(t){t.find("video audio").each(function(){this.pause(),e(this).remove()}),t.find("img object div").each(function(){e(this).remove()})},_clearFileInput:function(){var t,i,a,r=this.$element;this._inputFileCount()&&(t=r.closest("form"),i=e(document.createElement("form")),a=e(document.createElement("div")),r.before(a),t.length?t.after(i):a.after(i),i.append(r).trigger("reset"),a.before(r).remove(),i.remove())},_resetUpload:function(){this.uploadCache={content:[],config:[],tags:[],append:!0},this.uploadCount=0,this.uploadStatus={},this.uploadLog=[],this.uploadAsyncCount=0,this.loadedImages=[],this.totalImagesCount=0,this.$btnUpload.removeAttr("disabled"),this._setProgress(0),this.$progress.hide(),this._resetErrors(!1),this.ajaxAborted=!1,this.ajaxRequests=[],this._resetCanvas(),this.cacheInitialPreview={},this.overwriteInitial&&(this.initialPreview=[],this.initialPreviewConfig=[],this.initialPreviewThumbTags=[],this.previewCache.data={content:[],config:[],tags:[]})},_resetCanvas:function(){this.canvas&&this.imageCanvasContext&&this.imageCanvasContext.clearRect(0,0,this.canvas.width,this.canvas.height)},_hasInitialPreview:function(){return!this.overwriteInitial&&this.previewCache.count()},_resetPreview:function(){var e,t;this.previewCache.count()?(e=this.previewCache.out(),this._setPreviewContent(e.content),this._setInitThumbAttr(),t=this.initialCaption?this.initialCaption:e.caption,this._setCaption(t)):(this._clearPreview(),this._initCaption()),this.showPreview&&(this._initZoom(),this._initSortable())},_clearDefaultPreview:function(){this.$preview.find(".file-default-preview").remove()},_validateDefaultPreview:function(){this.showPreview&&!t.isEmpty(this.defaultPreviewContent)&&(this._setPreviewContent('<div class="file-default-preview">'+this.defaultPreviewContent+"</div>"),this.$container.removeClass("file-input-new"),this._initClickable())},_resetPreviewThumbs:function(e){var t;if(e)return this._clearPreview(),void this.clearStack();this._hasInitialPreview()?(t=this.previewCache.out(),this._setPreviewContent(t.content),this._setInitThumbAttr(),this._setCaption(t.caption),this._initPreviewActions()):this._clearPreview()},_getLayoutTemplate:function(e){var i=this.layoutTemplates[e];return t.isEmpty(this.customLayoutTags)?i:t.replaceTags(i,this.customLayoutTags)},_getPreviewTemplate:function(e){var i=this.previewTemplates[e];return t.isEmpty(this.customPreviewTags)?i:t.replaceTags(i,this.customPreviewTags)},_getOutData:function(e,t,i){return e=e||{},t=t||{},i=i||this.filestack.slice(0)||{},{form:this.formdata,files:i,filenames:this.filenames,filescount:this.getFilesCount(),extra:this._getExtraData(),response:t,reader:this.reader,jqXHR:e}},_getMsgSelected:function(e){var t=1===e?this.fileSingle:this.filePlural;return e>0?this.msgSelected.replace("{n}",e).replace("{files}",t):this.msgNoFilesSelected},_getFrame:function(t){var i=e("#"+t);return i.length?i:(this._log('Invalid thumb frame with id: "'+t+'".'),null)},_getThumbs:function(e){return e=e||"",this.getFrames(":not(.file-preview-initial)"+e)},_getExtraData:function(e,t){var i=this.uploadExtraData;return"function"==typeof this.uploadExtraData&&(i=this.uploadExtraData(e,t)),i},_initXhr:function(e,t,i){var a=this;return e.upload&&e.upload.addEventListener("progress",function(e){var r=0,n=e.total,s=e.loaded||e.position;e.lengthComputable&&(r=Math.floor(s/n*100)),t?a._setAsyncUploadStatus(t,r,i):a._setProgress(r)},!1),e},_initAjaxSettings:function(){this._ajaxSettings=e.extend(!0,{},this.ajaxSettings),this._ajaxDeleteSettings=e.extend(!0,{},this.ajaxDeleteSettings)},_mergeAjaxCallback:function(e,t,i){var a,r=this._ajaxSettings,n=this.mergeAjaxCallbacks;"delete"===i&&(r=this._ajaxDeleteSettings,n=this.mergeAjaxDeleteCallbacks),a=r[e],r[e]=n&&"function"==typeof a?"before"===n?function(){a.apply(this,arguments),t.apply(this,arguments)}:function(){t.apply(this,arguments),a.apply(this,arguments)}:t},_ajaxSubmit:function(t,i,a,r,n,s){var o,l=this;l._raise("filepreajax",[n,s])&&(l._uploadExtra(n,s),l._initAjaxSettings(),l._mergeAjaxCallback("beforeSend",t),l._mergeAjaxCallback("success",i),l._mergeAjaxCallback("complete",a),l._mergeAjaxCallback("error",r),o=e.extend(!0,{},{xhr:function(){var t=e.ajaxSettings.xhr();return l._initXhr(t,n,l.getFileStack().length)},url:s&&l.uploadUrlThumb?l.uploadUrlThumb:l.uploadUrl,type:"POST",dataType:"json",data:l.formdata,cache:!1,processData:!1,contentType:!1},l._ajaxSettings),l.ajaxRequests.push(e.ajax(o)))},_mergeArray:function(e,i){var a=t.cleanArray(this[e]),r=t.cleanArray(i);this[e]=a.concat(r)},_initUploadSuccess:function(i,a,r){var n,s,o,l,d,c,h,p,u,f=this;f.showPreview&&"object"==typeof i&&!e.isEmptyObject(i)&&void 0!==i.initialPreview&&i.initialPreview.length>0&&(f.hasInitData=!0,c=i.initialPreview||[],h=i.initialPreviewConfig||[],p=i.initialPreviewThumbTags||[],n=void 0===i.append||i.append,c.length>0&&!t.isArray(c)&&(c=c.split(f.initialPreviewDelimiter)),f._mergeArray("initialPreview",c),f._mergeArray("initialPreviewConfig",h),f._mergeArray("initialPreviewThumbTags",p),void 0!==a?r?(u=a.attr("data-fileindex"),f.uploadCache.content[u]=c[0],f.uploadCache.config[u]=h[0]||[],f.uploadCache.tags[u]=p[0]||[],f.uploadCache.append=n):(o=f.previewCache.add(c,h[0],p[0],n),s=f.previewCache.get(o,!1),(d=(l=e(document.createElement("div")).html(s).hide().insertAfter(a)).find(".kv-zoom-cache"))&&d.length&&d.insertAfter(a),a.fadeOut("slow",function(){var e=l.find(".file-preview-frame");e&&e.length&&e.insertBefore(a).fadeIn("slow").css("display:inline-block"),f._initPreviewActions(),f._clearFileInput(),t.cleanZoomCache(f.$preview.find("#zoom-"+a.attr("id"))),a.remove(),l.remove(),f._initSortable()})):(f.previewCache.set(c,h,p,n),f._initPreview(),f._initPreviewActions()))},_initSuccessThumbs:function(){var i=this;i.showPreview&&i._getThumbs(t.FRAMES+".file-preview-success").each(function(){var a=e(this),r=i.$preview,n=a.find(".kv-file-remove");n.removeAttr("disabled"),i._handler(n,"click",function(){var e=a.attr("id"),n=i._raise("filesuccessremove",[e,a.attr("data-fileindex")]);t.cleanMemory(a),!1!==n&&a.fadeOut("slow",function(){t.cleanZoomCache(r.find("#zoom-"+e)),a.remove(),i.getFrames().length||i.reset()})})})},_checkAsyncComplete:function(){var t,i;for(i=0;i<this.filestack.length;i++)if(this.filestack[i]&&(t=this.previewInitId+"-"+i,-1===e.inArray(t,this.uploadLog)))return!1;return this.uploadAsyncCount===this.uploadLog.length},_uploadExtra:function(t,i){var a=this,r=a._getExtraData(t,i);0!==r.length&&e.each(r,function(e,t){a.formdata.append(e,t)})},_uploadSingle:function(i,a){var r,n,s,o,l,d,c,h,p,u,f,m=this,g=m.getFileStack().length,v=new FormData,w=m.previewInitId+"-"+i,_=m.filestack.length>0||!e.isEmptyObject(m.uploadExtraData),b=e("#"+w).find(".file-thumb-progress"),C={id:w,index:i};m.formdata=v,m.showPreview&&(n=e("#"+w+":not(.file-preview-initial)"),o=n.find(".kv-file-upload"),l=n.find(".kv-file-remove"),b.show()),0===g||!_||o&&o.hasClass("disabled")||m._abort(C)||(f=function(e,t){d||m.updateStack(e,void 0),m.uploadLog.push(t),m._checkAsyncComplete()&&(m.fileBatchCompleted=!0)},s=function(){var e,i,a,r=m.uploadCache,n=0,s=m.cacheInitialPreview;m.fileBatchCompleted&&(s&&s.content&&(n=s.content.length),setTimeout(function(){var o=0===m.getFileStack(!0).length;if(m.showPreview){if(m.previewCache.set(r.content,r.config,r.tags,r.append),n){for(i=0;i<r.content.length;i++)a=i+n,s.content[a]=r.content[i],s.config.length&&(s.config[a]=r.config[i]),s.tags.length&&(s.tags[a]=r.tags[i]);m.initialPreview=t.cleanArray(s.content),m.initialPreviewConfig=t.cleanArray(s.config),m.initialPreviewThumbTags=t.cleanArray(s.tags)}else m.initialPreview=r.content,m.initialPreviewConfig=r.config,m.initialPreviewThumbTags=r.tags;m.cacheInitialPreview={},m.hasInitData&&(m._initPreview(),m._initPreviewActions())}m.unlock(o),o&&m._clearFileInput(),e=m.$preview.find(".file-preview-initial"),m.uploadAsync&&e.length&&(t.addCss(e,t.SORT_CSS),m._initSortable()),m._raise("filebatchuploadcomplete",[m.filestack,m._getExtraData()]),m.uploadCount=0,m.uploadStatus={},m.uploadLog=[],m._setProgress(101),m.ajaxAborted=!1},100))},c=function(s){r=m._getOutData(s),m.fileBatchCompleted=!1,a||(m.ajaxAborted=!1),m.showPreview&&(n.hasClass("file-preview-success")||(m._setThumbStatus(n,"Loading"),t.addCss(n,"file-uploading")),o.attr("disabled",!0),l.attr("disabled",!0)),a||m.lock(),m._raise("filepreupload",[r,w,i]),e.extend(!0,C,r),m._abort(C)&&(s.abort(),a||(m._setThumbStatus(n,"New"),n.removeClass("file-uploading"),o.removeAttr("disabled"),l.removeAttr("disabled"),m.unlock()),m._setProgressCancelled())},h=function(s,l,c){var h=m.showPreview&&n.attr("id")?n.attr("id"):w;r=m._getOutData(c,s),e.extend(!0,C,r),setTimeout(function(){t.isEmpty(s)||t.isEmpty(s.error)?(m.showPreview&&(m._setThumbStatus(n,"Success"),o.hide(),m._initUploadSuccess(s,n,a),m._setProgress(101,b)),m._raise("fileuploaded",[r,h,i]),a?f(i,h):m.updateStack(i,void 0)):(d=!0,m._showUploadError(s.error,C),m._setPreviewError(n,i,m.filestack[i],m.retryErrorUploads),m.retryErrorUploads||o.hide(),a&&f(i,h),m._setProgress(101,e("#"+h).find(".file-thumb-progress"),m.msgUploadError))},100)},p=function(){setTimeout(function(){m.showPreview&&(o.removeAttr("disabled"),l.removeAttr("disabled"),n.removeClass("file-uploading")),a?s():(m.unlock(!1),m._clearFileInput()),m._initSuccessThumbs()},100)},u=function(t,r,s){var l=m.ajaxOperations.uploadThumb,c=m._parseError(l,t,s,a&&m.filestack[i].name?m.filestack[i].name:null);d=!0,setTimeout(function(){a&&f(i,w),m.uploadStatus[w]=100,m._setPreviewError(n,i,m.filestack[i],m.retryErrorUploads),m.retryErrorUploads||o.hide(),e.extend(!0,C,m._getOutData(t)),m._setProgress(101,b,m.msgAjaxProgressError.replace("{operation}",l)),m._setProgress(101,e("#"+w).find(".file-thumb-progress"),m.msgUploadError),m._showUploadError(c,C)},100)},v.append(m.uploadFileAttr,m.filestack[i],m.filenames[i]),v.append("file_id",i),m._ajaxSubmit(c,h,p,u,w,i))},_uploadBatch:function(){var i,a,r,n,s,o=this,l=o.filestack,d=l.length,c=o.filestack.length>0||!e.isEmptyObject(o.uploadExtraData);o.formdata=new FormData,0!==d&&c&&!o._abort({})&&(s=function(){e.each(l,function(e){o.updateStack(e,void 0)}),o._clearFileInput()},i=function(i){o.lock();var a=o._getOutData(i);o.ajaxAborted=!1,o.showPreview&&o._getThumbs().each(function(){var i=e(this),a=i.find(".kv-file-upload"),r=i.find(".kv-file-remove");i.hasClass("file-preview-success")||(o._setThumbStatus(i,"Loading"),t.addCss(i,"file-uploading")),a.attr("disabled",!0),r.attr("disabled",!0)}),o._raise("filebatchpreupload",[a]),o._abort(a)&&(i.abort(),o._getThumbs().each(function(){var t=e(this),i=t.find(".kv-file-upload"),a=t.find(".kv-file-remove");t.hasClass("file-preview-loading")&&(o._setThumbStatus(t,"New"),t.removeClass("file-uploading")),i.removeAttr("disabled"),a.removeAttr("disabled")}),o._setProgressCancelled())},a=function(i,a,r){var n=o._getOutData(r,i),l=0,d=o._getThumbs(":not(.file-preview-success)"),c=t.isEmpty(i)||t.isEmpty(i.errorkeys)?[]:i.errorkeys;t.isEmpty(i)||t.isEmpty(i.error)?(o._raise("filebatchuploadsuccess",[n]),s(),o.showPreview?(d.each(function(){var t=e(this);o._setThumbStatus(t,"Success"),t.removeClass("file-uploading"),t.find(".kv-file-upload").hide().removeAttr("disabled")}),o._initUploadSuccess(i)):o.reset(),o._setProgress(101)):(o.showPreview&&(d.each(function(){var t=e(this),i=t.attr("data-fileindex");t.removeClass("file-uploading"),t.find(".kv-file-upload").removeAttr("disabled"),t.find(".kv-file-remove").removeAttr("disabled"),0===c.length||-1!==e.inArray(l,c)?(o._setPreviewError(t,i,o.filestack[i],o.retryErrorUploads),o.retryErrorUploads||(t.find(".kv-file-upload").hide(),o.updateStack(i,void 0))):(t.find(".kv-file-upload").hide(),o._setThumbStatus(t,"Success"),o.updateStack(i,void 0)),t.hasClass("file-preview-error")&&!o.retryErrorUploads||l++}),o._initUploadSuccess(i)),o._showUploadError(i.error,n,"filebatchuploaderror"),o._setProgress(101,o.$progress,o.msgUploadError))},n=function(){o.unlock(),o._initSuccessThumbs(),o._clearFileInput(),o._raise("filebatchuploadcomplete",[o.filestack,o._getExtraData()])},r=function(t,i,a){var r=o._getOutData(t),n=o.ajaxOperations.uploadBatch,s=o._parseError(n,t,a);o._showUploadError(s,r,"filebatchuploaderror"),o.uploadFileCount=d-1,o.showPreview&&(o._getThumbs().each(function(){var t=e(this),i=t.attr("data-fileindex");t.removeClass("file-uploading"),void 0!==o.filestack[i]&&o._setPreviewError(t)}),o._getThumbs().removeClass("file-uploading"),o._getThumbs(" .kv-file-upload").removeAttr("disabled"),o._getThumbs(" .kv-file-delete").removeAttr("disabled"),o._setProgress(101,o.$progress,o.msgAjaxProgressError.replace("{operation}",n)))},e.each(l,function(e,i){t.isEmpty(l[e])||o.formdata.append(o.uploadFileAttr,i,o.filenames[e])}),o._ajaxSubmit(i,a,n,r))},_uploadExtraOnly:function(){var e,i,a,r,n=this,s={};n.formdata=new FormData,n._abort(s)||(e=function(e){n.lock();var t=n._getOutData(e);n._raise("filebatchpreupload",[t]),n._setProgress(50),s.data=t,s.xhr=e,n._abort(s)&&(e.abort(),n._setProgressCancelled())},i=function(e,i,a){var r=n._getOutData(a,e);t.isEmpty(e)||t.isEmpty(e.error)?(n._raise("filebatchuploadsuccess",[r]),n._clearFileInput(),n._initUploadSuccess(e),n._setProgress(101)):n._showUploadError(e.error,r,"filebatchuploaderror")},a=function(){n.unlock(),n._clearFileInput(),n._raise("filebatchuploadcomplete",[n.filestack,n._getExtraData()])},r=function(e,t,i){var a=n._getOutData(e),r=n.ajaxOperations.uploadExtra,o=n._parseError(r,e,i);s.data=a,n._showUploadError(o,a,"filebatchuploaderror"),n._setProgress(101,n.$progress,n.msgAjaxProgressError.replace("{operation}",r))},n._ajaxSubmit(e,i,a,r))},_deleteFileIndex:function(i){var a=i.attr("data-fileindex"),r=this.reversePreviewOrder;"init_"===a.substring(0,5)&&(a=parseInt(a.replace("init_","")),this.initialPreview=t.spliceArray(this.initialPreview,a,r),this.initialPreviewConfig=t.spliceArray(this.initialPreviewConfig,a,r),this.initialPreviewThumbTags=t.spliceArray(this.initialPreviewThumbTags,a,r),this.getFrames().each(function(){var t=e(this),i=t.attr("data-fileindex");"init_"===i.substring(0,5)&&(i=parseInt(i.replace("init_","")))>a&&(i--,t.attr("data-fileindex","init_"+i))}),this.uploadAsync&&(this.cacheInitialPreview=this.getPreview()))},_initFileActions:function(){var i=this,a=i.$preview;i.showPreview&&(i._initZoomButton(),i.getFrames(" .kv-file-remove").each(function(){var r,n,s,o=e(this),l=o.closest(t.FRAMES),d=l.attr("id"),c=l.attr("data-fileindex");i._handler(o,"click",function(){if(!1===i._raise("filepreremove",[d,c])||!i._validateMinCount())return!1;r=l.hasClass("file-preview-error"),t.cleanMemory(l),l.fadeOut("slow",function(){t.cleanZoomCache(a.find("#zoom-"+d)),i.updateStack(c,void 0),i._clearObjects(l),l.remove(),d&&r&&i.$errorContainer.find('li[data-file-id="'+d+'"]').fadeOut("fast",function(){e(this).remove(),i._errorsExist()||i._resetErrors()}),i._clearFileInput();var o=i.getFileStack(!0),h=i.previewCache.count(),p=o.length,u=i.showPreview&&i.getFrames().length;0!==p||0!==h||u?(s=(n=h+p)>1?i._getMsgSelected(n):o[0]?i._getFileNames()[0]:"",i._setCaption(s)):i.reset(),i._raise("fileremoved",[d,c])})})}),i.getFrames(" .kv-file-upload").each(function(){var a=e(this);i._handler(a,"click",function(){var e=a.closest(t.FRAMES),r=e.attr("data-fileindex");i.$progress.hide(),e.hasClass("file-preview-error")&&!i.retryErrorUploads||i._uploadSingle(r,!1)})}))},_initPreviewActions:function(){var i=this,a=i.$preview,r=i.deleteExtraData||{},n=t.FRAMES+" .kv-file-remove",s=i.fileActionSettings,o=s.removeClass,l=s.removeErrorClass,d=function(){var e=i.isAjaxUpload?i.previewCache.count():i._inputFileCount();a.find(t.FRAMES).length||e||(i._setCaption(""),i.reset(),i.initialCaption="")};i._initZoomButton(),a.find(n).each(function(){var n,s,c,h=e(this),p=h.data("url")||i.deleteUrl,u=h.data("key");if(!t.isEmpty(p)&&void 0!==u){var f,m,g,v,w=h.closest(t.FRAMES),_=i.previewCache.data,b=w.attr("data-fileindex");b=parseInt(b.replace("init_","")),g=t.isEmpty(_.config)&&t.isEmpty(_.config[b])?null:_.config[b],"function"==typeof(v=t.isEmpty(g)||t.isEmpty(g.extra)?r:g.extra)&&(v=v()),m={id:h.attr("id"),key:u,extra:v},n=function(e){i.ajaxAborted=!1,i._raise("filepredelete",[u,e,v]),i._abort()?e.abort():(h.removeClass(l),t.addCss(w,"file-uploading"),t.addCss(h,"disabled "+o))},s=function(e,r,n){var s,c;if(!t.isEmpty(e)&&!t.isEmpty(e.error))return m.jqXHR=n,m.response=e,i._showError(e.error,m,"filedeleteerror"),w.removeClass("file-uploading"),h.removeClass("disabled "+o).addClass(l),void d();w.removeClass("file-uploading").addClass("file-deleted"),w.fadeOut("slow",function(){b=parseInt(w.attr("data-fileindex").replace("init_","")),i.previewCache.unset(b),i._deleteFileIndex(w),s=i.previewCache.count(),c=s>0?i._getMsgSelected(s):"",i._setCaption(c),i._raise("filedeleted",[u,n,v]),t.cleanZoomCache(a.find("#zoom-"+w.attr("id"))),i._clearObjects(w),w.remove(),d()})},c=function(e,t,a){var r=i.ajaxOperations.deleteThumb,n=i._parseError(r,e,a);m.jqXHR=e,m.response={},i._showError(n,m,"filedeleteerror"),w.removeClass("file-uploading"),h.removeClass("disabled "+o).addClass(l),d()},i._initAjaxSettings(),i._mergeAjaxCallback("beforeSend",n,"delete"),i._mergeAjaxCallback("success",s,"delete"),i._mergeAjaxCallback("error",c,"delete"),f=e.extend(!0,{},{url:p,type:"POST",dataType:"json",data:e.extend(!0,{},{key:u},v)},i._ajaxDeleteSettings),i._handler(h,"click",function(){if(!i._validateMinCount())return!1;i.ajaxAborted=!1,i._raise("filebeforedelete",[u,v]),i.ajaxAborted instanceof Promise?i.ajaxAborted.then(function(t){t||e.ajax(f)}):i.ajaxAborted||e.ajax(f)})}})},_hideFileIcon:function(){this.overwriteInitial&&this.$captionContainer.removeClass("icon-visible")},_showFileIcon:function(){t.addCss(this.$captionContainer,"icon-visible")},_getSize:function(t){var i,a,r,n=parseFloat(t),s=this.fileSizeGetter;return e.isNumeric(t)&&e.isNumeric(n)?("function"==typeof s?r=s(n):0===n?r="0.00 B":(i=Math.floor(Math.log(n)/Math.log(1024)),a=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],r=1*(n/Math.pow(1024,i)).toFixed(2)+" "+a[i]),this._getLayoutTemplate("size").replace("{sizeText}",r)):""},_generatePreviewTemplate:function(i,a,r,n,s,o,l,d,c,h,p){var u,f=this,m=f.slug(r),g="",v="",w=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)<400?f.previewSettingsSmall[i]||f.defaults.previewSettingsSmall[i]:f.previewSettings[i]||f.defaults.previewSettings[i],_=c||f._renderFileFooter(m,l,"auto",o),b=f._getPreviewIcon(r),C="type-default",y=b&&f.preferIconicPreview,x=b&&f.preferIconicZoomPreview;return w&&e.each(w,function(e,t){v+=e+":"+t+";"}),u=function(a,o,l,c){var u=l?"zoom-"+s:s,g=f._getPreviewTemplate(a),w=(d||"")+" "+c;return f.frameClass&&(w=f.frameClass+" "+w),l&&(w=w.replace(" "+t.SORT_CSS,"")),g=f._parseFilePreviewIcon(g,r),"text"===a&&(o=t.htmlEncode(o)),"object"!==i||n||e.each(f.defaults.fileTypeSettings,function(e,t){"object"!==e&&"other"!==e&&t(r,n)&&(C="type-"+e)}),g.setTokens({previewId:u,caption:m,frameClass:w,type:n,fileindex:h,typeCss:C,footer:_,data:o,template:p||i,style:v?'style="'+v+'"':""})},h=h||s.slice(s.lastIndexOf("-")+1),f.fileActionSettings.showZoom&&(g=u(x?"other":i,a,!0,"kv-zoom-thumb")),g="\n"+f._getLayoutTemplate("zoomCache").replace("{zoomContent}",g),u(y?"other":i,a,!1,"kv-preview-thumb")+g},_addToPreview:function(e,t){return this.reversePreviewOrder?e.prepend(t):e.append(t)},_previewDefault:function(i,a,r){var n=this.$preview;if(this.showPreview){var s,o=i?i.name:"",l=i?i.type:"",d=i.size||0,c=this.slug(o),h=!0===r&&!this.isAjaxUpload,p=t.objUrl.createObjectURL(i);this._clearDefaultPreview(),s=this._generatePreviewTemplate("other",p,o,l,a,h,d),this._addToPreview(n,s),this._setThumbAttr(a,c,d),!0===r&&this.isAjaxUpload&&this._setThumbStatus(e("#"+a),"Error")}},_previewFile:function(e,t,i,a,r,n){if(this.showPreview){var s,o=t?t.name:"",l=n.type,d=n.name,c=this._parseFileType(l,o),h=this.allowedPreviewTypes,p=this.allowedPreviewMimeTypes,u=this.$preview,f=t.size||0,m=h&&h.indexOf(c)>=0,g=p&&-1!==p.indexOf(l),v="text"===c||"html"===c||"image"===c?i.target.result:r;if("html"===c&&this.purifyHtml&&window.DOMPurify&&(v=window.DOMPurify.sanitize(v)),m||g){s=this._generatePreviewTemplate(c,v,o,l,a,!1,f),this._clearDefaultPreview(),this._addToPreview(u,s);var w=u.find("#"+a+" img");this._validateImageOrientation(w,t,a,d,l,f,v)}else this._previewDefault(t,a);this._setThumbAttr(a,d,f),this._initSortable()}},_setThumbAttr:function(t,i,a){var r=e("#"+t);r.length&&(a=a&&a>0?this._getSize(a):"",r.data({caption:i,size:a}))},_setInitThumbAttr:function(){var e,i,a,r,n=this.previewCache.data,s=this.previewCache.count();if(0!==s)for(var o=0;o<s;o++)e=n.config[o],r=this.previewInitId+"-init_"+o,i=t.ifSet("caption",e,t.ifSet("filename",e)),a=t.ifSet("size",e),this._setThumbAttr(r,i,a)},_slugDefault:function(e){return t.isEmpty(e)?"":String(e).replace(/[\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g,"_")},_updateFileDetails:function(e){var i=this.$element,a=this.getFileStack(),r=t.isIE(9)&&t.findFileName(i.val())||i[0].files[0]&&i[0].files[0].name||a.length&&a[0].name||"",n=this.slug(r),s=this.isAjaxUpload?a.length:e,o=this.previewCache.count()+s,l=1===s?n:this._getMsgSelected(o);this.isError?(this.$previewContainer.removeClass("file-thumb-loading"),this.$previewStatus.html(""),this.$captionContainer.removeClass("icon-visible")):this._showFileIcon(),this._setCaption(l,this.isError),this.$container.removeClass("file-input-new file-input-ajax-new"),1===arguments.length&&this._raise("fileselect",[e,n]),this.previewCache.count()&&this._initPreviewActions()},_setThumbStatus:function(e,t){if(this.showPreview){var i="indicator"+t,a=i+"Title",r="file-preview-"+t.toLowerCase(),n=e.find(".file-upload-indicator"),s=this.fileActionSettings;e.removeClass("file-preview-success file-preview-error file-preview-loading"),"Success"===t&&e.find(".file-drag-handle").remove(),n.html(s[i]),n.attr("title",s[a]),e.addClass(r),"Error"!==t||this.retryErrorUploads||e.find(".kv-file-upload").attr("disabled",!0)}},_setProgressCancelled:function(){this._setProgress(101,this.$progress,this.msgCancelled)},_setProgress:function(e,i,a){var r,n=Math.min(e,100),s=this.progressUploadThreshold,o=e<=100?this.progressTemplate:this.progressCompleteTemplate,l=n<100?this.progressTemplate:a?this.progressErrorTemplate:o;i=i||this.$progress,t.isEmpty(l)||(r=s&&n>s&&e<=100?l.setTokens({percent:s,status:this.msgUploadThreshold}):l.setTokens({percent:n,status:e>100?this.msgUploadEnd:n+"%"}),i.html(r),a&&i.find('[role="progressbar"]').html(a))},_setFileDropZoneTitle:function(){var e,i=this.$container.find(".file-drop-zone"),a=this.dropZoneTitle;this.isClickable&&(e=t.isEmpty(this.$element.attr("multiple"))?this.fileSingle:this.filePlural,a+=this.dropZoneClickTitle.replace("{files}",e)),i.find("."+this.dropZoneTitleClass).remove(),!this.showPreview||0===i.length||this.getFileStack().length>0||!this.dropZoneEnabled||!this.isAjaxUpload&&this.$element.files||(0===i.find(t.FRAMES).length&&t.isEmpty(this.defaultPreviewContent)&&i.prepend('<div class="'+this.dropZoneTitleClass+'">'+a+"</div>"),this.$container.removeClass("file-input-new"),t.addCss(this.$container,"file-input-ajax-new"))},_setAsyncUploadStatus:function(t,i,a){var r=0;this._setProgress(i,e("#"+t).find(".file-thumb-progress")),this.uploadStatus[t]=i,e.each(this.uploadStatus,function(e,t){r+=t}),this._setProgress(Math.floor(r/a))},_validateMinCount:function(){var e=this.isAjaxUpload?this.getFileStack().length:this._inputFileCount();return!(this.validateInitialCount&&this.minFileCount>0&&this._getFileCount(e-1)<this.minFileCount)||(this._noFilesError({}),!1)},_getFileCount:function(e){return this.validateInitialCount&&!this.overwriteInitial&&(e+=this.previewCache.count()),e},_getFileId:function(e){var t,i=this.generateFileId;return"function"==typeof i?i(e,event):e&&(t=String(e.webkitRelativePath||e.fileName||e.name||null))?e.size+"-"+t.replace(/[^0-9a-zA-Z_-]/gim,""):null},_getFileName:function(e){return e&&e.name?this.slug(e.name):void 0},_getFileIds:function(e){return this.fileids.filter(function(t){return e?void 0!==t:null!=t})},_getFileNames:function(e){return this.filenames.filter(function(t){return e?void 0!==t:null!=t})},_setPreviewError:function(e,t,i,a){void 0!==t&&this.updateStack(t,i),this.showPreview&&(!this.removeFromPreviewOnError||a?(this._setThumbStatus(e,"Error"),this._refreshUploadButton(e,a)):e.remove())},_refreshUploadButton:function(e,t){var i=e.find(".kv-file-upload"),a=this.fileActionSettings,r=a.uploadIcon,n=a.uploadTitle;i.length&&(t&&(r=a.uploadRetryIcon,n=a.uploadRetryTitle),i.attr("title",n).html(r))},_checkDimensions:function(e,i,a,r,n,s,o){var l,d,c,h=this[("Small"===i?"min":"max")+"Image"+s];!t.isEmpty(h)&&a.length&&(c=a[0],d="Width"===s?c.naturalWidth||c.width:c.naturalHeight||c.height,("Small"===i?d>=h:d<=h)||(l=this["msgImage"+s+i].setTokens({name:n,size:h}),this._showUploadError(l,o),this._setPreviewError(r,e,null)))},_getExifObj:function(e){var t=null;try{t=window.piexif?window.piexif.load(e):null}catch(e){t=null}return t||this._log("Error loading the piexif.js library."),t},_validateImageOrientation:function(e,i,a,r,n,s,o){var l,d;(d=(l=e.length&&this.autoOrientImage?this._getExifObj(o):null)?l["0th"][piexif.ImageIFD.Orientation]:null)?(t.setImageOrientation(e,this.$preview.find("#zoom-"+a+" img"),d),this._raise("fileimageoriented",{$img:e,file:i}),this._validateImage(a,r,n,s,o,l)):this._validateImage(a,r,n,s,o,l)},_validateImage:function(t,i,a,r,n,s){var o,l,d,c=this,h=c.$preview,p=h.find("#"+t),u=p.attr("data-fileindex"),f=p.find("img");i=i||"Untitled",f.one("load",function(){l=p.width(),d=h.width(),l>d&&f.css("width","100%"),o={ind:u,id:t},c._checkDimensions(u,"Small",f,p,i,"Width",o),c._checkDimensions(u,"Small",f,p,i,"Height",o),c.resizeImage||(c._checkDimensions(u,"Large",f,p,i,"Width",o),c._checkDimensions(u,"Large",f,p,i,"Height",o)),c._raise("fileimageloaded",[t]),c.loadedImages.push({ind:u,img:f,thumb:p,pid:t,typ:a,siz:r,validated:!1,imgData:n,exifObj:s}),p.data("exif",s),c._validateAllImages()}).one("error",function(){c._raise("fileimageloaderror",[t])}).each(function(){this.complete?e(this).trigger("load"):this.error&&e(this).trigger("error")})},_validateAllImages:function(){var e,t,i,a={val:0},r=this.loadedImages.length,n=this.resizeIfSizeMoreThan;if(r===this.totalImagesCount&&(this._raise("fileimagesloaded"),this.resizeImage))for(e=0;e<this.loadedImages.length;e++)(t=this.loadedImages[e]).validated||((i=t.siz)&&i>1e3*n&&this._getResizedImage(t,a,r),this.loadedImages[e].validated=!0)},_getResizedImage:function(i,a,r){var n,s,o,l,d,c,h=this,p=e(i.img)[0],u=p.naturalWidth,f=p.naturalHeight,m=1,g=h.maxImageWidth||u,v=h.maxImageHeight||f,w=!(!u||!f),_=h.imageCanvas,b=h.imageCanvasContext,C=i.typ,y=i.pid,x=i.ind,T=i.thumb,E=i.exifObj;if(d=function(e,t,i){h.isAjaxUpload?h._showUploadError(e,t,i):h._showError(e,t,i),h._setPreviewError(T,x)},h.filestack[x]&&w&&!(u<=g&&f<=v)||(w&&h.filestack[x]&&h._raise("fileimageresized",[y,x]),a.val++,a.val===r&&h._raise("fileimagesresized"),w)){C=C||h.resizeDefaultImageType,s=u>g,o=f>v,m="width"===h.resizePreference?s?g/u:o?v/f:1:o?v/f:s?g/u:1,h._resetCanvas(),u*=m,f*=m,_.width=u,_.height=f;try{b.drawImage(p,0,0,u,f),l=_.toDataURL(C,h.resizeQuality),E&&(c=window.piexif.dump(E),l=window.piexif.insert(c,l)),n=t.dataURI2Blob(l),h.filestack[x]=n,h._raise("fileimageresized",[y,x]),a.val++,a.val===r&&h._raise("fileimagesresized",[void 0,void 0]),n instanceof Blob||d(h.msgImageResizeError,{id:y,index:x},"fileimageresizeerror")}catch(e){a.val++,a.val===r&&h._raise("fileimagesresized",[void 0,void 0]),d(h.msgImageResizeException.replace("{errors}",e.message),{id:y,index:x},"fileimageresizeexception")}}else d(h.msgImageResizeError,{id:y,index:x},"fileimageresizeerror")},_initBrowse:function(e){var i=this.$element;this.showBrowse?this.$btnFile=e.find(".btn-file").append(i):(i.appendTo(e).attr("tabindex",-1),t.addCss(i,"file-no-browse"))},_initClickable:function(){var i,a,r=this;r.isClickable&&(i=r.$dropZone,r.isAjaxUpload||(a=r.$preview.find(".file-default-preview")).length&&(i=a),t.addCss(i,"clickable"),i.attr("tabindex",-1),r._handler(i,"click",function(t){var a=e(t.target);e(r.elErrorContainer+":visible").length||a.parents(".file-preview-thumbnails").length&&!a.parents(".file-default-preview").length||(r.$element.data("zoneClicked",!0).trigger("click"),i.blur())}))},_initCaption:function(){var e=this.initialCaption||"";return this.overwriteInitial||t.isEmpty(e)?(this.$caption.val(""),!1):(this._setCaption(e),!0)},_setCaption:function(i,a){var r,n,s,o,l,d=this.getFileStack();if(this.$caption.length){if(this.$captionContainer.removeClass("icon-visible"),a)r=e("<div>"+this.msgValidationError+"</div>").text(),l=(o=d.length)?1===o&&d[0]?this._getFileNames()[0]:this._getMsgSelected(o):this._getMsgSelected(this.msgNo),n=t.isEmpty(i)?l:i,s='<span class="'+this.msgValidationErrorClass+'">'+this.msgValidationErrorIcon+"</span>";else{if(t.isEmpty(i))return;n=r=e("<div>"+i+"</div>").text(),s=this._getLayoutTemplate("fileIcon")}this.$captionContainer.addClass("icon-visible"),this.$caption.attr("title",r).val(n),this.$captionIcon.html(s)}},_createContainer:function(){var t={class:"file-input file-input-new"+(this.rtl?" kv-rtl":"")},i=e(document.createElement("div")).attr(t).html(this._renderMain());return i.insertBefore(this.$element),this._initBrowse(i),this.theme&&i.addClass("theme-"+this.theme),i},_refreshContainer:function(){var e=this.$container;this.$element.insertAfter(e),e.html(this._renderMain()),this._initBrowse(e),this._validateDisabled()},_validateDisabled:function(){this.$caption.attr({readonly:this.isDisabled})},_renderMain:function(){var e=this.dropZoneEnabled?" file-drop-zone":"file-drop-disabled",t=this.showClose?this._getLayoutTemplate("close"):"",i=this.showPreview?this._getLayoutTemplate("preview").setTokens({class:this.previewClass,dropClass:e}):"",a=this.isDisabled?this.captionClass+" file-caption-disabled":this.captionClass,r=this.captionTemplate.setTokens({class:a+" kv-fileinput-caption"});return this.mainTemplate.setTokens({class:this.mainClass+(!this.showBrowse&&this.showCaption?" no-browse":""),preview:i,close:t,caption:r,upload:this._renderButton("upload"),remove:this._renderButton("remove"),cancel:this._renderButton("cancel"),browse:this._renderButton("browse")})},_renderButton:function(e){var i=this._getLayoutTemplate("btnDefault"),a=this[e+"Class"],r=this[e+"Title"],n=this[e+"Icon"],s=this[e+"Label"],o=this.isDisabled?" disabled":"",l="button";switch(e){case"remove":if(!this.showRemove)return"";break;case"cancel":if(!this.showCancel)return"";a+=" kv-hidden";break;case"upload":if(!this.showUpload)return"";this.isAjaxUpload&&!this.isDisabled?i=this._getLayoutTemplate("btnLink").replace("{href}",this.uploadUrl):l="submit";break;case"browse":if(!this.showBrowse)return"";i=this._getLayoutTemplate("btnBrowse");break;default:return""}return a+="browse"===e?" btn-file":" fileinput-"+e+" fileinput-"+e+"-button",t.isEmpty(s)||(s=' <span class="'+this.buttonLabelClass+'">'+s+"</span>"),i.setTokens({type:l,css:a,title:r,status:o,icon:n,label:s})},_renderThumbProgress:function(){return'<div class="file-thumb-progress kv-hidden">'+this.progressTemplate.setTokens({percent:"0",status:this.msgUploadBegin})+"</div>"},_renderFileFooter:function(e,i,a,r){var n,s=this.fileActionSettings,o=s.showRemove,l=s.showDrag,d=s.showUpload,c=s.showZoom,h=this._getLayoutTemplate("footer"),p=this._getLayoutTemplate("indicator"),u=r?s.indicatorError:s.indicatorNew,f=r?s.indicatorErrorTitle:s.indicatorNewTitle,m=p.setTokens({indicator:u,indicatorTitle:f});return i=this._getSize(i),n=this.isAjaxUpload?h.setTokens({actions:this._renderFileActions(d,!1,o,c,l,!1,!1,!1),caption:e,size:i,width:a,progress:this._renderThumbProgress(),indicator:m}):h.setTokens({actions:this._renderFileActions(!1,!1,!1,c,l,!1,!1,!1),caption:e,size:i,width:a,progress:"",indicator:m}),n=t.replaceTags(n,this.previewThumbTags)},_renderFileActions:function(e,t,i,a,r,n,s,o,l,d,c){if(!(e||t||i||a||r))return"";var h,p=!1===s?"":' data-url="'+s+'"',u=!1===o?"":' data-key="'+o+'"',f="",m="",g="",v="",w="",_=this._getLayoutTemplate("actions"),b=this.fileActionSettings,C=this.otherActionButtons.setTokens({dataKey:u,key:o}),y=n?b.removeClass+" disabled":b.removeClass;return i&&(f=this._getLayoutTemplate("actionDelete").setTokens({removeClass:y,removeIcon:b.removeIcon,removeTitle:b.removeTitle,dataUrl:p,dataKey:u,key:o})),e&&(m=this._getLayoutTemplate("actionUpload").setTokens({uploadClass:b.uploadClass,uploadIcon:b.uploadIcon,uploadTitle:b.uploadTitle})),t&&(g=(g=this._getLayoutTemplate("actionDownload").setTokens({downloadClass:b.downloadClass,downloadIcon:b.downloadIcon,downloadTitle:b.downloadTitle,downloadUrl:d||this.initialPreviewDownloadUrl})).setTokens({filename:c,key:o})),a&&(v=this._getLayoutTemplate("actionZoom").setTokens({zoomClass:b.zoomClass,zoomIcon:b.zoomIcon,zoomTitle:b.zoomTitle})),r&&l&&(h="drag-handle-init "+b.dragClass,w=this._getLayoutTemplate("actionDrag").setTokens({dragClass:h,dragTitle:b.dragTitle,dragIcon:b.dragIcon})),_.setTokens({delete:f,upload:m,download:g,zoom:v,drag:w,other:C})},_browse:function(e){e&&e.isDefaultPrevented()||!this._raise("filebrowse")||(this.isError&&!this.isAjaxUpload&&this.clear(),this.$captionContainer.focus())},_filterDuplicate:function(e,t,i){var a=this._getFileId(e);a&&i&&i.indexOf(a)>-1||(i||(i=[]),t.push(e),i.push(a))},_change:function(i){var a=this;if(!a.changeTriggered){var r,n,s,o,l,d,c,h,p,u,f,m=a.$element,g=arguments.length>1,v=a.isAjaxUpload,w=[],_=g?arguments[1]:m.get(0).files,b=!v&&t.isEmpty(m.attr("multiple"))?1:a.maxFileCount,C=a.filestack.length,y=t.isEmpty(m.attr("multiple"))&&C>0,x=a._getFileIds();if(a.reader=null,a._resetUpload(),a._hideFileIcon(),a.dropZoneEnabled&&a.$container.find(".file-drop-zone ."+a.dropZoneTitleClass).remove(),v?e.each(_,function(e,t){a._filterDuplicate(t,w,x)}):(_=i.target&&void 0===i.target.files?i.target.value?[{name:i.target.value.replace(/^.+\\/,"")}]:[]:i.target.files||{},w=_),t.isEmpty(w)||0===w.length)return v||a.clear(),void a._raise("fileselectnone");if(a._resetErrors(),n=w.length,r=a._getFileCount(v?a.getFileStack().length+n:n),b>0&&r>b){if(!a.autoReplace||n>b)return s=a.autoReplace&&n>b?n:r,o=b,f=a.msgFilesTooMany.replace("{m}",o).replace("{n}",s),a.isError=(l=f,d=null,c=null,h=null,p=e.extend(!0,{},a._getOutData({},{},_),{id:c,index:h}),u={id:c,index:h,file:d,files:_},v?a._showUploadError(l,p):a._showError(l,u)),a.$captionContainer.removeClass("icon-visible"),a._setCaption("",!0),void a.$container.removeClass("file-input-new file-input-ajax-new");r>b&&a._resetPreviewThumbs(v)}else!v||y?(a._resetPreviewThumbs(!1),y&&a.clearStack()):!v||0!==C||a.previewCache.count()&&!a.overwriteInitial||a._resetPreviewThumbs(!0);a.isPreviewable?a.readFiles(w):a._updateFileDetails(1)}},_abort:function(t){var i;return this.ajaxAborted&&"object"==typeof this.ajaxAborted&&void 0!==this.ajaxAborted.message?((i=e.extend(!0,{},this._getOutData(),t)).abortData=this.ajaxAborted.data||{},i.abortMessage=this.ajaxAborted.message,this._setProgress(101,this.$progress,this.msgCancelled),this._showUploadError(this.ajaxAborted.message,i,"filecustomerror"),this.cancel(),!0):!!this.ajaxAborted},_resetFileStack:function(){var i=this,a=0,r=[],n=[],s=[];i._getThumbs().each(function(){var o=e(this),l=o.attr("data-fileindex"),d=i.filestack[l],c=o.attr("id");"-1"!==l&&-1!==l&&(void 0!==d?(r[a]=d,n[a]=i._getFileName(d),s[a]=i._getFileId(d),o.attr({id:i.previewInitId+"-"+a,"data-fileindex":a}),a++):o.attr({id:"uploaded-"+t.uniqId(),"data-fileindex":"-1"}),i.$preview.find("#zoom-"+c).attr({id:"zoom-"+o.attr("id"),"data-fileindex":o.attr("data-fileindex")}))}),i.filestack=r,i.filenames=n,i.fileids=s},_isFileSelectionValid:function(e){return e=e||0,this.required&&!this.getFilesCount()?(this.$errorContainer.html(""),this._showUploadError(this.msgFileRequired),!1):!(this.minFileCount>0&&this._getFileCount(e)<this.minFileCount)||(this._noFilesError({}),!1)},clearStack:function(){return this.filestack=[],this.filenames=[],this.fileids=[],this.$element},updateStack:function(e,t){return this.filestack[e]=t,this.filenames[e]=this._getFileName(t),this.fileids[e]=t&&this._getFileId(t)||null,this.$element},addToStack:function(e){return this.filestack.push(e),this.filenames.push(this._getFileName(e)),this.fileids.push(this._getFileId(e)),this.$element},getFileStack:function(e){return this.filestack.filter(function(t){return e?void 0!==t:null!=t})},getFilesCount:function(){var e=this.isAjaxUpload?this.getFileStack().length:this._inputFileCount();return this._getFileCount(e)},readFiles:function(i){this.reader=new FileReader;var a,r=this,n=r.$element,s=r.$preview,o=r.reader,l=r.$previewContainer,d=r.$previewStatus,c=r.msgLoading,h=r.msgProgress,p=r.previewInitId,u=i.length,f=r.fileTypeSettings,m=r.filestack.length,g=r.allowedFileTypes,v=g?g.length:0,w=r.allowedFileExtensions,_=t.isEmpty(w)?"":w.join(", "),b=r.maxFilePreviewSize&&parseFloat(r.maxFilePreviewSize),C=s.length&&(!b||isNaN(b)),y=function(t,n,s,o){var l,d=e.extend(!0,{},r._getOutData({},{},i),{id:s,index:o}),c={id:s,index:o,file:n,files:i};r._previewDefault(n,s,!0),r.isAjaxUpload?(r.addToStack(void 0),setTimeout(function(){a(o+1)},100)):u=0,r._initFileActions(),(l=e("#"+s)).find(".kv-file-upload").hide(),r.removeFromPreviewOnError&&l.remove(),r.isError=r.isAjaxUpload?r._showUploadError(t,d):r._showError(t,c),r._updateFileDetails(u)};r.loadedImages=[],r.totalImagesCount=0,e.each(i,function(e,t){var i=r.fileTypeSettings.image;i&&i(t.type)&&r.totalImagesCount++}),(a=function(x){if(t.isEmpty(n.attr("multiple"))&&(u=1),x>=u)return r.isAjaxUpload&&r.filestack.length>0?r._raise("filebatchselected",[r.getFileStack()]):r._raise("filebatchselected",[i]),l.removeClass("file-thumb-loading"),void d.html("");var T,E,S,k,F,P,I,A,D,z,$,j,U=p+"-"+(m+x),B=i[x],R=f.text,O=f.image,L=f.html,M=B&&B.name?r.slug(B.name):"",Z=(B&&B.size||0)/1e3,N="",H=B?t.objUrl.createObjectURL(B):null,W=0,q="",V=0,K=function(){var e=h.setTokens({index:x+1,files:u,percent:50,name:M});setTimeout(function(){d.html(e),r._updateFileDetails(u),a(x+1)},100),r._raise("fileloaded",[B,U,x,o])};if(B){if(v>0)for(E=0;E<v;E++)P=g[E],I=r.msgFileTypes[P]||P,q+=0===E?I:", "+I;if(!1!==M){if(0===M.length)return S=r.msgInvalidFileName.replace("{name}",t.htmlEncode(B.name,"[unknown]")),void y(S,B,U,x);if(t.isEmpty(w)||(N=new RegExp("\\.("+w.join("|")+")$","i")),T=Z.toFixed(2),r.maxFileSize>0&&Z>r.maxFileSize)return S=r.msgSizeTooLarge.setTokens({name:M,size:T,maxSize:r.maxFileSize}),void y(S,B,U,x);if(null!==r.minFileSize&&Z<=t.getNum(r.minFileSize))return S=r.msgSizeTooSmall.setTokens({name:M,size:T,minSize:r.minFileSize}),void y(S,B,U,x);if(!t.isEmpty(g)&&t.isArray(g)){for(E=0;E<g.length;E+=1)k=g[E],W+=(A=f[k])&&"function"==typeof A&&A(B.type,B.name)?1:0;if(0===W)return S=r.msgInvalidFileType.setTokens({name:M,types:q}),void y(S,B,U,x)}if(0===W&&!t.isEmpty(w)&&t.isArray(w)&&!t.isEmpty(N)&&(F=t.compare(M,N),0===(W+=t.isEmpty(F)?0:F.length)))return S=r.msgInvalidFileExtension.setTokens({name:M,extensions:_}),void y(S,B,U,x);if(!r.showPreview)return r.isAjaxUpload&&r.addToStack(B),setTimeout(function(){a(x+1),r._updateFileDetails(u)},100),void r._raise("fileloaded",[B,U,x,o]);if(!C&&Z>b)return r.addToStack(B),l.addClass("file-thumb-loading"),r._previewDefault(B,U),r._initFileActions(),r._updateFileDetails(u),void a(x+1);s.length&&void 0!==FileReader?(D=R(B.type,M),z=L(B.type,M),$=O(B.type,M),d.html(c.replace("{index}",x+1).replace("{files}",u)),l.addClass("file-thumb-loading"),o.onerror=function(e){r._errorHandler(e,M)},o.onload=function(i){var a,n,s,l,d,c,h,p,u=[];if(n={name:M,type:B.type},e.each(f,function(e,t){"object"!==e&&"other"!==e&&t(B.type,M)&&V++}),0===V){for(s=new Uint8Array(i.target.result),E=0;E<s.length;E++)l=s[E].toString(16),u.push(l);if(a=u.join("").toLowerCase().substring(0,8),c=t.getMimeType(a,"",""),t.isEmpty(c)&&(d=t.arrayBuffer2String(o.result),c=t.isSvg(d)?"image/svg+xml":t.getMimeType(a,d,B.type)),n={name:M,type:c},D=R(c,""),z=L(c,""),$=O(c,""),(j=D||z)||$)return h=j,(p=new FileReader).onerror=function(e){r._errorHandler(e,M)},p.onload=function(e){r._previewFile(x,B,e,U,H,n),r._initFileActions(),K()},void(h?p.readAsText(B,r.textEncoding):p.readAsDataURL(B))}r._previewFile(x,B,i,U,H,n),r._initFileActions(),K()},o.onprogress=function(e){if(e.lengthComputable){var t=e.loaded/e.total*100,i=Math.ceil(t);S=h.setTokens({index:x+1,files:u,percent:i,name:M}),setTimeout(function(){d.html(S)},100)}},D||z?o.readAsText(B,r.textEncoding):$?o.readAsDataURL(B):o.readAsArrayBuffer(B)):(r._previewDefault(B,U),setTimeout(function(){a(x+1),r._updateFileDetails(u)},100),r._raise("fileloaded",[B,U,x,o])),r.addToStack(B)}else a(x+1)}})(0),r._updateFileDetails(u,!1)},lock:function(){return this._resetErrors(),this.disable(),this.showRemove&&this.$container.find(".fileinput-remove").hide(),this.showCancel&&this.$container.find(".fileinput-cancel").show(),this._raise("filelock",[this.filestack,this._getExtraData()]),this.$element},unlock:function(e){return void 0===e&&(e=!0),this.enable(),this.showCancel&&this.$container.find(".fileinput-cancel").hide(),this.showRemove&&this.$container.find(".fileinput-remove").show(),e&&this._resetFileStack(),this._raise("fileunlock",[this.filestack,this._getExtraData()]),this.$element},cancel:function(){var t,i=this,a=i.ajaxRequests,r=a.length;if(r>0)for(t=0;t<r;t+=1)i.cancelling=!0,a[t].abort();return i._setProgressCancelled(),i._getThumbs().each(function(){var t=e(this),a=t.attr("data-fileindex");t.removeClass("file-uploading"),void 0!==i.filestack[a]&&(t.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"),t.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")),i.unlock()}),i.$element},clear:function(){var i,a=this;if(a._raise("fileclear"))return a.$btnUpload.removeAttr("disabled"),a._getThumbs().find("video,audio,img").each(function(){t.cleanMemory(e(this))}),a._clearFileInput(),a._resetUpload(),a.clearStack(),a._resetErrors(!0),a._hasInitialPreview()?(a._showFileIcon(),a._resetPreview(),a._initPreviewActions(),a.$container.removeClass("file-input-new")):(a._getThumbs().each(function(){a._clearObjects(e(this))}),a.isAjaxUpload&&(a.previewCache.data={}),a.$preview.html(""),i=!a.overwriteInitial&&a.initialCaption.length>0?a.initialCaption:"",a.$caption.attr("title","").val(i),t.addCss(a.$container,"file-input-new"),a._validateDefaultPreview()),0===a.$container.find(t.FRAMES).length&&(a._initCaption()||a.$captionContainer.removeClass("icon-visible")),a._hideFileIcon(),a._raise("filecleared"),a.$captionContainer.focus(),a._setFileDropZoneTitle(),a.$element},reset:function(){if(this._raise("filereset"))return this._resetPreview(),this.$container.find(".fileinput-filename").text(""),t.addCss(this.$container,"file-input-new"),(this.getFrames().length||this.dropZoneEnabled)&&this.$container.removeClass("file-input-new"),this.clearStack(),this.formdata={},this._setFileDropZoneTitle(),this.$element},disable:function(){return this.isDisabled=!0,this._raise("filedisabled"),this.$element.attr("disabled","disabled"),this.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"),this.$container.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled",!0),t.addCss(this.$container.find(".btn-file"),"disabled"),this._initDragDrop(),this.$element},enable:function(){return this.isDisabled=!1,this._raise("fileenabled"),this.$element.removeAttr("disabled"),this.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"),this.$container.find(".fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled"),this.$container.find(".btn-file").removeClass("disabled"),this._initDragDrop(),this.$element},upload:function(){var i,a,r,n=this.getFileStack().length,s=!e.isEmptyObject(this._getExtraData());if(this.isAjaxUpload&&!this.isDisabled&&this._isFileSelectionValid(n))if(this._resetUpload(),0!==n||s)if(this.$progress.show(),this.uploadCount=0,this.uploadStatus={},this.uploadLog=[],this.lock(),this._setProgress(2),0===n&&s)this._uploadExtraOnly();else{if(r=this.filestack.length,this.hasInitData=!1,!this.uploadAsync)return this._uploadBatch(),this.$element;for(a=this._getOutData(),this._raise("filebatchpreupload",[a]),this.fileBatchCompleted=!1,this.uploadCache={content:[],config:[],tags:[],append:!0},this.uploadAsyncCount=this.getFileStack().length,i=0;i<r;i++)this.uploadCache.content[i]=null,this.uploadCache.config[i]=null,this.uploadCache.tags[i]=null;for(this.$preview.find(".file-preview-initial").removeClass(t.SORT_CSS),this._initSortable(),this.cacheInitialPreview=this.getPreview(),i=0;i<r;i++)this.filestack[i]&&this._uploadSingle(i,!0)}else this._showUploadError(this.msgUploadEmpty)},destroy:function(){var t=this.$form,i=this.$container,a=this.$element,r=this.namespace;return e(document).off(r),e(window).off(r),t&&t.length&&t.off(r),this.isAjaxUpload&&this._clearFileInput(),this._cleanup(),this._initPreviewCache(),a.insertBefore(i).off(r).removeData(),i.off().remove(),a},refresh:function(i){var a=this.$element;return i="object"!=typeof i||t.isEmpty(i)?this.options:e.extend(!0,{},this.options,i),this._init(i,!0),this._listen(),a},zoom:function(e){var i=this._getFrame(e),a=this.$modal;i&&(t.initModal(a),a.html(this._getModalContent()),this._setZoomContent(i),a.modal("show"),this._initZoomButtons())},getExif:function(e){var t=this._getFrame(e);return t&&t.data("exif")||null},getFrames:function(i){var a;return i=i||"",a=this.$preview.find(t.FRAMES+i),this.reversePreviewOrder&&(a=e(a.get().reverse())),a},getPreview:function(){return{content:this.initialPreview,config:this.initialPreviewConfig,tags:this.initialPreviewThumbTags}}},e.fn.fileinput=function(a){if(t.hasFileAPISupport()||t.isIE(9)){var r=Array.apply(null,arguments),n=[];switch(r.shift(),this.each(function(){var s,o=e(this),l=o.data("fileinput"),d="object"==typeof a&&a,c=d.theme||o.data("theme"),h={},p={},u=d.language||o.data("language")||e.fn.fileinput.defaults.language||"en";l||(c&&(p=e.fn.fileinputThemes[c]||{}),"en"===u||t.isEmpty(e.fn.fileinputLocales[u])||(h=e.fn.fileinputLocales[u]||{}),s=e.extend(!0,{},e.fn.fileinput.defaults,p,e.fn.fileinputLocales.en,h,d,o.data()),l=new i(this,s),o.data("fileinput",l)),"string"==typeof a&&n.push(l[a].apply(l,r))}),n.length){case 0:return this;case 1:return n[0];default:return n}}},e.fn.fileinput.defaults={language:"en",showCaption:!0,showBrowse:!0,showPreview:!0,showRemove:!0,showUpload:!0,showCancel:!0,showClose:!0,showUploadedThumbs:!0,browseOnZoneClick:!1,autoReplace:!1,autoOrientImage:!1,required:!1,rtl:!1,hideThumbnailContent:!1,generateFileId:null,previewClass:"",captionClass:"",frameClass:"krajee-default",mainClass:"file-caption-main",mainTemplate:null,purifyHtml:!0,fileSizeGetter:null,initialCaption:"",initialPreview:[],initialPreviewDelimiter:"*$$*",initialPreviewAsData:!1,initialPreviewFileType:"image",initialPreviewConfig:[],initialPreviewThumbTags:[],previewThumbTags:{},initialPreviewShowDelete:!0,initialPreviewDownloadUrl:"",removeFromPreviewOnError:!1,deleteUrl:"",deleteExtraData:{},overwriteInitial:!0,previewZoomButtonIcons:{prev:'<i class="glyphicon glyphicon-triangle-left"></i>',next:'<i class="glyphicon glyphicon-triangle-right"></i>',toggleheader:'<i class="glyphicon glyphicon-resize-vertical"></i>',fullscreen:'<i class="glyphicon glyphicon-fullscreen"></i>',borderless:'<i class="glyphicon glyphicon-resize-full"></i>',close:'<i class="glyphicon glyphicon-remove"></i>'},previewZoomButtonClasses:{prev:"btn btn-navigate",next:"btn btn-navigate",toggleheader:"btn btn-sm btn-kv btn-default btn-outline-secondary",fullscreen:"btn btn-sm btn-kv btn-default btn-outline-secondary",borderless:"btn btn-sm btn-kv btn-default btn-outline-secondary",close:"btn btn-sm btn-kv btn-default btn-outline-secondary"},previewTemplates:{},previewContentTemplates:{},preferIconicPreview:!1,preferIconicZoomPreview:!1,allowedPreviewTypes:void 0,allowedPreviewMimeTypes:null,allowedFileTypes:null,allowedFileExtensions:null,defaultPreviewContent:null,customLayoutTags:{},customPreviewTags:{},previewFileIcon:'<i class="glyphicon glyphicon-file"></i>',previewFileIconClass:"file-other-icon",previewFileIconSettings:{},previewFileExtSettings:{},buttonLabelClass:"hidden-xs",browseIcon:'<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',browseClass:"btn btn-primary",removeIcon:'<i class="glyphicon glyphicon-trash"></i>',removeClass:"btn btn-default btn-secondary",cancelIcon:'<i class="glyphicon glyphicon-ban-circle"></i>',cancelClass:"btn btn-default btn-secondary",uploadIcon:'<i class="glyphicon glyphicon-upload"></i>',uploadClass:"btn btn-default btn-secondary",uploadUrl:null,uploadUrlThumb:null,uploadAsync:!0,uploadExtraData:{},zoomModalHeight:480,minImageWidth:null,minImageHeight:null,maxImageWidth:null,maxImageHeight:null,resizeImage:!1,resizePreference:"width",resizeQuality:.92,resizeDefaultImageType:"image/jpeg",resizeIfSizeMoreThan:0,minFileSize:0,maxFileSize:0,maxFilePreviewSize:25600,minFileCount:0,maxFileCount:0,validateInitialCount:!1,msgValidationErrorClass:"text-danger",msgValidationErrorIcon:'<i class="glyphicon glyphicon-exclamation-sign"></i> ',msgErrorClass:"file-error-message",progressThumbClass:"progress-bar bg-success progress-bar-success progress-bar-striped active",progressClass:"progress-bar bg-success progress-bar-success progress-bar-striped active",progressCompleteClass:"progress-bar bg-success progress-bar-success",progressErrorClass:"progress-bar bg-danger progress-bar-danger",progressUploadThreshold:99,previewFileType:"image",elCaptionContainer:null,elCaptionText:null,elPreviewContainer:null,elPreviewImage:null,elPreviewStatus:null,elErrorContainer:null,errorCloseButton:t.closeButton("kv-error-close"),slugCallback:null,dropZoneEnabled:!0,dropZoneTitleClass:"file-drop-zone-title",fileActionSettings:{},otherActionButtons:"",textEncoding:"UTF-8",ajaxSettings:{},ajaxDeleteSettings:{},showAjaxErrorDetails:!0,mergeAjaxCallbacks:!1,mergeAjaxDeleteCallbacks:!1,retryErrorUploads:!0,reversePreviewOrder:!1},e.fn.fileinputLocales.en={fileSingle:"file",filePlural:"files",browseLabel:"Browse &hellip;",removeLabel:"Remove",removeTitle:"Clear selected files",cancelLabel:"Cancel",cancelTitle:"Abort ongoing upload",uploadLabel:"Upload",uploadTitle:"Upload selected files",msgNo:"No",msgNoFilesSelected:"No files selected",msgCancelled:"Cancelled",msgPlaceholder:"Select {files}...",msgZoomModalHeading:"Detailed Preview",msgFileRequired:"You must select a file to upload.",msgSizeTooSmall:'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.',msgSizeTooLarge:'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',msgFilesTooLess:"You must select at least <b>{n}</b> {files} to upload.",msgFilesTooMany:"Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",msgFileNotFound:'File "{name}" not found!',msgFileSecured:'Security restrictions prevent reading the file "{name}".',msgFileNotReadable:'File "{name}" is not readable.',msgFilePreviewAborted:'File preview aborted for "{name}".',msgFilePreviewError:'An error occurred while reading the file "{name}".',msgInvalidFileName:'Invalid or unsupported characters in file name "{name}".',msgInvalidFileType:'Invalid type for file "{name}". Only "{types}" files are supported.',msgInvalidFileExtension:'Invalid extension for file "{name}". Only "{extensions}" files are supported.',msgFileTypes:{image:"image",html:"HTML",text:"text",video:"video",audio:"audio",flash:"flash",pdf:"PDF",object:"object"},msgUploadAborted:"The file upload was aborted",msgUploadThreshold:"Processing...",msgUploadBegin:"Initializing...",msgUploadEnd:"Done",msgUploadEmpty:"No valid data available for upload.",msgUploadError:"Error",msgValidationError:"Validation Error",msgLoading:"Loading file {index} of {files} &hellip;",msgProgress:"Loading file {index} of {files} - {name} - {percent}% completed.",msgSelected:"{n} {files} selected",msgFoldersNotAllowed:"Drag & drop files only! {n} folder(s) dropped were skipped.",msgImageWidthSmall:'Width of image file "{name}" must be at least {size} px.',msgImageHeightSmall:'Height of image file "{name}" must be at least {size} px.',msgImageWidthLarge:'Width of image file "{name}" cannot exceed {size} px.',msgImageHeightLarge:'Height of image file "{name}" cannot exceed {size} px.',msgImageResizeError:"Could not get the image dimensions to resize.",msgImageResizeException:"Error while resizing the image.<pre>{errors}</pre>",msgAjaxError:"Something went wrong with the {operation} operation. Please try again later!",msgAjaxProgressError:"{operation} failed",ajaxOperations:{deleteThumb:"file delete",uploadThumb:"file upload",uploadBatch:"batch file upload",uploadExtra:"form data upload"},dropZoneTitle:"Drag & drop files here &hellip;",dropZoneClickTitle:"<br>(or click to select {files})",previewZoomButtonTitles:{prev:"View previous file",next:"View next file",toggleheader:"Toggle header",fullscreen:"Toggle full screen",borderless:"Toggle borderless mode",close:"Close detailed preview"},usePdfRenderer:function(){return!!navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/i)},pdfRendererUrl:"",pdfRendererTemplate:'<iframe class="kv-preview-data file-preview-pdf" src="{renderer}?file={data}" {style}></iframe>'},e.fn.fileinput.Constructor=i,e(document).ready(function(){var t=e("input.file[type=file]");t.length&&t.fileinput()})});
/*
 * pagination.js 2.1.5
 * A jQuery plugin to provide simple yet fully customisable pagination.
 * https://github.com/superRaytin/paginationjs
 *
 * Homepage: http://pagination.js.org
 *
 * Copyright 2014-2100, superRaytin
 * Released under the MIT license.
 */


/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/item',[
        'ev-emitter/ev-emitter',
        'get-size/get-size'
      ],
      factory
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/outlayer',[
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));

/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {



// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));
/*  end masonry plugin  */

/*  images loaded plugin  */
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

/*  end images loaded plugin  */


var loadScript_review = function(url, callback){
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState){  // IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" || script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  // Others
        script.onreadystatechange = callback;
        script.onload = callback;
    }
    script.src = url;
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(script, x);
};

var show_Review_NDNAPPS = function(jQuery){
	  
    var ndn_config = "ndn_config_app";
	if(ndn_config.status == '0' || ndn_config.status == ''){
    	return;
    }

    var B64={alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",lookup:null,ie:/MSIE /.test(navigator.userAgent),ieo:/MSIE [67]/.test(navigator.userAgent),encode:function(a){var e,f,g,b=B64.toUtf8(a),c=-1,d=b.length,h=[,,];if(B64.ie){for(var i=[];++c<d;)e=b[c],f=b[++c],h[0]=e>>2,h[1]=(3&e)<<4|f>>4,isNaN(f)?h[2]=h[3]=64:(g=b[++c],h[2]=(15&f)<<2|g>>6,h[3]=isNaN(g)?64:63&g),i.push(B64.alphabet.charAt(h[0]),B64.alphabet.charAt(h[1]),B64.alphabet.charAt(h[2]),B64.alphabet.charAt(h[3]));return i.join("")}for(var i="";++c<d;)e=b[c],f=b[++c],h[0]=e>>2,h[1]=(3&e)<<4|f>>4,isNaN(f)?h[2]=h[3]=64:(g=b[++c],h[2]=(15&f)<<2|g>>6,h[3]=isNaN(g)?64:63&g),i+=B64.alphabet[h[0]]+B64.alphabet[h[1]]+B64.alphabet[h[2]]+B64.alphabet[h[3]];return i},decode:function(a){if(a.length%4)throw new Error("InvalidCharacterError: 'B64.decode' failed: The string to be decoded is not correctly encoded.");var b=B64.fromUtf8(a),c=0,d=b.length;if(B64.ieo){for(var e=[];d>c;)b[c]<128?e.push(String.fromCharCode(b[c++])):b[c]>191&&b[c]<224?e.push(String.fromCharCode((31&b[c++])<<6|63&b[c++])):e.push(String.fromCharCode((15&b[c++])<<12|(63&b[c++])<<6|63&b[c++]));return e.join("")}for(var e="";d>c;)e+=b[c]<128?String.fromCharCode(b[c++]):b[c]>191&&b[c]<224?String.fromCharCode((31&b[c++])<<6|63&b[c++]):String.fromCharCode((15&b[c++])<<12|(63&b[c++])<<6|63&b[c++]);return e},toUtf8:function(a){var d,b=-1,c=a.length,e=[];if(/^[\x00-\x7f]*$/.test(a))for(;++b<c;)e.push(a.charCodeAt(b));else for(;++b<c;)d=a.charCodeAt(b),128>d?e.push(d):2048>d?e.push(192|d>>6,128|63&d):e.push(224|d>>12,128|63&d>>6,128|63&d);return e},fromUtf8:function(a){var c,b=-1,d=[],e=[,,];if(!B64.lookup){for(c=B64.alphabet.length,B64.lookup={};++b<c;)B64.lookup[B64.alphabet.charAt(b)]=b;b=-1}for(c=a.length;++b<c&&(e[0]=B64.lookup[a.charAt(b)],e[1]=B64.lookup[a.charAt(++b)],d.push(e[0]<<2|e[1]>>4),e[2]=B64.lookup[a.charAt(++b)],64!=e[2])&&(d.push((15&e[1])<<4|e[2]>>2),e[3]=B64.lookup[a.charAt(++b)],64!=e[3]);)d.push((3&e[2])<<6|e[3]);return d}};

    var html = 'ndnapps_product_review';
    var all_review = 'ndnapps_review_all';
    var blackList;    
    var array = [];
    var html_decode = B64.decode(html);
    console.log(ndn_config.shop+location.pathname);
    // var html_review = JSON.parse(B64.decode(all_review));
    if($(".grid-view-item__image-wrapper")[0]){   	
	    $(".grid-view-item__image-wrapper").each(function(index) {
	    	var _this = $(this);
	    	var string = _this.attr('id');
	    	var pro_id = string.match(/\d/g);
			pro_id = pro_id.join("");
			var url = ndn_config.public_path+'/ajax-totalreviews?&shop='+ndn_config.shop+'&product_id='+pro_id;
	        $.ajax({
			    type:'GET',
				url: url,
				processData: false,
				contentType: false,
				beforeSend:function(){
				},
				success:function(respon){
					if(respon.count != '0'){					
						var rating_total = +(Math.round(respon.total + "e+1")  + "e-1");	
						var rating_total_count = respon.count >1 ? '<span class="ndn-total-text">('+respon.count+' reviews)</span>' : '<span class="ndn-total-text">('+respon.count+' review)</span>';
						var add_rating_total = '<br><div class="ndn-rating-total"><div class="ndnapps-star-total"><span></span></div>'+rating_total_count+'</div>';
						_this.parents(".grid__item").find('.product-card__title').after(add_rating_total);
		    			_this.parents(".grid__item").find('.ndnapps-star-total span').css('width',rating_total/5*100+'%');
					}
				}
			});
	    });    	
    }
	if (document.querySelector('.grid-view-item') !== null){
		console.log('ok');
	}
    if($(".ndnapps-productreview-main")[0]){   	
	    $(".ndnapps-productreview-main").each(function(index) {	
		    var product_id = jQuery(this).data('id');
		    // var ndn_rv = html_review[product_id];
		    var array_li_ndn = '';
		    var count_rate1=0,count_rate2=0,count_rate3 = 0,count_rate4=0,count_rate5 =0;
		    // var image_review='';
		    var page_first = 1;
		    show_image_review = function(){
			    $('.portfolio').each(function(index) {
				  $(this).magnificPopup({
				    delegate: 'li',
				    type: 'image',
				    image: {
				      cursor: null,
				      titleSrc: 'title'
				    },
				    gallery: {
				      enabled: true,
				      preload: [0,1], // Will preload 0 - before current, and 1 after the current image
				      navigateByImgClick: true
						}
				  });
				});
			}
		   
		    // var total = count_rate1+count_rate2+count_rate3+count_rate4+count_rate5;
		    if(product_id !=''){
		    	var array_li = '<div class="ndn-sortreviews">'+
		    	'<select id="ndn-sort-selected" name="reviews_template">'+
		    	'<option value="time">'+ndn_config.translate_2+'</option>'+
		    	'<option value="oldest">'+ndn_config.translate_3+'</option>'+
		    	'<option value="rate">'+ndn_config.translate_4+'</option>'+
		    	'<option value="lowest">'+ndn_config.translate_5+'</option>'+
		    	'<option value="image">'+ndn_config.translate_6+'</option>'+
		    	'</select></div>'+
	    		'<div class="ndn-show-content_reviews"><ul class="review-block"></ul></div>';
		    	$(this).append('<div class="container bootstrap-ndnapps ndn-main-review">'+html_decode+'<div class="ndn-content-panigation">'+array_li+'</div></div>');
			    var html_rating_total = '';
			    var star_ratio = count_rate1 + (count_rate2*2) + (count_rate3*3) + (count_rate4*4) +(count_rate5*5);
			    $('#ndn-sort-selected').on('change', function () {
			    	page_first=1;
				    var selectVal = $("#ndn-sort-selected option:selected").val();
				    loadmore_reviews('1',selectVal,'','1');
				    $('.paginationjs-pages').find('.active').removeClass('active');
					$('.paginationjs-pages').find('.J-paginationjs-page[data-num="1"]').addClass('active');
					$('.J-paginationjs-next').removeClass('disabled');
					$('.paginationjs-prev').addClass('disabled');
				});
				  
		    }

		    jQuery("body").on("submit","#ndnapp-formreview", function(event){
	        	event.preventDefault();
	        	var html_submit_sucess = '<div class="ndnapps-thank-you">'+
				'<div class="title-thank">'+ndn_config.translate_1+'</div>'+
				'</div>';
	        	var href = $('#ndnapp-formreview').attr('action');
	          	var formData = new FormData($('form#ndnapp-formreview')[0]);
	          	var product_name = $('.product-single__title').text();
	          	formData.append('product_id',product_id);
	          	formData.append('product_name',product_name);
	          	jQuery.ajax({
				    url: href,
				    type: 'POST',
				    data: formData,
				    cache: false,
					processData: false,
			        contentType: false,
			        beforeSend: function (xhr) {
			        	$(".ndn-btn-send").append('<div id="loading-status" style="position: absolute;top: 50%;left: 50%;width: 18px;height:18px;margin-top: -11px;margin-left: -9px;"><img style="width: 100%;height: 100%" src="'+ndn_config.public_path+'/images/backend/status-loading.gif"></div>');
			        	$(".ndn-btn-send").css({'pointer-events':'none','opacity':'0.5'});
			        },
	                success:function(response){
	                	$('#loading-status').remove();
	                	$(".ndn-btn-send").css({'pointer-events':'unset','opacity':'unset'});
	                	if (response.type == 'success'){
	                		$('.ndn-write-review').css('display','none');
	                		$('#ndn-content-reviews').html(html_submit_sucess);
	                		$('html, body').animate({scrollTop: $("#ndn-content-reviews").offset().top}, 'slow');
	                	}
	                	if(response.type == 'recaptcha_false'){
	                		if ($('.recaptcha-error-message')[0]){
	            				return;
	            			}     				
	                		$('#feedback-recaptcha').after('<div class="recaptcha-error-message">'+response.message+'</div>');
	                	}
	                	if(response.type == 'danger'){
	                		alert(response.message);
	                	}
	                }
	        	});               	
	        }); 

	        get_total_rating=function(){
	        	var url = ndn_config.public_path+'/ajax-totalreviews?&shop='+ndn_config.shop+'&product_id='+product_id;
	        	$.ajax({
			      type:'GET',
				  url: url,
				  processData: false,
				  contentType: false,
				  beforeSend:function(){
				    },
				  success:function(respon){
				  	total_count = respon.count >1 ? '<span class="ndn-total-text">('+respon.count+' reviews)</span>' : '<span class="ndn-total-text">('+respon.count+' review)</span>';
				  	html_rating_total = '<div class="ndn-rating-total"><div class="ndnapps-star-total"><span></span></div>'+total_count+'</div>';
				  	if(respon.count=='0'){
				  		$('.ndn-ratio-around').remove();
				  		$('.ndn-total-number').html('0');
				  		$('.ndn-content-panigation').html('<div class="review-empty"><div class="ndn-noreview"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><div style="text-align:center">Be the first to review this item</div></div>');
				  	}else{
				  		$('.ndn-ratio-around').css('display','');
				  		$('.product-single__title').after(html_rating_total);
				  	}
					total_ratio = +(Math.round(respon.total + "e+1")  + "e-1");				
				    $('.ndnapps-star-total span').css('width',total_ratio/5*100+'%');
				    $('.ndnapps-star-rating span').css('width',total_ratio/5*100+'%');
				    $('.ndn-total-number').html(respon.count);

			    	total_count = respon.count >1 ? '<span class="ndn-total-text">('+respon.count+' reviews)</span>' : '<span class="ndn-total-text">('+respon.count+' review)</span>';
			    	html_rating_total = '<div class="ndn-rating-total"><div class="ndnapps-star-total"><span></span></div>'+total_count+'</div>';
				    $('#total_rate').html(total_ratio+'<small>/5</small>');
				    $('#total_rate1').html(respon.star_1);
				    $('#total_rate2').html(respon.star_2);
				    $('#total_rate3').html(respon.star_3);
				    $('#total_rate4').html(respon.star_4);
				    $('#total_rate5').html(respon.star_5);
				    $('.progress-bar-success').css('width',respon.star_5/respon.count*100+'%');
				    $('.progress-bar-primary').css('width',respon.star_4/respon.count*100+'%');
				    $('.progress-bar-info').css('width',respon.star_3/respon.count*100+'%');
				    $('.progress-bar-warning').css('width',respon.star_2/respon.count*100+'%');
				    $('.progress-bar-danger').css('width',respon.star_1/respon.count*100+'%');
				  }
				});
	        }
	        get_total_rating();

	        add_more_reviews = function(data,check){
	        	if(ndn_config.pagination=='page'){
	        		var page = '';
				    var active = '';
				    for (var i = 0; i < data.last_page; i++) {
				    	if(i==0){
				    		active='active';
				    	}else{
				    		active='';
				    	}
				    	page+='<li class="paginationjs-page J-paginationjs-page '+active+'" data-num="'+(i+1)+'"><a>'+(i+1)+'</a></li>';
				    }
				    if(data.last_page>1){				    	
					    var pagination_page = '<div id="ndn-pagination-container"><div class="paginationjs"><div class="paginationjs-pages"><ul><li class="paginationjs-prev disabled"><a>«</a></li>'+page+'<li class="paginationjs-next J-paginationjs-next" data-num="'+data.last_page+'" title="Next page"><a>»</a></li></ul></div></div></div>';
					  	if(check=='1'){
						  	$('.ndn-show-content_reviews').append(pagination_page);
					  	}
				    }
	        	}
	        	if(ndn_config.pagination=='loadmore'){
	        		if(data.last_page>1){	        			
		        		var button_loadmore = '<div class="ndn-show-loadmore" style="text-align:center"><button class="btn ndn-loadmore-reviews">Load More Reviews</button></div>';
		        		if(check=='1'){
			        		$('.ndn-show-content_reviews').append(button_loadmore);
			        	}
	        		}
	        	}
	        }

		    loadmore_reviews =function(page,order,check,page_first){
		    	var url_ajax = ndn_config.public_path+'/ajax-loadreviews?page='+page+'&order='+order+'&shop='+ndn_config.shop+'&product_id='+product_id;
			    var pagination = ndn_config.pagination;
			    $.ajax({
			      type:'GET',
				  url: url_ajax,
				  processData: false,
				  contentType: false,
				  beforeSend:function(){
				  	if(pagination=='page'){
					  	$(".ndn-show-content_reviews").slideUp();	
				  	}
				  },
				  success:function(data){
				    $(".ndn-show-content_reviews").slideDown();
				  	$('#loading-reviews_status').remove();
				  	$('.ndn-loadmore-reviews').removeClass('disabled');
				    var html_item = '';
				    if(page==data.last_page){
				    	$('.ndn-show-loadmore').css('display','none');
				    }else{
				    	$('.ndn-show-loadmore').css('display','');
				    }
				    $.each(data.data, function(index, item){
				    	switch(item.rate) {
						  case 1:
						    var star_icon = '★';
						    break;
						  case 2:
						    var star_icon = '★★';
						    break;
						  case 3:
						    var star_icon = '★★★';
						    break;
						  case 4:
						    var star_icon = '★★★★';
						    break;
						  case 5:
						    var star_icon = '★★★★★';
						    break;
						  default:
						}
				    	var cls_1 = '';
			    		var cls_2 = item.rate==2 || item.rate==3 || item.rate==4 || item.rate==5 ? 'ndn-star-active' : 'ndn-star-default';
			    		var cls_3 = item.rate==3 || item.rate==4 || item.rate==5 ? 'ndn-star-active' : 'ndn-star-default';
			    		var cls_4 = item.rate==4 || item.rate==5 ? 'ndn-star-active' : 'ndn-star-default';
			    		var cls_5 = item.rate==5 ? 'ndn-star-active' : 'ndn-star-default';
			    		var image_review='';
			    		var image_review_tpl='';
			    		if(item.rate==1){count_rate1 += 1}
			    		if(item.rate==2){count_rate2 += 1}
			    		if(item.rate==3){count_rate3 += 1}
			    		if(item.rate==4){count_rate4 += 1}
			    		if(item.rate==5){count_rate5 += 1}
		    			if(item.image !=null){
		    				var arr_image = JSON.parse(item.image);
		    				var count_img = arr_image.length > 1 ? '<span class="ndn-count-img">'+arr_image.length+'<i class="fa fa-camera"></i></span>' : '';
		    				for (var i = 0; i < arr_image.length; i++) {
		    					if(ndn_config.template == '3'){			    						
			    					if(i==0){
			    						image_review+='<li href="'+ndn_config.public_path+'/images/frontend/customer_images/'+item.id+'_'+arr_image[i]+'"><img class="ndn-img-rl" src="'+ndn_config.public_path+'/images/frontend/customer_images/'+item.id+'_'+arr_image[i]+'"/>'+count_img+'</li>';
			    					}else{
			    						image_review+='<li href="'+ndn_config.public_path+'/images/frontend/customer_images/'+item.id+'_'+arr_image[i]+'"></li>';
			    					}
		    					}else{
		    						image_review_tpl+='<li href="'+ndn_config.public_path+'/images/frontend/customer_images/'+item.id+'_'+arr_image[i]+'"><img class="ndn-img-rl" src="'+ndn_config.public_path+'/images/frontend/customer_images/'+item.id+'_'+arr_image[i]+'"/></li>';
		    					}
		    				}
		    				if(ndn_config.template == '1' || ndn_config.template == '2'){
		    					image_review ='<ul class="portfolio ndn-tpl2-img">'+image_review_tpl+'</ul>';
		    				}
		    			}else{
		    				image_review='';
		    			}
			    		var reply_image = item.reply.image != null ? ndn_config.public_path+'/images/backend/reply_images/'+item.reply.shopify_domain+'/'+item.reply.id+'_'+item.reply.image : '';
			    		var reply_shop = typeof item.reply.id != 'undefined' ? 
			    			'<div class="ndn-shop-reply">'+
						        '<div class="ndn-shopdetail">'+
						        '<img width="60px" src="'+ndn_config.public_path+'/css/backend/v2/assets/images/logo.png"/>'+item.reply.shopify_domain+
						        '</div>'+
						        '<div class="ndnshop-replycontent">'+item.reply.content+'</div>'+
						        '<ul class="ndn-image-reply portfolio"><li href="'+reply_image+'"><img class="ndn-img-rl" src="'+reply_image+'" /></li>'+
						        '</ul>'+
					        '</div>' : '';
			    		html_item+=ndn_reviews_template_replace;
			    		if(ndn_config.pagination=='page'){			    			
				    		$('.review-block').html(html_item);
			    		}				        
				    });
				    if(ndn_config.pagination=='loadmore'){
		    			if(page_first=='1'){
		    				$('.review-block').html(html_item);
		    			}else{
			    			$('.review-block').append(html_item);
		    			}
		    		}
		    		if(ndn_config.template == '3'){
		    			if(typeof data.data ==='undefined'){
		    				return;
		    			}
		    			if(data.data.length =='0'){
		    				return;
		    			}		        	
				        var masonry = $('.review-block');
					        masonry.masonry({
						    gutter : 15,
						    itemSelector : '.ndn-grid_item',
						    percentPosition : 'true',
						    fitWidth: true,
						});
				        $( masonry ).masonry( 'reloadItems' );
				        $( masonry ).masonry( 'layout' );
				        var masonry = $('.review-block');
				        var $grid = masonry.imagesLoaded( function() {
						  $grid.masonry({
						    itemSelector: '.ndn-grid_item',
						    percentPosition: true,
						  });
						  $( masonry ).masonry( 'reloadItems' );
				        	$( masonry ).masonry( 'layout' );
						});
			        }
			        show_image_review();
				    add_more_reviews(data,check);
				  }
			    });
		    }
		    loadmore_reviews('1','time','1','1');

		    jQuery("body").on("click",".ndn-rating-total", function(event){
				$('html, body').animate({scrollTop: $(".ndn-main-review").offset().top}, 'slow');
			});

		    jQuery("body").on("click",".paginationjs-page:not(.active)", function(event){
		    	event.preventDefault();
		    	var page_click =$(this).data('num');
		    	var selectVal = $("#ndn-sort-selected option:selected").val();
		    	var last_page = $('.J-paginationjs-next').data('num');
		    	loadmore_reviews(page_click,selectVal,'','');
		    	$('.paginationjs-pages').find('.active').removeClass('active');
		    	$(this).addClass('active');
		    	if(page_click==last_page){
		    		$('.J-paginationjs-next').addClass('disabled');
		    	}else{
		    		$('.J-paginationjs-next').removeClass('disabled');
		    	}
		    	if(page_click !=1){
		    		$('.paginationjs-prev').removeClass('disabled');
		    	}else{
		    		$('.paginationjs-prev').addClass('disabled');
		    	}
		    });
		    jQuery("body").on("click",".J-paginationjs-next:not(.disabled)", function(event){
		    	event.preventDefault();
		    	var page_now = $('.paginationjs-pages').find('.active').data('num');
		    	var page_next = page_now+1;
		    	var last_page = $('.J-paginationjs-next').data('num');
		    	var selectVal = $("#ndn-sort-selected option:selected").val();
				loadmore_reviews(page_next,selectVal,'','');
				$('.paginationjs-pages').find('.active').removeClass('active');
				$('.paginationjs-pages').find('.J-paginationjs-page[data-num="'+page_next+'"]').addClass('active');
				if(page_next == last_page){
					$(this).addClass('disabled');
				}
				$('.paginationjs-prev').removeClass('disabled');
		    });
		    jQuery("body").on("click",".paginationjs-prev:not(.disabled)", function(event){
		    	event.preventDefault();
		    	var page_now = $('.paginationjs-pages').find('.active').data('num');
		    	var page_prev = page_now-1;
		    	var selectVal = $("#ndn-sort-selected option:selected").val();
		    	if(page_prev==1){
		    		$(this).addClass('disabled');
		    	}
		    	$('.paginationjs-next').removeClass('disabled');
		    	$('.paginationjs-pages').find('.active').removeClass('active');
		    	$('.paginationjs-pages').find('.J-paginationjs-page[data-num="'+page_prev+'"]').addClass('active');
		    	loadmore_reviews(page_prev,selectVal,'','');
		    });

		    jQuery("body").on("click",".ndn-loadmore-reviews:not(.disabled)", function(event){
		    	$(this).addClass('disabled');
		    	page_first+=1;
		    	$(".ndn-loadmore-reviews").append('<div id="loading-reviews_status" style="position: absolute;top: 50%;left: 50%;width: 18px;height:18px;margin-top: -11px;margin-left: -9px;"><img style="width: 100%;height: 100%" src="'+ndn_config.public_path+'/images/backend/status-loading.gif"></div>');
		    	var selectVal = $("#ndn-sort-selected option:selected").val();
		    	loadmore_reviews(page_first,selectVal,'','');
		    });
		    if (window.File && window.FileList && window.FileReader) {
			    $("#file").on("change", function(e) {
			      var files = e.target.files,
			      filesLength = files.length;
			      for (var i = 0; i < filesLength; i++) {
			        var f = files[i]
			        var fileReader = new FileReader();
			        fileReader.onload = (function(e) {
			          var file = e.target;
			          $(".div-image-select").after("<span class=\"ndn-pip\">" +
			            "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
			            "<br/><span class=\"ndn-remove\"><i class=\"fa fa-times\" aria-hidden=\"true\"></span>" +
			            "</span>");
			          $(".ndn-remove").click(function(){
			            $(this).parent(".ndn-pip").remove();
			          });	
			          		          
			        });
			        fileReader.readAsDataURL(f);
			      }
			    });
			  } else {
			    alert("Your browser doesn't support to File API")
			  }
		});
    }
};
if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7)) {
    loadScript_review('//code.jquery.com/jquery-3.4.1.min.js', function(){
        NDNAPPS = jQuery.noConflict(true);
        NDNAPPS(document).ready(function() {
            show_Review_NDNAPPS(NDNAPPS);         
        });
    });
} else {
    jQuery(document).ready(function() {
        show_Review_NDNAPPS(jQuery);
    });     
}