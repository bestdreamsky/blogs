!function(e,t){"use strict";var i,o,n={getPath:function(){var e=document.scripts,t=e[e.length-1],i=t.src;if(!t.getAttribute("merge"))return i.substring(0,i.lastIndexOf("/")+1)}(),enter:function(e){13===e.keyCode&&e.preventDefault()},config:{},end:{},btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},a={v:"2.0",ie6:!!e.ActiveXObject&&!e.XMLHttpRequest,index:0,path:n.getPath,config:function(e,t){var o=0;return e=e||{},a.cache=n.config=i.extend(n.config,e),a.path=n.config.path||a.path,"string"==typeof e.extend&&(e.extend=[e.extend]),a.use("skin/layer.css",e.extend&&e.extend.length>0?function i(){var n=e.extend;a.use(n[n[o]?o:o-1],o<n.length?function(){return++o,i}():t)}():t),this},use:function(e,t,o){var n=i("head")[0],e=e.replace(/\s/g,""),r=/\.css$/.test(e),s=document.createElement(r?"link":"script"),l="layui_layer_"+e.replace(/\.|\//g,"");return a.path?(r&&(s.rel="stylesheet"),s[r?"href":"src"]=/^http:\/\//.test(e)?e:a.path+e,s.id=l,i("#"+l)[0]||n.appendChild(s),function e(){(r?1989===parseInt(i("#"+l).css("width")):a[o||l])?function(){t&&t();try{r||n.removeChild(s)}catch(e){}}():setTimeout(e,100)}(),this):void 0},ready:function(e,t){var o="function"==typeof e;return o&&(t=e),a.config(i.extend(n.config,function(){return o?{}:{path:e}}()),t),this},alert:function(e,t,o){var n="function"==typeof t;return n&&(o=t),a.open(i.extend({content:e,yes:o},n?{}:t))},confirm:function(e,t,o,r){var s="function"==typeof t;return s&&(r=o,o=t),a.open(i.extend({content:e,btn:n.btn,yes:o,cancel:r},s?{}:t))},msg:function(e,o,r){var l="function"==typeof o,f=n.config.skin,c=(f?f+" "+f+"-msg":"")||"layui-layer-msg",u=s.anim.length-1;return l&&(r=o),a.open(i.extend({content:e,time:3e3,shade:!1,skin:c,title:!1,closeBtn:!1,btn:!1,end:r},l&&!n.config.skin?{skin:c+" layui-layer-hui",shift:u}:function(){return o=o||{},(-1===o.icon||o.icon===t&&!n.config.skin)&&(o.skin=c+" "+(o.skin||"layui-layer-hui")),o}()))},load:function(e,t){return a.open(i.extend({type:3,icon:e||0,shade:.01},t))},tips:function(e,t,o){return a.open(i.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,maxWidth:210},o))}},r=function(e){var t=this;t.index=++a.index,t.config=i.extend({},t.config,n.config,e),t.creat()};r.pt=r.prototype;var s=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];s.anim=["layui-anim","layui-anim-01","layui-anim-02","layui-anim-03","layui-anim-04","layui-anim-05","layui-anim-06"],r.pt.config={type:0,shade:.3,fix:!0,move:s[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,shift:0,icon:-1,scrollbar:!0,tips:2},r.pt.vessel=function(e,t){var i=this,o=i.index,a=i.config,r=a.zIndex+o,l="object"==typeof a.title,f=a.maxmin&&(1===a.type||2===a.type),c=a.title?'<div class="layui-layer-title" style="'+(l?a.title[1]:"")+'">'+(l?a.title[0]:a.title)+"</div>":"";return a.zIndex=r,t([a.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+o+'" times="'+o+'" style="'+("z-index:"+(r-1)+"; background-color:"+(a.shade[1]||"#000")+"; opacity:"+(a.shade[0]||a.shade)+"; filter:alpha(opacity="+(100*a.shade[0]||100*a.shade)+");")+'"></div>':"",'<div class="'+s[0]+" "+(s.anim[a.shift]||"")+(" layui-layer-"+n.type[a.type])+(0!=a.type&&2!=a.type||a.shade?"":" layui-layer-border")+" "+(a.skin||"")+'" id="'+s[0]+o+'" type="'+n.type[a.type]+'" times="'+o+'" showtime="'+a.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+r+"; width:"+a.area[0]+";height:"+a.area[1]+(a.fix?"":";position:absolute;")+'">'+(e&&2!=a.type?"":c)+'<div class="layui-layer-content'+(0==a.type&&-1!==a.icon?" layui-layer-padding":"")+(3==a.type?" layui-layer-loading"+a.icon:"")+'">'+(0==a.type&&-1!==a.icon?'<i class="layui-layer-ico layui-layer-ico'+a.icon+'"></i>':"")+(1==a.type&&e?"":a.content||"")+'</div><span class="layui-layer-setwin">'+function(){var e=f?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return a.closeBtn&&(e+='<a class="layui-layer-ico '+s[7]+" "+s[7]+(a.title?a.closeBtn:4==a.type?"1":"2")+'" href="javascript:;"></a>'),e}()+"</span>"+(a.btn?function(){var e="";"string"==typeof a.btn&&(a.btn=[a.btn]);for(var t=0,i=a.btn.length;i>t;t++)e+='<a class="'+s[6]+t+'">'+a.btn[t]+"</a>";return'<div class="'+s[6]+'">'+e+"</div>"}():"")+"</div>"],c),i},r.pt.creat=function(){var e=this,t=e.config,r=e.index,l=t.content,f="object"==typeof l;switch("string"==typeof t.area&&(t.area="auto"===t.area?["",""]:[t.area,""]),t.type){case 0:t.btn="btn"in t?t.btn:n.btn[0],a.closeAll("dialog");break;case 2:var l=t.content=f?t.content:[t.content||"http://sentsin.com?from=layer","auto"];t.content='<iframe scrolling="'+(t.content[1]||"auto")+'" allowtransparency="true" id="'+s[4]+r+'" name="'+s[4]+r+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+t.content[0]+'"></iframe>';break;case 3:t.title=!1,t.closeBtn=!1,-1===t.icon&&0===t.icon,a.closeAll("loading");break;case 4:f||(t.content=[t.content,"body"]),t.follow=t.content[1],t.content=t.content[0]+'<i class="layui-layer-TipsG"></i>',t.title=!1,t.shade=!1,t.fix=!1,t.tips="object"==typeof t.tips?t.tips:[t.tips,!0],t.tipsMore||a.closeAll("tips")}e.vessel(f,function(o,n){i("body").append(o[0]),f?function(){2==t.type||4==t.type?function(){i("body").append(o[1])}():function(){l.parents("."+s[0])[0]||(l.show().addClass("layui-layer-wrap").wrap(o[1]),i("#"+s[0]+r).find("."+s[5]).before(n))}()}():i("body").append(o[1]),e.layero=i("#"+s[0]+r),t.scrollbar||s.html.css("overflow","hidden").attr("layer-full",r)}).auto(r),2==t.type&&a.ie6&&e.layero.find("iframe").attr("src",l[0]),i(document).off("keydown",n.enter).on("keydown",n.enter),4==t.type?e.tips():e.offset(),t.fix&&o.on("resize",function(){e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+%$/.test(t.area[1]))&&e.auto(r),4==t.type&&e.tips()}),t.time<=0||setTimeout(function(){a.close(e.index)},t.time),e.move().callback()},r.pt.auto=function(e){function t(e){e=r.find(e),e.height(l[1]-f-c-2*(0|parseFloat(e.css("padding"))))}var n=this,a=n.config,r=i("#"+s[0]+e);""===a.area[0]&&a.maxWidth>0&&(/MSIE 7/.test(navigator.userAgent)&&a.btn&&r.width(r.innerWidth()),r.outerWidth()>a.maxWidth&&r.width(a.maxWidth));var l=[r.innerWidth(),r.innerHeight()],f=r.find(s[1]).outerHeight()||0,c=r.find("."+s[6]).outerHeight()||0;switch(a.type){case 2:t("iframe");break;default:""===a.area[1]?a.fix&&l[1]>=o.height()&&(l[1]=o.height(),t("."+s[5])):t("."+s[5])}return n},r.pt.offset=function(){var e=this,t=e.config,i=e.layero,n=[i.outerWidth(),i.outerHeight()],a="object"==typeof t.offset;e.offsetTop=(o.height()-n[1])/2,e.offsetLeft=(o.width()-n[0])/2,a?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):"auto"!==t.offset&&(e.offsetTop=t.offset,"rb"===t.offset&&(e.offsetTop=o.height()-n[1],e.offsetLeft=o.width()-n[0])),t.fix||(e.offsetTop=/%$/.test(e.offsetTop)?o.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?o.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=o.scrollTop(),e.offsetLeft+=o.scrollLeft()),i.css({top:e.offsetTop,left:e.offsetLeft})},r.pt.tips=function(){var e=this,t=e.config,n=e.layero,a=[n.outerWidth(),n.outerHeight()],r=i(t.follow);r[0]||(r=i("body"));var l={width:r.outerWidth(),height:r.outerHeight(),top:r.offset().top,left:r.offset().left},f=n.find(".layui-layer-TipsG"),c=t.tips[0];t.tips[1]||f.remove(),l.autoLeft=function(){l.left+a[0]-o.width()>0?(l.tipLeft=l.left+l.width-a[0],f.css({right:12,left:"auto"})):l.tipLeft=l.left},l.where=[function(){l.autoLeft(),l.tipTop=l.top-a[1]-10,f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",t.tips[1])},function(){l.tipLeft=l.left+l.width+10,l.tipTop=l.top,f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",t.tips[1])},function(){l.autoLeft(),l.tipTop=l.top+l.height+10,f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",t.tips[1])},function(){l.tipLeft=l.left-a[0]-10,l.tipTop=l.top,f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",t.tips[1])}],l.where[c-1](),1===c?l.top-(o.scrollTop()+a[1]+16)<0&&l.where[2]():2===c?o.width()-(l.left+l.width+a[0]+16)>0||l.where[3]():3===c?l.top-o.scrollTop()+l.height+a[1]+16-o.height()>0&&l.where[0]():4===c&&a[0]+16-l.left>0&&l.where[1](),n.find("."+s[5]).css({"background-color":t.tips[1],"padding-right":t.closeBtn?"30px":""}),n.css({left:l.tipLeft,top:l.tipTop})},r.pt.move=function(){var e=this,t=e.config,n={setY:0,moveLayer:function(){var e=n.layero,t=parseInt(e.css("margin-left")),i=parseInt(n.move.css("left"));0===t||(i-=t),"fixed"!==e.css("position")&&(i-=e.parent().offset().left,n.setY=0),e.css({left:i,top:parseInt(n.move.css("top"))-n.setY})}},a=e.layero.find(t.move);return t.move&&a.attr("move","ok"),a.css({cursor:t.move?"move":"auto"}),i(t.move).on("mousedown",function(e){if(e.preventDefault(),"ok"===i(this).attr("move")){n.ismove=!0,n.layero=i(this).parents("."+s[0]);var a=n.layero.offset().left,r=n.layero.offset().top,l=n.layero.outerWidth()-6,f=n.layero.outerHeight()-6;i("#layui-layer-moves")[0]||i("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:'+a+"px; top:"+r+"px; width:"+l+"px; height:"+f+'px; z-index:2147483584"></div>'),n.move=i("#layui-layer-moves"),t.moveType&&n.move.css({visibility:"hidden"}),n.moveX=e.pageX-n.move.position().left,n.moveY=e.pageY-n.move.position().top,"fixed"!==n.layero.css("position")||(n.setY=o.scrollTop())}}),i(document).mousemove(function(e){if(n.ismove){var i=e.pageX-n.moveX,a=e.pageY-n.moveY;if(e.preventDefault(),!t.moveOut){n.setY=o.scrollTop();var r=o.width()-n.move.outerWidth(),s=n.setY;0>i&&(i=0),i>r&&(i=r),s>a&&(a=s),a>o.height()-n.move.outerHeight()+n.setY&&(a=o.height()-n.move.outerHeight()+n.setY)}n.move.css({left:i,top:a}),t.moveType&&n.moveLayer(),i=a=r=s=null}}).mouseup(function(){try{n.ismove&&(n.moveLayer(),n.move.remove(),t.moveEnd&&t.moveEnd()),n.ismove=!1}catch(e){n.ismove=!1}}),e},r.pt.callback=function(){function e(){var e=r.cancel&&r.cancel(t.index);e===!1||a.close(t.index)}var t=this,o=t.layero,r=t.config;t.openLayer(),r.success&&(2==r.type?o.find("iframe")[0].onload=function(){this.className="",r.success(o,t.index)}:r.success(o,t.index)),a.ie6&&t.IE6(o),o.find("."+s[6]).children("a").on("click",function(){var n=i(this).index();r["btn"+(n+1)]&&r["btn"+(n+1)](t.index,o),0===n?r.yes?r.yes(t.index,o):a.close(t.index):1===n?e():r["btn"+(n+1)]||a.close(t.index)}),o.find("."+s[7]).on("click",e),r.shadeClose&&i("#layui-layer-shade"+t.index).on("click",function(){a.close(t.index)}),o.find(".layui-layer-min").on("click",function(){a.min(t.index,r),r.min&&r.min(o)}),o.find(".layui-layer-max").on("click",function(){i(this).hasClass("layui-layer-maxmin")?(a.restore(t.index),r.restore&&r.restore(o)):(a.full(t.index,r),r.full&&r.full(o))}),r.end&&(n.end[t.index]=r.end)},n.reselect=function(){i.each(i("select"),function(e,t){var o=i(this);o.parents("."+s[0])[0]||1==o.attr("layer")&&i("."+s[0]).length<1&&o.removeAttr("layer").show(),o=null})},r.pt.IE6=function(e){function t(){e.css({top:a+(n.config.fix?o.scrollTop():0)})}var n=this,a=e.offset().top;t(),o.scroll(t),i("select").each(function(e,t){var o=i(this);o.parents("."+s[0])[0]||"none"===o.css("display")||o.attr({layer:"1"}).hide(),o=null})},r.pt.openLayer=function(){var e=this;a.zIndex=e.config.zIndex,a.setTop=function(e){var t=function(){a.zIndex++,e.css("z-index",a.zIndex+1)};return a.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",t),a.zIndex}},n.record=function(e){var t=[e.outerWidth(),e.outerHeight(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},n.rescollbar=function(e){s.html.attr("layer-full")==e&&(s.html[0].style.removeProperty?s.html[0].style.removeProperty("overflow"):s.html[0].style.removeAttribute("overflow"),s.html.removeAttr("layer-full"))},a.getChildFrame=function(e,t){return t=t||i("."+s[4]).attr("times"),i("#"+s[0]+t).find("iframe").contents().find(e)},a.getFrameIndex=function(e){return i("#"+e).parents("."+s[4]).attr("times")},a.iframeAuto=function(e){if(e){var t=a.getChildFrame("body",e).outerHeight(),o=i("#"+s[0]+e),n=o.find(s[1]).outerHeight()||0,r=o.find("."+s[6]).outerHeight()||0;o.css({height:t+n+r}),o.find("iframe").css({height:t})}},a.iframeSrc=function(e,t){i("#"+s[0]+e).find("iframe").attr("src",t)},a.style=function(e,t){var o=i("#"+s[0]+e),a=o.attr("type"),r=o.find(s[1]).outerHeight()||0,l=o.find("."+s[6]).outerHeight()||0;(a===n.type[1]||a===n.type[2])&&(o.css(t),a===n.type[2]&&o.find("iframe").css({height:parseFloat(t.height)-r-l}))},a.min=function(e,t){var o=i("#"+s[0]+e),r=o.find(s[1]).outerHeight()||0;n.record(o),a.style(e,{width:180,height:r,overflow:"hidden"}),o.find(".layui-layer-min").hide(),"page"===o.attr("type")&&o.find(s[4]).hide(),n.rescollbar(e)},a.restore=function(e){var t=i("#"+s[0]+e),o=t.attr("area").split(",");t.attr("type"),a.style(e,{width:parseFloat(o[0]),height:parseFloat(o[1]),top:parseFloat(o[2]),left:parseFloat(o[3]),overflow:"visible"}),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"===t.attr("type")&&t.find(s[4]).show(),n.rescollbar(e)},a.full=function(e){var t,r=i("#"+s[0]+e);n.record(r),s.html.attr("layer-full")||s.html.css("overflow","hidden").attr("layer-full",e),clearTimeout(t),t=setTimeout(function(){var t="fixed"===r.css("position");a.style(e,{top:t?0:o.scrollTop(),left:t?0:o.scrollLeft(),width:o.width(),height:o.height()}),r.find(".layui-layer-min").hide()},100)},a.title=function(e,t){var o=i("#"+s[0]+(t||a.index)).find(s[1]);o.html(e)},a.close=function(e){var t=i("#"+s[0]+e),o=t.attr("type");if(t[0]){if(o===n.type[1]&&"object"===t.attr("conType")){t.children(":not(."+s[5]+")").remove();for(var r=0;2>r;r++)t.find(".layui-layer-wrap").unwrap().hide()}else{if(o===n.type[2])try{var l=i("#"+s[4]+e)[0];l.contentWindow.document.write(""),l.contentWindow.close(),t.find("."+s[5])[0].removeChild(l)}catch(e){}t[0].innerHTML="",t.remove()}i("#layui-layer-moves, #layui-layer-shade"+e).remove(),a.ie6&&n.reselect(),n.rescollbar(e),i(document).off("keydown",n.enter),"function"==typeof n.end[e]&&n.end[e](),delete n.end[e]}},a.closeAll=function(e){i.each(i("."+s[0]),function(){var t=i(this),o=e?t.attr("type")===e:1;o&&a.close(t.attr("times")),o=null})},n.run=function(){i=jQuery,o=i(e),s.html=i("html"),a.open=function(e){var t=new r(e);return t.index}},"function"==typeof define?define(function(){return n.run(),a}):function(){e.layer=a,n.run(),a.use("skin/layer.css")}()}(window);