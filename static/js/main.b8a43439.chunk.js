(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),i=a(4),r=a.n(i),s=(a(67),a(68),a(57)),c=a(58),l=a(60),d=a(59),u=a(23),h=a(61),m=a(30),p=a(28),v=a.n(p),f=(a(69),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).onMouseEnter=function(){a.gather||a.updateTweenData(),a.componentWillUnmount()},a.onMouseLeave=function(){a.gather&&a.updateTweenData(),a.interval=v.a.interval(a.updateTweenData,a.intervalTime)},a.createPointData=function(){var e=a.props,t=e.w,n=e.h,o=document.getElementById("canvas"),i=o.getContext("2d");i.clearRect(0,0,t,n),o.width=a.props.w,o.height=n;var r=new Image;r.onload=function(){i.drawImage(r,0,0,r.width,r.height,0,0,t,n);var e=i.getImageData(0,0,t,n).data;a.setDataToDom(e,t,n),a.dom.removeChild(o)},r.crossOrigin="anonymous",r.src=a.props.image},a.gatherData=function(){var e=a.state.children.map(function(e){return o.a.cloneElement(e,{animation:{x:0,y:0,opacity:1,scale:1,delay:500*Math.random(),duration:800,ease:"easeInOutQuint"}})});a.setState({children:e})},a.disperseData=function(){var e=a.dom.getBoundingClientRect(),t=a.sideBox.getBoundingClientRect(),n=t.top-e.top,i=t.left-e.left,r=a.state.children.map(function(t){return o.a.cloneElement(t,{animation:{x:Math.random()*e.width-i-t.props.style.left,y:Math.random()*e.height-n-t.props.style.top,opacity:.4*Math.random()+.1,scale:2.4*Math.random()+.1,duration:500*Math.random()+500,ease:"easeInOutQuint"}})});a.setState({children:r})},a.updateTweenData=function(){a.dom=r.a.findDOMNode(Object(u.a)(a)),a.sideBox=r.a.findDOMNode(a.sideBoxComp),(a.gather&&a.disperseData||a.gatherData)(),a.gather=!a.gather},a.state={},a.interval=null,a.gather=!0,a.intervalTime=9e3,a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.dom=r.a.findDOMNode(this),this.createPointData()}},{key:"componentWillUnmount",value:function(){v.a.clear(this.interval),this.interval=null}},{key:"setDataToDom",value:function(e,t,a){var n=this;this.pointArray=[];for(var i=this.props.pixSize,r=0;r<t;r+=i)for(var s=0;s<a;s+=i)e[4*(r+s*t)+3]>150&&this.pointArray.push({x:r,y:s});var c=[];this.pointArray.forEach(function(e,t){var a=Math.random()*n.props.pointSizeMin+n.props.pointSizeMin,i=.4*Math.random()+.1;c.push(o.a.createElement(m.a,{className:"point-wrapper",key:t,style:{left:e.x,top:e.y}},o.a.createElement(m.a,{className:"point",style:{width:a,height:a,opacity:i,backgroundColor:"rgb(".concat(Math.round(95*Math.random()+160),",255,255)")},animation:{y:10*(2*Math.random()-1)||5,x:5*(2*Math.random()-1)||2.5,delay:1e3*Math.random(),repeat:-1,duration:3e3,yoyo:!0,ease:"easeInOutQuad"}})))}),this.setState({children:c,boxAnim:{opacity:0,type:"from",duration:800}},function(){n.interval=v.a.interval(n.updateTweenData,n.intervalTime)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"logo-gather-demo-wrapper"},o.a.createElement("canvas",{id:"canvas"}),o.a.createElement(m.a,{animation:this.state.boxAnim,className:"right-side blur",onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,ref:function(t){e.sideBoxComp=t}},this.state.children))}}]),t}(o.a.Component));f.defaultProps={image:"https://zos.alipayobjects.com/rmsportal/gsRUrUdxeGNDVfO.svg",w:300,h:300,pixSize:20,pointSizeMin:10};a(114);var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(f,null),o.a.createElement("h1",null,"cs animation")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,a){e.exports=a(115)},67:function(e,t,a){},68:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},69:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.b8a43439.chunk.js.map