(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(2),r=t.n(c),m=(t(14),t(16),t(3)),l=t(4),s=t(6),i=t(5),S=t(7),u=(t(18),function(e){function n(){var e,t;Object(m.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(o)))).state={heroTextStyle:"\n      0px 0px 0 rgba(255,0,255,0.9),\n      0px 0px 0 rgba(0,255,255,0.9),\n      0px 0px 0 rgba(255,255,0,0.9),\n      0px 0px 0 rgba(255,0,0,0.9)\n    "},t.onMouseMove=function(e){var n=t.state.hero,a=n.offsetWidth,o=n.offsetHeight,c=e.pageX/a*8-4,r=e.pageY/o*8-4;t.setOffset(c,r)},t.onDeviceMotion=function(e){var n=e.accelerationIncludingGravity,a=n.x/10*6,o=n.y/2.5,c=n.z/3;a<=c&&(a=c),t.setOffset(a,o)},t.setOffset=function(e,n){t.setState({heroTextStyle:"\n        ".concat(e,"px ").concat(n,"px 0 rgba(255,0,255,0.9),\n        ").concat(-1*e,"px ").concat(n,"px 0 rgba(255,255,0,0.9),\n        ").concat(e,"px ").concat(-1*n,"px 0 rgba(0,255,255,0.9),\n        ").concat(-1*e,"px ").concat(-1*n,"px 0 rgba(255,0,0,0.9)\n      ")})},t}return Object(S.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({hero:document.querySelector(".Home-hero")}),window.DeviceMotionEvent&&window.addEventListener("devicemotion",this.onDeviceMotion)}},{key:"render",value:function(){return o.a.createElement("div",{className:"Home"},o.a.createElement("div",{className:"Home-background"},o.a.createElement("div",{className:"Home-marquee"},o.a.createElement("span",null,"Coming Soon Coming Soon Coming Soon\xa0"),o.a.createElement("span",null,"Coming Soon Coming Soon Coming Soon\xa0")),o.a.createElement("div",{className:"Home-marquee Home-marquee__reverse"},o.a.createElement("span",null,"S/S 2019 S/S 2019 S/S 2019 S/S 2019\xa0"),o.a.createElement("span",null,"S/S 2019 S/S 2019 S/S 2019 S/S 2019\xa0")),o.a.createElement("div",{className:"Home-marquee"},o.a.createElement("span",null,"Coming Soon Coming Soon Coming Soon\xa0"),o.a.createElement("span",null,"Coming Soon Coming Soon Coming Soon\xa0")),o.a.createElement("div",{className:"Home-marquee Home-marquee__reverse"},o.a.createElement("span",null,"S/S 2019 S/S 2019 S/S 2019 S/S 2019\xa0"),o.a.createElement("span",null,"S/S 2019 S/S 2019 S/S 2019 S/S 2019\xa0"))),o.a.createElement("header",{className:"Home-hero",onMouseMove:this.onMouseMove},o.a.createElement("h1",{className:"Home-heroText",style:{textShadow:this.state.heroTextStyle}},"nelson chang"),o.a.createElement("a",{href:"mailto:nelsonchang@gmail.com",className:"Home-cta"},"contact")))}}]),n}(a.Component));r.a.render(o.a.createElement(u,null),document.getElementById("root"))},8:function(e,n,t){e.exports=t(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.2fa4d1de.chunk.js.map