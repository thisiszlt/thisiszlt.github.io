(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports=a(197)},120:function(e,t,a){},121:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),i=a.n(c),s=(a(120),a(16)),o=a(17),r=a(19),u=a(18),m=a(20),h=(a(62),a(12)),d=a(202),f=(a(63),a(79)),p=a(108),E=a(200),g=a(201),y=a(198),v=a(199),b=a(203),S=(a(121),f.a.SubMenu);function w(){return l.a.createElement(p.a,{style:{margin:"10px 0"}})}var k={padding:"5px"},O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).toggleCollapsed=function(){a.setState({collapsed:!a.state.collapsed})},a.onResolutionChange=function(e){a.setState({value:e.target.value})},a.onScanSettinfChange=function(e){a.setState({value:e.target.value})},a.onChangeRegionMode=function(){},a.state={showMenu:!0,content:null,collapsed:!1,value:1,selectedTags:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onSettingClick",value:function(){this.setState({showMenu:!this.state.showMenu})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.showMenu?l.a.createElement("div",{className:"setting-container"},l.a.createElement(E.a,{onBack:this.props.onBackClick,title:"Settings"}),l.a.createElement(f.a,{mode:"inline",theme:"light",inlineCollapsed:this.state.collapsed},l.a.createElement(S,{key:"video",title:l.a.createElement("span",null,l.a.createElement(h.a,{type:"camera"}),l.a.createElement("span",null,"Video Source"))},l.a.createElement(f.a.Item,{key:"camera1"},"Camera 1"),l.a.createElement(f.a.Item,{key:"camera2"},"Camera 2")),l.a.createElement(w,null),l.a.createElement(S,{key:"resolution",title:l.a.createElement("span",null,l.a.createElement(h.a,{type:"eye"}),l.a.createElement("span",null,"Video Resolution"))},l.a.createElement(g.a.Group,{style:{paddingLeft:"20px"},onChange:this.onResolutionChange,value:this.state.value},l.a.createElement(g.a,{style:k,value:1},"3080*2160"),l.a.createElement(g.a,{style:k,value:2},"2560*1440"),l.a.createElement(g.a,{style:k,value:3},"1929*1080"),l.a.createElement(g.a,{style:k,value:4},"1600*1200"),l.a.createElement(g.a,{style:k,value:5},"1280*720"),l.a.createElement(g.a,{style:k,value:6},"800*600"),l.a.createElement(g.a,{style:k,value:7},"640*480"),l.a.createElement(g.a,{style:k,value:8},"640*360"))),l.a.createElement(w,null),l.a.createElement(f.a.ItemGroup,{key:"Barcode Format",title:"Barcode Format",icon:"barcode"},l.a.createElement(f.a.Item,{key:"1D",style:{left:"5px"}},l.a.createElement("h5",null,"1D")),l.a.createElement(f.a.Item,{key:"PDF417",style:{left:"5px"}},l.a.createElement("h5",null,"PDF417")),l.a.createElement(f.a.Item,{key:"QR Code",style:{left:"5px"}},l.a.createElement("h5",null,"QR Code")),l.a.createElement(f.a.Item,{key:"Data Matrix",style:{left:"5px"}},l.a.createElement("h5",null,"Data Matrix")),l.a.createElement(f.a.Item,{key:"Actec Code",style:{left:"5px"}},l.a.createElement("h5",null,"Actec Code"))),l.a.createElement(w,null),l.a.createElement(S,{key:"scan",title:l.a.createElement("span",null,l.a.createElement(h.a,{type:"setting"}),l.a.createElement("span",null,"Scan Settings"))},l.a.createElement(g.a.Group,{style:{paddingLeft:"20px"},onChange:this.onScanSettinfChange,value:this.state.value},l.a.createElement(g.a,{style:k,value:"Fast"},"Fast"),l.a.createElement(g.a,{style:k,value:"Most Accurate"},"Most Accurate"))),l.a.createElement(w,null),l.a.createElement(S,{key:"region",title:l.a.createElement("span",null,l.a.createElement(h.a,{type:"eye"}),l.a.createElement("span",null,"Read Full Region"))},l.a.createElement("div",null,l.a.createElement(y.a,{onChange:this.onChangeRegionMode,style:{float:"right",right:"10px"}}))),l.a.createElement(w,null),l.a.createElement(S,{key:"about",title:l.a.createElement("span",null,l.a.createElement(h.a,{type:"bulb"}),l.a.createElement("span",null,"About Dynamsoft"))},l.a.createElement("div",null,l.a.createElement(v.a,{title:"About"},l.a.createElement("p",null,"Founded in Sep 2003 with the aim of being the dynamic center of software developers, Dynamsoft provides enterprise-class document capture and image processing software development kits (SDK), with numerous generations for each product. Today many Fortune 500 Companies including HP, IBM, Intel, and Siemens trust Dynamsoft solutions.")))),l.a.createElement(w,null),l.a.createElement("div",{className:"clear-cache"},l.a.createElement(b.a,{type:"primary",size:"large",onClick:function(){return null}},"Clear Cache")))):null)}}]),t}(l.a.Component),C=(a(196),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={showFile:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"onAddFileClick",value:function(){this.setState({showFile:!this.state.showFile}),console.log(this.state.showFile)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,this.state.showFile?l.a.createElement("div",{className:"file-container"},l.a.createElement(E.a,{onBack:this.props.onBackClick,title:"Files"})):null)}}]),t}(l.a.Component)),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={numbers:[],resultsInfo:[],isOpen:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"showScanner",value:function(){var e=this,t=window.Dynamsoft,a=null;t.BarcodeScanner.createInstance({UIElement:document.getElementById("scanner"),videoSettings:{video:{width:{ideal:1280},height:{ideal:720},facingMode:{ideal:"environment"}}},onFrameRead:function(t){e.state.resultsInfo=a.arrDiffCodeInfo,e.setState({resultsInfo:e.state.resultsInfo}),console.log(e.state.resultsInfo)},onUnduplicatedRead:function(e,t){console.log(t,typeof t)}}).then(function(e){a=e}).then(function(){!1===e.state.isOpen?(console.log("open!"),a.show().then(function(){return a.getAllCameras().then(function(e){a.setCurrentCamera(e[0].deviceId)})})):(console.log("close!"),a.show().then(function(){return a.close()}))}).then(function(){e.setState({isOpen:!e.state.isOpen})})}},{key:"componentDidMount",value:function(){this.showScanner()}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"scanner"},l.a.createElement("video",{className:"dbrScanner-video",playsInline:!0})),l.a.createElement(N,{resultsInfo:this.state.resultsInfo}))}}]),t}(l.a.Component);function F(e){return l.a.createElement("label",{className:"region",onClick:e.handleRegion},l.a.createElement(h.a,{type:e.isFullRegion?"fullscreen-exit":"fullscreen",style:{fontSize:"30px",color:"#fff"}}))}function I(){return l.a.createElement("div",{className:"scanner-container"},l.a.createElement("div",{className:"frame"},l.a.createElement("label",{className:"flashlight"},l.a.createElement(h.a,{type:"bulb",style:{fontSize:"30px",color:"white"}}))),l.a.createElement("div",{className:"tip-info"},l.a.createElement("p",null,"Put the code in the box and scan it automatically.")))}var x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={isFullRegion:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleRegion",value:function(){this.setState({isFullRegion:!this.state.isFullRegion})}},{key:"render",value:function(){return l.a.createElement("div",{className:"home-screen"},l.a.createElement(j,null),!this.state.isFullRegion&&l.a.createElement(I,null),l.a.createElement("div",{className:"dynam-info"},l.a.createElement("p",null,"Dynamsoft DBR")),l.a.createElement(F,{handleRegion:this.handleRegion.bind(this),isFullRegion:this.state.isFullRegion}))}}]),t}(l.a.Component),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={isShowSettingPage:!1,isShowFilePage:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleShowSettingPage",value:function(){this.setState({isShowSettingPage:!this.state.isShowSettingPage})}},{key:"handleShowFilePage",value:function(){this.setState({isShowFilePage:!this.state.isShowFilePage})}},{key:"render",value:function(){return this.state.isShowSettingPage?l.a.createElement(O,{onBackClick:this.handleShowSettingPage.bind(this)}):this.state.isShowFilePage?l.a.createElement(C,{onBackClick:this.handleShowFilePage.bind(this)}):l.a.createElement("div",{className:"header-bar"},l.a.createElement("div",{className:"settingBtn-container"},l.a.createElement(h.a,{type:"setting",style:{fontSize:"50px",color:"#fff"},onClick:this.handleShowSettingPage.bind(this)})),l.a.createElement("div",{className:"double-click"},l.a.createElement("label",null,"\u53cc\u51fb\u5168\u5c4f")),l.a.createElement("div",{className:"selImgBtn-container"},l.a.createElement(h.a,{type:"plus",style:{fontSize:"50px",color:"#fff"},onClick:this.handleShowFilePage.bind(this)})))}}]),t}(l.a.Component),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={number:1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"copyScannerResult",value:function(){window.kUtil.copyToClipBoard(this.props.content),alert("copy successfully!")}},{key:"render",value:function(){var e=this,t=this.props.content,a=t;t.startsWith("http")||!t.startsWith("www")&&-1===t.indexOf(".com")&&-1===t.indexOf(".net")&&-1===t.indexOf(".org")&&-1===t.indexOf(".edu")||(a="http://"+t);var n=a.startsWith("http");return l.a.createElement("div",{className:"result-content"},l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,this.props.format,": "),n?l.a.createElement("a",{href:a,target:"_blank"},this.props.content):l.a.createElement("span",{onClick:function(){d.a.open({message:"Notice:",placement:"bottomLeft",duration:1.5,description:"\u590d\u5236\u6210\u529f!",onClick:function(){e.copyScannerResult()}})}},this.props.content),l.a.createElement(l.a.Fragment,null," x ",this.props.count)))}}]),t}(l.a.Component),N=function(e){function t(e){return Object(s.a)(this,t),Object(r.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.resultsInfo.slice(-3).map(function(e,t){return l.a.createElement(B,{key:t,content:e.result.BarcodeText,count:e.count,format:e.result.BarcodeFormatString})});return l.a.createElement("div",{className:"result-container"},e)}}]),t}(l.a.Component),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={isOpen:!1,isShow:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleShow",value:function(){this.setState({isShow:!this.state.isShow}),console.log(this.state.isShow)}},{key:"render",value:function(){return l.a.createElement("div",{className:"wrap-container"},this.state.isShow&&l.a.createElement(x,null),l.a.createElement(R,{onSwitchPage:this.handleShow.bind(this)}))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.e3292f44.chunk.js.map