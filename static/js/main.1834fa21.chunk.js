(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,n){e.exports=n(332)},171:function(e,t,n){},235:function(e,t,n){},332:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),l=n.n(o),r=n(20),s=n(21),c=n(24),u=n(22),m=n(25),d=(n(66),n(10)),h=(n(90),n(113)),p=n(159),f=n(340),g=n(343),E=n(54),v=n(31),y=n(336),b=n(342),w=n(341),S=n(339),F=(n(171),h.a.SubMenu);function k(){return i.a.createElement(p.a,{style:{margin:"10px 0"}})}var O,C,j,x,R,D,B,N={padding:"5px"},I={resolution:[1280,720],barcodeformat:503318527,localization:[2,0,0,0,0,0,0,0],deblurlevel:0},P=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).onSelectChange=function(e){n.setState({value:e.target.value,resolution:e.target.res})},n.state={value:0,resolution:[1280,720]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){I.resolution=this.state.resolution,console.log(this.state.resolution)}},{key:"render",value:function(){return i.a.createElement(h.a,{mode:"inline"},i.a.createElement(F,{key:"resolution",title:i.a.createElement("span",null,i.a.createElement(d.a,{type:"eye"}),i.a.createElement("span",null,"Video Resolution"))},i.a.createElement(f.a.Group,{style:{paddingLeft:"20px"},onChange:this.onSelectChange.bind(this),defaultValue:"1280,720"},i.a.createElement(f.a,{style:N,value:"3840,2160",res:[3840,2160]},"3840*2160"),i.a.createElement(f.a,{style:N,value:"2560,1440",res:[2560,1440]},"2560*1440"),i.a.createElement(f.a,{style:N,value:"1920,1080",res:[1920,1080]},"1920*1080"),i.a.createElement(f.a,{style:N,value:"1600,1200",res:[1600,1200]},"1600*1200"),i.a.createElement(f.a,{style:N,value:"1280,720",res:[1280,720]},"1280*720"),i.a.createElement(f.a,{style:N,value:"800,600",res:[800,600]},"800*600"),i.a.createElement(f.a,{style:N,value:"640,480",res:[640,480]},"640*480"),i.a.createElement(f.a,{style:N,value:"640,360",res:[640,360]},"640*360"))))}}]),t}(i.a.Component),T=["1D","PDF417","QR Code","Data Matrix","Aztec Code"],M=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){n.setState({checkedList:e})},n.onSelectFormat=function(e){console.log(e.target.format,e.target.value,-1!==n.state.checkedList.indexOf(e.target.value)),n.setState({formatIDs:-1!==n.state.checkedList.indexOf(e.target.value)?n.state.formatIDs-e.target.format:n.state.formatIDs+e.target.format})},n.state={checkedList:T},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){O=window.Dynamsoft,C=O.EnumBarcodeFormat.OneD,j=O.EnumBarcodeFormat.PDF417,x=O.EnumBarcodeFormat.QR_CODE,R=O.EnumBarcodeFormat.DATAMATRIX,D=O.EnumBarcodeFormat.AZTEC,this.setState({formatIDs:C+j+x+R+D})}},{key:"componentDidUpdate",value:function(){I.barcodeformat=this.state.formatIDs}},{key:"render",value:function(){return i.a.createElement(h.a,{mode:"inline"},i.a.createElement(F,{key:"format",title:i.a.createElement("span",null,i.a.createElement(d.a,{type:"barcode"}),i.a.createElement("span",null,"Barcode Format"))},i.a.createElement("div",{style:{padding:"0 0 5px 25px"}},i.a.createElement(g.a.Group,{value:this.state.checkedList,onChange:this.onChange.bind(this)},i.a.createElement(E.a,null,i.a.createElement(v.a,{span:12},i.a.createElement(g.a,{value:"1D",format:C,onChange:this.onSelectFormat.bind(this)},"1D")),i.a.createElement(v.a,{span:12},i.a.createElement(g.a,{value:"PDF417",format:j,onChange:this.onSelectFormat.bind(this)},"PDF417")),i.a.createElement(v.a,{span:12},i.a.createElement(g.a,{value:"QR Code",format:x,onChange:this.onSelectFormat.bind(this)},"QR Code")),i.a.createElement(v.a,{span:12},i.a.createElement(g.a,{value:"Data Matrix",format:R,onChange:this.onSelectFormat.bind(this)},"Data Matrix")),i.a.createElement(v.a,{span:12},i.a.createElement(g.a,{value:"Aztec Code",format:D,onChange:this.onSelectFormat.bind(this)},"Aztec Code")))))))}}]),t}(i.a.Component),z=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).onSelectChange=function(e){n.setState({value:e.target.value})},n.state={value:"fast"},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){I.localization="fast"===this.state.value?[2,0,0,0,0,0,0,0]:[2,16,4,8,0,0,0,0],I.deblurlevel=0}},{key:"render",value:function(){return i.a.createElement(h.a,{mode:"inline"},i.a.createElement(F,{key:"scan",title:i.a.createElement("span",null,i.a.createElement(d.a,{type:"setting"}),i.a.createElement("span",null,"Scan Settings"))},i.a.createElement(f.a.Group,{style:{paddingLeft:"20px"},onChange:this.onSelectChange.bind(this),defaultValue:"fast"},i.a.createElement(f.a,{style:N,value:"fast"},"Fast"),i.a.createElement(f.a,{style:N,value:"accurate"},"Most Accurate"))))}}]),t}(i.a.Component),L=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={value:0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,{mode:"inline"},i.a.createElement(F,{key:"about",title:i.a.createElement("span",null,i.a.createElement(d.a,{type:"bulb"}),i.a.createElement("span",null,"About Dynamsoft"))},i.a.createElement("div",null,i.a.createElement(y.a,{title:"About"},i.a.createElement("p",null,"Founded in Sep 2003 with the aim of being the dynamic center of software developers, Dynamsoft provides enterprise-class document capture and image processing software development kits (SDK), with numerous generations for each product. Today many Fortune 500 Companies including HP, IBM, Intel, and Siemens trust Dynamsoft solutions.")))))}}]),t}(i.a.Component),A=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClear",value:function(){var e={};b.a.config({top:window.innerHeight/2,duration:2});try{console.log(window.indexedDB);var t=window.indexedDB.deleteDatabase("dynamsoft");t.onsuccess=t.onerror=function(){t.error?(e.content="Clear failed: "+(t.error.message||t.error),e.icon=i.a.createElement(d.a,{type:"close",style:{color:"red"}}),b.a.open(e)):(e.content="Clear success!",e.icon=i.a.createElement(d.a,{type:"check-circle",style:{color:"#FE8E14"}}),b.a.open(e))}}catch(n){e.content=n.message||n,e.icon=i.a.createElement(d.a,{type:"close",style:{color:"red"}}),b.a.open(e)}}},{key:"render",value:function(){return i.a.createElement("div",{className:"clear-cache"},i.a.createElement(w.a,{type:"primary",size:"large",onClick:this.handleClear.bind(this),style:{backgroundColor:"rgb(254, 142, 20)",border:"1px solid rgb(254, 142, 20)"}},"Clear Cache"))}}]),t}(i.a.Component),W=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showMenu:!0,selectedTags:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"setting-container"},i.a.createElement("div",null,i.a.createElement(S.a,{onBack:this.props.onBackClick,title:"Settings"})),i.a.createElement(h.a,{mode:"inline",theme:"light"},i.a.createElement(P,null),i.a.createElement(k,null),i.a.createElement(M,null),i.a.createElement(k,null),i.a.createElement(z,null),i.a.createElement(k,null),i.a.createElement(L,null),i.a.createElement(k,null),i.a.createElement(A,null))))}}]),t}(i.a.Component),U=n(337),H=n(338),q=n(335);n(235);var Q,V=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){"uploading"!==e.file.status?"done"===e.file.status&&(!function(e,t){var n=new FileReader;n.addEventListener("load",function(){return t(n.result)}),n.readAsDataURL(e)}(e.file.originFileObj,function(e){return n.setState({imageUrl:e,loading:!1,isloadingNewFile:!0})}),n.decodeFile(e.file.originFileObj)):n.setState({loading:!0,file:e.file.originFileObj})},n.copyScannerResult=function(e){window.kUtil.copyToClipBoard(e.target.innerText);var t={content:"copy successfully!"};t.icon=i.a.createElement(d.a,{type:"smile",style:{color:"#FE8E14"}}),b.a.config({top:window.innerHeight-180,duration:1.5}),b.a.open(t)},n.state={showFile:!0,loading:!1,resultsInfo:"",barcodeFormat:I.barcodeformat,localization:I.localization,deblurLevel:I.deblurlevel,isloadingNewFile:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.Dynamsoft.BarcodeReader.createInstance().then(function(e){B=e}),console.log(this.state.barcodeFormat)}},{key:"componentWillUnmount",value:function(){void 0!==B&&B.destroy()}},{key:"onSelectNewFile",value:function(){this.setState({isloadingNewFile:!1}),console.log("this")}},{key:"decodeFile",value:function(e){var t=this,n={};b.a.config({top:window.innerHeight/2,duration:2});var a=B.getRuntimeSettings();a.test="tst",a.barcodeFormatIds=this.state.barcodeFormat,a.localizationModes=this.state.localization,a.deblurLevel=this.state.deblurLevel,console.log(a),B.updateRuntimeSettings(a).then(function(){console.log(B.getRuntimeSettings()),B.decode(e).then(function(e){if(e.length>0){console.log(e);for(var a=[],o=0;o<e.length;++o)a.push(e[o].BarcodeText);t.setState({resultsInfo:e}),n.content="Found "+e.length+" barcode!",n.icon=i.a.createElement(d.a,{type:"check",style:{color:"#FE8E14"}}),b.a.open(n)}else n.content="No barcode found!",n.icon=i.a.createElement(d.a,{type:"close",style:{color:"#FE8E14"}}),b.a.open(n),t.setState({resultsInfo:""})}).catch(function(e){n.content="Not supported image file!",n.icon=i.a.createElement(d.a,{type:"frown",style:{color:"#FE8E14"}}),b.a.open(n),console.log(e)})})}},{key:"render",value:function(){var e=this,t=i.a.createElement("div",{className:"custom-upload-box"},i.a.createElement(d.a,{type:this.state.loading?"loading":"plus"}),i.a.createElement("div",{className:"ant-upload-text"},"Upload")),n=this.state.imageUrl;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"file-container"},i.a.createElement(S.a,{onBack:this.props.onBackClick,title:"Files"})),this.state.resultsInfo.length&&i.a.createElement("div",null,i.a.createElement(U.a,{className:"decodefile-result-list",dataSource:this.state.resultsInfo,bordered:!0,size:"small",renderItem:function(t){return i.a.createElement(U.a.Item,{style:{display:"list-item"}},i.a.createElement(H.a.Text,null,i.a.createElement("span",{style:{color:"#FE8E14"}},[t.BarcodeFormatString],": ")),(n=t.BarcodeText).startsWith("http")||!n.startsWith("www")&&-1===n.indexOf(".com")&&-1===n.indexOf(".net")&&-1===n.indexOf(".org")&&-1===n.indexOf(".edu")?i.a.createElement("span",{onClick:e.copyScannerResult,style:{fontSize:16}},t.BarcodeText):i.a.createElement("a",{href:"http://"+t.BarcodeText,target:"_blank",style:{textDecoration:"underline"}},t.BarcodeText));var n}})),i.a.createElement("div",{className:"upload-container"},i.a.createElement("div",{className:"upload",onClick:this.onSelectNewFile.bind(this)},i.a.createElement(q.a,{name:"avatar",listType:"picture-card",showUploadList:!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:this.handleChange,supportServerRender:!0,style:{width:180,height:180,display:"table"}},this.state.isloadingNewFile&&n?i.a.createElement("img",{src:n,alt:"avatar",style:{width:"100%"}}):t))))}}]),t}(i.a.Component),G=n(65),_=n(160),J=n(164),K=n.n(J),X=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).copyScannerResult=function(e){window.kUtil.copyToClipBoard(e.target.innerText);var t={content:"copy successfully!"};t.icon=i.a.createElement(d.a,{type:"smile",style:{color:"#FE8E14"}}),b.a.config({top:window.innerHeight-180,duration:1.5}),b.a.open(t)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.content,t=e;e.startsWith("http")||!e.startsWith("www")&&-1===e.indexOf(".com")&&-1===e.indexOf(".net")&&-1===e.indexOf(".org")&&-1===e.indexOf(".edu")||(t="http://"+e);var n=t.startsWith("http");return i.a.createElement("div",{className:"result-content"},i.a.createElement(i.a.Fragment,null,i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{style:{color:"#FE8E14"}},this.props.format,": ")),n?i.a.createElement("a",{href:t,target:"_blank",style:{textDecoration:"underline"}},this.props.content):i.a.createElement("span",{onClick:this.copyScannerResult,style:{fontSize:16}},this.props.content),i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{style:{color:"#FE8E14"}}," x ",this.props.count))))}}]),t}(i.a.Component),Z=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.resultsInfo.slice(-3).map(function(e,t){return i.a.createElement(X,{key:t,content:void 0!==e.result?e.result.BarcodeText:e.BarcodeText,count:e.count,format:void 0!==e.result?e.result.BarcodeFormatString:e.BarcodeFormatString})});return i.a.createElement("div",{className:"result-container"},e)}}]),t}(i.a.Component),$=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isDraw:!1},n.canvas=i.a.createRef(),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.point,t=e[0].split(",")[0],n=e[0].split(",")[1],a=e[1].split(",")[0],i=e[1].split(",")[1],o=e[2].split(",")[0],l=e[2].split(",")[1],r=e[3].split(",")[0],s=e[3].split(",")[1],c=Math.min(t,a,o,r),u=Math.min(n,i,l,s),m=t-c,d=a-c,h=o-c,p=r-c,f=n-u,g=i-u,E=l-u,v=s-u,y=this.canvas.current;if(y.getContext){var b=y.getContext("2d");b.fillStyle="rgba(254,180,32,0.5)",b.clearRect(0,0,y.width,y.height),b.beginPath(),b.moveTo(m,f),b.lineTo(d,g),b.lineTo(h,E),b.lineTo(p,v),b.fill()}}},{key:"render",value:function(){var e=this.props.point,t=e[0].split(",")[0],n=e[0].split(",")[1],a=e[1].split(",")[0],o=e[1].split(",")[1],l=e[2].split(",")[0],r=e[2].split(",")[1],s=e[3].split(",")[0],c=e[3].split(",")[1],u=Math.min(t,a,l,s),m=Math.max(t,a,l,s),d=Math.min(n,o,r,c),h=Math.max(n,o,r,c),p={position:"absolute",left:u+"px",top:d+"px"};return i.a.createElement(i.a.Fragment,null,i.a.createElement("canvas",{ref:this.canvas,width:m-u,height:h-d,style:p}))}}]),t}(i.a.Component),Y=null,ee=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={resultsInfo:[],isOpen:!1,resultsPoint:[],camera:0,cameraList:[],isFullRegion:n.props.isFullRegion,resolution:I.resolution,barcodeFormat:I.barcodeformat,localization:I.localization,deblurLevel:I.deblurlevel,cameraOptions:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"showScanner",value:function(){var e=this,t=function(){var t,n,a,i,o=1*e.props.region/100,l=o*window.innerWidth,r=.5*o*window.innerHeight,s=Y.getResolution(),c=s[0],u=s[1];c>=window.innerWidth?l>=250?(t=(window.innerWidth-l)/2/c,n=(window.innerWidth+l)/2/c,a=(u-250)/2/u,i=(u+250)/2/u):(t=(window.innerWidth-l)/2/c,n=(window.innerWidth+l)/2/c,a=(u-r)/2/u,i=(u+r)/2/u):c<window.innerWidth&&(l>=250?(t=(c-250)/2/c,n=(c+250)/2/c,a=(u-250)/2/u,i=(u+250)/2/u):(t=(c-l)/2/c,n=(c+l)/2/c,a=(u-r)/2/u,i=(u+r)/2/u));var m=Y.getRuntimeSettings();e.state.isFullRegion?(m.region.left=0,m.region.right=100,m.region.top=0,m.region.bottom=100,m.region.measuredByPercentage=1,Y.updateRuntimeSettings(m)):(m.region.left=Math.round(100*t),m.region.right=Math.round(100*n),m.region.top=Math.round(100*a),m.region.bottom=Math.round(100*i),m.region.measuredByPercentage=1,Y.updateRuntimeSettings(m))};Q.BarcodeScanner.createInstance({intervalTime:200,UIElement:document.getElementById("scanner"),videoSettings:{video:{width:{ideal:1280},height:{ideal:720},facingMode:"environment"}},onFrameRead:function(n){for(var a=[],i=0;i<n.length;i++){var o=n[i];a.push(o.LocalizationResult.ResultPoints)}var l=Y.arrDiffCodeInfo;e.setState({resultsInfo:l,resultsPoint:a,isFullRegion:e.props.isFullRegion}),null!==Y&&t()},onUnduplicatedRead:function(e,t){console.log(t)}}).then(function(n){(Y=n).updateVideoSettings({video:{width:e.state.resolution[0],height:e.state.resolution[1],facingMode:"environment"}}),console.log("open!"),Y.show().then(function(n){var a=Y.getRuntimeSettings();a.barcodeFormatIds=e.state.barcodeFormat,a.localizationModes=e.state.localization,a.deblurLevel=e.state.deblurLevel,Y.updateRuntimeSettings(a).then(function(){t()}).then(function(){Y.getAllCameras().then(function(t){e.setState({cameraList:t,cameraOptions:t.map(function(e,t){return i.a.createElement(G.a.Option,{value:"camera:"+t,key:e.deviceId},e.label)})})})})},function(e){console.log(e);var t={content:"No camera availble!"};t.icon=i.a.createElement(d.a,{type:"frown",style:{color:"#FE8E14"}}),b.a.config({top:window.innerHeight/2,duration:0}),b.a.open(t)})}).then(function(){e.setState({isOpen:!e.state.isOpen})})}},{key:"componentDidMount",value:function(){Q=window.Dynamsoft,this.showScanner()}},{key:"componentWillUnmount",value:function(){null!=Y&&Y.close(),null!=Y&&Y.destroy()}},{key:"handleFullRegion",value:function(){this.setState({isFullRegion:this.state.isFullRegion})}},{key:"onSwitchCamera",value:function(e){var t=this;Y.getAllCameras().then(function(n){return t.setState({camera:e.split(":")[1]}),n}).then(function(e){Y.setCurrentCamera(e[t.state.camera].deviceId);var n={};n.content="Switch to "+e[t.state.camera].label+" successfully!",n.icon=i.a.createElement(d.a,{type:"smile",style:{color:"#FE8E14"}}),b.a.config({top:window.innerHeight-180,duration:1.5}),b.a.open(n)})}},{key:"render",value:function(){var e=this.state.resultsPoint.map(function(e,t){return i.a.createElement($,{key:t,point:e})});return i.a.createElement(i.a.Fragment,null,i.a.createElement("style",{type:"text/css"},"\n                .waiting{\n                    position:absolute;\n                    left:50%;\n                    top:50%;\n                    transform:translate(-50%);\n                    color:#FE8E14;\n                    transition: opacity 1000ms ease-in;\n                }\n\n                .fade-enter.fade-enter-active {\n                    opacity:1;\n                    transition: opacity 1000ms ease-in;\n                }\n\n                .fade-enter{\n                    opacity:0;\n                }\n\n                .fade-leave{\n                    opacity: 1; \n                }\n\n                .fade-leave.fade-leave-active{\n                    opacity:0;\n                    transition: opacity 3000ms ease-in;\n                }\n                \n                .fade-appear{\n                    opacity:0;\n                }\n\n                .fade-appear.fade-appear-active {\n                    opacity: 1;\n                    transition: opacity 2000ms ease-in;\n                }\n                "),i.a.createElement(K.a,{transitionName:"fade",transitionLeave:!0,transitionAppear:!1,transitionEnter:!1,transitionAppearTimeout:500,transitionLeaveTimeout:3500,transitionEnterTimeout:2500},!this.state.isOpen&&i.a.createElement(_.a,{className:"waiting",tip:"Accessing Camera list...",indicator:i.a.createElement(d.a,{type:"smile",spin:!0,style:{fontSize:"3rem"}})})),i.a.createElement("div",{id:"scanner",style:{position:"absolute",width:"100%"}},i.a.createElement("div",{className:"video-container"},i.a.createElement("video",{className:"dbrScanner-video custom-video",playsInline:!0}),i.a.createElement(i.a.Fragment,null,e))),i.a.createElement(Z,{resultsInfo:this.state.resultsInfo}),this.state.cameraList.length&&i.a.createElement(G.a,{onChange:this.onSwitchCamera.bind(this),style:{position:"absolute",top:"60px",left:0,width:"20%",maxWidth:130,border:"0",color:"#FE8E14",opacity:"0.5"},suffixIcon:i.a.createElement(d.a,{type:"camera",style:{color:"#FE8E14"}}),defaultActiveFirstOption:!1},this.state.cameraOptions))}}]),t}(i.a.Component);function te(e){return i.a.createElement("label",{className:"region",onClick:e.handleRegion},i.a.createElement(d.a,{type:e.isFullRegion?"fullscreen-exit":"fullscreen",style:{fontSize:"2rem",color:"#FE8E14"}}))}function ne(e){return i.a.createElement("div",{className:"scanner-container"},i.a.createElement("div",{className:"frame",style:{width:e.region+"%",height:e.region+"%",maxWidth:"250px",maxHeight:"250px"}},i.a.createElement("label",{className:"flashlight"},i.a.createElement(d.a,{type:"funnel-plot",style:{fontSize:"2rem",color:"#FE8E14"}}))),i.a.createElement("div",{className:"tip-info"},i.a.createElement("p",null,"Put the code in the box and scan it automatically.")))}var ae=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isShowSettingPage:!1,isShowFilePage:!1,isFullScreen:!1,isFullRegion:!1,settingDisplayStyle:{display:"none"},fileDisplayStyle:{display:"none"}},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleRegion",value:function(){this.setState({isFullRegion:!this.state.isFullRegion})}},{key:"handleShowSettingPage",value:function(){this.setState({isShowSettingPage:!this.state.isShowSettingPage,settingDisplayStyle:"none"===this.state.settingDisplayStyle.display?{display:"block"}:{display:"none"}})}},{key:"handleShowFilePage",value:function(){this.setState({isShowFilePage:!this.state.isShowFilePage,fileDisplayStyle:"none"===this.state.fileDisplayStyle.display?{display:"block"}:{display:"none"}})}},{key:"switchFullScreen",value:function(){this.state.isFullScreen?document.exitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullScreen?document.documentElement.webkitRequestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.msRequestFullscreen(),this.setState({isFullScreen:!this.state.isFullScreen})}},{key:"fullSceenClickHandler",value:function(e){this.switchFullScreen()}},{key:"render",value:function(){var e=i.a.createElement("div",{className:"home-screen"},i.a.createElement(ee,{region:60,isFullRegion:this.state.isFullRegion}),!this.state.isFullRegion&&i.a.createElement(ne,{region:60}),i.a.createElement("div",{className:"dynam-info"},i.a.createElement("a",{href:"https://www.dynamsoft.com"},i.a.createElement("img",{src:"img/logo-dynamsoft-blackBg-190x47.png",alt:"logo"}))),i.a.createElement(te,{handleRegion:this.handleRegion.bind(this),isFullRegion:this.state.isFullRegion})),t=i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"settingBtn-container"},i.a.createElement(d.a,{type:"setting",style:{fontSize:"2.5rem",color:"#FE8E14"},onClick:this.handleShowSettingPage.bind(this)})),i.a.createElement("div",{className:"double-click"},i.a.createElement("label",{onClick:this.fullSceenClickHandler.bind(this)},"click ",this.state.isFullScreen&&"exit"," full screen")),i.a.createElement("div",{className:"selImgBtn-container"},i.a.createElement(d.a,{type:"plus",style:{fontSize:"2.5rem",color:"#FE8E14"},onClick:this.handleShowFilePage.bind(this)})),i.a.createElement("div",{style:this.state.settingDisplayStyle},i.a.createElement(W,{onBackClick:this.handleShowSettingPage.bind(this)})),this.state.isShowFilePage&&i.a.createElement("div",{style:this.state.fileDisplayStyle},i.a.createElement(V,{onBackClick:this.handleShowFilePage.bind(this)})));return i.a.createElement(i.a.Fragment,null,this.state.isShowSettingPage?null:e,t)}}]),t}(i.a.Component),ie=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isOpen:!1,isShow:!0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleShow",value:function(){this.setState({isShow:!this.state.isShow}),console.log(this.state.isShow)}},{key:"render",value:function(){return i.a.createElement("div",{className:"wrap-container"},this.state.isShow&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ae,null)))}}]),t}(i.a.Component),oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(i.a.createElement(ie,null),document.getElementById("root")),function(e){if(console.log("production",""),"serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;console.log("register!"),window.addEventListener("load",function(){var t="".concat("","/server-worker.js");console.log(t),oe?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):le(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):le(t,e)})}}()},66:function(e,t,n){}},[[166,1,2]]]);
//# sourceMappingURL=main.1834fa21.chunk.js.map