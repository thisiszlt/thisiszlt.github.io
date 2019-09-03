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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _static_css_FilePage_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../static/css/FilePage.css */ "./static/css/FilePage.css");
/* harmony import */ var _static_css_FilePage_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_css_FilePage_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_css_Layout_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../static/css/Layout.css */ "./static/css/Layout.css");
/* harmony import */ var _static_css_Layout_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_css_Layout_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Scanner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Scanner */ "./pages/components/Scanner.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







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
    antd__WEBPACK_IMPORTED_MODULE_10__["message"].error('You can only upload JPG/PNG file!');
  }

  var isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_10__["message"].error('Image must smaller than 2MB!');
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
      resultsInfo: []
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

            alert(txts.join("\n")); //this.value = '';
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
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        type: this.state.loading ? 'loading' : 'plus'
      }), __jsx("div", {
        className: "ant-upload-text"
      }, "Upload"));

      var imageUrl = this.state.imageUrl;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
        className: "jsx-4010772236" + " " + "file-container"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["PageHeader"], {
        onBack: this.props.onBackClick,
        title: "Files"
      })), __jsx("div", {
        className: "jsx-4010772236" + " " + "upload-container"
      }, __jsx("div", {
        className: "jsx-4010772236" + " " + "upload"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Upload"], {
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
        },
        className: "jsx-4010772236"
      }) : uploadButton))), __jsx(_Scanner__WEBPACK_IMPORTED_MODULE_13__["Result"], {
        resultsInfo: this.state.resultsInfo
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4010772236"
      }, ".file-container.jsx-4010772236{width:100%;height:100%;position:absolute;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrXFxzc3ItZGVtb1xccGFnZXNcXGNvbXBvbmVudHNcXEZpbGVQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIcUIsQUFHd0MsV0FDQyxZQUNNLGtCQUNLLHVCQUMzQiIsImZpbGUiOiJEOlxcd29ya1xcc3NyLWRlbW9cXHBhZ2VzXFxjb21wb25lbnRzXFxGaWxlUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IHsgUGFnZUhlYWRlcixVcGxvYWQsSWNvbixtZXNzYWdlfSBmcm9tICdhbnRkJztcclxuaW1wb3J0ICcuLi8uLi9zdGF0aWMvY3NzL0ZpbGVQYWdlLmNzcyc7XHJcbmltcG9ydCAnLi4vLi4vc3RhdGljL2Nzcy9MYXlvdXQuY3NzJztcclxuaW1wb3J0IHtSZXN1bHQsRWFjaFJlc3VsdH0gZnJvbSAnLi9TY2FubmVyJ1xyXG5cclxuZnVuY3Rpb24gZ2V0QmFzZTY0KGltZywgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XHJcbn1cclxuICBcclxuZnVuY3Rpb24gYmVmb3JlVXBsb2FkKGZpbGUpIHtcclxuICAgIGNvbnN0IGlzSnBnT3JQbmcgPSBmaWxlLnR5cGUgPT09ICdpbWFnZS9qcGVnJyB8fCBmaWxlLnR5cGUgPT09ICdpbWFnZS9wbmcnO1xyXG4gICAgaWYgKCFpc0pwZ09yUG5nKSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcignWW91IGNhbiBvbmx5IHVwbG9hZCBKUEcvUE5HIGZpbGUhJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDI7XHJcbiAgICBpZiAoIWlzTHQyTSkge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoJ0ltYWdlIG11c3Qgc21hbGxlciB0aGFuIDJNQiEnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0pwZ09yUG5nICYmIGlzTHQyTTtcclxufVxyXG5cclxuXHJcbnZhciBEeW5hbXNvZnQ7XHJcbmxldCBzY2FubmVyID0gbnVsbDtcclxuXHJcbmNsYXNzIEZpbGVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2hvd0ZpbGU6dHJ1ZSxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlc3VsdHNJbmZvOltdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgRHluYW1zb2Z0ID0gd2luZG93LkR5bmFtc29mdDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IGluZm8gPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgLGZpbGU6aW5mby5maWxlLm9yaWdpbkZpbGVPYmp9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XHJcbiAgICAgICAgLy8gR2V0IHRoaXMgdXJsIGZyb20gcmVzcG9uc2UgaW4gcmVhbCB3b3JsZC5cclxuICAgICAgICBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmosIGltYWdlVXJsID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbWFnZVVybCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5kZWNvZGVGaWxlKGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRlY29kZUZpbGUoZmlsZSl7XHJcbiAgICAgICAgRHluYW1zb2Z0LkJhcmNvZGVSZWFkZXIuY3JlYXRlSW5zdGFuY2UoKS50aGVuKHI9PntcclxuICAgICAgICAgICAgci5kZWNvZGUoZmlsZSkudGhlbigocmVzdWx0cyk9PntcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHh0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHRzLnB1c2gocmVzdWx0c1tpXS5CYXJjb2RlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzSW5mbzpyZXN1bHRzXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCh0eHRzLmpvaW4oXCJcXG5cIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG5cdFx0XHRcdHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIk5vIGJhcmNvZGUgZm91bmQuXCIpO1xyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZEJ1dHRvbiA9IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tdXBsb2FkLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgPEljb24gdHlwZT17dGhpcy5zdGF0ZS5sb2FkaW5nID8gJ2xvYWRpbmcnIDogJ3BsdXMnfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLXRleHRcIj5VcGxvYWQ8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCB7IGltYWdlVXJsIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIHNob3cgdGhlIGZpbGUgcGFnZSAqL31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlSGVhZGVyIG9uQmFjaz17dGhpcy5wcm9wcy5vbkJhY2tDbGlja30gdGl0bGU9XCJGaWxlc1wiICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZS1jYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1VwbG9hZExpc3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249XCJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2JlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6MTgwLGhlaWdodDoxODAsZGlzcGxheTpcInRhYmxlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlVXJsID8gPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJhdmF0YXJcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IC8+IDogdXBsb2FkQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVXBsb2FkPiAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxSZXN1bHQgcmVzdWx0c0luZm89e3RoaXMuc3RhdGUucmVzdWx0c0luZm99PjwvUmVzdWx0PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsZS1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmlsZVBhZ2U7Il19 */\n/*@ sourceURL=D:\\work\\ssr-demo\\pages\\components\\FilePage.js */"));
    }
  }]);

  return FilePage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FilePage);

/***/ })

})
//# sourceMappingURL=index.js.66f7d78aa798797ff0b8.hot-update.js.map