webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/Scanner.js":
/*!*************************************!*\
  !*** ./pages/components/Scanner.js ***!
  \*************************************/
/*! exports provided: default, Result, EachResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EachResult", function() { return EachResult; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-addons-css-transition-group */ "./node_modules/react-addons-css-transition-group/index.js");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_css_Layout_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../static/css/Layout.css */ "./static/css/Layout.css");
/* harmony import */ var _static_css_Layout_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_css_Layout_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _SettingPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SettingPage */ "./pages/components/SettingPage.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var EachResult =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(EachResult, _React$Component);

  function EachResult() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EachResult);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EachResult)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "copyScannerResult", function (e) {
      var kUtil = window.kUtil; // kUtil.copyToClipBoard(this.props.content);

      kUtil.copyToClipBoard(e.target.innerText);
      var config = {};
      config.content = "copy successfully!";
      config.icon = __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: "smile",
        style: {
          color: "#FE8E14"
        }
      });
      antd__WEBPACK_IMPORTED_MODULE_9__["message"].config({
        top: window.innerHeight - 180,
        duration: 1.5
      });
      antd__WEBPACK_IMPORTED_MODULE_9__["message"].open(config);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EachResult, [{
    key: "render",
    value: function render() {
      var txt = this.props.content;
      var possibleLink = txt;

      if (!txt.startsWith('http') && (txt.startsWith('www') || -1 !== txt.indexOf('.com') || -1 !== txt.indexOf('.net') || -1 !== txt.indexOf('.org') || -1 !== txt.indexOf('.edu'))) {
        possibleLink = 'http://' + txt;
      }

      var isLink = possibleLink.startsWith('http');
      return __jsx("div", {
        className: "result-content"
      }, __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("span", {
        style: {
          color: "#FE8E14"
        }
      }, this.props.format, ": ")), isLink ? __jsx("a", {
        href: possibleLink,
        target: "_blank",
        style: {
          textDecoration: "underline"
        }
      }, this.props.content) : __jsx("span", {
        onClick: this.copyScannerResult,
        style: {
          fontSize: 16
        }
      }, this.props.content), __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("span", {
        style: {
          color: "#FE8E14"
        }
      }, " x ", this.props.count))));
    }
  }]);

  return EachResult;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var Result =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Result, _React$Component2);

  function Result() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Result);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Result).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Result, [{
    key: "render",
    value: function render() {
      var resultItems = this.props.resultsInfo.slice(-3).map(function (ri, index) {
        return __jsx(EachResult, {
          key: index,
          content: ri.result != undefined ? ri.result.BarcodeText : ri.BarcodeText,
          count: ri.count,
          format: ri.result != undefined ? ri.result.BarcodeFormatString : ri.BarcodeFormatString
        });
      });
      return __jsx("div", {
        className: "result-container"
      }, resultItems);
    }
  }]);

  return Result;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var Canvas =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Canvas, _React$Component3);

  function Canvas(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Canvas);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Canvas).call(this, props));
    _this2.state = {
      isDraw: false
    };
    _this2.canvas = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Canvas, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var point = this.props.point;
      var x1 = point[0].split(',')[0];
      var y1 = point[0].split(',')[1];
      var x2 = point[1].split(',')[0];
      var y2 = point[1].split(',')[1];
      var x3 = point[2].split(',')[0];
      var y3 = point[2].split(',')[1];
      var x4 = point[3].split(',')[0];
      var y4 = point[3].split(',')[1];
      var leftMin = Math.min(x1, x2, x3, x4); //let rightMax = Math.max(x1, x2, x3, x4);

      var topMin = Math.min(y1, y2, y3, y4); //let bottomMax = Math.max(y1, y2, y3, y4);

      var _x1 = x1 - leftMin;

      var _x2 = x2 - leftMin;

      var _x3 = x3 - leftMin;

      var _x4 = x4 - leftMin;

      var _y1 = y1 - topMin;

      var _y2 = y2 - topMin;

      var _y3 = y3 - topMin;

      var _y4 = y4 - topMin;

      var canvas = this.canvas.current; //console.log(_x1,_y1,_x2,_y2,_x3,_y3,_x4,_y4);

      if (canvas.getContext) {
        //debugger;
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = 'rgba(254,180,32,0.5)';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(_x1, _y1);
        ctx.lineTo(_x2, _y2);
        ctx.lineTo(_x3, _y3);
        ctx.lineTo(_x4, _y4);
        ctx.fill();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var point = this.props.point;
      var x1 = point[0].split(',')[0];
      var y1 = point[0].split(',')[1];
      var x2 = point[1].split(',')[0];
      var y2 = point[1].split(',')[1];
      var x3 = point[2].split(',')[0];
      var y3 = point[2].split(',')[1];
      var x4 = point[3].split(',')[0];
      var y4 = point[3].split(',')[1];
      var leftMin = Math.min(x1, x2, x3, x4);
      var rightMax = Math.max(x1, x2, x3, x4);
      var topMin = Math.min(y1, y2, y3, y4);
      var bottomMax = Math.max(y1, y2, y3, y4);
      var cvsStyle = {
        position: "absolute",
        left: leftMin + "px",
        top: topMin + "px" //background:"#80008021",

      };
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("canvas", {
        ref: this.canvas,
        width: rightMax - leftMin,
        height: bottomMax - topMin,
        style: cvsStyle
      }));
    }
  }]);

  return Canvas;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // const Dynamsoft = window.Dynamsoft;


