webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/FilePage.js":
/*!**************************************!*\
  !*** ./pages/components/FilePage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _static_css_FilePage_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/css/FilePage.css */ "./static/css/FilePage.css");
/* harmony import */ var _static_css_FilePage_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_css_FilePage_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_css_Layout_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../static/css/Layout.css */ "./static/css/Layout.css");
/* harmony import */ var _static_css_Layout_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_css_Layout_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _SettingPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SettingPage */ "./pages/components/SettingPage.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  var isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    antd__WEBPACK_IMPORTED_MODULE_9__["message"].error('You can only upload JPG/PNG file!');
  }

  var isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_9__["message"].error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
}

function isLink(possibleLink) {
  if (!possibleLink.startsWith('http') && (possibleLink.startsWith('www') || -1 !== possibleLink.indexOf('.com') || -1 !== possibleLink.indexOf('.net') || -1 !== possibleLink.indexOf('.org') || -1 !== possibleLink.indexOf('.edu'))) {
    return true;
  } else {
    return false;
  }
}

var Dynamsoft;
var reader;

var FilePage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FilePage, _React$Component);

  function FilePage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FilePage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FilePage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (info) {
      // console.log(info.file.originFileObj);
      if (info.file.status === 'uploading') {
        _this.setState({
          loading: true,
          file: info.file.originFileObj
        });

        return;
      }

      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          return _this.setState({
            imageUrl: imageUrl,
            loading: false,
            isloadingNewFile: true
          });
        });

        _this.decodeFile(info.file.originFileObj);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "copyScannerResult", function (e) {
      var kUtil = window.kUtil;
      kUtil.copyToClipBoard(e.target.innerText); //console.log(e.target.innerText);

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

    _this.state = {
      showFile: true,
      loading: false,
      resultsInfo: "",
      barcodeFormat: _SettingPage__WEBPACK_IMPORTED_MODULE_12__["settingsFromPage"].barcodeformat,
      localization: _SettingPage__WEBPACK_IMPORTED_MODULE_12__["settingsFromPage"].localization,
      deblurLevel: _SettingPage__WEBPACK_IMPORTED_MODULE_12__["settingsFromPage"].deblurlevel,
      isloadingNewFile: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Dynamsoft = window.Dynamsoft;
      Dynamsoft.BarcodeReader.createInstance().then(function (r) {
        reader = r;
      });
      console.log(this.state.barcodeFormat);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      reader != undefined && reader.destroy();
    }
  }, {
    key: "onSelectNewFile",
    value: function onSelectNewFile() {
      this.setState({
        isloadingNewFile: false
      });
      console.log("this");
    }
  }, {
    key: "decodeFile",
    value: function decodeFile(file) {
      var _this2 = this;

      var config = {};
      antd__WEBPACK_IMPORTED_MODULE_9__["message"].config({
        top: window.innerHeight / 2,
        duration: 2
      });
      var settings = reader.getRuntimeSettings();
      settings.test = "tst";
      settings.barcodeFormatIds = this.state.barcodeFormat;
      settings.localizationModes = this.state.localization;
      settings.deblurLevel = this.state.deblurLevel;
      console.log(settings);
      reader.updateRuntimeSettings(settings).then(function () {
        console.log(reader.getRuntimeSettings());
        reader.decode(file).then(function (results) {
          if (results.length > 0) {
            console.log(results);
            var txts = [];

            for (var i = 0; i < results.length; ++i) {
              txts.push(results[i].BarcodeText);
            }

            _this2.setState({
              resultsInfo: results
            });

            config.content = "Found " + results.length + " barcode!";
            config.icon = __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
              type: "check",
              style: {
                color: "#FE8E14"
              }
            });
            antd__WEBPACK_IMPORTED_MODULE_9__["message"].open(config);
          } else {
            config.content = "No barcode found!";
            config.icon = __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
              type: "close",
              style: {
                color: "#FE8E14"
              }
            });
            antd__WEBPACK_IMPORTED_MODULE_9__["message"].open(config);

            _this2.setState({
              resultsInfo: ""
            });
          }
        })["catch"](function (e) {
          config.content = "Not supported image file!";
          config.icon = __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
            type: "frown",
            style: {
              color: "#FE8E14"
            }
          });
          antd__WEBPACK_IMPORTED_MODULE_9__["message"].open(config);
          console.log(e);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var uploadButton = __jsx("div", {
        className: "custom-upload-box"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: this.state.loading ? 'loading' : 'plus'
      }), __jsx("div", {
        className: "ant-upload-text"
      }, "Upload"));

      var imageUrl = this.state.imageUrl;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, this.state.resultsInfo.length && __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["List"] // header={<div>Scanning Result</div>}
      , {
        className: "decodefile-result-list",
        dataSource: this.state.resultsInfo,
        bordered: true,
        size: "small",
        renderItem: function renderItem(Item) {
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
            style: {
              display: "list-item"
            }
          }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Typography"].Text, null, __jsx("span", {
            style: {
              color: "#FE8E14"
            }
          }, [Item.BarcodeFormatString], ": ")), isLink(Item.BarcodeText) ? __jsx("a", {
            href: 'http://' + Item.BarcodeText,
            target: "_blank",
            style: {
              textDecoration: "underline"
            }
          }, Item.BarcodeText) : __jsx("span", {
            onClick: _this3.copyScannerResult
          }, Item.BarcodeText));
        }
      })), __jsx("div", {
        className: "file-container"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["PageHeader"], {
        onBack: this.props.onBackClick,
        title: "Files"
      })), __jsx("div", {
        className: "upload-container"
      }, __jsx("div", {
        className: "upload",
        onClick: this.onSelectNewFile.bind(this)
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Upload"], {
        name: "avatar",
        listType: "picture-card",
        showUploadList: false,
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76" //beforeUpload={beforeUpload}
        ,
        onChange: this.handleChange,
        supportServerRender: true,
        style: {
          width: 180,
          height: 180,
          display: "table"
        }
      }, this.state.isloadingNewFile && imageUrl ? __jsx("img", {
        src: imageUrl,
        alt: "avatar",
        style: {
          width: '100%'
        }
      }) : uploadButton))));
    }
  }]);

  return FilePage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FilePage);

/***/ })

})
//# sourceMappingURL=index.js.4fd727059fe2aa75d0c5.hot-update.js.map