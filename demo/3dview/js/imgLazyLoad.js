!function(e,t){var n=document.querySelectorAll(".wrap")[0];(function(){function t(t){mouseX=.001*-(-(.5*e.innerWidth)+t.pageX),mouseY=.05*-(-(.5*e.innerHeight)+t.pageY),mouseZ=-radius-(Math.abs(-(.5*e.innerHeight)+t.pageY)-100)}function a(){addX+=mouseX,TweenMax.to(n,1,{rotationY:addX,rotationX:mouseY,ease:Quint.easeOut}),TweenMax.set(n,{z:mouseZ})}function o(){var o=(n.offsetWidth,20);radius=Math.round(250/Math.tan(Math.PI/o)),e.addEventListener("mousemove",t,!1),ticker=setInterval(a,1e3/60)}return{init:function(){o()}}})()}(window);