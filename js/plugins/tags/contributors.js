let ContributorsJS={requestAPI:(o,l,s)=>{let i=5;!function n(){new Promise((e,t)=>{let r=0,a=setTimeout(()=>{0===r&&(r=2,a=null,t("请求超时"),0==i)&&s()},5e3);fetch(o).then(function(t){if(2!==r&&(clearTimeout(a),e(t),a=null,r=1),t.ok)return t.json();throw new Error("Network response was not ok.")}).then(function(t){i=0,l(t)}).catch(function(t){0<i?(--i,setTimeout(()=>{n()},5e3)):s()})})}()},layout:n=>{let e=n.el;ContributorsJS.requestAPI(n.api,function(t){e.querySelector(".loading-wrap").remove();var a="";(t||[]).forEach((t,e)=>{var r=(r=(r='<div class="user-card">')+'<a class="card-link" target="_blank" rel="external noopener noreferrer"'+(' href="'+t.html_url+'">'))+('<img alt="'+t.login+'" src="'+(t.avatar_url||n.avatar)+'" onerror="errorImgAvatar(this)">');a+=r=(r+='<div class="name"><span>'+t.login+"</span></div>")+"</a>"+"</div>"}),e.querySelector(".group-body").innerHTML=a},function(){try{e.querySelector(".loading-wrap svg").remove(),e.querySelector(".loading-wrap p").innerText("加载失败，请稍后重试。")}catch(t){}})},start:()=>{for(var t=document.getElementsByClassName("contributorsjs-wrap"),e=0;e<t.length;e++){var r,a=t[e],n=a.getAttribute("api");null!=n&&((r=new Object).el=a,r.api=n,r.class=a.getAttribute("class"),r.avatar=volantis.GLOBAL_CONFIG.default.avatar,ContributorsJS.layout(r))}}};ContributorsJS.start(),document.addEventListener("pjax:complete",function(){ContributorsJS.start()});