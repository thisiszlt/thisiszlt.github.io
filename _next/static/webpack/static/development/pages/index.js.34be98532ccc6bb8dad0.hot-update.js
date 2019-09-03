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
/* harmony import */ var antd_lib_list_Item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/list/Item */ "./node_modules/antd/lib/list/Item.js");
/* harmony import */ var antd_lib_list_Item__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_Item__WEBPACK_IMPORTED_MODULE_14__);








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
              resultsInfo: txts
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
      }) : uploadButton))), this.state.resultsInfo.length && // <Result resultsInfo={this.state.resultsInfo}></Result>
      __jsx("div", {
        style: {
          textAlign: "center"
        },
        className: "jsx-4010772236"
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["List"] // header={<div>Scanning Result</div>}
      , {
        style: {
          padding: 10,
          position: "absolute",
          bottom: 0,
          width: "100%"
        },
        dataSource: this.state.resultsInfo,
        bordered: true,
        size: "small",
        renderItem: function renderItem(Item) {
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["List"].Item, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Typography"].Text, {
            mark: true
          }), Item);
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4010772236"
      }, ".file-container.jsx-4010772236{width:100%;height:100%;position:absolute;background-color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrXFxzc3ItZGVtb1xccGFnZXNcXGNvbXBvbmVudHNcXEZpbGVQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtKcUIsQUFHd0MsV0FDQyxZQUNNLGtCQUNLLHVCQUMzQiIsImZpbGUiOiJEOlxcd29ya1xcc3NyLWRlbW9cXHBhZ2VzXFxjb21wb25lbnRzXFxGaWxlUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IHsgUGFnZUhlYWRlcixVcGxvYWQsSWNvbixtZXNzYWdlLExpc3QsVHlwb2dyYXBoeX0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCAnLi4vLi4vc3RhdGljL2Nzcy9GaWxlUGFnZS5jc3MnO1xyXG5pbXBvcnQgJy4uLy4uL3N0YXRpYy9jc3MvTGF5b3V0LmNzcyc7XHJcbmltcG9ydCB7UmVzdWx0LEVhY2hSZXN1bHR9IGZyb20gJy4vU2Nhbm5lcidcclxuaW1wb3J0IEl0ZW0gZnJvbSAnYW50ZC9saWIvbGlzdC9JdGVtJztcclxuXHJcbmZ1bmN0aW9uIGdldEJhc2U2NChpbWcsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBjYWxsYmFjayhyZWFkZXIucmVzdWx0KSk7XHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWcpO1xyXG59XHJcbiAgXHJcbmZ1bmN0aW9uIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgICBjb25zdCBpc0pwZ09yUG5nID0gZmlsZS50eXBlID09PSAnaW1hZ2UvanBlZycgfHwgZmlsZS50eXBlID09PSAnaW1hZ2UvcG5nJztcclxuICAgIGlmICghaXNKcGdPclBuZykge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IoJ1lvdSBjYW4gb25seSB1cGxvYWQgSlBHL1BORyBmaWxlIScpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyO1xyXG4gICAgaWYgKCFpc0x0Mk0pIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKCdJbWFnZSBtdXN0IHNtYWxsZXIgdGhhbiAyTUIhJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNKcGdPclBuZyAmJiBpc0x0Mk07XHJcbn1cclxuXHJcblxyXG52YXIgRHluYW1zb2Z0O1xyXG5sZXQgc2Nhbm5lciA9IG51bGw7XHJcblxyXG5jbGFzcyBGaWxlUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHNob3dGaWxlOnRydWUsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICByZXN1bHRzSW5mbzpcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgRHluYW1zb2Z0ID0gd2luZG93LkR5bmFtc29mdDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IGluZm8gPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgLGZpbGU6aW5mby5maWxlLm9yaWdpbkZpbGVPYmp9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XHJcbiAgICAgICAgLy8gR2V0IHRoaXMgdXJsIGZyb20gcmVzcG9uc2UgaW4gcmVhbCB3b3JsZC5cclxuICAgICAgICBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmosIGltYWdlVXJsID0+XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbWFnZVVybCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5kZWNvZGVGaWxlKGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRlY29kZUZpbGUoZmlsZSl7XHJcbiAgICAgICAgRHluYW1zb2Z0LkJhcmNvZGVSZWFkZXIuY3JlYXRlSW5zdGFuY2UoKS50aGVuKHI9PntcclxuICAgICAgICAgICAgci5kZWNvZGUoZmlsZSkudGhlbigocmVzdWx0cyk9PntcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHh0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHRzLnB1c2gocmVzdWx0c1tpXS5CYXJjb2RlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzSW5mbzp0eHRzXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0eHRzLHR5cGVvZiB0eHRzKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2FsZXJ0KHR4dHMuam9pbihcIlxcblwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcblx0XHRcdFx0e1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTm8gYmFyY29kZSBmb3VuZC5cIik7XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlID0gJyc7XHJcblx0XHRcdFx0fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkQnV0dG9uID0gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS11cGxvYWQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPXt0aGlzLnN0YXRlLmxvYWRpbmcgPyAnbG9hZGluZycgOiAncGx1cyd9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlVwbG9hZDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHsgaW1hZ2VVcmwgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIHNob3cgdGhlIGZpbGUgcGFnZSAqL31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWdlSGVhZGVyIG9uQmFjaz17dGhpcy5wcm9wcy5vbkJhY2tDbGlja30gdGl0bGU9XCJGaWxlc1wiICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImF2YXRhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249XCJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9iZWZvcmVVcGxvYWQ9e2JlZm9yZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6MTgwLGhlaWdodDoxODAsZGlzcGxheTpcInRhYmxlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2VVcmwgPyA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cImF2YXRhclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gLz4gOiB1cGxvYWRCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVXBsb2FkPiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnJlc3VsdHNJbmZvLmxlbmd0aCYmXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gPFJlc3VsdCByZXN1bHRzSW5mbz17dGhpcy5zdGF0ZS5yZXN1bHRzSW5mb30+PC9SZXN1bHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlYWRlcj17PGRpdj5TY2FubmluZyBSZXN1bHQ8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzoxMCxwb3NpdGlvbjpcImFic29sdXRlXCIsYm90dG9tOjAsd2lkdGg6XCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlID0ge3RoaXMuc3RhdGUucmVzdWx0c0luZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e0l0ZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkuVGV4dCBtYXJrPnt9PC9UeXBvZ3JhcGh5LlRleHQ+e0l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbGUtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVQYWdlOyJdfQ== */\n/*@ sourceURL=D:\\work\\ssr-demo\\pages\\components\\FilePage.js */"));
    }
  }]);

  return FilePage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FilePage);

/***/ })

})
//# sourceMappingURL=index.js.34be98532ccc6bb8dad0.hot-update.js.map