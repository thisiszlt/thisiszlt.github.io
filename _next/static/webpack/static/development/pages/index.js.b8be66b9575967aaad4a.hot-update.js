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
/* harmony import */ var _Scanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Scanner */ "./pages/components/Scanner.js");
/* harmony import */ var antd_lib_list_Item__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/list/Item */ "./node_modules/antd/lib/list/Item.js");
/* harmony import */ var antd_lib_list_Item__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_Item__WEBPACK_IMPORTED_MODULE_13__);







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

var Dynamsoft;
var scanner = null;

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
            loading: false
          });
        });

        _this.decodeFile(info.file.originFileObj);
      }
    });

    _this.state = {
      showFile: true,
      loading: false,
      resultsInfo: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Dynamsoft = window.Dynamsoft;
    }
  }, {
    key: "decodeFile",
    value: function decodeFile(file) {
      var _this2 = this;

      Dynamsoft.BarcodeReader.createInstance().then(function (r) {
        r.decode(file).then(function (results) {
          if (results.length > 0) {
            console.log(results);
            var txts = [];

            for (var i = 0; i < results.length; ++i) {
              txts.push(results[i].BarcodeText);
            }

            _this2.setState({
              resultsInfo: results
            });

            console.log(txts, typeof txts); //alert(txts.join("\n"));
            //this.value = '';
          } else {
            alert("No barcode found.");
            _this2.value = '';
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var uploadButton = __jsx("div", {
        className: "custom-upload-box"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
        type: this.state.loading ? 'loading' : 'plus'
      }), __jsx("div", {
        className: "ant-upload-text"
      }, "Upload"));

      var imageUrl = this.state.imageUrl;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "file-container"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["PageHeader"], {
        onBack: this.props.onBackClick,
        title: "Files"
      })), __jsx("div", {
        className: "upload-container"
      }, __jsx("div", {
        className: "upload"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Upload"], {
        name: "avatar",
        listType: "picture-card",
        showUploadList: false,
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76" //beforeUpload={beforeUpload}
        ,
        onChange: this.handleChange,
        style: {
          width: 180,
          height: 180,
          display: "table"
        }
      }, imageUrl ? __jsx("img", {
        src: imageUrl,
        alt: "avatar",
        style: {
          width: '100%'
        }
      }) : uploadButton))), this.state.resultsInfo.length && // <Result resultsInfo={this.state.resultsInfo}></Result>
      __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["List"] // header={<div>Scanning Result</div>}
      , {
        className: "decodefile-result-list",
        dataSource: this.state.resultsInfo,
        bordered: true,
        size: "small",
        renderItem: function renderItem(Item) {
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["List"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Typography"].Text, {
            mark: true
          }, [Item.BarcodeFormatString], ": "), "  ", Item.BarcodeText);
        }
      })));
    }
  }]);

  return FilePage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FilePage);

/***/ })

})
//# sourceMappingURL=index.js.b8be66b9575967aaad4a.hot-update.js.map