var Dynamsoft;
var scanner = null;

var Scanner =
/*#__PURE__*/
function (_React$Component4) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Scanner, _React$Component4);

  function Scanner(props) {
    var _this3;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Scanner);

    _this3 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Scanner).call(this, props));
    _this3.state = {
      resultsInfo: [],
      isOpen: false,
      resultsPoint: [],
      camera: 0,
      cameraList: [],
      isFullRegion: _this3.props.isFullRegion,
      resolution: _SettingPage__WEBPACK_IMPORTED_MODULE_12__["settingsFromPage"].resolution,
      barcodeFormat: _SettingPage__WEBPACK_IMPORTED_MODULE_12__["settingsFromPage"].barcodeformat,
      localization: _SettingPage__WEBPACK_IMPORTED_MODULE_12__["settingsFromPage"].localization,
      deblurLevel: _SettingPage__WEBPACK_IMPORTED_MODULE_12__["settingsFromPage"].deblurlevel,
      cameraOptions: null
    };
    return _this3;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Scanner, [{
    key: "showScanner",
    value: function showScanner() {
      var _this4 = this;

      var updateFrame = function updateFrame() {
        var regionScale = 1.0 * _this4.props.region / 100;
        var regionWidth = regionScale * window.innerWidth;
        var regionHeight = 0.5 * regionScale * window.innerHeight;
        var r = scanner.getResolution();
        var vW = r[0];
        var vH = r[1];
        var left, right, top, bottom;

        if (vW >= window.innerWidth) {
          //resolution > screen width, mainly mobiles
          if (regionWidth >= 250) {
            left = (window.innerWidth - regionWidth) / 2 / vW;
            right = (window.innerWidth + regionWidth) / 2 / vW;
            top = (vH - 250) / 2 / vH;
            bottom = (vH + 250) / 2 / vH;
          } else {
            left = (window.innerWidth - regionWidth) / 2 / vW;
            right = (window.innerWidth + regionWidth) / 2 / vW;
            top = (vH - regionHeight) / 2 / vH;
            bottom = (vH + regionHeight) / 2 / vH; //console.log(window.innerWidth,regionScale*window.innerWidth,regionWidth,left,right);
            // console.log("regionWidth<250 and vw>window.innerWidth");
          }
        } else if (vW < window.innerWidth) {
          //resolution > screen width, mainly pc
          if (regionWidth >= 250) {
            left = (vW - 250) / 2 / vW;
            right = (vW + 250) / 2 / vW;
            top = (vH - 250) / 2 / vH;
            bottom = (vH + 250) / 2 / vH; // console.log("regionWidth>250 and vw<window.innerWidth");
          } else {
            left = (vW - regionWidth) / 2 / vW;
            right = (vW + regionWidth) / 2 / vW;
            top = (vH - regionHeight) / 2 / vH;
            bottom = (vH + regionHeight) / 2 / vH;
          }
        }

        var settings = scanner.getRuntimeSettings();

        if (!_this4.state.isFullRegion) {
          settings.region.left = Math.round(left * 100);
          settings.region.right = Math.round(right * 100);
          settings.region.top = Math.round(top * 100);
          settings.region.bottom = Math.round(bottom * 100);
          settings.region.measuredByPercentage = 1;
          scanner.updateRuntimeSettings(settings); //console.log(scanner.getRuntimeSettings());
        } else {
          settings.region.left = 0;
          settings.region.right = 100;
          settings.region.top = 0;
          settings.region.bottom = 100;
          settings.region.measuredByPercentage = 1;
          scanner.updateRuntimeSettings(settings);
        }
      };

      Dynamsoft.BarcodeScanner.createInstance({
        intervalTime: 200,
        UIElement: document.getElementById('scanner'),
        videoSettings: {
          video: {
            width: {
              ideal: 1280
            },
            height: {
              ideal: 720
            },
            facingMode: 'environment'
          }
        },
        onFrameRead: function onFrameRead(results) {
          var resultPointsPerFrame = [];

          for (var i = 0; i < results.length; i++) {
            var result = results[i];
            resultPointsPerFrame.push(result.LocalizationResult.ResultPoints);
          }

          var resultsInfo = scanner.arrDiffCodeInfo;

          _this4.setState({
            resultsInfo: resultsInfo,
            resultsPoint: resultPointsPerFrame,
            isFullRegion: _this4.props.isFullRegion
          });

          if (scanner !== null) {
            updateFrame(); //console.log(scanner.getRuntimeSettings());
          } // updateFrame();
          //console.log(this.state.isFullRegion);

        },
        onUnduplicatedRead: function onUnduplicatedRead(txt, result) {
          console.log(result);
        }
      }).then(function (s) {
        scanner = s;
        scanner.updateVideoSettings({
          video: {
            width: _this4.state.resolution[0],
            height: _this4.state.resolution[1],
            facingMode: "environment"
          }
        });

        if (scanner._isOpen === false) {
          console.log("open!");
          scanner.show().then(function (paras) {
            // scanner.setResolution(this.state.resolution);
            var settings = scanner.getRuntimeSettings();
            settings.barcodeFormatIds = _this4.state.barcodeFormat;
            settings.localizationModes = _this4.state.localization;
            settings.deblurLevel = _this4.state.deblurLevel;
            scanner.updateRuntimeSettings(settings).then(function () {
              console.log(scanner.getRuntimeSettings());
              updateFrame();
            }).then(function () {
              scanner.getAllCameras().then(function (cameras) {
                _this4.setState({
                  cameraList: cameras,
                  cameraOptions: cameras.map(function (cameraOption, index) {
                    return __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Select"].Option, {
                      value: "camera:" + index,
                      key: cameraOption.deviceId
                    }, cameraOption.label);
                  } // <Option value={cameraOption.deviceId} key={"camera"+index}>xx</Option>
                  )
                }); // scanner.setCurrentCamera(cameras[this.state.camera].deviceId);

              });
            });
          });
        } else {
          console.log("close!");
          scanner.close();
        }
      }).then(function () {
        _this4.setState({
          isOpen: !_this4.state.isOpen
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      Dynamsoft = window.Dynamsoft;
      this.showScanner();
      console.log(this.state.barcodeFormat, this.state.cameraOptions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      scanner != null && scanner.close();
      scanner != null && scanner.destroy();
    }
  }, {
    key: "handleFullRegion",
    value: function handleFullRegion() {
      this.setState({
        isFullRegion: this.state.isFullRegion
      });
    }
  }, {
    key: "onSwitchCamera",
    value: function onSwitchCamera(value) {
      var _this5 = this;

      scanner.getAllCameras().then(function (infos) {
        // var numOfCamera = this.state.cameraList.length;
        _this5.setState({
          //camera:this.state.camera===numOfCamera-1?0:this.state.camera+1
          camera: value.split(":")[1]
        });

        return infos;
      }).then(function (infos) {
        scanner.setCurrentCamera(infos[_this5.state.camera].deviceId);
        var config = {};
        config.content = "Switch to " + infos[_this5.state.camera].label + " successfully!";
        config.icon = __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
          type: "smile",
          style: {
            color: "#FE8E14"
          }
        });
        antd__WEBPACK_IMPORTED_MODULE_9__["message"].config({
          top: window.innerHeight - 180,
          duration: 1.5
        });
        antd__WEBPACK_IMPORTED_MODULE_9__["message"].open(config);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var allCanvas = this.state.resultsPoint.map(function (eachResult, index) {
        return __jsx(Canvas, {
          key: index,
          point: eachResult
        });
      });
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("style", {
        type: "text/css"
      }, "\n                .waiting{\n                    position:absolute;\n                    left:50%;\n                    top:50%;\n                    transform:translate(-50%);\n                    color:#FE8E14;\n                    transition: opacity 1000ms ease-in;\n                }\n\n                .fade-enter.fade-enter-active {\n                    opacity:1;\n                    transition: opacity 1000ms ease-in;\n                }\n\n                .fade-enter{\n                    opacity:0;\n                }\n\n                .fade-leave{\n                    opacity: 1; \n                }\n\n                .fade-leave.fade-leave-active{\n                    opacity:0;\n                    transition: opacity 3000ms ease-in;\n                }\n                \n                .fade-appear{\n                    opacity:0;\n                }\n\n                .fade-appear.fade-appear-active {\n                    opacity: 1;\n                    transition: opacity 2000ms ease-in;\n                }\n                "), __jsx(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_10___default.a, {
        transitionName: "fade",
        transitionLeave: true,
        transitionAppear: false,
        transitionEnter: false,
        transitionAppearTimeout: 500,
        transitionLeaveTimeout: 3500,
        transitionEnterTimeout: 2500
      }, !this.state.isOpen && __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Spin"], {
        className: "waiting",
        tip: "Accessing Camera list...",
        indicator: __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
          type: "smile",
          spin: true,
          style: {
            fontSize: "3rem"
          }
        })
      })), __jsx("div", {
        id: "scanner",
        style: {
          position: "absolute",
          width: "100%"
        }
      }, __jsx("div", {
        className: "video-container"
      }, __jsx("video", {
        className: "dbrScanner-video custom-video",
        playsInline: true
      }), __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, allCanvas))), __jsx(Result, {
        resultsInfo: this.state.resultsInfo
      }), this.state.cameraList.length && __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        onChange: this.onSwitchCamera.bind(this),
        style: {
          position: "absolute",
          top: "60px",
          left: 0,
          width: "20%",
          maxWidth: 130,
          border: "0",
          color: "#FE8E14",
          opacity: "0.5"
        } // defaultValue={"camera:0"}
        // placeholder="camera"
        ,
        suffixIcon: __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
          type: "camera",
          style: {
            color: "#FE8E14"
          }
        }),
        defaultActiveFirstOption: false
      }, this.state.cameraOptions));
    }
  }]);

  return Scanner;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); //export default connect(mapStateToProps,mapDispatchsToProps)(Scanner);


/* harmony default export */ __webpack_exports__["default"] = (Scanner);


/***/ })

})
//# sourceMappingURL=index.js.6602a168f68bcd4a384f.hot-update.js.map