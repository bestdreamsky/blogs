function fakePwd(){for(var e=document.getElementsByTagName("input"),r=[],t=0;t<e.length;t++){var s=e[t];"password"==s.type&&r.push(s)}for(var t=0;t<r.length;t++){var n=r[t],o=n.getAttribute("name"),u=document.createElement("input");u.setAttribute("type","password"),u.setAttribute("name",o),u.setAttribute("class","hide fake-pwd"),n.parentNode.insertBefore(u,n)}}!function(e,r){function t(e){return function(r){return{}.toString.call(r)=="[object "+e+"]"}}function s(){return k++}function n(e){return e.match(S)[0]}function o(e){for(e=e.replace(D,"/"),e=e.replace(P,"$1/");e.match(N);)e=e.replace(N,"/");return e}function u(e){var r=e.length-1,t=e.charCodeAt(r);return 35===t?e.substring(0,r):".js"===e.substring(r-2)||e.indexOf("?")>0||47===t?e:e+".js"}function i(e){var r=b.alias;return r&&w(r[e])?r[e]:e}function a(e){var r,t=b.paths;return t&&(r=e.match(_))&&w(t[r[1]])&&(e=t[r[1]]+r[2]),e}function l(e){var r=b.vars;return r&&e.indexOf("{")>-1&&(e=e.replace(I,function(e,t){return w(r[t])?r[t]:e})),e}function c(e){var r=b.map,t=e;if(r)for(var s=0,n=r.length;s<n;s++){var o=r[s];if(t=x(o)?o(e)||e:e.replace(o[0],o[1]),t!==e)break}return t}function f(e,r){var t,s=e.charCodeAt(0);if(G.test(e))t=e;else if(46===s)t=(r?n(r):b.cwd)+e;else if(47===s){var u=b.cwd.match(U);t=u?u[0]+e.substring(1):e}else t=b.base+e;return 0===t.indexOf("//")&&(t=location.protocol+t),o(t)}function y(e,r){if(!e)return"";e=i(e),e=a(e),e=i(e),e=l(e),e=i(e),e=u(e),e=i(e);var t=f(e,r);return t=i(t),t=c(t)}function p(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}function d(e,r,t,s){var n;try{importScripts(e)}catch(e){n=e}r(n)}function j(e,r,t,s){var n=J.createElement("script");t&&(n.charset=t),T(s)||n.setAttribute("crossorigin",s),h(n,r,e),n.async=!0,n.src=e,Z=n,re?ee.insertBefore(n,re):ee.appendChild(n),Z=null}function h(e,r,t){function s(t){e.onload=e.onerror=e.onreadystatechange=null,b.debug||ee.removeChild(e),e=null,r(t)}var n="onload"in e;n?(e.onload=s,e.onerror=function(){O("error",{uri:t,node:e}),s(!0)}):e.onreadystatechange=function(){/loaded|complete/.test(e.readyState)&&s()}}function v(){if(Z)return Z;if(te&&"interactive"===te.readyState)return te;for(var e=ee.getElementsByTagName("script"),r=e.length-1;r>=0;r--){var t=e[r];if("interactive"===t.readyState)return te=t}}function g(e){function r(){c=e.charAt(p++)}function t(){return/\s/.test(c)}function s(){return'"'==c||"'"==c}function n(){var t=p,s=c,n=e.indexOf(s,t);if(n==-1)p=d;else if("\\"!=e.charAt(n-1))p=n+1;else for(;p<d;)if(r(),"\\"==c)p++;else if(c==s)break;h&&(v.push(e.substring(t,p-1)),h=0)}function o(){for(p--;p<d;)if(r(),"\\"==c)p++;else{if("/"==c)break;if("["==c)for(;p<d;)if(r(),"\\"==c)p++;else if("]"==c)break}}function u(){return/[a-z_$]/i.test(c)}function i(){var r=e.slice(p-1),t=/^[\w$]+/.exec(r)[0];g={if:1,for:1,while:1,with:1}[t],j={break:1,case:1,continue:1,debugger:1,delete:1,do:1,else:1,false:1,if:1,in:1,instanceof:1,return:1,typeof:1,void:1}[t],y="return"==t,f={instanceof:1,delete:1,void:1,typeof:1,return:1}.hasOwnProperty(t),h=/^require\s*(?:\/\*[\s\S]*?\*\/\s*)?\(\s*(['"]).+?\1\s*[),]/.test(r),h?(t=/^require\s*(?:\/\*[\s\S]*?\*\/\s*)?\(\s*['"]/.exec(r)[0],p+=t.length-2):p+=/^[\w$]+(?:\s*\.\s*[\w$]+)*/.exec(r)[0].length-1}function a(){return/\d/.test(c)||"."==c&&/\d/.test(e.charAt(p))}function l(){var r,t=e.slice(p-1);r="."==c?/^\.\d+(?:E[+-]?\d*)?\s*/i.exec(t)[0]:/^0x[\da-f]*/i.test(t)?/^0x[\da-f]*\s*/i.exec(t)[0]:/^\d+\.?\d*(?:E[+-]?\d*)?\s*/i.exec(t)[0],p+=r.length-1,j=0}if(e.indexOf("require")==-1)return[];for(var c,f,y,p=0,d=e.length,j=1,h=0,v=[],g=0,q=[],m=[];p<d;)if(r(),t())!y||"\n"!=c&&"\r"!=c||(f=0,y=0);else if(s())n(),j=1,y=0,f=0;else if("/"==c)if(r(),"/"==c)p=e.indexOf("\n",p),p==-1&&(p=e.length);else if("*"==c){var b=e.indexOf("\n",p);p=e.indexOf("*/",p),p==-1?p=d:p+=2,y&&b!=-1&&b<p&&(f=0,y=0)}else j?(o(),j=0,y=0,f=0):(p--,j=1,y=0,f=1);else if(u())i();else if(a())l(),y=0,f=0;else if("("==c)q.push(g),j=1,y=0,f=1;else if(")"==c)j=q.pop(),y=0,f=0;else if("{"==c)y&&(f=1),m.push(f),y=0,j=1;else if("}"==c)f=m.pop(),j=!f,y=0;else{var E=e.charAt(p);";"==c?f=0:"-"==c&&"-"==E||"+"==c&&"+"==E||"="==c&&">"==E?(f=0,p++):f=1,j="]"!=c,y=0}return v}function q(e,r){this.uri=e,this.dependencies=r||[],this.deps={},this.status=0,this._entry=[]}if(!e.seajs){var m=e.seajs={version:"3.0.1"},b=m.data={},E=t("Object"),w=t("String"),C=Array.isArray||t("Array"),x=t("Function"),T=t("Undefined"),k=0,A=b.events={};m.on=function(e,r){var t=A[e]||(A[e]=[]);return t.push(r),m},m.off=function(e,r){if(!e&&!r)return A=b.events={},m;var t=A[e];if(t)if(r)for(var s=t.length-1;s>=0;s--)t[s]===r&&t.splice(s,1);else delete A[e];return m};var O=m.emit=function(e,r){var t=A[e];if(t){t=t.slice();for(var s=0,n=t.length;s<n;s++)t[s](r)}return m},S=/[^?#]*\//,D=/\/\.\//g,N=/\/[^\/]+\/\.\.\//,P=/([^:\/])\/+\//g,_=/^([^\/:]+)(\/.+)$/,I=/{([^{]+)}/g,G=/^\/\/.|:\//,U=/^.*?\/\/.*?\//;m.resolve=y;var B,F,R="undefined"==typeof window&&"undefined"!=typeof importScripts&&x(importScripts),L=/^(about|blob):/,$=!location.href||L.test(location.href)?"":n(location.href);if(R){var X;try{var z=new Error;throw z}catch(e){X=e.stack.split("\n")}X.shift();for(var M,V=/.*?((?:http|https|file)(?::\/{2}[\w]+)(?:[\/|\.]?)(?:[^\s"]*)).*?/i,H=/(.*?):\d+:\d+\)?$/;X.length>0;){var K=X.shift();if(M=V.exec(K),null!=M)break}var W;if(null!=M)var W=H.exec(M[1])[1];F=W,B=n(W||$),""===$&&($=B)}else{var J=document,Q=J.scripts,Y=J.getElementById("seajsnode")||Q[Q.length-1];F=p(Y),B=n(F||$)}if(R)m.request=d;else{var Z,J=document,ee=J.head||J.getElementsByTagName("head")[0]||J.documentElement,re=ee.getElementsByTagName("base")[0];m.request=j}var te,se,ne=m.cache={},oe={},ue={},ie={},ae=q.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6,ERROR:7};q.prototype.resolve=function(){for(var e=this,r=e.dependencies,t=[],s=0,n=r.length;s<n;s++)t[s]=q.resolve(r[s],e.uri);return t},q.prototype.pass=function(){for(var e=this,r=e.dependencies.length,t=0;t<e._entry.length;t++){for(var s=e._entry[t],n=0,o=0;o<r;o++){var u=e.deps[e.dependencies[o]];u.status<ae.LOADED&&!s.history.hasOwnProperty(u.uri)&&(s.history[u.uri]=!0,n++,u._entry.push(s),u.status===ae.LOADING&&u.pass())}n>0&&(s.remain+=n-1,e._entry.shift(),t--)}},q.prototype.load=function(){var e=this;if(!(e.status>=ae.LOADING)){e.status=ae.LOADING;var r=e.resolve();O("load",r);for(var t=0,s=r.length;t<s;t++)e.deps[e.dependencies[t]]=q.get(r[t]);if(e.pass(),e._entry.length)return void e.onload();var n,o={};for(t=0;t<s;t++)n=ne[r[t]],n.status<ae.FETCHING?n.fetch(o):n.status===ae.SAVED&&n.load();for(var u in o)o.hasOwnProperty(u)&&o[u]()}},q.prototype.onload=function(){var e=this;e.status=ae.LOADED;for(var r=0,t=(e._entry||[]).length;r<t;r++){var s=e._entry[r];0===--s.remain&&s.callback()}delete e._entry},q.prototype.error=function(){var e=this;e.onload(),e.status=ae.ERROR},q.prototype.exec=function(){function e(r){var s=t.deps[r]||q.get(e.resolve(r));if(s.status==ae.ERROR)throw new Error("module was broken: "+s.uri);return s.exec()}var t=this;if(t.status>=ae.EXECUTING)return t.exports;if(t.status=ae.EXECUTING,t._entry&&!t._entry.length&&delete t._entry,!t.hasOwnProperty("factory"))return void(t.non=!0);var n=t.uri;e.resolve=function(e){return q.resolve(e,n)},e.async=function(r,t){return q.use(r,t,n+"_async_"+s()),e};var o=t.factory,u=x(o)?o.call(t.exports={},e,t.exports,t):o;return u===r&&(u=t.exports),delete t.factory,t.exports=u,t.status=ae.EXECUTED,O("exec",t),t.exports},q.prototype.fetch=function(e){function r(){m.request(o.requestUri,o.onRequest,o.charset,o.crossorigin)}function t(e){delete oe[u],ue[u]=!0,se&&(q.save(n,se),se=null);var r,t=ie[u];for(delete ie[u];r=t.shift();)e===!0?r.error():r.load()}var s=this,n=s.uri;s.status=ae.FETCHING;var o={uri:n};O("fetch",o);var u=o.requestUri||n;return!u||ue.hasOwnProperty(u)?void s.load():oe.hasOwnProperty(u)?void ie[u].push(s):(oe[u]=!0,ie[u]=[s],O("request",o={uri:n,requestUri:u,onRequest:t,charset:x(b.charset)?b.charset(u):b.charset,crossorigin:x(b.crossorigin)?b.crossorigin(u):b.crossorigin}),void(o.requested||(e?e[o.requestUri]=r:r())))},q.resolve=function(e,r){var t={id:e,refUri:r};return O("resolve",t),t.uri||m.resolve(t.id,r)},q.define=function(e,t,s){var n=arguments.length;1===n?(s=e,e=r):2===n&&(s=t,C(e)?(t=e,e=r):t=r),!C(t)&&x(s)&&(t="undefined"==typeof g?[]:g(s.toString()));var o={id:e,uri:q.resolve(e),deps:t,factory:s};if(!R&&!o.uri&&J.attachEvent&&"undefined"!=typeof v){var u=v();u&&(o.uri=u.src)}O("define",o),o.uri?q.save(o.uri,o):se=o},q.save=function(e,r){var t=q.get(e);t.status<ae.SAVED&&(t.id=r.id||e,t.dependencies=r.deps||[],t.factory=r.factory,t.status=ae.SAVED,O("save",t))},q.get=function(e,r){return ne[e]||(ne[e]=new q(e,r))},q.use=function(r,t,s){var n=q.get(s,C(r)?r:[r]);n._entry.push(n),n.history={},n.remain=1,n.callback=function(){for(var r=[],s=n.resolve(),o=0,u=s.length;o<u;o++)r[o]=ne[s[o]].exec();t&&t.apply(e,r),delete n.callback,delete n.history,delete n.remain,delete n._entry},n.load()},m.use=function(e,r){return q.use(e,r,b.cwd+"_use_"+s()),m},q.define.cmd={},e.define=q.define,m.Module=q,b.fetchedList=ue,b.cid=s,m.require=function(e){var r=q.get(q.resolve(e));return r.status<ae.EXECUTING&&(r.onload(),r.exec()),r.exports},b.base=B,b.dir=B,b.loader=F,b.cwd=$,b.charset="utf-8",m.config=function(e){for(var r in e){var t=e[r],s=b[r];if(s&&E(s))for(var n in t)s[n]=t[n];else C(s)?t=s.concat(t):"base"===r&&("/"!==t.slice(-1)&&(t+="/"),t=f(t)),b[r]=t}return O("config",e),m}}}(this),location.href.indexOf("?dev")>0?seajs.config({base:"/assets/js/",alias:{jquery:"jquery/jquery-1.11.1.js",amazeUI:"amazeui.js",public:"public.js",tools:"common/tools.js","jquery.validate":"jquery/plugins/jquery.validate.js","jquery.CountDown":"jquery/plugins/jquery.CountDown.js","jquery.fullpage":"jquery/plugins/jquery.fullPage.js","jquery.placeholder":"jquery/plugins/jquery.placeholder.js","jquery.loadingBtn":"jquery/plugins/jquery.loadingBtn.js","jquery.antiTamper":"jquery/plugins/jquery.antiTamper.js","jquery.lidyToolTip":"jquery/plugins/jquery.lidyToolTip.js","jquery.toolTip":"jquery/plugins/jquery.toolTip.js","jquery.select":"jquery/plugins/jquery.select.js","jquery.FormControl":"jquery/plugins/jquery.FormControl.js","jquery.ScrollFloat":"jquery/plugins/jquery.ScrollFloat.js","jquery.scrollSpy":"jquery/plugins/jquery.scrollSpy.js","jquery.InputNum":"jquery/plugins/jquery.InputNum.js",layer:"layer/layer.js",My97DatePicker:"My97DatePicker/WdatePicker.js",plupload:"jquery/plugins/plupload/plupload.full.min.js",bootstrap:"bootstrap/bootstrap.js",passwordCtrl:"passguardctrl/PassGuardCtrl.js",passwordCtrlConfig:"jquery/common/PassGuardCtrl.js","jquery.thickbox":"passguardctrl/thickbox.js",securityCert:"securityCert/TopCertKit-3.1.0.1.js",chooseBank:"choosebank.js",pay:"jquery/common/pay.js"}}):seajs.config({base:"/assets/js/",alias:{jquery:"jquery/jquery-1.11.1.js",amazeUI:"amazeui.js",public:"public.js",tools:"common/tools.js","jquery.validate":"jquery/plugins/jquery.validate.js","jquery.CountDown":"jquery/plugins/jquery.CountDown.js","jquery.fullpage":"jquery/plugins/jquery.fullPage.js","jquery.placeholder":"jquery/plugins/jquery.placeholder.js","jquery.loadingBtn":"jquery/plugins/jquery.loadingBtn.js","jquery.antiTamper":"jquery/plugins/jquery.antiTamper.js","jquery.lidyToolTip":"jquery/plugins/jquery.lidyToolTip.js","jquery.toolTip":"jquery/plugins/jquery.toolTip.js","jquery.select":"jquery/plugins/jquery.select.js","jquery.FormControl":"jquery/plugins/jquery.FormControl.js","jquery.ScrollFloat":"jquery/plugins/jquery.ScrollFloat.js","jquery.scrollSpy":"jquery/plugins/jquery.scrollSpy.js","jquery.InputNum":"jquery/plugins/jquery.InputNum.js",layer:"layer/layer.js",My97DatePicker:"My97DatePicker/WdatePicker.js",plupload:"jquery/plugins/plupload/plupload.full.min.js",bootstrap:"bootstrap/bootstrap.js",passwordCtrl:"passguardctrl/PassGuardCtrl.js",passwordCtrlConfig:"jquery/common/PassGuardCtrl.js","jquery.thickbox":"passguardctrl/thickbox.js",securityCert:"securityCert/TopCertKit-3.1.0.1.js",chooseBank:"choosebank.js",pay:"jquery/common/pay.js"}});var layer="";fakePwd(),seajs.use(["jquery","layer"],function(e,r){r.config({path:"/assets/js/layer/"}),layer=r});