(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},18:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(2),r=t.n(c),l=(t(14),t(16),t(3)),s=t(4),m=t(6),i=t(5),u=t(7),S=(t(18),function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(o)))).state={heroTextStyle:"\n      0px 0px 0 rgba(255,0,255,0.9),\n      0px 0px 0 rgba(0,255,255,0.9),\n      0px 0px 0 rgba(255,255,0,0.9),\n      0px 0px 0 rgba(255,0,0,0.9)\n    "},t.onMouseMove=function(e){var n=t.state.hero,a=n.offsetWidth,o=n.offsetHeight,c=e.pageX/a*8-4,r=e.pageY/o*8-4;t.setOffset(c,r)},t.onDeviceMotion=function(e){var n=e.accelerationIncludingGravity,a=n.x/10*8,o=n.y/10*8;t.setOffset(a,o)},t.setOffset=function(e,n){t.setState({heroTextStyle:"\n        ".concat(e,"px ").concat(n,"px 0 rgba(255,0,255,0.9),\n        ").concat(-1*e,"px ").concat(n,"px 0 rgba(0,255,255,0.9),\n        ").concat(e,"px ").concat(-1*n,"px 0 rgba(255,255,0,0.9),\n        ").concat(-1*e,"px ").concat(-1*n,"px 0 rgba(255,0,0,0.9)\n      ")})},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({hero:document.querySelector(".Home-hero")}),window.DeviceMotionEvent&&window.addEventListener("devicemotion",this.onDeviceMotion)}},{key:"render",value:function(){return o.a.createElement("div",{className:"Home"},o.a.createElement("div",{className:"Home-background"},o.a.createElement("div",{className:"Home-marquee"},o.a.createElement("span",null,"Coming Soon Coming Soon\xa0"),o.a.createElement("span",null,"Coming Soon Coming Soon\xa0")),o.a.createElement("div",{className:"Home-marquee Home-marquee__reverse"},o.a.createElement("span",null,"S/S 2019 S/S 2019 S/S 2019\xa0"),o.a.createElement("span",null,"S/S 2019 S/S 2019 S/S 2019\xa0")),o.a.createElement("div",{className:"Home-marquee"},o.a.createElement("span",null,"Coming Soon Coming Soon\xa0"),o.a.createElement("span",null,"Coming Soon Coming Soon\xa0")),o.a.createElement("div",{className:"Home-marquee Home-marquee__reverse"},o.a.createElement("span",null,"S/S 2019 S/S 2019 S/S 2019\xa0"),o.a.createElement("span",null,"S/S 2019 S/S 2019 S/S 2019\xa0"))),o.a.createElement("header",{className:"Home-hero",onMouseMove:this.onMouseMove},o.a.createElement("h1",{className:"Home-heroText",style:{textShadow:this.state.heroTextStyle}},"Nelson Chang.")))}}]),n}(a.Component));r.a.render(o.a.createElement(S,null),document.getElementById("root"))},8:function(e,n,t){e.exports=t(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.a1792c5d.chunk.js.map