!function(d){function c(t){return void 0!==t&&(t instanceof Array||!(t instanceof Object)&&"[object Array]"==Object.prototype.toString.call(t)||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))}d.slider=function(t,e){var s=d(t);return s.data("jslider")||s.data("jslider",new i(t,e)),s.data("jslider")},d.fn.slider=function(n,o){var r,a=arguments;function l(t){return void 0!==t}function h(t){return null!=t}return this.each(function(){var t=d.slider(this,n);if("string"==typeof n)switch(n){case"value":if(l(a[1])&&l(a[2]))h((e=t.getPointers())[0])&&h(a[1])&&(e[0].set(a[1]),e[0].setIndexOver()),h(e[1])&&h(a[2])&&(e[1].set(a[2]),e[1].setIndexOver());else if(l(a[1])){h((e=t.getPointers())[0])&&h(a[1])&&(e[0].set(a[1]),e[0].setIndexOver())}else r=t.getValue();break;case"prc":if(l(a[1])&&l(a[2]))h((e=t.getPointers())[0])&&h(a[1])&&(e[0]._set(a[1]),e[0].setIndexOver()),h(e[1])&&h(a[2])&&(e[1]._set(a[2]),e[1].setIndexOver());else if(l(a[1])){var e;h((e=t.getPointers())[0])&&h(a[1])&&(e[0]._set(a[1]),e[0].setIndexOver())}else r=t.getPrcValue();break;case"calculatedValue":var s=t.getValue().split(";");r="";for(var i=0;i<s.length;i++)r+=(0<i?";":"")+t.nice(s[i]);break;case"skin":t.setSkin(a[1])}else n||o||(c(r)||(r=[]),r.push(t))}),c(r)&&1==r.length&&(r=r[0]),r||this};var s={settings:{from:1,to:10,step:1,smooth:!0,limits:!0,round:0,format:{format:"#,##0.##"},value:"5;7",dimension:""},className:"jslider",selector:".jslider-",template:tmpl('<span class="<%=className%>"><table><tr><td><div class="<%=className%>-bg"><i class="l"></i><i class="f"></i><i class="r"></i><i class="v"></i></div><div class="<%=className%>-pointer" ></div><div class="<%=className%>-pointer <%=className%>-pointer-to" ></div><div class="<%=className%>-label"><span><%=settings.from%></span></div><div class="<%=className%>-label <%=className%>-label-to"><span><%=settings.to%></span><%=settings.dimension%></div><div class="<%=className%>-value"><span></span><%=settings.dimension%></div><div class="<%=className%>-value <%=className%>-value-to"><span></span><%=settings.dimension%></div><div class="<%=className%>-scale"><%=scale%></div></td></tr></table></span>')};function i(){return this.init.apply(this,arguments)}function n(){Draggable.apply(this,arguments)}i.prototype.init=function(t,e){this.settings=d.extend(!0,{},s.settings,e||{}),this.inputNode=d(t).hide(),this.settings.interval=this.settings.to-this.settings.from,this.settings.value=this.inputNode.attr("value"),this.settings.calculate&&d.isFunction(this.settings.calculate)&&(this.nice=this.settings.calculate),this.settings.onstatechange&&d.isFunction(this.settings.onstatechange)&&(this.onstatechange=this.settings.onstatechange),this.is={init:!1},this.o={},this.create()},i.prototype.onstatechange=function(){},i.prototype.create=function(){var t,i=this;this.domNode=d(s.template({className:s.className,settings:{from:this.nice(this.settings.from),to:this.nice(this.settings.to),dimension:this.settings.dimension},scale:this.generateScale()})),this.inputNode.after(this.domNode),this.drawScale(),this.settings.skin&&0<this.settings.skin.length&&this.setSkin(this.settings.skin),this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},d.extend(this.o,{pointers:{},labels:{0:{o:this.domNode.find(s.selector+"value").not(s.selector+"value-to")},1:{o:this.domNode.find(s.selector+"value").filter(s.selector+"value-to")}},limits:{0:this.domNode.find(s.selector+"label").not(s.selector+"label-to"),1:this.domNode.find(s.selector+"label").filter(s.selector+"label-to")}}),d.extend(this.o.labels[0],{value:this.o.labels[0].o.find("span")}),d.extend(this.o.labels[1],{value:this.o.labels[1].o.find("span")}),i.settings.value.split(";")[1]||(this.settings.single=!0,this.domNode.addDependClass("single")),i.settings.limits||this.domNode.addDependClass("limitless"),this.domNode.find(s.selector+"pointer").each(function(t){var e=i.settings.value.split(";")[t];if(e){i.o.pointers[t]=new n(this,t,i);var s=i.settings.value.split(";")[t-1];s&&new Number(e)<new Number(s)&&(e=s),e=(e=e<i.settings.from?i.settings.from:e)>i.settings.to?i.settings.to:e,i.o.pointers[t].set(e,!0)}}),this.o.value=this.domNode.find(".v"),this.is.init=!0,d.each(this.o.pointers,function(t){i.redraw(this)}),t=this,d(window).resize(function(){t.onresize()})},i.prototype.setSkin=function(t){this.skin_&&this.domNode.removeDependClass(this.skin_,"_"),this.domNode.addDependClass(this.skin_=t,"_")},i.prototype.setPointersIndex=function(t){d.each(this.getPointers(),function(t){this.index(t)})},i.prototype.getPointers=function(){return this.o.pointers},i.prototype.generateScale=function(){if(this.settings.scale&&0<this.settings.scale.length){for(var t="",e=this.settings.scale,s=Math.round(100/(e.length-1)*10)/10,i=0;i<e.length;i++)t+='<span style="left: '+i*s+'%">'+("|"!=e[i]?"<ins>"+e[i]+"</ins>":"")+"</span>";return t}return""},i.prototype.drawScale=function(){this.domNode.find(s.selector+"scale span ins").each(function(){d(this).css({marginLeft:-d(this).outerWidth()/2})})},i.prototype.onresize=function(){var e=this;this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},d.each(this.o.pointers,function(t){e.redraw(this)})},i.prototype.update=function(){this.onresize(),this.drawScale()},i.prototype.limits=function(t,e){if(!this.settings.smooth){var s=100*this.settings.step/this.settings.interval;t=Math.round(t/s)*s}var i=this.o.pointers[1-e.uid];return i&&e.uid&&t<i.value.prc&&(t=i.value.prc),i&&!e.uid&&t>i.value.prc&&(t=i.value.prc),t<0&&(t=0),100<t&&(t=100),Math.round(10*t)/10},i.prototype.redraw=function(t){if(!this.is.init)return!1;this.setValue(),this.o.pointers[0]&&this.o.pointers[1]&&this.o.value.css({left:this.o.pointers[0].value.prc+"%",width:this.o.pointers[1].value.prc-this.o.pointers[0].value.prc+"%"}),this.o.labels[t.uid].value.html(this.nice(t.value.origin)),this.redrawLabels(t)},i.prototype.redrawLabels=function(t){function e(t,e,s){return e.margin=-e.label/2,label_left=e.border+e.margin,label_left<0&&(e.margin-=label_left),e.border+e.label/2>i.sizes.domWidth?(e.margin=0,e.right=!0):e.right=!1,t.o.css({left:s+"%",marginLeft:e.margin,right:"auto"}),e.right&&t.o.css({left:"auto",right:0}),e}var i=this,s=this.o.labels[t.uid],n=t.value.prc,o={label:s.o.outerWidth(),right:!1,border:n*this.sizes.domWidth/100};if(!this.settings.single){var r=this.o.pointers[1-t.uid],a=this.o.labels[r.uid];switch(t.uid){case 0:o.border+o.label/2>a.o.offset().left-this.sizes.domOffset.left?(a.o.css({visibility:"hidden"}),a.value.html(this.nice(r.value.origin)),s.o.css({visibility:"visible"}),n=(r.value.prc-n)/2+n,r.value.prc!=t.value.prc&&(s.value.html(this.nice(t.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(r.value.origin)),o.label=s.o.outerWidth(),o.border=n*this.sizes.domWidth/100)):a.o.css({visibility:"visible"});break;case 1:o.border-o.label/2<a.o.offset().left-this.sizes.domOffset.left+a.o.outerWidth()?(a.o.css({visibility:"hidden"}),a.value.html(this.nice(r.value.origin)),s.o.css({visibility:"visible"}),n=(n-r.value.prc)/2+r.value.prc,r.value.prc!=t.value.prc&&(s.value.html(this.nice(r.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(t.value.origin)),o.label=s.o.outerWidth(),o.border=n*this.sizes.domWidth/100)):a.o.css({visibility:"visible"})}}(o=e(s,o,n),a)&&(o=e(a,o={label:a.o.outerWidth(),right:!1,border:r.value.prc*this.sizes.domWidth/100},r.value.prc));this.redrawLimits()},i.prototype.redrawLimits=function(){if(this.settings.limits){var t=[!0,!0];for(key in this.o.pointers)if(!this.settings.single||0==key){var e=this.o.pointers[key],s=this.o.labels[e.uid],i=s.o.offset().left-this.sizes.domOffset.left;i<(n=this.o.limits[0]).outerWidth()&&(t[0]=!1);var n=this.o.limits[1];i+s.o.outerWidth()>this.sizes.domWidth-n.outerWidth()&&(t[1]=!1)}for(var o=0;o<t.length;o++)t[o]?this.o.limits[o].fadeIn("fast"):this.o.limits[o].fadeOut("fast")}},i.prototype.setValue=function(){var t=this.getValue();this.inputNode.attr("value",t),this.onstatechange.call(this,t)},i.prototype.getValue=function(){if(!this.is.init)return!1;var e=this,s="";return d.each(this.o.pointers,function(t){null==this.value.prc||isNaN(this.value.prc)||(s+=(0<t?";":"")+e.prcToValue(this.value.prc))}),s},i.prototype.getPrcValue=function(){if(!this.is.init)return!1;var e="";return d.each(this.o.pointers,function(t){null==this.value.prc||isNaN(this.value.prc)||(e+=(0<t?";":"")+this.value.prc)}),e},i.prototype.prcToValue=function(t){if(this.settings.heterogeneity&&0<this.settings.heterogeneity.length)for(var e=this.settings.heterogeneity,s=0,i=this.settings.from,n=0;n<=e.length;n++){if(e[n])var o=e[n].split("/");else o=[100,this.settings.to];if(o[0]=new Number(o[0]),o[1]=new Number(o[1]),s<=t&&t<=o[0])var r=i+(t-s)*(o[1]-i)/(o[0]-s);s=o[0],i=o[1]}else r=this.settings.from+t*this.settings.interval/100;return this.round(r)},i.prototype.valueToPrc=function(t,e){if(this.settings.heterogeneity&&0<this.settings.heterogeneity.length)for(var s=this.settings.heterogeneity,i=0,n=this.settings.from,o=0;o<=s.length;o++){if(s[o])var r=s[o].split("/");else r=[100,this.settings.to];if(r[0]=new Number(r[0]),r[1]=new Number(r[1]),n<=t&&t<=r[1])var a=e.limits(i+(t-n)*(r[0]-i)/(r[1]-n));i=r[0],n=r[1]}else a=e.limits(100*(t-this.settings.from)/this.settings.interval);return a},i.prototype.round=function(t){return t=Math.round(t/this.settings.step)*this.settings.step,t=this.settings.round?Math.round(t*Math.pow(10,this.settings.round))/Math.pow(10,this.settings.round):Math.round(t)},i.prototype.nice=function(t){return(t=t.toString().replace(/,/gi,".").replace(/ /gi,"")).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")},(n.prototype=new Draggable).oninit=function(t,e,s){this.uid=e,this.parent=s,this.value={},this.settings=this.parent.settings},n.prototype.onmousedown=function(t){this._parent={offset:this.parent.domNode.offset(),width:this.parent.domNode.width()},this.ptr.addDependClass("hover"),this.setIndexOver()},n.prototype.onmousemove=function(t,e){var s=this._getPageCoords(t);this._set(this.calc(s.x))},n.prototype.onmouseup=function(t){this.parent.settings.callback&&d.isFunction(this.parent.settings.callback)&&this.parent.settings.callback.call(this.parent,this.parent.getValue()),this.ptr.removeDependClass("hover")},n.prototype.setIndexOver=function(){this.parent.setPointersIndex(1),this.index(2)},n.prototype.index=function(t){this.ptr.css({zIndex:t})},n.prototype.limits=function(t){return this.parent.limits(t,this)},n.prototype.calc=function(t){return this.limits(100*(t-this._parent.offset.left)/this._parent.width)},n.prototype.set=function(t,e){this.value.origin=this.parent.round(t),this._set(this.parent.valueToPrc(t,this),e)},n.prototype._set=function(t,e){e||(this.value.origin=this.parent.prcToValue(t)),this.value.prc=t,this.ptr.css({left:t+"%"}),this.parent.redraw(this)}}(jQuery);