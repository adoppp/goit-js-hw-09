!function(){var t=document.querySelector("[data-start]");console.log(t);var e=document.querySelector("[data-stop]");console.log(e);var o=document.body;var r=null;function a(){o.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}t.addEventListener("click",(function(){r=setInterval(a,1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),e.setAttribute("disabled","true"),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.0389ad6a.js.map
