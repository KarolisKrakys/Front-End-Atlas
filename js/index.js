function init(){if(window.location.hash=='#feedback'){activateFeedback();}
var el=document.getElementById('ybug');if(el){el.addEventListener("click",activateFeedback,false);}
showLangbar();startCarousel();addCloudref();};window.onload=init;function addCloudref(){const urlHost=window.location.host;if(!urlHost.startsWith("localhost")&&urlHost!="www.maptiler.com"){document.querySelectorAll("[href*='cloud.maptiler.com']").forEach((el)=>{el.href+="?ref="+urlHost});}}
function activateFeedback(){window.ybug_settings={'id':'br1zf1f23m'};var ybug=document.createElement('script');ybug.type='text/javascript';ybug.async=false;ybug.src='https://ybug.io/api/v1/button/'+window.ybug_settings.id+'.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ybug,s);setTimeout(function(){Ybug.open();},1000);};function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return "";}
function switchClass(elId,classId,remove){var element=document.getElementById(elId);if(element){if(element.classList.contains(classId)){element.classList.remove(classId);}else{element.classList.add(classId);}}}
function removeClass(elId,classId){var element=document.getElementById(elId);if(element){element.classList.remove(classId);}}
function addClass(elId,classId){var element=document.getElementById(elId);if(element){element.classList.add(classId);}}
const originalTheme=document.querySelector("meta[name=theme-color]").getAttribute("content");function changeThemeColor(){var metaThemeColor=document.querySelector("meta[name=theme-color]");if(metaThemeColor.getAttribute('content')=="#ffffff"){metaThemeColor.setAttribute("content",originalTheme);}else{metaThemeColor.setAttribute("content","#ffffff");}}
function startCarousel(){var mapCarousel=document.getElementById('map-carousel');if(mapCarousel){var mapSplide=new Splide('#map-carousel',{type:'loop',perPage:6,perMove:1,arrows:false,pagination:false,autoplay:true,breakpoints:{1100:{perPage:4,},640:{perPage:2,},}})
mapSplide.mount();}
var opensourceCarousel=document.getElementById('opensource-carousel');if(opensourceCarousel){var mapSplide=new Splide('#opensource-carousel',{type:'loop',perPage:3,pagination:false,autoplay:true,breakpoints:{1100:{perPage:2,},640:{perPage:1,},}})
mapSplide.mount();}
var homeCarousel=document.getElementById('homeCarousel')
if(homeCarousel){var homeSplide=new Splide('#homeCarousel',{type:'fade',rewind:true,fixedHeight:'450px',autoplay:true,arrows:false,classes:{pagination:'splide__pagination home-pagination',page:'splide__pagination__page home-pagination-btn',},})
homeSplide.on('mounted',function(){const paginationBtn=document.querySelectorAll(".home-pagination-btn");paginationBtn.forEach((button,i)=>{if(i>4&&i<8){button.classList.add("bg-desktop")}else if(i>7){button.classList.add("bg-server")}else{button.classList.add("bg-cloud")}});});homeSplide.mount();}
var overviewCarousel=document.querySelector('.overview-carousel');if(overviewCarousel){var overviewSplide=new Splide('.overview-carousel',{type:'loop',pagination:false,autoplay:true,fixedHeight:'450px',})
overviewSplide.mount();}}
function showLangbar(){var langbarDisplayed=false;var userLang=window.navigator.userLanguage||window.navigator.language;if(userLang.includes('CH')){var language='ch';}else{var language=userLang.substring(0,2);}
if(getCookie('langbarClosed')!='1'){if(['ch','cs','fr','nl','ja','de','ar','es'].includes(language)){setTimeout(()=>{langbarDisplay(language);},7000);window.onscroll=()=>{langbarDisplay(language);};}}
function langbarDisplay(language){var langbar=document.getElementById('langbar-'+language);if(langbar){if(!langbarDisplayed){removeClass('langbarMain','mb-n15');removeClass('langbar-'+language,'d-none');langbarDisplayed=true;}}}
var langbarClosebtn=document.getElementById('langbarClosebtn');if(langbarClosebtn){langbarClosebtn.addEventListener('click',function(){this.parentElement.classList.add('mb-n15');setCookie('langbarClosed',1,30);});}}
var subNav=document.getElementById('subnav-products-btn');if(subNav){subNav.addEventListener('click',function(){document.querySelector('.subnav-products').classList.toggle('open');});}
var navMobileBtn=document.querySelector('#nav-mobile-btn');if(navMobileBtn){navMobileBtn.onclick=function(){var navMobileNav=document.getElementById('nav-mobile-nav');var navMobileBtn=document.getElementById('nav-mobile-btn');if(navMobileNav.className==='active'){navMobileNav.className='';navMobileBtn.className='';}else{navMobileNav.className='active';navMobileBtn.className='active';}};}