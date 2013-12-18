/*! doc 2013-12-18 */
define("common/page",["bui/common","common/link","bui/menu","common/demo","common/api"],function(e){var t=e("bui/common"),n=e("common/link"),i=e("bui/menu"),r=e("common/demo"),a=e("common/api"),o="prettyprint linenums",s=function(e){s.superclass.constructor.call(this,e)};return s.ATTRS={linkCls:{},api:{value:".J_API"},demoCls:{value:"page-demo"},demos:{value:[]}},t.extend(s,t.Base),t.augment(s,{init:function(){this._initDom(),this._initEvent()},_initDom:function(){this._initLinks(),this._initDemos(),this._initNavMenu(),this._initPretty(),this._initAPI()},_initAPI:function(){if(this._isHasAPI()){var e=this,n=[],i=$(e.get("api"));t.each(i,function(e){var t=new a({srcNode:e});t.render(),n.push(t)}),e.set("apis",n)}},_isHasAPI:function(){return $(this.get("api")).length},_initDemos:function(){var e=this,t=e.get("demos"),n=e.get("demoCls");$("."+n).each(function(e,n){var i=new r({srcNode:n});t.push(i)}),t.length&&e._renderDemos(t)},_getUnloadDemos:function(){var e=this,n=e.get("demos"),i=[];return t.each(n,function(e){e.get("rendered")||i.push(e)}),i},_renderDemos:function(e){t.each(e,function(e){if(!e.get("rendered")){var n=e.get("srcNode");t.isInVerticalView(n.offset().top)&&(e.render(),e.fetchSource())}})},_initNavMenu:function(){var e=this,t=$("h2,h3"),n=[];t.each(function(e,t){var i=$(t),r=i.attr("id"),a=i.is("h2")?"h2":"h3";r||(r="h"+e,i.attr("id",r)),n.push({id:r,href:"#"+r,text:i.text(),type:a})});var r=new i.Menu({render:"body",elCls:"nav-menu",itemTpl:'<a class="{type}" href="{href}">{text}</a>',children:n});r.render(),e.set("menu",r)},_initLinks:function(){var e=this,t=new n;t.init(),e.set("link",t)},_initPretty:function(){var e=$("pre");t.each(e,function(e){var t,n=$(e),i=n.children("textarea");n.addClass(o),t=i.length?i.html():n.html();var r,a=/^(\s+)/.exec(t);a&&(r=RegExp("("+a[0]+")(\\s*)","ig"),t=t.replace(r,"$2")),n.html(t)}),window.prettyPrint&&prettyPrint()},_initEvent:function(){function e(){var n=t._getUnloadDemos();n.length?t._renderDemos(n):$(window).off("scroll",e)}var t=this;$(window).on("unload",function(){t.destroy()}),$(window).on("scroll",e)},destroy:function(){var e=this,n=e.get("demos"),i=e.get("menu"),r=e.get("apis");t.each(n,function(e){e.destroy()}),t.each(r,function(e){e.destroy()}),i.destroy(),e.clearAttrVals()}}),s});