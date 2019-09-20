(window.webpackJsonpygp=window.webpackJsonpygp||[]).push([[0],{115:function(e){e.exports=JSON.parse("{}")},199:function(e,t,a){e.exports=a(533)},204:function(e,t,a){},477:function(e,t){},479:function(e,t){},532:function(e,t,a){},533:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(44),l=a.n(o),i=(a(204),a(7)),c=a(8),s=a(10),u=a(9),p=a(11),d=a(12),m=a(76),v=a(115),h={};for(var f in m)m.hasOwnProperty(f)&&(h[f]=g(m[f],""));function g(e,t){var a={};for(var n in t&&(t+="."),e)if(e.hasOwnProperty(n)){var r=e[n];if("object"===typeof r){var o=g(r,t+n);a=Object.assign(a,o)}else a[t+n]=r}return a}Object.keys(v).length>0&&(h["*"]=g(v,"")),function e(t){for(var a in Object.freeze(t),t)"object"==typeof t&&t.hasOwnProperty(a)&&e(t[a])}(h);var O=h,b=a(72),y={TEXT:{FOREGROUND:"#a9b7c6",BACKGROUND:"#2b2b2b",NAME:"Text"},DEFAULT_KEYWORD:{FOREGROUND:"#cc7832",NAME:"Keywords"},DEFAULT_STRING:{FOREGROUND:"#6a8759",NAME:"String literals"},DEFAULT_LINE_COMMENT:{FOREGROUND:"#808080",NAME:"Line comment"}};function E(e){return Object.assign({},e)}var j=Object(b.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{jsonOptions:O,xmlOptions:y},t=arguments.length>1?arguments[1]:void 0,a=t.update;if("reload"===t.type)return JSON.parse(JSON.stringify(e));if("json"===t.type){if(a&&a.value.length<=6){var n=E(e.jsonOptions);return n[a.group][a.name]="#"+a.value,{jsonOptions:n,xmlOptions:e.xmlOptions}}}else if("xml"===t.type&&a){if(a.value&&6===a.value.length){var r=E(e.xmlOptions);return r[a.group][a.name]="#"+a.value,console.log("state updated "+a.name+" "+a.value),{xmlOptions:r,jsonOptions:e.jsonOptions}}if("FONT_TYPE"===a.name){var o=E(e.xmlOptions);return o[a.group][a.name]=a.fontType,{xmlOptions:o,jsonOptions:e.jsonOptions}}}return e}));var N=function(){function e(t,a){var n=this;Object(i.a)(this,e),this.width=t,this.height=a,this.loaded=1;var r={};!function(e,t,a){for(var n in e)if(e.hasOwnProperty(n)&&(!t||"*"!==n)){var r=e[n];for(var o in r)if(r.hasOwnProperty(o)&&!a.call(null,n+"."+o,r[o]))return}}(O,!0,(function(e,o){n.loaded++;var l=new OffscreenCanvas(t,a),i=new Image;return i.addEventListener("load",(function(){n.updateStateIfPossible();var o=l.getContext("2d");o.drawImage(i,0,0);for(var c=o.getImageData(0,0,t,a).data,s=new Uint8ClampedArray(n.width*n.height),u=0;u<n.width;u++)for(var p=0;p<n.height;p++){var d=p*n.width+u;s[d]=0===c[4*d]?1:0}r[e]=s}),!1),i.src="canvas-data/"+e+".png",!0})),this.layerCanvas=r;var o=new Image;o.addEventListener("load",(function(){n.updateStateIfPossible(),n.frontLayer=o}),!1),o.src="canvas-data/FrontLayer.png"}return Object(c.a)(e,[{key:"updateStateIfPossible",value:function(){0===--this.loaded&&j.dispatch({type:"reload"})}},{key:"render",value:function(e,t){var a=this,n=(Date.now(),new Uint8ClampedArray(this.width*this.height*4));e:for(var r in t)if(t.hasOwnProperty(r)&&"*"!==r){var o=t[r];for(var l in o)if(o.hasOwnProperty(l)){var i=r+"."+l,c=this.layerCanvas[i];if(!c)continue e;for(var s=0;s<this.width;s++)for(var u=0;u<this.height;u++){var p=u*this.width+s;if(1===c[p]){var d=o[l];n[4*p]=parseInt(d.substr(1,2),16),n[4*p+1]=parseInt(d.substr(3,2),16),n[4*p+2]=parseInt(d.substr(5,2),16),n[4*p+3]=255}}}}var m=new ImageData(n,this.width,this.height);createImageBitmap(m).then((function(t){e.drawImage(t,0,0),a.frontLayer&&e.drawImage(a.frontLayer,0,0)}))}}]),e}();function C(e,t){var a=e[t],n="color:".concat(a.FOREGROUND||"#FFFFFF",";");return null!=a.FONT_TYPE&&"1"===a.FONT_TYPE&&(n+="font-weight: bold;"),a.BACKGROUND&&(n+="background-color: ".concat(a.BACKGROUND,";")),n}var B=function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).containerWidth=973,n.containerHeight=623,n.canvasRenderer=new N(2*n.containerWidth,2*n.containerHeight),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"componentDidUpdate",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var e=this.refs.canvas;e.style.width=this.containerWidth+"px",e.style.height=this.containerHeight+"px";var t=e.getContext("2d");this.canvasRenderer.render(t,this.props.jsonOptions)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("canvas",{className:"canvas-ide-component",width:2*this.containerWidth,height:2*this.containerHeight,ref:"canvas"}))}}]),t}(r.a.Component),T=Object(d.b)((function(e){return{jsonOptions:e.jsonOptions}}))(B),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=function(e){var t="background-color: ".concat(function(e){return e.TEXT.BACKGROUND||"#000000"}(e),"; font-family:'Menlo Regular';font-weight:normal;font-size:14px;line-height:1.5;"),a=C(e,"DEFAULT_KEYWORD"),n=C(e,"DEFAULT_LINE_COMMENT"),r=C(e,"TEXT"),o=C(e,"DEFAULT_STRING");return'\n<div id="editor" style="'.concat(t,'">\n<pre><span style="').concat(a,'">package </span><span style="').concat(r,'">com.company</span><span class="s0">;</span>\n<span style="').concat(a,'">public class </span><span style="').concat(r,'">Main {</span>\n        <span style="').concat(a,'">public static void </span><span style="').concat(r,'">main(String[] args) {</span>\n            <span style="').concat(n,'">// write your code here</span>\n            <span style="').concat(r,'">System.out.println(</span><span style="').concat(o,'">&quot;Hello&quot;</span><span\n        style="').concat(r,'">)</span><span style="').concat(a,'">;</span>\n        <span style="').concat(r,'">}</span>\n<span style="').concat(r,'">}</span>\n</pre>\n</div>')}(this.props.xmlOptions);return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})}}]),t}(r.a.Component),w=Object(d.b)((function(e){return{xmlOptions:e.xmlOptions}}))(k),x=function(e){function t(e,a){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e,a))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(T,null))}}]),t}(r.a.Component),D=a(193);function F(e){return{update:function(t){e({update:t,type:t.updateType})}}}var S={position:"absolute",zIndex:"1000"},A={position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},U=function(e){function t(e,a){var n;Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).updateValue=function(e){e.preventDefault();var t=e.target.value;if(t!==n.state.value){var a={value:t};n.fireStateUpdate(a)}},n.fireStateUpdate=function(e){n.setState(e),n.props.update({name:n.name,value:e.value,group:n.group,updateType:n.updateType})},n.handleClick=function(){var e={value:n.state.value,displayColorPicker:!0};n.setState(e)},n.handlePickerChange=function(e){if(null!=e.hex){var t={value:e.hex.toUpperCase().substring(1)};n.fireStateUpdate(t,!1)}},n.handleClose=function(){var e={value:n.state.value,displayColorPicker:!1};n.fireStateUpdate(e,!1)},n.resetOption=function(){var e={value:n.schemaDefaultValue};n.fireStateUpdate(e)},n.colorId=e.colorId,n.name=e.name,n.schemaDefaultValue=null==e.schemaDefaultValue?null:e.schemaDefaultValue.substring(1),n.title=e.title||n.name,n.group=e.group,n.updateType=e.updateType;var r="string"==typeof e.colorId?e.colorId.substring(1):"";return n.state={value:r},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="#"+this.state.value,t=this.state.displayColorPicker?r.a.createElement("div",{style:S},r.a.createElement("div",{onMouseUp:this.handleClose,style:A}),r.a.createElement(D.ChromePicker,{color:e,onChangeComplete:this.handlePickerChange})):null,a={backgroundColor:e,borderColor:e};return r.a.createElement("div",null,r.a.createElement("small",{className:"form-text text-dark"},this.title),r.a.createElement("div",{className:"input-group color-picker"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{onClick:this.handleClick,className:"btn",type:"button",style:a},t)),r.a.createElement("input",{type:"text",className:"form-control form-control-sm color-property",value:this.state.value,onChange:this.updateValue}),null==this.schemaDefaultValue||this.state.value===this.schemaDefaultValue?null:r.a.createElement("a",{onClick:this.resetOption,href:"#"},r.a.createElement("small",null,"revert"))))}}]),t}(r.a.Component),I=Object(d.b)((function(e){return{xmlOptions:e.xmlOptions}}),F)(U),R=Object(d.b)((function(e){return{jsonOptions:e.jsonOptions}}),F)(U);function G(e,t,a,n){return r.a.createElement("div",{key:"group"+n+e,className:"card"},r.a.createElement("div",{className:"card-header",id:"heading"+n+e},r.a.createElement("button",{className:"btn btn-block text-left collapsed","data-toggle":"collapse","data-target":"#collapse"+n+e,"aria-expanded":"false","aria-controls":"collapse"+n+e},t,r.a.createElement("span",{className:"oi oi-chevron-bottom float-right"}))),r.a.createElement("div",{id:"collapse"+n+e,className:"collapse","aria-labelledby":"heading"+n+e,"data-parent":"#"+n},r.a.createElement("div",{className:"card-body"},a)))}var P="generalSettings",M=function(e){function t(e,a){var n;Object(i.a)(this,t);var o=(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).props.jsonOptions;n.resultGroups=[];var l=Object.keys(o).sort(),c=0,p=!0,d=!1,m=void 0;try{for(var v,h=l[Symbol.iterator]();!(p=(v=h.next()).done);p=!0){var f=v.value;c++;var g=o[f];if(null!=g){for(var b=Object.keys(g),y=[],E=0,j=0,N=b;j<N.length;j++){var C=N[j],B=O[f][C],T="general-item"+ ++E;y.push(r.a.createElement(I,{key:T,colorId:g[C],group:f,schemaDefaultValue:B,updateType:"json",name:C}))}n.resultGroups.push(G(c,f,y,P))}}}catch(k){d=!0,m=k}finally{try{p||null==h.return||h.return()}finally{if(d)throw m}}return n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"accordion",id:P},this.resultGroups))}}]),t}(r.a.Component),L=Object(d.b)((function(e){return{jsonOptions:e.jsonOptions}}))(M),_=a(537),K=a(536);var V=function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).updateValue=function(e){var t=e.target.checked;console.log("Value: "+t);var a={fontType:!0===t?"1":void 0};n.fireStateUpdate(a)},n.fireStateUpdate=function(e){n.setState(e),n.props.update({name:n.name,fontType:e.fontType,group:n.group,updateType:n.updateType})},n.name=e.name,n.title=e.title||n.name,n.group=e.group,n.updateType=e.updateType,n.state={fontType:e.fontType},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",className:"mr-1",checked:"1"===this.state.fontType,onChange:this.updateValue}),r.a.createElement("small",{className:"text-dark"},this.title)))}}]),t}(r.a.Component),W=Object(d.b)(null,(function(e){return{update:function(t){e({update:t,type:t.updateType})}}}))(V),Y="editorSettings",H=function(e){function t(e,a){var n;Object(i.a)(this,t);var o=(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).props.xmlOptions;n.resultGroups=[];var l=Object.keys(o).sort(),c=0,p=!0,d=!1,m=void 0;try{for(var v,h=l[Symbol.iterator]();!(p=(v=h.next()).done);p=!0){var f=v.value;c++;var g=o[f];if(null!=g){var O=[];O.push(r.a.createElement(R,{key:"editor-item1",colorId:g.FOREGROUND,group:f,updateType:"xml",name:"FOREGROUND",title:"Foreground"})),O.push(r.a.createElement(R,{key:"editor-item2",colorId:g.BACKGROUND,group:f,updateType:"xml",name:"BACKGROUND",title:"Background"})),O.push(r.a.createElement(W,{key:"editor-item3",fontType:g.FONT_TYPE,group:f,updateType:"xml",name:"FONT_TYPE",title:"Bold"})),n.resultGroups.push(G(c,g.NAME,O,Y))}}}catch(b){d=!0,m=b}finally{try{p||null==h.return||h.return()}finally{if(d)throw m}}return n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"accordion",id:Y},this.resultGroups))}}]),t}(r.a.Component),J=Object(d.b)((function(e){return{xmlOptions:e.xmlOptions}}))(H),z=a(194),X=a.n(z),q=a(195),$=a(511),Q="MyEditorScheme.xml",Z="MyTheme.theme.json";function ee(e,t,a){var n=new X.a,r=n.folder("META-INF");!function(e){e.file("MANIFEST.MF","Manifest-Version: 1.0\nCreated-By: Your Great Theme\n")}(r),function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Author",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"great.theme",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Generated plugin",o=$(),l="<idea-plugin>\n  <id>".concat(n,"</id>\n  <name>").concat(t,"</name>\n  <version>1.0</version>\n  <vendor>").concat(a,"</vendor>\n\n  <description><![CDATA[\n  ").concat(r,'\n    ]]></description>\n\n  <idea-version since-build="192.0"/>\n  <depends>com.intellij.modules.lang</depends>\n  <extensions defaultExtensionNs="com.intellij">\n    <themeProvider id="').concat(o,'" path="/').concat(Z,'"/>\n  </extensions>\n\n</idea-plugin>');e.file("plugin.xml",l)}(r,t,a),function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Author",r={};r.name=a,r.author=n,r.dark=!0,r.editorScheme="/themes/".concat(Q);var o={};for(var l in r.ui=o,t.jsonOptions)t.jsonOptions.hasOwnProperty(l)&&"*"!==l&&(o[l]=t.jsonOptions[l]);var i=JSON.stringify(r);e.file(Z,i)}(n,e,t,a),function(e,t,a){var n='<scheme name="'.concat(a,'" version="1" parent_scheme="Darcula">\n');n+="<attributes>\n";var r=t.xmlOptions;for(var o in r)r.hasOwnProperty(o)&&(n+=te(o,r[o]));n+="</attributes>\n",n+="</scheme>",e.file(Q,n)}(n.folder("themes"),e,t),n.generateAsync({type:"blob"}).then((function(e){Object(q.saveAs)(e,t+".jar")}))}function te(e,t){var a='<option name="'.concat(e,'">\n');a+="<value>\n";for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n],l=t[o];null!=l&&"NAME"!==o&&(l.startsWith("#")&&(l=l.substring(1)),a+='<option name="'.concat(o,'" value="').concat(l,'" />\n'))}return a+="</value>\n",a+="</option>"}var ae=function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e,a))).onSubmit=function(e){e.preventDefault(),ee(j.getState(),n.state.pluginName)},n.pluginName=function(e){n.setState({pluginName:e.target.value})},n.state={pluginName:"Your great theme"},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pluginName"},"Plugin name"),r.a.createElement("input",{type:"text",className:"form-control w-25",id:"pluginName",onChange:this.pluginName,value:this.state.pluginName})),r.a.createElement("button",{className:"btn btn-warning",onClick:this.onSubmit},"Generate plugin")))}}]),t}(r.a.Component);var ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col header"},r.a.createElement("a",{href:"#",className:"logo"}),r.a.createElement("h1",null,"Your Great Theme")))),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(_.a,{defaultActiveKey:"general",id:"uncontrolled-tab-example"},r.a.createElement(K.a,{eventKey:"general",title:"General"},r.a.createElement("div",{className:"row"},r.a.createElement(L,null),r.a.createElement("div",{className:"col-9 canvas-container"},r.a.createElement(x,null)))),r.a.createElement(K.a,{eventKey:"editor",title:"Editor"},r.a.createElement("div",{className:"row "},r.a.createElement(J,null),r.a.createElement("div",{className:"col-9 canvas-container"},r.a.createElement(x,null)))),r.a.createElement(K.a,{eventKey:"create-plugin",title:"Create plugin"},r.a.createElement("div",{className:"row "},r.a.createElement(ae,null)))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row my-3 text-center"},r.a.createElement("div",{className:"col"},r.a.createElement("small",{className:"text-light"},"\xa9 JetBrains Hackathon 2019"))))),r.a.createElement("div",{className:"clearfix"}))};a(528),a(529),a(531),a(532),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(d.a,{store:j},r.a.createElement(ne,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e){e.exports=JSON.parse('{"Borders":{"color":"#323232","ContrastBorderColor":"#323232"},"Button":{"endBorderColor":"#5E6060","foreground":"#BBBBBB","startBorderColor":"#5E6060"},"ComboBox":{"ArrowButton":{"iconColor":"#9A9DA1"}},"ComboBoxButton":{"background":"#3C3F41"},"Component":{"infoForeground":"#787878"},"EditorTabs":{"background":"#3C3F41","borderColor":"#323232","inactiveUnderlineColor":"#747A80","underlinedTabBackground":"#4E5254","underlinedTabForeground":"#BBBBBB"},"Label":{"foreground":"#BBBBBB"},"Panel":{"background":"#3C3F41","foreground":"#BBBBBB"},"Separator":{"separatorColor":"#515151"},"StatusBar":{"borderColor":"#464646"},"ToggleButton":{"foreground":"#BBBBBB"},"ToolWindow":{"Button":{"selectedBackground":"#2c2e2f","selectedForeground":"#fbfbfb"},"Header":{"background":"#3B4754","borderColor":"#323232"}},"Tree":{"background":"#3C3F41","foreground":"#BBBBBB","selectionInactiveBackground":"#0D293E"}}')}},[[199,1,2]]]);
//# sourceMappingURL=main.298a76ee.chunk.js.map