webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/Layout.js":
/*!************************************!*\
  !*** ./pages/components/Layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_css_Layout_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/css/Layout.css */ "./static/css/Layout.css");
/* harmony import */ var _static_css_Layout_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_css_Layout_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _SettingPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SettingPage */ "./pages/components/SettingPage.js");
/* harmony import */ var _FilePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FilePage */ "./pages/components/FilePage.js");
/* harmony import */ var _Scanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Scanner */ "./pages/components/Scanner.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







function RegionBtn(props) {
  return __jsx("label", {
    className: "region",
    onClick: props.handleRegion
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    type: props.isFullRegion ? "fullscreen-exit" : "fullscreen",
    style: {
      fontSize: "2rem",
      color: "#FE8E14"
    }
  }));
}

function ScannerArea(props) {
  return __jsx("div", {
    className: "scanner-container"
  }, __jsx("div", {
    className: "frame",
    style: {
      width: props.region + "%",
      height: props.region + "%",
      maxWidth: "250px",
      maxHeight: "250px"
    }
  }, __jsx("label", {
    className: "flashlight"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    type: "funnel-plot",
    style: {
      fontSize: "2rem",
      color: "#FE8E14"
    }
  }))), __jsx("div", {
    className: "tip-info"
  }, __jsx("p", null, "Put the code in the box and scan it automatically.")));
}

var Body =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Body, _React$Component);

  function Body(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Body);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Body).call(this, props));
    _this.state = {
      isFullRegion: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Body, [{
    key: "handleRegion",
    value: function handleRegion() {
      this.setState({
        isFullRegion: !this.state.isFullRegion
      });
    }
  }, {
    key: "render",
    value: function render() {
      var regionSize = 60;
      return __jsx("div", {
        className: "home-screen"
      }, __jsx(_Scanner__WEBPACK_IMPORTED_MODULE_10__["default"], {
        region: regionSize,
        isFullRegion: this.state.isFullRegion
      }), !this.state.isFullRegion && __jsx(ScannerArea, {
        region: regionSize
      }), __jsx("div", {
        className: "dynam-info"
      }, __jsx("a", {
        href: "https://www.dynamsoft.com"
      }, __jsx("img", {
        src: "../static/img/logo-dynamsoft-blackBg-190x47.png",
        alt: "logo"
      }))), __jsx(RegionBtn, {
        handleRegion: this.handleRegion.bind(this),
        isFullRegion: this.state.isFullRegion
      }));
    }
  }]);

  return Body;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var clicks = [];
var timeout;

var Main =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Main, _React$Component2);

  function Main(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Main);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Main).call(this, props));
    _this2.state = {
      isShowSettingPage: false,
      isShowFilePage: false,
      isFullScreen: false,
      isFullRegion: false,
      settingDisplayStyle: {
        display: "none"
      },
      fileDisplayStyle: {
        display: "none"
      }
    };
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Main, [{
    key: "handleRegion",
    value: function handleRegion() {
      this.setState({
        isFullRegion: !this.state.isFullRegion
      });
    }
  }, {
    key: "handleShowSettingPage",
    value: function handleShowSettingPage() {
      this.setState({
        isShowSettingPage: !this.state.isShowSettingPage,
        settingDisplayStyle: this.state.settingDisplayStyle.display === "none" ? {
          display: "block"
        } : {
          display: "none"
        }
      });
    }
  }, {
    key: "handleShowFilePage",
    value: function handleShowFilePage() {
      this.setState({
        isShowFilePage: !this.state.isShowFilePage,
        fileDisplayStyle: this.state.fileDisplayStyle.display === "none" ? {
          display: "block"
        } : {
          display: "none"
        }
      });
    }
  }, {
    key: "switchFullScreen",
    value: function switchFullScreen() {
      if (!this.state.isFullScreen) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else {
          document.documentElement.msRequestFullscreen();
        } //document.documentElement.requestFullscreen(); 

      } else document.exitFullscreen();

      this.setState({
        isFullScreen: !this.state.isFullScreen
      });
    }
  }, {
    key: "fullSceenClickHandler",
    value: function fullSceenClickHandler(event) {
      var _this3 = this;

      event.preventDefault();
      clicks.push(new Date().getTime());
      window.clearTimeout(timeout);
      timeout = window.setTimeout(function () {
        if (clicks.length > 1 && clicks[clicks.length - 1] - clicks[clicks.length - 2] < 250) {
          _this3.switchFullScreen();
        }
      }, 250);
    }
  }, {
    key: "render",
    value: function render() {
      var regionSize = 60;

      var home = __jsx("div", {
        className: "home-screen"
      }, __jsx(_Scanner__WEBPACK_IMPORTED_MODULE_10__["default"], {
        region: regionSize,
        isFullRegion: this.state.isFullRegion
      }), !this.state.isFullRegion && __jsx(ScannerArea, {
        region: regionSize
      }), __jsx("div", {
        className: "dynam-info"
      }, __jsx("a", {
        href: "https://www.dynamsoft.com"
      }, __jsx("img", {
        src: "../static/img/logo-dynamsoft-blackBg-190x47.png",
        alt: "logo"
      }))), __jsx(RegionBtn, {
        handleRegion: this.handleRegion.bind(this),
        isFullRegion: this.state.isFullRegion
      }));

      var extra = __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
        className: "settingBtn-container"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "setting",
        style: {
          fontSize: "2.5rem",
          color: "#FE8E14"
        },
        onClick: this.handleShowSettingPage.bind(this)
      })), __jsx("div", {
        className: "double-click"
      }, __jsx("label", {
        onClick: this.fullSceenClickHandler.bind(this)
      }, "\u53CC\u51FB", this.state.isFullScreen && "退出", "\u5168\u5C4F")), __jsx("div", {
        className: "selImgBtn-container"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "plus",
        style: {
          fontSize: "2.5rem",
          color: "#FE8E14"
        },
        onClick: this.handleShowFilePage.bind(this)
      })), __jsx("div", {
        style: this.state.settingDisplayStyle
      }, __jsx(_SettingPage__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onBackClick: this.handleShowSettingPage.bind(this)
      })), this.state.isShowFilePage && __jsx("div", {
        style: this.state.fileDisplayStyle
      }, __jsx(_FilePage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onBackClick: this.handleShowFilePage.bind(this)
      })));

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, this.state.isShowSettingPage ? null : home);
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var Layout =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component3);

  function Layout(props) {
    var _this4;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this4 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
    _this4.state = {
      isOpen: false,
      isShow: true
    };
    return _this4;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "handleShow",
    value: function handleShow() {
      this.setState({
        isShow: !this.state.isShow
      });
      console.log(this.state.isShow);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "wrap-container"
      }, this.state.isShow && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(Main, null)));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.940fa9f537bfdcea008a.hot-update.js.map